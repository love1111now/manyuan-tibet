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

import heroMahashriImg from "@/assets/visuals/generated/deity-mahashri.webp";
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
  fbLabel: "追蹤FB獲得更多訊息",
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
    title: "業績突然好轉",
    body: "原本卡住的資金順利到位，不穩定的收支逐漸平衡，心也定了。更神奇的是，接到一筆大額訂單。",
    by: "台北市 張先生",
  },
  {
    title: "財庫的漏洞補上了",
    body: "財庫的漏洞彷彿被補上了，無謂的意外開銷明顯減少。存款終於能累積。",
    by: "台中市 林小姐",
  },
  {
    title: "思緒異常清晰",
    body: "點燈護持後，思緒變得異常清晰。順利避開了一個有問題的合夥案。",
    by: "新竹縣 吳先生",
  },
  {
    title: "跨越重大難關",
    body: "在事業最黑暗、幾乎撐不下去的時候，蓮師的護持給了我極大的安定感，最後奇蹟般地度過難關。",
    by: "桃園市 郭先生",
  },
  {
    title: "重拾踏實安全感",
    body: "報名火供後，壓在胸口的重擔感消失了，整個人重新找回了踏實的安全感。",
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
    summary: "透過如法護持，修復財庫漏洞，啟動正向豐饒緣起。",
    ctaLabel: "查看資糧路徑",
  },
  {
    id: "obstacle",
    slug: "obstacle",
    title: "掃除障礙",
    deity: "ganapati",
    summary: "清除前行道路上的違緣阻礙，讓事業與生活重回正軌。",
    ctaLabel: "立即除障",
  },
  {
    id: "protection",
    slug: "protection",
    title: "威德護持",
    deity: "padmasambhava",
    summary: "仰仗大威德力，鎮伏一切內外障礙，建立穩固靠山。",
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
    readonly mdPath: string;
    readonly sourceUrl: string;
    readonly license?: string;
    readonly note?: string;
  };

  readonly plans: readonly Plan[];
  readonly faq: readonly { q: string; a: string }[];
  readonly crossSell: readonly { title: string; desc: string; to: DeityKey }[];
}

