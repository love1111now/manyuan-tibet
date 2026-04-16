/*
Design philosophy: Neo-thangka noir (Cold-Reading & Somatic Psychology)
- Feature 1: "Barnum Effect" Question Design - Replaced generic questions with deeply visceral, scenario-based prompts.
- Feature 2: Somatic Markers - Added questions about physical symptoms (sleep, chest tightness) to bypass logical defenses.
- Feature 3: Weighted Assessment - Complex multi-dimensional scoring mapping exactly to the 7 deities.
- Feature 4: Consultant-Grade Advice (KARMA_ADVICE) - Provides structural life-coach style feedback, seamlessly leading into the "repair plans".
- Bugfix: Replaced 'Activity' with 'HeartPulse' to prevent Production Minifier / WebView global keyword collision.
- 100% Unabbreviated Production Ready Code.
*/

import type { DeityKey } from "@/lib/siteData";
import { 
  Coins, 
  Home, 
  Compass, 
  Heart, 
  Shield, 
  HeartPulse, 
  Zap 
} from "lucide-react";

export interface QuizQuestion {
  id: string;
  title: string;
  options: {
    id: string;
    label: string;
    weights: Partial<Record<DeityKey, number>>;
  }[];
}

// 🟢 頂級冷讀術題庫：直擊現代人最深層的六大焦慮場景
export const QUESTION_BANK: QuizQuestion[] = [
  {
    id: "q_night",
    title: "當夜深人靜，獨自面對真實的自己時，哪一種情緒最常將您吞噬？",
    options: [
      { id: "n1", label: "帳單與數字帶來的窒息感，總覺得錢不夠用", weights: { yellow: 3, mahashri: 1 } },
      { id: "n2", label: "擔心突發變故或意外的極度恐慌，缺乏安全感", weights: { "green-tara": 3, padmasambhava: 1 } },
      { id: "n3", label: "覺得沒有人真正理解我的深深孤獨與不被愛", weights: { kurukulla: 3 } },
      { id: "n4", label: "思緒混亂，對未來抉擇的迷茫感與自我懷疑", weights: { ganapati: 3 } },
      { id: "n5", label: "身體與精神都被掏空，一種撐不下去的極度疲憊", weights: { "medicine-buddha": 3 } },
      { id: "n6", label: "覺得被莫名惡意、小人或厄運纏身的恐懼", weights: { padmasambhava: 3, "green-tara": 1 } }
    ]
  },
  {
    id: "q_loop",
    title: "回顧過去一年的軌跡，您發現在哪個領域「最常發生鬼打牆」的循環？",
    options: [
      { id: "l1", label: "感情與人際：總是一再遇到消耗我的人，或熱臉貼冷屁股", weights: { kurukulla: 3 } },
      { id: "l2", label: "財富與資源：明明很努力付出，但錢與機會卻總是留不住", weights: { yellow: 3 } },
      { id: "l3", label: "職場與專案：眼看要成了，卻總有小人或行政意外從中作梗", weights: { ganapati: 3 } },
      { id: "l4", label: "身心與健康：小病不斷，失眠焦慮，始終無法徹底放鬆", weights: { "medicine-buddha": 3 } },
      { id: "l5", label: "家庭與家運：家中氣氛緊繃，總是爭吵或發生不順心的瑣事", weights: { mahashri: 3 } }
    ]
  },
  {
    id: "q_leak",
    title: "如果生命是一座容器，您覺得自己現在的「破洞」在哪裡？",
    options: [
      { id: "lk1", label: "缺乏一道強而有力的防護罩，覺得自己極度脆弱易受傷", weights: { padmasambhava: 3, "green-tara": 2 } },
      { id: "lk2", label: "缺乏吸引善意與好運的磁場，總覺得被這個世界冷落", weights: { kurukulla: 3, mahashri: 1 } },
      { id: "lk3", label: "缺乏清晰的判斷力，常常做出讓自己後悔的衝動決定", weights: { ganapati: 3 } },
      { id: "lk4", label: "缺乏承載財富的底氣，總覺得自己「不配」擁有更多", weights: { yellow: 3 } },
      { id: "lk5", label: "缺乏自我修復的能量，像一顆永遠充不滿的損壞電池", weights: { "medicine-buddha": 3 } }
    ]
  },
  {
    id: "q_desire",
    title: "面對無法完全掌控的未來，您現在最渴望擁有哪一種「底氣」？",
    options: [
      { id: "d1", label: "就算天塌下來，也有一股絕對力量為我撐腰的「安全感」", weights: { padmasambhava: 3 } },
      { id: "d2", label: "能迅速化解眼前迫切危機，讓我立刻喘口氣的「轉機」", weights: { "green-tara": 3 } },
      { id: "d3", label: "看透複雜局勢，清明地知道下一步該怎麼走的「智慧」", weights: { ganapati: 3 } },
      { id: "d4", label: "不必再為五斗米折腰，能自由選擇生活的「豐盛資源」", weights: { yellow: 3 } },
      { id: "d5", label: "無論走到哪，都能與周遭和諧共處、受人喜愛的「魅力」", weights: { kurukulla: 3 } },
      { id: "d6", label: "全家人都能平平安安，生活穩穩當當的「圓滿福氣」", weights: { mahashri: 3 } }
    ]
  },
  {
    id: "q_somatic",
    title: "當壓力來襲時，您的身體通常是如何向您發出「求救訊號」的？",
    options: [
      { id: "s1", label: "頻繁的頭痛、肩頸僵硬，腦袋像隨時要爆炸一樣轉個不停", weights: { ganapati: 2, "medicine-buddha": 2 } },
      { id: "s2", label: "胸口總覺得悶悶的，甚至會伴隨突如其來的心悸與恐慌", weights: { "green-tara": 3, padmasambhava: 1 } },
      { id: "s3", label: "嚴重的睡眠障礙，即使睡著也一直做夢，醒來還是極度疲勞", weights: { "medicine-buddha": 3 } },
      { id: "s4", label: "腸胃經常不適，對生活周遭的變化感到神經質與過度敏感", weights: { mahashri: 2, yellow: 1 } },
      { id: "s5", label: "總覺得身體發冷、提不起勁，有一種深深的無力與空虛感", weights: { kurukulla: 2, padmasambhava: 1 } }
    ]
  },
  {
    id: "q_safeplace",
    title: "如果現在有一個絕對安全的空間，您走進去的第一個動作會是什麼？",
    options: [
      { id: "sp1", label: "什麼都不想，只想沈沉地睡上一覺，徹底斷電與世界隔離", weights: { "medicine-buddha": 3 } },
      { id: "sp2", label: "躲在最堅固的角落，確認沒有任何威脅與惡意可以傷害我", weights: { padmasambhava: 3, "green-tara": 2 } },
      { id: "sp3", label: "把亂七八糟的思緒寫下來，好好梳理下一步該怎麼突破", weights: { ganapati: 3 } },
      { id: "sp4", label: "點起溫暖的燈，希望有人能坐下來，溫柔且專注地聽我說話", weights: { kurukulla: 3 } },
      { id: "sp5", label: "清點自己的存款與資源，盤算著如何讓接下來的生活更安穩", weights: { yellow: 3, mahashri: 2 } }
    ]
  }
];

