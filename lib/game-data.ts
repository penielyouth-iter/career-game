import type { BoardCell, CharacterConfig, GameConfig, GameState, StatKey } from "./types";
import { zoeyCards } from "./zoey-cards";
import { gotoCards } from "./goto-cards";
import { zhangCards } from "./zhang-cards";
import { rubioCards } from "./rubio-cards";
import { esportsCards } from "./esports-cards";

const stats=(experience:number,money:number)=>({experience,money});
const careerTitles={
 goto:["認識程式的新手","努力練習的工程師","做出作品的高手","幫助大家的大師"],
 zoey:["第一次上台的新手","努力練習的偶像","有代表歌的歌手","用歌幫助大家的人"],
 zhang:["想開店的新手","學著帶團隊的老闆","做出好產品的老闆","幫助大家的企業家"],
 rubio:["學習關心人的新手","陪伴大家的幫手","帶領活動的牧師","幫人找到希望的老師"],
 esports:["校園遊戲高手","青訓練習生","戰隊先發隊員","世界冠軍隊長"],
};
const milestones=(job:string)=>[
 `累積 100 經驗值，進入第二階段！`,
 `累積 200 經驗值，進入第三階段！`,
 `累積 300 經驗值，進入第四階段！`,
 `累積 400 經驗值，完成${job}旅程！`,
];
const characterShells:Omit<CharacterConfig,"cards">[]=[
 {id:"goto",name:"後藤一豪",job:"工程師",instrument:"鍵盤手",icon:"🎹",color:"#72c7ff",initial:stats(0,500),titles:careerTitles.goto,milestones:milestones("工程師")},
 {id:"zoey",name:"Zoey",job:"偶像",instrument:"主唱",icon:"🎤",color:"#ff7eb6",initial:stats(0,300),titles:careerTitles.zoey,milestones:milestones("偶像")},
 {id:"zhang",name:"張玉曼",job:"企業家",instrument:"鼓手",icon:"🥁",color:"#ffb65b",initial:stats(0,100),titles:careerTitles.zhang,milestones:milestones("企業家")},
 {id:"rubio",name:"盧比歐",job:"牧師",instrument:"吉他手",icon:"🎸",color:"#8bd48b",initial:stats(0,300),titles:careerTitles.rubio,milestones:milestones("牧師")},
 {id:"esports",name:"小明",job:"電競選手",instrument:"滑鼠手",icon:"🕹️",color:"#7c8cff",initial:stats(0,300),titles:careerTitles.esports,milestones:[
  "累積 100 經驗值，進入青訓練習生階段！",
  "累積 200 經驗值，成為戰隊先發隊員！",
  "累積 300 經驗值，準備挑戰世界大賽！",
  "累積 400 經驗值，成為會鼓勵人的世界冠軍隊長！",
 ]},
];
const cells:BoardCell[]=[
 {id:0,type:"start",label:"起點",icon:"🎓",description:"路過時獲得角色專屬金錢",startRewards:{goto:200,zoey:300,zhang:400,rubio:200,esports:200}},
 {id:1,type:"chance",label:"機會",icon:"✨",description:"抽角色專屬機會卡"},
 {id:2,type:"reading",label:"閱讀",icon:"📚",description:"經驗值 +20",effects:{experience:20}},
 {id:3,type:"destiny",label:"命運",icon:"🌙",description:"抽角色專屬命運卡"},
 {id:4,type:"exercise",label:"練習",icon:"🏃",description:"全體原地跑或開合跳 20 秒，經驗值 +20",effects:{experience:20}},
 {id:5,type:"chance",label:"機會",icon:"✨",description:"抽角色專屬機會卡"},
 {id:6,type:"communication",label:"合作討論",icon:"💬",description:"經驗值 +20",effects:{experience:20}},
 {id:7,type:"sick",label:"狀態低迷",icon:"🤒",description:"暫停一回合",skip:1},
 {id:8,type:"destiny",label:"命運",icon:"🌙",description:"抽角色專屬命運卡"},
 {id:9,type:"lottery",label:"意外收入",icon:"🎟️",description:"金錢 +500",effects:{money:500}},
 {id:10,type:"fellowship",label:"團隊支持",icon:"⛪",description:"暫停一回合；經驗值 +40",effects:{experience:40},skip:1},
 {id:11,type:"phone",label:"分心拖延",icon:"📱",description:"經驗值 -20",effects:{experience:-20}},
 {id:12,type:"chance",label:"機會",icon:"✨",description:"抽角色專屬機會卡"},
 {id:13,type:"class",label:"上課進修",icon:"🧑‍🏫",description:"花 100 元購買經驗值 +30",choice:"class"},
 {id:14,type:"destiny",label:"命運",icon:"🌙",description:"抽角色專屬命運卡"},
 {id:15,type:"church",label:"教會",icon:"🕊️",description:"獲得鼓勵與方向，經驗值 +30",effects:{experience:30}},
 {id:16,type:"outing",label:"家人朋友時光",icon:"🧺",description:"經驗值 +20",effects:{experience:20}},
 {id:17,type:"fall",label:"挫折受傷",icon:"🩹",description:"經驗值 -20、金錢 -100",effects:{experience:-20,money:-100}},
 {id:18,type:"overtime",label:"加班邀請",icon:"🌃",description:"可選加班：經驗值 +20、金錢 +200",choice:"overtime"},
 {id:19,type:"quarrel",label:"合作衝突",icon:"⚡",description:"經驗值 -20",effects:{experience:-20}},
];
const cards=[...zoeyCards,...gotoCards,...zhangCards,...rubioCards,...esportsCards].filter(card=>card.contentStage<=4);
const characters:CharacterConfig[]=characterShells.map(character=>({
 ...character,
 cards:cards.filter(card=>card.characterId===character.id),
}));
export const playerSlots=[
 {id:"player-1",portraitId:"goto",label:"玩家 1"},
 {id:"player-2",portraitId:"zoey",label:"玩家 2"},
 {id:"player-3",portraitId:"zhang",label:"玩家 3"},
 {id:"player-4",portraitId:"rubio",label:"玩家 4"},
];
export const defaultConfig:GameConfig={
 title:"守護天使的生涯大冒險",
 story:"四組守護天使陪伴主角累積經驗值與金錢，走過四個職涯階段，成為帶著使命前進的專業人士。",
 characters,cells
};
export function newGame(config:GameConfig):GameState{
 const selected=config.characters.slice(0,playerSlots.length);
 return{started:false,turnOrder:playerSlots.map(slot=>slot.id),turnIndex:0,round:1,accelerated:false,players:Object.fromEntries(playerSlots.map((slot,index)=>{
  const character=selected[index]||config.characters[0];
  return[slot.id,{characterId:character?.id||"",portraitId:slot.portraitId,position:0,stage:0,stats:{...(character?.initial||stats(0,0))},skipTurns:0,finishedAt:null,decks:{}}];
 })),log:["遊戲準備完成，請選擇四個職業並設定出發順序。"],lastUpdated:new Date().toISOString()}
}
export function clampStats(v:Record<StatKey,number>){v.experience=Math.max(0,v.experience);v.money=Math.max(0,v.money);return v}
