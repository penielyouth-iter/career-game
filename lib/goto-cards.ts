import type { Card, Effects } from "./types";

const auto=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,effects:Effects={},instruction?:string,peaceCards=0):Card=>({
 id:`goto-${type}-${stage}-${index}`,characterId:"goto",contentStage:stage,type,title,description,effects,instruction,peaceCards,resolutionMode:"automatic"
});
const task=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,instruction:string,successEffects:Effects,failureEffects:Effects,successLabel="挑戰成功",failureLabel="挑戰失敗"):Card=>({
 id:`goto-${type}-${stage}-${index}`,characterId:"goto",contentStage:stage,type,title,description,instruction,resolutionMode:"task",task:true,successEffects,failureEffects,successLabel,failureLabel
});
const choice=(stage:number,type:"chance"|"destiny",index:number,title:string,description:string,aLabel:string,aEffects:Effects,bLabel:string,bEffects:Effects):Card=>({
 id:`goto-${type}-${stage}-${index}`,characterId:"goto",contentStage:stage,type,title,description,resolutionMode:"choice",optionA:{label:aLabel,effects:aEffects},optionB:{label:bLabel,effects:bEffects}
});

export const gotoCards:Card[]=[
 auto(1,"chance",1,"Stack Overflow/ AI 大神顯靈","困擾你一整週的程式碼漏洞，竟然在論壇找到一模一樣的解答！",{intelligence:2}),
 auto(1,"chance",2,"綠色乖乖的加持","在機房與筆電上放了包綠色奶油椰子乖乖，程式居然順暢一次 Compile 通過！",{intelligence:1,money:100}),
 task(1,"chance",3,"黑客松獲獎","參加黑客松並向評審展示團隊的創意與合作。","全組成員要在 15 秒內，用身體排出「AI」兩個英文字母。",{money:300,intelligence:1},{}),
 auto(1,"chance",4,"得到學長的面試考古題","拿到頂尖科技公司的演算法考古題，面試準備事半功倍。",{intelligence:2}),
 auto(1,"destiny",1,"忘記存檔悲劇","寫了一整夜的畢業專題，宿舍突然跳電且沒開自動儲存……",{stamina:-2}),
 auto(1,"destiny",2,"白板面試慘遭毒打","面試官叫你手寫快速排序法（Quick Sort），你緊張到大腦一片空白。",{intelligence:-1,eq:-1}),
 auto(1,"destiny",3,"買線上課程沒看","買了一堆線上程式課程想自我提升，結果只刷了第一集就放著生灰塵。",{money:-100}),
 task(1,"destiny",4,"專題組隊隊友躺平","遭遇豬隊友，專案壓力全落到你身上。","全組成員做 10 個開合跳，幫主角分擔專案壓力。",{}, {stamina:-2},"完成分擔","未完成"),

 auto(2,"chance",1,"Copilot AI 寫 Code 神器","公司幫你開通了 AI 寫程式工具，工作產出效率瞬間翻倍！",{intelligence:3}),
 auto(2,"chance",2,"遇到天使資深工程師（Senior）","遇到神級 Senior 帶領，耐心地幫你 Code Review 並指出致命錯誤。",{intelligence:2,eq:1}),
 auto(2,"chance",3,"抓到遺留系統（Legacy Code）的大 Bug","幫公司解決了困擾半年的系統卡頓問題，獲得主管口頭表揚與獎金。",{intelligence:2,money:300}),
 auto(2,"chance",4,"下班前的咖啡提神","一杯咖啡讓大家在下班前恢復精神。",{stamina:2},"小組成員在 10 秒內齊聲高喊：「一豪哥，請喝美式咖啡！」"),
 auto(2,"destiny",1,"半夜三點被 On-call 叫醒","伺服器告警響起，被迫從床上爬起來除錯（Debug）。",{stamina:-2,intelligence:-1}),
 auto(2,"destiny",2,"PM 突然變更需求","產品經理（PM）說：「這個功能很簡單，明天上線應該沒問題吧？」",{eq:-1,stamina:-1}),
 task(2,"destiny",3,"辦公室椅子太硬腰痠背痛","久坐工作讓腰背發出警訊。","全組組員起立做 5 秒伸展拉筋。",{}, {stamina:-2},"完成伸展","未完成"),
 auto(2,"destiny",4,"誤刪測試環境資料庫","手滑執行了刪除指令，對系統架構不熟悉犯錯，請大家喝飲料賠罪。",{intelligence:-1,money:-200}),

 auto(3,"chance",1,"獨立開發爆款 App","主導開發的系統用戶突破百萬，獲得業界高度矚目。",{intelligence:3,money:500}),
 auto(3,"chance",2,"獲選為技術大會研討會講者","受邀在 Tech Summit 分享架構設計，技術實力獲業界認可。",{intelligence:2,eq:1}),
 auto(3,"chance",3,"團隊攻堅成功獎勵","團隊一起完成高難度專案，公司發出獎勵。",{money:300,stamina:1},"小組全體成員伸出手疊在一起，齊聲大喊：「衝向頂峰！」"),
 auto(3,"chance",4,"獲得公司員工認股選擇權（ESOP）","成為公司核心技術骨幹，拿到優渥的股權分紅。",{money:600}),
 auto(3,"destiny",1,"遭遇重大資安漏洞（Log4j 級別）","全球爆發資安危機，連續三天兩夜住在公司緊急修補。",{stamina:-3}),
 auto(3,"destiny",2,"技術選型錯誤重新來過","評估失誤引進了不成熟的框架，三個月的努力必須砍掉重練。",{intelligence:-2,money:-200}),
 auto(3,"destiny",3,"競品低價殺價威脅","對手推出了免費的同款產品，專案盈利大幅縮水。",{money:-400}),
 task(3,"destiny",4,"團隊核心成員被高薪挖角","重要助手離職，團隊需要重新凝聚。","組員在 15 秒內手拉手圍成圓圈，幫主角集氣。",{stamina:-1},{stamina:-2,eq:-1},"完成集氣，負面效果減半","未完成"),

 auto(4,"chance",1,"熱音社老友的深夜熱湯","低谷中，老朋友帶來熱湯與陪伴。",{eq:3},"組員扮演熱音社老友，對主角說：「代碼是假的，兄弟是真的！」並拍拍肩。"),
 auto(4,"chance",2,"遇見信仰：體會人的價值非來自產出","在團契中明白自己的生命價值，不在於代碼寫得有多完美。",{eq:3},undefined,1),
 auto(4,"chance",3,"開源社群（Open Source）暖心支援","全球開源技術者主動提供協助，幫忙釐清了底層資安 Bug。",{intelligence:2,eq:1}),
 auto(4,"chance",4,"沉澱休假，重拾生活步調","給自己放了一個長假遠離螢幕，身體機能與心態大幅恢復。",{stamina:3}),
 auto(4,"destiny",1,"系統大宕機造成天價虧損","雲端伺服器崩潰，公司資金大失血，高層逼你承擔責任。",{money:-500,eq:-2}),
 auto(4,"destiny",2,"嚴重的工程師職業病（眼疾／腰傷）","長期盯螢幕與坐姿不良，身體發出嚴重警訊，被迫就醫。",{stamina:-3,money:-200}),
 task(4,"destiny",3,"陷入裁員風波與被 AI 取代迷思","面臨失業與被取代的焦慮。","全組組員在 10 秒內跟主角說：「一豪，你的溫度 AI 永遠做不到！」",{}, {eq:-3},"完成鼓勵","未完成"),
 auto(4,"destiny",4,"辦公室政治與背黑鍋","管理層將專案延誤歸咎於技術團隊，內部溝通陷入冰點。",{eq:-2,intelligence:-1}),

 auto(5,"chance",1,"創立「公益科技協會」","開發出幫助視障者與弱勢兒童學習的無障礙軟體，獲得社會大眾讚賞。",{eq:3,intelligence:2}),
 auto(5,"chance",2,"撰寫科技與信仰暢銷書","出版《演算法與生命哲學》，版稅收入豐厚且受邀各界演講。",{money:800,eq:2}),
 auto(5,"chance",3,"傳承：培育下一代優秀工程師","將經驗傳承給下一代工程師。",{eq:4},"學生組員對主角敬禮高喊：「謝謝後藤大師！」"),
 auto(5,"chance",4,"獲頒國家級科技貢獻獎","因長期推動科技向善與資訊平等，榮獲最高榮譽。",{intelligence:3,money:500}),
 choice(5,"destiny",1,"國際大廠天價併購誘惑","商業巨頭想高價買下你的公益專案並將其商業化，考驗你的初衷。","拒絕併購，維持初衷",{money:-300,eq:3},"接受併購（PDF 未指定數值）",{}),
 auto(5,"destiny",2,"繁忙行程導致過度疲勞","巡迴演講與協會事務過多，體力透支。",{stamina:-2}),
 auto(5,"destiny",3,"年輕後輩不理解理想主義","遇到只追求高薪、不關心社會價值的後輩，需要花費巨大耐心溝通。",{eq:-2}),
 task(5,"destiny",4,"網路假新聞抹黑協會動機","協會遭遇假新聞與名譽危機。","小組全員手拉手，一起為主角做出「護心禱告／加油打氣」。",{}, {eq:-2},"完成守護","未完成")
];

