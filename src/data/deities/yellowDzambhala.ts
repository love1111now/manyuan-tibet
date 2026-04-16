// @ts-nocheck
import type { Deity } from "@/lib/siteData";

import heroYellowImg from "@/assets/visuals/deities/dzambhala-hero-altar.jpeg";
import ritualYellowImg from "@/assets/visuals/deities/dzambhala-vibe-butter-lamp.webp"; 
import dzambhalaRitualAltar from "@/assets/visuals/deities/dzambhala-ritual-altar.webp";
import dzambhalaActionPuja from "@/assets/visuals/deities/dzambhala-action-group-puja.webp";
import dzambhalaVibeLamp from "@/assets/visuals/deities/dzambhala-vibe-butter-lamp.webp";

export const yellow: Deity = {
  key: "yellow",
  name: "黃財神",
  subtitle: "積聚資糧・廣修布施",
  route: "/deity/yellow",
  primaryIntent: "增加收入",
  themeColor: { bg: "#262217", accent: "#FBBF24" },
  heroKicker: "修復財務漏損的清淨起點",
  heroImage: heroYellowImg,
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
      "儀軌相應： 依古老傳承獻上清淨香煙（sang），伴隨贊巴拉心咒，感受甘露財寶的溫暖攝受。",
      "深層轉化： 以純粹的布施之心，溫柔撫平內在的慳吝與恐懼，讓福德資糧在無形中滋長。",
      "善意回向： 將這份豐盛的頻率流向法界，並精準照亮護持者生命中對正當事業與財富的期盼。"
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
    { id: "r1", img: dzambhalaRitualAltar, alt: "黃財神壇城與空間", caption: "深邃的壇城空間，奠定莊嚴的祈福場域" },
    { id: "r2", img: dzambhalaActionPuja, alt: "法師共修水供", caption: "行者齊聚共修，以純淨之水映照財神願力" },
    { id: "r3", img: dzambhalaVibeLamp, alt: "酥油燈光影", caption: "無盡燈明，照破財務的無明焦慮" }
  ],
  testimonials: [
    { title: "停滯的現金流，終於看見轉機", body: "原本工作室的幾筆尾款一直卡住，每個月的開銷壓力讓我喘不過氣。在參與黃財神水供後不到兩週，其中兩筆延宕已久的款項順利入帳。最讓我驚訝的不是錢進來了，而是那種每天被追著跑的匱乏感被溫柔地撫平了。", by: "台中 林小姐 ｜ 自由工作者" },
    { title: "治癒了對金錢的深層焦慮", body: "過去我總覺得自己不配擁有豐盛，賺再多錢都覺得不夠。這場修持像是一場溫柔的對話，讓我意識到真正的富有是內心的安穩。現在面對投資與支出，我多了一份從容，不再因為恐懼而做決策。", by: "台北 張先生 ｜ 創業者" },
    { title: "在最拮据時，接住我的溫暖善緣", body: "因為家人生病，家裡的經濟突然陷入極大考驗。抱著試試看的心情登記了黃財神的微光供燈，沒想到隔週就遇到貴人介紹了一個穩定的兼職機會，剛剛好補足了每個月的缺口。這份護持真的非常不可思議。", by: "高雄 陳小姐 ｜ 行政人員" }
  ],
  promise: "依循贊巴拉的古老智慧，我們陪伴您照亮內在的匱乏業印，修復財富流動的隱形漏損。我們不保證一夜致富的奇蹟，但祈願您的每一分踏實努力，都能在因緣具足時看見應有的豐饒轉變。",
  scripture: [
    { quote: "「於諸賢聖給施所須；見求利者，方便佐助... 能令眾生得多資生報。」", source: "《佛說業報差別經》", hint: "布施，是讓生命資糧重新流動的美麗起點", url: "#" }
  ],
  // 🟢 優化 1 & 4: 痛點降維打擊，直擊靈魂的場景式文案 (極度有利於 AI 搜尋)
  painPoints: [
    "每到月底，就被現金流與帳單追著跑的深層窒息感",
    "明明已經很努力付出，卻總是留不住財富的無力感",
    "事業卡在瓶頸期，急需活水突破現狀的焦慮"
  ],
  // 🟢 優化 1 & 4: 解法具象化，將玄學轉為系統工程
  whyThisDeity: [
    "從底層修復您的『財富漏斗』，轉化無端漏財的隱形業力",
    "以古老水供儀軌，為乾涸的事業與客源重新注入活水",
    "將對金錢的恐懼轉化為清淨的布施心，吸引真實貴人相助"
  ],
  process: [
    { title: "發心與探索", body: "安頓身心，皈依三寶；依循儀軌備妥清淨供品，開啟與豐盛能量的深度連結。" },
    { title: "相應與轉化", body: "透過 sang 供養與心咒的持誦，觀想甘露的洗滌，讓生命的資糧緣起自然成熟。" },
    { title: "回向與見證", body: "將善念回向給您與您的祈願；志工造冊修持後，隔週將公開去識別化名錄，邀您共同見證這份善意。" }
  ],
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
      // 🟢 優化 2: 防禦性行銷，加入「反向淘汰」字眼，大幅提升信任感
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
    { q: "這是一場真實的祈福，還是商業買賣？", a: "這是一場真實的法事造冊與善緣探索。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。" },
    { q: "請問供奉黃財神需要注意什麼？", a: "需保持清淨心，並發願在豐盛後能利益眾生，將財富用於正途，這能讓黃財神的加持力發揮到最大。" },
    { q: "可以為公司行號祈求嗎？", a: "非常適合，您能在綠界備註欄寫下公司名稱與統編，以公司名義點燈，祈求營運順遂、業績成長。" },
    { q: "黃財神與象神・精靈主有什麼不同？", a: "黃財神側重『財富累積與撫平匱乏感』；象神聚焦『排除阻礙與清明決策』。若錢總無端消耗想增加收入請選黃財神；若推動困難小人干擾，建議祈求象神除障。" },
    { q: "我可以同時探索多個生命面向的改變嗎？", a: "可以的，但我們鼓勵您先聚焦於當下『最渴望轉變』的一個核心，讓心念的光芒更加集中。" }
  ],
  crossSell: [
    { title: "如果您此刻感到深層的焦慮與不安", desc: "探索綠度母：讓迅疾的慈悲先接住您，穩住當下的身心。", to: "green-tara" },
    { title: "如果您正困於決策的迷霧或遭遇阻礙", desc: "探索象神・精靈主：照亮盲點，掃除違緣，尋回清明的洞察力。", to: "ganapati" }
  ]
};