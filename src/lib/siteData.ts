/**
 * 滿願藏庫｜核心資料庫 (siteData.ts)
 * 修復：使用 new URL 替換 import，徹底解決 TypeScript 圖片報紅與打包破圖問題
 */

// ----------------------------------------------------------------------
// 1. 基礎設定 (SITE)
// ----------------------------------------------------------------------
export const SITE = {
  name: "滿願藏庫",
  url: "https://zambala-tibetan.com.tw",
  fb: "https://www.facebook.com/profile.php?id=61583749010531",
} as const;

export const SITE_CONFIG = SITE;

// ----------------------------------------------------------------------
// 2. 視覺素材路徑 (VISUALS)
// ✅ 使用 Vite 原生的 new URL，免除 TS 紅字報錯，確保圖片完美打包
// ----------------------------------------------------------------------
export const VISUALS = {
  heroBrocade: new URL("../assets/visuals/generated/hero-brocade.webp", import.meta.url).href,
  heroGilded: new URL("../assets/visuals/generated/hero-gilded.webp", import.meta.url).href,
  sutraCloseup: new URL("../assets/visuals/generated/sutra-closeup.webp", import.meta.url).href,
  altarYellow: new URL("../assets/visuals/generated/altar-yellow-water-offering.webp", import.meta.url).href,
  altarMahashri: new URL("../assets/visuals/generated/altar-mahashri-home-wealth.webp", import.meta.url).href,
  altarGanapati: new URL("../assets/visuals/generated/altar-ganapati-obstacle-removal.webp", import.meta.url).href,
  altarKurukulla: new URL("../assets/visuals/generated/altar-kurukulla-magnetizing.webp", import.meta.url).href,
  altarGreenTara: new URL("../assets/visuals/generated/altar-green-tara-fire-offering.webp", import.meta.url).href,
};

// ----------------------------------------------------------------------
// 3. 首頁見證 (HOME_TESTIMONIALS)
// ----------------------------------------------------------------------
export const HOME_TESTIMONIALS = [
  { 
    title: "業績突然好轉", 
    body: "原本卡住的資金順利到位，不穩定的收支逐漸平衡，心也定了。更神奇的是，接到一筆大額訂單。", 
    by: "台北市 張先生" 
  },
  { 
    title: "財庫的漏洞補上了", 
    body: "財庫的漏洞彷彿被補上了，無謂的意外開銷明顯減少。存款終於能累積。", 
    by: "台中市 林小姐" 
  },
  { 
    title: "思緒異常清晰", 
    body: "點燈護持後，思緒變得異常清晰。順利避開了一個有問題的合夥案。", 
    by: "新竹縣 吳先生" 
  },
  { 
    title: "僵局順利化解", 
    body: "原本冷戰的僵局化解，感受到久違的被重視與溫暖。感情順利修復。", 
    by: "高雄市 陳小姐" 
  },
  { 
    title: "重拾踏實安全感", 
    body: "報名火供後，壓在胸口的重擔感消失了，整個人重新找回了踏實的安全感。", 
    by: "新北市 郭小姐" 
  }
];

// ----------------------------------------------------------------------
// 4. 話題分類 (TOPICS)
// ----------------------------------------------------------------------
export const TOPICS = [
  { 
    id: "wealth", 
    slug: "wealth",
    title: "資糧增益", 
    deity: "yellow",
    deities: ["yellow", "mahashri"],
    summary: "透過如法護持，修復財庫漏洞，啟動正向豐饒緣起。",
    ctaLabel: "查看資糧路徑"
  },
  { 
    id: "obstacle", 
    slug: "obstacle",
    title: "掃除障礙", 
    deity: "ganapati",
    deities: ["green-tara", "ganapati"],
    summary: "清除前行道路上的違緣阻礙，讓事業與生活重回正軌。",
    ctaLabel: "立即除障"
  },
  { 
    id: "love", 
    slug: "love",
    title: "情感圓滿", 
    deity: "kurukulla",
    deities: ["kurukulla", "mahashri"],
    summary: "修復疏離與對立，轉化磁場感召善緣與貴人。",
    ctaLabel: "圓滿善緣"
  }
] as const;

