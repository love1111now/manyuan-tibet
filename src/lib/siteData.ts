// @ts-nocheck
/**
 * 滿願藏庫｜核心資料庫 (siteData.ts)
 * - 全站文案/頁面皆由此資料驅動
 * - 為避免圖片在 Vite build 時出錯：用 import + @ts-nocheck
 * - 追蹤碼請勿放在此檔（已在 index.html / AnalyticsTracker）
 */

import heroBrocadeImg from "@/assets/visuals/generated/hero-brocade.webp";
import heroGildedImg from "@/assets/visuals/generated/hero-gilded.webp";
import sutraCloseupImg from "@/assets/visuals/generated/sutra-closeup.webp";

import deityBannerImg from "@/assets/visuals/generated/deity-page-banner-abstract.webp";

import heroYellowImg from "@/assets/visuals/generated/deity-yellow.webp";
import altarYellowImg from "@/assets/visuals/generated/altar-yellow-water-offering.webp";

import heroMahashriImg from "@/assets/visuals/deity-mahashri.webp";
import altarMahashriImg from "@/assets/visuals/generated/altar-mahashri-home-wealth.webp";

import heroGanapatiImg from "@/assets/visuals/generated/deity-ganapati.webp";
import altarGanapatiImg from "@/assets/visuals/generated/altar-ganapati-obstacle-removal.webp";

import heroKurukullaImg from "@/assets/visuals/generated/deity-kurukulla.webp";
import altarKurukullaImg from "@/assets/visuals/generated/altar-kurukulla-magnetizing.webp";

import heroGreenTaraImg from "@/assets/visuals/generated/deity-green-tara.webp";
import altarGreenTaraImg from "@/assets/visuals/generated/altar-green-tara-fire-offering.webp";

import heroPadmasambhavaImg from "@/assets/visuals/generated/deity-padmasambhava.webp";
import heroMedicineBuddhaImg from "@/assets/visuals/generated/deity-medicine-buddha.webp";

// 儀軌照片（每個本尊頁的「正統儀軌」區塊使用）
import ritualWaterOfferingImg from "@/assets/visuals/rituals/ritual-water-offering.webp";
import ritualSangSmokeImg from "@/assets/visuals/rituals/ritual-sang-smoke.webp";
import ritualTormaAltarImg from "@/assets/visuals/rituals/ritual-torma-altar.webp";
import ritualButterLampsImg from "@/assets/visuals/rituals/ritual-butter-lamps.webp";
import ritualMalaHandsImg from "@/assets/visuals/rituals/ritual-mala-hands.webp";

// 蓮師 / 藥師如來壇城圖：先用通用橫幅（後續若要獨立壇城圖再替換）
const altarPadmasambhavaImg = deityBannerImg;
const altarMedicineBuddhaImg = deityBannerImg;

// ----------------------------------------------------------------------
// 1. 基礎設定 (SITE)
// ----------------------------------------------------------------------
export const SITE = {
  name: "滿願藏庫",
  /** 官網主網址（SEO canonical / sitemap 用） */
  url: "https://zambala-tibetan.com.tw",

  /** 兼容舊組件：粉專連結（請勿改動追蹤碼） */
  fb: "https://www.facebook.com/profile.php?id=61583749010531",
  fbLabel: "任何問題歡迎到FB私訊我們",
  fbUrl: "https://www.facebook.com/profile.php?id=61583749010531",
} as const;

export const SITE_CONFIG = SITE;

// ----------------------------------------------------------------------
// 2. 視覺素材路徑 (VISUALS)
// ----------------------------------------------------------------------
export const VISUALS = {
  heroBrocade: heroBrocadeImg,
  heroGilded: heroGildedImg,
  sutraCloseup: sutraCloseupImg,
  deityBanner: deityBannerImg,

  altarYellow: altarYellowImg,
  altarMahashri: altarMahashriImg,
  altarGanapati: altarGanapatiImg,
  altarKurukulla: altarKurukullaImg,
  altarGreenTara: altarGreenTaraImg,

  altarPadmasambhava: altarPadmasambhavaImg,
  altarMedicineBuddha: altarMedicineBuddhaImg,
};

// ----------------------------------------------------------------------
// 3. 首頁見證 (HOME_TESTIMONIALS)
// ----------------------------------------------------------------------
export const HOME_TESTIMONIALS = [
  {
    title: "財庫與身心一起被接住了",
    body: "原本只是登記黃財神想解決資金缺口，沒想到團隊加碼回向了藥師佛煙供。這週不僅順利收到拖欠的款項，連續失眠好幾天的狀況也奇蹟般地平息了。",
    by: "高雄市 陳小姐",
  },
  {
    title: "資金的焦慮感降下來了",
    body: "原本卡住的資金順利到位，不穩定的收支逐漸平衡。最重要的是，每天追著錢跑的焦慮感終於平息了。",
    by: "台北市 張先生",
  },
  {
    title: "財庫的漏洞補上了",
    body: "財庫的漏洞彷彿被補上了，無謂的意外開銷明顯減少。存款終於能一點一滴累積。",
    by: "台中市 林小姐",
  },
  {
    title: "思緒異常清晰",
    body: "點燈護持後，思緒變得異常清晰。順利避開了一個充滿陷阱的合夥案，少走很多彎路。",
    by: "新竹縣 吳先生",
  },
  {
    title: "跨越重大難關",
    body: "在事業最黑暗、幾乎撐不下去的時候，蓮師的護持給了我極大的安定感，陪我度過最難熬的關口。",
    by: "桃園市 郭先生",
  },
  {
    title: "重拾踏實安全感",
    body: "登記法事後，壓在胸口那種莫名害怕出事的重擔感消失了，整個人重新找回了踏實的安全感。",
    by: "新北市 郭小姐",
  },
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
    summary: "透過如法護持，修復財庫漏洞，讓正當的努力能有踏實的回報。",
    ctaLabel: "查看資糧路徑",
  },
  {
    id: "obstacle",
    slug: "obstacle",
    title: "掃除障礙",
    deity: "ganapati",
    summary: "清除前行道路上的違緣阻礙，讓事業與生活重回穩定的正軌。",
    ctaLabel: "立即除障",
  },
  {
    id: "protection",
    slug: "protection",
    title: "威德護持",
    deity: "padmasambhava",
    summary: "仰仗大威德力，鎮伏一切內外恐懼，在低谷中為你建立穩固靠山。",
    ctaLabel: "獲得無畏護佑",
  },
] as const;

