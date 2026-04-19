import type { Deity } from "@/lib/siteData";

// 🟢 根據實體檔案內容校對：採用 jpeg 與 webp 混合路徑
import heroMahashriImg from "@/assets/visuals/deities/mahashri-hero-altar.webp";
import ritualMahashriImg from "@/assets/visuals/deities/mahashri-vibe-butter-lamp.webp"; 
import mahashriRitualAltar from "@/assets/visuals/deities/mahashri-ritual-altar.webp";
import mahashriActionPuja from "@/assets/visuals/deities/mahashri-action-group-puja.webp";
import mahashriVibeLamp from "@/assets/visuals/deities/mahashri-vibe-butter-lamp.webp";

export const mahashri: Deity = {
  key: "mahashri",
  name: "大吉祥天女",
  subtitle: "賜予吉祥・圓滿富足",
  route: "/deity/mahashri",
  primaryIntent: "家庭和諧與事業順利",
  themeColor: { bg: "#2B2414", accent: "#E6B800" }, 
  heroKicker: "修復生命的整體氣場，讓吉祥在日常的縫隙中重新流動",
  heroImage: heroMahashriImg,
  promise: "依循吉祥天女的古老智慧，我們陪伴您修復生命環境中那些無聲漏失吉祥的裂縫。我們不承諾永遠沒有挫折，但祈願您能在日常的細微之處，重新感受到喜悅與豐盛的流動。",

  // 🚨 補回：寫在您決定啟動修復之前 (靈魂段落)
  precaution: {
    title: "寫在您決定啟動修復之前",
    items: [
      "拒絕投機：天女法門旨在修復家運與人和，非為滿足任何損人利己、損害他人或不勞而獲之貪念。",
      "因果自擔：家宅的和諧需配合您對家人的耐心經營與日常的善意累積。儀軌是修復磁場的強力助緣，但現實的轉變仍需您如實地面對與修正行為。",
      "誠信造冊：本系統由台灣不支薪志工於晚間靜心造冊。請填寫真實資料與困境，確保加持能量精準對位。"
    ]
  },

  // 🚨 補回：前往綠界前的指引教學 (轉化關鍵)
  checkoutGuidance: {
    title: "前往綠界前的指引教學",
    steps: [
      {
        id: 1,
        title: "備妥您的真實心音",
        desc: "點擊按鈕進入綠界後，請滑到最下方的「備註欄 (Remark)」，寫下您的：姓名、居住地、與此刻最想改善的家庭或人際困境。",
        example: "填寫範例：王小明，台北市，祈求天女加持化解夫妻冷戰僵局與職場人和。"
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
      quote: "「能除貧窮一切不祥。所有願求皆得圓滿。」", 
      source: "《大吉祥天女十二名號經》", 
      hint: "吉祥，是生命狀態最完美的平衡與綻放", 
      url: "#" 
    }
  ],
  painPoints: [
    "家裡氣氛莫名緊繃，沒什麼大事，卻動輒生出無謂的摩擦與冷戰，消耗著家人之間的情感",
    "整體感覺「不太對」——不是某件大事出了錯，而是什麼都有點卡、有點不順、有點提不起勁",
    "在職場或生活中缺乏人和，感覺付出得不到回應，努力得不到支持，一個人撐著很累",
  ],
  whyThisDeity: [
    "大吉祥天女修復的不是單一問題，而是生命環境的整體氣場——這是最難被察覺、卻影響最廣的層次",
    "以古老吉祥儀軌，清除環境中積累的戾氣與負頻率，讓家庭與事業空間重新具備容納美好的能力",
    "轉化「整體不順」的底層原因：從對現狀的抵抗，轉為知足與感恩，讓吉祥的能量自然回流",
  ],
  process: [
    { title: "發心與探索", body: "安頓身心，皈依三寶；依循儀軌備妥清淨豐盛的供品，開啟與吉祥能量的深度連結。" },
    { title: "相應與轉化", body: "透過供養與心咒的持誦，觀想甘露的洗滌，讓生命的圓滿緣起自然成熟。" },
    { title: "回向與見證", body: "將善念回向給您與您的祈願；志工造冊修持後，隔週將公開去識別化名錄。" }
  ],
  ritual: {
    title: "大吉祥天女祈福修法",
    image: ritualMahashriImg,
    imageAlt: "壇城光影：以無上的恭敬迎接吉祥與豐盈",
    mdPath: "mahashri-auspicious-puja.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/mipham/lakshmi-prayer",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本。",
    keyPoints: [
      "安頓心念： 皈依三寶、發菩提心，放下對現狀的不滿，將心境調整至『感恩與知足』的頻率。",
      "儀軌相應： 依古老傳承獻上豐盛的供養，伴隨吉祥天女心咒，感受如沐春風般的慈悲加持。",
      "深層轉化： 以純粹的恭敬心，轉化內在的暴躁與戾氣，讓身心充滿柔和與吉祥的氣場。",
      "善意回向： 將這份圓滿的頻率流向法界，並精準照亮護持者生命中對家庭和諧與事業順遂的期盼。"
    ],
    offeringsChecklist: [
      "傳承清淨香品（花香或甜香調）與莊嚴供器",
      "靜心供水與供碗（可點綴少許蜂蜜或紅糖，重在心意）",
      "花、燈、香、果、甜點等豐盛供物（展現美感與清淨）"
    ],
    practiceFocus: [
      "內在看見： 觀想天女賜予的甘露洗滌家庭與事業中的違緣，讓一切事物以最『和諧、圓滿』的方式發展。",
      "音頻共振： 持咒不求數量，而在於『專注、歡喜與恭敬』的相續不斷。",
      "擴展心量： 透過回向，將對自身幸福的渴求，轉化為希望所有眾生皆得吉祥的廣大胸襟。"
    ]
  },
  rituals: [
    { id: "r1", img: mahashriRitualAltar, alt: "大吉祥天女壇城與空間", caption: "莊嚴的壇城佈置，迎接無上的吉祥與喜悅" },
    { id: "r2", img: mahashriActionPuja, alt: "法師共修祈福", caption: "行者齊聚共修，以純淨梵音共振天女願力" },
    { id: "r3", img: mahashriVibeLamp, alt: "酥油燈光影", caption: "無盡燈明，照破生活中的陰霾與不順" }
  ],
  testimonials: [
    { 
      title: "家裡的低氣壓，奇蹟般地消散了", 
      body: "前陣子家裡氛圍一直很僵，大家講話都帶著刺。報名了吉祥天女的供燈後，大家的平衡點好像回來了，終於能好好坐下來討論解決方案。那種劍拔弩張的感覺消失了，真的非常感恩。", 
      by: "新北 郭太太 ｜ 家庭主婦" 
    },
    { 
      title: "新店開幕，迎來意想不到的好人緣", 
      body: "創業開店生意很冷清，內心非常焦慮。後來朋友推薦我護持吉祥天女法事。很神奇的是，隔幾週開始出現了許多口碑推薦的客人，甚至有網紅主動來打卡。店裡的氣氛變得很好。", 
      by: "台南 王先生 ｜ 咖啡廳主理人" 
    },
    { 
      title: "化解了職場上的人際危機", 
      body: "公司內部人事大地震，我原本被捲入派系鬥爭的風暴中心。修持吉祥天女後，事情突然有了轉圜的餘地，原本針對我的主管被調走。這份吉祥的轉變，讓我深刻體會到善緣的力量。", 
      by: "台北 陳小姐 ｜ 專案經理" 
    }
  ],
  // 🚨 根據法事列表.txt 進行 100% 連結與金額對位
  plans: [
    { 
      id: "m-490", 
      name: "家和事興 ｜ 大吉祥天女微光供燈", 
      price: 490, 
      blurb: "為家庭氛圍點亮一盞燈：溫柔化解家中的緊繃感，祈求日常互動的和諧與平安。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4ND", 
      suitableFor: ["家庭祈福", "日常保平安"], 
      details: ["清淨吉祥供燈", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "m-980", 
      name: "迎祥納福 ｜ 大吉祥天女相應回向", 
      price: 980, 
      blurb: "當您渴望生活多一份順遂：以完整的儀軌相應，為生活各個層面注入吉祥的能量。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4PD", 
      hot: true, 
      badge: "圓滿首選", 
      suitableFor: ["流年祈福", "提升整體運勢"], 
      details: ["專屬吉祥相應修法", "家庭圓滿祈願", "⚠️ 需配合自身對家庭關係的耐心經營與善意溝通", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "m-1860", 
      name: "富足綿延 ｜ 大吉祥天女圓滿加強回向", 
      price: 1860, 
      blurb: "為渴望全方位豐盛的您設計：深層轉化負面磁場，吸引貴人與好運，讓吉祥成為生命的常態。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4Q7", 
      suitableFor: ["新居落成", "事業轉型或開業"], 
      details: ["深層吉祥加強修法", "加強守護回向", "⚠️ 需常保感恩之心，多行善舉", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    }
  ],
  faq: [
    { q: "這是一場真實的祈福，還是商業買賣？", a: "這是一場真實的法事造冊與善緣探索。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。" },
    { q: "請問供奉大吉祥天女需要注意什麼？", a: "天女喜愛整潔與芬芳。在生活中保持環境的乾淨，常保微笑與感恩的心，不說惡語，這些都能讓天女的加持力發揮到最大。" },
    { q: "可以為家人或朋友祈求嗎？", a: "非常適合，大吉祥天女特別護佑家庭的和睦。您能在綠界備註欄寫下家人或朋友的姓名，為他們祈求平安順遂。" }
  ],
  crossSell: [
    { 
      title: "如果您正困於財務的匱乏與焦慮", 
      desc: "探索黃財神：修復資糧漏損，引導豐盛的能量重新流向您。", 
      to: "yellow" 
    },
    { 
      title: "如果您渴望提升個人魅力與吸引善緣", 
      desc: "探索作明佛母：重塑懷愛磁場，讓您在人群中散發自信與光芒。", 
      to: "kurukulla" 
    }
  ]
};