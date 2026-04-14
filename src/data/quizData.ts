import { Coins, Home, Eye, Heart, Leaf, Zap, Shield } from "lucide-react";
import { type DeityKey } from "@/lib/siteData";

export type QuizOption = {
  id: string;
  label: string;
  weights: Partial<Record<DeityKey, number>>;
};

export type QuizQuestion = {
  id: string;
  title: string;
  options: QuizOption[];
};

// --- 神明專屬圖示與「功能標籤」對應表 ---
export const DEITY_META: Record<DeityKey, { icon: any; enLabel: string; funcTag: string }> = {
  yellow: { icon: Coins, enLabel: "Wealth & Flow", funcTag: "資糧流動修復" },
  kurukulla: { icon: Heart, enLabel: "Love & Harmony", funcTag: "善緣懷愛重建" },
  mahashri: { icon: Home, enLabel: "Stability & Family", funcTag: "家運地基穩固" },
  ganapati: { icon: Eye, enLabel: "Clarity & Breakthrough", funcTag: "決策迷霧除障" },
  "medicine-buddha": { icon: Leaf, enLabel: "Healing & Peace", funcTag: "身心耗損息災" },
  "green-tara": { icon: Zap, enLabel: "Swift Rescue", funcTag: "突發急難化解" },
  padmasambhava: { icon: Shield, enLabel: "Protection & Anchor", funcTag: "動盪防禦建構" }
};

