import type { Card } from "./types";

export const zoeyCards:Card[]=[
  {
    id: "zoey-chance-1-1",
    characterId: "zoey",
    contentStage: 1,
    type: "chance",
    title: "第一次上台表現超好",
    description: "你在歌唱比賽的舞台唱得很好，大家都注意到你，開始幫你加油！",
    effects: {
      experience: 60
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-chance-1-2",
    characterId: "zoey",
    contentStage: 1,
    type: "chance",
    title: "自信動作大成功",
    description: "比賽有加分題！評審請你做一段自信動作，讓大家看到你的舞台感。",
    effects: {
      experience: 60
    },
    instruction: "Zoey 帶組員擺出 3 個連續偶像姿勢，並帶全場喊：「請幫我加油！」",
    resolutionMode: "automatic"
  },
  {
    id: "zoey-chance-1-3",
    characterId: "zoey",
    contentStage: 1,
    type: "chance",
    title: "兩家公司都想找你",
    description: "兩家公司都想邀請你加入。大公司資源多，但練習很嚴格；小公司比較自由，但資源比較少。",
    resolutionMode: "choice",
    optionA: {
      label: "加入大公司",
      effects: {
        experience: -20,
        money: 200
      }
    },
    optionB: {
      label: "加入小公司",
      effects: {
        experience: 40,
        money: 50
      }
    }
  },
  {
    id: "zoey-chance-1-4",
    characterId: "zoey",
    contentStage: 1,
    type: "chance",
    title: "收到粉絲的鼓勵",
    description: "粉絲寫信和送小禮物鼓勵你，讓你更想繼續唱歌和表演。",
    effects: {
      experience: 60
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-1-1",
    characterId: "zoey",
    contentStage: 1,
    type: "destiny",
    title: "合約裡有不公平的地方",
    description: "你仔細看合約，才發現有些地方不太公平，只好花錢請懂法律的人幫忙看。",
    effects: {
      experience: -20,
      money: -100
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-1-2",
    characterId: "zoey",
    contentStage: 1,
    type: "destiny",
    title: "練舞時受傷",
    description: "你為了把舞跳好，練習到很晚，結果不小心拉傷，只好暫停練習。",
    effects: {
      experience: -60
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-1-3",
    characterId: "zoey",
    contentStage: 1,
    type: "destiny",
    title: "被其他練習生冷落",
    description: "因為你得到比較多表演機會，有些練習生不太理你，氣氛變得有點尷尬。",
    effects: {
      experience: -60
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-1-4",
    characterId: "zoey",
    contentStage: 1,
    type: "destiny",
    title: "比賽時差點失敗",
    description: "正式表演時你太緊張，高音沒有唱好，幸好觀眾支持你，才順利過關。",
    effects: {
      experience: -60
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-chance-2-1",
    characterId: "zoey",
    contentStage: 2,
    type: "chance",
    title: "辛苦練習有成果",
    description: "你努力練唱歌和跳舞，體力變好，舞台表現也進步很多，老師稱讚你。",
    effects: {
      experience: 60
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-chance-2-2",
    characterId: "zoey",
    contentStage: 2,
    type: "chance",
    title: "音樂停了也不怕",
    description: "直播節目中音樂突然停掉，你沒有慌張，繼續唱歌並帶動大家的氣氛。",
    effects: {
      experience: 60
    },
    instruction: "現場清唱任意一首歌 2 句，並指名一位玩家當伴舞跳 5 秒。",
    resolutionMode: "automatic"
  },
  {
    id: "zoey-chance-2-3",
    characterId: "zoey",
    contentStage: 2,
    type: "chance",
    title: "記者突然問難題",
    description: "記者突然問你網路上的照片和傳聞，你可以選擇誠實說明，也可以簡單回答保護自己。",
    resolutionMode: "choice",
    optionA: {
      label: "誠實回答",
      effects: {
        experience: 20
      }
    },
    optionB: {
      label: "簡單回答",
      effects: {
        experience: 20
      }
    }
  },
  {
    id: "zoey-chance-2-4",
    characterId: "zoey",
    contentStage: 2,
    type: "chance",
    title: "第一次拍廣告",
    description: "因為你親切又有活力，接到第一次廣告工作，也賺到一些收入。",
    effects: {
      experience: 20,
      money: 150
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-2-1",
    characterId: "zoey",
    contentStage: 2,
    type: "destiny",
    title: "節目剪錯讓你被誤會",
    description: "節目把畫面剪得很奇怪，讓大家誤會你沒禮貌，網路上很多人罵你。",
    effects: {
      experience: -60
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-2-2",
    characterId: "zoey",
    contentStage: 2,
    type: "destiny",
    title: "太累了身體受不了",
    description: "你連續好幾個月睡太少、工作太多，在後台累到不舒服，只好去看醫生。",
    effects: {
      experience: -40,
      money: -50
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-2-3",
    characterId: "zoey",
    contentStage: 2,
    type: "destiny",
    title: "拍照工作突然被換掉",
    description: "原本說好要拍雜誌照片，結果臨時換成別人，你準備了好久卻沒用上。",
    effects: {
      experience: -60
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-2-4",
    characterId: "zoey",
    contentStage: 2,
    type: "destiny",
    title: "被太熱情的人打擾",
    description: "有陌生人一直跟著你、拍你照片，讓你覺得不安全，只好花錢搬家和加強保護。",
    effects: {
      experience: -40,
      money: -100
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-chance-3-1",
    characterId: "zoey",
    contentStage: 3,
    type: "chance",
    title: "第一張專輯大受歡迎",
    description: "你的主打歌很多人喜歡聽，專輯也賣得很好，大家都開始認識你！",
    effects: {
      experience: 60,
      money: 300
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-chance-3-2",
    characterId: "zoey",
    contentStage: 3,
    type: "chance",
    title: "開大型演唱會",
    description: "演唱會來了好多觀眾！燈光亮起，你帶著大家一起唱你的熱門歌曲。",
    effects: {
      experience: 60,
      money: 250
    },
    instruction: "起立擔任唱跳教練，自創 2 個動作帶領全場玩家跟著跳 15 秒！",
    resolutionMode: "automatic"
  },
  {
    id: "zoey-chance-3-3",
    characterId: "zoey",
    contentStage: 3,
    type: "chance",
    title: "自己試著寫歌",
    description: "你想參與寫歌。自己負責很多歌曲可以學到更多，但會很辛苦；只參與一部分比較輕鬆。",
    resolutionMode: "choice",
    optionA: {
      label: "負責很多歌曲",
      effects: {
        experience: 20
      }
    },
    optionB: {
      label: "只參與一部分",
      effects: {
        experience: 20
      }
    }
  },
  {
    id: "zoey-chance-3-4",
    characterId: "zoey",
    contentStage: 3,
    type: "chance",
    title: "得到音樂大獎",
    description: "你站在台上拿到獎座，說出感謝的話，全場都為你鼓掌歡呼。",
    effects: {
      experience: 80
    },
    instruction: "對全場說 15 秒感謝的話，結束後全場玩家起立鼓掌 5 秒。",
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-3-1",
    characterId: "zoey",
    contentStage: 3,
    type: "destiny",
    title: "演唱會設備壞掉",
    description: "大型演唱會的設備突然出問題，表演延後了，團隊需要花錢退一些票給觀眾。",
    effects: {
      experience: -20,
      money: -150
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-3-2",
    characterId: "zoey",
    contentStage: 3,
    type: "destiny",
    title: "喉嚨受傷了",
    description: "你連續唱太多場，喉嚨受傷，醫生說必須休息治療，不能繼續工作。",
    effects: {
      experience: -40,
      money: -100
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-3-3",
    characterId: "zoey",
    contentStage: 3,
    type: "destiny",
    title: "紅了以後被亂罵",
    description: "你變有名之後，網路上出現很多不公平的批評，甚至有人亂傳沒有證據的話。",
    effects: {
      experience: -60
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-3-4",
    characterId: "zoey",
    contentStage: 3,
    type: "destiny",
    title: "和團隊為了分錢吵架",
    description: "工作成功後，你和工作團隊對怎麼分錢有不同想法，合作變得不開心。",
    effects: {
      experience: -20,
      money: -100
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-chance-4-1",
    characterId: "zoey",
    contentStage: 4,
    type: "chance",
    title: "在教會找到平安",
    description: "你心情低落時，朋友帶你去教會。唱詩歌和禱告時，你感受到被愛和接納。",
    effects: {
      experience: 100
    },
    instruction: "邀請全場閉眼深呼吸 5 秒，並由你對大家說：「願平安與你們同在！」",
    resolutionMode: "automatic"
  },
  {
    id: "zoey-chance-4-2",
    characterId: "zoey",
    contentStage: 4,
    type: "chance",
    title: "重新想想什麼最重要",
    description: "你發現自己以前太在意掌聲和名氣。這次困難讓你停下來，想想生命中真正重要的是什麼。",
    effects: {
      experience: 60
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-chance-4-3",
    characterId: "zoey",
    contentStage: 4,
    type: "chance",
    title: "把難過寫成歌曲",
    description: "你把低潮時的難過和希望寫成一首歌。你可以公開分享，也可以先留給自己。",
    resolutionMode: "choice",
    optionA: {
      label: "公開分享",
      effects: {
        experience: 80
      }
    },
    optionB: {
      label: "先留給自己",
      effects: {
        experience: 60
      }
    }
  },
  {
    id: "zoey-chance-4-4",
    characterId: "zoey",
    contentStage: 4,
    type: "chance",
    title: "朋友和粉絲支持你",
    description: "教會朋友和真正支持你的粉絲默默陪伴你，讓你知道就算沒有舞台，你還是被愛著。",
    effects: {
      experience: 60
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-4-1",
    characterId: "zoey",
    contentStage: 4,
    type: "destiny",
    title: "被不是真的消息傷害",
    description: "網路上突然出現很多不是真的消息，大家誤會你，讓你覺得很難過。",
    effects: {
      experience: -80
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-4-2",
    characterId: "zoey",
    contentStage: 4,
    type: "destiny",
    title: "廣告工作被取消",
    description: "因為這件事，原本合作的廣告被取消，還要付一筆錢。有些朋友也不敢靠近你。",
    effects: {
      experience: -40,
      money: -200
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-4-3",
    characterId: "zoey",
    contentStage: 4,
    type: "destiny",
    title: "被網路留言傷到",
    description: "很多難聽的留言讓你很焦慮，也睡不好。你很需要休息，也需要有人陪伴和幫助。",
    effects: {
      experience: -100
    },
    resolutionMode: "automatic"
  },
  {
    id: "zoey-destiny-4-4",
    characterId: "zoey",
    contentStage: 4,
    type: "destiny",
    title: "信任的人傷害你",
    description: "你很信任的人把不好的消息傳出去，讓你受傷。這也讓你學習怎麼面對難過和原諒。",
    effects: {
      experience: -80
    },
    resolutionMode: "automatic"
  }
];
