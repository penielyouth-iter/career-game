import { env } from "cloudflare:workers";
import { defaultConfig, newGame, playerSlots } from "./game-data";
import type { Card, GameConfig, GameState, PlayerState } from "./types";

async function ready(){
 await env.DB.prepare("CREATE TABLE IF NOT EXISTS app_config (id INTEGER PRIMARY KEY, version INTEGER NOT NULL DEFAULT 1, data_json TEXT NOT NULL, updated_at TEXT NOT NULL)").run();
 await env.DB.prepare("CREATE TABLE IF NOT EXISTS game_session (id TEXT PRIMARY KEY, revision INTEGER NOT NULL DEFAULT 0, state_json TEXT NOT NULL, updated_at TEXT NOT NULL)").run();
 await env.DB.prepare("CREATE TABLE IF NOT EXISTS action_log (id INTEGER PRIMARY KEY AUTOINCREMENT, action_type TEXT NOT NULL, payload_json TEXT NOT NULL, created_at TEXT NOT NULL)").run();
}
function normalizeConfig(config:GameConfig):GameConfig{
 const legacyCards=(config.cards||[]) as Card[];
 const existingIds=new Set(config.characters.map(character=>character.id));
 const shouldRefreshZhang=(config.dataRevision??0)<12;
 const shouldRefreshRubio=(config.dataRevision??0)<13;
 const shouldRefreshEsports=(config.dataRevision??0)<14;
 const mergedCharacters=[
  ...config.characters,
  ...defaultConfig.characters.filter(character=>!existingIds.has(character.id)),
 ];
 const defaultStart=defaultConfig.cells.find(cell=>cell.id===0)?.startRewards||{};
 return {
  ...config,
  dataRevision:Math.max(config.dataRevision??0,14),
  characters:mergedCharacters.map(character=>{
   const defaultCharacter=defaultConfig.characters.find(item=>item.id===character.id);
   const next=(shouldRefreshZhang&&character.id==="zhang"&&defaultCharacter)||(shouldRefreshRubio&&character.id==="rubio"&&defaultCharacter)||(shouldRefreshEsports&&character.id==="esports"&&defaultCharacter)?defaultCharacter:character;
   return {
    ...next,
    cards:(next.cards?.length?next.cards:legacyCards.filter(card=>card.characterId===next.id)).map(card=>({...card,characterId:card.characterId||next.id})),
   };
  }),
  cells:config.cells.map(cell=>cell.id===0?{...cell,startRewards:{...defaultStart,...cell.startRewards}}:cell),
  cards:undefined,
	 };
}
function normalizeGameState(state:GameState,config:GameConfig):{state:GameState;changed:boolean}{
 const validCharacters=config.characters.filter(character=>character.id);
 const validIds=new Set(validCharacters.map(character=>character.id));
 const oldPlayers=state.players||{};
 const oldOrder=state.turnOrder?.length?state.turnOrder:Object.keys(oldPlayers);
 const selected:string[]=[];
 for(const key of oldOrder){
  const player=oldPlayers[key];
  const characterId=player?.characterId||key;
  if(validIds.has(characterId)&&!selected.includes(characterId))selected.push(characterId);
 }
 for(const character of validCharacters){
  if(selected.length>=playerSlots.length)break;
  if(!selected.includes(character.id))selected.push(character.id);
 }
 const players:Record<string,PlayerState>={};
 for(const [index,slot] of playerSlots.entries()){
  const character=validCharacters.find(item=>item.id===selected[index])||validCharacters[0];
  const oldKey=oldOrder[index];
  const old=oldPlayers[oldKey]||oldPlayers[character?.id||""];
  const canPreserve=old&&old.characterId===character?.id;
  players[slot.id]={
   characterId:character?.id||"",
   portraitId:old?.portraitId||slot.portraitId,
   position:canPreserve?old.position:0,
   stage:canPreserve?old.stage:0,
   stats:canPreserve?old.stats:{...(character?.initial||{experience:0,money:0})},
   skipTurns:canPreserve?old.skipTurns:0,
   finishedAt:canPreserve?old.finishedAt:null,
   decks:canPreserve?old.decks:{},
  };
 }
 const next={...state,turnOrder:playerSlots.map(slot=>slot.id),players,turnIndex:Math.min(state.turnIndex||0,playerSlots.length-1)};
 const changed=JSON.stringify({turnOrder:state.turnOrder,players:state.players,turnIndex:state.turnIndex})!==JSON.stringify({turnOrder:next.turnOrder,players:next.players,turnIndex:next.turnIndex});
 return{state:next,changed};
}
export async function getConfig():Promise<{config:GameConfig;version:number}>{
 await ready(); const row=await env.DB.prepare("SELECT data_json,version FROM app_config WHERE id=1").first<{data_json:string;version:number}>();
 if(row){
  const config=JSON.parse(row.data_json) as GameConfig;
  if((config.dataRevision??0)<14||config.cards||!config.characters.some(character=>character.id==="esports")){
   const next=normalizeConfig((config.dataRevision??0)<7?defaultConfig:config);
   const now=new Date().toISOString();
   await env.DB.prepare("UPDATE app_config SET version=version+1,data_json=?,updated_at=? WHERE id=1").bind(JSON.stringify(next),now).run();
   return{config:next,version:row.version+1};
  }
  return{config:normalizeConfig(config),version:row.version};
 }
 const now=new Date().toISOString(); await env.DB.prepare("INSERT INTO app_config(id,version,data_json,updated_at) VALUES(1,1,?,?)").bind(JSON.stringify(defaultConfig),now).run();
 return{config:defaultConfig,version:1};
}
export async function saveConfig(config:GameConfig){await ready();const now=new Date().toISOString();await env.DB.prepare("INSERT INTO app_config(id,version,data_json,updated_at) VALUES(1,1,?,?) ON CONFLICT(id) DO UPDATE SET version=version+1,data_json=excluded.data_json,updated_at=excluded.updated_at").bind(JSON.stringify(normalizeConfig(config)),now).run();return getConfig()}
export async function getGame():Promise<{state:GameState;revision:number}>{
 await ready();const row=await env.DB.prepare("SELECT state_json,revision FROM game_session WHERE id=?").bind("current").first<{state_json:string;revision:number}>();
 if(row){
  const state=JSON.parse(row.state_json) as GameState;
  const sample=Object.values(state.players||{})[0];
  const {config}=await getConfig();
	  if(!(sample?.stats&&"experience" in sample.stats&&"money" in sample.stats)){const next=newGame(config);await saveGame(next,"migrate-v8");return getGame();}
	  const normalized=normalizeGameState(state,config);
	  if(normalized.changed){await saveGame(normalized.state,"sync-players");return getGame();}
	  return{state:normalized.state,revision:row.revision};
 }
 const {config}=await getConfig();const state=newGame(config);const now=new Date().toISOString();await env.DB.prepare("INSERT INTO game_session(id,revision,state_json,updated_at) VALUES(?,0,?,?)").bind("current",JSON.stringify(state),now).run();return{state,revision:0};
}
export async function saveGame(state:GameState,action="save"){await ready();state.lastUpdated=new Date().toISOString();await env.DB.prepare("INSERT INTO game_session(id,revision,state_json,updated_at) VALUES(?,1,?,?) ON CONFLICT(id) DO UPDATE SET revision=revision+1,state_json=excluded.state_json,updated_at=excluded.updated_at").bind("current",JSON.stringify(state),state.lastUpdated).run();await env.DB.prepare("INSERT INTO action_log(action_type,payload_json,created_at) VALUES(?,?,?)").bind(action,"{}",state.lastUpdated).run();return getGame()}
export async function resetGame(){await ready();const {config}=await getConfig();const state=newGame(config);await env.DB.prepare("DELETE FROM game_session WHERE id=?").bind("current").run();return saveGame(state,"reset")}