// --- 建議書內容庫 (KARMA_ADVICE) ---
export const KARMA_ADVICE: Record<DeityKey, { 
  tag: string; 
  title: string; 
  analogy: string; 
  repairPlan: string;
  goldenPhrase: string;
}> = {
  yellow: {
    tag: "資糧流動性漏損",
    title: "您的資糧正在『流向位移』：提水的人很累，但桶底有洞",
    analogy: "這段時間，您辛苦了。這就像您的生命水桶底部出現了看不見的小洞。您每天拼命工作、提水，水桶看起來是滿的，但一覺醒來發現水位又降了。這不是提水不夠努力，而是我們需要一起把底部的裂縫補起來，讓您流的每一滴汗，都能實實在在地留在桶子裡。",
    repairPlan: "解決漏損不能只靠拼命提水。接下來，我們建議透過黃財神法事為您進行系統性的『止漏儀軌』，修復看不見的容器裂縫。",
    goldenPhrase: "護持不是交易，而是把心念安放在正因上。"
  },
  kurukulla: {
    tag: "懷愛磁場疏離",
    title: "您的能量處於『封閉防禦』：盔甲太厚，貴人與善緣看不見您",
    analogy: "這段時間，您辛苦了。這就像是您的心靈穿上了一層太厚的盔甲。這層盔甲或許是為了保護過去受傷的您，但現在卻擋住了貴人與好緣分靠近的視線。您在職場或情感中感到孤單，是因為盔甲讓您的氣息變得尖銳，讓善緣在靠近前被自動彈開。",
    repairPlan: "接下來，我們建議透過作明佛母法事，為您進行一場溫柔的『磁場軟化工程』，卸除能量上的刺，補充柔和且強大的吸引力。",
    goldenPhrase: "當您變得柔軟，世界也會對您溫柔。"
  },
  mahashri: {
    tag: "地基失穩與家運偏離",
    title: "您的能量底盤正在『晃動』：家宅與心神不安，財富便難以依附",
    analogy: "這段時間，您辛苦了。這就像是您在一個正在晃動的地基上蓋大樓。不論您把樓層裝修得再漂亮，只要地基不穩，心裡始終會有一種莫名的不安，家裡也容易出現瑣碎的內耗或意外破財。",
    repairPlan: "接下來，我們建議透過大吉祥天女法事為您啟動『吉祥對位頻率』，這是一場針對生命底座的穩固工程，掃除環境違緣，讓福報能穩定落地。",
    goldenPhrase: "安定了，豐盛自然會留下來。"
  },
  ganapati: {
    tag: "決策雜訊與事業遮蔽",
    title: "您的直覺正處於『導航失效』：能力很強，卻在迷霧中原地踏步",
    analogy: "這段時間，您辛苦了。這就像是在濃霧中開著超跑。您的能力很好，但因為看不清前面的路，導致您不敢踩油門，甚至常在關鍵岔路選錯方向。這不是您的錯，是路上的『雜訊』太多了。我們要請象神化作一盞強光，撥開眼前的迷霧，讓您恢復清明。",
    repairPlan: "接下來，我們建議為您啟動『破局除障儀軌』，分階段清理干擾決策的隱形能量，協助您在複雜的事業局勢中重新找回掌控權。",
    goldenPhrase: "思辨，是跨越障礙最高效的武器。"
  },
  "medicine-buddha": {
    tag: "能量載體損耗與息災滯礙",
    title: "您的生命載體正處於『低電量運作』：身心耗損不除，福報難以受用",
    analogy: "這段時間，您辛苦了。這就像是一台電池健康度只剩 1% 的手機。即便您一直插著電，電力也很快就耗光。您的身心這個『載體』太累了。我們需要透過藥師佛的琉璃光頻率幫您進行深層的『重置與息災』，先把電力充回來。",
    repairPlan: "接下來，我們建議為您執行『琉璃息災修復計畫』，透過系統化的能量補給，先穩住生命最核心的『底氣』，消除身心耗損因素。",
    goldenPhrase: "身心的安定，是承載福報唯一的容器。"
  },
  "green-tara": {
    tag: "急性違緣栓塞與突發阻礙",
    title: "您的前進路徑遭遇『突發落石』：需要迅疾的力量推開巨石",
    analogy: "這段時間，您辛苦了。這就像是通往目標的路上，突然倒下一棵大樹擋住了去路。這不是您走路技術不好，而是突如其來的業力波峰集中釋放，一般的努力會被這種極大的阻力迅速消耗。",
    repairPlan: "接下來，我們建議為您啟動『迅疾除障儀軌』，這是一套針對急迫危機的解凍計畫，協助您在最短時間內化解壓力，恢復生命的常態節奏。",
    goldenPhrase: "有些難關，需要迅疾如風的慈愛來化解。"
  },
  padmasambhava: {
    tag: "震盪頻率與生命支撐缺失",
    title: "您的心神正處於『暴風雨中心』：缺乏強大的靠山讓您搖擺不定",
    analogy: "這段時間，您辛苦了。這就像是在暴風雨的海面上划著小船。外在環境太亂，讓你心神不寧。這時候您需要的不是更用力划槳，而是找一個『超級大靠山』，讓您的船能在大靠山的港灣裡停泊避風，找回內在的定見。",
    repairPlan: "接下來，我們建議委託『金剛護持造冊』，為您建立不可摧毀的守護罩。這不只是祈求，而是為您的生命引擎換上乾淨的燃料，讓您找回做決定的底氣。",
    goldenPhrase: "在動盪的時代，找回內在不動的中心。"
  }
};

