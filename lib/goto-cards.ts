import type { Card, Effects } from "./types";

const auto=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,effects:Effects={},instruction?:string):Card=>({
 id:`goto-${type}-${stage}-${index}`,characterId:"goto",contentStage:stage,type,title,description,effects,instruction,resolutionMode:"automatic"
});
const task=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,instruction:string,successEffects:Effects,failureEffects:Effects,successLabel="挑戰成功",failureLabel="挑戰失敗"):Card=>({
 id:`goto-${type}-${stage}-${index}`,characterId:"goto",contentStage:stage,type,title,description,instruction,resolutionMode:"task",task:true,successEffects,failureEffects,successLabel,failureLabel
});
const choice=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,aLabel:string,aEffects:Effects,bLabel:string,bEffects:Effects):Card=>({
 id:`goto-${type}-${stage}-${index}`,characterId:"goto",contentStage:stage,type,title,description,resolutionMode:"choice",optionA:{label:aLabel,effects:aEffects},optionB:{label:bLabel,effects:bEffects}
});

export const gotoCards:Card[]=[
 auto(1,"chance",1,"課堂小發現","老師用簡單例子示範程式指令，你發現電腦會照著清楚的步驟完成任務。",{experience:40}),
 auto(1,"chance",2,"同學練習小隊","你和同學約好一起練基礎題，互相提醒錯字和漏掉的符號。",{experience:40}),
 task(1,"chance",3,"小小除錯任務","練習題跑不出來，你決定一步一步檢查，看看是哪一行寫錯。","全組在 15 秒內一起找出一句話中故意放錯的字，找到後喊：「找到錯誤！」",{experience:50},{experience:-10},"找到錯誤","還沒找到"),
 choice(1,"chance",4,"勇敢問問題","你遇到不懂的地方，可以請老師提示，也可以整理自己的想法繼續試。","請老師提示",{experience:40},"整理想法",{experience:30}),
 auto(1,"destiny",1,"符號少打一個","你少打一個括號，程式一直不能跑，才知道小細節也很重要。",{experience:-20}),
 auto(1,"destiny",2,"看不懂英文錯誤訊息","螢幕出現一長串英文，你有點害怕，以為自己完全學不會。",{experience:-30}),
 auto(1,"destiny",3,"練太久忘記休息","你太想把練習做完，坐太久沒有休息，眼睛和肩膀都不舒服。",{experience:-20}),
 task(1,"destiny",4,"小組作業分工不清楚","小組練習時，大家沒有先說好誰負責哪一部分，做起來有點混亂。","全組每人說一個自己可以負責的小任務，例如：打字、檢查、報告。",{experience:20},{experience:-30},"分工完成","分工失敗"),

 auto(2,"chance",1,"新人訓練很扎實","前輩帶你認識工具、流程和團隊規則，讓你更懂工程師每天怎麼合作。",{experience:60}),
 auto(2,"chance",2,"完成小修改","你負責把一個畫面文字改得更清楚，雖然任務不大，但讓使用者更容易看懂。",{experience:60,money:100}),
 choice(2,"chance",3,"不懂要不要說","新人會議中有一段你沒聽懂，可以誠實發問，也可以記下重點查資料。","誠實發問",{experience:50},"記下來查資料",{experience:30}),
 task(2,"chance",4,"團隊回報練習","主管請你用簡單的話說明今天完成了什麼、還卡在哪裡。","全組用 15 秒幫一豪說出三句回報：完成什麼、遇到什麼、需要什麼。",{experience:50,money:100},{experience:-20},"回報清楚","講得不清楚"),
 auto(2,"destiny",1,"害怕承認不會","你遇到問題卻不好意思說，拖了很久才讓大家發現進度卡住。",{experience:-40}),
 auto(2,"destiny",2,"改到別人的檔案","你還不熟悉團隊規則，不小心改到別人正在做的地方，需要花時間一起修回來。",{experience:-30,money:-100}),
 auto(2,"destiny",3,"被前輩改很多","前輩看完你的程式，留下很多修改建議，你有點受挫，也學到細心很重要。",{experience:-30}),
 task(2,"destiny",4,"下班前的小錯誤","下班前發現一個小錯誤，團隊需要冷靜確認，不要亂按。","全組一起慢慢數 1 到 5，最後喊：「先確認，再修改！」",{experience:20},{experience:-40},"冷靜處理","越修越亂"),

 auto(3,"chance",1,"拆解大功能","你把一個大功能拆成很多小步驟，讓團隊更容易分工完成。",{experience:70,money:200}),
 auto(3,"chance",2,"讀懂複雜程式","你花時間理解別人寫的程式，慢慢看懂整個系統怎麼合作。",{experience:70}),
 choice(3,"chance",3,"要快做還是想清楚","你接到一個重要功能，可以直接開始寫，也可以畫流程圖和同事討論。","畫流程圖",{experience:70},"直接開始寫",{experience:30,money:100}),
 task(3,"chance",4,"帶新人做小任務","有新同事加入，你試著把自己學到的方法教給他。","全組輪流說一句教新人時可以用的鼓勵話。",{experience:80,money:100},{experience:-20},"教得清楚","說得太快"),
 auto(3,"destiny",1,"功能做到一半才發現想錯","你寫了很多後才發現原本方向不太對，只好停下來重新整理。",{experience:-50}),
 auto(3,"destiny",2,"測試沒有做完整","你以為功能完成了，但使用者點到另一種情況時出現問題，需要補做測試。",{experience:-40,money:-100}),
 auto(3,"destiny",3,"太想自己解決","你想證明自己很厲害，一直不找人討論，結果花了更多時間。",{experience:-40}),
 task(3,"destiny",4,"團隊意見不一樣","大家對功能要怎麼做有不同想法，你需要學會聽別人，也說清楚自己的理由。","全組分成兩邊，各說一句理由，再一起說：「我們找最適合的方法。」",{experience:20},{experience:-50},"討論成功","越講越亂"),

 auto(4,"chance",1,"做出幫人的系統","你設計了一個讓志工更容易安排服務時間的系統，幫助很多人把愛心送出去。",{experience:90,money:200}),
 auto(4,"chance",2,"把技術教給孩子","你受邀到營隊教小朋友寫簡單程式，讓孩子知道科技也可以用來幫助人。",{experience:90}),
 choice(4,"chance",3,"專家要接哪個案子","有人邀請你做賺錢很多的案子，也有人需要你做幫助弱勢家庭的工具。","做助人工具",{experience:100,money:100},"接高收入案子",{experience:50,money:400}),
 task(4,"chance",4,"用程式解決真問題","社區遇到資料整理困難，你帶大家一起想出簡單又好用的方法。","全組在 20 秒內想出一個科技可以幫人的例子，並大聲說出來。",{experience:100,money:100},{experience:-30},"想出方法","還沒想好"),
 auto(4,"destiny",1,"責任變大壓力也變大","你成為專家後，很多人都來問你，讓你覺得自己不能犯錯。",{experience:-60}),
 auto(4,"destiny",2,"只看效率忘了人的感受","你把系統做得很快，卻忘了有些使用者不熟電腦，大家用起來有點困難。",{experience:-60,money:-100}),
 task(4,"destiny",3,"團隊遇到大問題","重要服務突然壞掉，大家都很緊張，你需要帶大家分工處理。","全組每人說一個分工角色，例如：檢查、記錄、聯絡、安撫。",{experience:30},{experience:-70},"分工穩住","手忙腳亂"),
 auto(4,"destiny",4,"忘記自己的方向","工作越來越忙，你差點忘記想用科技幫助人的心。幸好朋友提醒你重新找回方向。",{experience:-40})
];
