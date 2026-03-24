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
  route: string; // 站內主路由 /deities/:key
  legacyRoute: string; // 舊路由
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
    title: "我終於不是亂找方法，而是先把路走對",
    body:
      "以前我一焦慮就想『再多做一點』，結果越做越亂。這裡把四條路徑分得很清楚：我照著先做一次後，最明顯的是心安很多，事情也比較能一件一件推進，不會一直在補救。",
    by: "台北｜自營工作者",
  },
  {
    title: "效果不是玄，是『我開始穩得住』",
    body:
      "我最有感的點是：做完之後，不會一直被緊張牽著走。該做的流程很明確，我只要按著步驟走；接下來我反而更有力氣把生活整理好，決定也比較不後悔。",
    by: "新竹｜工程師",
  },
  {
    title: "讀到經文引用，心就有地方可以安放",
    body:
      "我不需要那種誇張保證，我需要一個我看得懂、也做得到的選擇。這裡用《金光明最勝王經》的語言把護念、增益、除障講得很人話，讓我敢把這件事安排下來，心裡踏實很多。",
    by: "台中｜上班族",
  },
];

export const DEITIES: Deity[] = [
  {
    key: "yellow",
    route: "/deities/yellow",
    legacyRoute: "/yellow-dzambhala",
    name: "黃財神",
    subtitle: "穩財止漏｜洗滌匱乏印記",
    promise: "水供洗滌匱乏，讓你把財路走穩，不再被焦躁牽著走。",
    heroImage: heroYellow,
    oracle: {
      question: "努力工作但財運停滯",
      title: "應感本尊：黃財神",
      desc: "先穩財、先止漏，再談增長。",
    },
    plans: [
      {
        id: "y-490",
        name: "基礎共修",
        price: 490,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4W0",
        blurb: "給想先把『亂補救』停下來的人。用可承擔的方式先踏出第一步，讓焦躁慢慢退位。",
        feedback: "常見回饋：睡前不再一直算來算去，心比較能停下來。",
      },
      {
        id: "y-980",
        name: "專屬供品｜先從這張開始",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4XF",
        hot: true,
        badge: "多數人先選",
        blurb: "把穩財的『核心份量』補到位：止漏、穩心、穩節奏。適合卡很久、想快點回到正軌的人。",
        feedback: "明顯回饋：衝動花錢與『想翻本』的衝動大幅下降，決策更穩。",
      },
      {
        id: "y-1860",
        name: "獨立法座",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3",
        blurb: "需要更集中的護念與回向，把『破財狀況』收束、把財務節奏拉回來。",
        feedback: "強烈回饋：開始守得住錢，支出有界線，做事能延續。",
      },
      {
        id: "y-3680",
        name: "感恩大供",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Z5",
        blurb: "把願力與供養做到『更完整』的級別。適合想為家庭、事業做一次扎實安放的人。",
        feedback: "非常有感：忙亂明顯收束，財務與生活秩序更快站穩。",
      },
    ],
    sutraMerit: {
      title: "先護念、先除橫：穩財不是求快，而是把耗損停下來",
      quote: SUTRA_QUOTES.protection,
      quoteSource: SUTRA_QUOTES.protectionSource,
      paragraphs: [
        "《金光明最勝王經》把護念講得很務實：當你受持、聽聞、恭敬這部經王，經中以經威力比喻一種秩序回復——災橫與眾苦被止息，護法天眾常來擁衛。這種語言放到現代，就是：先把讓你反覆耗損的因素停下來，你的努力才會留下來。",
        "黃財神的穩財路徑，對應的不是一夜致富，而是洗滌匱乏印記：匱乏感會讓人急、怕、追，最後做出錯誤選擇。當心行稍微安住，決策就不再被焦慮綁架，財路才有機會穩定累積。",
        "所以這一尊的核心功德，是把你從一直衝、一直漏拉回來：先穩、先護、先止漏。當你願意用可承擔的方式完成護持，才談得上後續的增長與圓滿。",
      ],
    },
    testimonials: [
      {
        title: "我停止急著翻倍，先把破財停下來",
        body:
          "以前我一焦慮就會亂買、亂衝，像是在用錢安撫自己。做了黃財神路徑後，最明顯的是我能先停一下：支出跟決策節奏穩住了，錢也比較留得住。",
        by: "桃園｜自由業",
      },
      {
        title: "我不再拖延，因為路徑很清楚",
        body:
          "我最怕選錯所以一直卡著。這裡把先做什麼、後做什麼講得很清楚；我照著先完成一次後，心裡那種『終於有在處理』的踏實感很強。",
        by: "高雄｜店家",
      },
      {
        title: "穩的不是外面，是我自己的節奏",
        body:
          "我沒有期待立刻變有錢，但我確實比較不慌了。焦慮少了，我做事不再用衝動下判斷，財務也開始出現慢慢累積的感覺。",
        by: "台中｜上班族",
      },
    ],
    faq: [
      {
        q: "我需要在網站填個資嗎？",
        a: "不用。你會在綠界頁面依提示填寫必要欄位；本站不在站內蒐集敏感個資。",
      },
      {
        q: "我怕選錯本尊。",
        a: "先用困境對位選最貼近的一句；若仍不確定，就先從本尊頁標示的『先從這張開始』方案開始，最不容易走偏。",
      },
    ],
    crossSell: [
      { title: "如果你是家運不穩、總被意外拖走", desc: "看大吉祥天女：讓日常更安住、資糧更續航。", to: "mahashri" },
      { title: "如果你是決策迷霧、越改越亂", desc: "看象神：先把混亂收束，再做一次清明選擇。", to: "ganapati" },
    ],
  },
  {
    key: "mahashri",
    route: "/deities/mahashri",
    legacyRoute: "/mahashri-devi",
    name: "大吉祥天女",
    subtitle: "守財家運｜資糧增祥護念",
    promise: "護念受持正法者，令衣食資具不乏、家宅增祥；先把日子安住，再談增長。",
    heroImage: heroMahashri,
    oracle: {
      question: "財務匱乏、家運不穩，想把日子重新安住",
      title: "應感本尊：大吉祥天女",
      desc: "令衣食資具不乏、家宅增祥。",
    },
    plans: [
      {
        id: "m-490",
        name: "吉祥護念",
        price: 490,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4ND",
        blurb: "適合想先把家庭與日常的節奏『鬆一點』的人：先護念、先安住，再往前走。",
        feedback: "常見回饋：小意外變少、情緒不那麼緊繃，家裡比較好說話。",
      },
      {
        id: "m-980",
        name: "資糧增長｜核心路線",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4PD",
        hot: true,
        badge: "最常被選",
        blurb: "把增祥的『重點份量』做到位：衣食資具不乏的願，落回你的生活秩序。",
        feedback: "明顯回饋：突發支出與關係耗損開始可控，日子更站得住。",
      },
      {
        id: "m-1860",
        name: "供養護持",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Q7",
        blurb: "想為家庭、事業做更扎實的護持：把底盤立起來，讓資糧能累積。",
        feedback: "強烈回饋：生活秩序快速回來，能穩穩推進長期計畫。",
      },
      {
        id: "m-3680",
        name: "廣大圓滿",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4V8",
        blurb: "以更完整的供養與回向，護念家宅與眷屬的整體安穩。",
        feedback: "非常有感：家運的波動明顯下降，心也更能安住。",
      },
    ],
    sutraMerit: {
      title: "衣食資具不乏：把匱乏轉回安住的增益功德",
      quote: SUTRA_QUOTES.mahashriSupport,
      quoteSource: SUTRA_QUOTES.mahashriSupportSource,
      paragraphs: [
        "《金光明最勝王經》在〈大吉祥天女品〉把增益功德講得非常直接：若見四眾受持讀誦、為人解說此經者，大吉祥天女發願供養護念，令所須飲食、衣服、臥具、醫藥等資具圓滿無乏。這不是鼓勵貪求，而是把生活得以安住視為修行路上很現實的基礎。",
        "對很多人來說，家運不穩的痛點不是賺不到，而是日子很難站穩：突發支出、關係牽連、情緒耗損，讓資源一再被拖走。大吉祥天女路徑的功德重點，是先把底盤立起來——讓你有條件去累積福德資糧，而不是永遠停在補洞。",
        "因此這一尊的核心不是快，而是增祥：把家庭與日常的秩序重新排列，讓你能長期地行善、護持、回向；當生活不再被匱乏感追著跑，增長才有可能發生。",
      ],
    },
    testimonials: [
      {
        title: "家裡不再一直出小意外",
        body:
          "我本來是那種一有起色就會出狀況的人：電器壞、孩子生病、臨時支出一直來。做完之後，我先把家裡節奏穩下來；不是神奇停損，而是我變得比較不慌，能一項一項處理，支出也更可控。",
        by: "新北｜家庭主婦",
      },
      {
        title: "我不是求更多，是求安住",
        body:
          "衣食資具不乏這句讓我很有共鳴。最明顯的改變是：那種『隨時會缺』的恐慌感慢慢鬆開，日子比較站得住。",
        by: "台南｜上班族",
      },
      {
        title: "先把路徑走完，心就踏實了",
        body:
          "我很容易想太多拖延。照著步驟做完一次後，我反而比較能回去把生活整理好，而不是一直卡在焦慮裡。",
        by: "台中｜設計師",
      },
    ],
    faq: [
      {
        q: "這是不是保證財富？",
        a: "不是。本站不做報酬保證；我們談的是護持、回向與讓生活安住的路徑。",
      },
      {
        q: "可以同時做兩尊嗎？",
        a: "可以，但建議先把一條路走完，再往外加；比較不會分散。",
      },
    ],
    crossSell: [
      { title: "如果你是破財與匱乏焦慮", desc: "看黃財神：先止漏、再把財路走穩。", to: "yellow" },
      { title: "如果你是決策常失準", desc: "看象神：把迷霧降下來，才看得見下一步。", to: "ganapati" },
    ],
  },
  {
    key: "ganapati",
    route: "/deities/ganapati",
    legacyRoute: "/ganapati",
    name: "象神｜精靈主",
    subtitle: "清明決策｜智慧引路守護",
    promise: "掃除心智迷霧，注入清明智慧；先止損，再做一次正確的選擇。",
    heroImage: heroGanapati,
    oracle: {
      question: "做決策總是失準，怕一錯再錯",
      title: "應感本尊：象神｜精靈主",
      desc: "不是更多資訊，是更少迷霧。",
    },
    plans: [
      {
        id: "g-490",
        name: "清明啟動",
        price: 490,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4R5",
        blurb: "先把腦內噪音降下來：讓你不再被情緒推著選，先回到可承擔的判斷。",
        feedback: "常見回饋：猶豫變少，能把選項縮小，先做一個小而對的決定。",
      },
      {
        id: "g-980",
        name: "洞察決策｜關鍵一檔",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4S8",
        hot: true,
        badge: "最容易起效",
        blurb: "把止損與洞察做成一條乾淨路徑：先停、再看清、再動。適合一直卡關的人。",
        feedback: "明顯回饋：衝動進出下降，判斷更乾淨，敢止損也敢放下。",
      },
      {
        id: "g-1860",
        name: "資產守護",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4T1",
        blurb: "給正在承受壓力的人：把混亂收束，先守住現金流與界線，再談下一步。",
        feedback: "強烈回饋：不再硬拗，節奏回來，錯誤決策的連鎖反應明顯減少。",
      },
      {
        id: "g-3680",
        name: "全覺智慧",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4U2",
        blurb: "把願力與護持做到更完整：讓你在關鍵關口更穩、更清明。",
        feedback: "非常有感：心智迷霧快速下降，做決定更果斷，後悔感顯著減少。",
      },
    ],
    sutraMerit: {
      title: "除橫與除苦：清明的第一步，是把亂停下來",
      quote: SUTRA_QUOTES.protection,
      quoteSource: SUTRA_QUOTES.protectionSource,
      paragraphs: [
        "《金光明最勝王經》在開頭就把眾苦逼迫、惡夢煩惱、親友乖違、珍財散失等狀態列得很具體，並指出：當人被災橫與憂苦牽著走，最容易在混亂中做決策。經文以讀誦聽受持作為回到正位的入口，說能離諸災橫、眾苦無不除滅。",
        "象神｜精靈主路徑的核心功德，是把你從資訊過載加情緒推動拉回可承擔的判斷：先止損、先停下錯誤習慣，再做一次正確選擇。清明不是天生，而是一種能被建立的秩序。",
        "如果你正在反覆跳坑、越改越亂，這一尊不是要你更會分析，而是要你更少被牽動；當迷霧下降，你才看得見真正重要的下一步。",
      ],
    },
    testimonials: [
      {
        title: "我終於敢止損，不再硬拗",
        body:
          "以前我很怕承認錯誤，結果越扛越大。做完之後我比較能停一下：先把現金流跟部位整理清楚，再把選項縮小做決定，那種『一直想翻本』的衝動明顯降下來。",
        by: "台北｜上班族",
      },
      {
        title: "我不再用情緒下判斷",
        body:
          "最有感的是『清明』。不是突然變厲害，而是我變得比較不慌：當我又想衝進去時，會先看見自己在怕什麼，然後停住。",
        by: "新竹｜PM",
      },
      {
        title: "做完一次後，我反而更能把功課做對",
        body:
          "以前我會一直看資訊、一直比較，最後什麼都沒做。照著路徑先完成一次後，我更能回去做功課、整理節奏，而不是被焦慮推著跑。",
        by: "台中｜上班族",
      },
    ],
    faq: [
      {
        q: "這是不是投資建議？",
        a: "不是。本站不提供投資建議或任何報酬承諾；此路徑屬宗教護持與回向。",
      },
      {
        q: "我想很多、容易焦慮，適合嗎？",
        a: "很適合。這條路徑的第一步就是先把亂停下來，再做選擇。",
      },
    ],
    crossSell: [
      { title: "如果你是匱乏焦慮、衝動決策", desc: "看黃財神：先把『急』洗掉，才守得住。", to: "yellow" },
      { title: "如果你是貴人少、人際耗損", desc: "看作明佛母：把互動回到正位，善緣才會進來。", to: "kurukulla" },
    ],
  },
  {
    key: "kurukulla",
    route: "/deities/kurukulla",
    legacyRoute: "/kurukulla",
    name: "作明佛母",
    subtitle: "貴人善緣｜歡喜攝受磁場",
    promise: "令你身心生歡喜、語氣更柔和、磁場更明亮；感召貴人與助力，讓互動更順、更容易靠近。",
    heroImage: heroKurukulla,
    oracle: {
      question: "想讓緣分更順、被真心喜歡",
      title: "應感本尊：作明佛母",
      desc: "先安住自己，對方才願意靠近。",
    },
    plans: [
      {
        id: "k-490",
        name: "緣起萌芽",
        price: 490,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5a8",
        blurb: "先把你的狀態調回『好相處』：語氣柔一點、眼神定一點，關係才有空間。",
        feedback: "常見回饋：對方比較願意回話，互動沒那麼卡。",
      },
      {
        id: "k-980",
        name: "磁場攝受｜首選路徑",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5bF",
        hot: true,
        badge: "最容易被感覺到",
        blurb: "把歡喜與攝受做到位：你會更有分寸、更有吸引力，該靠近的自然靠近。",
        feedback: "明顯回饋：溝通變順、邀約變自然，貴人與助力更常出現。",
      },
      {
        id: "k-1860",
        name: "廣大懷愛",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5c3",
        blurb: "給想修復關係、也想守住界線的人：讓雙方走得順，而不是硬扯。",
        feedback: "強烈回饋：衝突快速降溫，互動回到尊重與柔和。",
      },
      {
        id: "k-3680",
        name: "威德權勢",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5d7",
        blurb: "把攝受與威德做到更完整：適合在人際、合作、談判上需要穩場與助力的人。",
        feedback: "非常有感：氣場更穩、說話更有分量，合作與資源更容易落定。",
      },
    ],
    sutraMerit: {
      title: "歡喜與攝受：先讓心柔軟，緣分自然成",
      quote: SUTRA_QUOTES.protection,
      quoteSource: SUTRA_QUOTES.protectionSource,
      paragraphs: [
        "《金光明最勝王經》以護念不離形容一種被善意與秩序托住的狀態：當你先回到安住，心裡不再急著證明、急著抓住，關係就比較不會用衝突與拉扯開場。",
        "作明佛母的路徑重點，是把互動從想控制結果轉回讓人心生歡喜：語氣更柔、眼神更定、界線更清楚。當你不再用討好換安全感，魅力會以更乾淨的方式長出來。",
        "你要的緣分，不是把人拉住，而是讓雙方都走得順：該靠近的自然靠近、該放下的自然放下。當你能在關係裡保持慈心與尊重，善緣與助力才有機會穩穩落在你身上。",
      ],
    },
    testimonials: [
      {
        title: "對方開始願意好好說話，互動變順",
        body:
          "以前一開口就容易卡住或吵起來。做完之後，我先練習把情緒安住再開口：語氣更柔、界線也更清楚。一兩週後，對方真的比較願意聽，很多事不需要用力就能談。",
        by: "新北｜上班族",
      },
      {
        title: "我有魅力了，是那種讓人舒服的魅力",
        body:
          "我以前很努力表現，結果只讓自己更緊。這條路徑讓我把狀態調回穩定：做事更從容、說話更有分寸。合作溝通變順，邀約也比以前更自然地出現。",
        by: "台中｜自雇者",
      },
      {
        title: "緣分不再硬扯，該來的就來",
        body:
          "我曾經很執著想挽回，結果越用力越遠。做完之後，我把發心改成願彼此情感順利、各得安好，整個人反而鬆開了：更能看清楚要不要繼續，也更容易遇到真正的善緣。",
        by: "高雄｜服務業",
      },
    ],
    faq: [
      {
        q: "適合用在感情與人際嗎？",
        a: "可以。這條路徑談的是歡喜、魅力、緣分與正位互動：讓你更容易被喜歡、被尊重，也讓雙方走得更順。",
      },
      {
        q: "我想修復關係，怎麼發願比較如法？",
        a: "建議以清淨發心：願我與對方身心安穩、互動柔和、遠離傷害與敵意；若有善緣，令情感順利成就；若緣不具足，令彼此安好、各得其所。",
      },
    ],
    crossSell: [
      { title: "如果你是決策常失準", desc: "看象神：先清明，才知道要靠近或放下。", to: "ganapati" },
      { title: "如果你是財務匱乏、家運不穩", desc: "看大吉祥天女：先把日常安住，福德才續得起來。", to: "mahashri" },
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
    title: "一直賺不到錢怎麼辦？先把匱乏印記拆開看",
    summary:
      "這篇不是教你快速致富，而是把為什麼越努力越卡講清楚：你可能不是能力不夠，而是匱乏感在主導你的選擇。",
    ctaLabel: "帶我去穩財路徑｜黃財神",
    deity: "yellow",
  },
  {
    slug: "做決策總是失準",
    title: "做決策總是失準：不是你笨，是你在迷霧裡硬走",
    summary:
      "決策失準通常不是一次，而是一連串小選擇累積。這篇把清明拆成可執行的步驟：先止損、再對位、最後做一次更乾淨的決定。",
    ctaLabel: "帶我去清明路徑｜象神",
    deity: "ganapati",
  },
  {
    slug: "貴人少小人多",
    title: "貴人少、小人多：先處理你的磁場互動",
    summary:
      "你要的不是討好所有人，而是讓關係回到正位：該遠離的遠離、該攝受的攝受。這篇用很人話的方式把懷愛與攝受講清楚。",
    ctaLabel: "帶我去貴人路徑｜作明佛母",
    deity: "kurukulla",
  },
];
