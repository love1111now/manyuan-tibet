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
  subtitle: "你不是賺不到錢，而是錢正在流失｜先止漏，才有累積",
  route: "/deity/yellow",

  primaryIntent: "專為「明明有在努力，但結果不盡如意」的人設計。",

  themeColor: { bg: "#262217", accent: "#FBBF24" },

  heroKicker: "你卡住的原因，可能不是能力，而是有東西在消耗你的結果。",
  heroImage: heroYellowImg,

  promise:
`多數人以為自己問題是「賺不夠多」
但真正更常見的是——「留不住」

你可能也正在經歷：

・案子談好了，最後卻沒成交
・明明有收入，但帳戶就是存不起來
・很努力，但結果總差最後一段
・開始對錢產生壓力，甚至影響決策

如果這些你有中兩個以上
那問題就不是努力，而是「結構開始流失」

——

黃財神水供，不是幫你變有錢
而是做三件更關鍵的事：

1️⃣ 止漏  
2️⃣ 清阻  
3️⃣ 導流  

所以多數人的變化是：

✔ 錢開始留下來  
✔ 案子開始成交  
✔ 心變穩  

——

這不是捷徑  
也不會讓你什麼都不做就有錢  

👉 它做的是一件更現實的事：
讓你的努力，不再被吃掉

——

如果你現在還在卡

你可以再觀察一段時間  
（很多人一開始也是這樣）

但多數人最後會發現一件事：

👉 如果會自己好，早就好了

——

你現在只是在決定一件事：

要不要繼續拖

還是開始處理`,

  scripture: [
    {
      quote: "當財富開始穩定，心才真正有力量。",
      source: "黃財神密續・增益品"
    }
  ],

  precaution: {
    title: "這不是投機，而是修復：",
    items: [
      "不保證暴富，而是讓財富回到正常狀態",
      "會清除阻礙，但行動仍需要你自己完成",
      "所有護持金皆用於實際修法與供養，因果透明"
    ]
  },

  checkoutGuidance: {
    title: "開始處理（照這樣做即可）",
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
        desc: "完成後即刻造冊，流程會開始運作",
        example: "完成後靜置30秒"
      }
    ]
  },

  painPoints: [
    "談好的單，總在最後一刻失敗",
    "收入有，但總是存不起來",
    "一直差最後一段，無法突破",
    "開始對錢產生壓力"
  ],

  whyThisDeity: [
    "先讓你留得住錢，而不是只追求增加",
    "清掉讓機會消失的隱性阻礙",
    "讓決策回到理性，而不是焦慮"
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

  // 🔥 強化：冷流量用見證（更有畫面）
  testimonials: [
    { 
      title: "我不是沒賺，是錢留不住", 
      body: "收入一直有，但月底還是空。護持後最先改變的不是收入，而是錢開始留下來。", 
      by: "台中・接案者" 
    },
    { 
      title: "最奇怪的是每次都差最後一步", 
      body: "案子常卡成交。做完之後，一個原本沒希望的客戶突然回來成交。", 
      by: "台北・業務" 
    },
    { 
      title: "沒有爆發，但一切開始順", 
      body: "本來半信半疑，但生活開始變順，錢不再亂掉，心也穩了。", 
      by: "高雄・自由工作者" 
    }
  ],

  plans: [
    { 
      id: "y-490", 
      name: "先止漏｜讓狀態不要繼續惡化", 
      price: 490, 
      blurb: "適合：開始覺得財務不對勁，先穩住", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4W0",
      suitableFor: ["初期"]
    },
    { 
      id: "y-980", 
      name: "現金流回正｜最多人從這裡開始（主力）", 
      price: 980, 
      blurb: "如果你卡住一段時間，這個通常最有感（多數人從這裡開始變順）", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4XF",
      hot: true,
      badge: "最多人選",
      suitableFor: ["卡關"]
    },
    { 
      id: "y-1860", 
      name: "全面重建｜直接翻轉狀態", 
      price: 1860, 
      blurb: "適合：長期低潮或想一次突破", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3",
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
      a: "如果現在的方法有效，你不會卡在這裡。" 
    },
    { 
      q: "還需要努力嗎？", 
      a: "需要。這是讓你的努力開始有結果，而不是取代努力。" 
    }
  ],

  crossSell: [
    {
      title: "作明佛母｜增加客源",
      to: "kurukulla", 
      desc: "適合沒有客戶來源的人"
    },
    {
      title: "象頭財神｜破除阻礙",
      to: "ganapati", 
      desc: "適合嚴重卡關"
    }
  ]
};