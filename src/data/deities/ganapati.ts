import type { Deity } from "@/lib/siteData";

// 🟢 根據實體檔案清單校對：採用 jpeg 與 webp 混合路徑
import heroGanapatiImg from "@/assets/visuals/deities/ganapati-hero-altar.webp";
import ritualGanapatiImg from "@/assets/visuals/deities/ganapati-vibe-butter-lamp.webp"; 
import ganapatiRitualAltar from "@/assets/visuals/deities/ganapati-ritual-altar.webp";
import ganapatiActionPuja from "@/assets/visuals/deities/ganapati-action-group-puja.webp";
import ganapatiVibeLamp from "@/assets/visuals/deities/ganapati-vibe-butter-lamp.webp";

export const ganapati: Deity = {
  key: "ganapati",
  name: "象神・精靈主",
  subtitle: "清除違緣・照亮清明",
  route: "/deity/ganapati",
  primaryIntent: "突破事業瓶頸",
  themeColor: { bg: "#1C1C1C", accent: "#F4F5F0" }, 
  heroKicker: "讓已有的努力，不再被無形的阻礙攔在門外",
  heroImage: heroGanapatiImg,
  promise: "依循象王精靈主的古老智慧，我們陪伴您清除那些攔截在機遇與您之間的頑劣違緣。我們不承諾從此一帆風順，但祈願您每一次鼓起勇氣的嘗試，都能清楚看見前方的路，而非一再撞上無形的牆。",

  // 🚨 補回：寫在您決定啟動修復之前 (靈魂段落)
  precaution: {
    title: "寫在您決定啟動修復之前",
    items: [
      "拒絕投機：象神除障法門旨在破除人為或非人為的頑劣障礙，而非護持非法、損人或不具備基礎勞動之投機行為。",
      "因果自擔：障礙的掃除需配合您自身在專業領域的精進與理性判斷。儀軌能為您開路，但前進仍需您的雙腳。",
      "誠信造冊：本系統由台灣志工手動對位造冊。請務必於備註欄填寫真實資料與目前面臨的具體卡關細節，確保加持對位。"
    ]
  },

  // 🚨 補回：前往綠界前的指引教學 (轉化關鍵)
  checkoutGuidance: {
    title: "前往綠界前的指引教學",
    steps: [
      {
        id: 1,
        title: "備妥您的真實心音",
        desc: "點擊按鈕進入綠界後，請滑到最下方的「備註欄 (Remark)」，寫下您的：姓名、居住地、與此刻最想改變的事業瓶頸或決策困境。",
        example: "填寫範例：王小明，台北市，祈求象神加持化解新專案推進中的小人阻礙與決策迷霧。"
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
      quote: "「能破一切障礙。能成一切事業。」", 
      source: "《大聖歡喜天本願經》", 
      hint: "除障，是為了讓您的努力能精準地命中目標", 
      url: "#" 
    }
  ],
  painPoints: [
    "站在人生轉折點，該做的都做了，腦子裡卻像有一團霧，就是看不清楚該走哪條路",
    "事業或計畫莫名卡住，說不出哪裡出了問題，卻感覺有股無形力量在拉住後腿",
    "談判、提案、關鍵決策，每次都做足準備，卻總是差那臨門一腳就功虧一簣",
  ],
  whyThisDeity: [
    "象頭財神修復的不是「努力量」，而是讓努力通往結果的「管道暢通性」",
    "開啟穿透迷霧的洞察力，讓您把有限的心力用在真正有效的地方，而非在牆上反覆碰壁",
    "清除人為的惡意阻擾與非人為的業力違緣，讓已到手邊的機遇不再在最後一刻滑走",
  ],
  process: [
    { title: "障礙發心", body: "安頓身心，皈依三寶；依循儀軌將事業上的阻礙與困境坦誠交付給傳承。" },
    { title: "清障相應", body: "透過 sang 供養與心咒持誦，觀想象王之力粉碎障礙，讓思緒重返清明與果斷。" },
    { title: "回向與見證", body: "將善念回向給您與您的祈願；志工造冊修持後，隔週將公開去識別化名錄。" }
  ],
  ritual: {
    title: "象神精靈主除障修法",
    image: ritualGanapatiImg,
    imageAlt: "壇城光影：以純淨的白光破除一切違緣",
    mdPath: "ganapati-obstacle-clearing.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/jamyang-khyentse-chokyi-lodro/ganapati-sang",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本。",
    keyPoints: [
      "安頓心念： 皈依三寶、發菩提心，放下對阻礙的恐懼，轉化為勇氣。",
      "儀軌相應： 依古老傳承獻上清淨香煙，感受如象王般沉穩而不可阻擋的開路力量。",
      "深層轉化： 祈請精靈主粉碎事業與生活中的頑劣違緣，為思緒注入清晰的洞察。",
      "善意回向： 將這份清明的頻率流向法界，照亮護持者生命的轉折點。"
    ],
    offeringsChecklist: [
      "傳承清淨香品（柏香或松香）與莊嚴供器",
      "靜心供水與供碗（象徵智慧的清澈）",
      "花、燈、香、甜點等自然供物（象神喜愛甜食與歡喜的能量）"
    ],
    practiceFocus: [
      "內在看見： 觀想純淨的白光如象鼻般掃除一切障礙，讓事業道路變得寬廣。",
      "音頻共振： 持咒時感受聲音在胸腔與大腦間的共鳴，喚醒內在的直覺與判斷力。",
      "擴展心量： 透過回向，將自身突破轉化為希望眾生皆能找到出路的慈悲。"
    ]
  },
  rituals: [
    { id: "r1", img: ganapatiRitualAltar, alt: "象神壇城與空間", caption: "沉穩的壇城空間，奠定無畏的除障場域" },
    { id: "r2", img: ganapatiActionPuja, alt: "法師共修祈福", caption: "行者齊聚共修，以威猛之音震碎無形違緣" },
    { id: "r3", img: ganapatiVibeLamp, alt: "酥油燈光影", caption: "無盡燈明，照破決策的迷霧與盲點" }
  ],
  testimonials: [
    { 
      title: "卡了半年的企劃案，一週內順利過關", 
      body: "老闆建議護持象神的除障法事。說也奇怪，隔週開會時，原本一直刁難的長官突然改變了態度，企劃案順利通過。", 
      by: "台北 李小姐 ｜ 專案經理" 
    },
    { 
      title: "原本要告上法院的糾紛，奇蹟般和解", 
      body: "在朋友建議下，我登記了象神的深層淨障。不到一個月，對方竟然主動提出和解方案，事情和平落幕。", 
      by: "台中 張先生 ｜ 企業主" 
    }
  ],
  // 🚨 根據法事列表.txt 進行 100% 連結與金額對位
  plans: [
    { 
      id: "g-490", 
      name: "破曉微光 ｜ 象神除障供燈", 
      price: 490, 
      blurb: "為迷茫的決策點亮一盞燈：溫柔對治內在的猶豫，祈求日常工作的順遂。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4R5", 
      suitableFor: ["面臨小型選擇", "祈求工作順利"], 
      details: ["清淨除障供燈", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "g-980", 
      name: "披荊斬棘 ｜ 象神相應除障", 
      price: 980, 
      blurb: "當您遭遇具體的事業瓶頸：以完整的儀軌相應，掃除前行道路上的無形牽絆。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4S8", 
      hot: true, 
      badge: "突破首選", 
      suitableFor: ["專案卡關", "尋求晉升與突破"], 
      details: ["專屬除障相應修法", "事業順利祈願", "⚠️ 需配合自身專業能力的精進與理性判斷", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "g-1860", 
      name: "清明無礙 ｜ 象神深層淨障加強", 
      price: 1860, 
      blurb: "為創業者與高階主管打造：深度淨化事業版圖的違緣，建立清晰洞察與影響力。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4T1", 
      suitableFor: ["企業主與高管", "化解重大官非或合約危機"], 
      details: ["深層除障與淨業香供", "加強守護回向", "⚠️ 需絕對放下自身執念，臣服於更宏觀的智慧指引", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    }
  ],
  faq: [
    { q: "這是一場真實的祈福，還是商業買賣？", a: "這是一場真實的法事造冊與善緣探索。台灣團隊由不支薪志工組成，護持金扣除手續費後，全數用於西藏壇城的莊嚴供養。" },
    { q: "象神與蓮花生大士的除障有什麼不同？", a: "象神側重於『事業推動、決策盲點與人為障礙的掃除』；蓮師則聚焦於『重大意外、非自然力量干擾與生命底層恐懼的降伏』。" }
  ],
  crossSell: [
    { 
      title: "如果您希望在突破障礙後迎來豐盛", 
      desc: "探索黃財神：在道路暢通後，迅速累積資糧與財富。", 
      to: "yellow" 
    },
    { 
      title: "如果您面臨的是極度凶險的難關與恐懼", 
      desc: "探索蓮花生大士：讓威猛的金剛力為您建構絕對的防禦。", 
      to: "padmasambhava" 
    }
  ]
};