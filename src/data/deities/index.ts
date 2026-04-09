// src/data/deities/index.ts
import type { Deity, DeityKey } from "@/lib/siteData";

import { yellow } from "./yellowDzambhala";
import { mahashri } from "./mahashri";
import { ganapati } from "./ganapati";
import { kurukulla } from "./kurukulla";
import { padmasambhava } from "./padmasambhava";
import { medicineBuddha } from "./medicineBuddha"; 
import { greenTara } from "./greenTara";

// 1. 決定前端頁面顯示的先後順序
// 優化：加上 readonly，防止 UI 元件意外修改陣列（如誤用 .push() 或 .sort()）
export const DEITIES: readonly Deity[] = [
  greenTara,      // 綠度母 (迅疾救度，通常放在首位)
  padmasambhava,  // 蓮花生大士 (強力除障)
  medicineBuddha, // 藥師佛 (健康平安)
  yellow,         // 黃財神 (財富資糧)
  mahashri,       // 大吉祥天女 (家庭美滿)
  ganapati,       // 象神 (事業突破)
  kurukulla,      // 咕嚕咕咧佛母 (人際關係)
];

// 2. 建立全量資料庫 Mapping
// 優化 A：加上 Readonly<> 鎖定物件結構
// 優化 B：使用 ES6 縮寫語法，移除多餘的重複命名 (yellow: yellow -> yellow)
export const DEITY_BY_KEY: Readonly<Record<DeityKey, Deity>> = {
  yellow,
  mahashri,
  ganapati,
  kurukulla,
  padmasambhava,
  "medicine-buddha": medicineBuddha, // 帶有連字號必須保留字串 Key
  "green-tara": greenTara,           // 帶有連字號必須保留字串 Key
};