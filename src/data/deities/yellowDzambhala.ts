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
  subtitle: "不是你不夠努力，而是財富正在流失｜現在開始止漏、回流、放大",
  route: "/deity/yellow",

  primaryIntent: "專為「有在努力，但錢就是留不住」的人設計的財富修復法門。",

  themeColor: { bg: "#262217", accent: "#FBBF24" },

  heroKicker: "你賺的錢，其實沒有消失——只是從看不見的地方流走了。",
  heroImage: heroYellowImg,

  promise:
    "多數人以為自己賺不到錢，其實問題不是「收入」，而是「流失」。\n\n你是否有過這些狀況：\n明明有進帳，但總是存不下來？\n案子快成卻臨門失手？\n努力很多，但結果總差一點？\n\n這不是能力問題，而是財富結構出現「漏損」。\n\n黃財神水供，不是幫你憑空變有錢，而是：\n✔ 修復財富容器\n✔ 清理阻塞的機會流\n✔ 讓該來的錢，真正留下來\n\n當流動被打開，你會發現——\n機會開始出現、錢開始留下、決策開始變穩。",

  scripture: [
    {
      quote: "當財富穩定流動，心才真正安定，力量才得以放大。",
      source: "黃財神密續・增益品"
    }
  ],

  precaution: {
    title: "這不是快速致富，而是結構修復：",
    items: [
      "這不是投機捷徑，而是調整你與財富之間的關係",
      "修法會移除阻礙，但行動仍需要你親自完成",
      "所有護持金皆用於真實修法與供養，因果清晰透明"
    ]
  },

  checkoutGuidance: {
    title: "啟動財富回流（請照這樣做）",
    steps: [
      {
        id: 1,
        title: "寫下你的卡點（很重要）",
        desc: "請在備註填寫：姓名＋目前最卡的財務問題",
        example: "王小明｜台北｜業績卡關，總是差最後成交"
      },
      {
        id: 2,
        title: "完成護持＝正式啟動",
        desc: "系統完成後即刻造冊，你的轉化會從此刻開始運作",
        example: "完成後建議安靜30秒，讓狀態穩定下來"
      }
    ]
  },

  painPoints: [
    "談好的單，總在最後一刻失敗（而且不只一次）",
    "收入進來了，但總有理由把它花掉或流走",
    "很努力，但成果總是比預期少一截",
    "心裡一直有壓力：怕沒錢、怕不穩、怕未來"
  ],

  whyThisDeity: [
    "不是增加收入，而是先讓你「留得住錢」",
    "清除讓機會消失的隱性阻礙",
    "讓決策不再被焦慮控制，提升實際結果"
  ],

  process: [
    {
      title: "建立對位",
      body: "將你的問題明確化，讓轉化有精準方向。"
    },
    {
      title: "水供啟動",
      body: "透過儀軌引動財富流動，開始鬆動阻塞。"
    },
    {
      title: "回流穩定",
      body: "將能量轉為現實中的機會、金流與選擇。"
    }
  ],

  ritual: {
    title: "黃財神水供｜從源頭改變財富流向",
    image: ritualYellowImg,
    imageAlt: "滿願藏庫修法場域",
    mdPath: "yellow-jambhala-sang.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/jamyang-khyentse-chokyi-lodro/jambhala-sang",
    keyPoints: [
      "水供象徵財富流動，啟動回流機制",
      "煙供清理過去累積的阻礙與干擾",
      "專人造冊，確保每一份護持都有對應"
    ],
    offeringsChecklist: [],
    practiceFocus: []
  },

  rituals: [
    { id: "r1", img: dzambhalaRitualAltar, alt: "黃財神壇城", caption: "修法核心場域" },
    { id: "r2", img: dzambhalaActionPuja, alt: "水供修法", caption: "實際修法進行" },
    { id: "r3", img: dzambhalaVibeLamp, alt: "供燈", caption: "穩定與放大能量" }
  ],

  testimonials: [
    { 
      title: "錢開始留下來，這才是關鍵", 
      body: "以前不是沒收入，是存不住。護持後最大改變是——錢真的留得下來，而且心不再焦慮，反而更敢接高價案。", 
      by: "台中・自由接案者" 
    },
    { 
      title: "卡住的單，真的動了", 
      body: "有一筆拖很久的款項突然撥下來，剛好在我最需要的時候。這種感覺很明顯不是巧合。", 
      by: "台北・業務" 
    }
  ],

  plans: [
    { 
      id: "y-490", 
      name: "先止漏｜穩定財務狀態", 
      price: 490, 
      blurb: "適合：開始焦慮、想先穩住現況的人", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4W0",
      suitableFor: ["焦慮", "小額流失"]
    },
    { 
      id: "y-980", 
      name: "主力方案｜現金流修復（最多人選）", 
      price: 980, 
      blurb: "適合：業績卡關、收入不穩，需要明顯改善的人", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4XF",
      hot: true,
      badge: "最多人選",
      suitableFor: ["卡關", "收入不穩"]
    },
    { 
      id: "y-1860", 
      name: "深度重建｜全面翻轉財務結構", 
      price: 1860, 
      blurb: "適合：長期低潮、需要大幅改變現狀的人", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3",
      suitableFor: ["低潮", "重大轉變"]
    }
  ],

  faq: [
    { 
      q: "多久會有感？", 
      a: "有人幾天內出現變化，有人約1–2週開始明顯感受。請觀察金流、機會與決策變化。" 
    },
    { 
      q: "我還需要努力嗎？", 
      a: "需要。這個法門是讓你的努力「不再被吃掉」，而不是取代努力。" 
    }
  ],

  crossSell: [
    {
      title: "作明佛母｜增加客源與吸引力",
      to: "kurukulla", 
      desc: "如果你問題是『沒有客戶』，建議搭配提升吸引力"
    },
    {
      title: "象頭財神｜破除重大阻礙",
      to: "ganapati", 
      desc: "如果你遇到卡死的問題（競爭、法律、惡性阻擋）"
    }
  ]
};