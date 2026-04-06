// @ts-nocheck
/**
 * 滿願藏庫｜核心資料庫 (siteData.ts)
 * - 全站文案/頁面皆由此資料驅動
 * - 為避免圖片在 Vite build 時出錯：用 import + @ts-nocheck
 * - 追蹤碼請勿放在此檔（已在 index.html / AnalyticsTracker）
 */

// ----------------------------------------------------------------------
// 1. 第一重：各本尊 Hero 視覺圖 (採用高雅靜物/絕美壇城設定，營造平靜質感)
// ----------------------------------------------------------------------
import heroYellowImg from "@/assets/visuals/altar-yellow-water-offering.jpeg";
import heroMahashriImg from "@/assets/visuals/altar-mahashri-home-wealth.webp";
import heroGanapatiImg from "@/assets/visuals/altar-ganapati-obstacle-removal.webp";
import heroKurukullaImg from "@/assets/visuals/altar-kurukulla-magnetizing.webp";
import heroGreenTaraImg from "@/assets/visuals/green-tara-gallery-02.webp";
import heroPadmasambhavaImg from "@/assets/visuals/zen-wealth-hero.jpeg";
import heroMedicineBuddhaImg from "@/assets/visuals/offering-bowls.jpg";

// ----------------------------------------------------------------------
// 2. 第二重：高可信度實拍 (儀軌與紀實照片，放於頁面中段建立信任)
// ----------------------------------------------------------------------
import ritualYellowImg from "@/assets/visuals/testimonial_bg_yellow.webp"; 
import ritualMahashriImg from "@/assets/visuals/ritual-butter-lamps.webp"; 
import ritualGanapatiImg from "@/assets/visuals/ritual-torma-altar.webp"; 
import ritualKurukullaImg from "@/assets/visuals/ritual-mala-hands.webp"; 
import ritualPadmasambhavaImg from "@/assets/visuals/f6q2.jpg"; 
import ritualMedicineBuddhaImg from "@/assets/visuals/zub.png"; 
import ritualGreenTaraImg from "@/assets/visuals/99fd.jpg"; 

// ----------------------------------------------------------------------
// 3. 其他輔助紀實素材 / 通用圖 (備用與替換舊有 AI 圖)
// ----------------------------------------------------------------------
import ritualLiveImg from "@/assets/visuals/ritual_live.jpg"; 
import mandalaImg from "@/assets/visuals/wefwsef.jpg"; 
import lineageWheelsImg from "@/assets/visuals/image_lineage_1.webp"; 
import lineageFireImg from "@/assets/visuals/image_lineage (2).webp"; 
import altarStilllifeImg from "@/assets/visuals/altar-stilllife-offering-set.webp";
import altar1Img from "@/assets/visuals/altar-1.jpg";

import heroBrocadeImg from "@/assets/visuals/generated/hero-brocade.webp";
import heroGildedImg from "@/assets/visuals/generated/hero-gilded.webp";
import sutraCloseupImg from "@/assets/visuals/generated/sutra-closeup.webp";
import deityBannerImg from "@/assets/visuals/altar-stilllife-offering-set.webp"; // 預設橫幅用高雅靜物圖取代

// 蓮師 / 藥師如來壇城圖：先用通用橫幅
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
  fbLabel: "任何疑問，我們隨時在 FB 溫暖陪伴您",
  fbUrl: "https://www.facebook.com/profile.php?id=61583749010531",
} as const;

export const SITE_CONFIG = SITE;

// ----------------------------------------------------------------------
// 2. 視覺素材路徑匯出 (VISUALS)
// ----------------------------------------------------------------------
export const VISUALS = {
  heroBrocade: heroBrocadeImg,
  heroGilded: heroGildedImg,
  sutraCloseup: sutraCloseupImg,
  deityBanner: deityBannerImg,
  
  // 供全站調用的輔助實拍圖
  ritualLive: ritualLiveImg,
  mandala: mandalaImg,
  lineageWheels: lineageWheelsImg,
  lineageFire: lineageFireImg,
  altarStilllife: altarStilllifeImg,
  altar1: altar1Img,
};

