import type { Deity } from "@/lib/siteData";

// ✅ 視覺素材 (已修復重複引入並統一命名規範)
import heroKurukullaImg from "@/assets/visuals/deities/kurukulla-hero-altar.webp";
import kurukullaRitualAltarImg from "@/assets/visuals/deities/kurukulla-ritual-altar.webp";
import kurukullaActionPujaImg from "@/assets/visuals/deities/kurukulla-action-group-puja.webp";
import kurukullaVibeLampImg from "@/assets/visuals/deities/kurukulla-vibe-butter-lamp.webp";

export const kurukulla: Deity = {
  key: "kurukulla",

  // SEO
  name: "作明佛母",
  subtitle: "溫柔修復關係與吸引力",
  route: "/deity/kurukulla",

  // 手機首頁重點
  primaryIntent: "感情修復・人緣提升・善緣靠近",

  themeColor: {
    bg: "#2D151F",
    accent: "#E0115F",
  },

  // Hero
  heroKicker: "重新點亮您的吸引力，讓真正適合您的善緣開始靠近。",
  heroImage: heroKurukullaImg,
  promise:
    "作明佛母，是藏傳佛教蓮華部的重要懷愛本尊，又稱咕嚕咕咧佛母、紅度母。透過溫柔的修法與祝福，陪伴您修復受傷的人際感受、重新建立內在自信，讓愛與善意自然回到生命之中。我們不強求任何人，也不控制感情，只祈願您重新成為值得被珍惜的人。",

  // 注意事項
  precaution: {
    title: "在祈願之前",
    items: [
      "真正長久的感情，仍需要真誠與理解慢慢累積。修法是助緣，而不是控制他人的工具。",
      "我們不護持強求、介入他人關係、或違背對方意願的祈求。",
      "請留下真實姓名與目前困境，讓祈願與祝福更能真誠對應。",
    ],
  },

  // 付款教學
  checkoutGuidance: {
    title: "付款前的小提醒",
    steps: [
      {
        id: 1,
        title: "寫下您的願望",
        desc: "進入綠界付款後，請於備註欄留下姓名、地區，以及目前最想改善的感情或人際困擾。",
        example: "範例：王小明｜台北｜希望改善冷淡關係，重新建立信任與溫柔交流。",
      },
      {
        id: 2,
        title: "安心完成付款",
        desc: "系統使用 SSL 加密安全付款，完成後將自動返回本站。",
      },
    ],
  },

  // 經文
  scripture: [
    {
      quote: "攝受三界眾生，悉皆生起愛慕。",
      source: "《佛母心咒略軌》",
      hint: "真正的懷愛，是讓自身與世界重新產生溫柔共振。",
      url: "#",
    },
  ],

  // 痛點
  painPoints: [
    "總是默默付出，卻很少真正被理解與珍惜。",
    "在人群裡習慣退縮，明明溫柔，卻總覺得自己不被注意。",
    "不是沒有人靠近，而是一直遇不到真正安心的人。",
  ],

  // 為什麼是作明佛母
  whyThisDeity: [
    "作明佛母修復的，不只是外在桃花，而是內在失去光芒的吸引力。",
    "透過溫柔的懷愛能量，慢慢融化長期累積的不安、自我懷疑與孤單感。",
    "當內在頻率改變後，人際與感情關係也會自然開始流動。",
  ],

  // 流程
  process: [
    {
      title: "安住內心",
      body: "慢慢放下過去關係中的委屈、防備與受傷感。",
    },
    {
      title: "與佛母共振",
      body: "透過紅色蓮花部修法，重新喚醒溫柔、自信與吸引力。",
    },
    {
      title: "善緣流動",
      body: "願適合的人與關係，自然重新靠近您的生命。",
    },
  ],

  // 法事區塊
  ritual: {
    title: "作明佛母懷愛祈福修法",
    image: kurukullaVibeLampImg,
    imageAlt: "紅色蓮花與酥油燈交織出的溫柔祈願空間",
    mdPath: "kurukulla-magnetism.md",
    sourceUrl: "https://www.facebook.com/profile.php?id=61583749010531",
    note: "以溫柔且易理解的方式，帶您認識作明佛母的懷愛祝福。",
    keyPoints: [
      "放下對愛的焦慮與匱乏感。",
      "讓內在重新恢復柔軟與自信。",
      "改善人際互動中的緊張與距離感。",
      "讓感情與善緣重新開始流動。",
    ],
    offeringsChecklist: [
      "紅色花朵、酥油燈、花香系香品",
      "供水、茶品、水果等清淨供物",
      "安靜與真誠的祈願心意",
    ],
    practiceFocus: [
      "觀想溫暖紅光修復內在受傷感。",
      "透過心咒聲音安定心輪能量。",
      "將執著轉化為溫柔與祝福。",
    ],
  },

  // 儀式圖片
  rituals: [
    {
      id: "r1",
      img: kurukullaRitualAltarImg,
      alt: "作明佛母壇城",
      caption: "紅色蓮花壇城，象徵溫柔與善緣的流動。",
    },
    {
      id: "r2",
      img: kurukullaActionPujaImg,
      alt: "共修祈福",
      caption: "以梵音與祝福，陪伴每一段等待被理解的關係。",
    },
    {
      id: "r3",
      img: kurukullaVibeLampImg,
      alt: "酥油燈",
      caption: "微暖燈光，照亮內心長久的孤單與疲憊。",
    },
  ],

  // 回饋（四種情境）
  testimonials: [
    {
      title: "第一次感受到自己值得被喜歡",
      body: "以前的我很害怕主動與人接觸，總覺得自己不夠有魅力。參與作明佛母祈福後，我開始慢慢找回自信，也比較願意打開心。後來在朋友聚會中，真的遇見了一位很聊得來的人。最重要的是，我第一次覺得自己其實值得被愛。",
      by: "台北 林小姐｜行政工作",
    },
    {
      title: "冷淡很久的感情，終於重新開始交流",
      body: "我和另一半長期處於冷戰狀態，連說話都很有壓力。修法後最大的改變，不是對方突然變了一個人，而是我內心沒有那麼緊繃了。慢慢地，我們開始願意坐下來好好聊天，家裡的氣氛也終於變得比較溫暖。",
      by: "高雄 吳小姐｜國中教師",
    },
    {
      title: "工作上的人際關係突然順很多",
      body: "以前在公司總有種被忽略的感覺，明明很努力，機會卻總是輪不到我。護持佛母法事後，我發現自己比較敢表達，也比較不會害怕別人的眼光。後來主管開始主動找我討論專案，甚至有新的合作機會找上門。",
      by: "新竹 陳先生｜科技業",
    },
    {
      title: "從一直執著前任，到真正放過自己",
      body: "那段感情結束後，我一直走不出來，每天都在反覆內耗。原本只是想求復合，但參與佛母祈福後，我慢慢發現自己真正需要的，其實是被理解與被安定。現在雖然沒有復合，但我已經能平靜生活，也開始重新期待新的緣分。",
      by: "台中 張小姐｜自由接案者",
    },
  ],

  // 方案
  plans: [
    {
      id: "k-490",
      name: "溫柔供燈",
      price: 490,
      blurb: "點亮一盞溫暖心燈，祈願關係與人際慢慢回暖。",
      url: "https://cart.cashier.ecpay.com.tw/qp/z5a8",
      suitableFor: ["改善人際", "冷淡關係"],
      details: ["作明佛母供燈", "每週六藥師佛煙供回向"],
    },
    {
      id: "k-980",
      name: "善緣相應修法",
      price: 980,
      blurb: "適合希望提升感情運、增加桃花與人際吸引力者。",
      url: "https://cart.cashier.ecpay.com.tw/qp/z5bF",
      hot: true,
      badge: "最多人選",
      suitableFor: ["單身良緣", "感情升溫"],
      details: ["完整懷愛修法", "良緣回向祈福", "不含強求祈願"],
    },
    {
      id: "k-1860",
      name: "人脈魅力加強",
      price: 1860,
      blurb: "適合創作者、業務、自媒體與需要群眾魅力者。",
      url: "https://cart.cashier.ecpay.com.tw/qp/z5c3",
      suitableFor: ["事業人脈", "人氣提升"],
      details: ["深層懷愛香供", "人際能量回向", "適合需曝光職業"],
    },
  ],

  // FAQ
  faq: [
    {
      q: "作明佛母可以幫助感情復合嗎？",
      a: "懷愛修法的核心，是修復自身狀態與關係能量。若緣分仍在，關係可能自然回暖；若緣分已盡，也能幫助自己慢慢放下。",
    },
    {
      q: "這是真實法會嗎？",
      a: "是的。由志工團隊進行真實祈福與造冊，護持金將作為佛教供養與法會運作使用。",
    },
  ],

  // 延伸推薦
  crossSell: [
    {
      title: "希望感情穩定後，財運也開始流動",
      desc: "探索黃財神，讓人際與財富能量同步打開。",
      to: "yellow",
    },
    {
      title: "希望家庭與伴侶關係更加安穩",
      desc: "探索大吉祥天女，建立更長久的幸福感。",
      to: "mahashri",
    },
  ],
};