// 🟢 顧問級診斷書：建立「自我說服」的最後一哩路
export const KARMA_ADVICE: Record<DeityKey, { tag: string, title: string, analogy: string, repairPlan: string }> = {
  "yellow": {
    tag: "資糧漏損",
    title: "您的財富容器出現了結構性的漏損",
    analogy: "您一直很努力注水，卻沒發現底部的裂縫。匱乏感正在吞噬您的決策力，讓您越是抓取，越是流失。",
    repairPlan: "我們將為您連結黃財神的力量。這不僅是祈求收入的增加，更是透過清淨的修法，為您填補資糧的破洞。當內在對金錢的恐懼被撫平，您的努力才能真正轉化為現實中的豐饒與餘裕。"
  },
  "mahashri": {
    tag: "家運不穩",
    title: "您的家運與生活地基需要重新校準",
    analogy: "生活的動盪讓您失去了歸屬感。當家宅的磁場或生活的根基不穩，再多的外在成就也無法帶來真正的平靜。",
    repairPlan: "我們將為您連結大吉祥天女的能量。這是一場為生命注入『圓滿與幸運』的修復工程。透過如法的供養，穩住家宅的磁場，讓您的生活重新迎來和諧、富足與不受干擾的平靜。"
  },
  "ganapati": {
    tag: "無明障礙",
    title: "無形的違緣正在干擾您的清明決策",
    analogy: "您感覺自己像是在泥沼中開車，明明看見了目標，卻總有突如其來的小人、意外或混亂的思緒將您困住。",
    repairPlan: "我們將為您連結象神（精靈主）的力量。這是一次強力的『事業破局』。透過威猛的除障儀軌，為您掃除無形的絆腳石，並開啟頂輪的清明智慧，讓您在關鍵時刻做出最精準的決斷。"
  },
  "kurukulla": {
    tag: "懷愛受損",
    title: "您的懷愛磁場處於封閉或受傷的狀態",
    analogy: "在關係中的挫折，讓您不自覺地豎起防備的刺。這不僅阻擋了消耗您的人，也同時把善緣與貴人擋在門外。",
    repairPlan: "我們將為您連結作明佛母的能量。這不是強制改變他人的迷信，而是溫柔地修復您受損的心輪。當您內在的匱乏被紅色的慈悲之光填滿，您將自然散發出吸引正桃花與職場貴人的強大魅力。"
  },
  "padmasambhava": {
    tag: "深層恐懼",
    title: "您的靈魂正在呼喚一個絕對強大的靠山",
    analogy: "環境的劇變或莫名逼近的惡意，讓您的安全感徹底崩塌。您現在需要的不是溫柔的安慰，而是一道堅不可摧的盾牌。",
    repairPlan: "我們將為您連結蓮花生大士的威德力。這是一場『降伏一切違緣』的金剛級防護工程。透過強勢的息災除障，為您驅逐身邊的邪祟與厄運，在動盪中為您與家人建立不容質疑的絕對安全感。"
  },
  "medicine-buddha": {
    tag: "生命耗損",
    title: "您的身心電池已經亮起了極度危險的紅燈",
    analogy: "長期的壓力與焦慮，已經開始在您的軀體與睡眠上留下刻痕。您在透支未來的生命力，來應付現在的生存。",
    repairPlan: "我們將為您連結藥師佛的琉璃光療癒。現在，請允許自己停下來。透過深層的息災與淨化，拔除積累在經絡與意識中的病氣與疲憊，為您乾涸的生命力重新注入清涼安定的活水。"
  },
  "green-tara": {
    tag: "突發急難",
    title: "您正處於需要被『瞬間接住』的危機邊緣",
    analogy: "突如其來的變故或極度迫切的渴望，讓您的心跳隨時處於狂飆狀態。您覺得自己快要掉下去了，急需一雙手。",
    repairPlan: "我們將為您連結綠度母的迅疾力量。度母的特德就是『快』。我們將以最急件的方式為您造冊祈請，用慈悲的綠光瞬間安撫您的恐慌，為眼前的死胡同強勢開闢出一道轉機的出口。"
  }
};

// 🟢 閃避了保留字的 Meta 標籤
export const DEITY_META: Record<DeityKey, { icon: any, funcTag: string }> = {
  "yellow": { icon: Coins, funcTag: "財富資糧修復" },
  "mahashri": { icon: Home, funcTag: "家運吉祥結界" },
  "ganapati": { icon: Compass, funcTag: "事業除障破局" },
  "kurukulla": { icon: Heart, funcTag: "善緣懷愛重建" },
  "padmasambhava": { icon: Shield, funcTag: "大威德防護罩" },
  "medicine-buddha": { icon: HeartPulse, funcTag: "身心細胞療癒" },
  "green-tara": { icon: Zap, funcTag: "迅疾急難救助" }
};