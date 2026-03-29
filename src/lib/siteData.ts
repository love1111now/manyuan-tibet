/**
 * 滿願藏庫｜核心資料庫 (siteData.ts)
 * 內容已根據 Deity.tsx 結構與視覺截圖文字進行修正
 */

// ----------------------------------------------------------------------
// 1. 全站設定 (SITE_CONFIG)
// ----------------------------------------------------------------------
export const SITE_CONFIG = {
  name: "滿願藏庫",
  url: "https://zambala-tibetan.com.tw", // 修復 SEO 與連結必要網址
  fb: "https://www.facebook.com/profile.php?id=61583749010531",
} as const;

// ----------------------------------------------------------------------
// 2. 類型定義 (Types)
// ----------------------------------------------------------------------
export type DeityKey = "yellow" | "mahashri" | "ganapati" | "kurukulla" | "green-tara";

export interface Plan {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly blurb: string;
  readonly url: string;
  readonly hot?: boolean;
  readonly badge?: string;
  readonly suitableFor: string[]; // 對應 Deity.tsx 的 p.suitableFor
  readonly details: string[];     // 對應 Deity.tsx 的 p.details
}

export interface Deity {
  readonly key: DeityKey;
  readonly name: string;
  readonly subtitle: string;
  readonly route: string;         // 修復跳轉路徑
  readonly primaryIntent: string; // 對應 Deity.tsx 的 d.primaryIntent
  readonly heroKicker: string;    // 對應 Deity.tsx 的 d.heroKicker
  readonly heroImage: string;
  readonly promise: string;
  readonly scripture: { quote: string; source: string }[]; // 對應 Deity.tsx 的 d.scripture
  readonly painPoints: string[];  // 對應 Deity.tsx 的 d.painPoints
  readonly whyThisDeity: string[]; // 對應 Deity.tsx 的 d.whyThisDeity
  readonly process: { title: string; body: string }[];    // 對應 Deity.tsx 的 d.process
  readonly plans: readonly Plan[];
  readonly faq: readonly { q: string; a: string }[];
  readonly crossSell: readonly { title: string; desc: string; to: DeityKey }[];
}

// ----------------------------------------------------------------------
// 3. 圖片路徑映射
// ----------------------------------------------------------------------
const ASSETS = {
  yellowHero: "/src/assets/visuals/generated/hero-yellow-dzambhala.webp",
  mahashriHero: "/src/assets/visuals/generated/hero-mahashri.webp",
  ganapatiHero: "/src/assets/visuals/generated/hero-ganapati.webp",
  kurukullaHero: "/src/assets/visuals/generated/hero-kurukulla.webp",
  greenTaraHero: "/src/assets/visuals/generated/hero-green-tara.webp",
};

