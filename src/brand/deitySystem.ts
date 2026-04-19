/**
 * 滿願藏庫｜第二層：中觀體系——七尊神明職能分工 (Deity System)
 *
 * 七尊神明，是同一個「生命修復工程」的七個專科部門。
 * 他們不是競爭關係，而是互補的整體系統。
 * 理解職能分工，才能在文案中做出精準、有說服力的推薦與交叉銷售。
 */

/**
 * 職能地圖：每尊神明的「核心修復領域」與「容器理論對位」
 *
 * 每一尊神明，修復容器的哪一個層次：
 *
 *  ┌────────────────────────────────────────────────┐
 *  │  生命容器結構圖                                  │
 *  │                                                  │
 *  │  ① 外部防護層   → 蓮花生大士（降伏外來威脅）      │
 *  │  ② 能量輸入管道 → 黃財神（財富流入）              │
 *  │                  大吉祥天女（吉祥全面注入）        │
 *  │  ③ 管道暢通性   → 象頭財神（除障，確保流通）       │
 *  │  ④ 吸引力磁場   → 作明佛母（人際磁場，善緣磁吸）   │
 *  │  ⑤ 容器本體健康 → 藥師佛（修補容器本身的裂縫）     │
 *  │  ⑥ 緊急維生系統 → 綠度母（急難時的快速止損）       │
 *  └────────────────────────────────────────────────┘
 */
export const DEITY_SYSTEM = {
  yellow: {
    role: "財富能量的輸入管道修復師",
    coreFunction: "修復資糧流入的管道，讓努力的成果能被容器接住而非漏失",
    cosmologyLink: "對應功德資糧的累積機制——當布施心清淨，財富的管道自然暢通",
    differentiator: "修復『賺得到但留不住』的結構性漏損；而非單純祈求財富到來",
    worksWellWith: ["ganapati", "medicine-buddha"],
    notFor: "投機、賭博、不勞而獲的貪婪祈求",
  },
  mahashri: {
    role: "生命全面豐盛的能量注入師",
    coreFunction: "注入吉祥能量，修復家庭與事業環境的整體氣場，讓吉祥能在日常中自然流露",
    cosmologyLink: "對應業力的環境層——周遭人事物的能量品質，決定了容器能吸收的養分品質",
    differentiator: "修復『環境氣場』而非單一問題——適合感覺整體不順、家庭氣氛緊繃的人",
    worksWellWith: ["yellow", "kurukulla"],
    notFor: "單一急難事件的快速解決",
  },
  ganapati: {
    role: "能量管道的疏通工程師",
    coreFunction: "排除阻擋前行的頑劣違緣，讓已有的努力與能量能順暢流向目標",
    cosmologyLink: "對應業力的障礙層——某些業力印記會主動攔截機遇，象頭財神專門清除這些攔截",
    differentiator: "修復『努力了但總差臨門一腳』的阻礙結構；不是增加能量，而是清除阻塞",
    worksWellWith: ["yellow", "padmasambhava"],
    notFor: "不努力卻想直接收割結果",
  },
  kurukulla: {
    role: "人際吸引力場的校準師",
    coreFunction: "修復受損的社交磁場，讓容器能主動吸引善緣、貴人與真實的人際連結",
    cosmologyLink: "對應業力的關係層——人際緣分的薄厚，由過去的廣結善緣程度所決定",
    differentiator: "修復『社交透明化，有努力卻無法被看見』的吸引力結構；而非控制他人",
    worksWellWith: ["mahashri", "ganapati"],
    notFor: "強迫特定對象產生感情，或控制他人意志的祈求",
  },
  "medicine-buddha": {
    role: "生命容器本體的修補師",
    coreFunction: "修補容器本身的裂縫與損耗，讓身心有足夠的健康底氣去承載豐盛",
    cosmologyLink: "對應業力的身心層——容器本體不健康，再多的財富和機遇都會從裂縫流失",
    differentiator: "修復『即便賺到了也留不住，身心持續耗損』的根本漏洞；是所有其他修復的地基",
    worksWellWith: ["yellow", "green-tara"],
    notFor: "逃避正規醫療，或以法事取代必要的醫學治療",
  },
  "green-tara": {
    role: "緊急維生系統的快速啟動師",
    coreFunction: "在急難來臨時，以最快速度啟動保護機制，防止容器在突發衝擊下徹底崩潰",
    cosmologyLink: "對應業力的急難層——某些密集的業力會在短時間內集中爆發，需要迅疾的力量接住",
    differentiator: "度母以『迅疾』著稱，是七尊中最適合處理緊急、突發情境的；其他本尊更適合長期修復",
    worksWellWith: ["medicine-buddha", "padmasambhava"],
    notFor: "長期的慢性問題（建議搭配藥師佛進行根本修復）",
  },
  padmasambhava: {
    role: "容器外部防護層的建構師",
    coreFunction: "在容器外部建立強大的威德結界，降伏外來的惡意、邪祟與不可抗力的嚴重威脅",
    cosmologyLink: "對應業力的外部干擾層——某些強大的外部業力需要對等的威德力量才能降伏",
    differentiator: "蓮師是七尊中威德最強、最適合應對嚴重外部威脅的；不是一般不順，而是真正的重大危機",
    worksWellWith: ["green-tara", "medicine-buddha"],
    notFor: "一般的小不順或日常焦慮（這些更適合綠度母或藥師佛）",
  },
} as const;

/**
 * 交叉對位邏輯（Cross-Reference Matrix）
 *
 * 根據用戶描述的問題，應該推薦哪一尊、為什麼、下一步推薦誰。
 * 這是「知識交叉驗證能力」的實作基礎。
 */
export const CROSS_REFERENCE = {
  "賺不到錢": { primary: "yellow", secondary: "ganapati", reason: "先疏通管道，再修復流入" },
  "賺到留不住": { primary: "yellow", secondary: "medicine-buddha", reason: "先修復漏損管道，再補強容器本體" },
  "事業停滯": { primary: "ganapati", secondary: "yellow", reason: "先清除阻礙，再讓資糧流入" },
  "家庭不和": { primary: "mahashri", secondary: "kurukulla", reason: "先注入吉祥氣場，再優化人際磁場" },
  "人緣差": { primary: "kurukulla", secondary: "mahashri", reason: "先校準磁場，再穩固環境能量" },
  "身體健康": { primary: "medicine-buddha", secondary: "green-tara", reason: "先修補容器，再強化緊急防護" },
  "突發急難": { primary: "green-tara", secondary: "medicine-buddha", reason: "先止損，再修復損傷" },
  "遭受攻擊": { primary: "padmasambhava", secondary: "green-tara", reason: "先建立結界，再修復衝擊" },
  "整體不順": { primary: "mahashri", secondary: "ganapati", reason: "先注入吉祥，再清除阻礙" },
} as const;
