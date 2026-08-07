import type { Card, Effects } from "./types";

const auto=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,effects:Effects,instruction?:string):Card=>({
 id:`zoey-${type}-${stage}-${index}`,characterId:"zoey",contentStage:stage,type,title,description,effects,instruction,resolutionMode:"automatic"
});
const choice=(stage:number,index:number,title:string,description:string,aLabel:string,aEffects:Effects,bLabel:string,bEffects:Effects):Card=>({
 id:`zoey-chance-${stage}-${index}`,characterId:"zoey",contentStage:stage,type:"chance",title,description,resolutionMode:"choice",
 optionA:{label:aLabel,effects:aEffects},optionB:{label:bLabel,effects:bEffects}
});

export const zoeyCards:Card[]=[
 auto(1,"chance",1,"選秀驚艷登場","你在選秀節目初舞台表現出色，高音驚豔全場，導播給了大量特寫鏡頭，知名度與聲勢大漲！",{mood:2,eq:1}),
 auto(1,"chance",2,"個人魅力初亮相","選秀節目加分題！評審要求你展示一段自信動作，展現個人舞台魅力。",{mood:2,eq:1},"Zoey 帶組員擺出 3 個連貫偶像 Pose，並帶全場喊：「請投我一票！」"),
 choice(1,3,"經紀公司搶約","兩間知名公司同時開出合約。知名大廠資源豐富但培訓嚴格；獨立廠牌自由度高但資源較少。","簽約知名大廠",{money:200,stamina:-1},"選擇獨立廠牌",{mood:2,money:50}),
 auto(1,"chance",4,"粉絲應援初體驗","個人應援站成立，收到粉絲手寫信與暖心禮物，讓你更加確定走演藝圈的決心。",{mood:2,eq:1}),
 auto(1,"destiny",1,"合約陷阱條款","仔細查看合約才發現隱藏的嚴苛抽成條款，迫於現狀只能自費聘請律師進行法律諮詢。",{money:-100,mood:-1}),
 auto(1,"destiny",2,"練舞拉傷","為了在選秀決賽呈現完美高難度舞蹈，深夜練舞時不慎拉傷韌帶，被迫暫停訓練。",{stamina:-2,mood:-1}),
 auto(1,"destiny",3,"同儕忌妒排擠","因為獲得較多曝光資源，遭到其他練習生冷落與背後議論，團體氣氛極度尷尬。",{eq:-1,mood:-2}),
 auto(1,"destiny",4,"海選失誤險淘汰","正式錄影時因過度緊張導致高音破音，評審給出低分，全靠觀眾投票才驚險晉級。",{mood:-2,eq:-1}),

 auto(2,"chance",1,"魔鬼訓練成果爆發","經過日夜不停的唱跳特訓，體能與舞台掌控力顯著提升，獲得編舞老師的高度讚賞。",{stamina:2,intelligence:1}),
 auto(2,"chance",2,"超強臨場反應","直播節目中音樂突然中斷，你必須臨危不亂接唱並帶動氣氛。",{eq:2,mood:1},"現場清唱任意首歌副歌 2 句，並指名一位玩家當伴舞跳 5 秒。"),
 choice(2,3,"高壓媒體專訪","記者突襲詢問網路熱傳的早期舊照與外貌變化，你要選擇真誠分享，或用安全的官方說法保護隱私。","誠實真誠回答",{eq:2,mood:-1},"官腔安全回答",{intelligence:1}),
 auto(2,"chance",4,"首支廣告代言","憑藉親和力與亮麗外型接下首支時尚品牌代言，獲得不少額外收入與曝光。",{money:150,mood:1}),
 auto(2,"destiny",1,"惡意剪輯風波","節目組為了話題進行惡意剪輯，讓你被冠上「沒禮貌」的標籤，遭到大量網民指責。",{mood:-2,eq:-1}),
 auto(2,"destiny",2,"體能透支崩潰","連續三個月每天僅睡三小時，高強度趕場通告讓你在後台體力不支暈倒送醫。",{stamina:-2,money:-50}),
 auto(2,"destiny",3,"時尚資源搶奪","原本談好的雜誌封面拍攝臨陣被其他資深藝人換掉，多日準備付諸東流。",{mood:-2,intelligence:-1}),
 auto(2,"destiny",4,"私生飯跟蹤騷擾","遭私生飯跟蹤至住處並拍照騷擾，被迫花費額外預算升級住處安保與搬家。",{money:-100,mood:-2}),

 auto(3,"chance",1,"個人首張專輯爆紅","主打歌橫掃各大音源榜冠軍，實體專輯秒殺，成為年度最受矚目的現象級歌手！",{money:300,mood:3}),
 auto(3,"chance",2,"登上大巨蛋巡迴演唱會","萬人巨蛋演唱會高潮！全場燈光亮起，你帶領全場粉絲進行爆紅主打歌的大合唱與帶動唱。",{money:250,mood:3},"起立擔任唱跳教練，自創 2 個動作帶領全場玩家跟著跳 15 秒！"),
 choice(3,3,"跨界音樂創作","試圖參與專輯詞曲創作。主導全輯能大幅提升專業口碑但十分耗費心力；僅參與部分則較輕鬆且風險較低。","主導全輯創作",{intelligence:3,stamina:-2},"僅參與部分",{intelligence:1}),
 auto(3,"chance",4,"榮獲音樂大獎感言","站在頒獎台上接過獎座，你發表了極具感染力的得獎感言，全場起立為你掌聲加歡呼。",{mood:3,eq:1},"對全場發表 15 秒感人謝詞，結束後全場玩家起立鼓掌 5 秒。"),
 auto(3,"destiny",1,"演唱會設備故障","巡演萬人場次發生硬體嚴重故障導致延誤，團隊自掏腰包補償部分觀眾並進行退票處理。",{money:-150,mood:-1}),
 auto(3,"destiny",2,"聲帶結節危機","長期高強度巡演導致聲帶嚴重受損，醫生警告必須停工打針治療，取消多場通告。",{stamina:-2,money:-100}),
 auto(3,"destiny",3,"爆紅引來黑粉","隨著身價水漲船高，網路出現大量抹黑言論，連過往毫無根據的謠言都被重新挖出。",{mood:-2,eq:-1}),
 auto(3,"destiny",4,"經紀團隊抽成爭議","專案大獲成功後，經紀團隊與你在收益分配上產生嚴重分歧，合作關係出現裂痕。",{money:-100,eq:-1}),

 auto(4,"chance",1,"走入教會尋得平靜","低潮時被朋友帶進教會，在詩歌與祈禱中感受到無條件的愛與接納，重新尋回內心的平安。",{mood:3,eq:2},"邀請全場閉眼深呼吸 5 秒，並由你對大家說：「願平安與你們同在！」"),
 auto(4,"chance",2,"逆境中的生命覺察","意識到過往過度依賴掌聲與名利。這場風暴讓你停下腳步，重新思考生命的真正價值與定見。",{intelligence:2,mood:1}),
 choice(4,3,"信仰力量轉化創作","將低谷的傷痛與信仰的盼望寫成歌曲。可以發表創作，分享真實脆弱與救贖；也可以私下珍藏，留給自己作為生命印記。","發表創作",{intelligence:2,eq:2},"私下珍藏",{mood:2,stamina:1}),
 auto(4,"chance",4,"忠實粉絲與團契支持","團契夥伴與核心粉絲默默為你禱告陪伴，讓你明白即使失去舞台，自己依然被深深愛著。",{mood:2,eq:1}),
 auto(4,"destiny",1,"不實緋聞與輿論審判","面對鋪天蓋地的惡意爆料與形象危機，世俗讚美瞬間化為烏有，逼著你面對人性的虛空與脆弱。",{mood:-3,eq:-1}),
 auto(4,"destiny",2,"品牌解約與人情冷暖","代言遭全面切割並面臨違約金，過往熱情的圈內朋友避之不及，讓你徹底看清世俗名利的短暫。",{money:-200,mood:-2}),
 auto(4,"destiny",3,"恐慌與身心崩潰","排山倒海的網路霸凌讓你陷入焦慮與失眠，體力與情緒跌入谷底，強烈渴望尋求心靈的救贖與依靠。",{mood:-3,stamina:-2}),
 auto(4,"destiny",4,"身邊信任者的背叛","遭身邊親信賣新聞抹黑，經歷極大的背叛與傷害，這份痛楚成為你學習饒恕與修復生命的重要課題。",{eq:-2,mood:-2}),

 auto(5,"chance",1,"心靈療癒音樂專輯","推出以自身低谷為靈感的療癒系創作，溫暖無數受傷的心，音樂榮獲極高藝術評價！",{intelligence:3,mood:3}),
 auto(5,"chance",2,"成立個人音樂工作室","擺脫傳統經紀公司束縛，成立個人工作室，擁有 100% 的音樂創作自由與主導權。",{money:200,intelligence:2}),
 auto(5,"chance",3,"心靈療癒大合唱","轉型後的音樂會現場，你用溫暖的聲音撫平全場的心，帶領大家進行一場深度的心靈共振。",{intelligence:3,mood:3},"帶領全場深呼吸三次，請所有人手牽手齊聲唱出一段旋律或祝福語。"),
 auto(5,"chance",4,"體會讚美短暫，神愛永恆","看透了世俗名利的虛浮，在信仰與內心找到了永恆的平靜，不再被大眾評價所左右。",{mood:3,eq:2}),
 auto(5,"destiny",1,"轉型期票房質疑","從流行偶像轉型為心靈創作人，初期部分商業市場不買帳，門票銷售不如爆紅時期。",{money:-100,mood:-1}),
 auto(5,"destiny",2,"過往傷痛被冷飯熱炒","媒體為了流量再次炒作你當年的低谷事件，試圖挑起爭議，但你已能坦然面對。",{mood:-1,eq:-1}),
 auto(5,"destiny",3,"提攜後輩遭誤解","傾囊相授指導新人，卻被部分輿論質疑是在「蹭話題」，熱心遭到冷言冷語。",{eq:-1,mood:-1}),
 auto(5,"destiny",4,"高強度創作導致體力耗竭","為了完美呈現心靈大碟的樂器編排與現場錄音，長時間泡在錄音室導致體力透支。",{stamina:-2,intelligence:1})
];

