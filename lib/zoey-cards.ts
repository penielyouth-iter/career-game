import type { Card, Effects } from "./types";

const auto=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,effects:Effects={},instruction?:string):Card=>({
 id:`zoey-${type}-${stage}-${index}`,characterId:"zoey",contentStage:stage,type,title,description,effects,instruction,resolutionMode:"automatic"
});
const task=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,instruction:string,successEffects:Effects,failureEffects:Effects,successLabel="挑戰成功",failureLabel="挑戰失敗"):Card=>({
 id:`zoey-${type}-${stage}-${index}`,characterId:"zoey",contentStage:stage,type,title,description,instruction,resolutionMode:"task",task:true,successEffects,failureEffects,successLabel,failureLabel
});
const choice=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,aLabel:string,aEffects:Effects,bLabel:string,bEffects:Effects):Card=>({
 id:`zoey-${type}-${stage}-${index}`,characterId:"zoey",contentStage:stage,type,title,description,resolutionMode:"choice",optionA:{label:aLabel,effects:aEffects},optionB:{label:bLabel,effects:bEffects}
});

export const zoeyCards:Card[]=[
 auto(1,"chance",1,"社團唱歌課","Zoey 參加學校社團，老師教她用肚子呼吸，唱歌比以前更穩了。",{experience:40}),
 auto(1,"chance",2,"基本舞步練習","她跟著節拍練基本舞步，雖然動作還不熟，但越來越敢動。",{experience:40}),
 task(1,"chance",3,"舞台姿勢練習","社團練習時，Zoey 試著站穩、微笑，讓自己看起來更有精神。","Zoey 帶全組擺出 3 個舞台姿勢，最後一起喊：「我準備好了！」",{experience:50},{experience:-10},"練習成功","還有點害羞"),
 choice(1,"chance",4,"請同學聽聽看","Zoey 練了一小段歌，可以請同學給建議，也可以先自己調整唱法。","請同學給建議",{experience:40},"自己調整唱法",{experience:30}),
 auto(1,"destiny",1,"節拍一直跟不上","音樂速度有點快，Zoey 常常慢半拍，覺得自己是不是沒有天分。",{experience:-30}),
 auto(1,"destiny",2,"唱太大聲喉嚨累","她太想唱好，一直用力唱，喉嚨變得不舒服。",{experience:-30}),
 auto(1,"destiny",3,"忘記帶練習資料","社團練習時，她忘記帶歌詞和筆記，只能跟著別人看。",{experience:-20}),
 task(1,"destiny",4,"練習時太緊張","社團練習時，Zoey 一想到要讓大家聽見，就緊張到聲音變小。","全組一起深呼吸 3 次，然後對 Zoey 說：「慢慢來，我們聽你唱！」",{experience:20},{experience:-40},"放鬆一點","還是太緊張"),

 auto(2,"chance",1,"新人試鏡表現穩定","Zoey 在小型試鏡中表現穩定，評審看見她願意學習，給她練習生機會。",{experience:60,money:100}),
 auto(2,"chance",2,"新人課程很扎實","公司安排唱歌、舞蹈和禮貌訓練，Zoey 更明白偶像工作不只是漂亮上台。",{experience:60}),
 choice(2,"chance",3,"練習時間怎麼安排","每天都有很多課，Zoey 可以熬夜多練，也可以安排休息讓身體保持健康。","安排休息",{experience:50},"熬夜多練",{experience:30,money:-50}),
 task(2,"chance",4,"新人自我介紹","新人見面會上，Zoey 要用清楚又有精神的方式介紹自己。","Zoey 用 15 秒介紹自己的名字、夢想和一個優點。",{experience:50,money:100},{experience:-20},"介紹清楚","聲音太小"),
 auto(2,"destiny",1,"動作常被老師糾正","舞蹈老師一直提醒手的位置和腳步，Zoey 覺得自己怎麼都做不好。",{experience:-40}),
 auto(2,"destiny",2,"和同伴比較心情低落","看到其他新人進步很快，Zoey 忍不住一直比較，心裡很難過。",{experience:-40}),
 auto(2,"destiny",3,"新人收入不穩定","新人工作機會不穩定，交通和服裝準備花了不少錢。",{money:-100}),
 task(2,"destiny",4,"團隊排練吵起來","大家對站位和動作有不同意見，排練氣氛變得緊張。","全組一起做一個同步動作，最後說：「我們一起完成！」",{experience:20},{experience:-50},"重新合作","氣氛更僵"),

 auto(3,"chance",1,"找到自己的聲音","Zoey 更知道什麼歌適合自己，也能把感情唱進歌曲裡。",{experience:70,money:150}),
 auto(3,"chance",2,"參與正式作品","她加入一首新歌的錄音和排練，感受到專業作品需要很多人一起完成。",{experience:70,money:200}),
 choice(3,"chance",3,"要模仿流行還是做自己","公司建議她模仿最近流行的風格，但 Zoey 也想保留自己的特色。","保留自己的特色",{experience:70},"先學流行風格",{experience:40,money:150}),
 task(3,"chance",4,"帶新人暖身","有新練習生加入，Zoey 試著帶大家做簡單暖身，幫助團隊進入狀態。","Zoey 帶全組做 10 秒簡單節奏拍手。",{experience:80,money:100},{experience:-20},"帶領成功","節奏不齊"),
 auto(3,"destiny",1,"錄音一直重來","一句歌詞錄了很多次都不滿意，Zoey 又累又挫折。",{experience:-50}),
 auto(3,"destiny",2,"表演前身體不舒服","重要表演前，她因為練太多而聲音沙啞，只好減少練習並休息。",{experience:-40,money:-100}),
 auto(3,"destiny",3,"被網路比較","有人把她和其他歌手比較，留言讓她心情受影響。",{experience:-50}),
 task(3,"destiny",4,"團隊壓力變大","正式作品快完成時，大家都很累，說話也變得急。","全組每人說一句可以鼓勵團隊的話。",{experience:20},{experience:-50},"互相鼓勵","壓力沒有降下來"),

 auto(4,"chance",1,"用歌鼓勵孩子","Zoey 到兒童活動唱歌，孩子們跟著一起唱，她發現歌聲可以帶給人力量。",{experience:90,money:100}),
 auto(4,"chance",2,"設計公益演出","她和團隊一起安排一場公益表演，把收入拿去幫助需要陪伴的家庭。",{experience:90,money:200}),
 choice(4,"chance",3,"成名後要做什麼","Zoey 有更多影響力，可以只追求更多掌聲，也可以用舞台分享希望。","分享希望",{experience:100,money:100},"追求更多掌聲",{experience:40,money:300}),
 task(4,"chance",4,"教大家勇敢表達","Zoey 開工作坊，鼓勵害羞的孩子用唱歌和動作說出自己的心情。","全組每人用一個動作表達今天的心情。",{experience:100,money:100},{experience:-30},"勇敢表達","還有點害羞"),
 auto(4,"destiny",1,"太多人期待你完美","成為知名歌手後，大家希望 Zoey 每次都不能出錯，讓她壓力很大。",{experience:-60}),
 auto(4,"destiny",2,"忙到忘記陪家人朋友","工作排得很滿，她發現自己很久沒有好好陪重要的人說話。",{experience:-50}),
 task(4,"destiny",3,"被誤會時要溫柔回應","網路上有人誤會 Zoey 的話，她需要冷靜說明，不跟著生氣。","全組一起說：「先聽清楚，再好好說。」",{experience:30},{experience:-70},"溫柔回應","越說越亂"),
 auto(4,"destiny",4,"忘記唱歌的初心","舞台越來越大，Zoey 差點忘記自己喜歡唱歌、也想鼓勵人的心。",{experience:-40})
];
