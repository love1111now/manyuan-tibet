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
  subtitle: "專為「一直努力、卻總差那一步」的人設計",
  route: "/deity/yellow",

  primaryIntent: "專為「明明有在努力，但結果不盡如意」的人設計。",

  themeColor: { bg: "#262217", accent: "#FBBF24" },

  // ── 首屏：前兩句就要讓人停下來 ──────────────────────────────
  heroKicker: "你不是不努力。是能量卡住了，讓努力一直被吃掉。",
  heroImage: heroYellowImg,

  // ── promise：情感橋接優先，說明在後 ─────────────────────────
  promise:
`你有沒有這種感覺——
明明很努力，但就是差那最後一步。

・案子談好了，最後卻沒成交
・有收入，但帳戶就是存不起來
・努力了很久，結果卻一直在原點
・開始對錢產生莫名的壓力與焦慮

如果你有中兩個以上，問題不是你不夠努力。
而是有什麼東西，在默默吃掉你的成果。

──
黃財神是藏傳佛教密法中掌管財庫的護法神祇，諸財神之首。
修法屬密續作部，賜予行者財利豐足、免除窮困與一切經濟壓迫。

法事做的是三件關鍵的事：
👉 清理阻礙你的隱性卡點
👉 重新轉動停滯的財富能量
👉 讓資源與機會開始真正流向你

大多數人的改變是從這裡開始：
✔ 錢開始留得住，不再莫名流失
✔ 卡了很久的事，突然鬆動了
✔ 決策變清晰，焦慮感下降

──
黃財神做的不是「讓你不勞而獲」。
👉 而是讓你的努力，不再被能量的漏洞吃掉。

──
很多人一開始也在觀望，覺得再等看看。
但後來他們都說同一句話：
「如果會自己好，早就好了。」

──
你現在只是在做一個決定：
繼續讓狀況拖下去，還是今天開始處理。`,

  scripture: [
    {
      quote: "當財富開始穩定，心才真正有力量。",
      source: "黃財神密續・增益品"
    }
  ],

  precaution: {
    title: "在藏傳佛教的觀點裡，財富不只是物質，而是一種「流動的能量」：",
    items: [
      "法事目的是讓財富狀態回到正常流動",
      "會清除阻礙，但行動仍需要你自己完成",
      "所有護持金皆用於實際修法與供養，因果透明"
    ]
  },

  checkoutGuidance: {
    title: "登記流程（照這樣做就好）",
    steps: [
      {
        id: 1,
        title: "寫下你的卡點",
        desc: "備註填寫姓名＋目前最卡的財務問題，越具體越好",
        example: "王小明｜業績總差最後成交／錢留不住"
      },
      {
        id: 2,
        title: "完成護持",
        desc: "完成後當天志工造冊，法事流程開始運作",
        example: "結果隔週公布於粉絲團"
      }
    ]
  },

  painPoints: [
    "❌ 談好的單，總在最後一刻失敗",
    "❌ 有收入，但月底帳戶總是空的",
    "❌ 一直差最後一段，怎樣都突破不了",
    "❌ 開始對錢感到莫名壓力與焦慮",
    "❌ 感覺努力的成果一直被什麼吃掉"
  ],

  whyThisDeity: [
    "✅ 先止漏——讓你留得住已有的錢",
    "✅ 清掉讓機會消失的隱性阻礙",
    "✅ 讓決策回到理性，焦慮感下降",
    "✅ 卡了很久的事，開始鬆動流動"
  ],

  process: [
    { title: "對位問題", body: "明確你的財務卡點" },
    { title: "啟動流動", body: "開始鬆動阻塞的能量" },
    { title: "轉為結果", body: "轉化為金流與實際機會" }
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

  // ── 顧客證言：移到 plans 上方渲染，請在頁面組件調整順序 ───────
  testimonials: [
    { 
      title: "收入一直有，但錢就是留不住", 
      body: "每個月都有案子，但月底帳戶總是空的。護持後沒有爆發，但大錢開始留下來了，這反而更真實。", 
      by: "台中・接案設計師｜#財務止漏 (2023.11)" 
    },
    { 
      title: "案子每次都差那最後一步", 
      body: "談了快三個月的客戶，一直卡在簽約前。護持後兩週，對方突然主動回來說要繼續。", 
      by: "台北・行銷業務｜#業績突破 (2024.01)" 
    },
    { 
      title: "半信半疑，但生活開始真的順了", 
      body: "我不是很信這個，但朋友推薦就試試。後來發現錢不再亂噴，決策也比之前清晰很多。", 
      by: "高雄・自由工作者｜#理財心態 (2024.03)" 
    },
    {
      title: "卡了兩年的合作，突然有進展",
      body: "一個拖了很久的合作案，護持後對方主動找我談，完全沒預期到。",
      by: "新北・創業者｜#卡關突破 (2024.06)"
    }
  ],

  // ── plans：強化文案，降低決策門檻 ───────────────────────────
  plans: [
    { 
      id: "y-490", 
      name: "先止漏・穩住現在的狀態", 
      price: 490, 
      blurb: "適合：剛開始覺得財務不對勁，還在觀望。先讓狀況不要繼續惡化，是第一步。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4W0?utm_source=website&utm_medium=deity_page&utm_campaign=yellow_490",
      suitableFor: ["初期觀望", "財務剛開始卡"]
    },
    { 
      id: "y-980", 
      name: "讓現金流回正・最多人從這裡開始", 
      price: 980, 
      blurb: "如果你收入卡住一段時間了，這個方案通常最有感。多數人反映從這裡開始明顯變順。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4XF?utm_source=website&utm_medium=deity_page&utm_campaign=yellow_980",
      hot: true,
      badge: "最多人選",
      suitableFor: ["卡關一段時間", "收入有但存不住"]
    },
    { 
      id: "y-1860", 
      name: "全面重建・直接翻轉長期低潮", 
      price: 1860, 
      blurb: "適合：卡住超過一年，或想一次做全面清理與重建的人。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3?utm_source=website&utm_medium=deity_page&utm_campaign=yellow_1860",
      suitableFor: ["長期低潮", "想一次突破"]
    }
  ],

  // ── FAQ：補強疑慮，減少流失 ──────────────────────────────────
  faq: [
    { 
      q: "我不太信這個，也可以嗎？", 
      a: "可以。很多人一開始也是半信半疑。法事的運作不需要你相信，你只需要如實描述你的狀況。" 
    },
    { 
      q: "多久會有變化？", 
      a: "多數人在幾天到兩週內開始感受到變化，常見的是某件卡很久的事突然有進展，或焦慮感降低。" 
    },
    { 
      q: "這跟算命、開運商品有什麼不同？", 
      a: "法事是一套完整的儀軌修法，由師父帶領進行，不是商品也不是預測。目的是清除阻礙、讓能量重新流動。" 
    },
    { 
      q: "護持金用在哪裡？", 
      a: "所有護持金用於實際法事的供養、場地與師父費用，因果透明，結果隔週公布於粉絲團。" 
    },
    { 
      q: "這真的有用嗎？", 
      a: "如果你看到這裡還有共鳴，那份共鳴本身就是最誠實的訊號。你也可以先從 490 開始，感受看看。" 
    },
    {
      q: "我要填什麼資料？",
      a: "只需要在備註填上姓名，以及你目前最卡的財務問題。越具體越好，例如「業績總差最後成交」或「錢一直留不住」。"
    }
  ],

  crossSell: [
    {
      title: "作明佛母｜增加客源與貴人",
      to: "kurukulla", 
      desc: "適合沒有客戶來源、需要貴人引流的人 ➔ 探索貴人引流法門"
    },
    {
      title: "象頭財神｜破除投資阻礙",
      to: "ganapati", 
      desc: "適合投資理財遇到瓶頸的人 ➔ 探索阻礙破除法門"
    }
  ]
};