// ----------------------------------------------------------------------
// 3. 首頁見證 (HOME_TESTIMONIALS)
// ----------------------------------------------------------------------
export const HOME_TESTIMONIALS = [
  {
    title: "財庫與身心一起被溫柔接住了",
    body: "原本只是想為資金缺口尋找一點喘息空間，沒想到團隊加碼回向了藥師佛。不僅滯留的款項順利流動，連續失眠好幾天的緊繃感也奇蹟般地平靜下來。",
    by: "高雄市 陳小姐",
  },
  {
    title: "資金流動中的安定感",
    body: "卡住的因緣順利展開，不穩定的收支逐漸找到平衡。最珍貴的是，那種每天被金錢追著跑的深層焦慮，終於獲得了釋放。",
    by: "台北市 張先生",
  },
  {
    title: "看見財庫隱形漏洞的癒合",
    body: "生命中那些難以言喻的消耗感彷彿被撫平了，無謂的意外開銷明顯減少。現在，終於能安穩地看著豐盛一點一滴累積。",
    by: "台中市 林小姐",
  },
  {
    title: "從迷霧中尋回清明洞察",
    body: "點燈護持後，內在的思緒變得異常清晰。這份洞察力啟發了我，讓我順利避開隱藏風險的合作案，少走了許多心力交瘁的彎路。",
    by: "新竹縣 吳先生",
  },
  {
    title: "在幽谷中發現無畏的靠山",
    body: "在事業最黑暗、幾乎失去所有力氣的時候，蓮師的護持給了我極大的內在安定，穩穩地陪我走過生命中最難熬的關口。",
    by: "桃園市 郭先生",
  },
  {
    title: "重拾踏實的安全感",
    body: "參與修法後，壓在胸口那種莫名懼怕未知的重擔感消散了。整個人彷彿重新扎根，找回了久違的踏實與安穩。",
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
    title: "豐盛流動",
    deity: "yellow",
    summary: "啟發生命的增益能量，修復財富流動的隱形漏損，讓每一份努力都能看見踏實的轉變。",
    ctaLabel: "探索豐盛路徑",
  },
  {
    id: "obstacle",
    slug: "obstacle",
    title: "清明無礙",
    deity: "ganapati",
    summary: "照亮前行路徑上的迷霧，化解深層的違緣阻礙，讓事業與生活重回穩定的流動。",
    ctaLabel: "發現清明洞察",
  },
  {
    id: "protection",
    slug: "protection",
    title: "無畏護持",
    deity: "padmasambhava",
    summary: "在生命的低谷中仰仗大威德光芒，安頓內在恐懼，為您建立不可撼動的平靜靠山。",
    ctaLabel: "尋找安定力量",
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

export interface ThemeColor {
  readonly bg: string;
  readonly accent: string;
}

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
  readonly themeColor: ThemeColor;
  readonly heroKicker: string;
  readonly heroImage: string;
  readonly promise: string;
  readonly scripture: readonly Scripture[];
  readonly painPoints: readonly string[];
  readonly whyThisDeity: readonly string[];
  readonly process: readonly { title: string; body: string }[];

  readonly ritual?: {
    readonly title: string;
    readonly image: string;
    readonly imageAlt: string;
    readonly mdPath: string;
    readonly sourceUrl: string;
    readonly license?: string;
    readonly note?: string;
    readonly keyPoints?: readonly string[];
    readonly offeringsChecklist?: readonly string[];
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
    themeColor: { bg: "#262217", accent: "#FBBF24" },
    heroKicker: "啟發豐盛流動的起點",
    heroImage: heroYellowImg,
    ritual: {
      title: "黃財神煙供（贊巴拉 Sang 供養）",
      image: ritualYellowImg,
      imageAlt: "壇城光影：僧眾為黃財神尊像獻上清淨供養",
      mdPath: "yellow-jambhala-sang.md",
      sourceUrl:
        "https://www.lotsawahouse.org/tibetan-masters/jamyang-khyentse-chokyi-lodro/jambhala-sang",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
      keyPoints: [
        "安頓心念：皈依三寶、發菩提心，將小我的渴望轉化為『利益眾生』的廣大願力。",
        "儀軌相應：依古老傳承獻上清淨香煙（sang），伴隨贊巴拉心咒，感受甘露財寶的溫暖攝受。",
        "深層轉化：以純粹的布施之心，溫柔撫平內在的慳吝與匱乏感，讓福德資糧在無形中滋長。",
        "善意回向：將這份豐盛的頻率流向法界，並照亮護持者生命中對正當善緣的期盼。",
      ],
      offeringsChecklist: [
        "傳承清淨香品（沉香/檀香）與莊嚴供器",
        "靜心供水與供碗（可點綴少許藏紅花，重在心意）",
        "花、燈、香、果等自然供物（依緣準備，重在清淨）",
      ],
      practiceFocus: [
        "內在看見：觀想甘露洗滌過往的匱乏印記，讓事業與財富以最『正向』的方式成熟。",
        "音頻共振：持咒不求數量，而在於『專注與恭敬』的相續不斷。",
        "擴展心量：透過回向，將緊抓不放的焦慮，轉化為與萬物共好的寬闊胸襟。",
      ],
    },
    promise:
      "依循贊巴拉的古老智慧，我們陪伴您照亮內在的匱乏業印，修復財富流動的隱形漏損。我們不保證一夜致富的奇蹟，但祈願您的每一分踏實努力，都能在因緣具足時看見應有的豐饒轉變。",
    scripture: [
      {
        quote: "「於諸賢聖給施所須；見求利者，方便佐助... 能令眾生得多資生報。」",
        source: "《佛說業報差別經》",
        hint: "布施，是讓生命資糧重新流動的美麗起點",
        url: "#",
      },
    ],
    painPoints: ["感受到資源的侷限與事業的停滯", "現金流動帶來深層的焦慮", "努力付出卻難以將豐盛留存"],
    whyThisDeity: ["溫潤生命的財富基底", "啟動廣大無私的布施善緣", "轉化阻礙豐盛的隱形業力"],
    process: [
      { title: "發心與探索", body: "安頓身心，皈依三寶；依循儀軌備妥清淨供品，開啟與豐盛能量的深度連結。" },
      { title: "相應與轉化", body: "透過 sang 供養與心咒的持誦，觀想甘露的洗滌，讓生命的資糧緣起自然成熟。" },
      { title: "回向與見證", body: "將善念回向給您與您的祈願；志工造冊修持後，隔週將公開去識別化名錄，邀您共同見證這份善意。" },
    ],
    plans: [
      {
        id: "y-490",
        name: "撫平匱乏｜黃財神微光供燈回向",
        price: 490,
        blurb: "為財富流動點亮一盞燈：溫柔對治內在的匱乏感，讓生命的出口重新展現。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4W0",
        suitableFor: ["初次探索", "尋找財務安定"],
        details: ["清淨供燈回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
      {
        id: "y-980",
        name: "啟動豐盛｜黃財神相應水供回向",
        price: 980,
        blurb: "當您渴望事業的活水：以完整的儀軌相應，引導迷失的資糧重新流向您。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4XF",
        hot: true,
        badge: "共鳴首選",
        suitableFor: ["現金流轉圜", "業績突破"],
        details: ["連續水供相應", "專屬祈願回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
      {
        id: "y-1860",
        name: "深耕淨障｜黃財神除障香供加強回向",
        price: 1860,
        blurb: "當努力總是遭遇無形阻滯：透過深層的清淨轉化，化解阻擋豐盛的違緣。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Y3",
        suitableFor: ["事業格局擴張", "化解財務風險"],
        details: ["深層除障香供", "加強守護回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
    ],
    faq: [
      {
        q: "這是一場真實的祈福，還是商業買賣？",
        a: "這是一場真實的法事造冊與善緣探索。我們採用『綠界科技 ECPay』確保您的金流安全。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。修持完成後，我們會在 FB 粉專公佈「去識別化」名錄，讓您的付出成為純粹且透明的善意。",
      },
      {
        q: "在這場探索中，我需要自行操作儀軌嗎？",
        a: "不需要。專業的僧眾會依循古老傳承如法修持，您只需要放鬆身心，保持清淨的祈願即可。",
      },
      {
        q: "如何寫下我的祈願，讓改變更容易發生？",
        a: "我們建議在備註欄中，誠實寫下您目前的『生命掙扎』（例如：現金流動的焦慮、合作案的阻礙）。越真實的描述，越能與本尊的慈悲頻率產生共鳴。",
      },
      {
        q: "這份善緣何時會開始運作？",
        a: "志工將於晚間靜心為您造冊，依序傳遞至西藏壇城。修法後將於隔週公佈名錄；在等待的過程中，請給予自己多一點的平靜與耐心。",
      },
      {
        q: "我可以同時探索多個生命面向的改變嗎？",
        a: "可以的，但我們鼓勵您先聚焦於當下『最渴望轉變』的一個核心，讓心念的光芒更加集中。",
      },
      {
        q: "我內心的掙扎與隱私會被保護嗎？",
        a: "絕對會。所有的祈願僅供壇城修持對位使用，名錄公開時也會進行嚴格的去識別化（如：陳*明），溫柔守護您的信任。",
      },
    ],
    crossSell: [
      { title: "如果您此刻感到深層的焦慮與不安", desc: "探索綠度母：讓迅疾的慈悲先接住您，穩住當下的身心。", to: "green-tara" },
      { title: "如果您正困於決策的迷霧之中", desc: "探索象頭財神：照亮盲點，尋回清明的洞察力。", to: "ganapati" },
    ],
  },

  mahashri: {
    key: "mahashri",
    name: "大吉祥天女",
    subtitle: "豐饒吉祥・資具無缺",
    route: "/deity/mahashri",
    primaryIntent: "家宅平安",
    themeColor: { bg: "#281D14", accent: "#F97316" },
    heroKicker: "為生活注入安隱的質地",
    heroImage: heroMahashriImg,
    ritual: {
      title: "大吉祥天女陀羅尼（善女天咒）",
      image: ritualMahashriImg,
      imageAlt: "靜謐壇城：澄澈的酥油燈明，照亮安隱的祈願",
      mdPath: "mahashri-dharani.md",
      sourceUrl: "/resources/webpages/f-2023-15.pdf",
      note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威來源，確保智慧的純粹傳遞。",
      keyPoints: [
        "安頓心念：以守護家人安隱、生活豐足為願，皈依三寶，啟發菩提善心。",
        "儀軌相應：依《金光明經》的智慧修持，伴隨燈明與清淨水供，建立吉祥安穩的生命頻率。",
        "深層轉化：溫柔對治生活中的『耗損、散亂與不安』，讓日常回歸踏實的累積。",
        "善意回向：將祥和的光芒回向眾生，祈願家宅成員身心安頓、遠離一切衰損。",
      ],
      offeringsChecklist: [
        "溫暖燈明（酥油燈/供燈）與清淨供器",
        "靜心供水與供碗（依循心意即可）",
        "花、香、果、食等五供（不求奢華，唯重清淨與恭敬）",
      ],
      practiceFocus: [
        "內在看見：觀想家宅沐浴在祥和光芒中，讓焦躁的心先沉靜下來，安然承接這份護佑。",
        "音頻共振：讀誦重在『將心安住於當下』，享受與經典智慧共振的片刻。",
        "擴展心量：誠實寫下生活中的耗損或擔憂，讓慈悲的光芒精準撫平您的不安。",
      ],
    },
    promise: "依循《金光明經》的深邃願力，我們祈請照亮生活中的瑣碎與耗損，護佑家宅安隱，令資具無缺。讓家，真正成為您生命中能安頓身心、重新充電的溫暖避風港。",
    scripture: [
      {
        quote: "「…所謂飲食、衣服、臥具、醫藥，及餘一切所須資具，皆令圓滿無有乏少。」",
        source: "《金光明最勝王經》大吉祥天女品",
        hint: "讓日常的安穩，成為生命最堅實的底氣",
        url: "https://cbetaonline.dila.edu.tw/zh/T0665_008",
      },
      {
        quote: "「由能如是持經故，自身眷屬離諸衰；所須衣食無乏時…」",
        source: "《金光明最勝王經》大吉祥天女品（偈頌節錄）",
        hint: "在光芒中，輕輕停下無謂的生命耗損",
        url: "https://cbetaonline.dila.edu.tw/zh/T0665_008",
      },
    ],
    painPoints: ["家中氣氛緊繃、難以放鬆", "面對突如其來的意外開銷感到疲憊", "感覺生命的福分正在無形中流失"],
    whyThisDeity: ["溫柔撫平環境中的躁動頻率", "為家宅建立安隱的光明結界", "感召豐饒且平靜的生命質地"],
    process: [
      { title: "發心與探索", body: "備辦清淨五供；安頓身心，皈依三寶，以護持家宅安穩的溫柔心念作為起點。" },
      { title: "相應與轉化", body: "依《金光明經》的智慧讀誦祈請，讓心靈與吉祥的頻率共振，攝受安隱。" },
      { title: "回向與見證", body: "將祥和回向家宅；志工造冊修持後，隔週將公開去識別化名錄，邀您共同見證這份善意。" },
    ],
    plans: [
      {
        id: "m-490",
        name: "安隱護宅｜大吉祥天女微光供燈",
        price: 490,
        blurb: "為家宅點亮一盞安定的燈：撫平日常的躁動，讓生活找回呼吸的空間。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4ND",
        suitableFor: ["尋找安定", "撫平焦躁"],
        details: ["吉祥供燈回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
      {
        id: "m-980",
        name: "豐饒流動｜大吉祥天女相應水供",
        price: 980,
        blurb: "停下無形的生命耗損：化解家宅的紛擾與破財，重建安隱豐足的根基。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4PD",
        hot: true,
        badge: "守護家宅首選",
        suitableFor: ["意外耗損", "家宅不寧"],
        details: ["清淨水供相應", "家宅安隱回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
      {
        id: "m-1860",
        name: "光明結界｜大吉祥天女淨障香供",
        price: 1860,
        blurb: "當生活感覺混亂且耗弱：透過深層香供強化護宅頻率，讓氣場重新回歸澄淨。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Q7",
        suitableFor: ["深層淨化", "長期安定守護"],
        details: ["深層清淨香供", "家宅守護回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
    ],
    faq: [
      {
        q: "這是一場真實的祈福，還是商業買賣？",
        a: "這是一場真實的法事造冊與善緣探索。我們採用『綠界科技 ECPay』確保您的金流安全。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。修持完成後，我們會在 FB 粉專公佈「去識別化」名錄，讓您的付出成為純粹且透明的善意。",
      },
      { q: "這份善緣可以覆蓋我所有的家人嗎？", a: "可以的。您的護持能溫暖涵蓋家中的主要成員；建議您在備註中，輕輕寫下您最渴望守護的重心（如健康、和睦或穩定）。" },
      { q: "大吉祥天女能啟發我生命中的哪個面向？", a: "祂能啟發您『安頓生活』的力量：讓家宅回歸平靜、減少無謂耗損，讓日子回到可以從容積累的優雅狀態。" },
      { q: "我該如何表達我的祈願？", a: "不需冗長，只需真實。用幾句話描述您目前的掙扎，以及您期盼在家中看見的轉變即可。" },
      { q: "我需要獨自進行任何儀式嗎？", a: "請安心，不需要。僧眾會為您如法修持；您只需要帶著一份清淨的期盼，感受這份跨越時空的祝福。" },
      { q: "如果我同時也面臨財務困境，該如何選擇？", a: "若您最疲憊的是『混亂與耗損』，請先讓大吉祥天女為您安頓家宅；若您急需『打破財務停滯』，則可探索黃財神的路徑。我們也歡迎您私訊，讓我們陪伴您尋找最合適的方向。" },
    ],
    crossSell: [
      { title: "若您渴望在安頓後主動創造豐盛", desc: "探索黃財神：在平靜中啟發資糧的廣大流動。", to: "yellow" },
      { title: "若突如其來的恐懼讓您難以入眠", desc: "探索綠度母：讓迅疾的溫柔接住您，安撫身心的波瀾。", to: "green-tara" },
    ],
  },

  ganapati: {
    key: "ganapati",
    name: "象頭財神",
    subtitle: "無礙成就・決策清明",
    route: "/deity/ganapati",
    primaryIntent: "掃除障礙",
    themeColor: { bg: "#161B2A", accent: "#60A5FA" },
    heroKicker: "為您照亮前行的坦途",
    heroImage: heroGanapatiImg,
    ritual: {
      title: "象頭財神讚頌（除障・開路法要）",
      image: ritualGanapatiImg,
      imageAlt: "威德壇城：實拍象神朵瑪與莊嚴供養",
      mdPath: "ganapati.md",
      sourceUrl: "https://www.lotsawahouse.org/indian-masters/atisha/ganapati-ragavajra-praise",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
      keyPoints: [
        "安頓心念：在紛亂中先找回內在的平靜，皈依三寶；祈願以正當與利他的初衷為依歸。",
        "儀軌相應：依循讚頌與朵瑪供養，祈請化解外在環境的違緣、內在情緒的遮蔽，與深層習氣的盲點。",
        "深層轉化：這份加持將啟發您的洞察，讓卡關的條件鬆動、模糊的決策變得澄澈透明。",
        "善意回向：願一切眾生遠離迷惘，並祈願您眼前的談判、轉職或投資等要事，皆能順利開展。",
      ],
      offeringsChecklist: [
        "清淨甜食/果品供養（依循心意即可）",
        "供水/供香/供燈（莊嚴的基礎供養）",
        "傳統朵瑪 (torma) 供養，與威德能量深度相應",
      ],
      practiceFocus: [
        "內在看見：觀想前方的迷霧散去，道路逐漸清晰；當心不再恐懼，便能做出無悔的選擇。",
        "音頻共振：讚頌時帶著『澄澈與決心』，感受內在力量的甦醒。",
        "擴展心量：具體寫下您正在經歷的關卡，讓清明的光芒照進決策的死角。",
      ],
    },
    promise: "在複雜的局勢中為您化解內外違緣，尋回清明的洞察力。當前方的迷霧被照亮，通往目標的路徑自然展現，您將走得更加篤定。",
    scripture: [
      {
        quote: "「此是金色迦那鉢底除障難真言。若眾生受持真言者，所作諸法無不成。」",
        source: "《佛說金色迦那鉢底陀羅尼經》",
        hint: "看見阻礙背後的真相，讓停滯的腳步再次邁開",
        url: "https://tbsn.org/dynamics/detail/841",
      },
      {
        quote: "「若有眾生持此真言者… 所須資財臥具、衣服飲食、金銀珍寶… 所作就如意。」",
        source: "《佛說金色迦那鉢底陀羅尼經》",
        hint: "讓外在的條件，溫柔地與您的願景對齊",
        url: "https://tbsn.org/dynamics/detail/841",
      },
    ],
    painPoints: ["在重大的抉擇前感到迷惘與猶豫", "職場或事業上面臨難以溝通的人事阻礙", "計畫推進時總遇到莫名卡關"],
    whyThisDeity: ["照亮認知死角，喚醒敏銳洞察", "平息外在環境的干擾與摩擦", "在混沌中建立主導與前行的威德"],
    process: [
      { title: "發心與探索", body: "備妥清淨供品；先讓紛亂的心安住下來，帶著清晰的意圖開啟這段旅程。" },
      { title: "相應與轉化", body: "依循古老讚頌清除干擾雜訊，讓環境的條件與您的決策重新對頻。" },
      { title: "回向與見證", body: "將順利的善願回向給您的決策；志工造冊修持後，隔週將公開去識別化名錄，邀您見證改變。" },
    ],
    plans: [
      {
        id: "g-490",
        name: "澄澈啟發｜象頭財神微光供燈",
        price: 490,
        blurb: "為迷惘的思緒點亮明燈：沉澱內在焦躁，讓前方的輪廓逐漸清晰。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4R5",
        suitableFor: ["理清思緒", "尋找靈感"],
        details: ["清明供燈回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
      {
        id: "g-980",
        name: "破迷化礙｜象頭財神相應水供",
        price: 980,
        blurb: "當您被壓力推著走：透過水供洗滌雜訊，化解阻力，讓主導權重回您手中。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4S8",
        hot: true,
        badge: "決策者首選",
        suitableFor: ["化解職場壓力", "面臨關鍵抉擇"],
        details: ["除障水供相應", "智慧決策回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
      {
        id: "g-1860",
        name: "無礙前行｜象頭財神淨障香供",
        price: 1860,
        blurb: "當計畫陷入僵局：以深層香供強力轉化違緣，為您的重要談判或推進打通坦途。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4T1",
        suitableFor: ["重大商業談判", "合約簽署前夕"],
        details: ["深層破障香供", "加強守護回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
    ],
    faq: [
      {
        q: "這是一場真實的祈福，還是商業買賣？",
        a: "這是一場真實的法事造冊與善緣探索。我們採用『綠界科技 ECPay』確保您的金流安全。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。修持完成後，我們會在 FB 粉專公佈「去識別化」名錄，讓您的付出成為純粹且透明的善意。",
      },
      { q: "這份力量能幫助我獲得偏財嗎？", a: "象頭財神更擅長啟發『清明判斷與掃除障礙』；當您的決策不再被蒙蔽，通往豐盛的道路自然寬廣且穩健。" },
      { q: "我該如何描述我面臨的阻礙？", a: "請試著寫下您『卡住的感覺』：是溝通的僵局、程序的拖延，還是內心的混亂？越具體的描述，越能獲得精準的照亮。" },
      { q: "我需要為了這場法事改變生活步調嗎？", a: "完全不需要。我們會在遠方為您如法修持，您只需保持開放的心，去察覺生活中悄悄發生的轉變。" },
      { q: "這份祝福可以迴向給我的團隊或專案嗎？", a: "當然可以。您只需寫下專案名稱，並描述您期盼團隊跨越的挑戰即可。" },
      { q: "我何時能感受到這份清明？", a: "這是一場心念的共振。許多人在修持後會感到思緒沉靜、外在阻力鬆動。給自己一點時間，去體驗這份自然的轉變。" },
    ],
    crossSell: [
      { title: "若您眼前最急迫的是資金的枯竭", desc: "探索黃財神：讓匱乏止息，重啟現金的流動。", to: "yellow" },
      { title: "若龐大的壓力已讓您瀕臨崩潰", desc: "探索綠度母：讓溫柔的救護先接住您，找回呼吸的節奏。", to: "green-tara" },
    ],
  },

  kurukulla: {
    key: "kurukulla",
    name: "作明佛母",
    subtitle: "愛敬磁聚・人緣貴人",
    route: "/deity/kurukulla",
    primaryIntent: "人緣貴人",
    themeColor: { bg: "#2B141C", accent: "#FB7185" },
    heroKicker: "啟發善緣的自然共鳴",
    heroImage: heroKurukullaImg,
    ritual: {
      title: "作明佛母儀軌（磁聚・愛敬・貴人緣）",
      image: ritualKurukullaImg,
      imageAlt: "懷柔之美：實拍持咒念珠（mala）與莊嚴花供",
      mdPath: "kurukulla.md",
      sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/mipham/kurukulla-sadhana",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
      keyPoints: [
        "安頓心念：以大悲與純淨的動機出發；祈願所有的連結，皆建構在善意與尊重的基礎上。",
        "儀軌相應：伴隨佛母心咒的持誦與美麗花供，觀想紅光亮起，喚醒內在迷人的磁性頻率。",
        "深層轉化：明白磁聚不是控制他人，而是讓自己成為溫暖的光源，吸引頻率相近的『對的人』。",
        "善意回向：將這份愛與和合回向法界，並祈願您在意的關係能消融隔閡，綻放善果。",
      ],
      offeringsChecklist: [
        "供水/供香/供燈（澄淨的基礎供養）",
        "鮮花供養（象徵生命綻放的莊嚴與美麗緣分）",
        "念珠 (mala) 等修持法器，助您安定心神",
      ],
      practiceFocus: [
        "內在看見：試著先讓自己的心柔軟下來，不再用力抓取，善緣自然會受到這份從容的吸引。",
        "音頻共振：在持咒中感受恭敬與安定，讓焦慮的關係得到喘息。",
        "擴展心量：溫柔寫下您想修復或吸引的關係樣貌，讓愛的光芒指引方向。",
      ],
    },
    promise: "我們不訴求控制情感的神話，而是點亮您內在的溫暖光芒，啟發磁聚的共鳴。讓對的緣分與資源自然匯聚，化解溝通的冰霜，您不再需要獨自在關係中掙扎。",
    scripture: [
      {
        quote: "「以大悲心攝受眾生，令善緣聚集、所求易成。」",
        source: "傳承口訣（摘要）",
        hint: "真正的吸引力，來自於讓自己回到充滿善意與愛的狀態",
        url: "#",
      },
    ],
    painPoints: ["在情感中總是感到委屈或遇人不淑", "渴望事業上的貴人，卻覺得孤立無援", "感覺自己承擔了所有的情緒勞動"],
    whyThisDeity: ["喚醒內在的溫暖磁性，吸引共鳴的靈魂", "融化人際互動中的防備與誤解", "讓資源與支持自然流向您"],
    process: [
      { title: "發心與探索", body: "獻上美麗的花朵與淨水；以柔軟的大悲心為起點，期盼建立真誠和合的連結。" },
      { title: "相應與轉化", body: "在佛母心咒的紅光中，感受自己被愛包圍，讓這份溫暖向外輻射，吸引善緣。" },
      { title: "回向與見證", body: "將和睦的願望回向給您的關係；志工造冊修持後，隔週將公開去識別化名錄，共同見證愛的流動。" },
    ],
    plans: [
      {
        id: "k-490",
        name: "善緣共鳴｜作明佛母微光供燈",
        price: 490,
        blurb: "鬆開孤軍奮戰的緊繃：點亮一盞善緣之光，讓溫暖的支持有機會向您靠近。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5a8",
        suitableFor: ["人際疲乏", "渴望被理解"],
        details: ["溫暖供燈回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
      {
        id: "k-980",
        name: "貴人磁聚｜作明佛母相應水供",
        price: 980,
        blurb: "當您需要『對的人』現身：洗滌關係中的誤解與防備，讓互動回到真誠與順暢。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5bF",
        hot: true,
        badge: "善緣首選",
        suitableFor: ["化解溝通僵局", "吸引事業貴人"],
        details: ["連續水供相應", "專屬關係回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
      {
        id: "k-1860",
        name: "和合修復｜作明佛母淨障加強回向",
        price: 1860,
        blurb: "當深刻的關係面臨斷裂：透過深層的淨障與光芒攝受，為受傷的連結創造修復的契機。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5c3",
        suitableFor: ["修復破裂關係", "建立關鍵合作"],
        details: ["深層相應儀軌", "重點關係回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
    ],
    faq: [
      {
        q: "這是一場真實的祈福，還是商業買賣？",
        a: "這是一場真實的法事造冊與善緣探索。我們採用『綠界科技 ECPay』確保您的金流安全。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。修持完成後，我們會在 FB 粉專公佈「去識別化」名錄，讓您的付出成為純粹且透明的善意。",
      },
      { q: "我必須提供特定對象的名字嗎？", a: "若有特定的修復對象，您可以輕輕寫下稱呼；若期盼的是廣泛的善緣，只需描述您『渴望感受到的互動氛圍』即可。" },
      { q: "作明佛母能為我帶來怎樣的啟發？", a: "祂將啟發您內在的柔和力量。這份力量能幫助您在人群中散發溫暖，自然吸引合作、支持，以及令人安心的關係。" },
      { q: "我該如何表達對關係的期盼？", a: "請試著寫下您『希望吸引的特質』或是『渴望放下的消耗』，讓光芒能精準照亮您內心的渴望。" },
      { q: "這段期間我需要特別做什麼嗎？", a: "請放鬆心情，將儀軌交給遠方的僧眾。您只需在日常中試著對自己、對他人多一份溫柔與微笑。" },
    ],
    crossSell: [
      { title: "若您在關係中感到極度的恐懼與不安", desc: "探索綠度母：先為自己建立內在的安全感，關係才有呼吸的空間。", to: "green-tara" },
      { title: "若您同時為事業決策感到迷惘", desc: "探索象頭財神：尋回清明洞察，讓您不再選錯路徑。", to: "ganapati" },
    ],
  },

  padmasambhava: {
    key: "padmasambhava",
    name: "蓮花生大士",
    subtitle: "總集加持・無畏護持",
    route: "/deity/padmasambhava",
    primaryIntent: "威德護持",
    themeColor: { bg: "#2A1616", accent: "#E57373" },
    heroKicker: "在低谷中為您立起無畏的靠山",
    heroImage: heroPadmasambhavaImg,
    ritual: {
      title: "蓮師七句祈請文（總集加持・無畏護持）",
      image: ritualPadmasambhavaImg,
      imageAlt: "無畏依止：僧眾於香煙繚繞中深情誦讀祈請",
      mdPath: "seven-line-prayer.md",
      sourceUrl: "https://www.lotsawahouse.org/topics/seven-line-prayer/",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
      keyPoints: [
        "安頓心念：在深層的恐懼與低谷中，試著將心安放於正法的依止，皈依三寶。",
        "儀軌相應：伴隨七句祈請文的念誦，獻上香燈清供，以恭敬與臣服啟動深層的相應。",
        "深層轉化：蓮師法門帶來『總集』的力量，幫助您在混亂崩塌中找回內在的支柱與承擔的勇氣。",
        "善意回向：願一切眾生免於恐懼，並祈請蓮師護佑您度過眼前的難關，違緣止息。",
      ],
      offeringsChecklist: [
        "沉靜的香品（或薰香）與清淨供器",
        "溫暖燈明（酥油燈/供燈）",
        "靜心供水與供碗",
      ],
      practiceFocus: [
        "內在看見：觀想蓮師的光芒如山般穩固地籠罩著您，將所有的恐懼與障礙消融於光中。",
        "音頻共振：將信任交託於祈請之中，不帶著焦躁，只感受那份被穩穩接住的相續。",
        "擴展心量：誠實寫下讓您感到沉重不堪的考驗，讓無畏的力量注入您的生命。",
      ],
    },
    promise: "我們不輕言華麗的神蹟，但仰仗蓮師無盡的威德願力，為您鎮伏內在的恐懼與外在的風浪。當生命走入充滿考驗的幽谷，我們願為您在壇城前點亮一盞不滅的明燈，陪伴您尋回承擔的勇氣。",
    scripture: [
      {
        quote: "「我無死生之別，於諸信心者前，我即現其前而為加持。」",
        source: "蓮師傳承語錄",
        hint: "在最深的黑暗裡，您從未獨自一人",
        url: "#",
      },
      {
        quote: "「吽！鄔金淨土西北隅，殊勝無上成就者… 隨尊成就我修持，咕嚕貝瑪悉地吽」",
        source: "《蓮師七句祈請文》",
        hint: "將疲憊的心靠上去，讓強大的護持接住您",
        url: "https://zh.wikisource.org/zh-hant/%E8%93%AE%E5%B8%AB%E4%B8%83%E5%8F%A5%E7%A5%88%E8%AB%8B%E6%96%87",
      },
    ],
    painPoints: ["面臨看似無法跨越的巨大挑戰", "感覺身心受到不明負能量的沉重壓迫", "在極度脆弱時，渴望一個絕對穩定的精神依靠"],
    whyThisDeity: ["連接藏傳佛法最根本的護持力量", "將生命中的惡意與考驗，轉化為成長的養分", "鎮伏深層的恐懼，為您建立無畏的內在靠山"],
    process: [
      { title: "發心與探索", body: "點亮明燈與清香；以絕對的信任依止三寶與蓮師，允許自己把重擔先放下來。" },
      { title: "相應與轉化", body: "在七句祈請文的共振中，讓內在的恐懼與散亂沉澱，找回面對生命的勇氣。" },
      { title: "回向與見證", body: "將無畏回向給您的難關；志工造冊修持後，隔週將公開去識別化名錄，陪伴您走過考驗。" },
    ],
    plans: [
      {
        id: "p-490",
        name: "無畏依靠｜蓮師祈請微光供燈",
        price: 490,
        blurb: "當您感到快被壓力壓垮：點一盞燈，讓內在的靠山重新站立，找回呼吸的力氣。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4Z5",
        suitableFor: ["尋找心靈安定", "日常平安祈願"],
        details: ["無畏供燈回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
      {
        id: "p-980",
        name: "鎮伏守護｜蓮師加強護法相應",
        price: 980,
        blurb: "當您正處於風暴的中心：透過深刻的護持力量，壓制恐懼與干擾，穩穩撐過眼前的關口。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z5d7",
        hot: true,
        badge: "無畏靠山",
        suitableFor: ["面臨重大考驗", "感覺運勢低迷受阻"],
        details: ["深層護持相應", "無畏名單回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
    ],
    faq: [
      {
        q: "這是一場真實的祈福，還是商業買賣？",
        a: "這是一場真實的法事造冊與善緣探索。我們採用『綠界科技 ECPay』確保您的金流安全。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。修持完成後，我們會在 FB 粉專公佈「去識別化」名錄，讓您的付出成為純粹且透明的善意。",
      },
      { q: "任何人都可以尋求蓮師的護持嗎？", a: "是的。蓮師的慈悲超越一切界線，只要您帶著一份真誠與信任，這份加持將無私地擁抱您。" },
      { q: "我該如何向蓮師訴說我的困境？", a: "請安心地寫下您『最恐懼、最害怕失去的』是什麼，無論是事業危機、家庭變故或身心煎熬，讓這份脆弱被溫柔看見。" },
      { q: "等待修持的過程中，我能做些什麼？", a: "請試著在每次深呼吸時，感受內心深處那份堅韌的力量。遠方的僧眾正為您祈請，您並不孤單。" },
      { q: "我可以為正在受苦的家人祈求這份無畏嗎？", a: "當然。請寫下他們的稱呼與目前的掙扎，讓這份穩定的力量，跨越距離守護他們。" },
    ],
    crossSell: [
      { title: "若您目前最大的壓力源自財務的枯竭", desc: "探索黃財神：讓漏損停止，重新啟動豐盛的流動。", to: "yellow" },
      { title: "若突發的變故讓您感到驚慌失措", desc: "探索綠度母：讓迅疾的慈悲先穩住您的情緒，再面對挑戰。", to: "green-tara" },
    ],
  },

  "medicine-buddha": {
    key: "medicine-buddha",
    name: "藥師如來",
    subtitle: "琉璃光境・健康息災",
    route: "/deity/medicine-buddha",
    primaryIntent: "健康息災",
    themeColor: { bg: "#12202B", accent: "#38BDF8" },
    heroKicker: "溫柔撫平身心的耗損",
    heroImage: heroMedicineBuddhaImg,
    ritual: {
      title: "藥師如來儀軌（息災延壽・身心安穩）",
      image: ritualMedicineBuddhaImg,
      imageAlt: "琉璃光境：僧眾於莊嚴藥師佛前至誠祈請",
      mdPath: "medicine-buddha.md",
      sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/karma-chakme/medicine-buddha-sadhana",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
      keyPoints: [
        "安頓心念：皈依三寶，啟發菩提心；以祈求平息病苦、護生安穩為願，並理解佛法不取代實體醫療的智慧。",
        "儀軌相應：依循藥師法門獻上清淨水供，在藥師佛名號的持誦中，祈請澄澈的琉璃光降臨。",
        "深層轉化：將耗弱的『元氣』一點一滴喚回。當睡眠、情緒與身體找回節奏，生命的防護力自然強大。",
        "善意回向：願世間病苦平息，並將這份安穩深情地回向給您或您掛心的家人，祈願息災延壽。",
      ],
      offeringsChecklist: [
        "澄澈清淨水供（供碗/清水）",
        "溫暖燈明與清香（依循心意即可）",
        "受苦者的姓名與狀況（讓慈悲精準照亮痛處）",
      ],
      practiceFocus: [
        "內在看見：觀想溫潤的琉璃光芒流轉全身，將疲憊、病痛與深層的恐懼溫柔融解。",
        "音頻共振：在名號的持誦中找回規律與平靜，讓焦慮的心不再四處攀緣。",
        "智慧提醒：請務必同步尋求專業醫療協助；讓醫學療癒身體，讓佛法安頓心靈。",
      ],
    },
    promise:
      "我們深刻明白佛法不能取代專業的醫療照護。然而，依循藥師如來的大悲願力，我們願為您祈請身心的安穩與息災。當生命感到疲憊耗弱，願琉璃光照亮您的生命，撫平身心耗損，為您尋回久違的平靜與元氣。",
    scripture: [
      {
        quote: "「第七大願：願我來世… 若諸有情，衆病逼切… 我之名號一經其耳，衆病悉除、身心安樂…」",
        source: "《藥師瑠璃光如來本願功德經》",
        hint: "在病痛的恐懼中，先讓心靈獲得溫柔的安撫",
        url: "https://ctext.org/wiki.pl?if=gb&chapter=594160",
      },
    ],
    painPoints: ["身心狀態起伏不定，感到深層疲憊", "為家人不明的病痛與不安感到揪心", "感覺生命能量不斷流失，陷入低潮"],
    whyThisDeity: ["以息災為首要，先為生命止血並找回基礎狀態", "撫平突如其來的身心波瀾，讓日常回歸平靜", "在脆弱與無助中，重建一份溫暖的可控感"],
    process: [
      { title: "發心與探索", body: "準備清淨的水供；皈依三寶，將對健康的渴望轉化為對一切生命的慈悲護念。" },
      { title: "相應與轉化", body: "在琉璃光芒的觀想中，讓緊繃的神經放鬆，同時以智慧維持規律的日常照護。" },
      { title: "回向與見證", body: "將安定的頻率回向給受苦的身心；志工造冊修持後，隔週將公開去識別化名錄，傳遞祝福。" },
    ],
    plans: [
      {
        id: "b-350",
        name: "琉璃光撫慰｜藥師如來個人健康相應",
        price: 350,
        blurb: "為疲憊的身心尋找一個出口：先讓狀態穩固下來，生命才有遠行的力量。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4V8",
        suitableFor: ["個人健康修復", "平息情緒耗損"],
        details: ["如法煙供祈請", "個人平安回向"],
      },
      {
        id: "b-880",
        name: "琉璃光守護｜藥師如來家人/團體息災相應",
        price: 880,
        blurb: "當您渴望共同守護一個家：為摯愛祈求平安，讓生活少一點突如其來的驚嚇。",
        url: "https://cart.cashier.ecpay.com.tw/qp/z4U2",
        hot: true,
        badge: "安定首選",
        suitableFor: ["家人健康守護", "團體平安息災"],
        details: ["如法煙供祈請", "團體平安回向"],
      },
    ],
    faq: [
      {
        q: "這是一場真實的祈福，還是商業買賣？",
        a: "這是一場真實的法事造冊與善緣探索。我們採用『綠界科技 ECPay』確保您的金流安全。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。修持完成後，我們會在 FB 粉專公佈「去識別化」名錄，讓您的付出成為純粹且透明的善意。",
      },
      { q: "這份祈福可以替代看醫生嗎？", a: "絕對不行。佛法修持是為了『安定心靈、啟發善緣』；若身體不適，請務必尋求專業醫療的協助，讓身與心同步獲得療癒。" },
      { q: "我可以為生病的家人報名嗎？", a: "這是一份極其珍貴的心意。請提供家人的稱呼與目前的狀況，讓琉璃光能精準地撫慰他們的痛苦。" },
      { q: "我該如何描述祈願，讓祝福更貼近需求？", a: "試著具體描述那份『痛楚或困擾』，以及您最盼望看到的改善（例如：希望能安穩入睡、手術順利）。" },
      { q: "在等待的這段時間，我能做些什麼？", a: "請好好照顧自己與家人，維持規律作息。將焦慮託付給遠方的祈請，您只需專注於當下的陪伴與醫療照護。" },
    ],
    crossSell: [
      { title: "若突發的狀況讓您感到極度驚恐", desc: "探索綠度母：讓迅疾的慈悲先接住您，平復內在的波瀾。", to: "green-tara" },
      { title: "若健康穩定後，期盼事業能有新的突破", desc: "探索象頭財神：找回清明洞察，讓停滯的腳步再次邁開。", to: "ganapati" },
    ],
  },

  "green-tara": {
    key: "green-tara",
    name: "綠度母",
    subtitle: "慈悲救護・迅疾除障",
    route: "/deity/green-tara",
    primaryIntent: "迅疾救護",
    themeColor: { bg: "#14241B", accent: "#4ADE80" },
    heroKicker: "溫柔接住您的焦慮與不安",
    heroImage: heroGreenTaraImg,
    ritual: {
      title: "綠度母日常修持（迅疾救護・除怖畏）",
      image: ritualGreenTaraImg,
      imageAlt: "慈悲轉圜：實拍戶外綠度母大型祈福火供",
      mdPath: "green-tara.md",
      sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/dudjom-rinpoche/daily-green-tara-practice",
      license: "CC BY-NC 4.0 (Lotsawa House)",
      note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
      keyPoints: [
        "安頓心念：皈依三寶，啟發菩提心；祈願一切生命皆能免於恐懼，在慈悲中獲得救護。",
        "儀軌相應：依循儀軌深情祈請綠度母，伴隨燈水供養，讓身心沐浴在溫暖的綠光之中。",
        "深層轉化：綠度母的『迅疾』，往往體現在驚慌的平息、絕境中出現的轉圜，以及無形違緣的消散。",
        "善意回向：願眾生遠離苦難；並祈願您能跨越眼前的突發變故，重拾內在的平靜與安全感。",
      ],
      offeringsChecklist: [
        "溫暖明燈（酥油燈/供燈）",
        "澄澈清淨水供",
        "花/香等基礎供養（依循心意即可）",
      ],
      practiceFocus: [
        "內在看見：觀想度母如慈母般放光擁抱您，讓那些說不出口的恐懼如晨霧般消散，心，終於可以歇息。",
        "音頻共振：在禮讚與持咒中，試著輕輕放下焦躁，讓散亂的心念重新匯聚成安定的力量。",
        "擴展心量：真實寫下您此刻最懼怕發生的事，讓度母的慈悲精準為您建立防護。",
      ],
    },
    promise: "我們不訴求速效的奇蹟，但仰仗度母的深切誓願，當突發的變故帶來驚慌，我們願以慈悲的祈請為您建立防護，讓焦躁的心得以安頓，為您在絕境中尋找轉圜的空間。",
    scripture: [
      {
        quote: "「敬禮迅捷勇悍度母，眼如閃電剎那光。」",
        source: "《二十一聖救度母禮讚文》",
        hint: "在最危急的時刻，慈悲的目光早已注視著您",
        url: "#",
      },
      {
        quote: "「若以絕對的虔信、恭敬、利眾之心… 早晚恭誦《二十一聖救度母禮讚文》七遍，可遠離… 災難及病痛…」",
        source: "觀音山法藏：度母禮讚文功德利益整理",
        hint: "當心念安定，恐懼便無法再無限蔓延",
        url: "https://www.fazang.org/greentara/",
      },
    ],
    painPoints: ["被無法解釋的焦慮與驚恐深深困擾", "生活彷彿被阻力包圍，處於難以突破的低谷", "遭遇突如其來的變故，感到不知所措"],
    whyThisDeity: ["以迅疾的慈悲回應您最深層的呼喚", "溫柔消融內在的不安全感與恐懼", "為糾結的世俗障礙，帶來柔軟的轉圜餘地"],
    process: [
      { title: "發心與探索", body: "點一盞燈，備一杯淨水；皈依三寶，將恐懼交託，祈請慈悲的救護。" },
      { title: "相應與轉化", body: "在祈請與禮讚的共振中，讓焦躁的靈魂獲得安撫，找回面對未知的平靜。" },
      { title: "回向與見證", body: "將平安回向給您與您的掛念；志工造冊修持後，隔週將公開去識別化名錄，傳遞溫暖。" },
    ],
    plans: [
      {
        id: "t-680",
        name: "迅疾救護｜綠度母慈悲微光供燈",
        price: 680,
        blurb: "當您感到疲憊與害怕：先點亮一盞燈，讓慌亂的心跳慢下來，給事情一個轉圜的空間。",
        url: "https://cart.cashier.ecpay.com.tw/qp/zEJ1",
        suitableFor: ["平息突發焦慮", "日常祈求平安"],
        details: ["慈悲供燈回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
      {
        id: "t-1280",
        name: "八難止息｜綠度母深度除障救護",
        price: 1280,
        blurb: "當您覺得『已經快要撐不住了』：透過深度的除障護持，先穩住搖晃的運勢，陪伴您度過黑暗。",
        url: "https://cart.cashier.ecpay.com.tw/qp/zED7",
        hot: true,
        badge: "救急轉圜",
        suitableFor: ["跨越身心低谷", "化解突發變故"],
        details: ["深度除障相應", "救護加持回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
      },
    ],
    faq: [
      {
        q: "這是一場真實的祈福，還是商業買賣？",
        a: "這是一場真實的法事造冊與善緣探索。我們採用『綠界科技 ECPay』確保您的金流安全。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。修持完成後，我們會在 FB 粉專公佈「去識別化」名錄，讓您的付出成為純粹且透明的善意。",
      },
      { q: "為什麼綠度母被稱為『迅疾』？", a: "度母造像右足下垂，象徵著一位母親隨時準備起身，奔向呼喚祂的孩子。這代表了對苦難最即時的溫柔回應。" },
      { q: "我什麼時候最需要尋求度母的護持？", a: "當您被突發的變故嚇壞、被深深的焦慮淹沒，或是覺得『事情快要失控』時，請讓度母先為您拉回平靜。" },
      { q: "我該如何表達我的恐懼？", a: "請誠實地寫下您『最害怕發生什麼』，以及您此刻最需要被保護的面向。不要隱藏脆弱，讓慈悲接住它。" },
      { q: "如果我也為財務或人際關係感到煩惱呢？", a: "如果此刻『恐懼與不安』佔據了您，請先讓綠度母為您安頓身心。當平靜回歸，您自然會有力量去探索黃財神（豐盛）或作明佛母（善緣）的路徑。" },
    ],
    crossSell: [
      { title: "若您在平靜後，渴望解決現金流的困境", desc: "探索黃財神：修復財務漏洞，啟動新的豐盛流動。", to: "yellow" },
      { title: "若這是一場長期且艱難的考驗，您需要更堅定的靠山", desc: "探索蓮師：在總集的加持中，尋回無畏的承擔力。", to: "padmasambhava" },
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