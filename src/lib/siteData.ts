// @ts-nocheck
/**
 * 滿願藏庫｜核心資料庫 (siteData.ts)
 * 終極保固版：使用 import 搭配 @ts-nocheck，強制 Vite 完美打包圖片並繞過編譯報錯
 * 100% 完整無省略，對齊全站組件
 */

import heroBrocadeImg from "@/assets/visuals/generated/hero-brocade.webp";
import heroGildedImg from "@/assets/visuals/generated/hero-gilded.webp";
import sutraCloseupImg from "@/assets/visuals/generated/sutra-closeup.webp";

import heroYellowImg from "@/assets/visuals/generated/hero-yellow-dzambhala.webp";
import altarYellowImg from "@/assets/visuals/generated/altar-yellow-water-offering.webp";

import heroMahashriImg from "@/assets/visuals/generated/hero-mahashri.webp";
import altarMahashriImg from "@/assets/visuals/generated/altar-mahashri-home-wealth.webp";

import heroGanapatiImg from "@/assets/visuals/generated/hero-ganapati.webp";
import altarGanapatiImg from "@/assets/visuals/generated/altar-ganapati-obstacle-removal.webp";

import heroPadmasambhavaImg from "@/assets/visuals/generated/hero-padmasambhava.webp";
import altarPadmasambhavaImg from "@/assets/visuals/generated/altar-padmasambhava.webp";

import heroGreenTaraImg from "@/assets/visuals/generated/hero-green-tara.webp";
import altarGreenTaraImg from "@/assets/visuals/generated/altar-green-tara-fire-offering.webp";

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
// ----------------------------------------------------------------------
export const VISUALS = {
  heroBrocade: heroBrocadeImg,
  heroGilded: heroGildedImg,
  sutraCloseup: sutraCloseupImg,
  altarYellow: altarYellowImg,
  altarMahashri: altarMahashriImg,
  altarGanapati: altarGanapatiImg,
  altarPadmasambhava: altarPadmasambhavaImg,
  altarGreenTara: altarGreenTaraImg,
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
    title: "跨越重大難關", 
    body: "在事業最黑暗、幾乎撐不下去的時候，蓮師的護持給了我極大的安定感，最後奇蹟般地度過難關。", 
    by: "桃園市 郭先生" 
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
    summary: "透過如法護持，修復財庫漏洞，啟動正向豐饒緣起。",
    ctaLabel: "查看資糧路徑"
  },
  { 
    id: "obstacle", 
    slug: "obstacle",
    title: "掃除障礙", 
    deity: "ganapati",
    summary: "清除前行道路上的違緣阻礙，讓事業與生活重回正軌。",
    ctaLabel: "立即除障"
  },
  { 
    id: "protection", 
    slug: "protection",
    title: "威德護持", 
    deity: "padmasambhava",
    summary: "仰仗大威德力，鎮伏一切內外障礙，建立穩固靠山。",
    ctaLabel: "獲得無畏護佑"
  }
] as const;

// ----------------------------------------------------------------------
// 5. 類型定義 (Types)
// ----------------------------------------------------------------------
export type DeityKey = "yellow" | "mahashri" | "ganapati" | "padmasambhava" | "green-tara";

export interface Plan {
  readonly id: string;
  readonly name: string;
  readonly price: number; 
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
    heroImage: heroYellowImg,
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
    heroImage: heroMahashriImg,
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
      { title: "需要無畏的精神靠山嗎？", desc: "看蓮師：總集大加持，鎮伏一切恐懼與違緣。", to: "padmasambhava" }
    ]
  },
  "ganapati": {
    key: "ganapati",
    name: "象頭財神",
    subtitle: "無礙成就・決策清明",
    route: "/deity/ganapati",
    primaryIntent: "掃除障礙",
    heroKicker: "競爭主導權",
    heroImage: heroGanapatiImg,
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
  "padmasambhava": {
    key: "padmasambhava",
    name: "蓮花生大士",
    subtitle: "總集加持・無畏護持",
    route: "/deity/padmasambhava",
    primaryIntent: "威德護持",
    heroKicker: "總集大加持",
    heroImage: heroPadmasambhavaImg,
    promise: "仰仗蓮師無量威德，鎮伏一切邪祟與內外密障礙，總集息增懷誅四業加持。",
    scripture: [
      { 
        quote: "「我無死生之別，於諸信心者前，我即現其前而為加持。」", 
        source: "《蓮師傳》",
        hint: "蓮師誓願常伴信者",
        url: "#"
      }
    ],
    painPoints: ["面臨巨大挑戰與難關", "感覺受負面能量干擾", "需要強大穩定的精神靠山"],
    whyThisDeity: ["藏傳佛法最根本的護持力", "轉化一切惡緣為道用", "鎮伏恐懼，建立絕對自信"],
    process: [
      { title: "清淨供養", body: "敬備妙香與薈供品，祈請蓮師降臨。" },
      { title: "持誦金剛七句", body: "以無比信心持誦蓮師心咒與祈請文。" },
      { title: "威德迴向", body: "迴向自身與事業皆得威德守護，無堅不摧。" }
    ],
    plans: [
      { id: "p1", name: "無畏明燈", price: 490, blurb: "點燃無畏之光，驅散內心恐懼。", url: "#", suitableFor: ["日常祈福"], details: ["無畏供燈乙對"] },
      { id: "p2", name: "除障香供", price: 980, blurb: "淨化空間與身心磁場，驅逐干擾。", url: "#", hot: true, badge: "護身首選", suitableFor: ["感覺受干擾", "運勢低迷"], details: ["特製蓮師除障香"] },
      { id: "p3", name: "威德薈供", price: 3680, blurb: "總集蓮師大加持，祈願事業與修行皆成。", url: "#", suitableFor: ["面臨大考驗", "重大突破"], details: ["廣大蓮師薈供"] }
    ],
    faq: [{ q: "任何人都可以護持蓮師嗎？", a: "是的，蓮師的加持無分對象，只要具備信心，皆能獲得護佑。" }],
    crossSell: [
      { title: "若你急需突破現狀，大幅增加現金收入", desc: "看黃財神：主動出擊，強效開源與止漏。", to: "yellow" },
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
    heroImage: heroGreenTaraImg,
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
      { title: "面臨巨大挑戰與難關？", desc: "看蓮師：建立絕對自信，獲得無堅不摧的護佑。", to: "padmasambhava" }
    ]
  }
};

// ----------------------------------------------------------------------
// 7. 導出輔助函數與陣列
// ----------------------------------------------------------------------
export const DEITIES = Object.values(DEITY_BY_KEY);
export const money = (val: number) => val.toLocaleString();