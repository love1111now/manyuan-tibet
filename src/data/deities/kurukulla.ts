// @ts-nocheck
import type { Deity } from "@/lib/siteData";

import heroKurukullaImg from "@/assets/visuals/deities/kurukulla-hero-altar.jpeg";
import ritualKurukullaImg from "@/assets/visuals/deities/kurukulla-vibe-butter-lamp.webp"; 
import kurukullaRitualAltar from "@/assets/visuals/deities/kurukulla-ritual-altar.webp";
import kurukullaActionPuja from "@/assets/visuals/deities/kurukulla-action-group-puja.webp";
import kurukullaVibeLamp from "@/assets/visuals/deities/kurukulla-vibe-butter-lamp.webp";

export const kurukulla: Deity = {
  key: "kurukulla",
  name: "咕嚕咕咧佛母",
  subtitle: "懷愛滿願・廣結善緣",
  route: "/deity/kurukulla",
  primaryIntent: "招桃花與好人緣",
  themeColor: { bg: "#2D151F", accent: "#E0115F" },
  heroKicker: "點亮人際與親密關係的溫暖微光",
  heroImage: heroKurukullaImg,
  ritual: {
    title: "作明佛母懷愛祈福修法",
    image: ritualKurukullaImg,
    imageAlt: "壇城光影：以紅色花朵與供品獻上最溫柔的祈願",
    mdPath: "kurukulla-magnetizing.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/kurukulla",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
    keyPoints: [
      "安頓心念： 放下對愛與認同的過度抓取，將焦點拉回自身，發掘內在本具的溫柔與自信。",
      "儀軌相應： 祈請作明佛母的紅光籠罩全身，淨化人際關係中的摩擦與隔閡。",
      "深層轉化： 將『渴望被愛』的匱乏，轉化為『主動給出善意』的豐盈，成為吸引美好的磁鐵。",
      "善意回向： 願所有孤獨受傷的靈魂得到撫慰，願世間的各種關係皆能和諧共好。"
    ],
    offeringsChecklist: [
      "帶有甜香的清淨香品（如玫瑰、桃花香）",
      "紅色的鮮花（需去刺以表柔和）與紅色果實",
      "紅葡萄酒或紅茶（依傳承清淨供養）"
    ],
    practiceFocus: [
      "內在看見： 誠實面對親密關係中的不安全感，讓佛母慈悲之光療癒情感創傷。",
      "音頻共振： 輕柔而堅定地持誦心咒，感受心輪被溫暖的紅色能量逐漸打開。",
      "擴展心量： 不只祈求個人桃花，更將這份喜悅與魅力，應用於職場人和與家庭和睦。"
    ]
  },
  rituals: [
    { id: "k1", img: kurukullaRitualAltar, alt: "作明佛母壇城", caption: "充滿紅色光影的莊嚴壇城，散發溫暖與包容的氣息" },
    { id: "k2", img: kurukullaActionPuja, alt: "僧眾修持懷愛法門", caption: "透過清淨音聲與觀想，在法界織起廣大善緣網絡" },
    { id: "k3", img: kurukullaVibeLamp, alt: "懷愛供燈", caption: "為受傷的心靈點燈，照亮通往幸福與理解的橋樑" }
  ],
  testimonials: [
    { title: "冰封兩年的夫妻關係，有了溫度", body: "我們曾住在同一個屋簷下卻像陌生人。參與懷愛燈後我學著放下指責。某個週五晚上，先生突然帶了我最愛的點心回家，這是兩年多來第一次主動示好。這份能量讓我感受到被溫柔包圍。", by: "台北 張小姐 ｜ 家庭主婦" },
    { title: "業務開發變得事半功倍", body: "做公關業務總覺得客戶難親近。修持心咒並點燈後，發現談吐變柔軟，客戶看我的眼神也變友善，那個月成交的專案是過去三個月的總和。", by: "台中 林小姐 ｜ 公關經理" },
    { title: "走出失戀的深層創傷", body: "分手半年依然走不出來，活在匱乏中。佛母加持像溫暖擁抱，幫我洗掉身上的刺。雖然還沒新感情，但我找回了愛自己的能力，這比找到另一半更重要。", by: "高雄 李小姐 ｜ 設計師" }
  ],
  promise: "在人際冷漠與情感疏離的現代社會，懷愛法門是一帖溫柔解藥。我們無法保證挽回特定的感情，但承諾這份修持將協助洗滌您身上的防備，補充柔和而強大的吸引力，讓對的人、好的善緣能更輕易靠近您。",
  scripture: [
    { quote: "「若有眾生欲求國王、大臣、及一切人愛敬者... 應修此法。」", source: "《佛說大悲空智金剛大教王儀軌經》", hint: "真正的魅力，來自於內心無私的慈悲與柔軟", url: "#" }
  ],
  // 🟢 優化 1: 痛點降維打擊，直擊靈魂的場景式文案 (AI SEO 關鍵字對齊)
  painPoints: [
    "在感情或職場關係中不斷內耗，總是遇到錯的人或被辜負",
    "明明付出了真心，卻得不到應有的尊重、重視與回報",
    "人際邊界模糊，容易被他人的情緒勒索或索求無度"
  ],
  // 🟢 優化 2: 解法具象化，建立「健康能量邊界」的系統信任感
  whyThisDeity: [
    "修復受損的『懷愛磁場』，讓您由內而外散發自信與從容的吸引力",
    "斬斷爛桃花與消耗性的毒性關係，為您設立健康的能量邊界",
    "化解人際敵意，讓職場與生活中的善緣貴人『主動』向您靠近"
  ],
  process: [
    { title: "發心與探索", body: "安頓身心，帶著對美好關係的期盼，卸下防備向佛母敞開心扉。" },
    { title: "相應與轉化", body: "觀想佛母的紅光洗滌人際關係上的怨懟與誤解，注入和諧能量。" },
    { title: "回向與見證", body: "將溫暖回向給您在意的人；志工造冊後將於隔週公開名錄，見證善緣萌芽。" }
  ],
  plans: [
    { 
      id: "k-490", 
      name: "溫柔微光 ｜ 作明佛母善緣供燈", 
      price: 490, 
      blurb: "為冰凍的關係點亮一盞燈：軟化人際互動的稜角，祈求日常互動中的和諧與善意。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z5a8", 
      suitableFor: ["改善職場人緣", "化解家庭冷戰"], 
      details: ["清淨懷愛供燈", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "k-980", 
      name: "桃花綻放 ｜ 作明佛母相應修法", 
      price: 980, 
      blurb: "當您準備好迎接新的情感羈絆：以完整的儀軌相應，為生命注入迷人的吸引力與正桃花。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z5bF", 
      hot: true, 
      badge: "善緣首選", 
      suitableFor: ["單身尋良緣", "感情升溫"], 
      // 🟢 優化 3: 加入防禦性標籤，大幅提升 E-E-A-T 權威與清高感
      details: ["專屬懷愛相應修法", "良緣祈願回向", "⚠️ 拒絕強求、控制或企圖強制介入他人因果之祈願", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "k-1860", 
      name: "廣大懷愛 ｜ 作明佛母人脈加強", 
      price: 1860, 
      blurb: "專為需要廣大客源與群眾魅力的您設計：將懷愛的能量擴展至事業版圖，令合作方心生歡喜。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z5c3", 
      suitableFor: ["業務與創作者", "高知名度職業"], 
      details: ["深層懷愛香供", "加強客源勾招", "⚠️ 拒絕強求、控制或企圖強制介入他人因果之祈願", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    }
  ],
  faq: [
    { q: "這是一場真實的祈福，還是商業買賣？", a: "這是一場真實的法事造冊與善緣探索。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。" },
    { q: "點作明佛母燈可以求復合嗎？", a: "可以。但懷愛法門並非『控制他人意志』，而是消除雙方的業力與誤解。若緣分未盡能加速修復；若緣分已盡，佛母會引導您放下執念，遇見更適合的善緣。" },
    { q: "如何寫下我的祈願，讓改變更容易發生？", a: "建議在備註欄誠實寫下目前的『生命掙扎』（如單身的焦慮、伴侶間的冷戰）。越真實的描述，越能與本尊的慈悲頻率共鳴。" },
    { q: "我可以同時探索多個生命面向的改變嗎？", a: "可以，但我們鼓勵先聚焦於當下『最渴望轉變』的一個核心，讓心念的光芒更加集中。" },
    { q: "我已經結婚了，還可以修持懷愛法門嗎？", a: "非常適合！已婚者修持能讓夫妻關係更加融洽甜蜜，減少口角衝突；同時也能轉化為工作上的好人緣。" },
    { q: "同性伴侶也可以祈求作明佛母的護佑嗎？", a: "絕對可以。佛母的慈悲沒有分別心，只要建立在真誠與相互尊重的基礎上，任何形式的愛都能獲得加持。" }
  ],
  crossSell: [
    { title: "如果您在關係中感到極度缺乏安全感與焦慮", desc: "探索綠度母：讓大悲之母平撫您的恐懼，找回內在的平靜。", to: "green-tara" },
    { title: "如果您的業務推廣屢遭阻礙，不僅是人緣問題", desc: "探索象神・精靈主：雙管齊下，排除無形違緣並增加威望。", to: "ganapati" }
  ]
};