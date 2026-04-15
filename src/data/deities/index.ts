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
export const DEITIES: readonly Deity[] = [
  greenTara,      // 綠度母 (迅疾救度)
  padmasambhava,  // 蓮花生大士 (強力除障)
  medicineBuddha, // 藥師佛 (健康平安)
  yellow,         // 黃財神 (財富資糧)
  mahashri,       // 大吉祥天女 (家庭美滿)
  ganapati,       // 象神 (事業突破)
  kurukulla,      // 咕嚕咕咧佛母 (人際關係)
];

// 2. 建立全量資料庫 Mapping (全面標準化為字串 Key 防禦型別錯誤)
export const DEITY_BY_KEY: Readonly<Record<DeityKey, Deity>> = {
  "yellow": yellow,
  "mahashri": mahashri,
  "ganapati": ganapati,
  "kurukulla": kurukulla,
  "padmasambhava": padmasambhava,
  "medicine-buddha": medicineBuddha,
  "green-tara": greenTara,
};