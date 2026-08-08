import type { Card, Effects } from "./types";

const auto=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,effects:Effects={},instruction?:string):Card=>({
 id:`rubio-${type}-${stage}-${index}`,characterId:"rubio",contentStage:stage,type,title,description,effects,instruction,resolutionMode:"automatic"
});
const task=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,instruction:string,successEffects:Effects,failureEffects:Effects,successLabel="挑戰成功",failureLabel="挑戰失敗"):Card=>({
 id:`rubio-${type}-${stage}-${index}`,characterId:"rubio",contentStage:stage,type,title,description,instruction,resolutionMode:"task",task:true,successEffects,failureEffects,successLabel,failureLabel
});
const choice=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,aLabel:string,aEffects:Effects,bLabel:string,bEffects:Effects):Card=>({
 id:`rubio-${type}-${stage}-${index}`,characterId:"rubio",contentStage:stage,type,title,description,resolutionMode:"choice",optionA:{label:aLabel,effects:aEffects},optionB:{label:bLabel,effects:bEffects}
});

export const rubioCards:Card[]=[
 auto(1,"chance",1,"老牧師熱情推薦","一位有經驗的老牧師看見盧比歐很願意關心人，鼓勵他去學習怎麼成為牧師。",{experience:50,money:100}),
 auto(1,"chance",2,"愛宴中學會招呼人","教會聚餐時，盧比歐主動幫忙端菜、招呼新朋友，大家都感受到他的溫暖。",{experience:50,money:50}),
 task(1,"chance",3,"義賣籌集預備金","盧比歐想參加學習課程，需要靠義賣籌一點錢。","全組用 15 秒介紹一個義賣商品，最後一起喊：「謝謝你的支持！」",{experience:50,money:200},{experience:-20},"義賣成功","介紹太小聲"),
 choice(1,"chance",4,"讀書還是先打工","盧比歐想多讀書，也想先打工存錢。兩個選擇都不容易，需要好好安排時間。","先專心讀書",{experience:60,money:-100},"先打工存錢",{experience:30,money:200}),
 auto(1,"destiny",1,"家人有點擔心","家人擔心牧師工作很辛苦，也擔心收入不穩定，讓盧比歐心裡有點難過。",{experience:-40}),
 auto(1,"destiny",2,"存款快不夠了","還在準備和學習的時候，盧比歐發現自己的錢快不夠用了。",{money:-150}),
 auto(1,"destiny",3,"聖經課考試好難","考試內容很多，盧比歐讀到很晚還是有些地方不懂，覺得有點挫折。",{experience:-30}),
 task(1,"destiny",4,"安靜想一想","盧比歐不知道下一步怎麼走，決定安靜下來，想想自己為什麼想幫助人。","全組安靜 5 秒，然後一起說：「一步一步來！」",{experience:20},{experience:-30},"重新有方向","還是很慌張"),

 auto(2,"chance",1,"學會好好聽人說話","有人心情不好來找盧比歐，他沒有急著給答案，而是先認真聽對方說。",{experience:60,money:100}),
 auto(2,"chance",2,"長輩分享經驗","教會長輩分享以前陪伴人的故事，盧比歐學到很多實用的方法。",{experience:60}),
 task(2,"chance",3,"帶領破冰遊戲","青年聚會一開始大家很害羞，盧比歐決定用簡單遊戲讓大家放鬆。","盧比歐做一個搞笑動作，全組在 5 秒內一起模仿。",{experience:70,money:100},{experience:-20},"氣氛熱起來","大家太害羞"),
 choice(2,"chance",4,"探訪要自己去嗎","有人需要關心，盧比歐可以自己去探訪，也可以找同伴一起去，彼此照應。","自己勇敢去",{experience:60},"找同伴一起去",{experience:40,money:100}),
 auto(2,"destiny",1,"講話突然卡住","盧比歐第一次上台分享時太緊張，講到一半突然忘記下一句。",{experience:-40,money:-100}),
 auto(2,"destiny",2,"團隊意見不一樣","大家對活動怎麼辦有不同想法，討論很久都沒有結果。",{experience:-40}),
 auto(2,"destiny",3,"半夜有人需要幫忙","半夜有人打電話來說心情很糟，盧比歐努力陪伴，但隔天非常累。",{experience:-50}),
 task(2,"destiny",4,"探訪找錯地址","盧比歐拿錯地址，走了很久才發現不對，需要冷靜重新確認。","全組一起指左、指右、拍手 2 下，最後喊：「重新確認！」",{experience:20},{experience:-40},"找到方向","越走越迷路"),

 auto(3,"chance",1,"青年活動大成功","盧比歐帶領的青年活動讓很多人願意參加，也有人因此交到新朋友。",{experience:70,money:200}),
 task(3,"chance",2,"大合唱感動全場","活動最後大家一起唱歌，原本害羞的人也慢慢開口，氣氛變得很溫暖。","全組一起唱一句大家都會的歌，或一起喊：「你不是一個人！」",{experience:80,money:100},{experience:-30},"全場同心","聲音太散"),
 choice(3,"chance",3,"要開新小組嗎","越來越多人想參加，盧比歐可以開新小組，也可以先把原本的小組照顧好。","開新小組",{experience:70,money:100},"先照顧原小組",{experience:80}),
 auto(3,"chance",4,"寫下鼓勵小故事","盧比歐把陪伴人的故事寫成文章，很多人看了覺得被鼓勵。",{experience:60,money:200}),
 auto(3,"destiny",1,"活動場地突然變貴","原本租好的場地突然漲價，活動預算變得很吃緊。",{experience:-20,money:-300}),
 auto(3,"destiny",2,"直播設備壞掉","活動直播開始前，麥克風和鏡頭突然出問題，大家手忙腳亂。",{money:-250}),
 auto(3,"destiny",3,"太忙忘了休息","盧比歐一直照顧別人，卻忘記自己也需要休息，身體和心情都變累。",{experience:-60}),
 task(3,"destiny",4,"網路留言誤會你","有人在網路上誤會盧比歐的話，讓很多人跟著批評。","全組一起說一句溫柔澄清的話，例如：「我們先聽清楚，再下判斷。」",{experience:20},{experience:-70},"溫柔澄清","越解釋越亂"),

 auto(4,"chance",1,"收到匿名鼓勵信","盧比歐很低落時，收到一封沒有署名的鼓勵信，提醒他有人一直記得他的付出。",{experience:70,money:100}),
 auto(4,"chance",2,"安靜休息重新得力","盧比歐暫時放慢腳步，好好睡覺、散步和禱告，心裡慢慢恢復平安。",{experience:80}),
 choice(4,"chance",3,"重新安排工作量","盧比歐發現自己不能什麼都做，可以把一些工作交給同伴，也可以先取消不急的活動。","交給同伴幫忙",{experience:80},"先取消不急的活動",{experience:60,money:100}),
 task(4,"chance",4,"祝福大家的時間","盧比歐重新明白，牧師不是完美的人，而是願意陪大家一起走的人。","全組每人對旁邊的人說一句祝福或鼓勵。",{experience:100,money:100},{experience:-30},"完成祝福","還沒準備好"),
 auto(4,"destiny",1,"重要同工離開","一位一起努力很久的同工離開團隊，盧比歐覺得很失落。",{experience:-70,money:-100}),
 auto(4,"destiny",2,"被誤會很受傷","盧比歐明明想幫忙，卻被人誤會，心裡覺得委屈又難過。",{experience:-80}),
 task(4,"destiny",3,"爭執快要失控","兩邊的人都覺得自己是對的，聲音越來越大，盧比歐需要幫大家冷靜下來。","全組伸出雙手往下壓，慢慢說：「先停一下，好好聽。」",{experience:30},{experience:-80},"大家冷靜","爭執變大"),
 auto(4,"destiny",4,"懷疑自己做不好","連續遇到困難後，盧比歐開始懷疑自己是不是不適合當牧師。",{experience:-60})
];
