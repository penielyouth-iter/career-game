import { doc, getDoc, onSnapshot, serverTimestamp, setDoc, type Unsubscribe } from "firebase/firestore";
import { defaultConfig, newGame, playerSlots } from "@/lib/game-data";
import { clampEffectValue, normalizeEffects, normalizePositiveEffects } from "@/lib/effect-rules";
import type { Card, CharacterConfig, Effects, GameConfig, GameState, PlayerState, StatKey } from "@/lib/types";
import { firebaseDb } from "@/lib/firebase-client";

const CONFIG_PATH = ["career-game", "config"] as const;
const GAME_PATH = ["career-game", "game"] as const;
const statKeys: StatKey[] = ["experience", "money"];
const legacyCellDescriptions = new Set([
  "路過時獲得全體相同的經驗值與金錢",
  "抽角色專屬機會卡",
  "讀到一本有幫助的書，經驗值 +20",
  "抽角色專屬命運卡",
  "全體原地跑或開合跳 20 秒，經驗值 +20",
  "和夥伴交換想法，經驗值 +20",
  "太累需要休息，下回合暫停一次",
  "金錢 +50",
  "把 30 金幣分給一位玩家，分享祝福",
  "滑手機太久，倒退 2 格",
  "認真學到新的知識，經驗值 +30",
  "得到支持和方向，經驗值 +30",
  "和重要的人聊聊天，經驗值 +20",
  "遇到小挫折，倒退 3 格",
  "幫忙做一份短工作，金錢 +50",
  "有人支持你買需要的用品，金錢 +30",
]);

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function normalizeCard(card: Card, characterId: string): Card {
  return {
    ...card,
    characterId,
    effects: normalizeEffects(card.effects),
    successEffects: normalizeEffects(card.successEffects),
    failureEffects: normalizeEffects(card.failureEffects),
    optionA: card.optionA ? { ...card.optionA, effects: normalizeEffects(card.optionA.effects) || {} } : undefined,
    optionB: card.optionB ? { ...card.optionB, effects: normalizeEffects(card.optionB.effects) || {} } : undefined,
  };
}

function normalizeCharacter(character: CharacterConfig): CharacterConfig {
  const builtIn = defaultConfig.characters.find((item) => item.id === character.id);
  const stageIntros = character.stageIntros?.length ? character.stageIntros : builtIn?.stageIntros || [];
  return {
    id: character.id,
    name: character.name,
    job: character.job,
    icon: character.icon,
    color: character.color,
    initial: {
      experience: Math.max(0, Number(character.initial?.experience) || 0),
      money: Math.max(0, Number(character.initial?.money) || 0),
    },
    titles: [...(character.titles || [])].slice(0, 4),
    stageIntros: stageIntros.slice(0, 4),
    milestones: [...(character.milestones || [])].slice(0, 4),
    cards: (character.cards || []).map((card) => normalizeCard(card, character.id)),
  };
}

function normalizeStageThresholds(input: unknown): number[] {
  const values = Array.isArray(input) ? input.map(Number) : defaultConfig.rules.stageThresholds;
  const [stage2, stage3, stage4, rawFinish] = [...values, ...defaultConfig.rules.stageThresholds]
    .slice(0, 4)
    .map((value) => Math.max(1, Math.floor(Number(value) || 0)));
  const finish = rawFinish === 500 || rawFinish === 700 ? defaultConfig.rules.stageThresholds[3] : rawFinish;
  return [
    stage2,
    Math.max(stage3, stage2 + 1),
    Math.max(stage4, Math.max(stage3, stage2 + 1) + 1),
    Math.max(finish, Math.max(stage4, Math.max(stage3, stage2 + 1) + 1) + 1),
  ];
}

function normalizeRules(raw: Partial<GameConfig>): GameConfig["rules"] {
  return {
    stageThresholds: normalizeStageThresholds(raw.rules?.stageThresholds),
    startReward: normalizePositiveEffects(raw.rules?.startReward, defaultConfig.rules.startReward),
    startingMoney: Math.max(0, Math.floor(Number(raw.rules?.startingMoney ?? defaultConfig.rules.startingMoney) || 0)),
  };
}

function normalizeCells(raw: Partial<GameConfig>): GameConfig["cells"] {
  const source = raw.cells?.length ? raw.cells : defaultConfig.cells;
  return source.map((cell) => {
    const id = Math.max(0, Number(cell.id) || 0);
    const builtIn = defaultConfig.cells.find((item) => item.id === id);
    const description = !cell.description || legacyCellDescriptions.has(cell.description)
      ? builtIn?.description || cell.description || ""
      : cell.description;
    return {
      id,
      type: cell.type || "blank",
      label: cell.label || builtIn?.label || "",
      icon: cell.icon || builtIn?.icon || "",
      description,
      ...(normalizeEffects(cell.effects) ? { effects: normalizeEffects(cell.effects) } : {}),
      ...(cell.skip ? { skip: Math.max(0, Number(cell.skip) || 0) } : {}),
      ...(cell.move ? { move: Math.max(-6, Math.min(6, Math.floor(Number(cell.move) || 0))) } : {}),
      ...(cell.choice === "charity" ? { choice: cell.choice } : {}),
    };
  });
}

export function normalizeConfig(input: unknown): GameConfig {
  const raw = (input && typeof input === "object" ? input : defaultConfig) as GameConfig;
  const characters = (raw.characters?.length ? raw.characters : defaultConfig.characters).map(normalizeCharacter);
  return {
    ...defaultConfig,
    ...raw,
    characters,
    cells: normalizeCells(raw),
    rules: normalizeRules(raw),
  };
}

function defaultPlayer(character: CharacterConfig | undefined, startingMoney: number, portraitId?: string): PlayerState {
  return {
    characterId: character?.id || "",
    portraitId,
    position: 0,
    stage: 0,
    stats: { experience: character?.initial.experience || 0, money: startingMoney },
    skipTurns: 0,
    finishedAt: null,
    finishRank: undefined,
    decks: {},
    stageIntroSeen: [],
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
    const base = defaultPlayer(character, config.rules.startingMoney, slot.portraitId);
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
      finishRank: current?.finishRank ? Math.max(1, Math.min(playerSlots.length, Number(current.finishRank) || 1)) : undefined,
      decks: current?.decks || {},
      stageIntroSeen: Array.isArray(current?.stageIntroSeen)
        ? [...new Set(current.stageIntroSeen.map(Number).filter((stage) => stage >= 1 && stage <= 4))]
        : [],
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
  const next = normalizeConfig(config);
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
