import heroYellow from "@/assets/visuals/deity-yellow.webp";
import heroMahashri from "@/assets/visuals/deity-mahashri.webp";
import heroGanapati from "@/assets/visuals/deity-ganapati.webp";
import heroKurukulla from "@/assets/visuals/deity-kurukulla.webp";

export const SITE = {
  name: "滿願藏庫",
  url: "https://manyuan-tibet.vercel.app", // 部署後請改成你的正式網域
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
};

export type Deity = {
  key: DeityKey;
  route: string; // 站內主路由 /deities/:key
  legacyRoute: string; // 舊路由，外部連結兼容
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
  testimonials: Testimonial[];
  faq: { q: string; a: string }[];
  crossSell: { title: string; desc: string; to: DeityKey }[];
};

// 金光明最勝王經：經文引用，用於文案植入
export const SUTRA_QUOTES = {
  protection:
    "由此經威力，能離諸災橫，及餘眾苦難，無不皆除滅。……護世四王眾……皆來護是人，晝夜常不離。",
  protectionSource: "《金光明最勝王經》卷第一｜CBETA T16n0665",
  mahashriSupport:
    "所謂飲食、衣服、臥具、醫藥，及餘一切所須資具，皆令圓滿無有乏少。\n由能如是持經故，自身眷屬離諸衰；所須衣食無乏時，威光壽命難窮盡。",
  mahashriSupportSource: "《金光明最勝王經》大吉祥天女品第十六｜識典古籍",
} as const;

export const HOME_TESTIMONIALS: Testimonial[] = [
  {
    title: "我終於不是『亂拜』，而是『走一條路』",
    body:
      "以前看到什麼就想做，結果一直焦慮。這個網站把四條路徑講得很清楚，我先照『最推薦』完成預定後，心反而安定下來，接下來做事也比較能延續。",
    by: "台北｜自營工作者",
  },
  {
    title: "最有感的是流程透明",
    body:
      "我怕被話術推著走，但這裡把『你要做什麼、你不用做什麼』寫得很明白：去綠界付款、照提示填姓名事項，其餘照流程安排。看懂就能做決定。",
    by: "新竹｜工程師",
  },
  {
    title: "讀到經文引用，反而更踏實",
    body:
      "不是只說招財，而是把《金光明最勝王經》講的護念、增益、除障放回人能理解的語言。我不需要保證，我需要一個可以承擔的選擇。",
    by: "台中｜上班族",
  },
];

