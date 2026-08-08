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
      "label": "先接校園小演出",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "小演出讓 Zoey 得到一些收入，但舞台姿勢練習時間少了一點。"
    },
    "optionB": {
      "label": "花錢上姿勢課",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "上完姿勢課後，Zoey 更知道怎麼站穩和微笑。"
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
      "label": "先接活動唱歌",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "活動唱歌得到收入，但請同學給建議的時間少了一些。"
    },
    "optionB": {
      "label": "花錢錄下來檢查",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "錄下自己的歌聲後，Zoey 更知道哪裡可以唱得更好。"
    }
  },
  {
    "id": "zoey-destiny-1-1",
    "characterId": "zoey",
    "contentStage": 1,
    "type": "destiny",
    "title": "老師稱讚節奏感",
    "description": "Zoey在偶像旅程中遇到一個剛剛好的幫助。還在學習階段，這次小小順利讓他更有信心。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-1-2",
    "characterId": "zoey",
    "contentStage": 1,
    "type": "destiny",
    "title": "校園小演出獎勵",
    "description": "Zoey原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
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
      "label": "先接短活動賺錢",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "短活動讓收入增加，但練習和休息的安排變得比較緊。"
    },
    "optionB": {
      "label": "花錢請老師排課",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "老師幫忙安排後，Zoey 更懂得健康又有效地練習。"
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
      "label": "先接主持小任務",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "主持小任務帶來收入，但正式自我介紹的準備時間少了一些。"
    },
    "optionB": {
      "label": "花錢練自我介紹",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "練習後，Zoey 更能清楚又有精神地介紹自己。"
    }
  },
  {
    "id": "zoey-destiny-2-1",
    "characterId": "zoey",
    "contentStage": 2,
    "type": "destiny",
    "title": "練習室前輩指點",
    "description": "Zoey在偶像旅程中遇到一個剛剛好的幫助。作為新人，這次被提醒和肯定，讓他更知道下一步怎麼做。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-2-2",
    "characterId": "zoey",
    "contentStage": 2,
    "type": "destiny",
    "title": "新人活動車馬費",
    "description": "Zoey原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
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
      "label": "先唱流行商演",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "商演帶來收入，但 Zoey 暫時少了一點發展自己特色的時間。"
    },
    "optionB": {
      "label": "花錢做特色練習",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "投入練習後，Zoey 更知道自己的聲音和風格。"
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
      "label": "先完成個人工作",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "個人工作讓收入穩定，但陪新人暖身的時間少了一些。"
    },
    "optionB": {
      "label": "花錢準備暖身課",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "準備暖身課後，Zoey 更會帶團隊一起進入狀態。"
    }
  },
  {
    "id": "zoey-destiny-3-1",
    "characterId": "zoey",
    "contentStage": 3,
    "type": "destiny",
    "title": "舞台表現被肯定",
    "description": "Zoey在偶像旅程中遇到一個剛剛好的幫助。在專業成長中，這次經驗讓他的判斷更成熟。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-3-2",
    "characterId": "zoey",
    "contentStage": 3,
    "type": "destiny",
    "title": "作品得到分潤",
    "description": "Zoey原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
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
      "label": "接更多商業舞台",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "商業舞台帶來收入，但用舞台分享希望的時間少了一些。"
    },
    "optionB": {
      "label": "自費辦希望演出",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "希望演出鼓勵了大家，Zoey 也更確定自己的影響力可以祝福人。"
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
      "label": "先接付費工作坊",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "付費工作坊讓資源更穩，但免費陪伴孩子的名額少了一些。"
    },
    "optionB": {
      "label": "自費辦表達課",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "表達課幫助害羞的孩子開口，Zoey 得到更多助人的經驗。"
    }
  },
  {
    "id": "zoey-destiny-4-1",
    "characterId": "zoey",
    "contentStage": 4,
    "type": "destiny",
    "title": "歌聲鼓勵了孩子",
    "description": "Zoey在偶像旅程中遇到一個剛剛好的幫助。成為專家後，這次助人的回饋讓他更確定自己的使命。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "zoey-destiny-4-2",
    "characterId": "zoey",
    "contentStage": 4,
    "type": "destiny",
    "title": "公益演出有人贊助",
    "description": "Zoey原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
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
