import type { Deity } from "@/lib/siteData";

// 🟢 根據實體檔案清單校對：採用 webp 與 jpeg 混合路徑，補上前綴
import heroYellowImg from "@/assets/visuals/deities/dzambhala-hero-altar.webp";
import ritualYellowImg from "@/assets/visuals/deities/dzambhala-vibe-butter-lamp.webp"; 
import dzambhalaRitualAltar from "@/assets/visuals/deities/dzambhala-ritual-altar.webp";
import dzambhalaActionPuja from "@/assets/visuals/deities/dzambhala-action-group-puja.webp";
import dzambhalaVibeLamp from "@/assets/visuals/deities/dzambhala-vibe-butter-lamp.webp";

export const yellow: Deity = {
  key: "yellow",
  name: "黃財神",
  subtitle: "積聚資糧・廣修布施",
  route: "/deity/yellow",
  primaryIntent: "修復財富流動與增加豐盛資糧",
  themeColor: { bg: "#262217", accent: "#FBBF24" },
  heroKicker: "修復財富流動的結構性漏損，讓踏實的努力真正被接住",
  heroImage: heroYellowImg,
  promise: "依循贊巴拉的古老智慧，我們陪伴您照亮那些讓財富無聲流失的業力印記。我們不承諾一夜翻身的奇蹟，但祈願您的每一分清淨努力，都能在因緣具足時，真正被生命容器穩穩接住。",

  // 🚨 補回：寫在您決定啟動修復之前 (靈魂段落)
  precaution: {
    title: "寫在您決定啟動修復之前",
    items: [
      "拒絕投機：黃財神法門旨在修復資糧漏損，不護持賭博、中獎或任何損人利己、不勞而獲之貪婪祈願。",
      "因果自擔：豐盛的成熟需配合正確的努力與慷慨的布施心。儀軌是強力助緣，而非逃避現實與懶散的藉口。",
      "誠信造冊：本系統由台灣志工手動對位造冊。請務必填寫真實姓名與目前的生命困境，以便如法祈請。"
    ]
  },

  // 🚨 補回：前往綠界前的指引教學 (轉化關鍵)
  checkoutGuidance: {
    title: "前往綠界前的指引教學",
    steps: [
      {
        id: 1,
        title: "備妥您的真實心音",
        desc: "進入綠界後，請滑到最下方的「備註欄 (Remark)」，寫下您的：姓名、居住地、與此刻最想改變的財務或事業困境。",
        example: "填寫範例：王小明，台北市，祈求黃財神加持化解新事業推廣的瓶頸。"
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
      quote: "「於諸賢聖給施所須；見求利者，方便佐助... 能令眾生得多資生報。」", 
      source: "《佛說業報差別經》", 
      hint: "布施，是讓生命資糧重新流動的美麗起點", 
      url: "#" 
    }
  ],
  painPoints: [
    "月底被帳單與現金流追著跑，那種不是懶、不是笨，卻就是裝不滿的深層窒息感",
    "努力付出，收入也不差，卻像有個隱形的漏洞，財富就是留不住",
    "事業明明到了臨界點，卻卡在最後一道無形的門前，找不到突破口",
  ],
  whyThisDeity: [
    "黃財神修復的不是「運氣」，而是財富流入管道的結構性漏損——讓賺到的能被留下",
    "以古老水供儀軌清洗資糧容器的淤積，讓乾涸的事業與客源重新感受到活水的流動",
    "轉化對金錢的底層恐懼模式：從「抓緊才安全」轉為「布施才流通」，吸引真實貴人",
  ],
  process: [
    { title: "發心與探索", body: "安頓身心，皈依三寶；依循儀軌備妥清淨供品，開啟與豐盛能量的深度連結。" },
    { title: "相應與轉化", body: "透過 sang 供養與心咒的持誦，觀想甘露的洗滌，讓生命的資糧緣起自然成熟。" },
    { title: "回向與見證", body: "將善念回向給您與您的祈願；志工造冊修持後，隔週將公開去識別化名錄。" }
  ],
  ritual: {
    title: "黃財神煙供修法",
    image: ritualYellowImg,
    imageAlt: "壇城光影：僧眾為黃財神尊像獻上清淨供養",
    mdPath: "yellow-jambhala-sang.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/jamyang-khyentse-chokyi-lodro/jambhala-sang",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
    keyPoints: [
      "安頓心念： 皈依三寶、發菩提心，將小我的匱乏焦慮轉化為『與萬物共好』的廣大願力。",
      "儀軌相應： 依古老傳承獻上清淨香煙，伴隨贊巴拉心咒，感受甘露財寶的溫暖攝受。",
      "深層轉化： 以純粹的布施之心，溫柔撫平內在的慳吝與恐懼，讓福德資糧在無形中滋長。",
      "善意回向： 將這份豐盛的頻率流向法界，精準照亮護持者生命的期盼。"
    ],
    offeringsChecklist: [
      "傳承清淨香品（沉香或檀香）與莊嚴供器",
      "靜心供水與供碗（可點綴少許藏紅花，重在心意）",
      "花、燈、香、果等自然供物（依緣準備，重在清淨）"
    ],
    practiceFocus: [
      "內在看見： 觀想甘露洗滌過往的匱乏印記，讓事業與財富以最『正向、無漏』的方式成熟。",
      "音頻共振： 持咒不求數量，而在於『專注與恭敬』的相續不斷。",
      "擴展心量： 透過回向，將緊抓不放的金錢焦慮，轉化為容納更多財富的寬闊胸襟。"
    ]
  },
  rituals: [
    { id: "yd-r1", img: dzambhalaRitualAltar, alt: "黃財神壇城與空間", caption: "深邃的壇城空間，奠定莊嚴的祈福場域" },
    { id: "yd-r2", img: dzambhalaActionPuja, alt: "法師共修水供", caption: "行者齊聚共修，以純淨之水映照財神願力" },
    { id: "r3", img: dzambhalaVibeLamp, alt: "酥油燈光影", caption: "無盡燈明，照破財務的無明焦慮" }
  ],
  testimonials: [
    { 
      title: "停滯的現金流，終於看見轉機", 
      body: "原本工作室幾筆尾款一直卡住。在參與黃財神水供後不到兩週，其中兩筆順利入帳。最讓我驚訝的是每天被錢追著跑的匱乏感被撫平了。", 
      by: "台中 林小姐 ｜ 自由工作者" 
    },
    { 
      title: "治癒了對金錢的深層焦慮", 
      body: "我總覺得自己不配擁有豐盛。這場修持像是一場溫柔的對話，讓我意識到真正的富有是內心的安穩。現在面對投資我多了一份從容。", 
      by: "台北 張先生 ｜ 創業者" 
    }
  ],
  // 🚨 根據法事列表.txt 進行 100% 連結與金額對位
  plans: [
    { 
      id: "y-490", 
      name: "撫平匱乏 ｜ 黃財神微光供燈", 
      price: 490, 
      blurb: "為財富流動點亮一盞燈：溫柔對治內在對金錢的匱乏感與恐懼，讓生命的出口重新展現。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4W0", 
      suitableFor: ["初次探索", "尋找財務安定感"], 
      details: ["清淨供燈回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "y-980", 
      name: "啟動豐盛 ｜ 黃財神相應水供", 
      price: 980, 
      blurb: "當您渴望事業的活水：以完整的儀軌相應，引導迷失的資糧與客源重新流向您。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4XF", 
      hot: true, 
      badge: "共鳴首選", 
      suitableFor: ["現金流轉圜", "業績與客源突破"], 
      details: ["連續水供相應", "專屬祈願回向", "⚠️ 拒絕投機與不勞而獲之祈求", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    },
    { 
      id: "y-1860", 
      name: "深耕淨障 ｜ 黃財神除障香供", 
      price: 1860, 
      blurb: "當努力總是遭遇無形阻滯：透過深層的清淨轉化，化解阻擋豐盛與升遷的違緣。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3", 
      suitableFor: ["事業格局擴張", "化解重大財務風險"], 
      details: ["深層除障香供", "加強守護回向", "⚠️ 需配合自身正當之努力", "✦ 本月結緣：每週六藥師佛息災煙供守護"] 
    }
  ],
  faq: [
    { q: "這是一場真實的祈福，還是商業買賣？", a: "這是一場真實的法事造冊。團隊全體皆為不支薪志工，護持金全數用於西藏壇城的莊嚴供養。" },
    { q: "黃財神與象神・精靈主有什麼不同？", a: "黃財神側重『財富累積與撫平匱乏』；象神聚焦『排除阻礙與清明決策』。若錢總無端消耗請選黃財神；若推動困難小人干擾，建議選象神。" }
  ],
  crossSell: [
    { 
      title: "如果財富流動了，卻發現身邊的人沒有跟上", 
      desc: "探索作明佛母：修復人際磁場，讓財富帶來的機遇也能有對的人承接。", 
      to: "kurukulla" 
    },
    { 
      title: "如果努力了但總差那臨門一腳", 
      desc: "探索象頭財神：先清除阻擋在機遇與您之間的無形違緣。", 
      to: "ganapati" 
    }
  ]
};