// ----------------------------------------------------------------------
// 6. 本尊全量資料庫 (DEITY_BY_KEY)
//    注意：方案與連結已依「法事列表.txt」校正
// ----------------------------------------------------------------------
export const DEITY_BY_KEY: Record<DeityKey, Deity> = {
  yellow: {
    key: "yellow",
    name: "黃財神",
    subtitle: "積聚資糧・廣修布施",
    route: "/deity/yellow",
    primaryIntent: "增加收入",
    heroKicker: "資糧增益首選",
    heroImage: heroYellowImg,
    ritual: {
      title: "黃財神煙供（Sang Offering to Yellow Jambhala）",
      image: ritualSangSmokeImg,
      imageAlt: "儀軌示意：香供／煙供（sang）之煙雲供養",
      mdPath: "yellow-jambhala-sang.md",
      sourceUrl:
        "https://www.lotsawahouse.org/tibetan-masters/jamyang-khyentse-chokyi-lodro/jambhala-sang",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "全文引用自 Lotsawa House（權威譯本）。若你採用水供法，另可參考：The Verse for Offering Water（Dudjom Lingpa）。",
    },
    promise:
      "依贊巴拉教法，洗滌匱乏業印，修復財庫漏洞，開啟世間與出世間之財富源泉。對治慳吝心，令福德增長。",
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
      { title: "安置水供", body: "準備清淨藏紅花水，依儀軌整齊排列供碗。" },
      { title: "誦咒加持", body: "持誦本尊心咒，觀想甘露加持灌頂。" },
      { title: "如法回向", body: "將功德鎖定於護持者名單，祈願資糧盈滿。" },
    ],
    plans: [
      {
        id: "y-490",
        name: "黃財神 490",
        price: 490,
        blurb: "先把『漏』停住：對治慳吝與匱乏業印，讓財路重新有出口。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4W0",
        suitableFor: ["小額發心", "先穩住狀態"],
        details: ["如法供燈回向"],
      },
      {
        id: "y-980",
        name: "黃財神 980",
        price: 980,
        blurb: "想加速開源、讓資糧開始動起來：用更完整的儀軌把方向拉回來。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4XF",
        hot: true,
        badge: "最常被選",
        suitableFor: ["急需資金", "業績卡關"],
        details: ["連續水供儀軌", "專屬名單回向"],
      },
      {
        id: "y-1860",
        name: "黃財神 1860",
        price: 1860,
        blurb: "當你明明努力卻一直被打斷：用更強的清淨與除障，把財路的阻滯清出來。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3",
        suitableFor: ["事業擴張", "避開風險"],
        details: ["特製除障香供", "加強名單回向"],
      },
    ],
    faq: [
      {
        q: "護持後需要特別做什麼嗎？",
        a: "建議做一個很小但很實際的布施：請一杯飲料給同事、捐個零錢、把抽屜裡的舊物整理捐出。不是迷信，是把『願意讓資源流動』這個因，種得更穩。",
      },
      {
        q: "一定要每天做嗎？",
        a: "本法事由現場代為執行，您只需保持清淨發心、把祈願寫清楚即可。",
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
    heroKicker: "把生活守住",
    heroImage: heroMahashriImg,
    ritual: {
      title: "大吉祥天女陀羅尼（善女天咒）",
      image: ritualButterLampsImg,
      imageAlt: "儀軌示意：供燈（酥油燈／燈明供養）",
      mdPath: "mahashri-dharani.md",
      sourceUrl: "/resources/webpages/f-2023-15.pdf",
      note: "此處呈現之全文來源為《金光明最勝王經》相關陀羅尼整理版（見 PDF）。",
    },
    promise: "依《金光明經》之願力，護佑家宅安隱，令生活資具無所匱乏。",
    scripture: [
      {
        quote: "「…所謂飲食、衣服、臥具、醫藥，及餘一切所須資具，皆令圓滿無有乏少。」",
        source: "《金光明最勝王經》大吉祥天女品（CBETA T16n0665_008）",
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
      { title: "備辦五供", body: "準備香、燈、花、食、水，表法圓滿。" },
      { title: "讀誦天女品", body: "讀誦《金光明最勝王經》天女品，祈請護佑。" },
      { title: "安隱迴向", body: "回向家宅平安、資具無缺，讓日子重新『可呼吸』。" },
    ],
    plans: [
      {
        id: "m-490",
        name: "大吉祥天女 490",
        price: 490,
        blurb: "先穩住家運：把散掉的安全感收回來，讓日常重新有秩序。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4ND",
        suitableFor: ["小額發心", "先安定"],
        details: ["吉祥供燈回向"],
      },
      {
        id: "m-980",
        name: "大吉祥天女 980",
        price: 980,
        blurb: "當你一直覺得『怎麼又要花錢』：把耗損的因停下來，重建豐足磁場。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4PD",
        hot: true,
        badge: "豐足首選",
        suitableFor: ["意外破財", "家宅不寧"],
        details: ["清淨水供儀軌", "家宅平安回向"],
      },
      {
        id: "m-1860",
        name: "大吉祥天女 1860",
        price: 1860,
        blurb: "當家裡氣場很亂、人很累：用清淨香供把躁氣與耗損感降下來。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Q7",
        suitableFor: ["家宅安靜", "需要長期守護"],
        details: ["特製清淨香供", "家宅名單回向"],
      },
    ],
    faq: [{ q: "可以回向給全家人嗎？", a: "可以。一份護持可回向家中主要成員；你也可以在備註處寫清楚『想守的是哪一件事』。" }],
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
    heroKicker: "把路打通",
    heroImage: heroGanapatiImg,
    ritual: {
      title: "Gaṇapati Rāgavajra Praise（象頭財神讚頌）",
      image: ritualTormaAltarImg,
      imageAlt: "儀軌示意：壇城供品與朵瑪（torma）供養",
      mdPath: "ganapati.md",
      sourceUrl: "https://www.lotsawahouse.org/indian-masters/atisha/ganapati-ragavajra-praise",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "全文引用自 Lotsawa House（Atiśa 之譯本/整理），以確保依據權威記錄呈現。",
    },
    promise: "強力掃除外、內、密違緣，於事業與競爭中掌握清明判斷與主導。",
    scripture: [
      {
        quote: "「此是金色迦那鉢底除障難真言。若眾生受持真言者，所作諸法無不成。」",
        source: "《佛說金色迦那鉢底陀羅尼經》節錄（TBSN 引文）",
        hint: "除障的核心：把『卡住』先清掉",
        url: "https://tbsn.org/dynamics/detail/841",
      },
      {
        quote: "「若有眾生持此真言者… 所須資財臥具、衣服飲食、金銀珍寶… 所作就如意。」",
        source: "《佛說金色迦那鉢底陀羅尼經》節錄（TBSN 引文）",
        hint: "『就如意』：讓條件回到可成辦",
        url: "https://tbsn.org/dynamics/detail/841",
      },
    ],
    painPoints: ["投資失利、判斷錯誤", "職場小人作祟", "重大決策猶豫不決"],
    whyThisDeity: ["劈開認知死角與盲點", "平息外在干擾與違緣", "增長威德與主導力量"],
    process: [
      { title: "禮敬甜食", body: "依傳統供養歡喜天喜愛之物，建立歡喜相應。" },
      { title: "除障儀軌", body: "持誦陀羅尼，掃除決策迷霧與違緣障礙。" },
      { title: "成就迴向", body: "回向你要做的那件事：談判、面試、簽約、投資決策。" },
    ],
    plans: [
      {
        id: "g-490",
        name: "象頭財神 490",
        price: 490,
        blurb: "先把腦中的雜訊降下來：清明一點，你就不容易選錯。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4R5",
        suitableFor: ["小額發心", "先清思"],
        details: ["清明供燈回向"],
      },
      {
        id: "g-980",
        name: "象頭財神 980",
        price: 980,
        blurb: "當你被壓力推著走：平息焦躁、斷掉外在干擾，讓判斷回到你手上。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4S8",
        hot: true,
        badge: "破迷必備",
        suitableFor: ["職場壓力", "面臨抉擇"],
        details: ["除障水供儀軌", "智慧決策回向"],
      },
      {
        id: "g-1860",
        name: "象頭財神 1860",
        price: 1860,
        blurb: "當你明明努力推進，卻總有人事/程序把你卡住：強力破障，打通前行路。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4T1",
        suitableFor: ["重大談判", "競標/簽約前"],
        details: ["特製破障香供"],
      },
    ],
    faq: [{ q: "適合求偏財嗎？", a: "象頭財神幫你把『判斷力』提回來；當判斷正確，財路自然比較不會走歪。" }],
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
    heroKicker: "把緣分拉近",
    heroImage: heroKurukullaImg,
    ritual: {
      title: "Kurukullā Sādhana（作明佛母儀軌）",
      image: ritualMalaHandsImg,
      imageAlt: "儀軌示意：持咒念珠（mala）修持",
      mdPath: "kurukulla.md",
      sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/mipham/kurukulla-sadhana",
      license: "CC BY-NC 4.0 (Lotsawa House)",
    },
    promise: "以佛母之磁聚加持，令貴人資源相續現前、合作姻緣順利成就；讓你不再靠硬扛，能被看見、被支持。",
    scripture: [
      {
        quote: "「以大悲心攝受眾生，令善緣聚集、所求易成。」",
        source: "傳承口訣（摘要）",
        hint: "磁聚不是操控，而是把自己放回善緣的路上",
        url: "#",
      },
    ],
    painPoints: ["人脈卡住、資源接不上", "貴人少、合作不成", "常覺得只能自己硬扛"],
    whyThisDeity: ["磁聚善緣與合作機會", "化解人際違緣與誤會", "令資源流動、貴人現前"],
    process: [
      { title: "安置供品", body: "備辦清淨供品，安立磁聚壇城。" },
      { title: "持誦觀想", body: "持誦佛母心咒，觀想紅光攝召善緣。" },
      { title: "迴向鎖定", body: "回向護持名單：你要的是哪一段關係、哪一種合作，寫清楚。" },
    ],
    plans: [
      {
        id: "k-490",
        name: "作明佛母 490",
        price: 490,
        blurb: "先把『孤軍奮戰』的狀態鬆開：點亮善緣之光，讓資源開始靠近。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5a8",
        suitableFor: ["人緣卡關", "想先暖身"],
        details: ["如法供燈回向"],
      },
      {
        id: "k-980",
        name: "作明佛母 980",
        price: 980,
        blurb: "當你需要更快出現『對的人』：磁聚善緣、化解誤會，讓互動回到順。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5bF",
        hot: true,
        badge: "人緣首選",
        suitableFor: ["貴人少", "合作不成"],
        details: ["連續水供/相應儀軌", "名單回向"],
      },
      {
        id: "k-1860",
        name: "作明佛母 1860",
        price: 1860,
        blurb: "當你被冷淡、被忽略、被誤解：用更完整的磁聚與淨障，讓善緣重新接上。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5c3",
        suitableFor: ["關係修復", "重要合作"],
        details: ["加強儀軌", "名單回向"],
      },
    ],
    faq: [{ q: "需要提供對象姓名嗎？", a: "若是回向給特定對象/合作，可提供姓名或稱呼；若是泛用人緣，也可寫『希望吸引的對象特質』。" }],
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
    heroKicker: "把你撐住",
    heroImage: heroPadmasambhavaImg,
    ritual: {
      title: "Seven-Line Prayer（蓮師七句祈請文）",
      image: ritualSangSmokeImg,
      imageAlt: "儀軌示意：焚香持誦祈請",
      mdPath: "seven-line-prayer.md",
      sourceUrl: "https://www.lotsawahouse.org/topics/seven-line-prayer/",
      license: "CC BY-NC 4.0 (Lotsawa House)",
    },
    promise: "仰仗蓮師無量威德，鎮伏一切邪祟與內外密障礙；當你走到最黑的地方，也還有一盞燈替你亮著。",
    scripture: [
      {
        quote: "「我無死生之別，於諸信心者前，我即現其前而為加持。」",
        source: "蓮師傳承語錄（常見漢譯引文）",
        hint: "你不是一個人在撐",
        url: "#",
      },
      {
        quote: "「吽！鄔金淨土西北隅，殊勝無上成就者… 隨尊成就我修持，咕嚕貝瑪悉地吽」",
        source: "《蓮師七句祈請文》（維基文庫）",
        hint: "把心靠上去，讓護持先到位",
        url: "https://zh.wikisource.org/zh-hant/%E8%93%AE%E5%B8%AB%E4%B8%83%E5%8F%A5%E7%A5%88%E8%AB%8B%E6%96%87",
      },
    ],
    painPoints: ["面臨巨大挑戰與難關", "感覺受負面能量干擾", "需要強大穩定的精神靠山"],
    whyThisDeity: ["藏傳佛法根本護持力", "轉化惡緣為道用", "鎮伏恐懼，建立無畏"],
    process: [
      { title: "清淨供養", body: "敬備妙香與供品，祈請蓮師降臨。" },
      { title: "持誦祈請", body: "持誦蓮師心咒與祈請文，令心念穩住。" },
      { title: "威德迴向", body: "回向你最需要被撐住的那一段：事業、家庭、身心、或一場大考驗。" },
    ],
    plans: [
      {
        id: "p-490",
        name: "蓮師 490",
        price: 490,
        blurb: "先讓心『站穩』：當你快被壓垮，先把內在靠山立起來。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Z5",
        suitableFor: ["日常祈福", "需要安定"],
        details: ["如法供燈/回向"],
      },
      {
        id: "p-980",
        name: "蓮師 980",
        price: 980,
        blurb: "當你已經走到『不能再出事』：用更完整的護持，把恐懼與干擾壓下來。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5d7",
        hot: true,
        badge: "護身首選",
        suitableFor: ["感覺受干擾", "運勢低迷"],
        details: ["加強護持儀軌", "名單回向"],
      },
    ],
    faq: [{ q: "任何人都可以護持蓮師嗎？", a: "可以。只要具備信心與清淨發心，蓮師的加持不分對象。" }],
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
    heroKicker: "把身心救回來",
    heroImage: heroMedicineBuddhaImg,
    ritual: {
      title: "Medicine Buddha Sādhana（藥師佛儀軌）",
      image: ritualWaterOfferingImg,
      imageAlt: "儀軌示意：淨水與供碗供養",
      mdPath: "medicine-buddha.md",
      sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/karma-chakme/medicine-buddha-sadhana",
      license: "CC BY-NC 4.0 (Lotsawa House)",
    },
    promise:
      "依藥師法門之願力，回向身心安穩、息災延壽。當你身體不舒服、情緒失衡、或覺得運勢一直在耗損，先把『元氣』補回來。",
    scripture: [
      {
        quote: "「第七大願：願我來世… 若諸有情，衆病逼切… 我之名號一經其耳，衆病悉除、身心安樂…」",
        source: "《藥師瑠璃光如來本願功德經》十二大願（中國哲學書電子化計劃）",
        hint: "先把『病與怕』降下來",
        url: "https://ctext.org/wiki.pl?if=gb&chapter=594160",
      },
      {
        quote: "「第六大願：… 種種病苦，聞我名已… 無諸疾苦。」",
        source: "《藥師瑠璃光如來本願功德經》十二大願（節錄）",
        hint: "恢復，是一步一步回來的",
        url: "https://ctext.org/wiki.pl?if=gb&chapter=594160",
      },
    ],
    painPoints: ["健康反覆、精神耗損", "家人身心不安", "覺得一直在走衰、出狀況"],
    whyThisDeity: ["以息災為先，先把狀態救回來", "回向健康與平安，讓生活少一點『突然』", "在危機感中重新建立可控感"],
    process: [
      { title: "如法設供", body: "依儀軌設供，清淨發心，祈請藥師如來加持。" },
      { title: "息災修持", body: "以煙供/修持回向息災、健康、安穩。" },
      { title: "回向鎖定", body: "回向本人或特定家人；若是健康議題，建議把狀況寫得具體。" },
    ],
    plans: [
      {
        id: "b-350",
        name: "琉璃光境：藥師如來健康息災煙供-個人",
        price: 350,
        blurb: "回向個人身心安穩與息災：先把狀態穩住，才走得遠。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4V8",
        suitableFor: ["個人健康", "情緒耗損"],
        details: ["如法煙供", "名單回向"],
      },
      {
        id: "b-880",
        name: "琉璃光境：藥師如來健康息災煙供-團體",
        price: 880,
        blurb: "回向家人/團體平安：當你想一起守住一個家、一個團隊的狀態。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4U2",
        hot: true,
        badge: "團體守護",
        suitableFor: ["家人平安", "團體息災"],
        details: ["如法煙供", "團體名單回向"],
      },
    ],
    faq: [
      { q: "這能取代醫療嗎？", a: "不能。這是以佛法心念與回向來『穩住狀態、息災修福』；若有身體不適，請務必先就醫與規律照護。" },
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
    heroKicker: "先把怖畏停下",
    heroImage: heroGreenTaraImg,
    ritual: {
      title: "Daily Green Tārā Practice（綠度母日常修持）",
      image: ritualButterLampsImg,
      imageAlt: "儀軌示意：供燈與日常供養",
      mdPath: "green-tara.md",
      sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/dudjom-rinpoche/daily-green-tara-practice",
      license: "CC BY-NC 4.0 (Lotsawa House)",
    },
    promise: "仰仗大悲誓願，度脫一切苦厄與突發怖畏。祈願生活平安、諸事順遂、所作皆辦。",
    scripture: [
      {
        quote: "「敬禮迅捷勇悍度母，眼如閃電剎那光。」",
        source: "《二十一聖救度母禮讚文》（常見漢譯句）",
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
      { title: "壇城安置", body: "準備度母除障壇城，備辦香燈淨水。" },
      { title: "修持除障", body: "以加持力清算並轉化障礙種子。" },
      { title: "救護迴向", body: "回向諸事順遂，遠離八難與突發怖畏。" },
    ],
    plans: [
      {
        id: "t-680",
        name: "綠度母 680",
        price: 680,
        blurb: "度母救八難：當你很怕、很累、很不安，先把心安下來。",
        url: "https://cart.cashier.ecpay.com.tw/qp/zEJ1",
        suitableFor: ["日常祈福", "先救急"],
        details: ["慈悲供燈回向"],
      },
      {
        id: "t-1280",
        name: "綠度母 1280",
        price: 1280,
        blurb: "當你覺得『再出事我就扛不住』：更完整的救護回向，先把運勢穩住。",
        url: "https://cart.cashier.ecpay.com.tw/qp/zED7",
        hot: true,
        badge: "全方位守護",
        suitableFor: ["身心疲累", "運勢低迷"],
        details: ["深度除障儀軌", "救護加持回向"],
      },
    ],
    faq: [{ q: "為什麼稱為迅疾？", a: "度母右足下垂，象徵隨時起身救度；所以我們把『先救急、先穩住』放在第一順位。" }],
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
