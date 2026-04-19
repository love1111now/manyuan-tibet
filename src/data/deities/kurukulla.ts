import type { Deity } from "@/lib/siteData";

// 🟢 根據實體檔案清單校對：採用 jpeg 與 webp 混合路徑，確保視覺呈現正確
import heroKurukullaImg from "@/assets/visuals/deities/kurukulla-hero-altar.webp";
import ritualKurukullaImg from "@/assets/visuals/deities/kurukulla-vibe-butter-lamp.webp"; 
import kurukullaRitualAltar from "@/assets/visuals/deities/kurukulla-ritual-altar.webp";
import kurukullaActionPuja from "@/assets/visuals/deities/kurukulla-action-group-puja.webp";
import kurukullaVibeLamp from "@/assets/visuals/deities/kurukulla-vibe-butter-lamp.webp";

export const kurukulla: Deity = {
  key: "kurukulla",
  name: "作明佛母",
  subtitle: "懷愛滿願・廣結善緣",
  route: "/deity/kurukulla",
  primaryIntent: "招桃花與好人緣",
  themeColor: { bg: "#2D151F", accent: "#E0115F" },
  heroKicker: "修復您的人際吸引力場，讓善緣不再與您擦身而過",
  heroImage: heroKurukullaImg,
  promise: "作明佛母乃懷愛之王，陪伴您修復受損的社交磁場，重建真實的人際共振頻率。我們不承諾控制任何人，但祈願您內在散發出的能量，能真正吸引那些值得相遇的善緣靠近。",

  // 🚨 補齊：寫在您決定啟動修復之前 (靈魂段落)
  precaution: {
    title: "寫在您決定啟動修復之前",
    items: [
      "因果自擔：懷愛法門的核心是修復您自身的能量場，使其變得吸引且正向。儀軌是強力助緣，但現實中仍需配合您對關係的真誠對待與耐心經營。",
      "拒絕投機：不護持強求、控制他人意志或企圖強制介入他人因果之祈願。佛法建立在願力與緣分之上，而非強取豪奪。",
      "誠信造冊：本系統由台灣不支薪志工於晚間靜心造冊。請務必填寫真實姓名與目前的困境細節，確保加持對位。"
    ]
  },

  // 🚨 補齊：前往綠界前的指引教學 (轉化關鍵)
  checkoutGuidance: {
    title: "前往綠界前的指引教學",
    steps: [
      {
        id: 1,
        title: "備妥您的真實心音",
        desc: "點擊按鈕進入綠界後，請滑到最下方的「備註欄 (Remark)」，寫下您的：姓名、居住地、與此刻最想改變的人際關係或情感困境。",
        example: "填寫範例：王小明，台北市，祈求佛母加持化解夫妻冷戰並增進人際信任。"
      },
      {
        id: 2,
        title: "放心交給安全系統",
        desc: "您將進入綠界 256-bit SSL 加密通道。付款完成後，系統會自動引導您回來，我們會在成功頁面等您。"
      }
    ]
  },

  scripture: [
    { 
      quote: "攝受三界眾生，悉皆生起愛慕。", 
      source: "《佛母心咒略軌》", 
      hint: "懷愛，是讓自身頻率與世界和諧共振", 
      url: "#" 
    }
  ],
  painPoints: [
    "在人群中努力表現，卻感覺自己是透明的——有話語，卻沒有重量；有存在，卻沒有吸引力",
    "想找的伴侶、想合作的夥伴、想得到的客戶，就像隔著一層玻璃，看得見卻接觸不了",
    "職場人緣不好，不是沒努力，卻總是莫名被邊緣，機會和資源自動繞開你流走",
  ],
  whyThisDeity: [
    "作明佛母修復的不是「外表」，而是能量場的「磁性結構」——讓您的存在真正被感受到",
    "從根源轉化社交透明化的底層原因：將防禦性的能量模式，轉為開放且有磁性的吸引力場",
    "重新校準人際頻率，過濾消耗型關係，吸引真實互助、共同成長的善緣自然靠近",
  ],
  process: [
    { title: "關係發心", body: "安頓身心，覺察並放下在過往關係中形成的防禦、恐懼與自我懷疑。" },
    { title: "懷愛相應", body: "透過紅色蓮花部儀軌與佛母心咒共振，溫柔修復受損的自信，重新校準磁場頻率。" },
    { title: "回向與重連", body: "將修法功德回向；志工造冊後，讓清淨的懷愛能量引導契合的人事物自然來到您身邊。" }
  ],
  ritual: {
    title: "作明佛母懷愛祈福修法",
    image: ritualKurukullaImg,
    imageAlt: "壇城光影：以紅色花朵與供品獻上最溫柔的祈願",
    mdPath: "kurukulla-magnetism.md",
    sourceUrl: "https://www.facebook.com/profile.php?id=61583749010531",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本。",
    keyPoints: [
      "安頓心念： 放下對『被愛』的匱乏與執著，轉化為『自愛與分享』的頻率。",
      "儀軌相應： 依傳承獻上紅色供品，感受紅光如花瓣般層層綻放，溫暖包圍身心。",
      "深層轉化： 融化內在的堅硬與冷漠，喚醒靈魂深處的柔和，讓自身成為愛的發光體。",
      "善意回向： 將這份溫暖的頻率流向法界，祈願所有關係皆能和諧。"
    ],
    offeringsChecklist: [
      "傳承清淨香品（玫瑰或花香調）與莊嚴供器",
      "靜心供水與供碗（可準備紅茶或洛神花茶，重在心意）",
      "紅色的花朵、燈、香、果等自然供物（依紅色系為主）"
    ],
    practiceFocus: [
      "內在看見： 觀想純淨的紅光洗滌過往在關係中受到的創傷印記，讓自身能量場變得明亮。",
      "音頻共振： 持咒時感受聲音在心輪的共鳴，喚醒無條件的愛與接納。",
      "擴展心量： 透過回向，將對特定對象的強烈執念，轉化為對一切眾生散發善意的胸襟。"
    ]
  },
  rituals: [
    { id: "r1", img: kurukullaRitualAltar, alt: "作明佛母壇城與空間", caption: "以紅色系為主的莊嚴壇城，喚醒溫柔的懷愛能量" },
    { id: "r2", img: kurukullaActionPuja, alt: "法師共修祈福", caption: "行者齊聚，以和諧梵音共振佛母的慈悲願力" },
    { id: "r3", img: kurukullaVibeLamp, alt: "酥油燈光影", caption: "紅色微光，溫暖照亮每一段渴望被接住的關係" }
  ],
  testimonials: [
    { 
      title: "突破社交恐懼，迎來意想不到的合作", 
      body: "我一直很害怕社交，職場上默默無聞。報名佛母法事後，在一次會議上自然發表了看法，順利拿下大專案。這種自信是我從未體驗過的。", 
      by: "台北 林先生 ｜ 軟體工程師" 
    },
    { 
      title: "修復了降至冰點的夫妻關係", 
      body: "這幾年和先生對話只剩柴米油鹽。護持了佛母的懷愛修法後，我發現自己不再容易暴躁，先生也開始主動關心我。終於能在平靜的夜晚說心裡話。", 
      by: "高雄 吳太太 ｜ 教師" 
    }
  ],
  // 🚨 連結已精準修正：490 方案對位 z5a8
  plans: [
    { 
      id: "k-490", 
      name: "溫柔微光 ｜ 作明佛母懷愛供燈", 
      price: 490, 
      blurb: "為疲憊的關係點亮一盞燈：溫柔化解內在的防禦與孤獨感，祈求日常人際互動的和諧。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z5a8", 
      suitableFor: ["改善職場人緣", "化解冷戰僵局"], 
      details: ["清淨懷愛供燈", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "k-980", 
      name: "魅力綻放 ｜ 作明佛母相應修法", 
      price: 980, 
      blurb: "當您準備好迎接新的情感羈絆：以完整的儀軌相應，為生命注入迷人的吸引力與正桃花。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z5bF", 
      hot: true, 
      badge: "善緣首選", 
      suitableFor: ["單身尋良緣", "感情升溫"], 
      details: ["專屬懷愛相應修法", "良緣祈願回向", "⚠️ 拒絕強求祈願", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "k-1860", 
      name: "廣大懷愛 ｜ 作明佛母人脈加強", 
      price: 1860, 
      blurb: "專為需要廣大客源與群眾魅力的您設計：將懷愛的能量擴展至事業版圖，令合作方心生歡喜。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z5c3", 
      suitableFor: ["業務與創作者", "高知名度職業"], 
      details: ["深層懷愛香供", "擴展人脈回向", "⚠️ 需常保利他之心", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    }
  ],
  faq: [
    { q: "作明佛母法事可以用來挽回前任嗎？", a: "懷愛修法的核心是修復自身能量場。若緣分未盡，自然有助於關係回溫；若緣分已盡，佛母會引導您平靜放下。" },
    { q: "這是一場真實的祈福，還是商業買賣？", a: "這是一場真實的法事造冊。團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。" }
  ],
  crossSell: [
    { 
      title: "如果您需要穩固的家庭關係作為後盾", 
      desc: "探索大吉祥天女：在懷愛吸引善緣後，將其轉化為長久安穩的家庭地基。", 
      to: "mahashri" 
    },
    { 
      title: "如果您在人際關係中總是遭遇小人", 
      desc: "探索象神・精靈主：先掃除人際關係中的頑劣違緣與障礙。", 
      to: "ganapati" 
    }
  ]
};