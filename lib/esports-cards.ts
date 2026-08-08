import type { Card, Effects } from "./types";

const auto=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,effects:Effects={},instruction?:string):Card=>({
 id:`esports-${type}-${stage}-${index}`,characterId:"esports",contentStage:stage,type,title,description,effects,instruction,resolutionMode:"automatic"
});
const task=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,instruction:string,successEffects:Effects,failureEffects:Effects,successLabel="挑戰成功",failureLabel="挑戰失敗"):Card=>({
 id:`esports-${type}-${stage}-${index}`,characterId:"esports",contentStage:stage,type,title,description,instruction,resolutionMode:"task",task:true,successEffects,failureEffects,successLabel,failureLabel
});
const choice=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,aLabel:string,aEffects:Effects,bLabel:string,bEffects:Effects):Card=>({
 id:`esports-${type}-${stage}-${index}`,characterId:"esports",contentStage:stage,type,title,description,resolutionMode:"choice",optionA:{label:aLabel,effects:aEffects},optionB:{label:bLabel,effects:bEffects}
});

export const esportsCards:Card[]=[
 auto(1,"chance",1,"被發現有反應天分","小明在班級友誼賽中反應很快，能冷靜看地圖、提醒隊友，老師發現他很有電競天分。",{experience:50,money:100}),
 task(1,"chance",2,"眼睛追蹤小訓練","教練說電競選手不是亂按鍵，而是要看得清楚、反應穩定。小明開始練習眼睛追蹤。","小明用手指慢慢畫大圈，全組頭不能動，只用眼睛追手指 5 秒，最後一起喊：「看到了！」",{experience:50},{experience:-20},"追蹤成功","眼神飄走"),
 choice(1,"chance",3,"練習時間怎麼安排","小明很想一直練習，但也知道功課、睡覺和運動都很重要。","做健康練習表",{experience:60},"偷玩久一點",{experience:20,money:-100}),
 auto(1,"chance",4,"家人願意支持","小明和家人好好溝通，答應會安排時間、保護眼睛，家人願意支持他參加試訓。",{experience:40,money:200}),
 auto(1,"destiny",1,"上課偷偷想比賽","小明上課時一直想剛剛的比賽畫面，結果老師問問題時完全答不出來。",{experience:-30}),
 auto(1,"destiny",2,"練太久眼睛痠","小明連續盯著螢幕太久，眼睛又乾又痠，只好先停下來休息。",{experience:-40}),
 task(1,"destiny",3,"輸了以後很生氣","比賽輸掉後，小明差點怪隊友。他需要學會先冷靜，再討論怎麼進步。","全組深呼吸 3 次，然後一起說：「先冷靜，再檢討！」",{experience:20},{experience:-50},"冷靜成功","還在生氣"),
 auto(1,"destiny",4,"忘記做手腕伸展","練習前忘記伸展，手腕變得不舒服，今天的操作也變得不穩。",{experience:-30}),

 auto(2,"chance",1,"通過青訓試訓","小明在試訓中表現穩定，不只會操作，也會聽隊友說話，因此進入青訓隊。",{experience:70,money:100}),
 task(2,"chance",2,"報位練習很清楚","隊友看不到全部畫面，小明要用簡短清楚的話提醒大家敵人在哪裡。","小明喊：「左邊、右邊、中間！」全組照指令轉頭，最後一起喊：「收到！」",{experience:70},{experience:-20},"報位清楚","大家聽不懂"),
 choice(2,"chance",3,"當替補也要努力","小明暫時還不是先發。他可以抱怨自己沒上場，也可以認真觀察學長怎麼打。","認真觀察學長",{experience:70},"一直抱怨",{experience:-30}),
 auto(2,"chance",4,"教練教你看重播","教練帶小明看比賽重播，找出哪裡做得好、哪裡可以改進。",{experience:60}),
 auto(2,"destiny",1,"隊友同時大喊","比賽中大家一起講話，重要訊息被蓋掉，隊伍錯過好機會。",{experience:-50}),
 auto(2,"destiny",2,"練習室網路斷線","重要練習賽開始前，網路突然不穩，大家只能重新安排練習。",{experience:-30,money:-100}),
 task(2,"destiny",3,"輸了需要好好檢討","練習賽輸得很慘，但小明不能只說「都不是我的錯」。","全組每人說一句可以進步的地方，例如：「我可以更專心。」",{experience:20},{experience:-50},"誠實檢討","互相怪罪"),
 auto(2,"destiny",4,"睡太少反應變慢","小明前一天太晚睡，隔天練習反應慢半拍，教練提醒他職業選手更要照顧身體。",{experience:-40}),

 auto(3,"chance",1,"第一次先發上場","正式比賽中，主力隊員臨時不舒服，小明被派上場。他雖然緊張，還是穩穩完成任務。",{experience:80,money:200}),
 task(3,"chance",2,"關鍵團隊配合","最後一波會戰要開始了，小明提醒大家一起行動，不要各打各的。","全組一起倒數 3、2、1，然後同時拍手喊：「一起上！」",{experience:90,money:100},{experience:-30},"配合成功","節奏不一致"),
 choice(3,"chance",3,"接受訪問怎麼說","贏下比賽後，主持人問小明誰最厲害。他可以只稱讚自己，也可以感謝全隊。","感謝全隊",{experience:70,money:100},"只稱讚自己",{experience:20,money:100}),
 auto(3,"chance",4,"粉絲送來加油卡片","有小朋友寫卡片給小明，說因為他學會輸了也不放棄，讓小明很受鼓勵。",{experience:70}),
 auto(3,"destiny",1,"關鍵時刻按錯鍵","比賽最緊張的時候，小明一急按錯鍵，讓隊伍失去一次好機會。",{experience:-60}),
 auto(3,"destiny",2,"網路留言亂批評","有些人在網路上亂罵小明，讓他心情很受影響，練習也變得不專心。",{experience:-60}),
 task(3,"destiny",3,"手腕需要休息","連續訓練後，小明手腕不舒服，物理治療師提醒他要伸展和休息。","全組做 5 秒手腕伸展：手掌向前、輕輕拉手指，動作要慢。",{experience:20},{experience:-50},"好好伸展","動作太急"),
 auto(3,"destiny",4,"廣告拍攝太累","小明接到廣告工作，雖然賺到錢，但拍攝到很晚，影響隔天練習。",{experience:-30,money:200}),

 task(4,"chance",1,"世界賽最後一局","世界大賽最後一局，小明提醒大家冷靜溝通，隊伍成功打出最棒的配合。","小明喊：「冷靜、溝通、一起贏！」全組一起擊掌並喊：「我們做到了！」",{experience:120,money:300},{experience:-40},"成功奪冠","配合失誤"),
 auto(4,"chance",2,"成為會鼓勵人的隊長","小明不只自己變強，也開始照顧新人，教他們怎麼練習、怎麼面對輸贏。",{experience:90}),
 choice(4,"chance",3,"冠軍獎金怎麼用","小明拿到一筆獎金。可以買更好的設備，也可以拿一部分支持兒童電競營隊。","支持兒童營隊",{experience:100,money:-100},"升級設備",{experience:60,money:100}),
 task(4,"chance",4,"分享健康電競觀念","小明受邀分享：真正的電競選手要守時間、保護眼睛、尊重隊友。","全組一起喊三句：「守時間！護眼睛！尊重隊友！」",{experience:100,money:100},{experience:-30},"分享成功","口號不整齊"),
 auto(4,"destiny",1,"冠軍壓力變大","得到冠軍後，大家期待小明每次都要贏，讓他壓力變得很大。",{experience:-60}),
 auto(4,"destiny",2,"出國比賽作息混亂","跨國比賽讓小明睡覺時間亂掉，第一天練習精神很差。",{experience:-50}),
 task(4,"destiny",3,"重要證件找不到","出發比賽前，小明發現重要證件不見了，整隊都很緊張。","全組假裝找東西 5 秒，最後一起指向前方喊：「找到了！」",{experience:30},{experience:-70},"找到了","還沒找到"),
 auto(4,"destiny",4,"忘記一開始的快樂","比賽越來越大，小明差點忘記自己一開始只是喜歡團隊合作和挑戰。幸好隊友提醒他找回初心。",{experience:-30})
];
