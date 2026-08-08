import type { Card } from "./types";

export const rubioCards:Card[]=[
  {
    "id": "rubio-chance-1-1",
    "characterId": "rubio",
    "contentStage": 1,
    "type": "chance",
    "title": "老牧師熱情推薦",
    "description": "一位有經驗的老牧師看見盧比歐很願意關心人，鼓勵他去學習怎麼成為牧師。",
    "instruction": "全組用 10 秒做出「老牧師熱情推薦」的加油動作，最後一起喊：「盧比歐，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "rubio-chance-1-2",
    "characterId": "rubio",
    "contentStage": 1,
    "type": "chance",
    "title": "愛宴中學會招呼人",
    "description": "教會聚餐時，盧比歐主動幫忙端菜、招呼新朋友，大家都感受到他的溫暖。",
    "instruction": "全組用 10 秒做出「愛宴中學會招呼人」的加油動作，最後一起喊：「盧比歐，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "rubio-chance-1-3",
    "characterId": "rubio",
    "contentStage": 1,
    "type": "chance",
    "title": "義賣籌集預備金",
    "description": "盧比歐想參加學習課程，需要靠義賣籌一點錢。",
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
    "id": "rubio-chance-1-4",
    "characterId": "rubio",
    "contentStage": 1,
    "type": "chance",
    "title": "讀書還是先打工",
    "description": "盧比歐想多讀書，也想先打工存錢。兩個選擇都不容易，需要好好安排時間。",
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
    "id": "rubio-destiny-1-1",
    "characterId": "rubio",
    "contentStage": 1,
    "type": "destiny",
    "title": "家人有點擔心",
    "description": "家人擔心牧師工作很辛苦，也擔心收入不穩定，讓盧比歐心裡有點難過。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-1-2",
    "characterId": "rubio",
    "contentStage": 1,
    "type": "destiny",
    "title": "存款快不夠了",
    "description": "還在準備和學習的時候，盧比歐發現自己的錢快不夠用了。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-1-3",
    "characterId": "rubio",
    "contentStage": 1,
    "type": "destiny",
    "title": "聖經課考試好難",
    "description": "考試內容很多，盧比歐讀到很晚還是有些地方不懂，覺得有點挫折。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-1-4",
    "characterId": "rubio",
    "contentStage": 1,
    "type": "destiny",
    "title": "安靜想一想",
    "description": "盧比歐不知道下一步怎麼走，決定安靜下來，想想自己為什麼想幫助人。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-chance-2-1",
    "characterId": "rubio",
    "contentStage": 2,
    "type": "chance",
    "title": "學會好好聽人說話",
    "description": "有人心情不好來找盧比歐，他沒有急著給答案，而是先認真聽對方說。",
    "instruction": "全組用 10 秒做出「學會好好聽人說話」的加油動作，最後一起喊：「盧比歐，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "rubio-chance-2-2",
    "characterId": "rubio",
    "contentStage": 2,
    "type": "chance",
    "title": "長輩分享經驗",
    "description": "教會長輩分享以前陪伴人的故事，盧比歐學到很多實用的方法。",
    "instruction": "全組用 10 秒做出「長輩分享經驗」的加油動作，最後一起喊：「盧比歐，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "rubio-chance-2-3",
    "characterId": "rubio",
    "contentStage": 2,
    "type": "chance",
    "title": "帶領破冰遊戲",
    "description": "青年聚會一開始大家很害羞，盧比歐決定用簡單遊戲讓大家放鬆。",
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
    "id": "rubio-chance-2-4",
    "characterId": "rubio",
    "contentStage": 2,
    "type": "chance",
    "title": "探訪要自己去嗎",
    "description": "有人需要關心，盧比歐可以自己去探訪，也可以找同伴一起去，彼此照應。",
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
    "id": "rubio-destiny-2-1",
    "characterId": "rubio",
    "contentStage": 2,
    "type": "destiny",
    "title": "講話突然卡住",
    "description": "盧比歐第一次上台分享時太緊張，講到一半突然忘記下一句。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-2-2",
    "characterId": "rubio",
    "contentStage": 2,
    "type": "destiny",
    "title": "團隊意見不一樣",
    "description": "大家對活動怎麼辦有不同想法，討論很久都沒有結果。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-2-3",
    "characterId": "rubio",
    "contentStage": 2,
    "type": "destiny",
    "title": "半夜有人需要幫忙",
    "description": "半夜有人打電話來說心情很糟，盧比歐努力陪伴，但隔天非常累。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-2-4",
    "characterId": "rubio",
    "contentStage": 2,
    "type": "destiny",
    "title": "探訪找錯地址",
    "description": "盧比歐拿錯地址，走了很久才發現不對，需要冷靜重新確認。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-chance-3-1",
    "characterId": "rubio",
    "contentStage": 3,
    "type": "chance",
    "title": "青年活動大成功",
    "description": "盧比歐帶領的青年活動讓很多人願意參加，也有人因此交到新朋友。",
    "instruction": "全組用 10 秒做出「青年活動大成功」的加油動作，最後一起喊：「盧比歐，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "rubio-chance-3-2",
    "characterId": "rubio",
    "contentStage": 3,
    "type": "chance",
    "title": "大合唱感動全場",
    "description": "活動最後大家一起唱歌，原本害羞的人也慢慢開口，氣氛變得很溫暖。",
    "instruction": "全組一起唱一句大家都會的歌，或一起喊：「你不是一個人！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "rubio-chance-3-3",
    "characterId": "rubio",
    "contentStage": 3,
    "type": "chance",
    "title": "要開新小組嗎",
    "description": "越來越多人想參加，盧比歐可以開新小組，也可以先把原本的小組照顧好。",
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
    "id": "rubio-chance-3-4",
    "characterId": "rubio",
    "contentStage": 3,
    "type": "chance",
    "title": "寫下鼓勵小故事",
    "description": "盧比歐把陪伴人的故事寫成文章，很多人看了覺得被鼓勵。",
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
    "id": "rubio-destiny-3-1",
    "characterId": "rubio",
    "contentStage": 3,
    "type": "destiny",
    "title": "活動場地突然變貴",
    "description": "原本租好的場地突然漲價，活動預算變得很吃緊。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-3-2",
    "characterId": "rubio",
    "contentStage": 3,
    "type": "destiny",
    "title": "直播設備壞掉",
    "description": "活動直播開始前，麥克風和鏡頭突然出問題，大家手忙腳亂。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-3-3",
    "characterId": "rubio",
    "contentStage": 3,
    "type": "destiny",
    "title": "太忙忘了休息",
    "description": "盧比歐一直照顧別人，卻忘記自己也需要休息，身體和心情都變累。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-3-4",
    "characterId": "rubio",
    "contentStage": 3,
    "type": "destiny",
    "title": "網路留言誤會你",
    "description": "有人在網路上誤會盧比歐的話，讓很多人跟著批評。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-chance-4-1",
    "characterId": "rubio",
    "contentStage": 4,
    "type": "chance",
    "title": "收到匿名鼓勵信",
    "description": "盧比歐很低落時，收到一封沒有署名的鼓勵信，提醒他有人一直記得他的付出。",
    "instruction": "全組用 10 秒做出「收到匿名鼓勵信」的加油動作，最後一起喊：「盧比歐，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "rubio-chance-4-2",
    "characterId": "rubio",
    "contentStage": 4,
    "type": "chance",
    "title": "安靜休息重新得力",
    "description": "盧比歐暫時放慢腳步，好好睡覺、散步和禱告，心裡慢慢恢復平安。",
    "instruction": "全組用 10 秒做出「安靜休息重新得力」的加油動作，最後一起喊：「盧比歐，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "rubio-chance-4-3",
    "characterId": "rubio",
    "contentStage": 4,
    "type": "chance",
    "title": "重新安排工作量",
    "description": "盧比歐發現自己不能什麼都做，可以把一些工作交給同伴，也可以先取消不急的活動。",
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
    "id": "rubio-chance-4-4",
    "characterId": "rubio",
    "contentStage": 4,
    "type": "chance",
    "title": "祝福大家的時間",
    "description": "盧比歐重新明白，牧師不是完美的人，而是願意陪大家一起走的人。",
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
    "id": "rubio-destiny-4-1",
    "characterId": "rubio",
    "contentStage": 4,
    "type": "destiny",
    "title": "重要同工離開",
    "description": "一位一起努力很久的同工離開團隊，盧比歐覺得很失落。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-4-2",
    "characterId": "rubio",
    "contentStage": 4,
    "type": "destiny",
    "title": "被誤會很受傷",
    "description": "盧比歐明明想幫忙，卻被人誤會，心裡覺得委屈又難過。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-4-3",
    "characterId": "rubio",
    "contentStage": 4,
    "type": "destiny",
    "title": "爭執快要失控",
    "description": "兩邊的人都覺得自己是對的，聲音越來越大，盧比歐需要幫大家冷靜下來。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "rubio-destiny-4-4",
    "characterId": "rubio",
    "contentStage": 4,
    "type": "destiny",
    "title": "懷疑自己做不好",
    "description": "連續遇到困難後，盧比歐開始懷疑自己是不是不適合當牧師。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  }
];
