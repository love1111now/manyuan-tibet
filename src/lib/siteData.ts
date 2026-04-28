/**
 * 滿願藏庫｜核心資料庫 (siteData.ts)
 * - 保留全站共用設定、型別定義與首頁見證。
 * - 支援 History Router 絕對路徑與強型別校驗。
 */

// ----------------------------------------------------------------------
// 1. 輔助紀實素材 (WebP 高效格式)
// ----------------------------------------------------------------------
import heroBrocadeImg from "@/assets/visuals/generated/hero-brocade.webp";
import heroGildedImg from "@/assets/visuals/generated/hero-gilded.webp";
import sutraCloseupImg from "@/assets/visuals/generated/sutra-closeup.webp";
import deityBannerImg from "@/assets/visuals/altar-stilllife-offering-set.webp"; 

// ----------------------------------------------------------------------
// 2. 類型定義 (Types) - 確保 100% 型別安全
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
  readonly suitableFor: readonly string[]; // 限制為唯讀陣列
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
  
  // 🟢 結帳前心理建設：寫在您決定啟動修復之前
  readonly precaution?: {
    readonly title: string;
    readonly items: readonly string[];
  };

  // 🟢 轉換率關鍵：前往綠界前的引導教學
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
// 3. 基礎設定 (SITE) - 支援 AEO 搜尋優化
// ----------------------------------------------------------------------
export const SITE = {
  name: "滿願藏庫",
  url: "https://zambala-tibetan.com.tw",
  fb: "https://www.facebook.com/profile.php?id=61583749010531",
  fbLabel: "任何疑問，我們隨時在 FB 溫暖陪伴您",
  supportEmail: "service@zambala-tibetan.com.tw", // 補齊信任指標
} as const;

export const SITE_CONFIG = SITE;

export const VISUALS = {
  heroBrocade: heroBrocadeImg,
  heroGilded: heroGildedImg,
  sutraCloseup: sutraCloseupImg,
  deityBanner: deityBannerImg,
};

// ----------------------------------------------------------------------
// 4. 首頁見證 (真實感 E-E-A-T)
// ----------------------------------------------------------------------
export const HOME_TESTIMONIALS = [
  {
    title: "停滯的兩筆尾款，兩週後入帳了",
    body: "做自由工作者最怕的就是帳款卡住。護持黃財神水供後，原本沓無音訊的兩筆款項陸續通知了。但更讓我珍惜的，是那種每天被錢追著跑的底層焦慮，終於鬆動了一點。",
    by: "台中市 林小姐・自由工作者"
  },
  {
    title: "卡了半年的企劃案，一週內過關",
    body: "那種明明準備好了、卻就是推不動的感覺，真的很消耗人。護持象頭財神的除障法事後，原本一直刁難的主管態度轉變了，案子過了。我不確定是不是巧合，但那週我確實感覺前方的霧散了。",
    by: "台北市 陳先生・行銷企劃"
  },
  {
    title: "事業最黑暗的那段路，有個靠山陪著",
    body: "接連遇到合夥糾紛和客戶惡意毀約，一個月內好像被清空了。蓮師的護持沒有讓問題消失，但那段時間我沒有垮——這對當時的我來說，已經是最重要的事。",
    by: "桃園市 郭先生・創業者"
  },
  {
    title: "身體說不上哪裡不對，卻一直很累",
    body: "檢查沒有問題，卻就是長期疲憊、容易耗損。護持藥師佛修法後，沒有戲劇性的改變，但大概三週後，身體開始有了不一樣的底氣——一種可以好好撐著的感覺。",
    by: "新北市 王小姐・上班族"
  },
  {
    title: "家裡的氣氛，悄悄變鬆了",
    body: "跟先生不是吵架，就是冷戰，說不上來為什麼就是很緊繃。護持大吉祥天女後，沒有哪一天突然和好，是慢慢地，摩擦少了，也比較願意互相退一步了。",
    by: "台南市 張小姐・家庭主婦"
  },
  {
    title: "內心的佔有焦慮，第一次鬆開了",
    body: "我知道自己對感情的掌控欲太強，但控制不了。護持作明佛母後，某一天突然發現，自己對對方的擔憂少了——不是放棄，是真的放鬆了，反而關係比以前更自然。",
    by: "高雄市 李小姐・教育工作者"
  },
];

// ----------------------------------------------------------------------
// 5. 話題分類 (TOPICS)
// ----------------------------------------------------------------------
export const TOPICS = [
  { id: "wealth", slug: "wealth", title: "豐盛流動", deity: "yellow" as DeityKey, summary: "當努力的成果留不住，問題往往不在努力不夠，而在資糧容器出現了結構性漏損。修復管道，讓豐盛真正被接住。", ctaLabel: "探索豐盛路徑" },
  { id: "obstacle", slug: "obstacle", title: "清明無礙", deity: "ganapati" as DeityKey, summary: "準備充分了，卻總是差臨門一腳——這是管道阻塞，不是能力不足。清除違緣，讓已有的努力順暢通往結果。", ctaLabel: "發現清明洞察" },
  { id: "protection", slug: "protection", title: "無畏護持", deity: "padmasambhava" as DeityKey, summary: "當風暴來自四面八方，一個人撐著太累。在生命最嚴峻的時刻，需要的不是技巧，而是一座不可撼動的靠山。", ctaLabel: "尋找安定力量" },
] as const;

// ----------------------------------------------------------------------
// 6. 工具函數
// ----------------------------------------------------------------------

/**
 * 格式化台幣顯示 (e.g., NT$ 1,200)
 */
export const money = (val: number) => 
  new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    maximumFractionDigits: 0
  }).format(val);

/**
 * 獲取神尊頁面的絕對路徑 (支援 History Router)
 */
export const getDeityUrl = (key: DeityKey) => `/deity/${key}`;