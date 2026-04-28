 /**
 * 滿願藏庫｜核心資料庫 (siteData.ts)
 */

// ----------------------------------------------------------------------
// 1. 靜態素材
// ----------------------------------------------------------------------
import heroBrocadeImg from "@/assets/visuals/generated/hero-brocade.webp";
import heroGildedImg from "@/assets/visuals/generated/hero-gilded.webp";
import sutraCloseupImg from "@/assets/visuals/generated/sutra-closeup.webp";
import deityBannerImg from "@/assets/visuals/altar-stilllife-offering-set.webp"; 

// ----------------------------------------------------------------------
// 2. 型別
// ----------------------------------------------------------------------
export type DeityKey =
  | "yellow"
  | "mahashri"
  | "ganapati"
  | "kurukulla"
  | "padmasambhava"
  | "medicine-buddha"
  | "green-tara";

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
  readonly suitableFor: readonly string[];
  readonly details?: readonly string[];
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

  readonly precaution?: {
    readonly title: string;
    readonly items: readonly string[];
  };

  readonly checkoutGuidance?: {
    readonly title: string;
    readonly steps: readonly {
      readonly id: number;
      readonly title: string;
      readonly desc: string;
      readonly example?: string;
    }[];
  };

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

  readonly rituals?: readonly {
    readonly id: string;
    readonly img: string;
    readonly alt: string;
    readonly caption: string;
  }[];

  readonly testimonials?: readonly {
    readonly title: string;
    readonly body: string;
    readonly by: string;
  }[];

  readonly plans: readonly Plan[];
  readonly faq: readonly { q: string; a: string }[];
  readonly crossSell: readonly { title: string; desc: string; to: DeityKey }[];
}

// ----------------------------------------------------------------------
// 3. SITE 設定（修正 fbUrl）
// ----------------------------------------------------------------------
export const SITE = {
  name: "滿願藏庫",
  url: "https://zambala-tibetan.com.tw",

  // ✅ 舊欄位保留（避免壞掉）
  fb: "https://www.facebook.com/profile.php?id=61583749010531",

  // ✅ 新欄位（你要求補回）
  fbUrl: "https://www.facebook.com/profile.php?id=61583749010531",

  fbLabel: "有任何疑問，直接私訊，我們會回你",
  supportEmail: "service@zambala-tibetan.com.tw",
} as const;

export const SITE_CONFIG = SITE;

export const VISUALS = {
  heroBrocade: heroBrocadeImg,
  heroGilded: heroGildedImg,
  sutraCloseup: sutraCloseupImg,
  deityBanner: deityBannerImg,
} as const;

// ----------------------------------------------------------------------
// 4. 首頁見證（強化真實感＋成交）
// ----------------------------------------------------------------------
export const HOME_TESTIMONIALS = [
  {
    title: "卡住的錢，真的回來了",
    body: "原本兩筆拖超久的款項，在護持後兩週內陸續通知入帳。最有感的是——我不再一直焦慮錢，反而開始敢接更好的案子。",
    by: "台中市 林小姐・自由工作者"
  },
  {
    title: "那道卡關的牆，突然不見了",
    body: "企劃卡了半年，一直被擋。護持後一週內過關。我不能說一定是因為這個，但那段時間確實一切變順了。",
    by: "台北市 陳先生・行銷"
  },
  {
    title: "不是問題消失，是我撐住了",
    body: "最黑暗的時候沒有崩掉，反而慢慢穩回來。這種穩定感，是之前沒有的。",
    by: "桃園市 郭先生・創業"
  }
] as const;

// ----------------------------------------------------------------------
// 5. TOPICS（優化點擊）
// ----------------------------------------------------------------------
export const TOPICS = [
  {
    id: "wealth",
    slug: "wealth",
    title: "錢進來，卻留不住？",
    deity: "yellow" as DeityKey,
    summary: "問題不是收入，而是流失。先止漏，才有累積。",
    ctaLabel: "修復財富流動"
  },
  {
    id: "obstacle",
    slug: "obstacle",
    title: "為什麼總差最後一步？",
    deity: "ganapati" as DeityKey,
    summary: "不是能力不夠，是阻礙在前面。",
    ctaLabel: "清除阻礙"
  },
  {
    id: "protection",
    slug: "protection",
    title: "撐不住的時候",
    deity: "padmasambhava" as DeityKey,
    summary: "當一切都不穩，需要的是靠山。",
    ctaLabel: "找到支撐"
  },
] as const;

// ----------------------------------------------------------------------
// 6. 工具
// ----------------------------------------------------------------------
export const money = (val: number) => 
  new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    maximumFractionDigits: 0
  }).format(val);

export const getDeityUrl = (key: DeityKey) => `/deity/${key}`;