export const DEITIES: Deity[] = [
  {
    key: "yellow",
    route: "/deities/yellow",
    legacyRoute: "/yellow-dzambhala",
    name: "黃財神",
    subtitle: "穩固資糧｜洗滌匱乏印記",
    promise: "水供洗滌匱乏，讓你把財路走穩，不再被焦躁牽著走。",
    heroImage: heroYellow,
    oracle: {
      question: "努力工作但財運停滯",
      title: "應感本尊：黃財神",
      desc: "先穩財、先止漏，再談增長。",
    },
    plans: [
      { id: "y-490", name: "基礎共修", price: 490, url: "https://cart.cashier.ecpay.com.tw/qp/z4W0" },
      { id: "y-980", name: "專屬供品｜推薦", price: 980, url: "https://cart.cashier.ecpay.com.tw/qp/z4XF", hot: true },
      { id: "y-1860", name: "獨立法座", price: 1860, url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3" },
      { id: "y-3680", name: "感恩大供", price: 3680, url: "https://cart.cashier.ecpay.com.tw/qp/z4Z5" },
    ],
    sutraMerit: {
      title: "先護念、先除橫：穩財不是求快，而是把『耗損』停下來",
      quote: SUTRA_QUOTES.protection,
      quoteSource: SUTRA_QUOTES.protectionSource,
      paragraphs: [
        "《金光明最勝王經》把『護念』講得很務實：當你受持、聽聞、恭敬這部經王，經中以『經威力』比喻一種秩序回復——災橫與眾苦被止息，護法天眾常來擁衛。這種語言放到現代，就是：先把讓你反覆耗損的因素停下來，你的努力才會留下來。",
        "黃財神的穩財路徑，對應的不是一夜致富，而是『洗滌匱乏印記』：匱乏感會讓人急、怕、追，最後做出錯誤選擇。當心行稍微安住，決策就不再被焦慮綁架，財路才有機會穩定累積。",
        "所以這一尊的核心功德，是把你從『一直衝、一直漏』拉回來：先穩、先護、先止漏。當你願意用可承擔的方式完成護持，才談得上後續的增長與圓滿。",
      ],
    },
    testimonials: [
      {
        title: "我停止『急著翻倍』，先把破財停下來",
        body:
          "以前我只要焦慮就會亂買、亂投資。做了黃財神路徑後，我反而先把支出與決策節奏穩住，心不再那麼急，錢也比較留得住。",
        by: "桃園｜自由業",
      },
      {
        title: "最推薦方案讓我不用想太多",
        body:
          "我最怕選錯。黃財神頁面把『最推薦』放第一個，直接照做就好，流程很清楚，反而更敢做決定。",
        by: "高雄｜店家",
      },
      {
        title: "穩的是我自己的心",
        body:
          "我沒有期待立刻變有錢，但我有感的是：焦慮下降後，我不再用衝動做決策，工作和財務都比較能累積。",
        by: "台中｜上班族",
      },
    ],
    faq: [
      { q: "我需要在網站填個資嗎？", a: "不需要。付款會跳轉綠界，依其提示填寫必要欄位；本站不在站內蒐集敏感個資。" },
      { q: "我怕選錯本尊。", a: "先用『困境對位』選最貼近的一句；若仍不確定，從各尊『最推薦』方案開始，最不容易走偏。" },
    ],
    crossSell: [
      { title: "如果你是『家運不穩、總被意外拖走』", desc: "看大吉祥天女：增長資糧與護念。", to: "mahashri" },
      { title: "如果你是『決策迷惘、越改越亂』", desc: "看象神｜精靈主：清明智慧引路。", to: "ganapati" },
    ],
  },
  {
    key: "mahashri",
    route: "/deities/mahashri",
    legacyRoute: "/mahashri-devi",
    name: "大吉祥天女",
    subtitle: "增長資糧｜吉祥功德護念",
    promise: "護念受持正法者，令衣食資具不乏、家宅增祥；先把日子安住，再談增長。",
    heroImage: heroMahashri,
    oracle: {
      question: "財務匱乏、家運不穩，想把日子重新安住",
      title: "應感本尊：大吉祥天女",
      desc: "令衣食資具不乏、家宅增祥。",
    },
    plans: [
      { id: "m-490", name: "吉祥護念", price: 490, url: "https://cart.cashier.ecpay.com.tw/qp/z4ND" },
      { id: "m-980", name: "資糧增長｜推薦", price: 980, url: "https://cart.cashier.ecpay.com.tw/qp/z4PD", hot: true },
      { id: "m-1860", name: "供養護持", price: 1860, url: "https://cart.cashier.ecpay.com.tw/qp/z4Q7" },
      { id: "m-3680", name: "廣大圓滿", price: 3680, url: "https://cart.cashier.ecpay.com.tw/qp/z4V8" },
    ],
    sutraMerit: {
      title: "衣食資具不乏：把『匱乏』轉回『安住』的增益功德",
      quote: SUTRA_QUOTES.mahashriSupport,
      quoteSource: SUTRA_QUOTES.mahashriSupportSource,
      paragraphs: [
        "《金光明最勝王經》在〈大吉祥天女品〉把增益功德講得非常直接：若見四眾受持讀誦、為人解說此經者，大吉祥天女發願供養護念，令所須飲食、衣服、臥具、醫藥等資具圓滿無乏。這不是鼓勵貪求，而是把『生活得以安住』視為修行路上很現實的基礎。",
        "對很多人來說，家運不穩的痛點不是『賺不到』，而是『日子很難站穩』：突發支出、關係牽連、情緒耗損，讓資源一再被拖走。大吉祥天女路徑的功德重點，是先把底盤立起來——讓你有條件去累積福德資糧，而不是永遠停在補洞。",
        "因此這一尊的核心不是快，而是『增祥』：把家庭與日常的秩序重新排列，讓你能長期地行善、護持、回向；當生活不再被匱乏感追著跑，增長才有可能發生。",
      ],
    },
    testimonials: [
      {
        title: "家裡不再一直出『小意外』",
        body:
          "我本來是那種一有起色就會出事的人。做大吉祥天女後，我更像是先把家裡的節奏穩下來，支出也比較可控，心不再那麼慌。",
        by: "新北｜家庭主婦",
      },
      {
        title: "我不是求更多，是求『安住』",
        body:
          "頁面引用的經文讓我很有共鳴：衣食資具不乏。對我來說，能把日子過穩、把心安住，就是最大的增益。",
        by: "台南｜上班族",
      },
      {
        title: "最推薦方案讓我敢開始",
        body:
          "我很怕自己想太多拖延。『資糧增長｜推薦』把路徑設計得很穩，我照著做就好。",
        by: "台中｜設計師",
      },
    ],
    faq: [
      { q: "這是不是保證財富？", a: "不是。本站不做報酬保證；我們談的是護持、回向與讓生活安住的路徑。" },
      { q: "可以同時做兩尊嗎？", a: "可以，但建議先完成一條路徑，從最推薦開始再擴充，避免分散。" },
    ],
    crossSell: [
      { title: "如果你是『破財與匱乏焦慮』", desc: "看黃財神：洗滌匱乏印記，先穩財。", to: "yellow" },
      { title: "如果你是『決策常失準』", desc: "看象神｜精靈主：先清明再行動。", to: "ganapati" },
    ],
  },
  {
    key: "ganapati",
    route: "/deities/ganapati",
    legacyRoute: "/ganapati",
    name: "象神｜精靈主",
    subtitle: "智慧引路｜決策清明守護",
    promise: "掃除心智迷霧，注入清明智慧；先止損，再做一次正確的選擇。",
    heroImage: heroGanapati,
    oracle: {
      question: "投資決策迷惘，深怕損失",
      title: "應感本尊：象神｜精靈主",
      desc: "不是更多資訊，是更少迷霧。",
    },
    plans: [
      { id: "g-490", name: "清明啟動", price: 490, url: "https://cart.cashier.ecpay.com.tw/qp/z4R5" },
      { id: "g-980", name: "洞察決策｜推薦", price: 980, url: "https://cart.cashier.ecpay.com.tw/qp/z4S8", hot: true },
      { id: "g-1860", name: "資產守護", price: 1860, url: "https://cart.cashier.ecpay.com.tw/qp/z4T1" },
      { id: "g-3680", name: "全覺智慧", price: 3680, url: "https://cart.cashier.ecpay.com.tw/qp/z4U2" },
    ],
    sutraMerit: {
      title: "除橫與除苦：清明的第一步，是把『亂』停下來",
      quote: SUTRA_QUOTES.protection,
      quoteSource: SUTRA_QUOTES.protectionSource,
      paragraphs: [
        "《金光明最勝王經》在開頭就把『眾苦逼迫、惡夢煩惱、親友乖違、珍財散失』這些狀態列得很具體，並指出：當人被災橫與憂苦牽著走，最容易在混亂中做決策。經文以『讀誦聽受持』作為回到正位的入口，說能離諸災橫、眾苦無不除滅。",
        "象神｜精靈主路徑的核心功德，是把你從『資訊過載 + 情緒推動』拉回『可承擔的判斷』：先止損、先停下錯誤習慣，再做一次正確選擇。清明不是天生，而是一種能被建立的秩序。",
        "如果你正在反覆跳坑、越改越亂，這一尊不是要你更會分析，而是要你更少被牽動；當迷霧下降，你才看得見真正重要的下一步。",
      ],
    },
    testimonials: [
      {
        title: "我終於敢止損，不再硬拗",
        body:
          "以前我很怕承認錯誤，結果越扛越大。做象神｜精靈主後，我比較能停下來，把選項縮小，再做決定。",
        by: "台北｜投資新手",
      },
      {
        title: "我不再用情緒下判斷",
        body:
          "我最有感的是『清明』。不是馬上變厲害，而是我變得比較不慌，能看懂自己到底在怕什麼。",
        by: "新竹｜PM",
      },
      {
        title: "照著最推薦走，省下很多猶豫",
        body:
          "我以前會一直比較、一直拖延。這裡直接把最推薦放上面，我照做就好，反而更快進入行動。",
        by: "台中｜上班族",
      },
    ],
    faq: [
      { q: "這是不是投資建議？", a: "不是。本站不提供投資建議或保證；此路徑是宗教護持與回向的導流。" },
      { q: "我想很多、容易焦慮，適合嗎？", a: "很適合。這一尊的路徑就是先把『亂』停下來，再做選擇。" },
    ],
    crossSell: [
      { title: "如果你是『匱乏焦慮、衝動決策』", desc: "看黃財神：先穩財再增長。", to: "yellow" },
      { title: "如果你是『貴人少、人際耗損』", desc: "看作明佛母：把關係回到正位。", to: "kurukulla" },
    ],
  },
  {
    key: "kurukulla",
    route: "/deities/kurukulla",
    legacyRoute: "/kurukulla",
    name: "作明佛母",
    subtitle: "歡喜攝受｜增長魅力善緣",
    promise:
      "令你身心生歡喜、語氣更柔和、磁場更明亮；增長魅力與緣份，感召貴人與助力，讓雙方互動更順、情感更易靠近。",
    heroImage: heroKurukulla,
    oracle: {
      question: "想讓緣份更順、被真心喜歡",
      title: "應感本尊：作明佛母",
      desc: "先安住自己，對方才願意靠近。",
    },
    plans: [
      { id: "k-490", name: "緣起萌芽", price: 490, url: "https://cart.cashier.ecpay.com.tw/qp/z5a8" },
      { id: "k-980", name: "磁場攝受｜推薦", price: 980, url: "https://cart.cashier.ecpay.com.tw/qp/z5bF", hot: true },
      { id: "k-1860", name: "廣大懷愛", price: 1860, url: "https://cart.cashier.ecpay.com.tw/qp/z5c3" },
      { id: "k-3680", name: "威德權勢", price: 3680, url: "https://cart.cashier.ecpay.com.tw/qp/z5d7" },
    ],
    sutraMerit: {
      title: "歡喜與攝受：先讓心柔軟，緣份自然成",
      quote: SUTRA_QUOTES.protection,
      quoteSource: SUTRA_QUOTES.protectionSource,
      paragraphs: [
        "《金光明最勝王經》以『護念不離』形容一種被善意與秩序托住的狀態：當你先回到安住，心裡不再急著證明、急著抓住，關係就比較不會用衝突與拉扯開場。",
        "作明佛母的路徑重點，是把互動從『想控制結果』轉回『讓人心生歡喜』：語氣更柔、眼神更定、界線更清楚。當你不再用討好換安全感，魅力會以更乾淨的方式長出來。",
        "你要的緣份，不是把人拉住，而是讓雙方都走得順：該靠近的自然靠近、該放下的自然放下。當你能在關係裡保持慈心與尊重，善緣與助力才有機會穩穩落在你身上。",
      ],
    },
    testimonials: [
      {
        title: "對方開始願意好好說話，我們的互動變順了",
        body:
          "以前一開口就容易卡住或吵起來。做作明佛母後，我比較能先安住自己的情緒，講話也更柔和，對方反而願意聽，我們的關係開始走得比較順。",
        by: "新北｜上班族",
      },
      {
        title: "我變得更有魅力，是那種『讓人舒服』的魅力",
        body:
          "我以前很努力表現，結果只讓自己更緊。這條路徑讓我把狀態調回穩定，做事更從容、說話更有分寸，合作與邀約自然變多。",
        by: "台中｜自雇者",
      },
      {
        title: "緣份不再硬扯，該來的就來",
        body:
          "我曾經很執著想挽回，結果越用力越遠。做完之後，我把發心改成『願彼此情感順利、各得安好』，反而更能看清楚方向，也比較容易遇到善緣。",
        by: "高雄｜服務業",
      },
    ],
    faq: [
      {
        q: "適合用在感情與人際嗎？",
        a: "可以。這條路徑談的是『歡喜、魅力、緣份與正位互動』：讓你更能被喜歡、被尊重，也更容易讓雙方情感走得順。",
      },
      {
        q: "我想求和合或修復關係，怎麼發願比較如法？",
        a: "建議以清淨發心：願我與對方身心安穩、互動柔和、遠離傷害與敵意；若有善緣，令情感順利成就；若緣不具足，令彼此安好、各得其所。",
      },
    ],
    crossSell: [
      { title: "如果你是『決策常失準』", desc: "看象神｜精靈主：先清明再行動。", to: "ganapati" },
      { title: "如果你是『財務匱乏、家運不穩』", desc: "看大吉祥天女：增長資糧與護念。", to: "mahashri" },
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
    title: "一直賺不到錢怎麼辦？先把『匱乏印記』拆開看",
    summary:
      "這篇不是教你快速致富，而是把『為什麼越努力越卡』講清楚：你可能不是能力不夠，而是匱乏感在主導你的選擇。",
    ctaLabel: "我想走穩財路徑｜黃財神",
    deity: "yellow",
  },
  {
    slug: "做決策總是失準",
    title: "做決策總是失準：不是你笨，是你在迷霧裡硬走",
    summary:
      "決策失準通常不是一次，而是一連串小選擇累積。這篇把『清明』拆成可執行的步驟：先止損、再對位、最後做一次正確的決定。",
    ctaLabel: "我想要清明路徑｜象神",
    deity: "ganapati",
  },
  {
    slug: "貴人少小人多",
    title: "貴人少、小人多：先處理你的『磁場互動』",
    summary:
      "你要的不是討好所有人，而是讓關係回到正位：該遠離的遠離、該攝受的攝受。這篇用很人話的方式把『懷愛與攝受』講清楚。",
    ctaLabel: "我想走貴人路徑｜作明佛母",
    deity: "kurukulla",
  },
];