// ----------------------------------------------------------------------
// 5. 類型定義 (Types)
// ----------------------------------------------------------------------
export type DeityKey = "yellow" | "mahashri" | "ganapati" | "kurukulla" | "green-tara";

export interface Plan {
  readonly id: string;
  readonly name: string;
  readonly price: number; // ✅ 確保為數字，讓排序功能 (a.price - b.price) 正常運作
  readonly blurb: string;
  readonly url: string;
  readonly hot?: boolean;
  readonly badge?: string;
  readonly suitableFor: string[];
  readonly details?: string[];
}

export interface Scripture {
  readonly quote: string;
  readonly source: string;
  readonly hint?: string; 
  readonly url?: string;  
}

export interface Deity {
  readonly key: DeityKey;
  readonly name: string;
  readonly subtitle: string;
  readonly route: string;
  readonly primaryIntent: string;
  readonly heroKicker: string;
  readonly heroImage: string;
  readonly promise: string;
  readonly scripture: readonly Scripture[];
  readonly painPoints: readonly string[];
  readonly whyThisDeity: readonly string[];
  readonly process: readonly { title: string; body: string }[];
  readonly plans: readonly Plan[];
  readonly faq: readonly { q: string; a: string }[];
  readonly crossSell: readonly { title: string; desc: string; to: DeityKey }[];
}

