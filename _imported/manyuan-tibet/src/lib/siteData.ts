import heroYellow from "@/assets/visuals/deity-yellow.webp";
import heroMahashri from "@/assets/visuals/deity-mahashri.webp";
import heroGanapati from "@/assets/visuals/deity-ganapati.webp";
import heroKurukulla from "@/assets/visuals/deity-kurukulla.webp";

export const SITE = {
  name: "滿願藏庫",
  url: "https://manyuan-tibet.vercel.app",
  fb: "https://www.facebook.com/profile.php?id=61583749010531",
} as const;

export type DeityKey = "yellow" | "mahashri" | "ganapati" | "kurukulla";

export type Testimonial = {
  title: string;
  body: string;
  by: string;
};

export type Plan = {
  id: string;
  name: string;
  price: number;
  url: string;
  hot?: boolean;
  badge?: string;
  blurb: string;
  feedback: string;
};

export type Deity = {
  key: DeityKey;
  route: string;
  legacyRoute: string;
  name: string;
  subtitle: string;
  promise: string;
  heroImage: string;
  oracle: { question: string; title: string; desc: string };
  plans: Plan[];
  sutraMerit: {
    title: string;
    quote: string;
    quoteSource: string;
    paragraphs: string[];
  };
  wealthStory: {
    title: string;
    source: string;
    paragraphs: string[];
  };
  testimonials: Testimonial[];
  faq: { q: string; a: string }[];
  crossSell: { title: string; desc: string; to: DeityKey }[];
};

export const SUTRA_QUOTES = {
  protection:
    "「由此經威力，能離諸災橫，及餘眾苦難，無不皆除滅。……護世四王眾……皆來護是人，晝夜常不離。」",
  protectionSource: "《金光明最勝王經》｜金剛不壞防護法流",
  mahashriSupport:
    "「所謂飲食、衣服、臥具、醫藥，及餘一切所須資具，皆令圓滿無有乏少。\n由能如是持經故，自身眷屬離諸衰；所須衣食無乏時，威光壽命難窮盡。」",
  mahashriSupportSource: "《金光明最勝王經》｜無盡資糧圓滿願力",
} as const;

export const HOME_TESTIMONIALS: Testimonial[] = [
  {
    title: "截斷業力漏口，財富才真正留得住",
    body:
      "過去我像在破桶灌水，拼命賺卻拼命漏。來到滿願藏庫我才明白：這是『匱乏業垢』在作祟。照著法流完成護持後，最明顯的是焦慮感被強行『切斷』，決策恢復冷靜，原本死結的財務問題竟然自動化解。這不是運氣，是能量頻率被救贖了。",
    by: "台北｜新創自營業者",
  },
  {
    title: "不再於無明中硬衝：我被法流接住了",
    body:
      "以前遇到卡關只會硬幹，結果損耗更重、心力交瘁。這裡提供的不是空洞口號，而是真實的因果對位。護持後那種被恐懼牽著走的感覺消失了，我終於有餘裕去整理人生。如果你也感覺身陷死循環，這就是你需要的那個『斷點』。",
    by: "新竹｜半導體工程師",
  },
  {
    title: "依經而行：這是有根有據的威德校正",
    body:
      "我不需要誇張的保證，我需要經典的背書。這裡把經王的護念、增益講得極其透徹：先除障、後增益。當我把護持定下來的那一刻，那種『被法流托住』的踏實感非常強，這份清淨的佈施，讓我後續的事業運勢完全續航。",
    by: "台中｜企業經理人",
  },
];

