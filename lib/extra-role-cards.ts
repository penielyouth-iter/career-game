import type { Card, Effects } from "./types";

type TaskSeed = { title: string; description: string; instruction: string; reward: Effects };
type ChoiceSeed = { title: string; description: string; moneyResult: string; studyResult: string };
type DestinySeed = { title: string; description: string; effects: Effects };
type StageSeed = {
  chanceTasks: [TaskSeed, TaskSeed];
  chanceChoices: [ChoiceSeed, ChoiceSeed];
  destinyExperience: [DestinySeed, DestinySeed];
  destinyMoney: [DestinySeed, DestinySeed];
};
type RoleSeed = { id: string; name: string; stageSeeds: [StageSeed, StageSeed, StageSeed, StageSeed] };

const positiveDestinyByStage = [
  {
    experienceTitle: "得到老師鼓勵",
    experienceDescription: "學習時有人看見他的努力，給了剛剛好的提醒，讓他更有信心，經驗值 +20。",
    moneyTitle: "小小支持到位",
    moneyDescription: "他認真完成眼前的小事，得到一筆小小支持，金錢 +30。",
  },
  {
    experienceTitle: "前輩指點方向",
    experienceDescription: "新人工作中，前輩給了清楚建議，讓他更知道下一步怎麼做，經驗值 +20。",
    moneyTitle: "新人獎勵",
    moneyDescription: "他把基礎工作完成得很仔細，因此得到一筆小獎勵，金錢 +30。",
  },
  {
    experienceTitle: "團隊肯定進步",
    experienceDescription: "團隊發現他的判斷越來越成熟，也願意把更重要的任務交給他，經驗值 +20。",
    moneyTitle: "專案小獎金",
    moneyDescription: "這次任務成果不錯，團隊給他一筆小獎金，金錢 +30。",
  },
  {
    experienceTitle: "助人得到回饋",
    experienceDescription: "他把專業用來幫助別人，對方的感謝讓他更確定自己的使命，經驗值 +20。",
    moneyTitle: "善意資源支持",
    moneyDescription: "有人看見他的助人計畫，願意提供一點資源支持，金錢 +30。",
  },
];

function makeCards(role: RoleSeed): Card[] {
  return role.stageSeeds.flatMap((stage, stageIndex) => {
    const contentStage = stageIndex + 1;
    const positiveDestiny = positiveDestinyByStage[stageIndex];
    const chanceTasks = stage.chanceTasks.map((seed, index): Card => ({
      id: `${role.id}-chance-${contentStage}-${index + 1}`,
      characterId: role.id,
      contentStage,
      type: "chance",
      title: seed.title,
      description: seed.description,
      instruction: seed.instruction,
      resolutionMode: "task",
      task: true,
      successEffects: seed.reward,
      successLabel: "完成任務",
    }));
    const chanceChoices = stage.chanceChoices.map((seed, index): Card => ({
      id: `${role.id}-chance-${contentStage}-${index + 3}`,
      characterId: role.id,
      contentStage,
      type: "chance",
      title: seed.title,
      description: seed.description,
      resolutionMode: "choice",
      optionA: {
        label: "先存錢準備",
        effects: { experience: -20, money: 50 },
        resultDescription: seed.moneyResult,
      },
      optionB: {
        label: "花錢投入學習",
        effects: { experience: 30, money: -50 },
        resultDescription: seed.studyResult,
      },
    }));
    const destinyExperience = stage.destinyExperience.map((seed, index): Card => ({
      id: `${role.id}-destiny-${contentStage}-${index + 1}`,
      characterId: role.id,
      contentStage,
      type: "destiny",
      title: index === 0 ? positiveDestiny.experienceTitle : seed.title,
      description: index === 0 ? `${role.name}${positiveDestiny.experienceDescription}` : seed.description,
      effects: index === 0 ? { experience: 20 } : seed.effects,
      resolutionMode: "automatic",
    }));
    const destinyMoney = stage.destinyMoney.map((seed, index): Card => ({
      id: `${role.id}-destiny-${contentStage}-${index + 3}`,
      characterId: role.id,
      contentStage,
      type: "destiny",
      title: index === 0 ? positiveDestiny.moneyTitle : seed.title,
      description: index === 0 ? `${role.name}${positiveDestiny.moneyDescription}` : seed.description,
      effects: index === 0 ? { money: 30 } : seed.effects,
      resolutionMode: "automatic",
    }));
    return [...chanceTasks, ...chanceChoices, ...destinyExperience, ...destinyMoney];
  });
}

