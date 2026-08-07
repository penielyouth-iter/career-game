import type { BoardCell, Card, CharacterConfig, Effects, GameConfig, GameState, StatKey } from "./types";
import { zoeyCards } from "./zoey-cards";
import { gotoCards } from "./goto-cards";

const stats=(stamina:number,intelligence:number,eq:number,mood:number,money:number)=>({stamina,intelligence,eq,mood,money});
const thresholdSets=[
 {min:{intelligence:5,eq:3},perfect:{intelligence:7,eq:5,mood:7}},
 {min:{stamina:3,intelligence:6},perfect:{stamina:5,intelligence:8,eq:5}},
 {min:{intelligence:7,eq:5,money:300},perfect:{intelligence:9,eq:7,mood:8,money:700}},
 {min:{stamina:2,mood:4},perfect:{stamina:5,eq:6,mood:7}},
 {min:{stamina:4,intelligence:7,eq:6,mood:6},perfect:{stamina:7,intelligence:9,eq:8,mood:9}},
];
for(const threshold of thresholdSets)Object.assign(threshold,{milestoneDescription:"守護天使的陪伴，讓生涯旅程邁入下階段。",perfectReward:{money:300,mood:1},perfectDescription:"完美通關！"});
const careerTitles={
 goto:["肝 Code 實習生","菜鳥工程師","資深工程師","首席技術官","落魄工程師","公益科技大師"],
 zoey:["街頭藝人","練習生","爆紅新人王","國際巨星","失意歌后","心靈福音創作歌后"],
 zhang:["無名小卒","明日之星","新創執行長","大老闆","落魄老闆","上帝的忠心好管家"],
 rubio:["熱血神學生","傳道人","牧師","主任牧師","服事倦怠的尋道者","生命塑造心靈導師"],
};
const characters:CharacterConfig[]=[
 {id:"goto",name:"後藤一豪",job:"工程師",instrument:"KB手",icon:"🎹",color:"#72c7ff",initial:stats(2,6,2,7,500),titles:careerTitles.goto,thresholds:thresholdSets},
 {id:"zoey",name:"Zoey",job:"偶像",instrument:"主唱",icon:"🎤",color:"#ff7eb6",initial:stats(4,4,4,7,300),titles:careerTitles.zoey,thresholds:thresholdSets},
 {id:"zhang",name:"張玉曼",job:"企業家",instrument:"鼓手",icon:"🥁",color:"#ffb65b",initial:stats(7,5,2,7,100),titles:careerTitles.zhang,thresholds:thresholdSets},
 {id:"rubio",name:"盧比歐",job:"牧師",instrument:"吉他手",icon:"🎸",color:"#8bd48b",initial:stats(3,5,4,7,300),titles:careerTitles.rubio,thresholds:thresholdSets},
];
const cells:BoardCell[]=[
 {id:0,type:"start",label:"起點",icon:"🎓",description:"路過時獲得角色專屬金錢並檢查重大事件門檻",startRewards:{goto:200,zoey:300,zhang:400,rubio:200}},
 {id:1,type:"chance",label:"機會",icon:"✨",description:"抽角色專屬機會卡"},
 {id:2,type:"reading",label:"閱讀",icon:"📚",description:"智力 +1",effects:{intelligence:1}},
 {id:3,type:"destiny",label:"命運",icon:"🌙",description:"抽角色專屬命運卡"},
 {id:4,type:"exercise",label:"運動",icon:"🏃",description:"全體原地跑或開合跳 20 秒，體力 +1",effects:{stamina:1}},
 {id:5,type:"chance",label:"機會",icon:"✨",description:"抽角色專屬機會卡"},
 {id:6,type:"communication",label:"耐心溝通",icon:"💬",description:"情商 +1",effects:{eq:1}},
 {id:7,type:"sick",label:"生病",icon:"🤒",description:"暫停一回合",negative:true,skip:1},
 {id:8,type:"destiny",label:"命運",icon:"🌙",description:"抽角色專屬命運卡"},
 {id:9,type:"lottery",label:"中發票",icon:"🎟️",description:"金錢 +500、心情 +1",effects:{money:500,mood:1}},
 {id:10,type:"fellowship",label:"團契",icon:"⛪",description:"暫停一回合；體力、智力、情商 +1",effects:{stamina:1,intelligence:1,eq:1},skip:1},
 {id:11,type:"phone",label:"手機滑太久",icon:"📱",description:"智力 -1、心情 -1",effects:{intelligence:-1,mood:-1},negative:true},
 {id:12,type:"chance",label:"機會",icon:"✨",description:"抽角色專屬機會卡"},
 {id:13,type:"class",label:"上課進修",icon:"🧑‍🏫",description:"花 100 元購買一項能力 +1",choice:"class"},
 {id:14,type:"destiny",label:"命運",icon:"🌙",description:"抽角色專屬命運卡"},
 {id:15,type:"church",label:"教會",icon:"🕊️",description:"獲得平安卡，抵銷下一次負面事件"},
 {id:16,type:"outing",label:"家人朋友時光",icon:"🧺",description:"心情 +1",effects:{mood:1}},
 {id:17,type:"fall",label:"跌倒受傷",icon:"🩹",description:"體力 -1、心情 -1",effects:{stamina:-1,mood:-1},negative:true},
 {id:18,type:"overtime",label:"加班邀請",icon:"🌃",description:"可選加班：體力 -1、心情 -1、金錢 +200",choice:"overtime"},
 {id:19,type:"quarrel",label:"朋友吵架",icon:"⚡",description:"情商 -1、心情 -1",effects:{eq:-1,mood:-1},negative:true},
];
const stages=["找工作","初入職場","重大突破","人生低谷","使命大師"];
const themes:Record<string,string[]>={
 goto:["程式與面試","團隊開發","產品創新","技術危機","科技使命"],
 zoey:["舞台試鏡","表演磨練","人氣突破","演藝低潮","歌聲使命"],
 zhang:["創業起步","經營團隊","市場突破","公司危機","企業使命"],
 rubio:["呼召預備","牧養學習","事工突破","服事低谷","信仰使命"],
};
const good=["遇見貴人","勇敢接受挑戰","團隊彼此扶持","努力獲得肯定"];
const bad=["意外失誤","溝通發生誤會","身心疲憊","計畫臨時改變"];
const pos:Effects[]=[{intelligence:1,eq:1},{intelligence:2},{eq:2,money:200},{mood:2,stamina:1},{intelligence:2,eq:2,mood:1}];
const neg:Effects[]=[{mood:-1},{stamina:-1,mood:-1},{money:-200,mood:-1},{stamina:-2,mood:-2},{eq:-1,mood:-1}];
const cards:Card[]=[];
for(const c of characters) for(let s=0;s<5;s++) for(const type of ["chance","destiny"] as const) for(let i=0;i<4;i++){
 const action=(type==="chance"?good:bad)[i];
 cards.push({id:`${c.id}-${type}-${s+1}-${i+1}`,characterId:c.id,contentStage:s+1,type,
  title:`${themes[c.id][s]}・${action}`,description:`${c.name}在「${stages[s]}」旅程中，${action}。請守護天使一起討論最好的回應！`,
  effects:type==="chance"?pos[s]:neg[s],task:i===3,
  successEffects:i===3?(type==="chance"?{intelligence:2,eq:1}:{stamina:1,mood:1}):undefined,
  failureEffects:i===3?{mood:-1}:undefined});
}
const completeCards=[...cards.filter(card=>card.characterId!=="zoey"&&card.characterId!=="goto"),...zoeyCards,...gotoCards];
export const defaultConfig:GameConfig={dataRevision:6,title:"守護天使的生涯大冒險",story:"立責大學熱音社的四名夥伴即將畢業，各自踏上獨一無二的生涯旅程。主立天堂學園的實習守護天使們，要幫助他們成為頂天立地的專業人士！",characters,cells,cards:completeCards};
export function newGame(config:GameConfig):GameState{return{started:false,turnOrder:config.characters.map(c=>c.id),turnIndex:0,round:1,accelerated:false,players:Object.fromEntries(config.characters.map(c=>[c.id,{characterId:c.id,position:0,stage:0,stats:{...c.initial},skipTurns:0,peaceCards:0,finishedAt:null,decks:{}}])),log:["遊戲準備完成，請設定角色順序。"],lastUpdated:new Date().toISOString()}}
export function clampStats(v:Record<StatKey,number>){v.stamina=Math.max(0,v.stamina);v.intelligence=Math.max(0,v.intelligence);v.eq=Math.max(0,v.eq);v.mood=Math.min(10,Math.max(0,v.mood));v.money=Math.max(0,v.money);return v}