export const DEITIES: Deity[] = [
  {
    key: "yellow",
    route: "/deities/yellow",
    legacyRoute: "/yellow-dzambhala",
    name: "黃財神",
    subtitle: "截斷貧窮業垢｜悉地法財顯現",
    promise: "以甘露法流洗滌累世匱乏印記，強行中止漏財惡緣，重塑豐盛因果曼陀羅。",
    heroImage: heroYellow,
    oracle: {
      question: "勤苦勞作卻福報難留，財路淤塞，心生匱乏恐懼",
      title: "應感本尊：黃財神",
      desc: "若不洗滌內在匱乏印記，外在資糧如水灌漏卮，終不可得。",
    },
    plans: [
      {
        id: "y-490",
        name: "法緣初啟",
        price: 490,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4W0",
        blurb: "「止息焦慮」之初階儀軌。以清淨心對接本尊法流，先令紛亂之心寂靜，中止因恐懼而生的錯誤決策，種下豐盛善種。",
        feedback: "常見回饋：睡前不再反覆盤算，胸口積壓數月的重石感消散，找回了久違的定力。",
      },
      {
        id: "y-980",
        name: "洗滌業垢｜深契核心",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4XF",
        hot: true,
        badge: "多數感應之選",
        blurb: "針對「習慣性漏財」之強力調伏。深層洗滌累世貧窮習氣，截斷損耗資糧的負面連鎖，讓你的財路從此『穩如須彌』。",
        feedback: "強烈回饋：原本卡住的款項意外入帳，支出邊界感變強，不再被身邊的人事物拖累財氣。",
      },
      {
        id: "y-1860",
        name: "資糧增益",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3",
        blurb: "啟動「招財悉地」之高階增益。不僅止漏，更要開源。強行扭轉能量場，吸引十方資糧匯聚，讓你的努力能轉化為真實的福報功德。",
        feedback: "明顯回饋：我不再是求財的人，我成了掌握財富頻率的人。那種從『無』到『有』的轉化極其震撼。",
      },
      {
        id: "y-3680",
        name: "圓滿曼陀羅",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Z5",
        blurb: "重塑「財富命格」之大圓滿儀軌。透過廣大供養，建立永恆的福德防護牆。適合欲為家族或企業體奠定不拔之基的決策者。",
        feedback: "非常有感：從家道中落到東山再起，法財不再滲漏，資糧圓滿，我終於重獲尊嚴。",
      },
    ],
    sutraMerit: {
      title: "先止災橫、後求增益：不談虛幻致富，只談截斷耗損",
      quote: SUTRA_QUOTES.protection,
      quoteSource: SUTRA_QUOTES.protectionSource,
      paragraphs: [
        "《金光明最勝王經》的核心在於『威力』二字。當法流啟動，第一步不是給你更多，而是『除滅諸災橫』。在黃財神的修法邏輯中，這意味著：先幫你關掉那個讓你不斷虧損、出錯、被騙的負面能量出口。",
        "匱乏感是一種業力印記，它會讓你急躁、恐懼、做出『翻本心態』的錯誤決策。黃財神的水供法流，是以本尊的慈悲甘露，洗滌這層貧窮的習氣印記，讓你的心先恢復『飽滿』。",
        "當你不缺、不急、不怕，你的眼光才會精準，財路才會從『穩』開始積累。這是有根有據的法性校正，而非盲目的迷信祈求。",
      ],
    },
    wealthStory: {
      title: "法源背景：甘露觸頂，轉化匱乏為清淨資糧",
      source: "密續傳承：黃財神灌頂儀軌與施財誓願",
      paragraphs: [
        "相傳佛陀宣說大般若時，贊巴拉（黃財神）為護法受傷，佛陀以白色甘露觸其頂門，消其業障、予其安穩。從此，贊巴拉立誓：凡以淨水供養召請者，當施予資財與法財，令其無有乏少。",
        "這不僅是神話，更是一種能量轉換的隱喻：用清淨的供養（水供）來交換你的焦慮與污垢。當你參與護持，你是在啟動這個『以淨易垢』的法流，讓財運的淤塞被沖刷乾淨。",
        "先有清淨的節奏，才有留得住的富足。這一尊的核心功能，就是為你執行這場最徹底的『財富大掃除』。",
      ],
    },
    testimonials: [
      {
        title: "我切斷了『想翻本』的病態執著",
        body: "以前只要賠錢就想梭哈，結果越賠越多。做了黃財神護持後，那種病態的急躁感不見了，我竟然能冷靜地止損、重新規劃。現在錢開始留下來，我才懂：穩才是最快的路。",
        by: "台北｜專業投資人",
      },
      {
        title: "不再拖延，因為能量補上了",
        body: "以前總覺得錢不夠用，所以對什麼都縮手縮腳。這裡的流程很乾淨，護持完後，我對事業的信心開始長出來，做事不再拖泥帶水。推薦給跟我一樣卡在猶豫裡的人。",
        by: "高雄｜零售業主",
      },
    ],
    faq: [
      { q: "這是保證賺錢嗎？", a: "不，本站談的是法流校正。真正的財富來自福德與正確行動，我們幫你截斷障礙，讓你的行動更精準。" },
      { q: "不知道該選哪一個金額？", a: "如果你是第一次，且感覺財務非常混亂，強烈建議從 980 元的『核心級別』開始，它的止漏力道最為顯著。" },
    ],
    crossSell: [
      { title: "若你感覺家運不順、意外頻發", desc: "看大吉祥天女：啟動資糧續航，安穩家宅底盤。", to: "mahashri" },
      { title: "若你感覺決策混亂、眼光失準", desc: "看象神：劈開迷霧，讓你的智慧引領財路。", to: "ganapati" },
    ],
  },
  {
    key: "mahashri",
    route: "/deities/mahashri",
    legacyRoute: "/mahashri-devi",
    name: "大吉祥天女",
    subtitle: "資糧圓滿｜啟動增祥家運",
    promise: "守護受持法教者，令食衣住行無有乏少；安撫家宅、化解衰氣，讓福德資糧穩定增祥。",
    heroImage: heroMahashri,
    oracle: {
      question: "生活總是不安穩，感覺資糧一直在流失，家運低迷",
      title: "應感本尊：大吉祥天女",
      desc: "令一切所須資具圓滿無乏，先求安住，後求興旺。",
    },
    plans: [
      {
        id: "m-490",
        name: "吉祥微光",
        price: 490,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4ND",
        blurb: "「平撫燥火」之日常護念。化解家庭中的無名摩擦，降低突發性的小耗損。讓天女的慈悲微光先穩定你的家宅氣場。",
        feedback: "常見回饋：家裡氣氛變和諧，不再為雞毛蒜皮的事爭吵，被佛母溫暖手心托住的感覺很強。",
      },
      {
        id: "m-980",
        name: "資糧增祥｜核心路線",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4PD",
        hot: true,
        badge: "多數家庭的首選",
        blurb: "直接對接「圓滿資糧」法流。針對衣食、居住等物質基礎做強力除障，確保每一分入帳都能留存，並化解導致貧瘠的因果死結。",
        feedback: "明顯回饋：入不敷出的焦慮消失，意外助緣接二連三出現，日子終於站穩，我不再恐懼明天。",
      },
      {
        id: "m-1860",
        name: "祥和護持",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Q7",
        blurb: "為事業或家族立下「吉祥防護網」。徹底切割導致家道低迷的衰氣，讓福德能夠在宅內持續生長，不再被無妄之災拖垮。",
        feedback: "強烈回饋：以前賺的錢全給了意外支出，現在這一切都停了！家裡終於有了存款與笑聲。",
      },
      {
        id: "m-3680",
        name: "圓滿法座",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4V8",
        blurb: "資糧圓滿之最高儀軌。為全家建立一個不可撼動的福德蓄水池，切斷貧窮的代際傳承，讓豐盛成為家庭的護守。",
        feedback: "非常有感：從負債邊緣到擁有穩固產業，這是佛法願力的真實顯化。大吉祥天女救了我們全家的未來。",
      },
    ],
    sutraMerit: {
      title: "資具圓滿：把生活安住，是修行的第一步實力",
      quote: SUTRA_QUOTES.mahashriSupport,
      quoteSource: SUTRA_QUOTES.mahashriSupportSource,
      paragraphs: [
        "《金光明最勝王經》大吉祥天女品，極其務實地談論『資糧』。當你護持此經，天女立誓讓你飲食、臥具、醫藥無一匱乏。這不是貪執，而是慈悲——讓你有足夠的資源去行善、去安家、去修行。",
        "家運不穩的核心在於『衰相』：莫名其妙的開銷、沒完沒了的生病、關係的內耗。大吉祥天女的法流是在切斷這些衰敗的頻率，重新排列家宅的能量次序。",
        "當你的資糧不再被無謂的黑洞拖走，你的每一分努力才會有剩餘，福報才存得下來。這一尊的功能就是：為你的福德資糧蓋一座穩定的倉庫。",
      ],
    },
    wealthStory: {
      title: "經中誓願：天女親承，令受持者自身眷屬離諸衰",
      source: "《金光明最勝王經》卷第八：大吉祥天女增長財物品",
      paragraphs: [
        "大吉祥天女於佛前發大誓願：若有眾生受持讀誦此經，我當供應其一切所需，且不僅是個人，連其『眷屬』亦在護念之列。這是一種整體的、家族式的能量防護。",
        "經中教導，當資財豐足時，應以上分供養三寶，下分濟貧。這種『財佈施』的流動，正是大吉祥天女法流長流不息的關鍵。護持，就是加入這個神聖的流動。",
        "你不是在買一個願望，你是在對接一個傳承了千年的、關於『豐盛與施予』的能量路徑。讓匱乏永遠離開你的家門。",
      ],
    },
    testimonials: [
      { title: "家裡的『燥火』終於退了", body: "以前老公生意一好小孩就生病，賺的都賠給醫生。護持後最神奇的是意外支出幾乎停了，全家心很定。大吉祥天女的安穩力量，是真的能感覺到的。", by: "桃園｜家庭主婦" },
      { title: "不再害怕『隨時會缺』的恐懼", body: "以前賺再多都怕，現在有一種『被托住』的感覺。資糧開始續得起來，我也更有勇氣去做佈施，福報循環真的開了。", by: "台南｜藥師" },
    ],
    faq: [
      { q: "跟黃財神有什麼不同？", a: "黃財神側重『止漏與開源』，大吉祥天女側重『家運安穩與資糧續航』。若感覺內耗重、家宅不寧，請選大吉祥天女。" },
    ],
    crossSell: [
      { title: "若你感覺破財嚴重、債務纏身", desc: "看黃財神：強力洗滌匱乏，截斷損耗根源。", to: "yellow" },
      { title: "若你感覺小人糾纏、關係卡關", desc: "看作明佛母：調整磁場，感召真正的貴人。", to: "kurukulla" },
    ],
  },
  {
    key: "ganapati",
    route: "/deities/ganapati",
    legacyRoute: "/ganapati",
    name: "象神｜精靈主",
    subtitle: "劈碎魔障｜啟動般若智慧",
    promise: "碎裂心智迷霧與試錯輪迴，注入佛行事業之洞察力，讓你在生死關頭做出不再後悔的決定。",
    heroImage: heroGanapati,
    oracle: {
      question: "決策失準、投資被套、感覺在迷霧中硬走",
      title: "應感本尊：象神｜精靈主",
      desc: "所有的障礙皆生於無明。劈開無明，障礙自會轉化為護持之基。",
    },
    plans: [
      {
        id: "g-490",
        name: "迷霧初散",
        price: 490,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4R5",
        blurb: "「排除雜訊」之心理洗滌。讓紛擾的資訊與情緒先暫停。適合大腦過熱、陷入選擇困難的你，找回思考的起點。",
        feedback: "常見回饋：腦袋清爽如雨後天空，那種『我知道該怎麼辦』的清明感，救了我的事業。",
      },
      {
        id: "g-980",
        name: "劈碎死局｜最強轉機",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4S8",
        hot: true,
        badge: "決策者強力推薦",
        blurb: "斷除「重複跳坑」之負面慣性。象神以利斧劈開因果死結，讓你一眼看穿利益假象。適合越改越亂、卡在瓶頸期的你——先看清，再動作。",
        feedback: "明顯回饋：終於敢果斷止損，且止損後立刻看到新的轉機，智慧就是最大的財富。",
      },
      {
        id: "g-1860",
        name: "事業引路",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4T1",
        blurb: "建立「智慧威德」之磁場。透過精靈主的威德法流，強行收束混亂的資訊，讓你像撥雲見日般看見核心突破口。",
        feedback: "強烈回饋：象神幫我搬開了壓在心頭多年的大石頭，布局變得很寬廣，生意終於做活了。",
      },
      {
        id: "g-3680",
        name: "全覺智勝",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4U2",
        blurb: "開啟「上帝視角」之大除障儀軌。切斷一切導致毀滅性決策的業力頻率。讓你的判斷成為標竿，確保帝國建立在最清明的洞察之上。",
        feedback: "非常有感：不再在宿命迷宮中反覆碰壁，這種不再後悔的生命感，就是最大的救贖。",
      },
    ],
    sutraMerit: {
      title: "除橫與除苦：清明的第一步，是停止自找麻煩",
      quote: SUTRA_QUOTES.protection,
      quoteSource: SUTRA_QUOTES.protectionSource,
      paragraphs: [
        "《金光明最勝王經》中提到，人之所以受苦，往往是因為災橫與憂苦。而最強大的災橫，莫過於『心智的昏庸』。當你看錯方向、選錯伴侶、投錯項目，所有的努力都會變成苦難。",
        "象神（精靈主）的路徑，核心功德在於『除礙』。這不僅是除掉外面的小人，更是除掉你腦袋裡的『貪、嗔、癡』迷霧。清明不是天賦，而是透過法流儀軌校正後的必然結果。",
        "當你不再被恐懼誘惑，你的下一步自然就會走在『增益』的路徑上。這一尊的功能就是：劈開你的試錯輪迴，讓你不再重複同樣的慘劇。",
      ],
    },
    wealthStory: {
      title: "法眼看世界：把阻礙轉化成前進的智慧",
      source: "密續典籍：Maharakta 觀音化身之象頭王儀軌",
      paragraphs: [
        "在藏密深層教法中，象神是觀世音菩薩為了降伏頑強障礙而示現的忿怒與威德化身。他的力量是：強行轉化障礙。凡是卡住你的，都將成為你智慧的墊腳石。",
        "他象徵著一種『大象般的推動力』，足以推開所有橫在財路與命運之前的巨石。但這份推動力的前提是『智慧』——沒有智慧的推動只會造成破壞，而象神賜予你的是：看清巨石縫隙的洞察力。",
        "護持象神，就是請一位最頂級的智慧嚮導為你開路。讓你的每一次選擇，都成為福德的累積而非損耗。",
      ],
    },
    testimonials: [
      { title: "我終於看清了那場投資騙局", body: "以前腦袋像被打結一樣，護持後幾天，我突然清醒地看到對方的漏洞。象神劈開迷霧的能力極其可怕，幫我省下了幾百萬的損失。", by: "台北｜室內設計師" },
      { title: "不再反覆後悔", body: "我以前做完決定就想哭，現在心很定。我學會了『看清再動』，那種掌控感比賺到錢還讓我快樂。感謝這份清明的法流。", by: "竹北｜軟體工程師" },
    ],
    faq: [
      { q: "跟一般象神有什麼不同？", a: "我們對接的是密法傳承中的『精靈主』層級，側重於『斷除心智障礙』與『啟動事業智慧』，針對現代人的決策混亂有極強的對位效果。" },
    ],
    crossSell: [
      { title: "若你感覺運勢不穩、財路滲漏", desc: "看黃財神：強力洗滌匱乏，穩住你的財富地基。", to: "yellow" },
      { title: "若你感覺人際耗損、缺乏貴人", desc: "看作明佛母：調整磁場，感召善緣助力。", to: "kurukulla" },
    ],
  },
  {
    key: "kurukulla",
    route: "/deities/kurukulla",
    legacyRoute: "/kurukulla",
    name: "作明佛母",
    subtitle: "強力攝受｜感召貴人善緣",
    promise: "引爆內在懷愛磁場，降伏敵意與孤立感；感召命定貴人與清淨情緣，令眾生見者歡喜。",
    heroImage: heroKurukulla,
    oracle: {
      question: "人際耗損、貴人遠離、情緣枯槁，感覺被世界隔絕",
      title: "應感本尊：作明佛母",
      desc: "攝受力不是乞求，而是威德。當你的磁場與法流合鳴，貴人自會破浪而來。",
    },
    plans: [
      {
        id: "k-490",
        name: "人緣化冰",
        price: 490,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5a8",
        blurb: "「化解敵意」之調伏儀軌。讓緊繃的關係出現緩衝，讓冷漠的目光轉為柔和。適合正處於人際磨合或修復期的你。",
        feedback: "常見回饋：對方開始願意好好說話，我也學會修復破碎的心，互動沒那麼卡了。",
      },
      {
        id: "k-980",
        name: "磁場引力｜最強感召",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5bF",
        hot: true,
        badge: "貴人助緣首選",
        blurb: "啟動「懷愛攝受」法流。讓你在群眾中自帶慈悲光芒，感召能提攜你的「大貴人」與「善姻緣」。拒絕孤軍奮戰。",
        feedback: "明顯回饋：貴人真的會被你的能量場吸過來，高層開始關注我的建議，這種感覺太不可思議了！",
      },
      {
        id: "k-1860",
        name: "威德攝位",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5c3",
        blurb: "建立「懷愛威德」之攝位。讓你的存在具備不可忽視的分量，化解小人誹謗，將負面緣分轉化為利他助緣。",
        feedback: "強烈回饋：小人退散，留下來的全是真心支持我的夥伴。我的社交圈徹底洗牌，孤寂感消失了。",
      },
      {
        id: "k-3680",
        name: "圓滿懷愛",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5d7",
        blurb: "極致攝受之最高儀軌。切斷累世孤獨與被背叛之業力印記。讓你擁有令眾生嚮往的如法威德，感召極致權勢與愛情。",
        feedback: "非常有感：我曾深陷情感與事業的雙重背叛，佛母把我從深淵拉起。現在我身邊全是助力，我終於不再是一個人。",
      },
    ],
    sutraMerit: {
      title: "歡喜與攝受：磁場正了，世界就變好談了",
      quote: SUTRA_QUOTES.protection,
      quoteSource: SUTRA_QUOTES.protectionSource,
      paragraphs: [
        "《金光明最勝王經》以護念不離形容一種被善意與秩序托住的狀態：當你先回到安住，心裡不再急著證明、急著抓住，關係就比較不會用衝突與拉扯開場。",
        "作明佛母的路徑重點，是把互動從想控制結果轉回讓人心生歡喜：語氣更柔、眼神更定、界線更清楚。當你不再用討好換安全感，魅力會以更乾淨的方式長出來。",
        "你要的緣分，不是把人拉住，而是讓雙方都走得順：該靠近的自然靠近、該放下的自然放下。當你能在關係裡保持慈心與尊重，善緣與助力才有機會穩穩落在你身上。",
      ],
    },
    wealthStory: {
      title: "經典概念：『攝受』不是控制，是讓因緣回到正位",
      source: "Lotsawa House｜Introduction to Kurukullā（Kurukullā 為蓮華部阿彌陀佛家族，象徵『攝受／調伏』之佛行事業，能令眾生、因緣與自心趨於和合於法）",
      paragraphs: [
        "Lotsawa House 的介紹指出：作明佛母（Kurukullā）象徵密續四事業之一的『攝受／調伏』（magnetizing, vaśīkaraṇa）——其目的不是操控他人，而是把眾生、因緣，甚至自己的心，攝入與正法相應的方向。",
        "她以弓箭、索、鉤等象徵『招引』：招引善緣、招引助力、招引自己的心回到慈悲與智慧的秩序裡。當你不再用焦慮去抓人，反而會變得讓人願意靠近。",
        "因此這條路徑談的不是討好，而是正位：語氣柔、界線清、心不急——你要的貴人與資源，才有地方落腳。",
      ],
    },
    testimonials: [
      {
        title: "對方開始願意好好說話，互動變順",
        body: "以前一開口就容易卡住或吵起來。做完之後，我先練習把情緒安住再開口：語氣更柔、界線也更清楚。一兩週後，對方真的比較願意聽，很多事不需要用力就能談。你現在如果也卡在關係裡，我想說：先把自己調回正位，世界會跟著變好談。",
        by: "新北｜上班族",
      },
      {
        title: "我有魅力了，是那種讓人舒服的魅力",
        body: "我以前很努力表現，結果只讓自己更緊。這條路徑讓我把狀態調回穩定：做事更從容、說話更有分寸。合作溝通變順，邀約也比以前更自然地出現。那種『有人願意來幫你一把』的感覺，是真的。",
        by: "台中｜自雇者",
      },
    ],
    faq: [
      { q: "可以用在修復特定感情嗎？", a: "可以。但建議發願：願彼此關係回歸正位、遠離衝突；若有善緣令其速成，若緣不具則令彼此安好。這才是最如法且不留業力的做法。" },
    ],
    crossSell: [
      { title: "若你感覺投資眼光失準、受人矇蔽", desc: "看象神：劈開迷霧，讓清明智慧為你引路。", to: "ganapati" },
      { title: "若你感覺家運低迷、資糧難續", desc: "看大吉祥天女：啟動資糧續航，安穩家底。", to: "mahashri" },
    ],
  },
];

