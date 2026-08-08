import type { Card } from "./types";

export const zhangCards:Card[]=[
  {
    "id": "zhang-chance-1-1",
    "characterId": "zhang",
    "contentStage": 1,
    "type": "chance",
    "title": "第一次擺攤賣光光",
    "description": "張玉曼在學校園遊會試著賣手作小點心，沒想到大家都說好吃，很快就賣完了！",
    "instruction": "全組用 10 秒做出「第一次擺攤賣光光」的加油動作，最後一起喊：「玉曼，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zhang-chance-1-2",
    "characterId": "zhang",
    "contentStage": 1,
    "type": "chance",
    "title": "命運的簡報",
    "description": "你有一個開店的好點子，要在很短時間內說給投資人聽。",
    "instruction": "全組用 15 秒介紹一個新商品，最後一起喊：「請支持玉曼的夢想！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zhang-chance-1-3",
    "characterId": "zhang",
    "contentStage": 1,
    "type": "chance",
    "title": "第一筆錢要怎麼用",
    "description": "你賺到第一筆錢了。可以買材料做更多商品，也可以先存起來，讓自己比較安心。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先存起來",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "先把第一筆錢存起來，金幣增加了，但這次少做一點商品練習。"
    },
    "optionB": {
      "label": "買材料練習",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "買材料做更多商品後，玉曼更懂得成本和品質。"
    }
  },
  {
    "id": "zhang-chance-1-4",
    "characterId": "zhang",
    "contentStage": 1,
    "type": "chance",
    "title": "老師教你算成本",
    "description": "老師教你把材料、時間和售價都算清楚，你發現做生意不能只靠感覺。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先幫忙顧攤賺錢",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "顧攤賺到一些金幣，但練習算成本的時間少了一點。"
    },
    "optionB": {
      "label": "買本成本練習簿",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "練習後，玉曼更知道售價不能只靠感覺。"
    }
  },
  {
    "id": "zhang-destiny-1-1",
    "characterId": "zhang",
    "contentStage": 1,
    "type": "destiny",
    "title": "老師看見你的用心",
    "description": "玉曼在企業家旅程中遇到一個剛剛好的幫助。還在學習階段，這次小小順利讓他更有信心。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-1-2",
    "characterId": "zhang",
    "contentStage": 1,
    "type": "destiny",
    "title": "小攤位賣得不錯",
    "description": "玉曼原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-1-3",
    "characterId": "zhang",
    "contentStage": 1,
    "type": "destiny",
    "title": "攤位被雨淋濕",
    "description": "活動當天下雨，桌上的海報和包裝都濕掉了，需要花錢重新準備。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-1-4",
    "characterId": "zhang",
    "contentStage": 1,
    "type": "destiny",
    "title": "緊張到忘詞",
    "description": "要上台介紹商品時，你突然緊張到忘記要說什麼。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-chance-2-1",
    "characterId": "zhang",
    "contentStage": 2,
    "type": "chance",
    "title": "招到可靠隊友",
    "description": "有同學很喜歡你的想法，願意一起分工：有人包裝、有人記帳、有人招呼客人。",
    "instruction": "全組用 10 秒做出「招到可靠隊友」的加油動作，最後一起喊：「玉曼，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zhang-chance-2-2",
    "characterId": "zhang",
    "contentStage": 2,
    "type": "chance",
    "title": "玉曼軍團集合",
    "description": "你要把團隊帶起來，讓大家知道自己負責什麼工作。",
    "instruction": "全組每人說一個職位，例如老闆、會計、設計、店員，並做出工作動作。",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zhang-chance-2-3",
    "characterId": "zhang",
    "contentStage": 2,
    "type": "chance",
    "title": "要快快賣還是慢慢做",
    "description": "訂單變多了。你可以加快速度多賣一點，也可以慢慢做，確保品質穩定。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "加快速度多賣",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "多賣一些讓收入增加，但太趕讓品質練習少了一點。"
    },
    "optionB": {
      "label": "買工具穩定品質",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "有了更好的工具，玉曼更懂得穩穩做好商品。"
    }
  },
  {
    "id": "zhang-chance-2-4",
    "characterId": "zhang",
    "contentStage": 2,
    "type": "chance",
    "title": "客人留下好評",
    "description": "客人覺得你們服務親切、商品也用心，在網路上留下很棒的評價。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先推出促銷活動",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "促銷帶來收入，但仔細回覆客人好評的時間少了一些。"
    },
    "optionB": {
      "label": "花錢學客服回覆",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "學會好好回覆後，玉曼更懂得珍惜客人的鼓勵。"
    }
  },
  {
    "id": "zhang-destiny-2-1",
    "characterId": "zhang",
    "contentStage": 2,
    "type": "destiny",
    "title": "客人給了好建議",
    "description": "玉曼在企業家旅程中遇到一個剛剛好的幫助。作為新人，這次被提醒和肯定，讓他更知道下一步怎麼做。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-2-2",
    "characterId": "zhang",
    "contentStage": 2,
    "type": "destiny",
    "title": "收到小訂單",
    "description": "玉曼原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-2-3",
    "characterId": "zhang",
    "contentStage": 2,
    "type": "destiny",
    "title": "出貨前手忙腳亂",
    "description": "客人快來拿貨了，但貼紙、盒子和商品還沒有放好。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-2-4",
    "characterId": "zhang",
    "contentStage": 2,
    "type": "destiny",
    "title": "忘記回客人訊息",
    "description": "客人問問題很久，你忙到忘記回覆，對方有點不開心。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-chance-3-1",
    "characterId": "zhang",
    "contentStage": 3,
    "type": "chance",
    "title": "商品突然大受歡迎",
    "description": "你的商品被很多人分享，訂單一下子變多，大家都開始知道張玉曼的品牌。",
    "instruction": "全組用 10 秒做出「商品突然大受歡迎」的加油動作，最後一起喊：「玉曼，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zhang-chance-3-2",
    "characterId": "zhang",
    "contentStage": 3,
    "type": "chance",
    "title": "國際大訂單來了",
    "description": "有國外客人想大量訂購，你要帶團隊確認數量、時間和品質。",
    "instruction": "全組一起數 1 到 10，最後比出 OK 手勢並喊：「訂單確認！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zhang-chance-3-3",
    "characterId": "zhang",
    "contentStage": 3,
    "type": "chance",
    "title": "開新店還是先穩住",
    "description": "你有機會開第二家店。開新店可能賺更多，但也會更忙；先穩住可以把品質做好。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先開新店試試",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "新店帶來更多收入，但品質管理的練習暫時少了一些。"
    },
    "optionB": {
      "label": "花錢改善原店",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "先把原本的店做好後，玉曼更懂得穩定經營。"
    }
  },
  {
    "id": "zhang-chance-3-4",
    "characterId": "zhang",
    "contentStage": 3,
    "type": "chance",
    "title": "學會照顧員工",
    "description": "你發現好的老闆不是只會賺錢，也要讓一起工作的人被尊重。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先追求更多業績",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "業績讓收入增加，但照顧員工的時間少了一些。"
    },
    "optionB": {
      "label": "花錢辦員工訓練",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "員工訓練讓團隊更被尊重，玉曼也更像成熟老闆。"
    }
  },
  {
    "id": "zhang-destiny-3-1",
    "characterId": "zhang",
    "contentStage": 3,
    "type": "destiny",
    "title": "團隊合作變順了",
    "description": "玉曼在企業家旅程中遇到一個剛剛好的幫助。在專業成長中，這次經驗讓他的判斷更成熟。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-3-2",
    "characterId": "zhang",
    "contentStage": 3,
    "type": "destiny",
    "title": "商品得到獎勵",
    "description": "玉曼原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-3-3",
    "characterId": "zhang",
    "contentStage": 3,
    "type": "destiny",
    "title": "只想贏過別人",
    "description": "你太想當第一名，開始不太聽隊友的意見，團隊氣氛變差。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-3-4",
    "characterId": "zhang",
    "contentStage": 3,
    "type": "destiny",
    "title": "重要夥伴想離開",
    "description": "一位重要隊友覺得太累，想要離開團隊。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-chance-4-1",
    "characterId": "zhang",
    "contentStage": 4,
    "type": "chance",
    "title": "朋友陪你重新整理",
    "description": "公司遇到困難時，朋友陪你一起看帳本、整理訂單，幫你一步一步找回方向。",
    "instruction": "全組用 10 秒做出「朋友陪你重新整理」的加油動作，最後一起喊：「玉曼，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zhang-chance-4-2",
    "characterId": "zhang",
    "contentStage": 4,
    "type": "chance",
    "title": "明白錢不是全部",
    "description": "你慢慢明白，賺錢很重要，但誠實、照顧人、做對的事也很重要。",
    "instruction": "全組用 10 秒做出「明白錢不是全部」的加油動作，最後一起喊：「玉曼，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zhang-chance-4-3",
    "characterId": "zhang",
    "contentStage": 4,
    "type": "chance",
    "title": "重新出發的選擇",
    "description": "你可以重新做一個更環保的商品，也可以先縮小公司，慢慢把品質做好。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先縮小公司存資源",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "縮小公司讓金幣比較穩，但研發環保商品的經驗少了一點。"
    },
    "optionB": {
      "label": "投入環保商品",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "做出更環保的商品後，玉曼更知道企業也能照顧世界。"
    }
  },
  {
    "id": "zhang-chance-4-4",
    "characterId": "zhang",
    "contentStage": 4,
    "type": "chance",
    "title": "好管家的新公司",
    "description": "你決定讓公司不只賺錢，也要幫助社區和需要的人。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先接穩定訂單",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "穩定訂單讓公司有收入，但幫助社區的行動少了一些。"
    },
    "optionB": {
      "label": "花錢做社區計畫",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "社區計畫讓更多人被幫助，玉曼也更確定公司可以成為祝福。"
    }
  },
  {
    "id": "zhang-destiny-4-1",
    "characterId": "zhang",
    "contentStage": 4,
    "type": "destiny",
    "title": "公司幫助了社區",
    "description": "玉曼在企業家旅程中遇到一個剛剛好的幫助。成為專家後，這次助人的回饋讓他更確定自己的使命。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-4-2",
    "characterId": "zhang",
    "contentStage": 4,
    "type": "destiny",
    "title": "善意合作帶來資源",
    "description": "玉曼原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-4-3",
    "characterId": "zhang",
    "contentStage": 4,
    "type": "destiny",
    "title": "面對失敗很難過",
    "description": "你看著空空的辦公室，覺得自己是不是再也站不起來了。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-4-4",
    "characterId": "zhang",
    "contentStage": 4,
    "type": "destiny",
    "title": "需要向大家道歉",
    "description": "你以前太急著成功，忽略了一些人的感受。現在你決定誠實道歉，重新學習做負責任的老闆。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  }
];
