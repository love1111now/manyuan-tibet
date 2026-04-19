import type { Deity } from "@/lib/siteData";

// 🟢 根據實體檔案清單校對：全面採用 webp 格式
import heroTaraImg from "@/assets/visuals/deities/green-tara-hero-altar.webp";
import ritualTaraImg from "@/assets/visuals/deities/green-tara-vibe-butter-lamp.webp";
import taraRitualAltar from "@/assets/visuals/deities/green-tara-ritual-altar.webp";
import taraActionPuja from "@/assets/visuals/deities/green-tara-action-group-puja.webp";

export const greenTara: Deity = {
  key: "green-tara",
  name: "綠度母",
  subtitle: "迅疾救度・無畏守護",
  route: "/deity/green-tara",
  primaryIntent: "化解突發急難與深層焦慮",
  themeColor: { bg: "#0A1F16", accent: "#4ADE80" },
  heroKicker: "在生命最動盪的瞬間，先接住您，再一起站穩",
  heroImage: heroTaraImg,
  promise: "度母慈悲如母，在您遭遇突發變故、恐懼無助時，以最快速度接住崩潰邊緣的生命容器，為您築起第一道溫柔而堅韌的防線。等危機過去，再一起慢慢修復。",

  // 🚨 補回：寫在您決定啟動修復之前 (靈魂段落)
  precaution: {
    title: "寫在您決定啟動修復之前",
    items: [
      "拒絕投機：度母迅疾救度是為了平息恐懼與轉化急難，而非滿足賭博、中獎或任何不勞而獲的貪婪祈願。",
      "因果自擔：儀軌是修復緣分的強力助緣，但現實生活的轉變，仍需配合您對生命課題的如實面對與行為修正。",
      "誠信造冊：本系統由台灣不支薪志工於晚間靜心造冊，非商業自動化系統。請填寫真實資料與困境，以便師兄姊如法對位。"
    ]
  },

  // 🚨 補回：前往綠界前的指引教學 (轉化關鍵)
  checkoutGuidance: {
    title: "前往綠界前的指引教學",
    steps: [
      {
        id: 1,
        title: "備妥您的真實心音",
        desc: "點擊按鈕進入綠界後，請滑到最下方的「備註欄」，寫下您的：姓名、居住地、與此刻最想改變的困境。",
        example: "填寫範例：王小明，台北市，祈求度母加持化解失業後的恐慌感。"
      },
      {
        id: 2,
        title: "放心交給安全系統",
        desc: "您將進入綠界 256-bit SSL 加密通道。付款完成後，系統會自動引導您回來，志工將於晚間為您造冊。"
      }
    ]
  },

  scripture: [
    { 
      quote: "成就一切利，消除一切難。", 
      source: "《二十一度母贊》", 
      hint: "迅疾，是因為不忍眾生在恐懼中多受一秒的煎熬"
    }
  ],
  painPoints: [
    "突發的變故像一個措手不及的重拳，世界在一夜之間變了樣，完全不知道從哪裡開始重建",
    "莫名的焦慮像底層的雜音，不是因為哪一件具體的事，而是那種隨時會失去一切的不安全感",
    "在困境中感到孤立無援，不需要答案，只是需要有什麼東西先把自己接住",
  ],
  whyThisDeity: [
    "度母以「迅疾」著稱——是七尊本尊中，最適合應對緊急、突發情境的快速響應系統",
    "先止損，再修復：讓崩潰中的生命容器不再繼續漏，給後續的根本修復創造空間",
    "溫柔修復底層的恐懼節點，讓心神在極度高壓下依然能找到一點安靜的重心",
  ],
  process: [
    { title: "急難安頓", body: "安頓身心，皈依三寶；在最脆弱的時刻，將所有的恐懼與無助坦誠交付給度母。" },
    { title: "迅疾相應", body: "透過綠色事業部儀軌與心咒共振，觀想度母化現，以極速的慈悲力縫合生命的能量裂縫。" },
    { title: "回向與見證", body: "將平靜回向法界；志工謹慎造冊修持後，讓無畏的守護力陪伴您度過生命最陡峭的彎道。" }
  ],
  ritual: {
    title: "綠度母迅疾救度祈福修法",
    image: ritualTaraImg,
    imageAlt: "壇城光影：以翠綠的生機與白光，撫平一切驚嚇與創傷",
    mdPath: "green-tara-swift-rescue.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/chokgyur-decuy-lingpa/zabtik-drolma",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
    keyPoints: [
      "安頓心念： 放下緊抓不放的焦慮，將心境安住在『被全然接納與保護』的頻率中。",
      "儀軌相應： 依傳承獻上清淨供養，伴隨度母心咒，感受如微風般輕柔卻無處不在的療癒力。",
      "深層轉化： 融化內在因創傷而生起的防衛，喚醒靈魂深處的韌性，讓自身重新充滿生機。",
      "善意回向： 將這份平安的頻率流向法界，祈願所有身處驚嚇與苦難的眾生皆得庇護。"
    ],
    offeringsChecklist: [
      "傳承清淨香品（沉香或清新草本香）與莊嚴供器",
      "靜心供水與供碗（象徵洗滌恐懼的甘露）",
      "綠色植物、白花、燈、香、果等自然供物"
    ],
    practiceFocus: [
      "內在看見： 觀想翠綠色的光芒如春雨般滋潤乾涸受驚的心靈，讓生命力重新萌芽。",
      "音頻共振： 持咒時感受聲音如母親的呢喃，安撫全身緊繃的神經與細胞。",
      "擴展心量： 透過回向，將對未知的恐懼，轉化為對生命無常的全然信任與慈悲。"
    ]
  },
  rituals: [
    { id: "r1", img: taraRitualAltar, alt: "度母壇城與空間", caption: "寧靜翠綠的壇城，帶來安定心神的強大力量" },
    { id: "r2", img: taraActionPuja, alt: "法師共修祈福", caption: "行者齊聚，以急切而慈悲的咒音啟動救度能量" },
    { id: "r3", img: ritualTaraImg, alt: "酥油燈光影", caption: "溫暖微光，驅散無常帶來的驚嚇與寒意" }
  ],
  testimonials: [
    { 
      title: "家人生急病，度母給了我們最溫暖的奇蹟", 
      body: "上個月父親突然腦溢血送進加護病房。我立刻上網登記了度母的急難救度法事。奇蹟的是，隔天父親的指數居然穩定了下來，一週後順利轉入普通病房。那種在絕境中被接住的感覺，我永遠無法忘懷。", 
      by: "新北 蔡小姐 ｜ 行政主管" 
    },
    { 
      title: "長期的恐慌症，終於找到了安放的角落", 
      body: "我患有嚴重的恐慌症，發作時覺得自己快死掉。開始修持綠度母後，每次當恐慌感快要襲來，我就會默念度母心咒。那是一種非常奇異的安撫感，現在我的發作頻率大幅降低，終於能重拾正常生活。", 
      by: "台北 王先生 ｜ 設計師" 
    }
  ],
  // 🚨 根據法事列表.txt 精準對位金額與連結
  plans: [
    { 
      id: "t-680", 
      name: "無畏微光 ｜ 綠度母息災供燈", 
      price: 680, 
      blurb: "為受驚的心神點亮一盞燈：溫柔安撫內在的恐慌與焦慮，祈求日常生活的平安與平靜。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/zEJ1", 
      suitableFor: ["安神定心", "日常保平安"], 
      details: ["清淨息災供燈", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "t-1280", 
      name: "迅疾救度 ｜ 綠度母相應修法", 
      price: 1280, 
      blurb: "當您遭遇突發變故或極度無助：以完整的儀軌相應，啟動最快速的慈悲防禦，化解當下的危機。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/zED7", 
      hot: true, 
      badge: "急難首選", 
      suitableFor: ["突發變故", "健康或事業急難"], 
      details: ["專屬救度相應修法", "急難化解祈願回向", "⚠️ 需放下恐懼，對生命保持信任", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    }
  ],
  faq: [
    { 
      q: "度母的法事感應真的很快嗎？", 
      a: "在藏傳佛法中，綠度母的願力以『迅疾』著稱。許多護持者回饋，在造冊修持後，原本慌亂失控的情緒，會在極短時間內獲得顯著的安頓與轉機。" 
    },
    { 
      q: "這是一場真實的祈福，還是商業買賣？", 
      a: "這是一場真實的法事造冊。台灣志工全體皆為不支薪發心，護持金扣除手續費後，全數用於西藏壇城莊嚴供養。這份近乎笨拙的透明，是我們對因果的最高敬畏。" 
    }
  ],
  crossSell: [
    { 
      title: "如果您在急難過後，需要長期的健康與元氣修補", 
      desc: "探索藥師佛：度母救急，藥師佛固本。以琉璃光慢慢修復受損的生命容器。", 
      to: "medicine-buddha" 
    },
    { 
      title: "如果您遭遇的是極度凶險的官非或惡意攻擊", 
      desc: "探索蓮花生大士：讓金剛威猛之力為您築起絕對的防禦結界。", 
      to: "padmasambhava" 
    }
  ]
};