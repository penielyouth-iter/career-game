import type { Card } from "./types";

export const dongCards:Card[]=[
  {
    "id": "dong-chance-1-1",
    "characterId": "dong",
    "contentStage": 1,
    "type": "chance",
    "title": "第一次學看診",
    "description": "董悟元在課堂上學到，獸醫要先觀察、再溫柔靠近，不能只靠猜測。",
    "instruction": "全組用 10 秒做出「小獸醫觀察中」的姿勢，最後一起喊：「慢慢看，仔細聽！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成觀察"
  },
  {
    "id": "dong-chance-1-2",
    "characterId": "dong",
    "contentStage": 1,
    "type": "chance",
    "title": "幫忙整理診間",
    "description": "悟元在獸醫診所見習，幫忙把工具和資料放整齊，學會照顧環境也很重要。",
    "instruction": "全組假裝把桌面整理乾淨，做 3 個收拾動作，最後比出大拇指。",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "整理完成"
  },
  {
    "id": "dong-chance-1-3",
    "characterId": "dong",
    "contentStage": 1,
    "type": "chance",
    "title": "買練習書還是先打工",
    "description": "悟元想買一本動物照顧入門書，但也可以先幫忙打工存錢。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先接賺錢任務",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "先把錢存起來，雖然少了一點讀書時間，但準備更安心。"
    },
    "optionB": {
      "label": "花錢買練習書",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "願意投資學習，對獸醫工作更了解了。"
    }
  },
  {
    "id": "dong-chance-1-4",
    "characterId": "dong",
    "contentStage": 1,
    "type": "chance",
    "title": "參加小小志工日",
    "description": "學校附近有動物照顧志工活動，悟元可以去幫忙，也可以先做簡單工作準備交通費。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先接賺錢任務",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "先把交通費準備好，下一次就能更放心參加。"
    },
    "optionB": {
      "label": "花錢參加活動",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "實際去幫忙後，悟元更知道照顧生命需要耐心。"
    }
  },
  {
    "id": "dong-destiny-1-1",
    "characterId": "dong",
    "contentStage": 1,
    "type": "destiny",
    "title": "資料背混了",
    "description": "動物照顧知識很多，悟元把幾個重點記反了，只好重新整理筆記。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-1-2",
    "characterId": "dong",
    "contentStage": 1,
    "type": "destiny",
    "title": "被叫聲嚇到",
    "description": "見習時突然聽到很大的叫聲，悟元緊張了一下，動作變得有點慢。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-1-3",
    "characterId": "dong",
    "contentStage": 1,
    "type": "destiny",
    "title": "練習用品不夠",
    "description": "悟元需要買筆記本、口罩和練習用品，零用錢一下子少了一些。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-1-4",
    "characterId": "dong",
    "contentStage": 1,
    "type": "destiny",
    "title": "交通費花太快",
    "description": "去見習地點要搭車，來回幾次後，悟元發現交通費也要好好規劃。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-chance-2-1",
    "characterId": "dong",
    "contentStage": 2,
    "type": "chance",
    "title": "新人量體重",
    "description": "悟元成為診所新人，學會溫柔引導動物站上體重機，讓醫師更快判斷狀況。",
    "instruction": "全組輕聲數 1 到 5，假裝陪害怕的小病人冷靜下來。",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成協助"
  },
  {
    "id": "dong-chance-2-2",
    "characterId": "dong",
    "contentStage": 2,
    "type": "chance",
    "title": "假日照護班",
    "description": "診所假日很忙，悟元願意幫忙整理籠舍和補充用品，得到一點加班收入。",
    "instruction": "全組做 3 個補充用品的動作，最後一起說：「環境乾淨，大家安心！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成照護"
  },
  {
    "id": "dong-chance-2-3",
    "characterId": "dong",
    "contentStage": 2,
    "type": "chance",
    "title": "下班後進修",
    "description": "悟元想報名新人課程，但也可以先多接一點診所雜務補貼生活費。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先接賺錢任務",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "多接工作讓收入穩一點，但進修時間少了一些。"
    },
    "optionB": {
      "label": "花錢上課",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "花錢進修後，悟元更懂新人工作要注意的細節。"
    }
  },
  {
    "id": "dong-chance-2-4",
    "characterId": "dong",
    "contentStage": 2,
    "type": "chance",
    "title": "買工具還是存薪水",
    "description": "悟元想買自己的聽診器，也可以先把薪水存起來，等更確定需要再買。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先接賺錢任務",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "先多做一些工作存錢，雖然練習時間少一點，但很踏實。"
    },
    "optionB": {
      "label": "花錢買工具",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "有了合適工具，悟元練習檢查時更有方向。"
    }
  },
  {
    "id": "dong-destiny-2-1",
    "characterId": "dong",
    "contentStage": 2,
    "type": "destiny",
    "title": "病歷寫太慢",
    "description": "診所很忙，悟元寫病歷時不夠熟練，需要請前輩幫忙檢查。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-2-2",
    "characterId": "dong",
    "contentStage": 2,
    "type": "destiny",
    "title": "安撫方式不對",
    "description": "悟元太快靠近緊張的小病人，對方更害怕了，前輩提醒他要慢慢來。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-2-3",
    "characterId": "dong",
    "contentStage": 2,
    "type": "destiny",
    "title": "制服弄髒了",
    "description": "忙了一整天後，悟元的制服和鞋子都髒了，只好花錢清洗和更換用品。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-2-4",
    "characterId": "dong",
    "contentStage": 2,
    "type": "destiny",
    "title": "課程臨時加費",
    "description": "新人訓練需要多買一本講義，悟元的預算變緊了一點。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-chance-3-1",
    "characterId": "dong",
    "contentStage": 3,
    "type": "chance",
    "title": "判斷狀況更快",
    "description": "悟元累積經驗後，能從動物的精神、食慾和動作看出可能問題，幫醫療團隊省下時間。",
    "instruction": "全組輪流說出一個觀察重點，例如精神、食慾、走路樣子，最後一起喊：「仔細觀察！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成判斷"
  },
  {
    "id": "dong-chance-3-2",
    "characterId": "dong",
    "contentStage": 3,
    "type": "chance",
    "title": "照護講座小收入",
    "description": "悟元受邀到社區分享簡單照顧知識，幫大家更懂得照顧家中動物。",
    "instruction": "全組用一句話提醒大家：「照顧生命要有耐心！」並一起拍手 3 下。",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成分享"
  },
  {
    "id": "dong-chance-3-3",
    "characterId": "dong",
    "contentStage": 3,
    "type": "chance",
    "title": "專科課程選擇",
    "description": "悟元想學更深入的檢查方法，但課程費用不便宜，也可以先多接一些工作存錢。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先接賺錢任務",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "先累積收入，雖然學習慢一點，但財務比較穩。"
    },
    "optionB": {
      "label": "花錢進修",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "進修後，悟元面對複雜狀況時更有把握。"
    }
  },
  {
    "id": "dong-chance-3-4",
    "characterId": "dong",
    "contentStage": 3,
    "type": "chance",
    "title": "接研究還是接門診",
    "description": "醫院有研究計畫需要幫忙，也有額外門診時段需要支援，悟元要做取捨。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先接賺錢任務",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "支援門診帶來收入，但研究時間少了一些。"
    },
    "optionB": {
      "label": "花錢做研究",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "投入研究後，悟元更懂得從資料中找答案。"
    }
  },
  {
    "id": "dong-destiny-3-1",
    "characterId": "dong",
    "contentStage": 3,
    "type": "destiny",
    "title": "複雜病例想很久",
    "description": "有個狀況不容易判斷，悟元花很多時間查資料，也學到自己還需要進步。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-3-2",
    "characterId": "dong",
    "contentStage": 3,
    "type": "destiny",
    "title": "團隊溝通漏訊息",
    "description": "交班時有一個提醒沒有說清楚，讓同事多花時間確認，悟元學到溝通要完整。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-3-3",
    "characterId": "dong",
    "contentStage": 3,
    "type": "destiny",
    "title": "儀器保養費",
    "description": "常用的檢查儀器需要保養，悟元也分擔了一部分費用。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-3-4",
    "characterId": "dong",
    "contentStage": 3,
    "type": "destiny",
    "title": "研討會交通費",
    "description": "悟元去參加獸醫研討會，學到很多，但也花了一些車資和餐費。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-chance-4-1",
    "characterId": "dong",
    "contentStage": 4,
    "type": "chance",
    "title": "帶新人看診",
    "description": "悟元成為可靠的獸醫，開始帶新人學習如何溫柔又專業地照顧生命。",
    "instruction": "全組對新人說一句鼓勵：「慢慢學，我們一起照顧好生命！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成帶領"
  },
  {
    "id": "dong-chance-4-2",
    "characterId": "dong",
    "contentStage": 4,
    "type": "chance",
    "title": "義診收到支持",
    "description": "悟元參加社區義診，幫助需要協助的家庭，也收到大家的小小支持金。",
    "instruction": "全組一起比出愛心，並說：「專業可以成為祝福！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成義診"
  },
  {
    "id": "dong-chance-4-3",
    "characterId": "dong",
    "contentStage": 4,
    "type": "chance",
    "title": "開公益課還是接診",
    "description": "悟元想開免費照護課幫助社區，也可以多接一些門診維持診所收入。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先接賺錢任務",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "多接門診讓資源更穩，之後也能繼續幫助更多人。"
    },
    "optionB": {
      "label": "花錢辦公益課",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "公益課讓更多家庭學會照顧生命，悟元也更確定自己的使命。"
    }
  },
  {
    "id": "dong-chance-4-4",
    "characterId": "dong",
    "contentStage": 4,
    "type": "chance",
    "title": "升級設備或先存錢",
    "description": "悟元想讓診所設備更好，也可以先存錢，讓團隊運作更穩。",
    "resolutionMode": "choice",
    "optionA": {
      "label": "先接賺錢任務",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "先讓收入穩定，團隊比較安心。"
    },
    "optionB": {
      "label": "花錢升級設備",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "設備更完整後，悟元能提供更好的照顧。"
    }
  },
  {
    "id": "dong-destiny-4-1",
    "characterId": "dong",
    "contentStage": 4,
    "type": "destiny",
    "title": "太想照顧所有人",
    "description": "悟元很想幫每一個需要的人，結果把行程排太滿，需要重新學會休息和分工。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-4-2",
    "characterId": "dong",
    "contentStage": 4,
    "type": "destiny",
    "title": "說明不夠清楚",
    "description": "家屬聽不懂治療計畫，心裡很擔心，悟元學到要用更簡單的話說明。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-4-3",
    "characterId": "dong",
    "contentStage": 4,
    "type": "destiny",
    "title": "急救用品補貨",
    "description": "診所急救用品用得很快，悟元需要補貨，讓下一次需要時不會缺少。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "dong-destiny-4-4",
    "characterId": "dong",
    "contentStage": 4,
    "type": "destiny",
    "title": "義診成本增加",
    "description": "公益服務需要場地和交通支出，悟元付出一些金錢，繼續把專業分享出去。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  }
];