const roles: RoleSeed[] = [
  {
    id: "doctor",
    name: "伊書豪",
    stageSeeds: [
      {
        chanceTasks: [
          {
            title: "學會洗手步驟",
            description: "伊書豪在健康課學到，醫生看病前要把手洗乾淨，才不會把細菌帶給別人。",
            instruction: "全組一起做 5 個洗手動作，最後喊：「乾淨的手，照顧大家！」",
            reward: { experience: 30 },
          },
          {
            title: "幫忙整理急救箱",
            description: "伊書豪協助老師整理OK繃和紗布，知道工具放對地方，緊急時才找得到。",
            instruction: "全組假裝把急救箱排整齊，說出一樣急救用品。",
            reward: { money: 50 },
          },
        ],
        chanceChoices: [
          {
            title: "買人體小書嗎",
            description: "伊書豪想買一本簡單的人體小書，也可以先幫忙做家事存錢。",
            moneyResult: "先存下一些錢，雖然少讀一點書，但準備更穩。",
            studyResult: "花錢買書後，伊書豪更懂身體怎麼運作。",
          },
          {
            title: "參加健康營",
            description: "學校有健康營可以參加，但需要報名費；伊書豪也可以先打工存錢。",
            moneyResult: "先把費用存起來，下一次參加活動會更安心。",
            studyResult: "參加健康營後，伊書豪學到更多照顧人的方法。",
          },
        ],
        destinyExperience: [
          { title: "名詞記混了", description: "身體部位名稱好多，伊書豪把幾個名詞記錯，只好重新複習。", effects: { experience: -20 } },
          { title: "太急著回答", description: "老師問健康問題時，伊書豪太快回答，才發現自己沒有想清楚。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "買筆記用品", description: "伊書豪需要買彩色筆和筆記本，把健康知識整理得更清楚。", effects: { money: -30 } },
          { title: "交通費多一點", description: "去參觀健康中心要搭車，伊書豪花了一些交通費。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          {
            title: "新人量血壓",
            description: "伊書豪成為醫院新人，學著照步驟協助量血壓，讓病人安心。",
            instruction: "全組一起深呼吸 5 秒，假裝陪病人放鬆。",
            reward: { experience: 30 },
          },
          {
            title: "值班小補貼",
            description: "伊書豪協助整理病房用品，工作雖然辛苦，也得到一點補貼。",
            instruction: "全組做 3 個整理床邊用品的動作，最後喊：「準備好了！」",
            reward: { money: 50 },
          },
        ],
        chanceChoices: [
          {
            title: "買聽診器",
            description: "伊書豪想買更合適的聽診器，也可以先多接一點工作存錢。",
            moneyResult: "多接工作讓收入更穩，但練習時間少了一些。",
            studyResult: "買了工具後，伊書豪練習檢查時更有方向。",
          },
          {
            title: "下班後上課",
            description: "新人課程可以幫助伊書豪進步，但需要費用和時間。",
            moneyResult: "先把生活費顧好，雖然進修慢一點，但心裡比較踏實。",
            studyResult: "上完課後，伊書豪更懂得照顧病人的細節。",
          },
        ],
        destinyExperience: [
          { title: "病歷寫漏字", description: "伊書豪寫病歷時漏了一個重要提醒，前輩請他重新檢查。", effects: { experience: -20 } },
          { title: "問診太緊張", description: "第一次和病人說明時，伊書豪有點緊張，說話不夠清楚。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "制服送洗", description: "值班後制服弄髒了，伊書豪需要花錢清洗。", effects: { money: -30 } },
          { title: "講義加購", description: "醫院新人訓練多了一份講義，伊書豪需要自己購買。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          {
            title: "判斷更穩",
            description: "伊書豪能把病人的感受和檢查結果一起看，幫團隊更快找到方向。",
            instruction: "全組輪流說一個照顧病人時要注意的事，最後喊：「仔細又溫柔！」",
            reward: { experience: 30 },
          },
          {
            title: "健康講座",
            description: "伊書豪到社區分享洗手、睡眠和運動的重要，得到一點講座收入。",
            instruction: "全組一起做伸展 5 秒，並喊：「健康每天累積！」",
            reward: { money: 50 },
          },
        ],
        chanceChoices: [
          {
            title: "專科進修選擇",
            description: "伊書豪想學更深入的醫療知識，也可以先多接一些工作補收入。",
            moneyResult: "先穩住收入，雖然學習慢一點，但能繼續前進。",
            studyResult: "進修後，伊書豪面對困難問題時更有把握。",
          },
          {
            title: "研究或門診",
            description: "醫院有研究計畫，也有額外門診需要支援，伊書豪要做取捨。",
            moneyResult: "支援門診增加收入，但研究時間少了一些。",
            studyResult: "投入研究後，伊書豪學會用資料找答案。",
          },
        ],
        destinyExperience: [
          { title: "病例想很久", description: "一個狀況不容易判斷，伊書豪查了很多資料才慢慢釐清。", effects: { experience: -20 } },
          { title: "交班說不清", description: "交班時提醒不夠完整，同事多花時間確認，伊書豪學到溝通很重要。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "研討會車資", description: "伊書豪去參加醫學研討會，學到很多，也花了一些交通費。", effects: { money: -30 } },
          { title: "工具保養費", description: "常用工具需要保養，伊書豪分擔了一點費用。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          {
            title: "帶新人查房",
            description: "伊書豪成為可靠的醫生，開始帶新人學習怎麼觀察、詢問和照顧病人。",
            instruction: "全組對新人說：「慢慢學，我們一起照顧人！」",
            reward: { experience: 30 },
          },
          {
            title: "義診收到支持",
            description: "伊書豪參加社區義診，幫助需要的人，也收到大家的小小支持。",
            instruction: "全組比出愛心，說：「專業可以成為祝福！」",
            reward: { money: 50 },
          },
        ],
        chanceChoices: [
          {
            title: "辦健康課嗎",
            description: "伊書豪想辦免費健康課，也可以先多接門診維持收入。",
            moneyResult: "多接門診讓資源穩定，未來能繼續幫助更多人。",
            studyResult: "健康課幫助大家照顧自己，伊書豪也更確定使命。",
          },
          {
            title: "升級診療工具",
            description: "伊書豪想讓診間設備更完整，也可以先把錢存起來。",
            moneyResult: "先存錢讓團隊安心，做事更有餘裕。",
            studyResult: "工具升級後，伊書豪能提供更好的照顧。",
          },
        ],
        destinyExperience: [
          { title: "行程排太滿", description: "伊書豪很想幫每個人，結果太累了，需要學會分工和休息。", effects: { experience: -20 } },
          { title: "說明太複雜", description: "病人聽不懂治療計畫，伊書豪學到要用更簡單的話說明。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "急救用品補貨", description: "診間急救用品需要補充，伊書豪花了一些錢準備。", effects: { money: -30 } },
          { title: "義診成本增加", description: "公益服務需要場地和交通支出，伊書豪付出一些金錢。", effects: { money: -30 } },
        ],
      },
    ],
  },
  {
    id: "barista",
    name: "卡非湘",
    stageSeeds: [
      {
        chanceTasks: [
          { title: "聞出咖啡香", description: "卡非湘第一次學咖啡，發現不同豆子有不一樣的香味。", instruction: "全組假裝聞咖啡香，說：「香香的，慢慢學！」", reward: { experience: 30 } },
          { title: "整理杯子區", description: "卡非湘幫忙把杯子和吸管放整齊，讓小攤位更好工作。", instruction: "全組做 3 個排杯子的動作，最後比出OK手勢。", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "買練習豆嗎", description: "卡非湘想買咖啡豆練習，也可以先幫忙打工存錢。", moneyResult: "先存錢讓材料費更安心，但練習時間少一些。", studyResult: "買了咖啡豆後，卡非湘更懂不同味道。" },
          { title: "參加手沖課", description: "手沖課可以學到技巧，但需要付報名費。", moneyResult: "先把錢準備好，下一次上課更放心。", studyResult: "上課後，卡非湘知道水溫和速度都很重要。" },
        ],
        destinyExperience: [
          { title: "水倒太快", description: "卡非湘練手沖時太急，味道變得有點奇怪，只好再練一次。", effects: { experience: -20 } },
          { title: "品項記錯", description: "飲料名稱太多，卡非湘把兩杯的做法記反了。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "牛奶不小心灑了", description: "練習拉花時牛奶灑出來，需要再買一瓶。", effects: { money: -30 } },
          { title: "杯子用太快", description: "練習時用了很多紙杯，卡非湘需要補一些杯子。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "新人接單成功", description: "卡非湘在咖啡店當新人，第一次把客人的飲料順利記下來。", instruction: "全組輪流說一個飲料名字，最後喊：「記好了！」", reward: { experience: 30 } },
          { title: "早班小獎金", description: "卡非湘準時到店，幫忙開店和準備材料，得到店長鼓勵。", instruction: "全組做 3 個開店準備動作，最後說：「今天也加油！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "買拉花工具", description: "卡非湘想買練習工具，也可以先多排一點班存錢。", moneyResult: "多排班增加收入，但練習拉花的時間少一些。", studyResult: "有工具練習後，卡非湘的手更穩了。" },
          { title: "學新的飲品", description: "店裡推出新飲料，卡非湘可以付費上課，也可以先接班賺錢。", moneyResult: "先接班讓錢包穩定，但新飲品晚一點再學。", studyResult: "學會新飲品後，卡非湘更能幫上忙。" },
        ],
        destinyExperience: [
          { title: "忙中忘記冰塊", description: "尖峰時間太忙，卡非湘少放了冰塊，只好重新製作。", effects: { experience: -20 } },
          { title: "客人等太久", description: "卡非湘動作還不夠熟，客人等了一下，店長提醒要安排順序。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "圍裙要更換", description: "工作圍裙沾到難洗的污漬，卡非湘需要買新的。", effects: { money: -30 } },
          { title: "材料算錯量", description: "卡非湘準備材料時估太多，店裡浪費了一點成本。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "調出招牌味", description: "卡非湘更懂客人的喜好，調出一杯受歡迎的招牌飲品。", instruction: "全組一起幫飲品取一個可愛名字，最後喊：「招牌完成！」", reward: { experience: 30 } },
          { title: "外送訂單變多", description: "店裡外送訂單增加，卡非湘安排包裝流程，收入也變好了。", instruction: "全組假裝把飲料裝袋，提醒：「封好、放穩、送出！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "研究菜單還是接單", description: "卡非湘想研究新菜單，也可以多接訂單增加收入。", moneyResult: "先多接單賺錢，研發速度慢一點也沒關係。", studyResult: "投入新菜單後，卡非湘的創意更成熟。" },
          { title: "參加比賽訓練", description: "咖啡比賽訓練需要費用，也會讓技巧更進步。", moneyResult: "先把店裡收入顧好，比賽訓練以後再安排。", studyResult: "訓練後，卡非湘更懂穩定和細節。" },
        ],
        destinyExperience: [
          { title: "新品味道不穩", description: "同一杯新品做出來味道不同，卡非湘需要重新記錄比例。", effects: { experience: -20 } },
          { title: "團隊溝通卡住", description: "前台和吧台沒有說清楚，出杯順序有點亂。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "機器保養費", description: "咖啡機需要保養，卡非湘分擔了一些費用。", effects: { money: -30 } },
          { title: "杯套重新印", description: "杯套上有小錯字，需要重新印一批。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "教新人沖咖啡", description: "卡非湘成為熟練咖啡師，開始教新人慢慢學會每個步驟。", instruction: "全組一起說：「慢慢倒、穩穩做、香香完成！」", reward: { experience: 30 } },
          { title: "公益咖啡日", description: "卡非湘辦公益咖啡日，把部分收入用來幫助需要的人。", instruction: "全組比出愛心杯子，說：「一杯咖啡，一份溫暖！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "辦免費體驗課", description: "卡非湘想教孩子做簡單飲品，也可以先接企業訂單。", moneyResult: "接訂單讓店更穩，之後更有力量辦課。", studyResult: "體驗課讓更多人感受到服務的溫暖。" },
          { title: "升級店內設備", description: "卡非湘想買更好的設備，也可以先存錢保護店的現金。", moneyResult: "先存錢讓店裡運作更安心。", studyResult: "設備升級後，卡非湘能做出更穩定的品質。" },
        ],
        destinyExperience: [
          { title: "太想服務所有人", description: "卡非湘接太多活動，自己變得很累，需要學會安排節奏。", effects: { experience: -20 } },
          { title: "說明不夠清楚", description: "新人聽不懂步驟，卡非湘發現教人要更有耐心。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "店面小維修", description: "店裡水管需要修理，卡非湘花了一些維修費。", effects: { money: -30 } },
          { title: "公益活動成本", description: "公益咖啡日需要材料和場地費，卡非湘付出一些金錢。", effects: { money: -30 } },
        ],
      },
    ],
  },
];

const moreRoles: RoleSeed[] = [
  {
    id: "teacher",
    name: "紫念",
    stageSeeds: [
      {
        chanceTasks: [
          { title: "幫同學講題目", description: "紫念在班上幫同學說明題目，發現自己很喜歡把事情講清楚。", instruction: "全組用一句話教大家一件小事，最後喊：「我聽懂了！」", reward: { experience: 30 } },
          { title: "整理教具箱", description: "紫念幫老師整理貼紙和卡片，學到上課前準備很重要。", instruction: "全組做 3 個整理教具的動作，最後說：「準備好了！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "買故事書嗎", description: "紫念想買故事書練習說故事，也可以先做小工作存錢。", moneyResult: "先存錢讓資源更夠，練習時間少了一些。", studyResult: "買書後，紫念更會用故事吸引大家。" },
          { title: "參加營隊助教", description: "兒童營隊需要助教，但交通和餐費要自己出。", moneyResult: "先接小工作準備費用，下一次參加更安心。", studyResult: "參加營隊後，紫念更懂得陪伴孩子。" },
        ],
        destinyExperience: [
          { title: "講太快了", description: "紫念說明題目時講太快，同學還是聽不懂，只好再慢慢說一次。", effects: { experience: -20 } },
          { title: "忘記準備例子", description: "紫念想教大家一個觀念，卻忘了準備例子，大家有點困惑。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "買白板筆", description: "練習教學需要白板筆和小卡片，紫念花了一些錢。", effects: { money: -30 } },
          { title: "影印練習紙", description: "紫念影印題目給同學練習，需要付影印費。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "新人老師點名", description: "紫念成為新人老師，學會用溫柔又清楚的方式點名和帶班。", instruction: "全組用開心聲音說：「早安，今天一起學！」", reward: { experience: 30 } },
          { title: "布置教室角落", description: "紫念把教室角落布置得更舒服，學生更願意閱讀。", instruction: "全組假裝貼上星星貼紙，最後喊：「教室亮起來！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "買教具或代課", description: "紫念想買新的教具，也可以先多接一堂代課賺錢。", moneyResult: "先代課增加收入，但準備新教具的時間少了一些。", studyResult: "有新教具後，學生更容易理解課程。" },
          { title: "參加教師研習", description: "研習可以學帶班技巧，但需要報名費。", moneyResult: "先把收入穩住，研習以後再安排。", studyResult: "研習後，紫念更懂得照顧不同學生。" },
        ],
        destinyExperience: [
          { title: "班上太吵", description: "學生太興奮，紫念一開始不知道怎麼讓大家安靜下來。", effects: { experience: -20 } },
          { title: "題目出太難", description: "紫念出的練習題太難，學生有點灰心，她學到要調整難度。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "教具破掉了", description: "常用的教具不小心破掉，紫念需要買新的。", effects: { money: -30 } },
          { title: "活動材料費", description: "班級活動需要彩紙和膠水，紫念先墊了一點材料費。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "設計有趣課程", description: "紫念能把難觀念變成遊戲，讓學生邊玩邊懂。", instruction: "全組做一個上課遊戲姿勢，最後喊：「學習很好玩！」", reward: { experience: 30 } },
          { title: "教學分享邀請", description: "紫念受邀分享班級活動設計，也得到一點講師費。", instruction: "全組拍手 3 下，說：「謝謝老師分享！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "做課程研究", description: "紫念想研究更好的教法，也可以多接課增加收入。", moneyResult: "先多接課讓收入穩定，研究時間少一些。", studyResult: "投入研究後，紫念更知道怎麼幫學生理解。" },
          { title: "帶社團或進修", description: "學校希望紫念帶社團，她也想花錢去進修教學技巧。", moneyResult: "先帶社團補收入，但進修晚一點再開始。", studyResult: "進修後，紫念的課堂更有方法。" },
        ],
        destinyExperience: [
          { title: "家長溝通卡住", description: "有家長很擔心孩子，紫念一開始說明不夠清楚。", effects: { experience: -20 } },
          { title: "活動時間失控", description: "課堂活動太好玩，時間超過了，紫念學到要更會掌握節奏。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "課本資料更新", description: "紫念需要買新的參考資料，讓課程內容更正確。", effects: { money: -30 } },
          { title: "班級布置補貨", description: "教室布置用品用完了，紫念補買了一些。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "帶新老師備課", description: "紫念成為成熟老師，開始陪新人一起備課和面對班級問題。", instruction: "全組對新人老師說：「慢慢來，我們一起教！」", reward: { experience: 30 } },
          { title: "公益閱讀課", description: "紫念到社區陪孩子閱讀，讓更多孩子愛上學習。", instruction: "全組做翻書動作，說：「故事開始囉！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "辦免費學習營", description: "紫念想辦免費學習營，也可以先接講座維持收入。", moneyResult: "先接講座讓資源穩定，之後能辦更好的營隊。", studyResult: "學習營幫助孩子建立信心，紫念也更確定使命。" },
          { title: "改善教室設備", description: "紫念想升級教室設備，也可以先把錢存起來。", moneyResult: "先存錢讓計畫更穩，不急著一次完成。", studyResult: "設備改善後，學生學習更舒服。" },
        ],
        destinyExperience: [
          { title: "太想幫每個學生", description: "紫念把時間排太滿，才發現老師也需要休息和分工。", effects: { experience: -20 } },
          { title: "方法不適合每個人", description: "同一種教法不是每個學生都懂，紫念需要再調整。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "營隊材料增加", description: "公益學習營需要更多材料，紫念多花了一些費用。", effects: { money: -30 } },
          { title: "設備維修費", description: "教室設備需要維修，紫念協助分擔一點費用。", effects: { money: -30 } },
        ],
      },
    ],
  },
];

const finalRoles: RoleSeed[] = [
  {
    id: "astronaut",
    name: "阿姆斯",
    stageSeeds: [
      {
        chanceTasks: [
          { title: "認識太空船", description: "阿姆斯第一次學太空知識，知道火箭需要很多人一起設計和檢查。", instruction: "全組一起倒數 5、4、3、2、1，最後喊：「發射！」", reward: { experience: 30 } },
          { title: "整理觀星器材", description: "阿姆斯幫忙整理望遠鏡和星圖，學會保護器材也很重要。", instruction: "全組假裝擦亮望遠鏡，說：「看見星星！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "買星空書嗎", description: "阿姆斯想買星空書，也可以先做小工作存錢。", moneyResult: "先存錢讓夢想更穩，讀書時間少一點。", studyResult: "買書後，阿姆斯更懂星球和軌道。" },
          { title: "參加科學營", description: "科學營能做實驗，但需要報名費。", moneyResult: "先把報名費存起來，下一次更安心。", studyResult: "參加營隊後，阿姆斯更知道科學需要實驗。" },
        ],
        destinyExperience: [
          { title: "公式看不懂", description: "太空知識裡有一些數學，阿姆斯一開始看得頭昏。", effects: { experience: -20 } },
          { title: "模型裝反了", description: "阿姆斯組火箭模型時把零件裝反，只好拆掉重來。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "模型材料費", description: "做火箭模型需要紙板和膠水，阿姆斯花了一些錢。", effects: { money: -30 } },
          { title: "觀星車資", description: "去天文館參觀需要搭車，阿姆斯付了交通費。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "新人訓練成功", description: "阿姆斯進入太空訓練，學會照指令完成安全檢查。", instruction: "全組一起說：「檢查安全帶、氧氣、通訊！」", reward: { experience: 30 } },
          { title: "協助展示活動", description: "阿姆斯在科學館協助展示太空任務，得到一點活動收入。", instruction: "全組做出太空漫步姿勢 5 秒。", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "買訓練裝備", description: "阿姆斯想買合適的訓練用品，也可以先接活動賺錢。", moneyResult: "先接活動增加收入，但訓練時間少一些。", studyResult: "有了裝備後，阿姆斯訓練更穩定。" },
          { title: "學英文通訊", description: "太空任務常用英文通訊，阿姆斯可以花錢上課。", moneyResult: "先把錢存穩，課程之後再安排。", studyResult: "上課後，阿姆斯更能聽懂任務指令。" },
        ],
        destinyExperience: [
          { title: "訓練太緊張", description: "模擬任務中警示聲響起，阿姆斯一緊張忘了下一步。", effects: { experience: -20 } },
          { title: "報告不夠清楚", description: "阿姆斯回報狀況時說得太快，教練請他重新說明。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "裝備維修費", description: "訓練用的小設備壞了，阿姆斯分擔一點維修費。", effects: { money: -30 } },
          { title: "體能課加費", description: "訓練中心新增體能課程，阿姆斯需要付材料費。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "模擬任務隊長", description: "阿姆斯在模擬任務中冷靜分工，幫隊友完成任務。", instruction: "全組用 10 秒排出一個太空隊形，最後喊：「任務完成！」", reward: { experience: 30 } },
          { title: "科普演講收入", description: "阿姆斯分享太空知識，讓孩子也覺得科學很有趣。", instruction: "全組說出一個太空物品，像月亮、火箭或星星。", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "研究任務資料", description: "阿姆斯想研究更多任務資料，也可以多接科普活動賺錢。", moneyResult: "先接活動讓收入穩定，研究時間少一點。", studyResult: "投入研究後，阿姆斯更懂任務判斷。" },
          { title: "高階訓練課", description: "高階訓練能讓阿姆斯更進步，但費用不便宜。", moneyResult: "先把資金顧好，訓練慢一點也沒關係。", studyResult: "訓練後，阿姆斯面對壓力更冷靜。" },
        ],
        destinyExperience: [
          { title: "資料判讀錯", description: "阿姆斯把一組模擬資料看錯，團隊需要重新確認。", effects: { experience: -20 } },
          { title: "團隊溝通延遲", description: "隊友沒有立刻聽懂指令，阿姆斯學到要說得更簡單。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "研討會費用", description: "阿姆斯參加太空研討會，花了一些報名費。", effects: { money: -30 } },
          { title: "資料設備升級", description: "分析資料需要更新設備，阿姆斯分擔一些費用。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "帶領太空任務", description: "阿姆斯成為成熟太空人，能冷靜帶領隊伍完成重要任務。", instruction: "全組一起倒數 3、2、1，喊：「安全返航！」", reward: { experience: 30 } },
          { title: "太空教育計畫", description: "阿姆斯把太空知識分享給孩子，也獲得計畫支持金。", instruction: "全組比出星星手勢，說：「夢想可以飛很遠！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "辦免費科學課", description: "阿姆斯想辦免費科學課，也可以先接顧問工作維持收入。", moneyResult: "先接顧問工作讓資源穩定，之後能幫更多孩子。", studyResult: "科學課讓孩子看見夢想，阿姆斯也更確定使命。" },
          { title: "升級研究設備", description: "阿姆斯想升級研究設備，也可以先存錢等更好的時機。", moneyResult: "先存錢讓團隊安心，計畫更穩。", studyResult: "設備升級後，阿姆斯能做更好的研究。" },
        ],
        destinyExperience: [
          { title: "壓力太大", description: "任務責任很重，阿姆斯需要學會放鬆和相信團隊。", effects: { experience: -20 } },
          { title: "說明太專業", description: "阿姆斯分享太空知識時講太難，孩子聽不懂，需要換成簡單說法。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "公益課材料費", description: "免費科學課需要模型材料，阿姆斯花了一些錢。", effects: { money: -30 } },
          { title: "設備保養費", description: "研究設備需要定期保養，阿姆斯付出一些費用。", effects: { money: -30 } },
        ],
      },
    ],
  },
];

const foodAndHotelRoles: RoleSeed[] = [
  {
    id: "chickenboss",
    name: "小佑",
    stageSeeds: [
      {
        chanceTasks: [
          { title: "學會醃雞肉", description: "小佑第一次學做鹹酥雞，知道味道好吃要靠時間和比例。", instruction: "全組做 3 個攪拌動作，最後喊：「香味出來了！」", reward: { experience: 30 } },
          { title: "幫忙排紙袋", description: "小佑幫攤位把紙袋和竹籤排整齊，工作更順手。", instruction: "全組假裝排好紙袋，說：「客人來也不慌！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "買香料練習", description: "小佑想買香料試味道，也可以先去幫忙打工存錢。", moneyResult: "先存錢讓材料更充足，但試味道的時間少一些。", studyResult: "買香料練習後，小佑更懂味道怎麼調。" },
          { title: "參加夜市觀摩", description: "小佑想去夜市觀察人氣攤位，但需要交通和餐費。", moneyResult: "先把錢準備好，下次觀摩更安心。", studyResult: "觀摩後，小佑學到排隊動線和服務笑容很重要。" },
        ],
        destinyExperience: [
          { title: "火候沒抓好", description: "小佑炸得太久，口感變得有點乾，只好重新練習。", effects: { experience: -20 } },
          { title: "菜單寫不清楚", description: "客人看不懂品項，小佑學到菜單要簡單明白。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "食材買太多", description: "小佑估錯份量，買了太多食材，成本變高。", effects: { money: -30 } },
          { title: "紙袋補貨", description: "包裝紙袋用完了，小佑需要再買一批。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "新人攤位助手", description: "小佑開始在攤位工作，學會接單、找錢和保持笑容。", instruction: "全組輪流說：「您好，請問要點什麼？」", reward: { experience: 30 } },
          { title: "尖峰小獎金", description: "晚餐時間客人很多，小佑穩穩幫忙包餐，得到小獎金。", instruction: "全組做 3 個裝袋動作，最後喊：「熱熱送上！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "買炸鍋工具", description: "小佑想買更順手的工具，也可以先多排班存錢。", moneyResult: "先多排班增加收入，但練習新品少一些。", studyResult: "有了好工具，小佑做餐更穩。" },
          { title: "學食品安全", description: "食品安全課程要費用，但能讓小佑更懂乾淨和保存。", moneyResult: "先把收入顧好，課程下次再上。", studyResult: "學完後，小佑更懂得保護客人的健康。" },
        ],
        destinyExperience: [
          { title: "找錢找錯", description: "客人很多時，小佑一緊張找錯錢，學到要慢慢確認。", effects: { experience: -20 } },
          { title: "出餐順序亂了", description: "小佑忘記先後順序，讓客人等比較久。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "油鍋清潔費", description: "攤位需要清潔油鍋，小佑花了一點清潔用品費。", effects: { money: -30 } },
          { title: "食材漲價", description: "雞肉價格變貴，小佑的成本增加了一點。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "招牌口味出現", description: "小佑調出大家喜歡的口味，攤位開始有回頭客。", instruction: "全組幫招牌口味取名字，最後喊：「招牌上桌！」", reward: { experience: 30 } },
          { title: "外送訂單增加", description: "小佑把包裝流程安排好，外送訂單增加，收入也變好了。", instruction: "全組假裝封袋，說：「封好、放穩、送出！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "研發新品或接單", description: "小佑想試新口味，也可以先多接團體訂單賺錢。", moneyResult: "先接團體訂單讓收入穩，研發晚一點也可以。", studyResult: "投入新品後，小佑更懂客人喜歡什麼。" },
          { title: "做品牌招牌", description: "漂亮招牌需要費用，也能讓客人更容易記住小佑。", moneyResult: "先多賣幾天存錢，招牌之後再做。", studyResult: "新招牌讓攤位更清楚，小佑也更有品牌感。" },
        ],
        destinyExperience: [
          { title: "新品不夠穩", description: "同一個新口味每次味道不同，小佑需要重新記錄比例。", effects: { experience: -20 } },
          { title: "團隊分工卡住", description: "點餐和炸物的人沒有說好，出餐變慢。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "設備保養費", description: "炸鍋和排風設備需要保養，小佑付了一點費用。", effects: { money: -30 } },
          { title: "包裝重印", description: "包裝上的電話印錯了，小佑需要重新印。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "教新人顧攤", description: "小佑成為可靠老闆，開始教新人注意安全、衛生和服務。", instruction: "全組一起說：「安全第一，笑容也第一！」", reward: { experience: 30 } },
          { title: "愛心餐活動", description: "小佑準備愛心餐給需要的人，也收到社區支持金。", instruction: "全組比出愛心，說：「熱熱一份，暖暖一心！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "辦免費餐點日", description: "小佑想辦免費餐點日，也可以先接大型訂單維持收入。", moneyResult: "先接訂單讓店更穩，未來能幫助更多人。", studyResult: "免費餐點日讓社區感到溫暖，小佑更確定使命。" },
          { title: "升級攤車設備", description: "小佑想讓攤車更安全，也可以先存錢等合適時機。", moneyResult: "先存錢讓營運更安心。", studyResult: "設備升級後，小佑能做得更安全、更穩定。" },
        ],
        destinyExperience: [
          { title: "太忙忘了休息", description: "小佑想服務每位客人，結果太累了，需要學會排班。", effects: { experience: -20 } },
          { title: "教新人太快", description: "小佑說明步驟太快，新人聽不懂，需要更有耐心。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "攤車維修", description: "攤車輪子需要修理，小佑花了一些維修費。", effects: { money: -30 } },
          { title: "公益活動成本", description: "愛心餐需要食材和包裝，小佑付出一些金錢。", effects: { money: -30 } },
        ],
      },
    ],
  },
  {
    id: "hotelboss",
    name: "韓畢婁",
    stageSeeds: [
      {
        chanceTasks: [
          { title: "學會鋪床單", description: "韓畢婁第一次接觸飯店工作，發現房間整齊會讓客人覺得安心。", instruction: "全組做 3 個拉平床單的動作，最後說：「整齊完成！」", reward: { experience: 30 } },
          { title: "整理迎賓小物", description: "韓畢婁幫忙準備小卡和瓶裝水，學到貼心服務從小地方開始。", instruction: "全組假裝放好迎賓小物，說：「歡迎入住！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "買服務書嗎", description: "韓畢婁想買一本服務入門書，也可以先幫忙打工存錢。", moneyResult: "先存錢讓準備更穩，閱讀時間少一點。", studyResult: "買書後，韓畢婁更懂什麼是好服務。" },
          { title: "參觀飯店", description: "韓畢婁想參觀漂亮飯店學習，但需要交通費。", moneyResult: "先把交通費準備好，下次參觀更安心。", studyResult: "參觀後，韓畢婁看見整潔和禮貌的重要。" },
        ],
        destinyExperience: [
          { title: "房卡記錯房號", description: "韓畢婁練習接待時把房號記錯，學到資料要再確認。", effects: { experience: -20 } },
          { title: "招呼聲太小", description: "韓畢婁打招呼太小聲，客人沒有聽清楚。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "買練習制服", description: "學習服務禮儀需要一件整齊上衣，韓畢婁花了一些錢。", effects: { money: -30 } },
          { title: "影印學習資料", description: "飯店服務資料需要影印，韓畢婁付了影印費。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "新人櫃台接待", description: "韓畢婁成為飯店新人，學會微笑問候和確認訂房資料。", instruction: "全組一起說：「您好，歡迎光臨！」", reward: { experience: 30 } },
          { title: "協助團客入住", description: "團體客人一起到達，韓畢婁幫忙發房卡，得到小獎金。", instruction: "全組假裝發房卡，提醒：「請保管好房卡！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "學外語接待", description: "外語課能幫助韓畢婁接待更多客人，但需要費用。", moneyResult: "先多排班增加收入，外語課之後再上。", studyResult: "上課後，韓畢婁能用簡單外語問候客人。" },
          { title: "買服務工具", description: "韓畢婁想買筆記夾和名牌，也可以先存薪水。", moneyResult: "先把薪水存穩，工具晚一點再買。", studyResult: "工具準備好後，韓畢婁工作更有條理。" },
        ],
        destinyExperience: [
          { title: "訂房資料看錯", description: "韓畢婁把入住日期看錯，幸好前輩及時提醒。", effects: { experience: -20 } },
          { title: "客訴太緊張", description: "客人反映問題時，韓畢婁一開始有點慌，需要學會冷靜聽。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "制服清洗費", description: "櫃台制服要保持乾淨，韓畢婁花錢送洗。", effects: { money: -30 } },
          { title: "補買文具", description: "櫃台常用筆和便條紙用完了，韓畢婁補買一些。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "安排客人需求", description: "韓畢婁能把客人的需求整理好，讓房務、餐廳和櫃台合作更順利。", instruction: "全組輪流說一個客人可能需要的服務，最後喊：「安排好了！」", reward: { experience: 30 } },
          { title: "活動住房收入", description: "飯店接到活動住房，韓畢婁協助安排流程，收入也提升了。", instruction: "全組假裝確認名單，說：「入住順利！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "研究住房方案", description: "韓畢婁想設計新的住房方案，也可以先多接活動案賺錢。", moneyResult: "先接活動案增加收入，方案研究晚一點。", studyResult: "研究後，韓畢婁更懂客人喜歡什麼。" },
          { title: "進修管理課", description: "管理課能讓韓畢婁更會帶團隊，但需要費用。", moneyResult: "先把營收顧好，課程之後再安排。", studyResult: "上課後，韓畢婁更懂排班和溝通。" },
        ],
        destinyExperience: [
          { title: "房務訊息漏掉", description: "有一間房需要加枕頭，但訊息沒有傳清楚，客人等了一下。", effects: { experience: -20 } },
          { title: "活動流程延遲", description: "活動入住人數多，韓畢婁安排得不夠快，流程有點卡。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "設備保養費", description: "飯店門鎖系統需要保養，韓畢婁分擔一些費用。", effects: { money: -30 } },
          { title: "備品成本增加", description: "牙刷、毛巾等備品價格變高，飯店成本增加。", effects: { money: -30 } },
        ],
      },
      {
        chanceTasks: [
          { title: "帶新人服務客人", description: "韓畢婁成為飯店老闆，開始教新人用真誠和細心接待客人。", instruction: "全組一起說：「用心服務，讓人安心！」", reward: { experience: 30 } },
          { title: "公益住宿合作", description: "韓畢婁和社區合作，提供需要休息的人短期住宿，也收到支持金。", instruction: "全組比出屋頂手勢，說：「有地方休息，很重要！」", reward: { money: 50 } },
        ],
        chanceChoices: [
          { title: "提供愛心房", description: "韓畢婁想提供愛心房，也可以先接大型團體維持收入。", moneyResult: "先接團體讓飯店穩定，未來能持續幫助人。", studyResult: "愛心房幫助需要休息的人，韓畢婁更確定使命。" },
          { title: "升級房間設備", description: "韓畢婁想升級房間設備，也可以先存錢讓營運更穩。", moneyResult: "先存錢讓飯店運作安心。", studyResult: "設備升級後，客人住得更舒服。" },
        ],
        destinyExperience: [
          { title: "服務標準不一致", description: "不同員工做法不一樣，韓畢婁需要重新教大家共同標準。", effects: { experience: -20 } },
          { title: "太想滿足所有客人", description: "韓畢婁想讓每個人都滿意，結果壓力太大，需要學會分工。", effects: { experience: -20 } },
        ],
        destinyMoney: [
          { title: "房間維修費", description: "房間冷氣需要維修，韓畢婁花了一些費用。", effects: { money: -30 } },
          { title: "公益合作成本", description: "公益住宿需要清潔和備品，韓畢婁付出一些金錢。", effects: { money: -30 } },
        ],
      },
    ],
  },
];

export const doctorCards: Card[] = makeCards(roles[0]);
export const baristaCards: Card[] = makeCards(roles[1]);
export const teacherCards: Card[] = makeCards(moreRoles[0]);
export const astronautCards: Card[] = makeCards(finalRoles[0]);
export const chickenBossCards: Card[] = makeCards(foodAndHotelRoles[0]);
export const hotelBossCards: Card[] = makeCards(foodAndHotelRoles[1]);
