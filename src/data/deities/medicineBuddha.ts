import type { Deity } from "@/lib/siteData";

// 🟢 根據實體檔案清單校對：全面採用 webp 格式並補上前綴
import heroMedicineImg from "@/assets/visuals/deities/medicine-buddha-hero-altar.webp";
import ritualMedicineImg from "@/assets/visuals/deities/medicine-buddha-vibe-butter-lamp.webp"; 
import medicineRitualAltar from "@/assets/visuals/deities/medicine-buddha-ritual-altar.webp";
import medicineActionPuja from "@/assets/visuals/deities/medicine-buddha-action-group-puja.webp";
import medicineVibeLamp from "@/assets/visuals/deities/medicine-buddha-vibe-butter-lamp.webp";

export const medicineBuddha: Deity = {
  key: "medicine-buddha",
  name: "藥師佛",
  subtitle: "息災修補・琉璃淨光",
  route: "/deity/medicine-buddha",
  primaryIntent: "身心息災與平安守護",
  themeColor: { bg: "#1A2533", accent: "#3B82F6" }, 
  heroKicker: "修補生命容器的本體，讓身心有足夠的底氣承載豐盛",
  heroImage: heroMedicineImg,
  promise: "依循藥師琉璃光的古老智慧，我們陪伴您修補那些讓生命能量持續滲漏的隱形裂縫。我們不承諾長生不老的幻覺，但祈願您的生命容器能足夠清淨、足夠堅固，穩穩地承接您所努力換來的每一份豐盛。",

  // 🚨 補回：寫在您決定啟動修復之前 (靈魂段落)
  precaution: {
    title: "寫在您決定啟動修復之前",
    items: [
      "拒絕投機：藥師佛法門旨在修補生命容器的耗損與息災，而非護持任何逃避現實責任、損人利己或投機取巧之祈願。",
      "因果自擔：健康與運勢的穩固需配合您自身的作息調整、情緒覺察與心念清淨。儀軌是強大的修補助緣，但行為的修正才是根治。",
      "誠信造冊：本系統由台灣不支薪志工於晚間靜心造冊。請填寫真實資料與當前困境，以便師兄姊將功德精準回向給特定對象。"
    ]
  },

  // 🚨 補回：前往綠界前的指引教學 (轉化關鍵)
  checkoutGuidance: {
    title: "前往綠界前的指引教學",
    steps: [
      {
        id: 1,
        title: "備妥您的真實心音",
        desc: "點擊按鈕進入綠界後，請滑到最下方的「備註欄 (Remark)」，寫下您的：姓名、居住地、與此刻最急需修復的健康或身心困境。",
        example: "填寫範例：王小明，新北市，祈求藥師佛加持化解長期失眠與身心焦慮感。"
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
      quote: "「消除一切災厄，悉令安樂。」", 
      source: "《藥師琉璃光如來本願功德經》", 
      hint: "平安，是所有福報能夠生長的唯一土壤", 
      url: "#" 
    }
  ],
  painPoints: [
    "長期慢性耗損，像一台電池一直在漏電的手機——即便充電（休息），也撐不了多久",
    "收入不低，卻感覺財富留不住；健康說不上有病，卻總是疲憊——這是容器本體在漏",
    "想為家人的健康建立一道看不見的守護，在問題出現之前，就先把地基打好",
  ],
  whyThisDeity: [
    "藥師佛修復的是所有其他修復的前提——容器本身：容器不健康，任何流入的財富與機遇都會從裂縫漏失",
    "以琉璃淨光照見並修補生命結構中的隱形損耗，從根源息滅那些說不清楚卻真實存在的消耗",
    "強調「現世安樂」：不是來世的承諾，而是幫助您在這一世，讓身心有足夠的底氣站穩",
  ],
  process: [
    { title: "息災與淨化", body: "安頓身心，皈依三寶；透過藥師佛儀軌清理空間與自身的負面印記。" },
    { title: "修補與對位", body: "以琉璃光的觀想與心咒共振，精準對位並修復生命容器中的結構性耗損。" },
    { title: "回向與平安", body: "將善念回向予您與您的家人；志工造冊護持後，讓平安成為生命最安穩的底色。" }
  ],
  ritual: {
    title: "藥師琉璃光息災儀軌",
    image: ritualMedicineImg,
    imageAlt: "壇城光影：琉璃淨光正修補受損的能量場",
    mdPath: "medicine-buddha-healing.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/mipham/medicine-buddha-ritual",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
    keyPoints: [
      "安頓心念： 觀想藥師佛琉璃光如泉水般流淌，沖刷掉身心中所有的沉重與不安。",
      "儀軌相應： 依古老傳承獻上清淨供養，修復生命結構中那些細微且隱形的裂縫。",
      "深層轉化： 祈請藥師佛十二大願的能量對位，化解慢性耗損的業力，重啟『現世安樂』。",
      "善意回向： 將這份清淨的頻率流向法界，照亮護持者與家人對健康與穩定的渴求。"
    ],
    offeringsChecklist: [
      "傳承清淨香品（藥香或清爽木質調）與莊嚴供器",
      "靜心供水與供碗（象徵洗滌病氣的甘露水）",
      "青色或藍色的自然供物（展現清淨與修復的願力）"
    ],
    practiceFocus: [
      "內在看見： 觀想琉璃淨光穿透細胞，讓原本灰暗、堵塞的區域重新恢復透明與流動。",
      "音頻共振： 持咒時感受聲音在身體內部的震動，如同在為生命的地基進行深層加固。",
      "擴展心量： 透過回向，將對自身健康的關注，轉化為希望所有眾生皆得解脫的慈悲。"
    ]
  },
  rituals: [
    { id: "r1", img: medicineRitualAltar, alt: "藥師佛壇城與空間", caption: "清淨湛藍的壇城，營造出深層修復與平靜的氣場" },
    { id: "r2", img: medicineActionPuja, alt: "法師共修息災", caption: "行者齊聚共修，以淨化梵音共振琉璃光的修復頻率" },
    { id: "r3", img: medicineVibeLamp, alt: "酥油燈光影", caption: "無盡燈明，照破生命結構中深藏的恐懼與災厄" }
  ],
  testimonials: [
    { 
      title: "長期的失眠與焦慮，終於獲得了出口", 
      body: "因為事業壓力，已經好幾個月沒辦法好好睡覺。護持藥師佛法事後的那幾天，感受到前所未有的踏實感，居然沒有靠藥物就安穩睡了八小時。", 
      by: "台中 林小姐 ｜ 企業主管" 
    },
    { 
      title: "在復健的路上，感受到了最溫暖的陪伴", 
      body: "車禍後的復健過程非常痛苦。報名藥師佛法事後，每次復健觀想藍光。很神奇，原本卡住的進度開始突破，醫護也說恢復速度超乎預期。", 
      by: "台北 張先生 ｜ 自由工作者" 
    }
  ],
  // 🚨 根據法事列表.txt 精準重構商業邏輯：區分為 個人 與 團體 方案
  plans: [
    { 
      id: "mb-individual", 
      name: "琉璃光境 ｜ 藥師如來健康息災煙供（個人）", 
      price: 980, 
      blurb: "專為特定對象設計的深層修復：精準對位個人生命容器的耗損，祈求健康的底氣與運勢的穩固。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4V8", 
      hot: true,
      badge: "修復首選",
      suitableFor: ["自身健康修復", "為特定家人祈福"], 
      details: ["個人專屬息災儀軌", "健康平安祈願造冊", "✦ 本月結緣：每月農曆初八藥師佛專屬修法回向"] 
    },
    { 
      id: "mb-group", 
      name: "琉璃光境 ｜ 藥師如來健康息災煙供（團體）", 
      price: 490, 
      blurb: "日常的平安屏障：參與每週團體息災共修，為全家建立基礎的防禦磁場，息滅生活中的各種小不順。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4U2", 
      suitableFor: ["全家保平安", "日常息災防禦"], 
      details: ["團體共修息災儀軌", "家庭集體祈願回向", "✦ 本月結緣：每月農曆初八藥師佛專屬修法回向"] 
    }
  ],
  faq: [
    { 
      q: "這是一場真實的祈福，還是商業買賣？", 
      a: "這是一場真實的法事造冊。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數用於西藏壇城的莊嚴供養。您可以點擊「結案名錄」查看往期透明記錄。" 
    },
    { 
      q: "藥師佛與綠度母的息災有什麼不同？", 
      a: "綠度母側重於『迅疾救急、化解當下的突發變故』；藥師佛則聚焦於『深層固本、修補長期耗損與建立穩定平安地基』。若遇突發驚嚇請選度母；若要求身心與運勢的長期穩定請選藥師佛。" 
    }
  ],
  crossSell: [
    { 
      title: "如果您在平安底氣充足後，渴望資糧增長", 
      desc: "探索黃財神：地基穩了，豐盛的種子才能在您生命中真正開花結果。", 
      to: "yellow" 
    },
    { 
      title: "如果您感覺當前的障礙帶有強烈的惡意攻擊", 
      desc: "探索蓮花生大士：以金剛威猛之力強力除障，守護您的生命權益。", 
      to: "padmasambhava" 
    }
  ]
};