import type { Card } from "./types";

export const gotoCards:Card[]=[
  {
    id: "goto-chance-1-1",
    characterId: "goto",
    contentStage: 1,
    type: "chance",
    title: "網路和 AI 幫了大忙",
    description: "你卡了好幾天的程式問題，竟然在網路上找到很像的解法！",
    effects: {
      experience: 40
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-1-2",
    characterId: "goto",
    contentStage: 1,
    type: "chance",
    title: "幸運小零食",
    description: "你在電腦旁放了一包幸運零食，程式竟然一次就跑成功！",
    effects: {
      experience: 20,
      money: 100
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-1-3",
    characterId: "goto",
    contentStage: 1,
    type: "chance",
    title: "程式比賽得獎",
    description: "你參加程式創意比賽，和隊友一起做出有趣的作品。",
    instruction: "全組成員要在 15 秒內，用身體排出「AI」兩個英文字母。",
    resolutionMode: "task",
    task: true,
    successEffects: {
      experience: 20,
      money: 300
    },
    failureEffects: {},
    successLabel: "挑戰成功",
    failureLabel: "挑戰失敗"
  },
  {
    id: "goto-chance-1-4",
    characterId: "goto",
    contentStage: 1,
    type: "chance",
    title: "學長分享準備祕訣",
    description: "學長告訴你面試常考的題目，讓你準備得更有方向。",
    effects: {
      experience: 40
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-1-1",
    characterId: "goto",
    contentStage: 1,
    type: "destiny",
    title: "忘記存檔了",
    description: "你寫了好久的作業，突然停電，結果忘記存檔了……",
    effects: {
      experience: -40
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-1-2",
    characterId: "goto",
    contentStage: 1,
    type: "destiny",
    title: "面試時太緊張",
    description: "面試官請你在白板上解題，你一緊張，腦袋突然空白。",
    effects: {
      experience: -40
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-1-3",
    characterId: "goto",
    contentStage: 1,
    type: "destiny",
    title: "買了課卻沒看完",
    description: "你買了線上課想學程式，結果只看第一集就忘記繼續了。",
    effects: {
      money: -100
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-1-4",
    characterId: "goto",
    contentStage: 1,
    type: "destiny",
    title: "隊友沒有一起努力",
    description: "小組作業快到期限了，有隊友沒有完成自己的部分，壓力變大了。",
    instruction: "全組成員做 10 個開合跳，幫主角一起分擔壓力。",
    resolutionMode: "task",
    task: true,
    successEffects: {},
    failureEffects: {
      experience: -40
    },
    successLabel: "一起完成",
    failureLabel: "未完成"
  },
  {
    id: "goto-chance-2-1",
    characterId: "goto",
    contentStage: 2,
    type: "chance",
    title: "AI 小幫手來了",
    description: "公司給你一個 AI 寫程式工具，讓你更快找到寫程式的方向！",
    effects: {
      experience: 60
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-2-2",
    characterId: "goto",
    contentStage: 2,
    type: "chance",
    title: "遇到很棒的前輩",
    description: "有一位很有經驗的工程師耐心教你，幫你找出程式裡的大問題。",
    effects: {
      experience: 60
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-2-3",
    characterId: "goto",
    contentStage: 2,
    type: "chance",
    title: "抓到老系統的大問題",
    description: "你幫公司解決電腦系統一直卡住的問題，主管稱讚你，還給你獎金。",
    effects: {
      experience: 40,
      money: 300
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-2-4",
    characterId: "goto",
    contentStage: 2,
    type: "chance",
    title: "下班前補充精神",
    description: "大家有點累了，一杯飲料讓大家重新打起精神。",
    effects: {
      experience: 40
    },
    instruction: "小組成員在 10 秒內齊聲高喊：「一豪哥，加油！喝杯飲料休息一下！」",
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-2-1",
    characterId: "goto",
    contentStage: 2,
    type: "destiny",
    title: "半夜被電話叫醒",
    description: "公司的電腦系統突然出問題，你只好從床上爬起來修理。",
    effects: {
      experience: -60
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-2-2",
    characterId: "goto",
    contentStage: 2,
    type: "destiny",
    title: "主管突然改主意",
    description: "主管突然說：「這個功能再改一下，明天可以完成吧？」你覺得壓力很大。",
    effects: {
      experience: -40
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-2-3",
    characterId: "goto",
    contentStage: 2,
    type: "destiny",
    title: "坐太久腰痠背痛",
    description: "你坐在電腦前太久，腰和背都開始不舒服。",
    instruction: "全組組員起立做 5 秒伸展拉筋。",
    resolutionMode: "task",
    task: true,
    successEffects: {},
    failureEffects: {
      experience: -40
    },
    successLabel: "完成伸展",
    failureLabel: "未完成"
  },
  {
    id: "goto-destiny-2-4",
    characterId: "goto",
    contentStage: 2,
    type: "destiny",
    title: "不小心刪錯資料",
    description: "你按錯按鈕，把測試用的資料刪掉了，只好請大家喝飲料道歉。",
    effects: {
      experience: -20,
      money: -200
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-3-1",
    characterId: "goto",
    contentStage: 3,
    type: "chance",
    title: "做出受歡迎的手機程式",
    description: "你做的手機程式很多人喜歡使用，大家都開始注意到你的作品。",
    effects: {
      experience: 60,
      money: 500
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-3-2",
    characterId: "goto",
    contentStage: 3,
    type: "chance",
    title: "被邀請上台分享",
    description: "你被邀請到活動上分享做程式的經驗，很多人覺得你很厲害。",
    effects: {
      experience: 60
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-3-3",
    characterId: "goto",
    contentStage: 3,
    type: "chance",
    title: "團隊完成困難任務",
    description: "你和團隊一起完成很難的工作，公司給大家獎勵。",
    effects: {
      experience: 20,
      money: 300
    },
    instruction: "小組全體成員伸出手疊在一起，齊聲大喊：「衝向頂峰！」",
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-3-4",
    characterId: "goto",
    contentStage: 3,
    type: "chance",
    title: "公司給你特別獎金",
    description: "因為你成為團隊中很重要的人，公司給你一筆特別獎金。",
    effects: {
      money: 600
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-3-1",
    characterId: "goto",
    contentStage: 3,
    type: "destiny",
    title: "遇到很大的安全問題",
    description: "公司的系統被發現有安全漏洞，大家連續加班努力修好。",
    effects: {
      experience: -60
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-3-2",
    characterId: "goto",
    contentStage: 3,
    type: "destiny",
    title: "選錯工具要重做",
    description: "一開始選的工具不好用，之前做的很多東西只好重新再做一次。",
    effects: {
      experience: -40,
      money: -200
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-3-3",
    characterId: "goto",
    contentStage: 3,
    type: "destiny",
    title: "別家公司也做出類似產品",
    description: "別家公司推出很像的產品，而且價格更便宜，你的作品賺到的錢變少了。",
    effects: {
      money: -400
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-3-4",
    characterId: "goto",
    contentStage: 3,
    type: "destiny",
    title: "重要隊友離開了",
    description: "一位很重要的隊友離開團隊，大家需要重新合作起來。",
    instruction: "組員在 15 秒內手拉手圍成圓圈，幫主角集氣。",
    resolutionMode: "task",
    task: true,
    successEffects: {
      experience: -20
    },
    failureEffects: {
      experience: -60
    },
    successLabel: "完成集氣，損失變少",
    failureLabel: "未完成"
  },
  {
    id: "goto-chance-4-1",
    characterId: "goto",
    contentStage: 4,
    type: "chance",
    title: "老朋友帶來熱湯",
    description: "你心情低落的時候，老朋友帶來熱湯陪你聊天。",
    effects: {
      experience: 60
    },
    instruction: "組員扮演老朋友，對主角說：「程式很難，但朋友會陪你！」並拍拍肩。",
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-4-2",
    characterId: "goto",
    contentStage: 4,
    type: "chance",
    title: "知道自己很寶貴",
    description: "你慢慢明白：人的價值不是只有工作做得好不好，每個人本來就很寶貴。",
    effects: {
      experience: 60
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-4-3",
    characterId: "goto",
    contentStage: 4,
    type: "chance",
    title: "網路社群一起幫忙",
    description: "很多會寫程式的人在網路上幫忙，大家一起找出問題在哪裡。",
    effects: {
      experience: 60
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-chance-4-4",
    characterId: "goto",
    contentStage: 4,
    type: "chance",
    title: "好好休假再出發",
    description: "你放了一個長假，暫時離開電腦，身體和心情都變好了。",
    effects: {
      experience: 60
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-4-1",
    characterId: "goto",
    contentStage: 4,
    type: "destiny",
    title: "系統突然大當機",
    description: "公司的電腦系統突然不能用，造成很大的損失，大家都很緊張。",
    effects: {
      experience: -40,
      money: -500
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-4-2",
    characterId: "goto",
    contentStage: 4,
    type: "destiny",
    title: "眼睛和腰都不舒服",
    description: "你長時間看螢幕、坐姿又不好，眼睛和腰都不舒服，只好去看醫生。",
    effects: {
      experience: -60,
      money: -200
    },
    resolutionMode: "automatic"
  },
  {
    id: "goto-destiny-4-3",
    characterId: "goto",
    contentStage: 4,
    type: "destiny",
    title: "擔心工作被 AI 影響",
    description: "你聽到很多人在討論 AI，開始擔心自己以後還能不能做好工作。",
    instruction: "全組組員在 10 秒內跟主角說：「一豪，你的關心和創意，AI 學不走！」",
    resolutionMode: "task",
    task: true,
    successEffects: {},
    failureEffects: {
      experience: -60
    },
    successLabel: "完成鼓勵",
    failureLabel: "未完成"
  },
  {
    id: "goto-destiny-4-4",
    characterId: "goto",
    contentStage: 4,
    type: "destiny",
    title: "被誤會要負責",
    description: "工作延誤不是你一個人的錯，但有人把責任都推給工程師團隊，大家溝通變得很困難。",
    effects: {
      experience: -60
    },
    resolutionMode: "automatic"
  }
];