export const DEITY_BY_KEY = Object.fromEntries(DEITIES.map((d) => [d.key, d])) as Record<
  DeityKey,
  Deity
>;

export function money(n: number) {
  return `NT$ ${n.toLocaleString("zh-TW")}`;
}

export type TopicEntry = {
  slug: string;
  title: string;
  summary: string;
  ctaLabel: string;
  deity: DeityKey;
};

export const TOPICS: TopicEntry[] = [
  {
    slug: "一直賺不到錢怎麼辦",
    title: "一直賺不到錢怎麼辦？別在破桶裡灌水，先止漏",
    summary: "這不只是教你發財，而是幫你拆解『匱乏印記』。你可能不是能力不足，而是你的因果漏口正在吞噬你的福報。先止漏，財富才能累積。",
    ctaLabel: "啟動止漏路徑｜黃財神",
    deity: "yellow",
  },
  {
    slug: "做決策總是失準",
    title: "決策失準的真相：你不是笨，是你正處於無明迷霧",
    summary: "錯誤的決策會導致連鎖損害。我們提供一套從心智校正到因果除障的系統：先止損、再對位、最後啟動清明智慧。",
    ctaLabel: "啟動清明路徑｜象神",
    deity: "ganapati",
  },
  {
    slug: "貴人少小人多",
    title: "貴人少、小人多？那是因為你的磁場正在『推開』善緣",
    summary: "討好沒用，你需要的是『攝受力』。這篇教你如何透過儀軌調整內在磁場，讓正確的資源與貴人主動向你靠攏。",
    ctaLabel: "啟動攝受路徑｜作明佛母",
    deity: "kurukulla",
  },
];