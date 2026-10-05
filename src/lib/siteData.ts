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
    title: "先理解，再決定",
    body: "網站優先說明法門脈絡、參與方式、費用與付款流程，不以個案結果作為保證。",
    by: "網站透明說明"
  },
  {
    title: "流程清楚",
    body: "一般法事與特別祭典分開說明；需要登記資料的方案，依頁面指引於綠界付款流程中完成。",
    by: "網站流程說明"
  },
  {
    title: "不把信仰說成保證",
    body: "宗教修持重視發心、行善與回向，網站不以神蹟、投資、醫療或法律結果作為承諾。",
    by: "網站使用須知"
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