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
    title: "真的謝謝…我終於睡得著、錢也留得住",
    body:
      "我以前每天都在算帳、怕卡費、怕臨時破財，越怕越亂。做完護持那一週，最先變的是『心』：晚上不再腦袋停不下來，睡眠回來了。再來才是現實：莫名其妙的開支少了，該收的款也開始順，整個人像被扶正。謝謝這份如法的安排，讓我不用再用恐懼做決定。",
    by: "台北｜自營接案",
  },
  {
    title: "工作有起色：客戶回頭、案子變好談",
    body:
      "我不是求奇蹟，我只是想把日子拉回正軌。護持後我很明顯『心比較定』，講話不急、談合作更有底氣，客戶也比較願意配合。原本拖很久的案子突然動起來，還多了一個介紹。感恩這個法流，像把我的能量場重新整理過，努力終於接得上結果。",
    by: "新竹｜上班族／兼職副業",
  },
  {
    title: "家裡少吵、少破財：那種『一直漏』的感覺停了",
    body:
      "我們家之前就是一直出狀況：東壞西壞、醫藥費、車子修、情緒也很緊繃。護持後不是馬上發大財，但很神奇的是『亂』慢慢收起來：家裡氣氛變和，意外支出減少，存款終於有累積。真的很感恩，這種接地氣的改善，才是我最想要的利益。",
    by: "台中｜家庭／小生意",
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
        blurb: "【入門｜先止亂】「止息焦慮」之初階儀軌。先把心穩住、把慌止住，讓你不再用恐懼做決定，從今天起少走冤枉路、少漏財。",
        feedback: "常見回饋：晚上不再一直算錢、一直怕；睡得著、心變定，隔天做事效率跟著回來。",
      },
      {
        id: "y-980",
        name: "洗滌業垢｜深契核心",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4XF",
        hot: true,
        badge: "多數感應之選",
        blurb: "【核心｜強力止漏】針對「習慣性漏財／守不住」做強力調伏。把漏口先補起來：少被拖累、少被騙、少莫名其妙破財，讓錢開始『留下來』。",
        feedback: "強烈回饋：卡住的款項動了、欠款開始回收；花錢邊界變清楚，不再被人情壓力把財氣拖走。",
      },
      {
        id: "y-1860",
        name: "資糧增益",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3",
        blurb: "【進階｜開源增益】不只止漏，開始『把財引進來』。針對工作、業績、接案、客源做增益：讓你做同樣的努力，換到更高的回報與機會。",
        feedback: "明顯回饋：談合作更好談、客戶更願意回頭；錢不是用求的，是開始會『自己進來』。",
      },
      {
        id: "y-3680",
        name: "圓滿曼陀羅",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Z5",
        blurb: "【大圓滿｜立基建庫】重塑「財富命格」的大圓滿儀軌：立財庫、護家運、穩住長期底盤。適合想一次把格局做大、為家族／事業打下可續航的福德根。",
        feedback: "非常有感：不再一直出狀況、一直補洞；家裡跟事業都更穩，存款開始累積，有種『底氣回來』的感覺。",
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
        title: "我終於敢把『漏』止住，不再每天被錢追著跑",
        body: "以前一醒來就焦慮：卡費、帳單、又怕臨時破財。護持後最先變的是心不慌了，我開始能把支出分類、該拒絕的拒絕。很神奇的是，『莫名其妙的開支』真的少很多，錢第一次有留在手上的感覺。",
        by: "台北｜上班族",
      },
      {
        title: "卡很久的款項動起來，像被人幫我把管道打開",
        body: "有筆應收款拖了快兩個月，我都不敢催，怕得罪人。做完後我比較敢講、也比較敢定界線，結果對方真的開始分批匯款。不是天降橫財，是整個人變『有底氣』，事情就跟著變順。",
        by: "新北｜接案者",
      },
      {
        title: "我不再用恐懼做決定，工作反而更快看到回報",
        body: "以前很容易因為怕沒錢就亂接案、亂投資，最後更累更賠。護持後那股急躁感退掉，我開始只做『對的案子』。一個月內客戶回頭、介紹也來了，我才懂：先止漏，才會開源。",
        by: "台中｜自營工作者",
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
        blurb: "【入門｜先安家】「平撫燥火」的日常護念：先讓家裡安穩、情緒降噪，減少小破財與小意外，讓日子回到『可呼吸』的節奏。",
        feedback: "常見回饋：家裡比較不吵、事情比較順；那種一直緊繃的感覺鬆開了。",
      },
      {
        id: "m-980",
        name: "資糧增祥｜核心路線",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4PD",
        hot: true,
        badge: "多數家庭的首選",
        blurb: "【核心｜穩住資糧】直接對接「圓滿資糧」法流：把生活的底盤穩住，讓每一分入帳更留得下來，少被意外與內耗吞掉。",
        feedback: "明顯回饋：入不敷出的焦慮慢慢退；支出不再失控，日子站穩了。",
      },
      {
        id: "m-1860",
        name: "祥和護持",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Q7",
        blurb: "【進階｜護家運】為事業／家族立下「吉祥防護網」：把衰氣切開，降低突發災耗，讓家運與事業能『續航』，不再一有狀況就歸零。",
        feedback: "強烈回饋：意外支出明顯變少，家裡開始存得到錢，氣氛也變得比較亮。",
      },
      {
        id: "m-3680",
        name: "圓滿法座",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4V8",
        blurb: "【大圓滿｜立家族財庫】資糧圓滿的最高儀軌：為全家建立福德蓄水池，讓豐盛能一代接一代，不再被貧窮模式拖回去。",
        feedback: "非常有感：家庭底盤穩住後，事業也比較能往上走；那種『終於有未來』的踏實感很強。",
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
      {
        title: "家裡比較不吵了，事情也沒那麼容易出包",
        body: "以前家裡小事都能吵，吵到最後連錢都花在情緒上。護持後最明顯的是氣氛變和，講話比較能好好講。那種『終於有個家』的安定感，真的很感恩。",
        by: "桃園｜家庭",
      },
      {
        title: "意外支出少很多：不是變有錢，是終於穩下來",
        body: "之前就是一直修東修西、看醫生、突發開銷，存款永遠上不去。做完後一兩個月，這些狀況真的變少，生活開始可以規劃。穩定下來後，我反而更敢把事業往前推。",
        by: "台南｜自營小生意",
      },
      {
        title: "我睡得著了，日子也站得住了",
        body: "以前最怕的是『明天又缺』，那種恐懼會把人逼瘋。護持後心裡比較踏實，家裡的狀況也更可控。不是奇蹟，是整個節奏回到正常，真的謝謝。",
        by: "台中｜上班族",
      },
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
        blurb: "【入門｜先降噪】「排除雜訊」的心理洗滌：先讓腦袋冷卻、情緒降溫，停止亂選亂衝，回到清楚的起點。",
        feedback: "常見回饋：腦袋變清爽，該做什麼突然很清楚；拖很久的決定終於敢下。",
      },
      {
        id: "g-980",
        name: "劈碎死局｜最強轉機",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4S8",
        hot: true,
        badge: "決策者強力推薦",
        blurb: "【核心｜止損轉機】斷除「重複跳坑」的負面慣性：把你看不見的盲點劈開，先看清、再出手，避免一次錯決定賠掉半年努力。",
        feedback: "明顯回饋：敢止損、不再硬撐；一停下錯的路，新的路就冒出來。",
      },
      {
        id: "g-1860",
        name: "事業引路",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4T1",
        blurb: "【進階｜事業引路】建立「智慧威德」磁場：把混亂資訊收束成清楚策略，讓你抓到真正的突破口，少試錯、少繳學費。",
        feedback: "強烈回饋：思路像被打通，布局變寬、談判更有底氣；生意不再卡在原地。",
      },
      {
        id: "g-3680",
        name: "全覺智勝",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z4U2",
        blurb: "【大圓滿｜全覺智勝】大除障儀軌：切斷會把你拖進『毀滅性決策』的習性與因緣，讓你長期保持清明、做大事不失手。",
        feedback: "非常有感：不再反覆撞牆、反覆後悔；那種『終於掌控人生方向』的感覺很深。",
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
      {
        title: "我終於敢止損：不再硬撐那個錯的選擇",
        body: "以前明知道不對還是硬做，因為不甘心。護持後腦袋變清楚，我第一次很乾脆地停掉一個賠錢合作。結果一停，新的案子反而進來，我才懂：少走冤枉路就是賺。",
        by: "竹北｜上班族",
      },
      {
        title: "資訊收束了，決策變快，工作效率直接上去",
        body: "我以前很容易被不同意見拉來拉去，最後什麼都拖。做完後我比較能抓到重點，該選哪個方向很快就知道。主管也說我『變穩』，事情就更好談。",
        by: "新竹｜工程師",
      },
      {
        title: "我看清了一個坑，真的躲過一筆大損失",
        body: "有個投資/合作案看起來很漂亮，我差點就衝了。護持後那幾天我突然覺得不對，去查資料才發現很多漏洞。那種清醒感救了我，真的很感恩。",
        by: "台北｜自營者",
      },
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
        blurb: "【入門｜先破冰】「化解敵意」的調伏：先讓關係有緩衝、話更好說，適合正在磨合／修復期，想先止住衝突的人。",
        feedback: "常見回饋：對方比較願意聽、願意談；互動不再一開口就卡住或吵起來。",
      },
      {
        id: "k-980",
        name: "磁場引力｜最強感召",
        price: 980,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5bF",
        hot: true,
        badge: "貴人助緣首選",
        blurb: "【核心｜貴人感召】啟動「懷愛攝受」法流：提升人緣磁場，讓『願意拉你一把的人』出現；不再孤軍奮戰，資源開始靠攏。",
        feedback: "明顯回饋：主管／關鍵人物開始願意聽你說，機會跟介紹變多，合作更好推。",
      },
      {
        id: "k-1860",
        name: "威德攝位",
        price: 1860,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5c3",
        blurb: "【進階｜威德攝位】建立「懷愛威德」攝位：提升存在感與話語權，化解小人、減少誤會，把消耗你的關係『清場』。",
        feedback: "強烈回饋：圈子開始洗牌：消耗你的遠了，真心支持你的留下；做事不再一直被扯後腿。",
      },
      {
        id: "k-3680",
        name: "圓滿懷愛",
        price: 3680,
        url: "https://cart.cashier.ecpay.com.tw/qp/z5d7",
        blurb: "【大圓滿｜圓滿懷愛】最高攝受儀軌：切斷『一直孤軍、一直被背叛』的循環，讓你的人緣與權勢助力回到正位，該靠近的自然靠近。",
        feedback: "非常有感：不再一直遇到背叛與消耗；身邊開始有助力、有隊友，心不再那麼孤單。",
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
        title: "關係變好談：不是討好，是我先穩下來了",
        body: "以前跟人溝通很容易變成拉扯，越想解釋越糟。護持後我比較能穩住情緒再講，語氣更柔、界線更清楚，結果對方真的願意好好談。",
        by: "新北｜上班族",
      },
      {
        title: "貴人真的有出現：介紹、合作變多，而且很自然",
        body: "以前很像孤軍奮戰，案子都靠自己硬找。做完後一陣子，邀約跟介紹變多，而且是『舒服的合作』。我沒有去求誰，但人就開始願意靠近，感恩這個改變。",
        by: "台中｜接案者",
      },
      {
        title: "圈子洗牌後，我反而更輕鬆、更有力量",
        body: "以前太容易心軟，很多消耗我的人事物都放不下。護持後我比較敢拒絕，也更知道自己要什麼。結果留下來的都是真心，做事不再一直被扯後腿。",
        by: "高雄｜自雇者",
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