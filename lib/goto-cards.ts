import type { Card } from "./types";

export const gotoCards:Card[]=[
  {
    "id": "goto-chance-1-1",
    "characterId": "goto",
    "contentStage": 1,
    "type": "chance",
    "title": "課堂小發現",
    "description": "老師用簡單例子示範程式指令，你發現電腦會照著清楚的步驟完成任務。",
    "instruction": "全組用 10 秒做出「課堂小發現」的加油動作，最後一起喊：「一豪，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "goto-chance-1-2",
    "characterId": "goto",
    "contentStage": 1,
    "type": "chance",
    "title": "同學練習小隊",
    "description": "你和同學約好一起練基礎題，互相提醒錯字和漏掉的符號。",
    "instruction": "全組用 10 秒做出「同學練習小隊」的加油動作，最後一起喊：「一豪，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "goto-chance-1-3",
    "characterId": "goto",
    "contentStage": 1,
    "type": "chance",
    "title": "小小除錯任務",
    "description": "練習題跑不出來，你決定一步一步檢查，看看是哪一行寫錯。",
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
    "id": "goto-chance-1-4",
    "characterId": "goto",
    "contentStage": 1,
    "type": "chance",
    "title": "勇敢問問題",
    "description": "你遇到不懂的地方，可以請老師提示，也可以整理自己的想法繼續試。",
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
    "id": "goto-destiny-1-1",
    "characterId": "goto",
    "contentStage": 1,
    "type": "destiny",
    "title": "符號少打一個",
    "description": "你少打一個括號，程式一直不能跑，才知道小細節也很重要。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-1-2",
    "characterId": "goto",
    "contentStage": 1,
    "type": "destiny",
    "title": "看不懂英文錯誤訊息",
    "description": "螢幕出現一長串英文，你有點害怕，以為自己完全學不會。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-1-3",
    "characterId": "goto",
    "contentStage": 1,
    "type": "destiny",
    "title": "練太久忘記休息",
    "description": "你太想把練習做完，坐太久沒有休息，眼睛和肩膀都不舒服。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-1-4",
    "characterId": "goto",
    "contentStage": 1,
    "type": "destiny",
    "title": "小組作業分工不清楚",
    "description": "小組練習時，大家沒有先說好誰負責哪一部分，做起來有點混亂。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-chance-2-1",
    "characterId": "goto",
    "contentStage": 2,
    "type": "chance",
    "title": "新人訓練很扎實",
    "description": "前輩帶你認識工具、流程和團隊規則，讓你更懂工程師每天怎麼合作。",
    "instruction": "全組用 10 秒做出「新人訓練很扎實」的加油動作，最後一起喊：「一豪，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "goto-chance-2-2",
    "characterId": "goto",
    "contentStage": 2,
    "type": "chance",
    "title": "完成小修改",
    "description": "你負責把一個畫面文字改得更清楚，雖然任務不大，但讓使用者更容易看懂。",
    "instruction": "全組用 10 秒做出「完成小修改」的加油動作，最後一起喊：「一豪，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "goto-chance-2-3",
    "characterId": "goto",
    "contentStage": 2,
    "type": "chance",
    "title": "不懂要不要說",
    "description": "新人會議中有一段你沒聽懂，可以誠實發問，也可以記下重點查資料。",
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
    "id": "goto-chance-2-4",
    "characterId": "goto",
    "contentStage": 2,
    "type": "chance",
    "title": "團隊回報練習",
    "description": "主管請你用簡單的話說明今天完成了什麼、還卡在哪裡。",
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
    "id": "goto-destiny-2-1",
    "characterId": "goto",
    "contentStage": 2,
    "type": "destiny",
    "title": "害怕承認不會",
    "description": "你遇到問題卻不好意思說，拖了很久才讓大家發現進度卡住。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-2-2",
    "characterId": "goto",
    "contentStage": 2,
    "type": "destiny",
    "title": "改到別人的檔案",
    "description": "你還不熟悉團隊規則，不小心改到別人正在做的地方，需要花時間一起修回來。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-2-3",
    "characterId": "goto",
    "contentStage": 2,
    "type": "destiny",
    "title": "被前輩改很多",
    "description": "前輩看完你的程式，留下很多修改建議，你有點受挫，也學到細心很重要。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-2-4",
    "characterId": "goto",
    "contentStage": 2,
    "type": "destiny",
    "title": "下班前的小錯誤",
    "description": "下班前發現一個小錯誤，團隊需要冷靜確認，不要亂按。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-chance-3-1",
    "characterId": "goto",
    "contentStage": 3,
    "type": "chance",
    "title": "拆解大功能",
    "description": "你把一個大功能拆成很多小步驟，讓團隊更容易分工完成。",
    "instruction": "全組用 10 秒做出「拆解大功能」的加油動作，最後一起喊：「一豪，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "goto-chance-3-2",
    "characterId": "goto",
    "contentStage": 3,
    "type": "chance",
    "title": "讀懂複雜程式",
    "description": "你花時間理解別人寫的程式，慢慢看懂整個系統怎麼合作。",
    "instruction": "全組用 10 秒做出「讀懂複雜程式」的加油動作，最後一起喊：「一豪，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "goto-chance-3-3",
    "characterId": "goto",
    "contentStage": 3,
    "type": "chance",
    "title": "要快做還是想清楚",
    "description": "你接到一個重要功能，可以直接開始寫，也可以畫流程圖和同事討論。",
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
    "id": "goto-chance-3-4",
    "characterId": "goto",
    "contentStage": 3,
    "type": "chance",
    "title": "帶新人做小任務",
    "description": "有新同事加入，你試著把自己學到的方法教給他。",
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
    "id": "goto-destiny-3-1",
    "characterId": "goto",
    "contentStage": 3,
    "type": "destiny",
    "title": "功能做到一半才發現想錯",
    "description": "你寫了很多後才發現原本方向不太對，只好停下來重新整理。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-3-2",
    "characterId": "goto",
    "contentStage": 3,
    "type": "destiny",
    "title": "測試沒有做完整",
    "description": "你以為功能完成了，但使用者點到另一種情況時出現問題，需要補做測試。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-3-3",
    "characterId": "goto",
    "contentStage": 3,
    "type": "destiny",
    "title": "太想自己解決",
    "description": "你想證明自己很厲害，一直不找人討論，結果花了更多時間。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-3-4",
    "characterId": "goto",
    "contentStage": 3,
    "type": "destiny",
    "title": "團隊意見不一樣",
    "description": "大家對功能要怎麼做有不同想法，你需要學會聽別人，也說清楚自己的理由。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-chance-4-1",
    "characterId": "goto",
    "contentStage": 4,
    "type": "chance",
    "title": "做出幫人的系統",
    "description": "你設計了一個讓志工更容易安排服務時間的系統，幫助很多人把愛心送出去。",
    "instruction": "全組用 10 秒做出「做出幫人的系統」的加油動作，最後一起喊：「一豪，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "experience": 30
    },
    "successLabel": "完成任務"
  },
  {
    "id": "goto-chance-4-2",
    "characterId": "goto",
    "contentStage": 4,
    "type": "chance",
    "title": "把技術教給孩子",
    "description": "你受邀到營隊教小朋友寫簡單程式，讓孩子知道科技也可以用來幫助人。",
    "instruction": "全組用 10 秒做出「把技術教給孩子」的加油動作，最後一起喊：「一豪，完成！」",
    "resolutionMode": "task",
    "task": true,
    "successEffects": {
      "money": 50
    },
    "successLabel": "完成任務"
  },
  {
    "id": "goto-chance-4-3",
    "characterId": "goto",
    "contentStage": 4,
    "type": "chance",
    "title": "專家要接哪個案子",
    "description": "有人邀請你做賺錢很多的案子，也有人需要你做幫助弱勢家庭的工具。",
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
    "id": "goto-chance-4-4",
    "characterId": "goto",
    "contentStage": 4,
    "type": "chance",
    "title": "用程式解決真問題",
    "description": "社區遇到資料整理困難，你帶大家一起想出簡單又好用的方法。",
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
    "id": "goto-destiny-4-1",
    "characterId": "goto",
    "contentStage": 4,
    "type": "destiny",
    "title": "責任變大壓力也變大",
    "description": "你成為專家後，很多人都來問你，讓你覺得自己不能犯錯。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-4-2",
    "characterId": "goto",
    "contentStage": 4,
    "type": "destiny",
    "title": "只看效率忘了人的感受",
    "description": "你把系統做得很快，卻忘了有些使用者不熟電腦，大家用起來有點困難。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-4-3",
    "characterId": "goto",
    "contentStage": 4,
    "type": "destiny",
    "title": "團隊遇到大問題",
    "description": "重要服務突然壞掉，大家都很緊張，你需要帶大家分工處理。",
    "effects": {
      "experience": -20
    },
    "resolutionMode": "automatic"
  },
  {
    "id": "goto-destiny-4-4",
    "characterId": "goto",
    "contentStage": 4,
    "type": "destiny",
    "title": "忘記自己的方向",
    "description": "工作越來越忙，你差點忘記想用科技幫助人的心。幸好朋友提醒你重新找回方向。",
    "effects": {
      "money": -30
    },
    "resolutionMode": "automatic"
  }
];
