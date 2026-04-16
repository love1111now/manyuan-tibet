// @ts-nocheck
import type { Deity } from "@/lib/siteData";

import heroMedicineImg from "@/assets/visuals/deities/medicine-buddha-hero-altar.jpeg";
import ritualMedicineImg from "@/assets/visuals/deities/medicine-buddha-vibe-butter-lamp.webp"; 
import medicineRitualAltar from "@/assets/visuals/deities/medicine-buddha-ritual-altar.webp";
import medicineActionPuja from "@/assets/visuals/deities/medicine-buddha-action-group-puja.webp";
import medicineVibeLamp from "@/assets/visuals/deities/medicine-buddha-vibe-butter-lamp.webp";

export const medicineBuddha: Deity = {
  key: "medicine-buddha", 
  name: "藥師佛",
  subtitle: "琉璃光療癒・拔除疾苦",
  route: "/deity/medicine-buddha",
  primaryIntent: "健康療癒與息災延壽",
  themeColor: { bg: "#0D1B2A", accent: "#4169E1" }, 
  heroKicker: "以湛藍的琉璃光，撫平身心的創傷與疲憊",
  heroImage: heroMedicineImg,
  ritual: {
    title: "藥師琉璃光如來消災延壽修法",
    image: ritualMedicineImg,
    imageAlt: "壇城光影：沐浴在療癒的藍色光芒中",
    mdPath: "medicine-buddha-healing.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/medicine-buddha",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
    keyPoints: [
      "安頓心念： 接納身體的病痛與心靈的疲憊，將抵抗與怨懟，轉化為溫柔的自我照顧。",
      "儀軌相應： 觀想藥師佛身如琉璃，其湛藍色的療癒之光照耀全身，淨化每一個細胞與經絡。",
      "深層轉化： 理解疾病往往是身心失衡的顯化，藉由懺悔與祈請，從根源拔除生病的因。",
      "善意回向： 願世間一切受病苦折磨的眾生，皆能遇見良醫良藥，早日康復，身心安泰。"
    ],
    offeringsChecklist: [
      "清淨的清水（藥師咒水）",
      "新鮮的花朵與藥草",
      "明亮的酥油燈"
    ],
    practiceFocus: [
      "內在看見： 傾聽身體發出的警訊，不再過度消耗自己，給予身心足夠的修復時間。",
      "音頻共振： 持誦藥師佛心咒，讓帶有療癒頻率的音聲，在體內產生深層的共振與修復。",
      "擴展心量： 關懷身邊的病患與長者，以實際的行動或發心代為點燈，實踐慈悲願力。"
    ]
  },
  rituals: [
    { id: "mb1", img: medicineRitualAltar, alt: "藥師佛壇城", caption: "澄澈的琉璃光芒，洗滌一切身心垢染" },
    { id: "mb2", img: medicineActionPuja, alt: "僧眾修法", caption: "匯聚眾人的清淨願力，為病苦者祈求續命延壽" },
    { id: "mb3", img: medicineVibeLamp, alt: "延壽供燈", caption: "點燃生命之火，驅散疾病帶來的陰冷與恐懼" }
  ],
  testimonials: [
    { title: "手術順利，超乎預期的復原", body: "父親被診斷出腫瘤需要緊急手術，全家都陷入愁雲慘霧。我為他登記了藥師佛深層淨化加強方案。奇蹟的是，手術不僅非常成功，醫生還說腫瘤沒有擴散，且術後恢復的速度比年輕人還快。那湛藍色的光芒，真的接住了我們的無助。", by: "新竹 李小姐 ｜ 科技業" },
    { title: "困擾三年的嚴重失眠不藥而癒", body: "因為長期的工作高壓，我患上了嚴重的失眠與自律神經失調，吃藥也只能睡兩小時。在參與修法後，我試著睡前靜心。某個晚上，我感到一股清涼的能量從頭頂灌入，那天我竟然一覺到天亮。這是我這三年來睡得最安穩的一覺。", by: "台北 吳先生 ｜ 行銷總監" },
    { title: "減輕了化療過程的巨大痛苦", body: "母親在化療期間非常痛苦，吃不下也睡不好。我只能無助地為她祈求藥師佛。很神奇地，在點燈的隔週，她說那種像被火燒的副作用減輕了很多，甚至能喝下一整碗湯了。這份慈悲的減輕痛苦，對家屬來說就是最大的安慰。", by: "台中 陳先生 ｜ 會計師" }
  ],
  promise: "面對疾病與身心的耗損，我們深知那份無力與煎熬。藥師佛的法門不僅是超自然的祈求，更是引導您回歸內在平衡的療癒過程。我們將如法為您或您的摯愛修持迴向，祈願這份湛藍的療癒能量，能減輕病痛的折磨，帶來身心的安康與平靜。",
  scripture: [
    { quote: "「願我來世得菩提時，身如琉璃，內外明徹，淨無瑕穢...」", source: "《藥師琉璃光如來本願功德經》", hint: "身心的清淨與透徹，是健康的最高境界", url: "#" }
  ],
  // 🟢 優化 1: 痛點降維打擊，直擊靈魂的場景式文案 (AI SEO 關鍵字對齊)
  painPoints: [
    "長期處於高壓環境，身體與精神皆感到被掏空的極度疲憊",
    "莫名的小病痛不斷，睡眠品質極差，心神難以安寧",
    "照顧生病家人或面對無常變故，導致心力交瘁、失去生活動力"
  ],
  // 🟢 優化 2: 解法具象化，將祈福轉為系統級修復
  whyThisDeity: [
    "琉璃光能量能修復破損的乙太體，從深層阻斷生命力的無端耗損",
    "拔除積累的病氣與負面磁場，為身心注入清涼安定的活水",
    "建立堅固的健康防禦網，讓您有餘裕接住生活與現實的挑戰"
  ],
  process: [
    { title: "發心與探索", body: "為自己或生病的親友，生起強烈的求生與療癒渴望。" },
    { title: "相應與轉化", body: "觀想藥師甘露洗滌病灶，讓生機重新注入衰弱的軀體。" },
    { title: "回向與見證", body: "將功德回向給病患；志工將細心造冊，溫柔陪伴度過關卡。" }
  ],
  plans: [
    { 
      id: "mb-personal", 
      name: "琉璃光境 ｜ 藥師如來健康息災煙供-個人", 
      price: 490, 
      blurb: "為疲憊的身心點亮一盞燈：溫柔撫平病痛與焦慮，祈求個人的健康與平靜。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4V8", 
      suitableFor: ["個人養生祈福", "改善失眠焦慮"], 
      // 🟢 優化 3: 加入防禦性標籤，提升 E-E-A-T 權威信任感
      details: ["個人專屬息災煙供", "⚠️ 非醫療替代方案，請配合正規醫治", "✦ 本月結緣：加強健康防禦護持"] 
    },
    { 
      id: "mb-group", 
      name: "琉璃光境 ｜ 藥師如來健康息災煙供-團體", 
      price: 980, 
      blurb: "當您與家人面臨健康挑戰：以團體共修的強大願力相應，減輕痛苦，祈求全家安康早日康復。", 
      url: "https://cart.cashier.ecpay.com.tw/qp/z4U2", 
      hot: true, 
      badge: "療癒首選", 
      suitableFor: ["家人健康祈福", "長輩病患延壽"], 
      details: ["全家/團體息災煙供", "康復祈願回向", "⚠️ 非醫療替代方案，請配合正規醫治", "✦ 本月結緣：加強健康防禦護持"] 
    }
  ],
  faq: [
    { q: "這是一場真實的祈福，還是商業買賣？", a: "這是一場真實的法事造冊與善緣探索。滿願藏庫台灣團隊由不支薪志工組成，護持金全數化作西藏壇城的莊嚴供養。" },
    { q: "代人點藥師佛燈有效嗎？", a: "絕對有效。只要您發心純正，在備註欄填妥病患資訊，將功德確實迴向給指定的親友，這份善念必定能傳遞給對方。" },
    { q: "生重病可以只靠點燈不看醫生嗎？", a: "不可以。佛教主張『福慧雙修』，生病必須尋求正規醫療。藥師佛的修持是『輔助』，能幫助減少醫療過程中的障礙，安定心神。" }
  ],
  crossSell: [
    { title: "如果病痛伴隨著急迫的危險與極大的恐懼", desc: "探索綠度母：以迅疾的大悲願力，迅速解除當下的急難與恐慌。", to: "green-tara" },
    { title: "如果需要更強大的精神防護網來阻擋無形干擾", desc: "探索蓮花生大士：建立不可撼動的金剛護佑。", to: "padmasambhava" }
  ]
};