import type { Card, Effects } from "./types";

const auto=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,effects:Effects={},instruction?:string):Card=>({
 id:`zhang-${type}-${stage}-${index}`,characterId:"zhang",contentStage:stage,type,title,description,effects,instruction,resolutionMode:"automatic"
});
const task=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,instruction:string,successEffects:Effects,failureEffects:Effects,successLabel="挑戰成功",failureLabel="挑戰失敗"):Card=>({
 id:`zhang-${type}-${stage}-${index}`,characterId:"zhang",contentStage:stage,type,title,description,instruction,resolutionMode:"task",task:true,successEffects,failureEffects,successLabel,failureLabel
});
const choice=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,aLabel:string,aEffects:Effects,bLabel:string,bEffects:Effects):Card=>({
 id:`zhang-${type}-${stage}-${index}`,characterId:"zhang",contentStage:stage,type,title,description,resolutionMode:"choice",optionA:{label:aLabel,effects:aEffects},optionB:{label:bLabel,effects:bEffects}
});

export const zhangCards:Card[]=[
 auto(1,"chance",1,"第一次擺攤賣光光","張玉曼在學校園遊會試著賣手作小點心，沒想到大家都說好吃，很快就賣完了！",{experience:50,money:200}),
 task(1,"chance",2,"命運的簡報","你有一個開店的好點子，要在很短時間內說給投資人聽。","全組用 15 秒介紹一個新商品，最後一起喊：「請支持玉曼的夢想！」",{experience:60,money:200},{experience:-20},"簡報成功","講得太小聲"),
 choice(1,"chance",3,"第一筆錢要怎麼用","你賺到第一筆錢了。可以買材料做更多商品，也可以先存起來，讓自己比較安心。","買更多材料",{experience:60,money:-100},"先存起來",{experience:30,money:100}),
 auto(1,"chance",4,"老師教你算成本","老師教你把材料、時間和售價都算清楚，你發現做生意不能只靠感覺。",{experience:50}),
 auto(1,"destiny",1,"材料買太多","你太興奮，一次買了太多材料，結果有些用不完，只好低價賣掉。",{experience:-20,money:-150}),
 auto(1,"destiny",2,"客人聽不懂商品介紹","你講得太快，客人不知道商品好在哪裡，很多人看一看就離開了。",{experience:-40}),
 auto(1,"destiny",3,"攤位被雨淋濕","活動當天下雨，桌上的海報和包裝都濕掉了，需要花錢重新準備。",{money:-150}),
 task(1,"destiny",4,"緊張到忘詞","要上台介紹商品時，你突然緊張到忘記要說什麼。","全組深呼吸 3 次，然後一起對張玉曼說：「慢慢講，我們聽你說！」",{experience:20},{experience:-40},"重新開口","還是太緊張"),

 auto(2,"chance",1,"招到可靠隊友","有同學很喜歡你的想法，願意一起分工：有人包裝、有人記帳、有人招呼客人。",{experience:60,money:100}),
 task(2,"chance",2,"玉曼軍團集合","你要把團隊帶起來，讓大家知道自己負責什麼工作。","全組每人說一個職位，例如老闆、會計、設計、店員，並做出工作動作。",{experience:70},{experience:-20},"分工清楚","大家搞混"),
 choice(2,"chance",3,"要快快賣還是慢慢做","訂單變多了。你可以加快速度多賣一點，也可以慢慢做，確保品質穩定。","加快速度",{experience:40,money:250},"慢慢做好",{experience:60,money:100}),
 auto(2,"chance",4,"客人留下好評","客人覺得你們服務親切、商品也用心，在網路上留下很棒的評價。",{experience:50,money:150}),
 auto(2,"destiny",1,"隊友吵架了","兩位隊友對包裝設計有不同想法，越講越大聲，工作進度變慢。",{experience:-40}),
 auto(2,"destiny",2,"廠商臨時漲價","原本說好的材料價格突然變貴，你只好多花錢才能完成訂單。",{money:-200}),
 task(2,"destiny",3,"出貨前手忙腳亂","客人快來拿貨了，但貼紙、盒子和商品還沒有放好。","全組在 10 秒內假裝整理商品：拍桌 3 下、排隊、比出完成手勢。",{experience:20},{experience:-50},"順利整理","來不及整理"),
 auto(2,"destiny",4,"忘記回客人訊息","客人問問題很久，你忙到忘記回覆，對方有點不開心。",{experience:-30,money:-100}),

 auto(3,"chance",1,"商品突然大受歡迎","你的商品被很多人分享，訂單一下子變多，大家都開始知道張玉曼的品牌。",{experience:70,money:300}),
 task(3,"chance",2,"國際大訂單來了","有國外客人想大量訂購，你要帶團隊確認數量、時間和品質。","全組一起數 1 到 10，最後比出 OK 手勢並喊：「訂單確認！」",{experience:80,money:300},{experience:-30},"訂單確認","數量搞錯"),
 choice(3,"chance",3,"開新店還是先穩住","你有機會開第二家店。開新店可能賺更多，但也會更忙；先穩住可以把品質做好。","開第二家店",{experience:60,money:300},"先把品質做好",{experience:80,money:100}),
 auto(3,"chance",4,"學會照顧員工","你發現好的老闆不是只會賺錢，也要讓一起工作的人被尊重。",{experience:70}),
 auto(3,"destiny",1,"太多訂單做不完","訂單暴增，但團隊人手不夠，大家累到出錯，客人開始抱怨。",{experience:-60,money:-150}),
 auto(3,"destiny",2,"別人做出類似商品","別家公司推出很像的商品，而且價格更便宜，你的收入變少了。",{money:-300}),
 auto(3,"destiny",3,"只想贏過別人","你太想當第一名，開始不太聽隊友的意見，團隊氣氛變差。",{experience:-60}),
 task(3,"destiny",4,"重要夥伴想離開","一位重要隊友覺得太累，想要離開團隊。","全組圍成半圈，每人說一句鼓勵的話，幫團隊重新加油。",{experience:20},{experience:-60},"重新同心","沒能挽回"),

 auto(4,"chance",1,"朋友陪你重新整理","公司遇到困難時，朋友陪你一起看帳本、整理訂單，幫你一步一步找回方向。",{experience:70}),
 auto(4,"chance",2,"明白錢不是全部","你慢慢明白，賺錢很重要，但誠實、照顧人、做對的事也很重要。",{experience:80}),
 choice(4,"chance",3,"重新出發的選擇","你可以重新做一個更環保的商品，也可以先縮小公司，慢慢把品質做好。","做環保商品",{experience:80,money:100},"縮小公司慢慢做",{experience:60,money:200}),
 task(4,"chance",4,"好管家的新公司","你決定讓公司不只賺錢，也要幫助社區和需要的人。","全組一起想一個公司可以幫助別人的方法，並大聲說出來。",{experience:100,money:200},{experience:-30},"想出好方法","還沒想清楚"),
 auto(4,"destiny",1,"公司快沒錢了","前面幾次錯誤決定讓公司花太多錢，現在帳戶快見底了。",{experience:-40,money:-400}),
 auto(4,"destiny",2,"合夥人不守信用","原本一起合作的人沒有照約定做事，讓你和團隊很受傷。",{experience:-70,money:-200}),
 task(4,"destiny",3,"面對失敗很難過","你看著空空的辦公室，覺得自己是不是再也站不起來了。","全組一起對張玉曼說：「失敗不是結束，我們陪你再試一次！」",{experience:30},{experience:-80},"得到鼓勵","還在低落"),
 auto(4,"destiny",4,"需要向大家道歉","你以前太急著成功，忽略了一些人的感受。現在你決定誠實道歉，重新學習做負責任的老闆。",{experience:-30})
];
