import type { Deity } from "../../lib/siteData";

// 靜態資源引入
import heroYellowImg from "../../assets/visuals/deities/dzambhala-hero-altar.webp";
import ritualYellowImg from "../../assets/visuals/deities/dzambhala-vibe-butter-lamp.webp"; 
import dzambhalaRitualAltar from "../../assets/visuals/deities/dzambhala-ritual-altar.webp";
import dzambhalaActionPuja from "../../assets/visuals/deities/dzambhala-action-group-puja.webp";
import dzambhalaVibeLamp from "../../assets/visuals/deities/dzambhala-vibe-butter-lamp.webp";

export const yellow: Deity = {
  key: "yellow",

  name: "黃財神・水供修復法門",
  subtitle: "透過儀軌與供養去「打開財富的流動」",
  route: "/deity/yellow",

  primaryIntent: "專為「明明有在努力，但結果不盡如意」的人設計。",

  themeColor: { bg: "#262217", accent: "#FBBF24" },

  heroKicker: "財運卡住怎麼辦？很多人不知道，其實不是不努力，而是「能量沒打開」。",
  heroImage: heroYellowImg,

  // 完美符合型別 (string) 的多行文字，同時保留優化後的文案節奏
  promise:
`多數人以為自己問題是「賺不夠多」
但真正更常見的是——「留不住」

你可能也正在經歷：
・案子談好了，最後卻沒成交
・明明有收入，但帳戶就是存不起來
・很努力，但結果總差最後一段
・開始對錢產生壓力，甚至影響決策

如果這些你有中兩個以上，那問題就不是努力，而是「結構開始流失」。

——
黃財神成為佛教密法的護法神祇，掌管無盡的財庫，是諸財神的領袖。 
黃財神的修法屬於密續中的作部，密乘的修行者為了有資財宏法利生，不被生活所逼，可安心向道，特賜予行者財利豐足，獲得黃財神庇佑，能財源廣進，免除窮困，以及一切經濟壓迫。

法事是做三件更關鍵的事：
👉 清理阻礙
👉 轉動能量
👉 讓資源開始流動

所以多數人的變化是：
✔ 開始累積財運
✔ 讓金流順起來
✔ 減少阻礙與卡關

——
黃財神也不會讓你什麼都不做就有錢 
👉 它做的是一件更現實的事：讓你的努力，不再被吃掉，而是放大

——
如果你現在還在卡，你可以再觀察一段時間（很多人一開始也是這樣）。
但多數人最後會發現一件事：
👉 如果會自己好，早就好了。

——
你現在只是在決定一件事：
要不要繼續拖，還是開始處理。`,

  scripture: [
    {
      quote: "當財富開始穩定，心才真正有力量。",
      source: "黃財神密續・增益品"
    }
  ],

  precaution: {
    title: "在藏傳佛教的觀點裡財富，不只是物質，而是一種「流動的能量」：",
    items: [
      "財富回到正常狀態",
      "會清除阻礙，但行動仍需要你自己完成",
      "所有護持金皆用於實際修法與供養，因果透明"
    ]
  },

  checkoutGuidance: {
    title: "流程登記介紹（照這樣做即可）",
    steps: [
      {
        id: 1,
        title: "寫下卡點",
        desc: "備註填寫姓名＋你目前最卡的財務問題",
        example: "王小明｜業績總差最後成交"
      },
      {
        id: 2,
        title: "完成護持",
        desc: "完成後當天志工造冊，流程會開始運作",
        example: "隔週公布於粉絲團"
      }
    ]
  },

  // 保留強烈的視覺符號，但不更動資料結構
  painPoints: [
    "❌ 談好的單，總在最後一刻失敗",
    "❌ 收入有，但總是存不起來",
    "❌ 一直差最後一段，無法突破",
    "❌ 開始對錢產生壓力"
  ],

  whyThisDeity: [
    "✅ 先讓你留得住錢，節流後開源",
    "✅ 清掉讓機會消失的隱性阻礙",
    "✅ 讓決策回到理性，而不是焦慮"
  ],

  process: [
    { title: "對位問題", body: "明確你的卡點" },
    { title: "啟動流動", body: "開始鬆動阻塞" },
    { title: "轉為結果", body: "轉化為金流與機會" }
  ],

  ritual: {
    title: "黃財神水供｜啟動財富流動",
    image: ritualYellowImg,
    imageAlt: "修法場域",
    mdPath: "yellow-jambhala-sang.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/jamyang-khyentse-chokyi-lodro/jambhala-sang",
    keyPoints: ["流動", "清阻", "回流"],
    offeringsChecklist: [],
    practiceFocus: []
  },

  rituals: [
    { id: "r1", img: dzambhalaRitualAltar, alt: "壇城", caption: "修法核心" },
    { id: "r2", img: dzambhalaActionPuja, alt: "修法", caption: "實際進行" },
    { id: "r3", img: dzambhalaVibeLamp, alt: "供燈", caption: "穩定放大" }
  ],

  // 將 date 與 tag 的資訊融入現有欄位，避開型別錯誤
  testimonials: [
    { 
      title: "我不是沒收入，是錢留不住", 
      body: "收入一直有，但月底還是空。護持後最先改變的不是收入，而是大錢開始留下來。", 
      by: "台中・接案者｜#財務止漏 (2023.11)" 
    },
    { 
      title: "最奇怪的是每次都差最後一步", 
      body: "案子常卡成交。做完之後，一個原本沒希望的客戶突然回來成交。", 
      by: "台北・業務｜#業績突破 (2024.01)" 
    },
    { 
      title: "沒有爆發，但一切開始順", 
      body: "本來半信半疑，但生活開始變順，錢不再亂噴，這反而更真實。", 
      by: "高雄・自由工作者｜#理財心態 (2024.03)" 
    }
  ],

  plans: [
    { 
      id: "y-490", 
      name: "先止漏｜讓狀態不要繼續惡化", 
      price: 490, 
      blurb: "適合：開始覺得財務不對勁，先穩住", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4W0?utm_source=website&utm_medium=deity_page&utm_campaign=yellow_490",
      suitableFor: ["初期"]
    },
    { 
      id: "y-980", 
      name: "現金流回正｜最多人從這裡開始（主力）", 
      price: 980, 
      blurb: "如果你收入卡住一段時間，這個通常最有感（多數人從這裡開始變順）", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4XF?utm_source=website&utm_medium=deity_page&utm_campaign=yellow_980",
      hot: true,
      badge: "最多人選",
      suitableFor: ["卡關"]
    },
    { 
      id: "y-1860", 
      name: "全面重建｜直接翻轉狀態", 
      price: 1860, 
      blurb: "適合：長期低潮或想一次突破", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3?utm_source=website&utm_medium=deity_page&utm_campaign=yellow_1860",
      suitableFor: ["長期卡死"]
    }
  ],

  faq: [
    { 
      q: "多久會有變化？", 
      a: "多數人在幾天到兩週內開始感覺變化。" 
    },
    { 
      q: "這真的有用嗎？", 
      a: "若這裡讓您感受到共鳴，那份共鳴本身，就是最誠實的訊號。" 
    },
    { 
      q: "為什麼有人開始轉運？？", 
      a: "這不是迷信而是透過儀軌與供養去「打開財富的流動」。" 
    }
  ],

  // 將行動呼籲文字直接融入 desc 中
  crossSell: [
    {
      title: "作明佛母｜增加客源",
      to: "kurukulla", 
      desc: "適合沒有客戶來源的人（貴人） ➔ 探索貴人引流法門"
    },
    {
      title: "象頭財神｜破除阻礙",
      to: "ganapati", 
      desc: "適合投資理財者（清晰） ➔ 探索阻礙破除法門"
    }
  ]
};