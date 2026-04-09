// src/data/deities/index.ts
import type { Deity, DeityKey } from "@/lib/siteData";

import { yellow } from "./yellowDzambhala";
import { mahashri } from "./mahashri";
import { ganapati } from "./ganapati";
import { kurukulla } from "./kurukulla";
import { padmasambhava } from "./padmasambhava";
import { medicineBuddha } from "./medicineBuddha"; 
import { greenTara } from "./greenTara";

// 1. 建立全量資料庫 Mapping
// 這裡的 Key 值必須精準對應路徑名稱與類型定義
export const DEITY_BY_KEY: Record<DeityKey, Deity> = {
  "yellow": yellow,
  "mahashri": mahashri,
  "ganapati": ganapati,
  "kurukulla": kurukulla,
  "padmasambhava": padmasambhava,
  "medicine-buddha": medicineBuddha, // 注意這裡連字號要對
  "green-tara": greenTara,            // 注意這裡連字號要對
};

// 2. 決定前端頁面顯示的先後順序
export const DEITIES: Deity[] = [
  greenTara,      // 綠度母 (迅疾救度，通常放在首位)
  padmasambhava,  // 蓮花生大士 (強力除障)
  medicineBuddha, // 藥師佛 (健康平安)
  yellow,         // 黃財神 (財富資糧)
  mahashri,       // 大吉祥天女 (家庭美滿)
  ganapati,       // 象神 (事業突破)
  kurukulla,      // 咕嚕咕咧佛母 (人際關係)
];