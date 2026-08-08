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
const stageIntros={
 goto:[
  "🏫 在學校第一次學到寫程式，一豪發現小小指令也能讓電腦動起來，覺得好新奇、好好玩！",
  "💼 畢業後找了一段時間工作，一豪終於進入一家小公司，從小小軟體工程師開始練功。",
  "🧩 一豪不只會做小任務了，開始研究更大的系統、設計功能，也學著和團隊一起解決難題。",
  "🤝 一豪成為可靠的工程師專家，想把程式能力用在真正幫助人的工具上，讓科技帶來溫暖。",
 ],
 zoey:[
  "🎶 Zoey 在學校社團第一次認真學唱歌和跳舞，發現站上小舞台雖然緊張，卻也好開心！",
  "🌟 經過練習與試鏡，Zoey 成為新人練習生，開始學習唱跳、禮貌和團隊合作。",
  "🎤 Zoey 進入更專業的表演階段，開始錄音、排練正式作品，也慢慢找到自己的聲音。",
  "💖 Zoey 成為能影響大家的歌手，想用歌聲鼓勵孩子、陪伴難過的人，把舞台變成祝福。",
 ],
 zhang:[
  "🍪 張玉曼從學校園遊會和小小攤位開始，發現做生意不只是賣東西，也要學會服務客人。",
  "🧾 她開始像小老闆一樣接訂單、算成本、找夥伴分工，學著把想法變成真正的工作。",
  "🏪 玉曼的商品更受歡迎了，她開始研究品牌、品質和團隊管理，讓生意穩穩長大。",
  "🌱 玉曼成為成熟的企業家，想讓公司不只賺錢，也照顧員工、幫助社區和需要的人。",
 ],
 rubio:[
  "⛪ 盧比歐在教會和課堂中學習關心人，慢慢發現自己很喜歡陪伴需要幫助的人。",
  "🤲 他開始在教會中協助探訪、帶活動、聽大家說話，學著成為可靠的陪伴者。",
  "📖 盧比歐更深入學習牧養與帶領，開始照顧小組、安排活動，也學會面對不同人的需要。",
  "🕊️ 盧比歐成為能帶給人希望的牧師，想用溫柔、信心和行動陪更多人走過困難。",
 ],
 esports:[
  "🎮 小明在校園比賽中發現自己很會觀察和反應，也開始學習健康練習與團隊溝通。",
  "🕹️ 小明進入青訓隊，從基礎訓練、作息管理和報位溝通開始，學著像職業選手一樣努力。",
  "🏆 小明成為戰隊先發，面對正式比賽、粉絲和壓力，也更重視團隊合作。",
  "🌍 小明成為有影響力的冠軍隊長，想把健康電競和互相尊重的精神分享給更多孩子。",
 ],
};
const milestones=(job:string)=>[
 `累積 100 經驗值，進入第二階段！`,
 `累積 250 經驗值，進入第三階段！`,
 `累積 400 經驗值，進入第四階段！`,
 `累積 600 經驗值，達成${job}終極目標！`,
];
const characterShells:Omit<CharacterConfig,"cards">[]=[
 {id:"goto",name:"後藤一豪",job:"工程師",icon:"🎹",color:"#72c7ff",initial:stats(0,100),titles:careerTitles.goto,stageIntros:stageIntros.goto,milestones:milestones("工程師")},
 {id:"zoey",name:"Zoey",job:"偶像",icon:"🎤",color:"#ff7eb6",initial:stats(0,100),titles:careerTitles.zoey,stageIntros:stageIntros.zoey,milestones:milestones("偶像")},
 {id:"zhang",name:"張玉曼",job:"企業家",icon:"🥁",color:"#ffb65b",initial:stats(0,100),titles:careerTitles.zhang,stageIntros:stageIntros.zhang,milestones:milestones("企業家")},
 {id:"rubio",name:"盧比歐",job:"牧師",icon:"🎸",color:"#8bd48b",initial:stats(0,100),titles:careerTitles.rubio,stageIntros:stageIntros.rubio,milestones:milestones("牧師")},
 {id:"esports",name:"小明",job:"電競選手",icon:"🕹️",color:"#7c8cff",initial:stats(0,100),titles:careerTitles.esports,stageIntros:stageIntros.esports,milestones:[
 "累積 100 經驗值，進入青訓練習生階段！",
  "累積 250 經驗值，成為戰隊先發隊員！",
  "累積 400 經驗值，準備挑戰世界大賽！",
  "累積 600 經驗值，成為會鼓勵人的世界冠軍隊長！",
 ]},
];
const cells:BoardCell[]=[
 {id:0,type:"start",label:"起點",icon:"🎓",description:"回到出發點，整理這一圈學到的事，獲得通過起點獎勵。"},
 {id:1,type:"chance",label:"機會",icon:"✨",description:"遇到一個適合目前職涯階段的好機會，抽一張角色專屬機會卡。"},
 {id:2,type:"reading",label:"讀好書",icon:"📚",description:"讀到一本有幫助的書，學會新的想法和方法，經驗值 +20。",effects:{experience:20}},
 {id:3,type:"destiny",label:"命運",icon:"🌙",description:"旅程出現一個需要面對的狀況，抽一張角色專屬命運卡。"},
 {id:4,type:"exercise",label:"練習",icon:"🏃",description:"全體一起動一動，原地跑或開合跳 20 秒，讓身體醒過來，經驗值 +20。",effects:{experience:20}},
 {id:5,type:"chance",label:"機會",icon:"✨",description:"新的可能性出現了，看看這個職業在這一階段會遇到什麼好事。"},
 {id:6,type:"communication",label:"合作討論",icon:"💬",description:"和夥伴交換想法，聽見不同角度，找到更好的做法，經驗值 +20。",effects:{experience:20}},
 {id:7,type:"sick",label:"身體疲累",icon:"🤒",description:"最近太累了，需要停下來照顧自己；下回合輪到你時暫停一次。",skip:1},
 {id:8,type:"destiny",label:"命運",icon:"🌙",description:"職涯路上不一定都順利，抽一張命運卡，看看這次要學會什麼。"},
 {id:9,type:"lottery",label:"意外收入",icon:"🎟️",description:"剛好得到一筆小收入，可能是獎金、紅包或額外補助，金錢 +50。",effects:{money:50}},
 {id:10,type:"charity",label:"做善事",icon:"🤝",description:"看見別人需要幫忙，可以把自己的 30 金幣分給一位玩家。",choice:"charity"},
 {id:11,type:"phone",label:"分心拖延",icon:"📱",description:"滑手機太久，原本要做的事被拖慢了；請倒退 2 格重新調整。",move:-2},
 {id:12,type:"chance",label:"機會",icon:"✨",description:"又到了機會時刻，抽一張符合目前角色階段的機會卡。"},
 {id:13,type:"study",label:"學習知識",icon:"🧑‍🏫",description:"認真聽課或請教老師，解開一個原本不懂的問題，經驗值 +30。",effects:{experience:30}},
 {id:14,type:"destiny",label:"命運",icon:"🌙",description:"出現一個小挑戰，抽命運卡，看看你要怎麼面對和成長。"},
 {id:15,type:"church",label:"被鼓勵",icon:"🕊️",description:"收到溫暖的鼓勵，心裡重新有力量，也更知道下一步方向，經驗值 +30。",effects:{experience:30}},
 {id:16,type:"outing",label:"家人朋友時光",icon:"🧺",description:"和家人朋友好好聊天，放鬆心情，也整理自己的想法，經驗值 +20。",effects:{experience:20}},
 {id:17,type:"fall",label:"小挫折",icon:"🩹",description:"遇到一個小失誤，需要花時間修正和重新出發；請倒退 3 格。",move:-3},
 {id:18,type:"part-time",label:"打零工",icon:"🧹",description:"幫忙完成一份短工作，靠自己的努力賺到一些收入，金錢 +50。",effects:{money:50}},
 {id:19,type:"support",label:"收到補給",icon:"💌",description:"有人支持你買需要的用品，讓你可以繼續前進，金錢 +30。",effects:{money:30}},
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
 characters,cells,
 rules:{stageThresholds:[100,250,400,600],startReward:{experience:20,money:50},startingMoney:100}
};
export function newGame(config:GameConfig):GameState{
 const selected=config.characters.slice(0,playerSlots.length);
 return{started:false,turnOrder:playerSlots.map(slot=>slot.id),turnIndex:0,round:1,accelerated:false,players:Object.fromEntries(playerSlots.map((slot,index)=>{
  const character=selected[index]||config.characters[0];
  return[slot.id,{characterId:character?.id||"",portraitId:slot.portraitId,position:0,stage:0,stats:{experience:character?.initial.experience||0,money:config.rules?.startingMoney??100},skipTurns:0,finishedAt:null,finishRank:undefined,decks:{},stageIntroSeen:[]}];
 })),log:["遊戲準備完成，請選擇四個職業並設定出發順序。"],lastUpdated:new Date().toISOString()}
}
export function clampStats(v:Record<StatKey,number>){v.experience=Math.max(0,v.experience);v.money=Math.max(0,v.money);return v}
