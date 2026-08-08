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
      "label": "先接遊戲測試",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "遊戲測試得到收入，但健康練習和休息時間少了一些。"
    },
    "optionB": {
      "label": "花錢排健康訓練",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "排好訓練後，小明更懂得練習、功課和休息要平衡。"
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
      "label": "先做家事存錢",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "先存到參加試訓的費用，但和家人討論練習計畫的時間少了一點。"
    },
    "optionB": {
      "label": "花錢做試訓準備",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "準備好作息和護眼計畫後，小明更能讓家人放心。"
    }
  },
  {
    "id": "esports-destiny-1-1",
    "characterId": "esports",
    "contentStage": 1,
    "type": "destiny",
    "title": "隊友稱讚你的報位",
    "description": "小明在電競選手旅程中遇到一個剛剛好的幫助。還在學習階段，這次小小順利讓他更有信心。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-1-2",
    "characterId": "esports",
    "contentStage": 1,
    "type": "destiny",
    "title": "校園賽小獎金",
    "description": "小明原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
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
      "label": "先接陪練賺錢",
      "effects": {
        "experience": -20,
        "money": 50
      },
      "resultDescription": "陪練增加收入，但觀察學長打法的時間少了一些。"
    },
    "optionB": {
      "label": "花錢看重播課",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "認真學習後，小明更知道替補時也能成長。"
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
      "label": "先接練習賽支援",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "支援練習賽有收入，但和教練看重播的時間少了一些。"
    },
    "optionB": {
      "label": "花錢做重播分析",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "分析後，小明更知道自己哪裡能改進。"
    }
  },
  {
    "id": "esports-destiny-2-1",
    "characterId": "esports",
    "contentStage": 2,
    "type": "destiny",
    "title": "教練指出進步方向",
    "description": "小明在電競選手旅程中遇到一個剛剛好的幫助。作為新人，這次被提醒和肯定，讓他更知道下一步怎麼做。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-2-2",
    "characterId": "esports",
    "contentStage": 2,
    "type": "destiny",
    "title": "訓練補助到位",
    "description": "小明原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
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
      "label": "接個人代言訪問",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "個人代言訪問帶來收入，但少了一點練習感謝全隊的態度。"
    },
    "optionB": {
      "label": "花錢上表達課",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "表達課讓小明更會在訪問中尊重隊友、感謝團隊。"
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
      "label": "先接粉絲活動",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "粉絲活動有收入，但回信鼓勵小朋友的時間少了一些。"
    },
    "optionB": {
      "label": "花錢做回信卡片",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "小明用心回信後，更懂得自己的態度會影響別人。"
    }
  },
  {
    "id": "esports-destiny-3-1",
    "characterId": "esports",
    "contentStage": 3,
    "type": "destiny",
    "title": "比賽溝通更成熟",
    "description": "小明在電競選手旅程中遇到一個剛剛好的幫助。在專業成長中，這次經驗讓他的判斷更成熟。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-3-2",
    "characterId": "esports",
    "contentStage": 3,
    "type": "destiny",
    "title": "戰隊表現獎勵",
    "description": "小明原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
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
      "label": "先升級比賽設備",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "設備讓收入機會更穩，但支持兒童營隊的資源少了一些。"
    },
    "optionB": {
      "label": "捐錢支持兒童營",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "兒童營隊得到幫助，小明也更確定冠軍可以鼓勵更多人。"
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
      "label": "先接品牌合作",
      "effects": {
        "experience": -30,
        "money": 50
      },
      "resultDescription": "品牌合作帶來收入，但準備健康電競分享的時間少了一些。"
    },
    "optionB": {
      "label": "自費辦分享會",
      "effects": {
        "experience": 30,
        "money": -50
      },
      "resultDescription": "分享會讓孩子學會健康玩遊戲，小明也累積更多助人經驗。"
    }
  },
  {
    "id": "esports-destiny-4-1",
    "characterId": "esports",
    "contentStage": 4,
    "type": "destiny",
    "title": "分享帶來正面影響",
    "description": "小明在電競選手旅程中遇到一個剛剛好的幫助。成為專家後，這次助人的回饋讓他更確定自己的使命。經驗值 +20。",
    "effects": {
      "experience": 20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "esports-destiny-4-2",
    "characterId": "esports",
    "contentStage": 4,
    "type": "destiny",
    "title": "健康電競課有人贊助",
    "description": "小明原本只是認真完成眼前的小事，沒想到得到一筆小小支持，金錢 +30。",
    "effects": {
      "money": 30
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
