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
  wealthStory: {
    title: string;
    source: string;
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
    title: "我終於停止亂補救：先把路走對",
    body:
      "以前我越缺越急，急了就亂找方法，最後連該做的事都做不完。這裡把四條路徑拆得很乾淨：我照著先完成一次護持後，最明顯的是『心先安下來』——事情才開始一件一件推進。現在回頭看，我覺得你也會是下一個回來說：我終於走對路的人。",
    by: "台北｜自營工作者",
  },
  {
    title: "最有感的不是奇蹟，是我終於穩得住",
    body:
      "我不是來賭『立刻變有錢』，我是來把失控拉回來。做完之後，那種一直被緊張牽著走的感覺明顯下降：流程很明確，我只要照著做；接下來我反而更有力氣把帳務、工作、關係整理好。你現在也許只是差這一次『先安排好』的行動。",
    by: "新竹｜工程師",
  },
  {
    title: "有經典做背書：我才敢把這件事定下來",
    body:
      "我不需要誇張保證，我需要『我信得過的依據』。這裡把《金光明最勝王經》的護念、增益、除障講得很人話：不是喊口號，而是告訴你接下來要怎麼做。當我把護持安排下來的那一刻，心就有地方安放——也更願意把財佈施做起來，讓福德真的續得上。",
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
        blurb: "先點一盞小燈：不是求你立刻翻盤，而是先把『亂補救』按下暫停。用可承擔的方式先完成一次，讓匱乏感先退後一步。",
        feedback: "常見回饋：睡前不再反覆盤算，心穩才能接富，隔天更做得出『小而對』的決定。",
      },
      {
        id: "y-980",
        name: "專屬供品｜先從這張開始",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4XF",
        hot: true,
        badge: "多數人先選",
        blurb: "消除貧窮與資財匱乏的障礙、一直被焦慮推著衝的人——先回到正軌，再談增長。",
        feedback: "明顯回饋：停止衝動花錢／意外花的錢也大幅下降，能守住現金流，也更敢把該做的事做完。",
      },
      {
        id: "y-1860",
        name: "獨立法座",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3",
        blurb: "把財庫『收口』：更集中的護念與回向，專注財富的連鎖反應，讓你的財務節奏拉回能延續的軌道。",
        feedback: "強烈回饋：守得住錢、新財源出現，穩當且持續增長的收入，做事更能一路做完而不是半途換方向。",
      },
      {
        id: "y-3680",
        name: "招財大供",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Z5",
        blurb: "把願力做成一場『完整供養』：適合想替家庭／事業做一次扎實安放的人。你不是只求一筆錢，你是在替自己的福德與秩序『立帳』。",
        feedback: "非常有感：財務與生活秩序更快站穩；大幅增長物質財富的明顯擴張感。",
      },
    ],
    sutraMerit: {
      title: "先護念、先除橫：穩財不是求快，而是把耗損停下來",
      quote: SUTRA_QUOTES.protection,
      quoteSource: SUTRA_QUOTES.protectionSource,
      paragraphs: [
        "《金光明最勝王經》把護念講得很務實：當你受持、聽聞、恭敬這部經王，經中以經威力比喻一種秩序回復——災橫與眾苦被止息，護法天眾常來擁衛。這種語言放到現代，就是：先把讓你反覆耗損的因素停下來，你的努力才會留下來。",
        "黃財神的穩財路徑，對應的不是一夜致富，而是洗滌匱乏印記：匱乏感會讓人急、怕、追，最後做出錯誤選擇。當心行稍微安住，決策就不再被焦慮綁架，財路才有機會穩定累積。",
        "所以這一尊的核心功德，先穩、先護、先止漏。當你願意用可承擔的方式完成護持，才談得上後續的增長與圓滿。",
      ],
    },
    wealthStory: {
      title: "經典故事：以身護佛，受佛甘露灌頂而誓施財",
      source:
        "Philippine Nedo Kagyu Bodhi Dharma Foundation：Dzambhala 故事（佛陀教說大般若時，贊巴拉護佛受傷，佛以白色甘露觸頂祝福，並囑未來以水供召請而施二種財：資財與法財）",
      paragraphs: [
        "相傳佛陀於靈鷲山宣說大般若時，提婆達多以巨石欲害佛。贊巴拉見師有難，未及思量自身安危，即以身擋石——碎石飛迸而傷其頂。",
        "佛陀以慈悲智的白色甘露觸其傷處，令其清淨障垢、復得安穩。並囑：未來若佛弟子以水供灌其頂而召請，當施與二種財富——能安身的資財，以及能轉命的法財。",
        "所以黃財神的『水供』不是迷信操作，而是一種象徵：以清淨的供養換回清淨的心與節奏——先止漏、先止急，財路才真正留得住。",
      ],
    },
    testimonials: [
      {
        title: "我停止急著翻倍，先把破財停下來",
        body:
          "以前我一焦慮就亂買、亂衝，像拿錢去止痛，結果越止越痛。做了黃財神路徑後，我最明顯的改變是『會先停』：支出跟決策節奏穩住了，錢才開始留得住。等你也把這一步走完，你會懂那種——終於不再被匱乏牽著跑的感覺。",
        by: "桃園｜自由業",
      },
      {
        title: "明顯變忙碌了，但戶頭笑了",
        body:
          "在公司面臨轉型瓶頸與資金斷鍊的危機時刻，開始每日虔誠持誦黃財神心咒並進行水供。隨後在短短一個月內，原本斷聯已久的舊客戶主動找上門提供大型專案，甚至吸引了意外的投資人洽談。",
        by: "高雄｜店家",
      },
      {
        title: "穩的不是外面，是我自己的節奏",
        body:
          "我沒有期待立刻暴富，但我確實比較不慌了。很快財務開始出現慢慢累積的感覺。最重要的是：我終於敢把錢用在該用的地方——供養與佈施做起來，心也更穩。",
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
    subtitle: "運財強運｜資糧增祥護念",
    promise: "護念受持正法者，令衣食資具不乏、家宅增祥；先安住，再增長。",
    heroImage: heroMahashri,
    oracle: {
      question: "財務匱乏、行運不穩，想把日子重新安住",
      title: "應感本尊：大吉祥天女",
      desc: "令衣食資具不乏、家宅增祥。",
    },
    plans: [
      {
        id: "m-490",
        name: "吉祥護念",
        price: 490,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4ND",
        blurb: "先把家宅的氣『收回來』：適合想讓日常先鬆一口氣的人。先護念、先安住——你站得住，家就跟著站得住。",
        feedback: "常見回饋：小意外與突發狀況變少，情緒不那麼緊繃，家裡比較能好好說話。",
      },
      {
        id: "m-980",
        name: "資糧增長｜核心路線",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4PD",
        hot: true,
        badge: "最常被選",
        blurb: "把『衣食資具不乏』落回生活：不只是橫財，還想把增祥的重點份量做到位——讓日子先站穩，資糧續得起來。",
        feedback: "明顯回饋：突發支出與關係耗損開始可控，生活秩序回來，做事更能延續。",
      },
      {
        id: "m-1860",
        name: "供養護持",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Q7",
        blurb: "把底盤『立起來』：為家庭／事業做更扎實的護持，讓黃金遍地、蓮花盛開的資糧能累積。",
        feedback: "強烈回饋：生活秩序快速回來，長期計畫更推得動；也更願意做財佈施，因為心不再怕到抓緊不放。",
      },
      {
        id: "m-3680",
        name: "廣福圓滿",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4V8",
        blurb: "把供養與回向做到『圓滿級別』：護念家宅與眷屬的整體安穩。一種財富吸引力的優雅展現。",
        feedback: "非常有感：家運波動明顯下降，心能安住；無缺的幸福感，資源才留得住、推得動。",
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
    wealthStory: {
      title: "經典故事：天女立誓護持持經者，並教『增長財物』之法",
      source:
        "《金光明最勝王經》〈大吉祥天女品〉與〈大吉祥天女增長財物品〉（卷八）",
      paragraphs: [
        "經中，大吉祥天女於佛前起身頂禮，發願：若見比丘、比丘尼、優婆塞、優婆夷受持讀誦、為人解說此經者，當以飲食、衣服、臥具、醫藥等『所須資具』令其圓滿無乏。",
        "接著在〈增長財物品〉更直白：若有人欲求五穀增多、倉庫盈溢，應以淨室、供養、稱名等如法行持而請召；天女亦提醒：既得資財，當以上分供養三寶，並『時時給濟貧乏，不應慳惜，獨為己身』——財佈施能讓福德續得起來。",
        "所以守財不是只求『更多』，而是先把家宅與日常安住：當你願意把一部分拿去做清淨供養與佈施，匱乏的迴圈才會鬆動，家運才有機會重新排列。",
      ],
    },
    testimonials: [
      {
        title: "錢包的洞就這樣消失了",
        body:
          "我本來是那種一有起色就會出狀況的人：電器壞、孩子生病、臨時支出一直來。做完之後，我先把家裡節奏穩下來；不是什麼神奇停損，而是我變得比較不慌，能一項一項處理，支出也更可控。等你把這條路先走完，你會發現：家運穩了，你才有餘裕談增長。",
        by: "新北｜家庭主婦",
      },
      {
        title: "這次真的薯條加大",
        body:
          "『衣食資具不乏』這句讓我很有共鳴。最明顯的改變是：那種『隨時會缺』的恐慌感沒了，開始有錢投資自己。我也開始敢做財佈施——因為當你把福德續出去，匱乏感才真的會退。",
        by: "台南｜上班族",
      },
      {
        title: "先把路走對，錢包就踏實了",
        body:
          "我很容易想太多拖延。照著步驟做完一次護持後，奧客大幅減少，時間不是一直卡在焦慮裡。你現在如果也在猶豫，我想先說：希望看到這裡的人就是下一個回來說『這次穩了』的人。",
        by: "台中｜設計師",
      },
    ],
    faq: [
      {
        q: "這是不是保證財富？",
        a: "不是。本站不做報酬保證；我們談的是護持、財富迴向與讓生活安住的路徑。",
      },
      {
        q: "可以同時做兩尊嗎？",
        a: "可以，但建議寧可先做圓滿，再往外加；比較不會分散。",
      },
    ],
    crossSell: [
      { title: "如果你是求正財、橫財、事業財", desc: "看黃財神：先止漏、再把財路走穩。", to: "yellow" },
      { title: "如果你是決策常失準", desc: "看象神：把迷霧降下來，敏銳的見下一步。", to: "ganapati" },
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
        blurb: "先把腦內噪音『關小聲』：讓你不再被情緒推著選，先回到可承擔的判斷。這一步，是止損的開端。",
        feedback: "常見回饋：猶豫變少，能把選項縮小，先做一個小而對的決定——不再一直卡在比較與恐慌。",
      },
      {
        id: "g-980",
        name: "洞察決策｜關鍵一檔",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4S8",
        hot: true,
        badge: "最容易起效",
        blurb: "把止損與洞察做成一條『乾淨路徑』：先停、再看清、再動。適合一直卡關、越改越亂的人——先清明，才有下一步。",
        feedback: "明顯回饋：衝動行動下降，判斷更敏銳；敢止損也敢加碼，後悔感明顯變少。",
      },
      {
        id: "g-1860",
        name: "策略資產分配",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4T1",
        blurb: "給正在大方向投資理財的人：把混亂『收束成一條線』，先開竅後執行。",
        feedback: "強烈回饋：迅速決策的連鎖反應明顯，心也更穩，像是背後有靠山的底氣。",
      },
      {
        id: "g-3680",
        name: "全覺智慧",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4U2",
        blurb: "把願力與護持做到『完整』：讓你在關鍵關口更穩、更清明。適合你已經受夠反覆試錯、反覆後悔。",
        feedback: "非常有感：心智迷霧快速下降，做決定更果斷；若您求權力、地位、名聲就是要找象神精靈主。",
      },
    ],
    sutraMerit: {
      title: "除橫與除苦：清明的第一步，是把亂停下來",
      quote: SUTRA_QUOTES.protection,
      quoteSource: SUTRA_QUOTES.protectionSource,
      paragraphs: [
        "《在古印度的世界觀中，「Gana」是指一群隸屬於濕婆神（Shiva，大自在天）的部眾。這群「精靈」性格像小孩子一樣，情緒化、愛搗蛋、敢愛敢恨，但一旦開心就會瘋狂地幫助你。而象神正是這群精靈的統帥。",
      ],
    },
    wealthStory: {
      title: "經典脈絡：觀音化現象神——先降伏障礙，再轉為護持",
      source:
        "Himalayan Art Resources｜Buddhist Deity: Ganapati Religious Context（提及：密續脈絡中，佛教象神多被視為觀世音之化現；Maharakta 傳承敘事描述觀世音降伏外道象頭神而取其象首）",
      paragraphs: [
        "在藏密系統裡，『象神』不只是民間求財的符號，更常被放進『除障／成事』的敘事：先把會作祟、會攪局的障礙降伏，才談得上資源與成果。",
        "Himalayan Art Resources 提到：在 Maharakta 的傳承敘事中，觀世音菩薩降伏外道象頭神，並取其象首置於自身，示現象神之相。這個故事的重點不是暴力，而是象徵：把障礙的力量『轉用』成護持的力量。",
        "祂理解人類有慾望、有貪嗔痴，祂不排斥這些，反而願意先滿足你的願望，再引導你入佛門。",
      ],
    },
    testimonials: [
      {
        title: "我終於敢止損，不再硬拗",
        body:
          "以前我很怕承認錯誤，結果越扛越大。做完之後我比較能『停一下』：先把現金流跟界線整理清楚，再把選項縮小做決定，股票中那種『一直想翻本』的衝動明顯降下來。你現在如果也在硬扛，我真心建議：先把亂停下來，你會少走很多冤枉路。",
        by: "台北｜上班族",
      },
      {
        title: "趕上正確的波段",
        body:
          "最有感的是『清明』。不是突然變厲害，而是我就是趕上記憶體上漲這波，是我開始變好的起點。",
        by: "新竹｜PM",
      },
      {
        title: "終於不再是被收割的韭菜",
        body:
          "投資成功在於「預判」。象神長長的鼻子代表「極其靈敏的趨勢嗅覺」。修持象神後，投資者常回饋：原本雜亂無章的新聞，突然能連成一條邏輯線，讓你精準嗅到下一個風口（產業趨勢）。這種「開竅」後的決策，比看任何技術指標都更精準。",
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
      { title: "如果你是想催旺財源、增長資糧", desc: "看黃財神：先把『急』洗掉，才守得住。", to: "yellow" },
      { title: "如果你是追求關係、想停止人際耗損", desc: "看作明佛母：把互動回到正位，善緣才會進來。", to: "kurukulla" },
    ],
  },
  {
    key: "kurukulla",
    route: "/deities/kurukulla",
    legacyRoute: "/kurukulla",
    name: "作明佛母",
    subtitle: "貴人善緣｜歡喜攝受磁場",
    promise: "令你身心生歡喜、語氣更柔和、磁場更明亮；感召貴人與情緣，讓互動更順、更容易靠近。",
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
        blurb: "先把你的狀態調回『歡喜相』：心柔一點、眼神定一點、界線清一點——關係才有空間。",
        feedback: "常見回饋：對方比較願意回話，互動沒那麼卡；你也更不會一急就說錯話。",
      },
      {
        id: "k-980",
        name: "磁場攝受｜首選路徑",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5bF",
        hot: true,
        badge: "最容易被感覺到",
        blurb: "把歡喜與攝受做到位：你會更有分寸、更有吸引力——該靠近的自然靠近，該合作的更容易成。",
        feedback: "明顯回饋：溝通變順、邀約變自然；貴人與助力更常出現，資源更容易落定。",
      },
      {
        id: "k-1860",
        name: "廣大懷愛",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5c3",
        blurb: "給想修復（開拓）關係、也想守住界線的人：讓雙方走得順，而不是硬扯。先讓『磁場擴張』，緣分才有路。",
        feedback: "強烈回饋：衝突快速降溫，貴人顯現；斬斷孽緣，魅力放射。",
      },
      {
        id: "k-3680",
        name: "威德柔勢",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5d7",
        blurb: "把攝受與威德做到『更完整』：適合在人際、合作、談判上需要穩場與助力的人。讓局面站得住。",
        feedback: "非常有感：氣場更穩、說話更有分量；讓你的魅力與關係成為最強大的資產。",
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
    wealthStory: {
      title: "經典概念：『攝受』不是控制，是讓因緣回到正位",
      source:
        "Lotsawa House｜Introduction to Kurukullā（Kurukullā 為蓮華部阿彌陀佛家族，象徵『攝受／調伏』之佛行事業，能令眾生、因緣與自心趨於和合於法）",
      paragraphs: [
        "Lotsawa House 的介紹指出：作明佛母（Kurukullā）象徵密續四事業之一的『攝受／調伏』（magnetizing, vaśīkaraṇa）——其目的不是操控他人，而是把眾生、因緣，甚至自己的心，攝入與正法相應的方向。",
        "她以弓箭、索、鉤等象徵『招引』：招引善緣、招引助力、招引自己的心回到慈悲與智慧的秩序裡。當你不再用焦慮去抓人，反而會變得讓人願意靠近。",
        "因此這條路徑談的不是討好，而是正位：語氣柔、界線清、心不急——你要的貴人與資源，才有地方落腳。",
      ],
    },
    testimonials: [
      {
        title: "這不是求偶，而是「精準的能量狙擊」",
        body:
          "我在一次無聊的跨產業論壇上，竟然意外搭上了一位邏輯滿分、審美在線的工程師。最扯的是，他完全符合我心中那組「高價值用戶」的所有標籤。這不是亂投，這是佛母幫我直接「Lock 住」了對的人。",
        by: "新北｜廣告PM",
      },
      {
        title: "我有魅力了，是那種讓人舒服的魅力",
        body:
          "發現客戶看我的眼神從「懷疑」變成了「信任」，業績隨之爆發。那種『有人願意來幫你一把』的感覺，是真的。",
        by: "台中｜自雇者",
      },
      {
        title: "緣火能取暖（增進感情），也能焚燒（斷除障礙）",
        body:
          "我曾經很執著想挽回，結果越用力越遠。做完之後，我把發心改成願彼此情感順利、各得安好，整個人反而鬆開了：更能看清楚要不要繼續，也更容易遇到真正的善緣。等你也走完一次，你會懂：你不是在求別人回來，你是在讓自己的福德與磁場『回來』。",
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
