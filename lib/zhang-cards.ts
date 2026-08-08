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
      "label": "先接賺錢任務",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "先把錢補起來，雖然少了一點練習時間，但旅程可以繼續前進。"
    },
    "optionB": {
      "label": "花錢加強練習",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "願意投資自己，花一些錢換來更多經驗值。"
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
      "label": "先接賺錢任務",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "先把錢補起來，雖然少了一點練習時間，但旅程可以繼續前進。"
    },
    "optionB": {
      "label": "花錢加強練習",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "願意投資自己，花一些錢換來更多經驗值。"
    }
  },
  {
    "id": "zhang-destiny-1-1",
    "characterId": "zhang",
    "contentStage": 1,
    "type": "destiny",
    "title": "材料買太多",
    "description": "你太興奮，一次買了太多材料，結果有些用不完，只好低價賣掉。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-1-2",
    "characterId": "zhang",
    "contentStage": 1,
    "type": "destiny",
    "title": "客人聽不懂商品介紹",
    "description": "你講得太快，客人不知道商品好在哪裡，很多人看一看就離開了。",
    "effects": {
      "money": -30
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
      "label": "先接賺錢任務",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "先把錢補起來，雖然少了一點練習時間，但旅程可以繼續前進。"
    },
    "optionB": {
      "label": "花錢加強練習",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "願意投資自己，花一些錢換來更多經驗值。"
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
      "label": "先接賺錢任務",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "先把錢補起來，雖然少了一點練習時間，但旅程可以繼續前進。"
    },
    "optionB": {
      "label": "花錢加強練習",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "願意投資自己，花一些錢換來更多經驗值。"
    }
  },
  {
    "id": "zhang-destiny-2-1",
    "characterId": "zhang",
    "contentStage": 2,
    "type": "destiny",
    "title": "隊友吵架了",
    "description": "兩位隊友對包裝設計有不同想法，越講越大聲，工作進度變慢。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-2-2",
    "characterId": "zhang",
    "contentStage": 2,
    "type": "destiny",
    "title": "廠商臨時漲價",
    "description": "原本說好的材料價格突然變貴，你只好多花錢才能完成訂單。",
    "effects": {
      "money": -30
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
      "label": "先接賺錢任務",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "先把錢補起來，雖然少了一點練習時間，但旅程可以繼續前進。"
    },
    "optionB": {
      "label": "花錢加強練習",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "願意投資自己，花一些錢換來更多經驗值。"
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
      "label": "先接賺錢任務",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "先把錢補起來，雖然少了一點練習時間，但旅程可以繼續前進。"
    },
    "optionB": {
      "label": "花錢加強練習",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "願意投資自己，花一些錢換來更多經驗值。"
    }
  },
  {
    "id": "zhang-destiny-3-1",
    "characterId": "zhang",
    "contentStage": 3,
    "type": "destiny",
    "title": "太多訂單做不完",
    "description": "訂單暴增，但團隊人手不夠，大家累到出錯，客人開始抱怨。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-3-2",
    "characterId": "zhang",
    "contentStage": 3,
    "type": "destiny",
    "title": "別人做出類似商品",
    "description": "別家公司推出很像的商品，而且價格更便宜，你的收入變少了。",
    "effects": {
      "money": -30
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
      "label": "先接賺錢任務",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "先把錢補起來，雖然少了一點練習時間，但旅程可以繼續前進。"
    },
    "optionB": {
      "label": "花錢加強練習",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "願意投資自己，花一些錢換來更多經驗值。"
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
      "label": "先接賺錢任務",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "先把錢補起來，雖然少了一點練習時間，但旅程可以繼續前進。"
    },
    "optionB": {
      "label": "花錢加強練習",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "願意投資自己，花一些錢換來更多經驗值。"
    }
  },
  {
    "id": "zhang-destiny-4-1",
    "characterId": "zhang",
    "contentStage": 4,
    "type": "destiny",
    "title": "公司快沒錢了",
    "description": "前面幾次錯誤決定讓公司花太多錢，現在帳戶快見底了。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zhang-destiny-4-2",
    "characterId": "zhang",
    "contentStage": 4,
    "type": "destiny",
    "title": "合夥人不守信用",
    "description": "原本一起合作的人沒有照約定做事，讓你和團隊很受傷。",
    "effects": {
      "money": -30
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
