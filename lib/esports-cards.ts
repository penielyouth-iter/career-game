import type { Card } from "./types";

export const esportsCards:Card[]=[
  {
    "id": "esports-chance-1-1",
    "characterId": "esports",
    "contentStage": 1,
    "type": "chance",
    "title": "被發現有反應天分",
    "description": "小明在班級友誼賽中反應很快，能冷靜看地圖、提醒隊友，老師發現他很有電競天分。",
    "instruction": "全組用 10 秒做出「被發現有反應天分」的加油動作，最後一起喊：「小明，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "esports-chance-1-2",
    "characterId": "esports",
    "contentStage": 1,
    "type": "chance",
    "title": "眼睛追蹤小訓練",
    "description": "教練說電競選手不是亂按鍵，而是要看得清楚、反應穩定。小明開始練習眼睛追蹤。",
    "instruction": "小明用手指慢慢畫大圈，全組頭不能動，只用眼睛追手指 5 秒，最後一起喊：「看到了！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "esports-chance-1-3",
    "characterId": "esports",
    "contentStage": 1,
    "type": "chance",
    "title": "練習時間怎麼安排",
    "description": "小明很想一直練習，但也知道功課、睡覺和運動都很重要。",
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
    "id": "esports-chance-1-4",
    "characterId": "esports",
    "contentStage": 1,
    "type": "chance",
    "title": "家人願意支持",
    "description": "小明和家人好好溝通，答應會安排時間、保護眼睛，家人願意支持他參加試訓。",
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
    "id": "esports-destiny-1-1",
    "characterId": "esports",
    "contentStage": 1,
    "type": "destiny",
    "title": "上課偷偷想比賽",
    "description": "小明上課時一直想剛剛的比賽畫面，結果老師問問題時完全答不出來。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-1-2",
    "characterId": "esports",
    "contentStage": 1,
    "type": "destiny",
    "title": "練太久眼睛痠",
    "description": "小明連續盯著螢幕太久，眼睛又乾又痠，只好先停下來休息。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-1-3",
    "characterId": "esports",
    "contentStage": 1,
    "type": "destiny",
    "title": "輸了以後很生氣",
    "description": "比賽輸掉後，小明差點怪隊友。他需要學會先冷靜，再討論怎麼進步。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-1-4",
    "characterId": "esports",
    "contentStage": 1,
    "type": "destiny",
    "title": "忘記做手腕伸展",
    "description": "練習前忘記伸展，手腕變得不舒服，今天的操作也變得不穩。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-chance-2-1",
    "characterId": "esports",
    "contentStage": 2,
    "type": "chance",
    "title": "通過青訓試訓",
    "description": "小明在試訓中表現穩定，不只會操作，也會聽隊友說話，因此進入青訓隊。",
    "instruction": "全組用 10 秒做出「通過青訓試訓」的加油動作，最後一起喊：「小明，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "esports-chance-2-2",
    "characterId": "esports",
    "contentStage": 2,
    "type": "chance",
    "title": "報位練習很清楚",
    "description": "隊友看不到全部畫面，小明要用簡短清楚的話提醒大家敵人在哪裡。",
    "instruction": "小明喊：「左邊、右邊、中間！」全組照指令轉頭，最後一起喊：「收到！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "esports-chance-2-3",
    "characterId": "esports",
    "contentStage": 2,
    "type": "chance",
    "title": "當替補也要努力",
    "description": "小明暫時還不是先發。他可以抱怨自己沒上場，也可以認真觀察學長怎麼打。",
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
    "id": "esports-chance-2-4",
    "characterId": "esports",
    "contentStage": 2,
    "type": "chance",
    "title": "教練教你看重播",
    "description": "教練帶小明看比賽重播，找出哪裡做得好、哪裡可以改進。",
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
    "id": "esports-destiny-2-1",
    "characterId": "esports",
    "contentStage": 2,
    "type": "destiny",
    "title": "隊友同時大喊",
    "description": "比賽中大家一起講話，重要訊息被蓋掉，隊伍錯過好機會。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-2-2",
    "characterId": "esports",
    "contentStage": 2,
    "type": "destiny",
    "title": "練習室網路斷線",
    "description": "重要練習賽開始前，網路突然不穩，大家只能重新安排練習。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-2-3",
    "characterId": "esports",
    "contentStage": 2,
    "type": "destiny",
    "title": "輸了需要好好檢討",
    "description": "練習賽輸得很慘，但小明不能只說「都不是我的錯」。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-2-4",
    "characterId": "esports",
    "contentStage": 2,
    "type": "destiny",
    "title": "睡太少反應變慢",
    "description": "小明前一天太晚睡，隔天練習反應慢半拍，教練提醒他職業選手更要照顧身體。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-chance-3-1",
    "characterId": "esports",
    "contentStage": 3,
    "type": "chance",
    "title": "第一次先發上場",
    "description": "正式比賽中，主力隊員臨時不舒服，小明被派上場。他雖然緊張，還是穩穩完成任務。",
    "instruction": "全組用 10 秒做出「第一次先發上場」的加油動作，最後一起喊：「小明，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "esports-chance-3-2",
    "characterId": "esports",
    "contentStage": 3,
    "type": "chance",
    "title": "關鍵團隊配合",
    "description": "最後一波會戰要開始了，小明提醒大家一起行動，不要各打各的。",
    "instruction": "全組一起倒數 3、2、1，然後同時拍手喊：「一起上！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "esports-chance-3-3",
    "characterId": "esports",
    "contentStage": 3,
    "type": "chance",
    "title": "接受訪問怎麼說",
    "description": "贏下比賽後，主持人問小明誰最厲害。他可以只稱讚自己，也可以感謝全隊。",
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
    "id": "esports-chance-3-4",
    "characterId": "esports",
    "contentStage": 3,
    "type": "chance",
    "title": "粉絲送來加油卡片",
    "description": "有小朋友寫卡片給小明，說因為他學會輸了也不放棄，讓小明很受鼓勵。",
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
    "id": "esports-destiny-3-1",
    "characterId": "esports",
    "contentStage": 3,
    "type": "destiny",
    "title": "關鍵時刻按錯鍵",
    "description": "比賽最緊張的時候，小明一急按錯鍵，讓隊伍失去一次好機會。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-3-2",
    "characterId": "esports",
    "contentStage": 3,
    "type": "destiny",
    "title": "網路留言亂批評",
    "description": "有些人在網路上亂罵小明，讓他心情很受影響，練習也變得不專心。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-3-3",
    "characterId": "esports",
    "contentStage": 3,
    "type": "destiny",
    "title": "手腕需要休息",
    "description": "連續訓練後，小明手腕不舒服，物理治療師提醒他要伸展和休息。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-3-4",
    "characterId": "esports",
    "contentStage": 3,
    "type": "destiny",
    "title": "廣告拍攝太累",
    "description": "小明接到廣告工作，雖然賺到錢，但拍攝到很晚，影響隔天練習。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-chance-4-1",
    "characterId": "esports",
    "contentStage": 4,
    "type": "chance",
    "title": "世界賽最後一局",
    "description": "世界大賽最後一局，小明提醒大家冷靜溝通，隊伍成功打出最棒的配合。",
    "instruction": "小明喊：「冷靜、溝通、一起贏！」全組一起擊掌並喊：「我們做到了！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "esports-chance-4-2",
    "characterId": "esports",
    "contentStage": 4,
    "type": "chance",
    "title": "成為會鼓勵人的隊長",
    "description": "小明不只自己變強，也開始照顧新人，教他們怎麼練習、怎麼面對輸贏。",
    "instruction": "全組用 10 秒做出「成為會鼓勵人的隊長」的加油動作，最後一起喊：「小明，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "esports-chance-4-3",
    "characterId": "esports",
    "contentStage": 4,
    "type": "chance",
    "title": "冠軍獎金怎麼用",
    "description": "小明拿到一筆獎金。可以買更好的設備，也可以拿一部分支持兒童電競營隊。",
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
    "id": "esports-chance-4-4",
    "characterId": "esports",
    "contentStage": 4,
    "type": "chance",
    "title": "分享健康電競觀念",
    "description": "小明受邀分享：真正的電競選手要守時間、保護眼睛、尊重隊友。",
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
    "id": "esports-destiny-4-1",
    "characterId": "esports",
    "contentStage": 4,
    "type": "destiny",
    "title": "冠軍壓力變大",
    "description": "得到冠軍後，大家期待小明每次都要贏，讓他壓力變得很大。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-4-2",
    "characterId": "esports",
    "contentStage": 4,
    "type": "destiny",
    "title": "出國比賽作息混亂",
    "description": "跨國比賽讓小明睡覺時間亂掉，第一天練習精神很差。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-4-3",
    "characterId": "esports",
    "contentStage": 4,
    "type": "destiny",
    "title": "重要證件找不到",
    "description": "出發比賽前，小明發現重要證件不見了，整隊都很緊張。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-4-4",
    "characterId": "esports",
    "contentStage": 4,
    "type": "destiny",
    "title": "忘記一開始的快樂",
    "description": "比賽越來越大，小明差點忘記自己一開始只是喜歡團隊合作和挑戰。幸好隊友提醒他找回初心。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  }
];