// ----------------------------------------------------------------------
// 5. 類型定義 (Types)
// ----------------------------------------------------------------------
export type DeityKey =
  | "yellow"
  | "mahashri"
  | "ganapati"
  | "kurukulla"
  | "padmasambhava"
  | "green-tara"
  | "medicine-buddha";

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

  /**
   * 正統儀軌（全文）：為滿足「嚴格遵循正法紀錄」，此處採用權威來源的原文/譯文全文。
   * - mdPath：對應 /public/rituals/*.md
   */
  readonly ritual?: {
    readonly title: string;
    readonly image: string;
    readonly imageAlt: string;
    /** /public/rituals/*.md */
    readonly mdPath: string;
    readonly sourceUrl: string;
    readonly license?: string;
    readonly note?: string;

    /** 儀軌要點（本站摘要，方便快速閱讀） */
    readonly keyPoints?: readonly string[];
    /** 如法供養清單（建議項） */
    readonly offeringsChecklist?: readonly string[];
    /** 觀修重點（觀想/持咒/發心/回向） */
    readonly practiceFocus?: readonly string[];
  };

  readonly plans: readonly Plan[];
  readonly faq: readonly { q: string; a: string }[];
  readonly crossSell: readonly { title: string; desc: string; to: DeityKey }[];
}

