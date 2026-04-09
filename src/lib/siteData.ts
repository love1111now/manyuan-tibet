// @ts-nocheck
/**
 * 滿願藏庫｜核心資料庫 (siteData.ts)
 * - 此檔案保留全站共用設定、型別定義、與首頁資料。
 * - 各本尊的詳細資料已模組化拆分至 src/data/deities/ 中。
 */

// ----------------------------------------------------------------------
// 1. 輔助紀實素材 / 通用圖 (僅保留全站共用的圖片，各神明專屬圖已移至各自檔案)
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
import deityBannerImg from "@/assets/visuals/altar-stilllife-offering-set.webp"; 

// ----------------------------------------------------------------------
// 2. 類型定義 (Types)
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

  readonly rituals?: readonly {
    readonly id: string;
    readonly img: string;
    readonly alt: string;
    readonly caption: string;
  }[];

  // ★★★ 核心修復：這段是您原本缺失的，現在已經正式補上 ★★★
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
// 3. 基礎設定 (SITE)
// ----------------------------------------------------------------------
export const SITE = {
  name: "滿願藏庫",
  url: "https://zambala-tibetan.com.tw",
  fb: "https://www.facebook.com/profile.php?id=61583749010531",
  fbLabel: "任何疑問，我們隨時在 FB 溫暖陪伴您",
  fbUrl: "https://www.facebook.com/profile.php?id=61583749010531",
} as const;

export const SITE_CONFIG = SITE;

export const VISUALS = {
  heroBrocade: heroBrocadeImg,
  heroGilded: heroGildedImg,
  sutraCloseup: sutraCloseupImg,
  deityBanner: deityBannerImg,
  ritualLive: ritualLiveImg,
  mandala: mandalaImg,
  lineageWheels: lineageWheelsImg,
  lineageFire: lineageFireImg,
  altarStilllife: altarStilllifeImg,
  altar1: altar1Img,
};

// ----------------------------------------------------------------------
// 4. 首頁見證 (HOME_TESTIMONIALS)
// ----------------------------------------------------------------------
export const HOME_TESTIMONIALS = [
  { title: "財庫與身心一起被溫柔接住了", body: "原本只是想為資金缺口尋找一點喘息空間，沒想到團隊加碼回向了藥師佛。不僅滯留的款項順利流動，連續失眠好幾天的緊繃感也奇蹟般地平靜下來。", by: "高雄市 陳小姐" },
  { title: "資金流動中的安定感", body: "卡住的因緣順利展開，不穩定的收支逐漸找到平衡。最珍貴的是，那種每天被金錢追著跑的深層焦慮，終於獲得了釋放。", by: "台北市 張先生" },
  { title: "看見財庫隱形漏洞的癒合", body: "生命中那些難以言喻的消耗感彷彿被撫平了，無謂的意外開銷明顯減少。現在，終於能安穩地看著豐盛一點一滴累積。", by: "台中市 林小姐" },
  { title: "從迷霧中尋回清明洞察", body: "點燈護持後，內在的思緒變得異常清晰。這份洞察力啟發了我，讓我順利避開隱藏風險的合作案，少走了許多心力交瘁的彎路。", by: "新竹縣 吳先生" },
  { title: "在幽谷中發現無畏的靠山", body: "在事業最黑暗、幾乎失去所有力氣的時候，蓮師的護持給了我極大的內在安定，穩穩地陪我走過生命中最難熬的關口。", by: "桃園市 郭先生" },
  { title: "重拾踏實的安全感", body: "參與修法後，壓在胸口那種莫名懼怕未知的重擔感消散了。整個人彷彿重新扎根，找回了久違的踏實與安穩。", by: "新北市 郭小姐" },
];

// ----------------------------------------------------------------------
// 5. 話題分類 (TOPICS)
// ----------------------------------------------------------------------
export const TOPICS = [
  { id: "wealth", slug: "wealth", title: "豐盛流動", deity: "yellow", summary: "啟發生命的增益能量，修復財富流動的隱形漏損，讓每一份努力都能看見踏實的轉變。", ctaLabel: "探索豐盛路徑" },
  { id: "obstacle", slug: "obstacle", title: "清明無礙", deity: "ganapati", summary: "照亮前行路徑上的迷霧，化解深層的違緣阻礙，讓事業與生活重回穩定的流動。", ctaLabel: "發現清明洞察" },
  { id: "protection", slug: "protection", title: "無畏護持", deity: "padmasambhava", summary: "在生命的低谷中仰仗大威德光芒，安頓內在恐懼，為您建立不可撼動的平靜靠山。", ctaLabel: "尋找安定力量" },
] as const;

// ----------------------------------------------------------------------
// 6. 匯入與導出模組化後的神明資料庫
// ----------------------------------------------------------------------
import { DEITIES, DEITY_BY_KEY } from "@/data/deities";
export { DEITIES, DEITY_BY_KEY };

export const money = (val: number) => val.toLocaleString();