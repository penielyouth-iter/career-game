import type { Card } from "./types";

export const zoeyCards:Card[]=[
  {
    "id": "zoey-chance-1-1",
    "characterId": "zoey",
    "contentStage": 1,
    "type": "chance",
    "title": "社團唱歌課",
    "description": "Zoey 參加學校社團，老師教她用肚子呼吸，唱歌比以前更穩了。",
    "instruction": "全組用 10 秒做出「社團唱歌課」的加油動作，最後一起喊：「Zoey，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zoey-chance-1-2",
    "characterId": "zoey",
    "contentStage": 1,
    "type": "chance",
    "title": "基本舞步練習",
    "description": "她跟著節拍練基本舞步，雖然動作還不熟，但越來越敢動。",
    "instruction": "全組用 10 秒做出「基本舞步練習」的加油動作，最後一起喊：「Zoey，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zoey-chance-1-3",
    "characterId": "zoey",
    "contentStage": 1,
    "type": "chance",
    "title": "舞台姿勢練習",
    "description": "社團練習時，Zoey 試著站穩、微笑，讓自己看起來更有精神。",
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
    "id": "zoey-chance-1-4",
    "characterId": "zoey",
    "contentStage": 1,
    "type": "chance",
    "title": "請同學聽聽看",
    "description": "Zoey 練了一小段歌，可以請同學給建議，也可以先自己調整唱法。",
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
    "id": "zoey-destiny-1-1",
    "characterId": "zoey",
    "contentStage": 1,
    "type": "destiny",
    "title": "節拍一直跟不上",
    "description": "音樂速度有點快，Zoey 常常慢半拍，覺得自己是不是沒有天分。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-1-2",
    "characterId": "zoey",
    "contentStage": 1,
    "type": "destiny",
    "title": "唱太大聲喉嚨累",
    "description": "她太想唱好，一直用力唱，喉嚨變得不舒服。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-1-3",
    "characterId": "zoey",
    "contentStage": 1,
    "type": "destiny",
    "title": "忘記帶練習資料",
    "description": "社團練習時，她忘記帶歌詞和筆記，只能跟著別人看。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-1-4",
    "characterId": "zoey",
    "contentStage": 1,
    "type": "destiny",
    "title": "練習時太緊張",
    "description": "社團練習時，Zoey 一想到要讓大家聽見，就緊張到聲音變小。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-chance-2-1",
    "characterId": "zoey",
    "contentStage": 2,
    "type": "chance",
    "title": "新人試鏡表現穩定",
    "description": "Zoey 在小型試鏡中表現穩定，評審看見她願意學習，給她練習生機會。",
    "instruction": "全組用 10 秒做出「新人試鏡表現穩定」的加油動作，最後一起喊：「Zoey，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zoey-chance-2-2",
    "characterId": "zoey",
    "contentStage": 2,
    "type": "chance",
    "title": "新人課程很扎實",
    "description": "公司安排唱歌、舞蹈和禮貌訓練，Zoey 更明白偶像工作不只是漂亮上台。",
    "instruction": "全組用 10 秒做出「新人課程很扎實」的加油動作，最後一起喊：「Zoey，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zoey-chance-2-3",
    "characterId": "zoey",
    "contentStage": 2,
    "type": "chance",
    "title": "練習時間怎麼安排",
    "description": "每天都有很多課，Zoey 可以熬夜多練，也可以安排休息讓身體保持健康。",
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
    "id": "zoey-chance-2-4",
    "characterId": "zoey",
    "contentStage": 2,
    "type": "chance",
    "title": "新人自我介紹",
    "description": "新人見面會上，Zoey 要用清楚又有精神的方式介紹自己。",
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
    "id": "zoey-destiny-2-1",
    "characterId": "zoey",
    "contentStage": 2,
    "type": "destiny",
    "title": "動作常被老師糾正",
    "description": "舞蹈老師一直提醒手的位置和腳步，Zoey 覺得自己怎麼都做不好。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-2-2",
    "characterId": "zoey",
    "contentStage": 2,
    "type": "destiny",
    "title": "和同伴比較心情低落",
    "description": "看到其他新人進步很快，Zoey 忍不住一直比較，心裡很難過。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-2-3",
    "characterId": "zoey",
    "contentStage": 2,
    "type": "destiny",
    "title": "新人收入不穩定",
    "description": "新人工作機會不穩定，交通和服裝準備花了不少錢。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-2-4",
    "characterId": "zoey",
    "contentStage": 2,
    "type": "destiny",
    "title": "團隊排練吵起來",
    "description": "大家對站位和動作有不同意見，排練氣氛變得緊張。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-chance-3-1",
    "characterId": "zoey",
    "contentStage": 3,
    "type": "chance",
    "title": "找到自己的聲音",
    "description": "Zoey 更知道什麼歌適合自己，也能把感情唱進歌曲裡。",
    "instruction": "全組用 10 秒做出「找到自己的聲音」的加油動作，最後一起喊：「Zoey，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zoey-chance-3-2",
    "characterId": "zoey",
    "contentStage": 3,
    "type": "chance",
    "title": "參與正式作品",
    "description": "她加入一首新歌的錄音和排練，感受到專業作品需要很多人一起完成。",
    "instruction": "全組用 10 秒做出「參與正式作品」的加油動作，最後一起喊：「Zoey，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zoey-chance-3-3",
    "characterId": "zoey",
    "contentStage": 3,
    "type": "chance",
    "title": "要模仿流行還是做自己",
    "description": "公司建議她模仿最近流行的風格，但 Zoey 也想保留自己的特色。",
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
    "id": "zoey-chance-3-4",
    "characterId": "zoey",
    "contentStage": 3,
    "type": "chance",
    "title": "帶新人暖身",
    "description": "有新練習生加入，Zoey 試著帶大家做簡單暖身，幫助團隊進入狀態。",
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
    "id": "zoey-destiny-3-1",
    "characterId": "zoey",
    "contentStage": 3,
    "type": "destiny",
    "title": "錄音一直重來",
    "description": "一句歌詞錄了很多次都不滿意，Zoey 又累又挫折。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-3-2",
    "characterId": "zoey",
    "contentStage": 3,
    "type": "destiny",
    "title": "表演前身體不舒服",
    "description": "重要表演前，她因為練太多而聲音沙啞，只好減少練習並休息。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-3-3",
    "characterId": "zoey",
    "contentStage": 3,
    "type": "destiny",
    "title": "被網路比較",
    "description": "有人把她和其他歌手比較，留言讓她心情受影響。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-3-4",
    "characterId": "zoey",
    "contentStage": 3,
    "type": "destiny",
    "title": "團隊壓力變大",
    "description": "正式作品快完成時，大家都很累，說話也變得急。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-chance-4-1",
    "characterId": "zoey",
    "contentStage": 4,
    "type": "chance",
    "title": "用歌鼓勵孩子",
    "description": "Zoey 到兒童活動唱歌，孩子們跟著一起唱，她發現歌聲可以帶給人力量。",
    "instruction": "全組用 10 秒做出「用歌鼓勵孩子」的加油動作，最後一起喊：「Zoey，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zoey-chance-4-2",
    "characterId": "zoey",
    "contentStage": 4,
    "type": "chance",
    "title": "設計公益演出",
    "description": "她和團隊一起安排一場公益表演，把收入拿去幫助需要陪伴的家庭。",
    "instruction": "全組用 10 秒做出「設計公益演出」的加油動作，最後一起喊：「Zoey，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "zoey-chance-4-3",
    "characterId": "zoey",
    "contentStage": 4,
    "type": "chance",
    "title": "成名後要做什麼",
    "description": "Zoey 有更多影響力，可以只追求更多掌聲，也可以用舞台分享希望。",
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
    "id": "zoey-chance-4-4",
    "characterId": "zoey",
    "contentStage": 4,
    "type": "chance",
    "title": "教大家勇敢表達",
    "description": "Zoey 開工作坊，鼓勵害羞的孩子用唱歌和動作說出自己的心情。",
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
    "id": "zoey-destiny-4-1",
    "characterId": "zoey",
    "contentStage": 4,
    "type": "destiny",
    "title": "太多人期待你完美",
    "description": "成為知名歌手後，大家希望 Zoey 每次都不能出錯，讓她壓力很大。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-4-2",
    "characterId": "zoey",
    "contentStage": 4,
    "type": "destiny",
    "title": "忙到忘記陪家人朋友",
    "description": "工作排得很滿，她發現自己很久沒有好好陪重要的人說話。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-4-3",
    "characterId": "zoey",
    "contentStage": 4,
    "type": "destiny",
    "title": "被誤會時要溫柔回應",
    "description": "網路上有人誤會 Zoey 的話，她需要冷靜說明，不跟著生氣。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-4-4",
    "characterId": "zoey",
    "contentStage": 4,
    "type": "destiny",
    "title": "忘記唱歌的初心",
    "description": "舞台越來越大，Zoey 差點忘記自己喜歡唱歌、也想鼓勵人的心。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  }
];
