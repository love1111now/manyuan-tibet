import type { Deity } from "@/lib/siteData";

// 🟢 根據實體檔案清單校對：全面採用 webp 格式並補上前綴
import heroPadmaImg from "@/assets/visuals/deities/padmasambhava-hero-altar.webp";
import ritualPadmaImg from "@/assets/visuals/testimonial_bg_yellow.webp"; 
import padmaRitualAltar from "@/assets/visuals/deities/padmasambhava-ritual-altar.webp";
import padmaActionPuja from "@/assets/visuals/deities/padmasambhava-action-group-puja.webp";
import padmaVibeLamp from "@/assets/visuals/deities/padmasambhava-vibe-butter-lamp.webp";

export const padmasambhava: Deity = {
  key: "padmasambhava",
  name: "蓮花生大士",
  subtitle: "大威德護持・降伏違緣",
  route: "/deity/padmasambhava",
  primaryIntent: "息災除障與心靈安定",
  themeColor: { bg: "#2A180D", accent: "#FF6600" },
  heroKicker: "在生命最黑暗的幽谷，為您建立不可撼動的威德靠山",
  heroImage: heroPadmaImg,
  promise: "依循蓮花生大士的威德智慧，我們陪伴您在生命遭受最嚴峻考驗的時刻，築起一道以古老傳承為根基的堅固防線。我們不承諾人生從此無風無雨，但祈願當真正的風暴來臨時，您擁有一座屹立不搖的靠山。",

  // 🚨 補回：寫在您決定啟動修復之前 (靈魂段落)
  precaution: {
    title: "寫在您決定啟動修復之前",
    items: [
      "拒絕投機：蓮師法門旨在平息恐慌、降伏違緣，而非滿足任何逃避責任、損人利己或投機取巧之祈願。",
      "因果自擔：降伏外在違緣需配合您內在的懺悔與修正。儀軌能為您擋災並穩住局勢，但生命的轉向仍需您親自掌舵。",
      "誠信造冊：本系統由台灣不支薪志工於晚間靜心造冊，非商業自動化系統。請填寫真實資料與當前絕境，以便如法造冊。"
    ]
  },

  // 🚨 補回：前往綠界前的指引教學 (轉化關鍵)
  checkoutGuidance: {
    title: "前往綠界前的指引教學",
    steps: [
      {
        id: 1,
        title: "備妥您的真實心音",
        desc: "點擊按鈕進入綠界後，請滑到最下方的「備註欄 (Remark)」，寫下您的：姓名、居住地、與此刻最急需降伏的困境。",
        example: "填寫範例：王小明，台北市，祈求蓮師加持化解目前惡意官司與職場排擠。"
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
      quote: "「祈請蓮師降伏諸魔障。祈請蓮師賜予勝成就。」", 
      source: "《蓮師七句祈請文》", 
      hint: "降伏，是為了保護生命中最珍貴的純粹與平安", 
      url: "#" 
    }
  ],
  painPoints: [
    "連環的重擊，像被一種看不見的力量鎖定——每次以為最壞的過了，更壞的又來，已經精疲力竭",
    "遭受惡意攻擊、法律糾紛、或無法以常理解釋的嚴重干擾，感覺孤身應戰，後背無援",
    "面臨幾乎要從零重建的毀滅性局面，需要的不是小技巧，而是一股不容動搖的絕對力量",
  ],
  whyThisDeity: [
    "蓮師是七尊本尊中威德最強大的——不是一般的不順，而是真正嚴峻的危機，才值得動用這個層級的守護",
    "以「降伏一切」的霸道威德，在容器外部建立強大的保護結界，讓惡意的外部業力無處附著",
    "在絕境中喚醒您內在的「金剛性」——那個無論外在多動盪，都無法被真正摧毀的核心底氣",
  ],
  process: [
    { title: "急難發心", body: "在恐懼中靜下心來，誠懇向蓮師發出呼救與祈請，將身心完全交付給傳承的威德力。" },
    { title: "防禦相應", body: "透過儀軌與心咒共振，觀想金剛甲冑護佑全身，建立一道百邪不侵的能量結界。" },
    { title: "回向與安頓", body: "將平安回向法界；志工謹慎造冊後，讓無畏的守護力陪伴您度過生命最險峻的關口。" }
  ],
  ritual: {
    title: "蓮師息災除障修法",
    image: ritualPadmaImg,
    imageAlt: "壇城光影：以金剛威猛之力護佑行者平安",
    mdPath: "padmasambhava-obstacle-clearing.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/mipham/seven-line-prayer-commentary",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
    keyPoints: [
      "安頓心念： 在極度的恐懼與不安中，將身心完全交付給蓮師的威德力。",
      "儀軌相應： 依古老傳承持誦『蓮師七句祈請文』，感受如金剛鎧甲般堅不可摧的防禦能量。",
      "深層轉化： 降伏內在的恐懼魔障與外在的惡意干擾，在風暴中找回如山般的安定。",
      "善意回向： 將這份無畏的頻率流向法界，照亮護持者生命中急需保護的黑暗角落。"
    ],
    offeringsChecklist: [
      "傳承清淨香品（除障草或松柏香）與莊嚴供器",
      "靜心供水與供碗（象徵洗滌染污的清淨力）",
      "燈、香、果等自然供物（展現毫不保留的恭敬與依止）"
    ],
    practiceFocus: [
      "內在看見： 觀想蓮師化身威猛火光，焚毀一切阻礙您平安與發展的負面業印及邪祟干擾。",
      "音頻共振： 持咒時感受聲音如雷鳴般震攝身心，驅逐盤據在意識底層的無力感。",
      "擴展心量： 透過回向，將對自身安危的恐懼，轉化為祈願所有眾生皆免於災厄的廣大慈悲。"
    ]
  },
  rituals: [
    { id: "r1", img: padmaRitualAltar, alt: "蓮師壇城與空間", caption: "威猛莊嚴的壇城，建構絕對安全的能量防護網" },
    { id: "r2", img: padmaActionPuja, alt: "法師共修祈福", caption: "行者齊聚，以金剛語共振蓮師降伏一切的願力" },
    { id: "r3", img: padmaVibeLamp, alt: "酥油燈光影", caption: "無盡燈明，照破生命中最深層的恐懼無明" }
  ],
  testimonials: [
    { 
      title: "化解了官司纏身的滅頂危機", 
      body: "無端捲入嚴重的商業訴訟，面臨破產甚至坐牢。祈求蓮師深層除障後，在關鍵的幾次開庭中，對方律師出現重大失誤，法官判我免責。這份死裡逃生的恩情，我一輩子不會忘記。", 
      by: "台北 黃先生 ｜ 企業主" 
    },
    { 
      title: "驅逐了長期的莫名干擾與惡夢", 
      body: "搬新家後每天惡夢，白天也有莫名壓迫感。護持蓮師法事的第一個晚上，夢到威猛長者守護床前，隔天醒來，壓迫感完全消失。我終於能好好睡覺，找回正常生活。", 
      by: "桃園 林小姐 ｜ 護理師" 
    }
  ],
  // 🚨 根據法事列表.txt 移除 1860，僅保留 490 與 980
  plans: [
    { 
      id: "p-490", 
      name: "無畏微光 ｜ 蓮師息災供燈回向", 
      price: 490, 
      blurb: "為動盪不安的心點亮一盞燈：溫柔安撫內在的恐懼，祈求日常出入的平安。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4Z5", 
      suitableFor: ["日常保平安", "撫平莫名的焦慮與不安"], 
      details: ["清淨息災供燈", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "p-980", 
      name: "金剛護體 ｜ 蓮師相應除障", 
      price: 980, 
      blurb: "當您遭遇強烈的惡意干擾：以完整的儀軌相應，建構防禦結界，驅逐小人與非理性的阻礙。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z5d7", 
      hot: true, 
      badge: "防禦首選", 
      suitableFor: ["職場小人嚴重", "遇不合理刁難或糾紛"], 
      details: ["專屬除障相應修法", "平安防禦祈願回向", "⚠️ 需放下報復心態，以清淨心祈求庇護", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    }
  ],
  faq: [
    { 
      q: "這是一場真實的祈福，還是商業買賣？", 
      a: "這是一場真實的法事造冊。滿願藏庫台灣團隊全體皆為不支薪志工，護持金扣除手續費後，全數用於西藏壇城莊嚴供養。修持完成後，我們會在 FB 粉專公佈「去識別化」名錄。" 
    },
    { 
      q: "請問供奉蓮花生大士需要注意什麼？", 
      a: "保持絕對的信心。在遭遇困難時，不生起抱怨或放棄的念頭，堅信蓮師的加持力。這種『無畏與堅定』的頻率，能讓蓮師的護佑發揮到最大。" 
    }
  ],
  crossSell: [
    { 
      title: "如果您在度過危機後，身心極度疲憊耗損", 
      desc: "探索藥師佛：以琉璃淨光修補受損的生命元氣，找回健康的底氣。", 
      to: "medicine-buddha" 
    },
    { 
      title: "如果您在掃除障礙後，面臨關鍵的轉型抉擇", 
      desc: "探索象神・精靈主：開啟清明的洞察力，確保下一步走在正確的道路上。", 
      to: "ganapati" 
    }
  ]
};