// --- 純淨版心理學隱喻題庫 (完全無暗示、無解釋) ---
export const QUESTION_BANK: QuizQuestion[] = [
  { id: "q1", title: "當生活出現難以掌控的變化，你最希望立刻擁有一種什麼樣的能力？", options: [
    { id: "a", label: "能瞬間補好正在漏水的口袋", weights: { yellow: 3 } },
    { id: "b", label: "能撐起一把巨大的保護傘", weights: { mahashri: 3 } },
    { id: "c", label: "能擁有一副清晰的透視眼鏡", weights: { ganapati: 3 } },
    { id: "d", label: "能散發吸引同伴靠近的微光", weights: { kurukulla: 3 } },
    { id: "e", label: "能呼喚一陣吹散巨石的狂風", weights: { "green-tara": 3 } },
    { id: "f", label: "能按一個讓萬物靜止的暫停鍵", weights: { "medicine-buddha": 3 } },
    { id: "g", label: "能瞬間築起一座堅固的堡壘", weights: { padmasambhava: 3 } },
  ]},
  { id: "q2", title: "想像一部驚悚電影的開場畫面，會什麼模樣？", options: [
    { id: "a", label: "一座乾涸但深不見底的湖泊", weights: { yellow: 3 } },
    { id: "b", label: "一棟地基正在微微晃動的木屋", weights: { mahashri: 3 } },
    { id: "c", label: "一個被濃霧完全籠罩的十字路口", weights: { ganapati: 3 } },
    { id: "d", label: "一座被高聳冰牆包圍的孤島", weights: { kurukulla: 3 } },
    { id: "e", label: "一片不斷有落雷降下的荒野", weights: { "green-tara": 3 } },
    { id: "f", label: "一棵樹葉枯黃且根部疲憊的老樹", weights: { "medicine-buddha": 3 } },
    { id: "g", label: "一艘在暴風雨中劇烈搖晃的小船", weights: { padmasambhava: 3 } },
  ]},
  { id: "q3", title: "如果現在可以有一隻「守護靈獸」陪在你身邊，你會選擇？", options: [
    { id: "a", label: "勤奮尋找並守護果實的松鼠", weights: { yellow: 3 } },
    { id: "b", label: "在溫暖洞穴裡守望的棕熊", weights: { mahashri: 3 } },
    { id: "c", label: "盤旋在高空擁有銳利視野的雄鷹", weights: { ganapati: 3 } },
    { id: "d", label: "優雅且總是結伴而行的白鹿", weights: { kurukulla: 3 } },
    { id: "e", label: "能瞬間躍過深谷的身手矯健神馬", weights: { "green-tara": 3 } },
    { id: "f", label: "在月光下安靜自我療癒的靈狐", weights: { "medicine-buddha": 3 } },
    { id: "g", label: "無所畏懼且令人感到安心的雄獅", weights: { padmasambhava: 3 } },
  ]},
  { id: "q4", title: "走進一個房間放鬆，哪一種氣味最能瞬間撫平你的焦慮？", options: [
    { id: "a", label: "熟透的果實與溫潤的琥珀香", weights: { yellow: 3 } },
    { id: "b", label: "剛出爐的麵包與溫暖的柴火香", weights: { mahashri: 3 } },
    { id: "c", label: "清晨的薄荷與冷冽的雪松", weights: { ganapati: 3 } },
    { id: "d", label: "初綻放的玫瑰與微甜的晨露", weights: { kurukulla: 3 } },
    { id: "e", label: "雷雨過後的微苦松針香", weights: { "green-tara": 3 } },
    { id: "f", label: "舒緩的薰衣草與淡淡的草本香", weights: { "medicine-buddha": 3 } },
    { id: "g", label: "古老寺廟裡的沉靜檀香", weights: { padmasambhava: 3 } },
  ]},
  { id: "q5", title: "一位充滿智慧的長者，準備送你一句祝福，你最想聽到哪一句？", options: [
    { id: "a", label: "「願你的水杯永遠滿溢。」", weights: { yellow: 3 } },
    { id: "b", label: "「願你的屋簷永遠溫暖。」", weights: { mahashri: 3 } },
    { id: "c", label: "「願你的雙眼永遠清明。」", weights: { ganapati: 3 } },
    { id: "d", label: "「願你的周圍充滿善意。」", weights: { kurukulla: 3 } },
    { id: "e", label: "「願你的阻礙瞬間瓦解。」", weights: { "green-tara": 3 } },
    { id: "f", label: "「願你的身心輕盈如燕。」", weights: { "medicine-buddha": 3 } },
    { id: "g", label: "「願你的步伐堅如磐石。」", weights: { padmasambhava: 3 } },
  ]},
  { id: "q6", title: "如果給你一張畫布，畫出你此刻最渴望的生命狀態，你會用哪種主色調？", options: [
    { id: "a", label: "飽滿流動的金黃色", weights: { yellow: 3 } },
    { id: "b", label: "溫暖厚實的大地棕", weights: { mahashri: 3 } },
    { id: "c", label: "清透純粹的冰雪白", weights: { ganapati: 3 } },
    { id: "d", label: "柔和包容的蜜桃粉", weights: { kurukulla: 3 } },
    { id: "e", label: "充滿爆發力的閃電綠", weights: { "green-tara": 3 } },
    { id: "f", label: "充滿生機的療癒翡翠綠", weights: { "medicine-buddha": 3 } },
    { id: "g", label: "深邃堅定的靜謐藍", weights: { padmasambhava: 3 } },
  ]},
];