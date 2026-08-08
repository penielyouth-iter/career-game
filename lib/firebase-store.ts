import { doc, getDoc, onSnapshot, serverTimestamp, setDoc, type Unsubscribe } from "firebase/firestore";
import { defaultConfig, newGame, playerSlots } from "@/lib/game-data";
import type { CharacterConfig, GameConfig, GameState, PlayerState, StatKey } from "@/lib/types";
import { firebaseDb } from "@/lib/firebase-client";

const CONFIG_PATH = ["career-game", "config"] as const;
const GAME_PATH = ["career-game", "game"] as const;
const statKeys: StatKey[] = ["experience", "money"];

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function normalizeCharacter(character: CharacterConfig): CharacterConfig {
  return {
    ...character,
    initial: {
      experience: Math.max(0, Number(character.initial?.experience) || 0),
      money: Math.max(0, Number(character.initial?.money) || 0),
    },
    titles: [...(character.titles || [])].slice(0, 4),
    milestones: [...(character.milestones || [])].slice(0, 4),
    cards: (character.cards || []).map((card) => ({ ...card, characterId: character.id })),
  };
}

export function normalizeConfig(input: unknown): GameConfig {
  const raw = (input && typeof input === "object" ? input : defaultConfig) as GameConfig;
  const characters = (raw.characters?.length ? raw.characters : defaultConfig.characters).map(normalizeCharacter);
  return {
    ...defaultConfig,
    ...raw,
    characters,
    cells: raw.cells?.length ? raw.cells : defaultConfig.cells,
  };
}

function defaultPlayer(character: CharacterConfig | undefined, portraitId?: string): PlayerState {
  return {
    characterId: character?.id || "",
    portraitId,
    position: 0,
    stage: 0,
    stats: { experience: character?.initial.experience || 0, money: character?.initial.money || 0 },
    skipTurns: 0,
    finishedAt: null,
    decks: {},
  };
}

export function normalizeGameState(input: unknown, config: GameConfig): GameState {
  const fallback = newGame(config);
  const raw = (input && typeof input === "object" ? input : fallback) as GameState;
  const characterIds = new Set(config.characters.map((character) => character.id));
  const players: GameState["players"] = {};

  for (const [index, slot] of playerSlots.entries()) {
    const current = raw.players?.[slot.id];
    const character = characterIds.has(current?.characterId || "")
      ? config.characters.find((item) => item.id === current?.characterId)
      : config.characters[index] || config.characters[0];
    const base = defaultPlayer(character, slot.portraitId);
    players[slot.id] = {
      ...base,
      ...current,
      characterId: character?.id || base.characterId,
      portraitId: current?.portraitId || slot.portraitId,
      position: Math.max(0, Math.min(19, Number(current?.position ?? base.position))),
      stage: Math.max(0, Math.min(4, Number(current?.stage ?? base.stage))),
      stats: {
        experience: Math.max(0, Number(current?.stats?.experience ?? base.stats.experience)),
        money: Math.max(0, Number(current?.stats?.money ?? base.stats.money)),
      },
      skipTurns: Math.max(0, Number(current?.skipTurns ?? 0)),
      finishedAt: current?.finishedAt ?? null,
      decks: current?.decks || {},
    };
  }

  return {
    ...fallback,
    ...raw,
    turnOrder: raw.turnOrder?.filter((id) => players[id])?.length === playerSlots.length ? raw.turnOrder : fallback.turnOrder,
    turnIndex: Math.max(0, Math.min(playerSlots.length - 1, Number(raw.turnIndex ?? 0))),
    round: Math.max(1, Number(raw.round ?? 1)),
    players,
    log: Array.isArray(raw.log) ? raw.log.slice(0, 40) : fallback.log,
    lastUpdated: typeof raw.lastUpdated === "string" ? raw.lastUpdated : new Date().toISOString(),
  };
}

export async function loadRemoteConfig(): Promise<GameConfig> {
  const snapshot = await getDoc(doc(firebaseDb(), ...CONFIG_PATH));
  return normalizeConfig(snapshot.exists() ? snapshot.data().config : defaultConfig);
}

export async function loadRemoteGame(config: GameConfig): Promise<GameState> {
  const snapshot = await getDoc(doc(firebaseDb(), ...GAME_PATH));
  return normalizeGameState(snapshot.exists() ? snapshot.data().state : newGame(config), config);
}

export function subscribeRemoteConfig(onValue: (config: GameConfig) => void, onError: (error: Error) => void): Unsubscribe {
  return onSnapshot(
    doc(firebaseDb(), ...CONFIG_PATH),
    (snapshot) => onValue(normalizeConfig(snapshot.exists() ? snapshot.data().config : defaultConfig)),
    onError,
  );
}

export function subscribeRemoteGame(config: GameConfig, onValue: (state: GameState) => void, onError: (error: Error) => void): Unsubscribe {
  return onSnapshot(
    doc(firebaseDb(), ...GAME_PATH),
    (snapshot) => onValue(normalizeGameState(snapshot.exists() ? snapshot.data().state : newGame(config), config)),
    onError,
  );
}

export async function saveRemoteConfig(config: GameConfig) {
  const next = normalizeConfig({ ...config, dataRevision: (config.dataRevision || 0) + 1 });
  await setDoc(doc(firebaseDb(), ...CONFIG_PATH), { config: clone(next), updatedAt: serverTimestamp() });
  return next;
}

export async function saveRemoteGame(state: GameState, action = "save") {
  const next = { ...state, lastUpdated: new Date().toISOString() };
  for (const player of Object.values(next.players)) {
    for (const key of statKeys) player.stats[key] = Math.max(0, Number(player.stats[key]) || 0);
  }
  await setDoc(doc(firebaseDb(), ...GAME_PATH), { state: clone(next), action, updatedAt: serverTimestamp() });
  return next;
}

export async function resetRemoteGame(config: GameConfig) {
  return saveRemoteGame(newGame(config), "reset");
}
