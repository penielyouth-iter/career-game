import { env } from "cloudflare:workers";
import { defaultConfig, newGame } from "./game-data";
import type { GameConfig, GameState } from "./types";

async function ready(){
 await env.DB.prepare("CREATE TABLE IF NOT EXISTS app_config (id INTEGER PRIMARY KEY, version INTEGER NOT NULL DEFAULT 1, data_json TEXT NOT NULL, updated_at TEXT NOT NULL)").run();
 await env.DB.prepare("CREATE TABLE IF NOT EXISTS game_session (id TEXT PRIMARY KEY, revision INTEGER NOT NULL DEFAULT 0, state_json TEXT NOT NULL, updated_at TEXT NOT NULL)").run();
 await env.DB.prepare("CREATE TABLE IF NOT EXISTS action_log (id INTEGER PRIMARY KEY AUTOINCREMENT, action_type TEXT NOT NULL, payload_json TEXT NOT NULL, created_at TEXT NOT NULL)").run();
}
export async function getConfig():Promise<{config:GameConfig;version:number}>{
 await ready(); const row=await env.DB.prepare("SELECT data_json,version FROM app_config WHERE id=1").first<{data_json:string;version:number}>();
 if(row){
  const config=JSON.parse(row.data_json) as GameConfig;
  let changed=false;
  if((config.dataRevision??0)<2){
   config.cards=[...config.cards.filter(card=>card.characterId!=="zoey"),...defaultConfig.cards.filter(card=>card.characterId==="zoey")];
   config.dataRevision=2;changed=true;
  }
  if((config.dataRevision??0)<3){
   config.cards=[...config.cards.filter(card=>card.characterId!=="goto"),...defaultConfig.cards.filter(card=>card.characterId==="goto")];
   config.dataRevision=3;changed=true;
  }
  if((config.dataRevision??0)<4){
   const start=config.cells.find(cell=>cell.id===0);const defaultStart=defaultConfig.cells.find(cell=>cell.id===0);
   if(start)start.startRewards={...defaultStart?.startRewards,...start.startRewards};
   config.dataRevision=4;changed=true;
  }  if((config.dataRevision??0)<5){
   config.characters=config.characters.map(character=>({...character,titles:[...(defaultConfig.characters.find(item=>item.id===character.id)?.titles??[])]}));
   config.dataRevision=5;changed=true;
  }  if((config.dataRevision??0)<6){
   config.characters=config.characters.map(character=>{const fallback=defaultConfig.characters.find(item=>item.id===character.id);return{...character,thresholds:character.thresholds.map((threshold,index)=>{const defaults=fallback?.thresholds[index];return{...defaults,...threshold,perfectReward:{...defaults?.perfectReward,...threshold.perfectReward},milestoneDescription:threshold.milestoneDescription||"守護天使的陪伴，讓生涯旅程邁入下階段。",perfectDescription:threshold.perfectDescription||"完美通關！"}})}});
   config.cards=config.cards.map(card=>card.resolutionMode==="choice"?{...card,optionA:card.optionA?{...card.optionA,resultDescription:card.optionA.resultDescription||"真好！"}:card.optionA,optionB:card.optionB?{...card.optionB,resultDescription:card.optionB.resultDescription||"真好！"}:card.optionB}:card);
   config.dataRevision=6;changed=true;
  }  if(changed){
   const now=new Date().toISOString();
   await env.DB.prepare("UPDATE app_config SET version=version+1,data_json=?,updated_at=? WHERE id=1").bind(JSON.stringify(config),now).run();
   return{config,version:row.version+1};
  }
  return{config,version:row.version};
 }
 const now=new Date().toISOString(); await env.DB.prepare("INSERT INTO app_config(id,version,data_json,updated_at) VALUES(1,1,?,?)").bind(JSON.stringify(defaultConfig),now).run();
 return{config:defaultConfig,version:1};
}
export async function saveConfig(config:GameConfig){await ready();const now=new Date().toISOString();await env.DB.prepare("INSERT INTO app_config(id,version,data_json,updated_at) VALUES(1,1,?,?) ON CONFLICT(id) DO UPDATE SET version=version+1,data_json=excluded.data_json,updated_at=excluded.updated_at").bind(JSON.stringify(config),now).run();return getConfig()}
export async function getGame():Promise<{state:GameState;revision:number}>{
 await ready();const row=await env.DB.prepare("SELECT state_json,revision FROM game_session WHERE id=?").bind("current").first<{state_json:string;revision:number}>();
 if(row)return{state:JSON.parse(row.state_json),revision:row.revision};
 const {config}=await getConfig();const state=newGame(config);const now=new Date().toISOString();await env.DB.prepare("INSERT INTO game_session(id,revision,state_json,updated_at) VALUES(?,0,?,?)").bind("current",JSON.stringify(state),now).run();return{state,revision:0};
}
export async function saveGame(state:GameState,action="save"){await ready();state.lastUpdated=new Date().toISOString();await env.DB.prepare("INSERT INTO game_session(id,revision,state_json,updated_at) VALUES(?,1,?,?) ON CONFLICT(id) DO UPDATE SET revision=revision+1,state_json=excluded.state_json,updated_at=excluded.updated_at").bind("current",JSON.stringify(state),state.lastUpdated).run();await env.DB.prepare("INSERT INTO action_log(action_type,payload_json,created_at) VALUES(?,?,?)").bind(action,"{}",state.lastUpdated).run();return getGame()}
export async function resetGame(){await ready();const {config}=await getConfig();const state=newGame(config);await env.DB.prepare("DELETE FROM game_session WHERE id=?").bind("current").run();return saveGame(state,"reset")}