// ----------------------------------------------------------------------
// 4. 本尊資料庫 (DEITY_BY_KEY)
// ----------------------------------------------------------------------
export const DEITY_BY_KEY: Record<DeityKey, Deity> = {
  "yellow": {
    key: "yellow",
    name: "黃財神",
    subtitle: "積聚資糧・廣修布施",
    route: "/deities/yellow",
    primaryIntent: "增加收入",
    heroKicker: "資糧增益首選",
    heroImage: ASSETS.yellowHero,
    promise: "依贊巴拉教法，洗滌匱乏業印，開啟世間與出世間之財富源泉。對治慳吝心，令福德增長。",
    scripture: [{ quote: "「於諸賢聖給施所須；見求利者，方便佐助... 能令眾生得多資生報。」", source: "《佛說業報差別經》" }],
    painPoints: ["資源匱乏、事業停滯", "現金流吃緊", "努力工作卻留不住錢"],
    whyThisDeity: ["補齊命中財庫不足", "啟動廣大布施緣起", "清淨貧窮業力障礙"],
    process: [
      { title: "安置水供", body: "準備清淨藏紅花水，排列供碗。" },
      { title: "誦咒加持", body: "持誦心咒，觀想甘露灌頂。" },
      { title: "如法回向", body: "將功德鎖定於護持者名單。" }
    ],
    plans: [
      { id: "y1", name: "智慧明燈", price: 490, blurb: "照破貧窮幽暗，對治慳吝業障。", url: "https://cart.cashier.ecpay.com.tw/qp/z4W0", suitableFor: ["小額發心", "新手入門"], details: ["如法供燈乙對", "名單回向"] },
      { id: "y2", name: "如意水供", price: 980, blurb: "清淨匱乏耗損，資糧如水盈滿。", url: "https://cart.cashier.ecpay.com.tw/qp/z4XF", hot: true, badge: "最速增益", suitableFor: ["急需資金", "業績卡關"], details: ["連續水供儀軌", "專屬名單回向"] }
    ],
    faq: [{ q: "一定要每天做嗎？", a: "由法事現場代為執行，您只需在心中保持清淨發心即可。" }],
    crossSell: [
      { title: "若你感到莫名焦慮，或是生活阻力重重", desc: "看綠度母：迅疾救護，掃除八難與突發怖畏。", to: "green-tara" },
      { title: "若你處於投資或職場迷惘，急需智慧決策", desc: "看象頭財神：強力掃除違緣，掌握無礙成就。", to: "ganapati" }
    ]
  },
  "mahashri": {
    key: "mahashri",
    name: "大吉祥天女",
    subtitle: "豐饒吉祥・資具無缺",
    route: "/deities/mahashri",
    primaryIntent: "家宅平安",
    heroKicker: "生活物資充盈",
    heroImage: ASSETS.mahashriHero,
    promise: "依《金光明經》之願力，護佑家宅安隱，令生活資具無所匱乏。",
    scripture: [{ quote: "「令其飲食、衣服、臥具、醫藥皆圓滿無缺。」", source: "《金光明最勝王經》" }],
    painPoints: ["家中燥氣重、紛爭多", "常有意外開銷", "感覺福報耗損快速"],
    whyThisDeity: ["平撫環境負面磁場", "建立家宅防護結界", "感召豐饒安隱能量"],
    process: [
      { title: "備辦五供", body: "香燈花食水全數具足。" },
      { title: "讀誦經典", body: "誦持金光明經天女品。" },
      { title: "安隱迴向", body: "祈請天女護佑家宅。" }
    ],
    plans: [
      { id: "m2", name: "豐饒水供", price: 980, blurb: "洗滌耗損福報之業，安立豐足磁場。", url: "https://cart.cashier.ecpay.com.tw/qp/z4PD", hot: true, badge: "豐足首選", suitableFor: ["家宅不寧", "意外破財"], details: ["清淨水供儀軌", "家宅平安回向"] }
    ],
    faq: [{ q: "全家人都可以護持嗎？", a: "可以，一份方案可回向給全家室長與眷屬。" }],
    crossSell: [
      { title: "若你急需突破現狀，大幅增加現金收入", desc: "看黃財神：主動出擊，強效開源與止漏。", to: "yellow" },
      { title: "若你覺得夫妻感情變淡，或是人際關係耗損", desc: "看作明佛母：重新引爆懷愛磁場，找回溫暖羈絆。", to: "kurukulla" }
    ]
  },
  "ganapati": {
    key: "ganapati",
    name: "象頭財神",
    subtitle: "無礙成就・決策清明",
    route: "/deities/ganapati",
    primaryIntent: "掃除障礙",
    heroKicker: "競爭主導權",
    heroImage: ASSETS.ganapatiHero,
    promise: "強力掃除之外、內、密違緣，於事業與競爭中掌握自在主導。",
    scripture: [{ quote: "「持誦此咒，我當隨逐... 百由旬內，無有眾難。」", source: "《大聖歡喜天陀羅尼》" }],
    painPoints: ["投資屢屢失利", "職場小人作祟", "重大決策猶豫不決"],
    whyThisDeity: ["劈開認知死角與盲點", "平息外在干擾與違緣", "增長威德與主導力量"],
    process: [
      { title: "供奉甜食", body: "依經教供養象神喜愛之物。" },
      { title: "除障儀軌", body: "持誦陀羅尼掃除迷霧。" },
      { title: "清明迴向", body: "迴向現前事業順遂。" }
    ],
    plans: [
      { id: "g2", name: "平息水供", price: 980, blurb: "洗滌身心焦慮，平息職場干擾。", url: "https://cart.cashier.ecpay.com.tw/qp/z4S8", hot: true, badge: "破迷必備", suitableFor: ["面臨抉擇", "專案卡關"], details: ["除障水供儀軌", "智慧決策回向"] }
    ],
    faq: [{ q: "適合求偏財嗎？", a: "象神提升的是判斷力，當判斷正確，財路自然通達。" }],
    crossSell: [
      { title: "若你急需突破現狀，大幅增加現金收入", desc: "看黃財神：主動出擊，強效開源與止漏。", to: "yellow" },
      { title: "若你感到莫名焦慮，或是生活阻力重重", desc: "看綠度母：迅疾救護，掃除八難與突發怖畏。", to: "green-tara" }
    ]
  },
  "kurukulla": {
    key: "kurukulla",
    name: "作明佛母",
    subtitle: "懷攝善緣・情感圓滿",
    route: "/deities/kurukulla",
    primaryIntent: "人際圓滿",
    heroKicker: "懷攝大自在",
    heroImage: ASSETS.kurukullaHero,
    promise: "修復愛情與善緣。轉化情執與惡緣，增長自身威儀與慈悲磁場。化解人際對立。",
    scripture: [{ quote: "「攝受眾生心識，令彼生歡喜心、敬愛心。」", source: "《作明佛母儀軌傳承》" }],
    painPoints: ["夫妻冷戰疏離", "人際關係孤立", "缺乏貴人提攜"],
    whyThisDeity: ["磁石般的懷攝能量", "轉化內在負面情緒", "感召正向善緣靠攏"],
    process: [
      { title: "鮮花供養", body: "準備紅蓮花或紅玫瑰供養。" },
      { title: "懷愛觀想", body: "引動佛母懷攝法流。" },
      { title: "善緣迴向", body: "迴向人脈與感情圓滿。" }
    ],
    plans: [
      { id: "k2", name: "攝受花供", price: 980, blurb: "修復情感裂痕，增長個人魅力。", url: "https://cart.cashier.ecpay.com.tw/qp/z5bF", hot: true, badge: "懷愛首選", suitableFor: ["感情失和", "單身求緣"], details: ["莊嚴花供儀軌", "情感圓滿回向"] }
    ],
    faq: [{ q: "可以輓回特定的人嗎？", a: "佛母能量首重善緣與自省，若雙方仍有緣份，祂會修復障礙。" }],
    crossSell: [
      { title: "若你覺得福報耗損，生活中常有意外開銷", desc: "看大吉祥天女：依止願力，為家宅建立豐饒守護。", to: "mahashri" },
      { title: "若你處於投資或職場迷惘，急需智慧決策", desc: "看象頭財神：強力掃除違緣，掌握無礙成就。", to: "ganapati" }
    ]
  },
  "green-tara": {
    key: "green-tara",
    name: "綠度母",
    subtitle: "慈悲救護・迅疾除障",
    route: "/deities/green-tara",
    primaryIntent: "迅疾救護",
    heroKicker: "遠離怖畏",
    heroImage: ASSETS.greenTaraHero,
    promise: "仰仗大悲誓願，度脫一切苦厄與突發之怖畏。祈願生活平安、諸事順遂、所作皆辦。",
    scripture: [{ quote: "「敬禮迅捷勇悍度母，眼如閃電剎那光。」", source: "《二十一尊度母讚》" }],
    painPoints: ["莫名焦慮不安", "生活阻力重重", "遭遇突發變故"],
    whyThisDeity: ["最快速的加持力", "消除恐懼與不安全感", "平息世俗種種障礙"],
    process: [
      { title: "壇城供養", body: "安置綠度母除障壇城。" },
      { title: "火供/誦經", body: "以強大加持力清算障礙。" },
      { title: "救護迴向", body: "迴向諸事順遂所作皆辦。" }
    ],
    plans: [
      { id: "t2", name: "救護薈供", price: 1280, blurb: "度脫一切苦厄，令身心輕安。", url: "https://cart.cashier.ecpay.com.tw/qp/zED7", hot: true, badge: "全方位守護", suitableFor: ["身心疲累", "運勢低迷"], details: ["深度除障儀軌", "救護加持回向"] }
    ],
    faq: [{ q: "為什麼叫迅疾？", a: "度母右足下垂，象徵隨時起身救度，反應極快。" }],
    crossSell: [
      { title: "若你急需突破現狀，大幅增加現金收入", desc: "看黃財神：主動出擊，強效開源與止漏。", to: "yellow" },
      { title: "若你覺得夫妻感情變淡，或是人際關係耗損", desc: "看作明佛母：重新引爆懷愛磁場，找回溫暖羈絆。", to: "kurukulla" }
    ]
  }
};

// ----------------------------------------------------------------------
// 5. 衍生資料與輔助函數
// ----------------------------------------------------------------------
export const DEITIES = Object.values(DEITY_BY_KEY);

export const TOPICS = [
  { id: "wealth", title: "資糧增益", deities: ["yellow", "mahashri"] },
  { id: "obstacle", title: "掃除障礙", deities: ["green-tara", "ganapati"] },
  { id: "love", title: "情感圓滿", deities: ["kurukulla", "mahashri"] },
] as const;

export const money = (val: number) => val.toLocaleString();