// ----------------------------------------------------------------------
// 6. 本尊全量資料庫 (DEITY_BY_KEY)
// ----------------------------------------------------------------------
export const DEITY_BY_KEY: Record<DeityKey, Deity> = {
  "yellow": {
    key: "yellow",
    name: "黃財神",
    subtitle: "積聚資糧・廣修布施",
    route: "/deity/yellow",
    primaryIntent: "增加收入",
    heroKicker: "資糧增益首選",
    heroImage: new URL("../assets/visuals/generated/hero-yellow-dzambhala.webp", import.meta.url).href,
    promise: "依贊巴拉教法，洗滌匱乏業印，開啟世間與出世間之財富源泉。對治慳吝心，令福德增長。",
    scripture: [
      { 
        quote: "「於諸賢聖給施所須；見求利者，方便佐助... 能令眾生得多資生報。」", 
        source: "《佛說業報差別經》",
        hint: "布施是開啟資糧的鑰匙",
        url: "#"
      }
    ],
    painPoints: ["資源匱乏、事業停滯", "現金流吃緊", "努力工作卻留不住錢"],
    whyThisDeity: ["補齊命中財庫不足", "啟動廣大布施緣起", "清淨貧窮業力障礙"],
    process: [
      { title: "安置水供", body: "準備清淨藏紅花水，依儀軌整齊排列供碗。" },
      { title: "誦咒加持", body: "持誦本尊心咒，觀想甘露加持灌頂。" },
      { title: "如法回向", body: "將功德鎖定於護持者名單，祈願資糧盈滿。" }
    ],
    plans: [
      { id: "y1", name: "智慧明燈", price: 490, blurb: "照破貧窮幽暗，對治慳吝業障。", url: "https://cart.cashier.ecpay.com.tw/qp/z4W0", suitableFor: ["小額發心", "新手入門"], details: ["如法供燈乙對", "壇城名單回向"] },
      { id: "y2", name: "如意水供", price: 980, blurb: "清淨匱乏耗損，資糧如水盈滿。", url: "https://cart.cashier.ecpay.com.tw/qp/z4XF", hot: true, badge: "最速增益", suitableFor: ["急需資金", "業績卡關"], details: ["連續水供儀軌", "專屬名單回向"] },
      { id: "y3", name: "除障香供", price: 1860, blurb: "淨化事業違緣，穩固財富磁場。", url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3", suitableFor: ["事業擴張", "避開風險"], details: ["特製除障香供", "加強名單回向"] },
      { id: "y4", name: "增益薈供", price: 3680, blurb: "大乘福德總集，成就圓滿緣起。", url: "https://cart.cashier.ecpay.com.tw/qp/z4Z5", suitableFor: ["重大企劃", "總體增益"], details: ["廣大薈供儀軌", "數位回向證明"] }
    ],
    faq: [{ q: "護持後需要特別做什麼嗎？", a: "建議多行小額布施，能與黃財神的加持能量產生強大共鳴。" }, { q: "一定要每天做嗎？", a: "本法事由現場代為執行，您只需保持清淨發心即可。" }],
    crossSell: [
      { title: "若你感到莫名焦慮，或是生活阻力重重", desc: "看綠度母：迅疾救護，掃除八難與突發怖畏。", to: "green-tara" },
      { title: "若你處於投資或職場迷惘，急需智慧決策", desc: "看象頭財神：強力掃除違緣，掌握無礙成就。", to: "ganapati" }
    ]
  },
  "mahashri": {
    key: "mahashri",
    name: "大吉祥天女",
    subtitle: "豐饒吉祥・資具無缺",
    route: "/deity/mahashri",
    primaryIntent: "家宅平安",
    heroKicker: "生活物資充盈",
    heroImage: new URL("../assets/visuals/generated/hero-mahashri.webp", import.meta.url).href,
    promise: "依《金光明經》之願力，護佑家宅安隱，令生活資具無所匱乏。",
    scripture: [
      { 
        quote: "「令其飲食、衣服、臥具、醫藥皆圓滿無缺。」", 
        source: "《金光明最勝王經》",
        hint: "天女誓願守護生活資具",
        url: "#"
      }
    ],
    painPoints: ["家中燥氣重、紛爭多", "常有意外開銷、錢財流失", "感覺福報耗損快速"],
    whyThisDeity: ["平撫環境負面磁場", "建立家宅防護結界", "感召豐饒安隱能量"],
    process: [
      { title: "備辦五供", body: "準備精緻香、燈、花、食、水，表法圓滿。" },
      { title: "讀誦天女品", body: "誦持金光明經大吉祥天女品經典內容。" },
      { title: "安隱迴向", body: "祈請天女護佑家宅平安，資具無缺。" }
    ],
    plans: [
      { id: "m1", name: "吉祥明燈", price: 490, blurb: "照破貧窮幽暗，迎來吉祥之光。", url: "https://cart.cashier.ecpay.com.tw/qp/z4ND", suitableFor: ["小額發心"], details: ["吉祥供燈乙對", "壇城名單回向"] },
      { id: "m2", name: "豐饒水供", price: 980, blurb: "洗滌耗損福報之業，安立豐足磁場。", url: "https://cart.cashier.ecpay.com.tw/qp/z4PD", hot: true, badge: "豐足首選", suitableFor: ["意外破財", "家宅不寧"], details: ["清淨水供儀軌", "家宅平安回向"] },
      { id: "m3", name: "清淨香供", price: 1860, blurb: "化解生存危機感，以妙香安立於豐足磁場中。", url: "https://cart.cashier.ecpay.com.tw/qp/z4Q7", suitableFor: ["家宅安靜"], details: ["特製清淨香", "家宅名單回向"] },
      { id: "m4", name: "滿願薈供", price: 3680, blurb: "廣聚善緣福德，護佑所求願滿。", url: "https://cart.cashier.ecpay.com.tw/qp/z4V8", suitableFor: ["重大祈願"], details: ["豐饒大薈供", "數位回向證明"] }
    ],
    faq: [{ q: "可以回向給全家人嗎？", a: "是的，一份護持方案可回向給全家室長與眷屬。" }],
    crossSell: [
      { title: "若你急需突破現狀，大幅增加現金收入", desc: "看黃財神：主動出擊，強效開源與止漏。", to: "yellow" },
      { title: "若你覺得夫妻感情變淡，或是人際關係耗損", desc: "看作明佛母：重新引爆懷愛磁場，找回溫暖羈絆。", to: "kurukulla" }
    ]
  },
  "ganapati": {
    key: "ganapati",
    name: "象頭財神",
    subtitle: "無礙成就・決策清明",
    route: "/deity/ganapati",
    primaryIntent: "掃除障礙",
    heroKicker: "競爭主導權",
    heroImage: new URL("../assets/visuals/generated/hero-ganapati.webp", import.meta.url).href,
    promise: "強力掃除之外、內、密違緣，於事業與競爭中掌握自在主導。",
    scripture: [
      { 
        quote: "「持誦此咒，我當隨逐... 百由旬內，無有眾難。」", 
        source: "《大聖歡喜天陀羅尼》",
        hint: "強效破除前行違緣",
        url: "#"
      }
    ],
    painPoints: ["投資失利、判斷錯誤", "職場小人作祟", "重大決策猶豫不決"],
    whyThisDeity: ["劈開認知死角與盲點", "平息外在干擾與違緣", "增長威德與主導力量"],
    process: [
      { title: "禮敬甜食", body: "依經教供養象神喜愛之物，建立歡喜連結。" },
      { title: "除障儀軌", body: "持誦陀羅尼掃除決策迷霧與違緣障礙。" },
      { title: "成就迴向", body: "迴向現前事業順遂，掌握主導優勢。" }
    ],
    plans: [
      { id: "g1", name: "清明燈供", price: 490, blurb: "照破愚痴與無明迷霧。", url: "https://cart.cashier.ecpay.com.tw/qp/z4R5", suitableFor: ["小額發心"], details: ["清明供燈乙對"] },
      { id: "g2", name: "平息水供", price: 980, blurb: "洗滌身心焦慮，平息職場干擾。", url: "https://cart.cashier.ecpay.com.tw/qp/z4S8", hot: true, badge: "破迷必備", suitableFor: ["職場壓力", "面臨抉擇"], details: ["除障水供儀軌", "智慧決策回向"] },
      { id: "g3", name: "破障香供", price: 1860, blurb: "強力掃除障礙。", url: "https://cart.cashier.ecpay.com.tw/qp/z4T1", suitableFor: ["重大談判"], details: ["特製破障香"] },
      { id: "g4", name: "成就薈供", price: 3680, blurb: "總集威德加持，無礙成辦善業。", url: "https://cart.cashier.ecpay.com.tw/qp/z4U2", suitableFor: ["談判競標", "事業突破"], details: ["成就大薈供", "數位回向證明"] }
    ],
    faq: [{ q: "適合求偏財嗎？", a: "象神助您提升的是判斷智慧，當判斷正確，財路自然通達。" }],
    crossSell: [
      { title: "若你急需突破現狀，大幅增加現金收入", desc: "看黃財神：主動出擊，強效開源與止漏。", to: "yellow" },
      { title: "若你感到莫名焦慮，或是生活阻力重重", desc: "看綠度母：迅疾救護，掃除八難與突發怖畏。", to: "green-tara" }
    ]
  },
  "kurukulla": {
    key: "kurukulla",
    name: "作明佛母",
    subtitle: "懷攝善緣・情感圓滿",
    route: "/deity/kurukulla",
    primaryIntent: "人際圓滿",
    heroKicker: "懷攝大自在",
    heroImage: new URL("../assets/visuals/generated/hero-kurukulla.webp", import.meta.url).href,
    promise: "修復愛情與善緣。轉化情執與惡緣，增長自身威儀與慈悲磁場。化解人際對立。",
    scripture: [
      { 
        quote: "「攝受眾生心識，令彼生歡喜心、敬愛心。」", 
        source: "《作明佛母儀軌傳承》",
        hint: "懷攝磁場，感召善緣",
        url: "#"
      }
    ],
    painPoints: ["夫妻冷戰疏離", "人際關係孤立、缺乏貴人", "容易受負面惡緣干擾"],
    whyThisDeity: ["磁石般的懷攝能量", "轉化內在負面情緒", "感召正向善緣靠攏"],
    process: [
      { title: "鮮花供養", body: "準備紅蓮花或紅玫瑰，增益懷攝資糧。" },
      { title: "引動法流", body: "持誦佛母心咒，修復個人磁場能量。" },
      { title: "圓滿迴向", body: "迴向人脈與情感圓滿，貴人接應。" }
    ],
    plans: [
      { id: "k1", name: "懷愛明燈", price: 490, blurb: "點燃懷攝之光。", url: "https://cart.cashier.ecpay.com.tw/qp/z5a8", suitableFor: ["小額發心"], details: ["懷愛供燈乙對"] },
      { id: "k2", name: "攝受花供", price: 980, blurb: "修復情感裂痕，增長個人魅力。", url: "https://cart.cashier.ecpay.com.tw/qp/z5bF", hot: true, badge: "懷愛首選", suitableFor: ["單身求緣", "感情失和"], details: ["莊嚴花供儀軌", "情感圓滿回向"] },
      { id: "k3", name: "淨緣香供", price: 1860, blurb: "淨化情執惡緣。", url: "https://cart.cashier.ecpay.com.tw/qp/z5c3", suitableFor: ["切斷孽緣"], details: ["特製淨緣香"] },
      { id: "k4", name: "自在薈供", price: 3680, blurb: "懷業總集。令眾生見者歡喜。", url: "https://cart.cashier.ecpay.com.tw/qp/z5d7", suitableFor: ["公關推廣", "權勢地位"], details: ["自在懷業薈供", "數位回向證明"] }
    ],
    faq: [{ q: "可以用於輓回特定對象嗎？", a: "佛母能量首重善緣與自省，若雙方仍有緣份，祂會修復阻礙。" }],
    crossSell: [
      { title: "若你覺得福報耗損，生活中常有意外開銷", desc: "看大吉祥天女：依止願力，為家宅建立豐饒守護。", to: "mahashri" },
      { title: "若你處於投資或職場迷惘，急需智慧決策", desc: "看象頭財神：強力掃除違緣，掌握無礙成就。", to: "ganapati" }
    ]
  },
  "green-tara": {
    key: "green-tara",
    name: "綠度母",
    subtitle: "慈悲救護・迅疾除障",
    route: "/deity/green-tara",
    primaryIntent: "迅疾救護",
    heroKicker: "遠離怖畏",
    heroImage: new URL("../assets/visuals/generated/hero-green-tara.webp", import.meta.url).href,
    promise: "仰仗大悲誓願，度脫一切苦厄與突發之怖畏。祈願生活平安、諸事順遂、所作皆辦。",
    scripture: [
      { 
        quote: "「敬禮迅捷勇悍度母，眼如閃電剎那光。」", 
        source: "《二十一尊度母讚》",
        hint: "迅疾回應，平息怖畏",
        url: "#"
      }
    ],
    painPoints: ["莫名焦慮不安", "生活阻力重重、運勢低迷", "遭遇突發變故或驚嚇"],
    whyThisDeity: ["最快速的加持力", "消除恐懼與不安全感", "平息世俗種種障礙"],
    process: [
      { title: "壇城安置", body: "準備度母除障壇城，備辦香燈淨水。" },
      { title: "火供除障", body: "以強大加持力清算並轉化障礙種子。" },
      { title: "救護迴向", body: "迴向諸事順遂，遠離八難與突發怖畏。" }
    ],
    plans: [
      { id: "t1", name: "慈悲明燈", price: 680, blurb: "度母救八難，照亮諸事晦暗與不安。", url: "https://cart.cashier.ecpay.com.tw/qp/zEJ1", suitableFor: ["日常祈福"], details: ["慈悲供燈乙對"] },
      { id: "t2", name: "救護薈供", price: 1280, blurb: "度脫一切苦厄，令身心輕安。", url: "https://cart.cashier.ecpay.com.tw/qp/zED7", hot: true, badge: "全方位守護", suitableFor: ["身心疲累", "運勢低迷"], details: ["深度除障儀軌", "救護加持回向"] }
    ],
    faq: [{ q: "為什麼稱為迅疾？", a: "度母右足下垂，象徵隨時準備起身救度，加持反應極快。" }],
    crossSell: [
      { title: "若你急需突破現狀，大幅增加現金收入", desc: "看黃財神：主動出擊，強效開源與止漏。", to: "yellow" },
      { title: "若你覺得夫妻感情變淡，或是人際關係耗損", desc: "看作明佛母：重新引爆懷愛磁場，找回溫暖羈絆。", to: "kurukulla" }
    ]
  }
};

// ----------------------------------------------------------------------
// 7. 導出輔助函數與陣列
// ----------------------------------------------------------------------
export const DEITIES = Object.values(DEITY_BY_KEY);
export const money = (val: number) => val.toLocaleString();