// ----------------------------------------------------------------------
// 6. 本尊全量資料庫 (DEITY_BY_KEY)
// ----------------------------------------------------------------------
export const DEITY_BY_KEY: Record<DeityKey, Deity> = {
  yellow: {
    key: "yellow",
    name: "黃財神",
    subtitle: "積聚資糧・廣修布施",
    route: "/deity/yellow",
    primaryIntent: "增加收入",
    heroKicker: "修補財庫的起點",
    heroImage: heroYellowImg,
    ritual: {
      title: "黃財神煙供（贊巴拉 Sang 供養）",
      image: ritualSangSmokeImg,
      imageAlt: "儀軌示意：香供／煙供（sang）之煙雲供養",
      mdPath: "yellow-jambhala-sang.md",
      sourceUrl:
        "https://www.lotsawahouse.org/tibetan-masters/jamyang-khyentse-chokyi-lodro/jambhala-sang",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "本站以『要點』協助你快速理解；全文則保留權威譯本原文，避免自行改寫失真。",
      keyPoints: [
        "發心：皈依三寶、發菩提心，以『利益眾生』為依歸。",
        "正行：依儀軌供養香煙（sang），以清淨供品作供養；持誦贊巴拉心咒，觀想甘露財寶攝受。",
        "對治：以布施心對治慳吝與匱乏相，令福德資糧自然增長。",
        "回向：先回向法界一切眾生，再回向護持者所求之正當資生與善緣。",
      ],
      offeringsChecklist: [
        "清淨香（沉香／檀香／薰香粉）與供器",
        "清淨水與供碗（可加少量藏紅花，量少即可）",
        "花、燈、香、果、食等基本供養（量力即可）",
      ],
      practiceFocus: [
        "觀想：本尊前降甘露，洗滌匱乏業印；財富以『正命』方式成熟。",
        "持咒：以『專注＋恭敬』為主，不以數量自壓；重在相續。",
        "回向：將功德回向眾生與護持者，避免落入唯我求取的狹小心。",
      ],
    },
    promise:
      "依贊巴拉教法，洗滌匱乏業印，修復財庫漏洞。我們不保證一夜致富，但祈願您的每一分踏實努力，都能獲得應有的豐饒回報。",
    scripture: [
      {
        quote: "「於諸賢聖給施所須；見求利者，方便佐助... 能令眾生得多資生報。」",
        source: "《佛說業報差別經》",
        hint: "布施，是資糧開始流動的起點",
        url: "#",
      },
    ],
    painPoints: ["資源匱乏、事業停滯", "現金流吃緊", "努力工作卻留不住錢"],
    whyThisDeity: ["補齊命中財庫不足", "啟動廣大布施緣起", "清淨貧窮業力障礙"],
    process: [
      { title: "發心與設供", body: "皈依三寶、發菩提心；依儀軌備妥清淨香／供水／供品，安置供養次第。" },
      { title: "煙供與持咒", body: "依贊巴拉法門作 sang 供養，持誦心咒，觀想甘露財寶攝受，令資糧緣起成熟。" },
      { title: "回向與落地", body: "先回向一切眾生，再回向護持者名單與所求正當資生；建議配合一個『小布施/小整理』讓因緣落地。" },
    ],
    plans: [
      {
        id: "y-490",
        name: "止漏起步｜黃財神供燈回向（微光點燈）",
        price: 490,
        blurb: "先把『漏』停住：對治慳吝與匱乏業印，讓財路重新有出口。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4W0",
        suitableFor: ["小額發心", "先穩住狀態"],
        details: ["如法供燈回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
      {
        id: "y-980",
        name: "開源增益｜黃財神連續水供回向（誠心攝受）",
        price: 980,
        blurb: "想加速開源、讓資糧開始動起來：用更完整的儀軌把方向拉回來。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4XF",
        hot: true,
        badge: "多數人的選擇",
        suitableFor: ["急需資金", "業績卡關"],
        details: ["連續水供儀軌", "專屬名單回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
      {
        id: "y-1860",
        name: "財路清障｜黃財神除障香供加強回向（深耕轉化）",
        price: 1860,
        blurb: "當你明明努力卻一直被打斷：用更強的清淨與除障，把財路的阻滯清出來。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3",
        suitableFor: ["事業擴張", "避開風險"],
        details: ["特製除障香供", "加強名單回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
    ],
    faq: [
      {
        q: "這是真實的法事，還是網路詐騙？費用如何處理？",
        a: "這不是網路買賣，而是真實的法事造冊。我們採用『綠界科技 ECPay』第三方金流，您的付款受銀行級保障。滿願藏庫台灣團隊皆為不支薪志工，扣除手續費後，您的護持金將全數交由西藏師兄姊化作壇城供品。若有疑慮，隨時歡迎私訊我們 FB 粉專確認名單。",
      },
      {
        q: "護持後我需要再做什麼配合嗎？",
        a: "不需要額外學習或自行操作儀式；我們會依儀軌如法修持並回向。你只要把祈願寫清楚、發心清淨即可。",
      },
      {
        q: "祈願內容怎麼寫比較對位？",
        a: "建議寫『你要守住/打通的是哪一件事』並附上具體情境（例如：現金流、業績、合作案、收支失衡等）。越具體越能對位回向方向。",
      },
      {
        q: "多久會開始修持？",
        a: "通常依現場排程於近期內依序進行；完成後若需要核對訂單與回向資訊，可透過 Facebook 私訊我們協助確認。",
      },
      {
        q: "可以同時回向多件事嗎？",
        a: "可以，但建議把『主軸』放一件最重要的，其餘列為次要補充，避免願望發散。",
      },
      {
        q: "名單與祈願會保密嗎？",
        a: "會。我們僅用於本次修持與回向，不會公開或挪作他用。",
      },
    ],
    crossSell: [
      { title: "若你更像是『焦慮、怕出事、怕突然崩』", desc: "看綠度母：迅疾救護，先把心與運勢穩住。", to: "green-tara" },
      { title: "若你其實卡在『決策錯、判斷亂、一直選錯』", desc: "看象頭財神：掃除違緣，讓你重新看得清楚。", to: "ganapati" },
    ],
  },

  mahashri: {
    key: "mahashri",
    name: "大吉祥天女",
    subtitle: "豐饒吉祥・資具無缺",
    route: "/deity/mahashri",
    primaryIntent: "家宅平安",
    heroKicker: "把生活穩穩守住",
    heroImage: heroMahashriImg,
    ritual: {
      title: "大吉祥天女陀羅尼（善女天咒）",
      image: ritualButterLampsImg,
      imageAlt: "儀軌示意：供燈（酥油燈／燈明供養）",
      mdPath: "mahashri-dharani.md",
      sourceUrl: "/resources/webpages/f-2023-15.pdf",
      note: "本站以『要點』協助你快速理解；全文保留經典/權威來源內容與出處，避免轉述失真。",
      keyPoints: [
        "發心：以護持眷屬平安、資具具足為願，皈依三寶、發菩提心。",
        "正行：依《金光明經》大吉祥天女品（或其陀羅尼）修持，配合供燈/供水等供養，建立吉祥緣起。",
        "對治：對治『耗損、散亂、家運不安』的因，令日常回到可安住、可積聚。",
        "回向：先回向一切眾生離苦得樂，再回向家宅成員衣食住藥具足、遠離衰損。",
      ],
      offeringsChecklist: [
        "燈明（酥油燈/供燈）與清淨供器",
        "清淨水與供碗（量力即可）",
        "花、香、果、食等五供（不必奢華，重在清淨與恭敬）",
      ],
      practiceFocus: [
        "觀修：觀想家宅光明安住，內心先定下來；以穩定心承接加持。",
        "持誦/讀誦：重在『日常相續』，不求急躁。",
        "回向：把所求寫得具體（家運/破財/紛爭/睡眠/孩子等），讓回向對位。",
      ],
    },
    promise: "依《金光明經》之願力，護佑家宅安隱，令生活資具無所匱乏。讓家真正成為你能夠休息、充電的避風港。",
    scripture: [
      {
        quote: "「…所謂飲食、衣服、臥具、醫藥，及餘一切所須資具，皆令圓滿無有乏少。」",
        source: "《金光明最勝王經》大吉祥天女品",
        hint: "先把日子守住：衣食住藥不再缺",
        url: "https://cbetaonline.dila.edu.tw/zh/T0665_008",
      },
      {
        quote: "「由能如是持經故，自身眷屬離諸衰；所須衣食無乏時…」",
        source: "《金光明最勝王經》大吉祥天女品（偈頌節錄）",
        hint: "『離諸衰』：把耗損的因先停下",
        url: "https://cbetaonline.dila.edu.tw/zh/T0665_008",
      },
    ],
    painPoints: ["家中燥氣重、紛爭多", "常有意外開銷、錢財流失", "覺得福報耗損很快"],
    whyThisDeity: ["平撫環境負面磁場", "建立家宅防護結界", "感召豐饒安隱能量"],
    process: [
      { title: "設供與發心", body: "備辦香、燈、花、食、水等五供；皈依三寶、發菩提心，以護持家宅安穩為願。" },
      { title: "讀誦與祈請", body: "依《金光明經》大吉祥天女品（或其陀羅尼）讀誦/持誦，祈請護佑、攝受吉祥。" },
      { title: "回向與安住", body: "先回向眾生離苦得樂，再回向家宅衣食住藥具足、遠離衰損；並以日常整理/和合溝通作配合。" },
    ],
    plans: [
      {
        id: "m-490",
        name: "吉祥護宅｜大吉祥天女供燈回向（微光點燈）",
        price: 490,
        blurb: "先把家運『穩住』：讓日常回到安定可呼吸，減少無謂耗損與躁動。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4ND",
        suitableFor: ["小額發心", "先安定"],
        details: ["吉祥供燈回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
      {
        id: "m-980",
        name: "資具具足｜大吉祥天女清淨水供回向（誠心攝受）",
        price: 980,
        blurb: "停下『一直在耗』的因：針對破財/意外開銷/家宅不寧，重建豐足與安隱的基底。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4PD",
        hot: true,
        badge: "守護家宅首選",
        suitableFor: ["意外破財", "家宅不寧"],
        details: ["清淨水供儀軌", "家宅平安回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
      {
        id: "m-1860",
        name: "安隱結界｜大吉祥天女清淨香供加強回向（深耕轉化）",
        price: 1860,
        blurb: "當你感覺家裡『很亂很耗』：以清淨香供強化護宅與安隱回向，讓氣場慢慢沉靜下來。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Q7",
        suitableFor: ["家宅安靜", "需要長期守護"],
        details: ["特製清淨香供", "家宅名單回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
    ],
    faq: [
      {
        q: "這是真實的法事，還是網路詐騙？費用如何處理？",
        a: "這不是網路買賣，而是真實的法事造冊。我們採用『綠界科技 ECPay』第三方金流，您的付款受銀行級保障。滿願藏庫台灣團隊皆為不支薪志工，扣除手續費後，您的護持金將全數交由西藏師兄姊化作壇城供品。若有疑慮，隨時歡迎私訊我們 FB 粉專確認名單。",
      },
      { q: "可以回向給全家人嗎？", a: "可以。一份護持可回向家中主要成員；也請在備註寫清楚『主要想守住的是哪一件事』（家運、工作、健康或支出等）。" },
      { q: "大吉祥天女比較適合求什麼？", a: "偏向『把生活守住』：家宅平安、資具無缺、耗損減少、日子回到可安住與可累積的狀態。" },
      { q: "祈願要寫得很長嗎？", a: "不用長，但要具體。用 3–5 句把現況、你想守住的重點、家中主要成員/對象寫清楚即可。" },
      { q: "需要自己準備供品或持咒嗎？", a: "不需要。我們會依儀軌備辦與修持並回向；你只需清淨發心、提供正確名單與祈願。" },
      { q: "如果我同時也想求財，該怎麼選？", a: "若目標是『家運與耗損』優先選大吉祥天女；若是『財庫止漏/開源』請看黃財神。也歡迎私訊我們描述狀況，協助你對位。" },
    ],
    crossSell: [
      { title: "若你其實最急的是『開源』", desc: "看黃財神：主動止漏、開源，讓現金流先過得去。", to: "yellow" },
      { title: "若你也常被『焦慮與突發恐懼』追著跑", desc: "看綠度母：先救急，讓身心回到穩定。", to: "green-tara" },
    ],
  },

  ganapati: {
    key: "ganapati",
    name: "象頭財神",
    subtitle: "無礙成就・決策清明",
    route: "/deity/ganapati",
    primaryIntent: "掃除障礙",
    heroKicker: "為你清開前方的路",
    heroImage: heroGanapatiImg,
    ritual: {
      title: "象頭財神讚頌（除障・開路法要）",
      image: ritualTormaAltarImg,
      imageAlt: "儀軌示意：壇城供品與朵瑪（torma）供養",
      mdPath: "ganapati.md",
      sourceUrl: "https://www.lotsawahouse.org/indian-masters/atisha/ganapati-ragavajra-praise",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "本站以『要點』協助你快速理解；全文保留權威譯本原文與出處。",
      keyPoints: [
        "發心：先把心安住，皈依三寶、發菩提心；所求以『正當、利己利他』為界。",
        "正行：依儀軌讚頌/持咒，供養朵瑪/供品，祈請除外障（環境）、內障（情緒）、密障（習氣）。",
        "重點：象頭財神的加持常表現在『條件被打通、決策變清明、阻礙減少』。",
        "回向：先回向眾生離障得安，再回向護持者之談判、面試、簽約、投資等正事得成辦。",
      ],
      offeringsChecklist: [
        "清淨供品（甜食/水果/糕點等，量力即可）",
        "供水/供香/供燈（基本供養）",
        "若有朵瑪（torma）供養則更相應；無亦可依儀軌如法替代",
      ],
      practiceFocus: [
        "觀修：障礙如霧散開，道路清楚可見；心不亂，才不會再選錯。",
        "持咒/讚頌：重在『清明＋決心』，不是硬撐數量。",
        "回向對位：把你要成辦的那件事寫具體（時間/對象/關鍵關卡）。",
      ],
    },
    promise: "強力掃除外、內、密違緣，於事業與競爭中為你找回清明的判斷力。當前方的霧散了，路自然好走。",
    scripture: [
      {
        quote: "「此是金色迦那鉢底除障難真言。若眾生受持真言者，所作諸法無不成。」",
        source: "《佛說金色迦那鉢底陀羅尼經》",
        hint: "除障的核心：把『卡住』先清掉",
        url: "https://tbsn.org/dynamics/detail/841",
      },
      {
        quote: "「若有眾生持此真言者… 所須資財臥具、衣服飲食、金銀珍寶… 所作就如意。」",
        source: "《佛說金色迦那鉢底陀羅尼經》",
        hint: "『就如意』：讓條件回到可成辦",
        url: "https://tbsn.org/dynamics/detail/841",
      },
    ],
    painPoints: ["投資失利、判斷錯誤", "職場小人作祟", "重大決策猶豫不決"],
    whyThisDeity: ["劈開認知死角與盲點", "平息外在干擾與違緣", "增長威德與主導力量"],
    process: [
      { title: "設供與安住", body: "以清淨供品（甜食/果品等）作供養；先把心安住，讓決策不被恐懼牽著走。" },
      { title: "除障與清明", body: "依儀軌讚頌/持咒，清除外在干擾與內在雜訊，讓條件回到可成辦。" },
      { title: "回向與成辦", body: "把你要過的那關寫具體（時間/對象/關鍵點），回向令正事順利、判斷清明、阻礙減少。" },
    ],
    plans: [
      {
        id: "g-490",
        name: "清明開路｜象頭財神供燈回向（微光點燈）",
        price: 490,
        blurb: "先把雜訊降下來：焦躁少一點、判斷清楚一點，你就不容易再選錯。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4R5",
        suitableFor: ["小額發心", "先清思"],
        details: ["清明供燈回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
      {
        id: "g-980",
        name: "破迷除障｜象頭財神除障水供回向（誠心攝受）",
        price: 980,
        blurb: "當你被壓力推著走：以除障水供穩住心、斷掉干擾，讓判斷回到你手上。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4S8",
        hot: true,
        badge: "沉穩決策首選",
        suitableFor: ["職場壓力", "面臨抉擇"],
        details: ["除障水供儀軌", "智慧決策回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
      {
        id: "g-1860",
        name: "無礙成就｜象頭財神破障香供加強回向（深耕轉化）",
        price: 1860,
        blurb: "當你努力推進卻總被人事/程序卡住：以破障香供強力清道，打通前行之路。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4T1",
        suitableFor: ["重大談判", "競標/簽約前"],
        details: ["特製破障香供", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
    ],
    faq: [
      {
        q: "這是真實的法事，還是網路詐騙？費用如何處理？",
        a: "這不是網路買賣，而是真實的法事造冊。我們採用『綠界科技 ECPay』第三方金流，您的付款受銀行級保障。滿願藏庫台灣團隊皆為不支薪志工，扣除手續費後，您的護持金將全數交由西藏師兄姊化作壇城供品。若有疑慮，隨時歡迎私訊我們 FB 粉專確認名單。",
      },
      { q: "適合求偏財嗎？", a: "象頭財神主要強項是『掃除違緣、提回清明判斷』；當判斷正確、阻礙減少，財路自然比較不會走歪。" },
      { q: "我該把哪些狀況寫在祈願裡？", a: "把你卡住的『障礙型態』寫清楚：例如拖延、溝通卡、合作破局、官非糾紛、合約不順、決策混亂等。" },
      { q: "修持後我需要做什麼？", a: "不需要你自行學儀軌。我們會依儀軌如法修持並回向；你只要配合把祈願與名單資訊寫對即可。" },
      { q: "可以回向到工作/公司/專案嗎？", a: "可以。你可以用『公司名/專案名』或你常用的稱呼來寫，並描述希望排除的關鍵阻礙。" },
      { q: "多久會有感？", a: "每個人因緣不同，常見的體感是：決策比較清楚、卡關處有鬆動、外在阻力減少。我們不賣神話，但求如法完成託付。" },
    ],
    crossSell: [
      { title: "若你更需要『直接開源』", desc: "看黃財神：先把現金流救回來。", to: "yellow" },
      { title: "若你其實已經快撐不住、很怕出事", desc: "看綠度母：先救急，讓你有力氣再做決策。", to: "green-tara" },
    ],
  },

  kurukulla: {
    key: "kurukulla",
    name: "作明佛母",
    subtitle: "愛敬磁聚・人緣貴人",
    route: "/deity/kurukulla",
    primaryIntent: "人緣貴人",
    heroKicker: "讓對的緣分自然靠近",
    heroImage: heroKurukullaImg,
    ritual: {
      title: "作明佛母儀軌（磁聚・愛敬・貴人緣）",
      image: ritualMalaHandsImg,
      imageAlt: "儀軌示意：持咒念珠（mala）修持",
      mdPath: "kurukulla.md",
      sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/mipham/kurukulla-sadhana",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "本站以『要點』協助你快速理解；全文保留權威譯本原文與出處。",
      keyPoints: [
        "發心：以大悲與清淨動機為先；所求以善緣、和合、正當合作/姻緣為界。",
        "正行：依儀軌持誦作明佛母咒，配合供養與觀想『磁聚』，令善緣聚集。",
        "重點：磁聚不是操控；是讓你更被看見、更能順利相應『對的人』。",
        "回向：先回向眾生離苦得樂，再回向你所求之關係/合作得和合、無障礙、具善果。",
      ],
      offeringsChecklist: [
        "供水/供香/供燈（基本供養）",
        "花供（象徵莊嚴與善緣）",
        "念珠（mala）或其他持咒工具（非必須）",
      ],
      practiceFocus: [
        "觀修：你自己的心要先柔軟、先不逼迫；磁聚才會自然。",
        "持咒：重在『恭敬＋不散亂』，不求急躁。",
        "回向：寫清楚你要的是哪一段關係/哪種合作與其善願。",
      ],
    },
    promise: "我們不賣感情挽回的神話，我們只為您點亮被看見的光，以佛母之磁聚加持，讓對的緣分與資源自然靠近，讓您不再只能一個人硬扛。",
    scripture: [
      {
        quote: "「以大悲心攝受眾生，令善緣聚集、所求易成。」",
        source: "傳承口訣（摘要）",
        hint: "磁聚不是操控，而是把自己放回善緣的路上",
        url: "#",
      },
    ],
    painPoints: ["感情總遇渣", "貴人少、資源接不上", "常覺得感情與事業只能自己硬扛"],
    whyThisDeity: ["磁聚善緣與合作機會", "化解人際違緣與誤會", "令資源流動、貴人現前"],
    process: [
      { title: "設供與發心", body: "備辦清淨供水/花供等；以大悲與清淨動機為先，所求以善緣和合為界。" },
      { title: "持咒與磁聚", body: "依儀軌持誦佛母心咒，觀想紅光攝召善緣：讓你被看見、被理解、被支持以及愛慕。" },
      { title: "回向與和合", body: "回向護持名單與所求之關係/合作得和合無礙；同時配合一個『真誠溝通/修復行動』讓善緣落地。" },
    ],
    plans: [
      {
        id: "k-490",
        name: "善緣點燈｜作明佛母磁聚回向（微光點燈）",
        price: 490,
        blurb: "先把『孤軍奮戰』鬆開：點亮善緣之光，讓資源與貴人開始有機會靠近。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5a8",
        suitableFor: ["人緣卡關", "想先暖身"],
        details: ["如法供燈回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
      {
        id: "k-980",
        name: "磁聚貴人｜作明佛母相應水供（誠心攝受）",
        price: 980,
        blurb: "當你需要更快遇見『對的人』：磁聚善緣、化解誤會，讓互動回到順利與可合作。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5bF",
        hot: true,
        badge: "懇切推薦",
        suitableFor: ["貴人少", "合作不成"],
        details: ["連續水供/相應儀軌", "名單回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
      {
        id: "k-1860",
        name: "和合修復｜作明佛母淨障磁聚加強回向（深耕轉化）",
        price: 1860,
        blurb: "當你被冷淡、被誤解、關係斷線：以更完整的淨障與磁聚，讓善緣重新接上。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5c3",
        suitableFor: ["關係修復", "重要合作"],
        details: ["加強儀軌", "名單回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
    ],
    faq: [
      {
        q: "這是真實的法事，還是網路詐騙？費用如何處理？",
        a: "這不是網路買賣，而是真實的法事造冊。我們採用『綠界科技 ECPay』第三方金流，您的付款受銀行級保障。滿願藏庫台灣團隊皆為不支薪志工，扣除手續費後，您的護持金將全數交由西藏師兄姊化作壇城供品。若有疑慮，隨時歡迎私訊我們 FB 粉專確認名單。",
      },
      { q: "需要提供對象姓名嗎？", a: "若是回向給特定對象/合作，可提供姓名或稱呼；若是泛用人緣，也可寫『希望吸引的對象特質』。" },
      { q: "比較適合用在什麼情境？", a: "偏向『攝召、聚合、把關係拉回對位』：人緣、客源、合作、談判與需要磁吸助緣的情境。" },
      { q: "祈願內容怎麼寫才不會太籠統？", a: "建議寫清楚：你希望『吸引什麼』與『排除什麼』（例如：吸引穩定長期合作、排除消耗型對象），並附上目前情境。" },
      { q: "我需要做什麼配合？", a: "不需要你自行操作儀式。我們會依儀軌如法修持並回向；你只要提供正確名單與祈願。" },
    ],
    crossSell: [
      { title: "若你其實不是沒人緣，而是『你心很不安』", desc: "看綠度母：先讓情緒與安全感穩下來，關係才有空間變好。", to: "green-tara" },
      { title: "若你也同時卡在『一直選錯』", desc: "看象頭財神：清明判斷，少走彎路。", to: "ganapati" },
    ],
  },

  padmasambhava: {
    key: "padmasambhava",
    name: "蓮花生大士",
    subtitle: "總集加持・無畏護持",
    route: "/deity/padmasambhava",
    primaryIntent: "威德護持",
    heroKicker: "在你最脆弱時撐住你",
    heroImage: heroPadmasambhavaImg,
    ritual: {
      title: "蓮師七句祈請文（總集加持・無畏護持）",
      image: ritualSangSmokeImg,
      imageAlt: "儀軌示意：焚香持誦祈請",
      mdPath: "seven-line-prayer.md",
      sourceUrl: "https://www.lotsawahouse.org/topics/seven-line-prayer/",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "本站以『要點』協助你快速理解；全文保留權威譯本/原文與出處。",
      keyPoints: [
        "發心：皈依三寶、發菩提心；在恐懼與低谷中，先把心投向正法依止。",
        "正行：依七句祈請文祈請蓮師，配合供香/供燈/供水；以恭敬心啟動相應。",
        "重點：蓮師法門重在『總集加持』——讓你在混亂中回到無畏、回到可承擔。",
        "回向：先回向眾生離苦得樂，再回向護持者遠離怖畏、違緣止息、正事得成。",
      ],
      offeringsChecklist: [
        "香（或薰香）與清淨供器",
        "燈明（酥油燈/供燈）",
        "清淨水與供碗",
      ],
      practiceFocus: [
        "觀修：觀想蓮師放光攝受，怖畏與障礙融於光明中。",
        "持誦：重在『信心與相續』，不以焦躁求靈驗。",
        "回向：把你最需要被撐住的那件事寫具體（事業/家庭/身心/考驗）。",
      ],
    },
    promise: "我們沒有華麗的神蹟保證，但仰仗蓮師無量威德，鎮伏一切邪祟與內外密障礙；當你走到最黑的地方，我們願替你在壇城前點亮一盞不滅的燈。",
    scripture: [
      {
        quote: "「我無死生之別，於諸信心者前，我即現其前而為加持。」",
        source: "蓮師傳承語錄",
        hint: "你不是一個人在撐",
        url: "#",
      },
      {
        quote: "「吽！鄔金淨土西北隅，殊勝無上成就者… 隨尊成就我修持，咕嚕貝瑪悉地吽」",
        source: "《蓮師七句祈請文》",
        hint: "把心靠上去，讓護持先到位",
        url: "https://zh.wikisource.org/zh-hant/%E8%93%AE%E5%B8%AB%E4%B8%83%E5%8F%A5%E7%A5%88%E8%AB%8B%E6%96%87",
      },
    ],
    painPoints: ["面臨巨大挑戰與難關", "感覺受負面能量干擾", "需要強大穩定的精神靠山"],
    whyThisDeity: ["藏傳佛法根本護持力", "轉化惡緣為道用", "鎮伏恐懼，建立無畏"],
    process: [
      { title: "設供與依止", body: "備香、燈、水等清淨供養；以信心依止三寶與蓮師，先把心靠上去。" },
      { title: "祈請與相應", body: "依七句祈請文/蓮師心咒作修持，令恐懼與散亂慢慢沉下來，心回到可承擔。" },
      { title: "回向與無畏", body: "先回向眾生離苦得樂，再回向護持者遠離怖畏、違緣止息、正事得成辦。" },
    ],
    plans: [
      {
        id: "p-490",
        name: "無畏點燈｜蓮師七句祈請回向（微光點燈）",
        price: 490,
        blurb: "先讓心『站穩』：當你快被壓垮，先把內在靠山立起來。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Z5",
        suitableFor: ["日常祈福", "需要安定"],
        details: ["如法供燈/回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
      {
        id: "p-980",
        name: "鎮伏護持｜蓮師加強護法回向（誠心攝受）",
        price: 980,
        blurb: "當你已經走到『不能再出事』：以更完整的護持把恐懼與干擾壓下來，讓你能穩定撐過關口。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5d7",
        hot: true,
        badge: "無畏首選",
        suitableFor: ["感覺受干擾", "運勢低迷"],
        details: ["加強護持儀軌", "名單回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
    ],
    faq: [
      {
        q: "這是真實的法事，還是網路詐騙？費用如何處理？",
        a: "這不是網路買賣，而是真實的法事造冊。我們採用『綠界科技 ECPay』第三方金流，您的付款受銀行級保障。滿願藏庫台灣團隊皆為不支薪志工，扣除手續費後，您的護持金將全數交由西藏師兄姊化作壇城供品。若有疑慮，隨時歡迎私訊我們 FB 粉專確認名單。",
      },
      { q: "任何人都可以護持蓮師嗎？", a: "可以。只要具備信心與清淨發心，蓮師的加持不分對象。" },
      { q: "祈願內容怎麼寫？", a: "建議把『你最怕出事的是哪一塊』寫清楚（家宅、工作、出行、官非、身心恐懼等），並描述近期發生的狀況。" },
      { q: "需要自己念什麼或做什麼嗎？", a: "不需要。我們會依儀軌如法修持並回向；你只需提供名單與祈願資訊。" },
      { q: "可以回向給家人/小孩嗎？", a: "可以。請把回向對象姓名或稱呼、關係與主要狀況寫清楚，便於對位回向。" },
    ],
    crossSell: [
      { title: "若你其實卡在『錢一直破洞』", desc: "看黃財神：先止漏，再開源。", to: "yellow" },
      { title: "若你需要更快平息突發恐懼", desc: "看綠度母：迅疾救護，先救急。", to: "green-tara" },
    ],
  },

  "medicine-buddha": {
    key: "medicine-buddha",
    name: "藥師如來",
    subtitle: "琉璃光境・健康息災",
    route: "/deity/medicine-buddha",
    primaryIntent: "健康息災",
    heroKicker: "為您補回流失的元氣",
    heroImage: heroMedicineBuddhaImg,
    ritual: {
      title: "藥師如來儀軌（息災延壽・身心安穩）",
      image: ritualWaterOfferingImg,
      imageAlt: "儀軌示意：淨水與供碗供養",
      mdPath: "medicine-buddha.md",
      sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/karma-chakme/medicine-buddha-sadhana",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "本站以『要點』協助你快速理解；全文保留權威譯本原文與出處。",
      keyPoints: [
        "發心：皈依三寶、發菩提心；以『息災、護生、安穩』為願，不以護持取代醫療。",
        "正行：依藥師法門設供（尤其清淨水供），持誦藥師佛名號/心咒，祈請琉璃光照臨。",
        "重點：先把『元氣』補回來——睡眠、情緒、身體狀態穩了，外緣才不容易再耗損。",
        "回向：先回向眾生離病苦，再回向護持者（本人/家人）身心安穩、息災延壽。",
      ],
      offeringsChecklist: [
        "清淨水供（供碗/清水）",
        "供燈/供香（量力）",
        "若有病者姓名/稱呼與狀況描述（便於回向對位）",
      ],
      practiceFocus: [
        "觀修：琉璃光明遍照，病苦與怖畏融解於光中。",
        "持誦：重在『規律與安住』，不以焦躁強求。",
        "提醒：本護持不能取代就醫；建議同步遵循醫囑與照護。",
      ],
    },
    promise:
      "我們絕不以法事取代正規醫療。但依藥師法門之願力，我們願為您回向身心安穩、息災延壽。當您覺得運勢與體力一直在耗損，讓佛法的清淨為您補回元氣。",
    scripture: [
      {
        quote: "「第七大願：願我來世… 若諸有情，衆病逼切… 我之名號一經其耳，衆病悉除、身心安樂…」",
        source: "《藥師瑠璃光如來本願功德經》",
        hint: "先把『病與怕』降下來",
        url: "https://ctext.org/wiki.pl?if=gb&chapter=594160",
      },
    ],
    painPoints: ["健康反覆、精神耗損", "家人身心不安", "覺得一直在走衰、出狀況"],
    whyThisDeity: ["以息災為先，先把狀態救回來", "回向健康與平安，讓生活少一點『突然』", "在危機感中重新建立可控感"],
    process: [
      { title: "設供與發心", body: "依儀軌設供（尤重清淨水供）；皈依三寶、發菩提心，以息災護生為願。" },
      { title: "持誦與息災", body: "依藥師法門持誦名號/心咒，回向身心安穩；建議同步規律作息與照護。" },
      { title: "回向對位", body: "回向本人或家人；請把狀況寫具體（症狀/時間/困擾），讓回向更精準。" },
    ],
    plans: [
      {
        id: "b-350",
        name: "琉璃光息災｜藥師如來個人健康回向（微光點燈）",
        price: 350,
        blurb: "回向個人身心安穩與息災：先把狀態穩住，才走得遠。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4V8",
        suitableFor: ["個人健康", "情緒耗損"],
        details: ["如法煙供", "名單回向"],
      },
      {
        id: "b-880",
        name: "琉璃光守護｜藥師如來家人/團體息災回向（誠心攝受）",
        price: 880,
        blurb: "回向家人/團體平安：當你想一起守住一個家、一個團隊的狀態，讓日子少一點『突然』。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4U2",
        hot: true,
        badge: "安定首選",
        suitableFor: ["家人平安", "團體息災"],
        details: ["如法煙供", "團體名單回向"],
      },
    ],
    faq: [
      {
        q: "這是真實的法事，還是網路詐騙？費用如何處理？",
        a: "這不是網路買賣，而是真實的法事造冊。我們採用『綠界科技 ECPay』第三方金流，您的付款受銀行級保障。滿願藏庫台灣團隊皆為不支薪志工，扣除手續費後，您的護持金將全數交由西藏師兄姊化作壇城供品。若有疑慮，隨時歡迎私訊我們 FB 粉專確認名單。",
      },
      { q: "這能取代醫療嗎？", a: "絕對不能。這是以佛法心念與回向來『息災修福、穩住狀態』；若有身體不適，請務必先就醫與規律照護。" },
      { q: "適合回向給家人嗎？", a: "可以。你可以提供家人的姓名/稱呼與主要狀況，讓回向更精準。" },
      { q: "祈願內容要怎麼寫？", a: "把狀況寫具體（症狀/時間/困擾/你最希望先改善的重點）。越具體越能對位回向方向。" },
      { q: "修持後我需要做什麼？", a: "不需要你自行學儀軌；我們會依儀軌如法修持並回向。你只需配合保持清淨發心與日常照護。" },
    ],
    crossSell: [
      { title: "若你其實最大的痛是『焦慮與恐懼』", desc: "看綠度母：迅疾救護，先把心拉回來。", to: "green-tara" },
      { title: "若你要在恢復後重新打通工作與決策", desc: "看象頭財神：清明判斷，把路打通。", to: "ganapati" },
    ],
  },

  "green-tara": {
    key: "green-tara",
    name: "綠度母",
    subtitle: "慈悲救護・迅疾除障",
    route: "/deity/green-tara",
    primaryIntent: "迅疾救護",
    heroKicker: "先把無名的恐懼停下",
    heroImage: heroGreenTaraImg,
    ritual: {
      title: "綠度母日常修持（迅疾救護・除怖畏）",
      image: ritualButterLampsImg,
      imageAlt: "儀軌示意：供燈與日常供養",
      mdPath: "green-tara.md",
      sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/dudjom-rinpoche/daily-green-tara-practice",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "本站以『要點』協助你快速理解；全文保留權威譯本原文與出處。",
      keyPoints: [
        "發心：皈依三寶、發菩提心；以救護眾生離怖畏、離災障為願。",
        "正行：依儀軌祈請綠度母，持誦禮讚/心咒；以供燈/供水等清淨供養作相應。",
        "重點：綠度母以『迅疾』著稱——常見呈現是：驚慌下降、事情轉圜、違緣減少。",
        "回向：先回向眾生離苦得樂，再回向護持者遠離八難與突發怖畏、諸事順遂。",
      ],
      offeringsChecklist: [
        "供燈（酥油燈/供燈）",
        "清淨水供",
        "花/香等基本供養（量力）",
      ],
      practiceFocus: [
        "觀修：觀想度母放光救護，怖畏如霧散去；心先回到安穩。",
        "持誦：重在『不散亂』與『信心』，把心念拉回來。",
        "回向：把你最怕『突然出事』的那一點寫具體（交通/官司/工作/家人）。",
      ],
    },
    promise: "我們不賣速效神話，但仰仗大悲度母誓願，當您深陷恐懼與突發變故時，我們願為您如法祈請，讓生活重回平安，讓焦躁的心得以喘息。",
    scripture: [
      {
        quote: "「敬禮迅捷勇悍度母，眼如閃電剎那光。」",
        source: "《二十一聖救度母禮讚文》",
        hint: "迅疾回應，先救急",
        url: "#",
      },
      {
        quote: "「若以絕對的虔信、恭敬、利眾之心… 早晚恭誦《二十一聖救度母禮讚文》七遍，可遠離… 災難及病痛…」",
        source: "觀音山法藏：度母禮讚文功德利益整理",
        hint: "把心穩住，災難就沒那麼容易擴大",
        url: "https://www.fazang.org/greentara/",
      },
    ],
    painPoints: ["莫名焦慮不安", "生活阻力重重、運勢低迷", "遭遇突發變故或驚嚇"],
    whyThisDeity: ["迅疾的加持力", "消除恐懼與不安全感", "平息世俗種種障礙"],
    process: [
      { title: "設供與發心", body: "備辦香、燈、淨水等清淨供養；皈依三寶、發菩提心，以救護離怖畏為願。" },
      { title: "祈請與持誦", body: "依儀軌祈請綠度母，持誦禮讚/心咒；以不散亂心把恐懼與焦躁先降下來。" },
      { title: "回向與守護", body: "先回向眾生離苦得樂，再回向護持者遠離八難與突發怖畏；把最怕的那一點寫清楚。" },
    ],
    plans: [
      {
        id: "t-680",
        name: "迅疾救護｜綠度母慈悲供燈回向（微光點燈）",
        price: 680,
        blurb: "度母救八難：當你很怕、很累、很不安，先把心安下來，讓事情有轉圜空間。",
        url: "https://cart.cashier.ecpay.com.tw/qp/zEJ1",
        suitableFor: ["日常祈福", "先救急"],
        details: ["慈悲供燈回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
      {
        id: "t-1280",
        name: "八難止息｜綠度母深度除障救護回向（誠心攝受）",
        price: 1280,
        blurb: "當你覺得『再出事我就扛不住』：以更完整的除障救護回向先把運勢穩住，讓你能撐過關口。",
        url: "https://cart.cashier.ecpay.com.tw/qp/zED7",
        hot: true,
        badge: "救急首選",
        suitableFor: ["身心疲累", "運勢低迷"],
        details: ["深度除障儀軌", "救護加持回向", "✦ 本月加碼：每週六藥師佛息災煙供名額"],
      },
    ],
    faq: [
      {
        q: "這是真實的法事，還是網路詐騙？費用如何處理？",
        a: "這不是網路買賣，而是真實的法事造冊。我們採用『綠界科技 ECPay』第三方金流，您的付款受銀行級保障。滿願藏庫台灣團隊皆為不支薪志工，扣除手續費後，您的護持金將全數交由西藏師兄姊化作壇城供品。若有疑慮，隨時歡迎私訊我們 FB 粉專確認名單。",
      },
      { q: "為什麼稱為迅疾？", a: "度母右足下垂，象徵隨時起身救度；所以我們把『先救急、先穩住』放在第一順位。" },
      { q: "適合什麼樣的狀況？", a: "偏向『突發怖畏、焦慮不安、事情一直出狀況』：先把心與運勢拉回可控，讓違緣減少、轉圜出現。" },
      { q: "祈願內容怎麼寫比較對位？", a: "建議寫清楚：你目前最怕的是什麼（突發、意外、關係崩、工作出事等），以及你希望先守住哪一件事。" },
      { q: "如果我同時也想求財或人緣呢？", a: "若當下最痛是『不安與突發』先以綠度母穩住；等狀態回來，再依需求對位黃財神（財）或作明佛母（人緣/攝召）。" },
    ],
    crossSell: [
      { title: "若你最急的是『現金流』", desc: "看黃財神：先止漏，再開源。", to: "yellow" },
      { title: "若你正在一場大考驗裡，需要靠山", desc: "看蓮師：總集加持，把你撐住。", to: "padmasambhava" },
    ],
  },
};

// ----------------------------------------------------------------------
// 7. 導出輔助函數與陣列
//    為了固定排序：請用明確陣列，不用 Object.values
// ----------------------------------------------------------------------
export const DEITIES: Deity[] = [
  DEITY_BY_KEY["padmasambhava"],
  DEITY_BY_KEY["yellow"],
  DEITY_BY_KEY["mahashri"],
  DEITY_BY_KEY["ganapati"],
  DEITY_BY_KEY["kurukulla"],
  DEITY_BY_KEY["medicine-buddha"],
  DEITY_BY_KEY["green-tara"],
];

export const money = (val: number) => val.toLocaleString();