/*
Design philosophy: Neo-thangka noir (Mobile Optimized)
- Professional Life Consultant: L1-L6 Funnel Logic
- UX Upgrade: Deep empathy, Guided Accompaniment, and MULTI-DIMENSIONAL ENERGY DISTRIBUTION.
- Visual Upgrade: Added Deity-specific icons, dynamic status labels, and neon-glow tracks.
- Features: 6-Question Bank, Official Seal, Specific Sutra alignment, Share Card, Disclaimer, Warm Dialog.
- 100% Unabbreviated Production Ready Code.
*/

import { useMemo, useState, useRef, useEffect } from "react";
import { 
  ArrowRight, 
  RefreshCcw, 
  Sparkles, 
  Quote, 
  Download, 
  ShieldCheck, 
  Clock, 
  Info, 
  CheckCircle2, 
  Lock, 
  CreditCard, 
  ExternalLink,
  MoonStar,
  Activity,
  Coins,      // 黃財神
  Home,       // 大吉祥天女
  Eye,        // 象神 (洞察)
  Heart,      // 作明佛母
  Leaf,       // 藥師佛
  Zap,        // 綠度母 (迅疾)
  Shield      // 蓮花生大士 (防禦)
} from "lucide-react";
import { Link } from "wouter";
import { toPng } from "html-to-image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DEITIES, DEITY_BY_KEY, type DeityKey } from "@/lib/siteData";

// --- 型別定義 ---
type QuizOption = {
  id: string;
  label: string;
  weights: Partial<Record<DeityKey, number>>;
};

type QuizQuestion = {
  id: string;
  title: string;
  subtitle?: string;
  options: QuizOption[];
};

// --- 神明專屬圖示與輔助標籤對應表 ---
const DEITY_META: Record<DeityKey, { icon: any; enLabel: string }> = {
  yellow: { icon: Coins, enLabel: "Wealth & Flow" },
  kurukulla: { icon: Heart, enLabel: "Love & Harmony" },
  mahashri: { icon: Home, enLabel: "Stability & Family" },
  ganapati: { icon: Eye, enLabel: "Clarity & Breakthrough" },
  "medicine-buddha": { icon: Leaf, enLabel: "Healing & Peace" },
  "green-tara": { icon: Zap, enLabel: "Swift Rescue" },
  padmasambhava: { icon: Shield, enLabel: "Protection & Anchor" }
};

// --- 輔助組件：生命探索專用印 ---
const LifeExplorationSeal = () => (
  <div className="relative w-16 h-16 md:w-20 md:h-20 opacity-85 select-none flex-shrink-0 rotate-[-12deg] animate-in fade-in zoom-in duration-1000 delay-500">
    <svg viewBox="0 0 100 100" className="w-full h-full fill-destructive/70 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
      <rect x="5" y="5" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 1" />
      <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="3" />
      <text x="50" y="45" textAnchor="middle" className="text-[15px] font-bold tracking-tighter" fill="currentColor">生命探索</text>
      <text x="50" y="70" textAnchor="middle" className="text-[15px] font-bold tracking-tighter" fill="currentColor">專用印章</text>
      <circle cx="50" cy="52" r="38" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
    </svg>
    <div className="absolute inset-0 bg-destructive/5 rounded-full blur-xl pointer-events-none" />
  </div>
);

// --- 建議書內容庫 (KARMA_ADVICE) ---
const KARMA_ADVICE: Record<DeityKey, { 
  tag: string; 
  title: string; 
  analogy: string; 
  rootCause: string; 
  repairPlan: string;
  goldenPhrase: string;
}> = {
  yellow: {
    tag: "資糧流動性漏損",
    title: "您的資糧正在『流向位移』：提水的人很累，但桶底有洞",
    analogy: "這段時間，您辛苦了。這就像您的生命水桶底部出現了看不見的小洞。您每天拼命工作、提水，水桶看起來是滿的，但一覺醒來發現水位又降了。這不是提水不夠努力，而是我們需要一起把底部的裂縫補起來，讓您流的每一滴汗，都能實實在在地留在桶子裡。",
    rootCause: "依據佛法經典《金光明最勝王經》記載：「若有眾生。由其先世。造諸惡業。資生乏少。」這代表目前的匱乏感，往往源於過往世的一些業力印記，讓您的守護磁場出現漏洞，導致資源在關鍵時刻自動對位到莫名的開銷上。",
    repairPlan: "解決漏損不能只靠拼命提水（心念增加）。接下來，我們建議透過黃財神法事為您進行系統性的『止漏儀軌』，修復看不見的容器裂縫。",
    goldenPhrase: "護持不是交易，而是把心念安放在正因上。"
  },
  kurukulla: {
    tag: "懷愛磁場疏離",
    title: "您的能量處於『封閉防禦』：盔甲太厚，貴人與善緣看不見您",
    analogy: "這段時間，您辛苦了。這就像是您的心靈穿上了一層太厚的盔甲。這層盔甲或許是為了保護過去受傷的您，但現在卻擋住了貴人與好緣分靠近的視線。您在職場或情感中感到孤單，是因為盔甲讓您的氣息變得尖銳，讓善緣在靠近前被自動彈開。",
    rootCause: "佛法經典《佛說大悲空智金剛大教王經》提到懷愛能令「一切人生大歡喜」。建議指出您的磁場因防禦性業印而變得乾枯，導致社交技巧再好，也難以與他人產生心靈共鳴。",
    repairPlan: "接下來，我們建議透過作明佛母法事，為您進行一場溫柔的『磁場軟化工程』，卸除能量上的刺，補充柔和且強大的吸引力。",
    goldenPhrase: "當您變得柔軟，世界也會對您溫柔。"
  },
  mahashri: {
    tag: "地基失穩與家運偏離",
    title: "您的能量底盤正在『晃動』：家宅與心神不安，財富便難以依附",
    analogy: "這段時間，您辛苦了。這就像是您在一個正在晃動的地基上蓋大樓。不論您把樓層裝修得再漂亮，只要地基不穩，心裡始終會有一種莫名的不安，家裡也容易出現瑣碎的內耗或意外破財。",
    rootCause: "依據佛法經典《金光明最勝王經 · 大吉祥天女品》云：「一切煩惱。皆悉除滅...資生之具。供給無乏。」鑑定指出，目前的困境源於居住環境磁場與個人頻率發生「負面干涉」，導致能量無法安住。",
    repairPlan: "接下來，我們建議透過大吉祥天女法事為您啟動『吉祥對位頻率』，這是一場針對生命底座的穩固工程，掃除環境違緣，讓福報能穩定落地。",
    goldenPhrase: "安定了，豐盛自然會留下來。"
  },
  ganapati: {
    tag: "決策雜訊與事業遮蔽",
    title: "您的直覺正處於『導航失效』：能力很強，卻在迷霧中原地踏步",
    analogy: "這段時間，您辛苦了。這就像是在濃霧中開著超跑。您的能力很好，但因為看不清前面的路，導致您不敢踩油門，甚至常在關鍵岔路選錯方向。這不是您的錯，是路上的『雜訊』太多了。我們要請象神化作一盞強光，撥開眼前的迷霧，讓您恢復清明。",
    rootCause: "依據佛法經典《聖聖迦抳忿怒大王經》云：「能除一切。事業障礙。」鑑定為阿修羅道干擾與過往『無明業印』產生的決策疲勞，使您的核心洞察力被外界信息過度遮蔽。",
    repairPlan: "接下來，我們建議為您啟動『破局除障儀軌』，分階段清理干擾決策的隱形能量，協助您在複雜的事業局勢中重新找回掌控權。",
    goldenPhrase: "清明，是跨越障礙最高效的武器。"
  },
  "medicine-buddha": {
    tag: "能量載體損耗與息災滯礙",
    title: "您的生命載體正處於『低電量運作』：身心耗損不除，福報便難以受用",
    analogy: "這段時間，您辛苦了。這就像是一台電池健康度只剩 1% 的手機。即便您一直插著電，電力也很快就耗光。您的身心這個『載體』太累了。我們需要透過藥師佛的琉璃光頻率幫您進行深層的『重置與息災』，先把電力充回來。",
    rootCause: "依據佛法經典《藥師琉璃光如來本願功德經》中關於遣除『九橫死』與消災延壽的教理。鑑定指出目前的困境源於福報載體過載，導致感應力與執行力大幅下降。",
    repairPlan: "接下來，我們建議為您執行『琉璃息災修復計畫』，透過系統化的能量補給，先穩住生命最核心的『底氣』，消除身心耗損因素。",
    goldenPhrase: "身心的安定，是承載福報唯一的容器。"
  },
  "green-tara": {
    tag: "急性違緣栓塞與突發阻礙",
    title: "您的前進路徑遭遇『突發落石』：需要迅疾的力量，推開眼前的巨石",
    analogy: "這段時間，您辛苦了。這就像是通往目標的路上，突然倒下一棵大樹擋住了去路。這不是您走路技術不好，而是突如其來的業力波峰集中釋放，一般的努力會被這種極大的阻力迅速消耗。",
    rootCause: "依據佛法經典《二十一尊聖救度母讚》中關於救拔『八大苦難』與突發危機的教理。鑑定指出您正處於業力釋放期，需仰仗迅疾的外力破局，方能恢復生命的常態節奏。",
    repairPlan: "接下來，我們建議為您啟動『迅疾除障儀軌』，這是一套針對急迫危機的解凍計畫，協助您在最短時間內化解壓力，恢復生命的常態節奏。",
    goldenPhrase: "有些難關，需要迅疾如風的慈愛來化解。"
  },
  padmasambhava: {
    tag: "震盪頻率與生命支撐缺失",
    title: "您的心神正處於『暴風雨中心』：缺乏強大的靠山，讓您搖擺不定",
    analogy: "這段時間，您辛苦了。這就像是在暴風雨的海面上划著小船。外在環境太亂，讓你心神不寧。這時候您需要的不是更用力划槳，而是找一個『超級大靠山』，讓您的船能在大靠山的港灣裡停泊避風，找回內在的定見。",
    rootCause: "依據蓮師伏藏教言關於『五濁惡世』守護障礙的教理。鑑定指出您目前的能量體處於潰散預警，受『五濁惡世』動盪頻率干擾過深，急需建立金剛防禦屏障。",
    repairPlan: "接下來，我們建議委託『金剛護持造冊』，為您建立不可摧毀的守護罩。這不只是祈求，而是為您的生命引擎換上乾淨的燃料，讓您找回做決定的底氣。",
    goldenPhrase: "在動盪的時代，找回內在不動的中心。"
  }
};

// --- 六題式精準題庫 ---
const QUESTION_BANK: QuizQuestion[] = [
  { id: "q1", title: "你最近最常冒出的擔心是？", options: [
    { id: "a", label: "賺得到但留不住，總有莫名開銷", weights: { yellow: 3 } },
    { id: "b", label: "家裡不太安穩，容易內耗或意外破財", weights: { mahashri: 3 } },
    { id: "c", label: "常做錯決定，或是面臨危機不知所措", weights: { ganapati: 2, "green-tara": 2 } },
    { id: "d", label: "人脈卡住、貴人少，做事像孤軍", weights: { kurukulla: 3 } },
    { id: "e", label: "長期高壓身心耗損，或有難言恐懼", weights: { "medicine-buddha": 2, padmasambhava: 2 } },
  ]},
  { id: "q2", title: "碰到錢的事，你最容易進入哪種狀態？", options: [
    { id: "a", label: "急：想快點翻身，遇到危機只想迅速解決", weights: { yellow: 2, "green-tara": 2 } },
    { id: "b", label: "怕：不敢花也不敢投，缺乏安全感", weights: { mahashri: 2, padmasambhava: 2 } },
    { id: "c", label: "迷：資訊太多，判斷力像被遮住", weights: { ganapati: 3 } },
    { id: "d", label: "悶：都得靠自己，沒人能一起扛", weights: { kurukulla: 3 } },
    { id: "e", label: "累：被錢追著跑，健康亮紅燈", weights: { "medicine-buddha": 3 } },
  ]},
  { id: "q3", title: "你覺得『漏財點』最像哪一種？", options: [
    { id: "a", label: "沒有大破財，但無形中一直慢慢流失", weights: { yellow: 3 } },
    { id: "b", label: "家庭／健康支出，常常突然來", weights: { mahashri: 2, "medicine-buddha": 2 } },
    { id: "c", label: "投資踩雷，總是看錯人、看錯局", weights: { ganapati: 3 } },
    { id: "d", label: "人情壓力、客源不穩，資源接不上", weights: { kurukulla: 3 } },
    { id: "e", label: "突發急難，瞬間把累積資源掏空", weights: { "green-tara": 2, padmasambhava: 2 } },
  ]},
  { id: "q4", title: "你最想先『立刻改善』的是哪一件小事？", options: [
    { id: "a", label: "睡覺別再想錢，或是能一覺到天亮", weights: { yellow: 2, "medicine-buddha": 2 } },
    { id: "b", label: "家裡少吵、事情少出包，找回安定感", weights: { mahashri: 2, padmasambhava: 2 } },
    { id: "c", label: "談合作更清楚，做決定更果斷", weights: { ganapati: 3 } },
    { id: "d", label: "人緣變順，遇到願意拉我一把的人", weights: { kurukulla: 3 } },
    { id: "e", label: "眼前迫在眉睫的危機可以立刻解除", weights: { "green-tara": 3 } },
  ]},
  { id: "q5", title: "如果只能選一個『能量校正』方向，你會選？", options: [
    { id: "a", label: "補庫止漏：讓努力換來的錢留得住", weights: { yellow: 3 } },
    { id: "b", label: "護佑安家：穩住家運與深層安全感", weights: { mahashri: 2, padmasambhava: 2 } },
    { id: "c", label: "清明破局：掃除盲點與事業違緣", weights: { ganapati: 3 } },
    { id: "d", label: "懷愛招緣：打通人脈與情感吸引力", weights: { kurukulla: 3 } },
    { id: "e", label: "迅疾療癒：解除突發危機或身心疲累", weights: { "green-tara": 2, "medicine-buddha": 2 } },
  ]},
  { id: "q6", title: "當你安靜下來，內心最深的『匱乏感』是？", options: [
    { id: "a", label: "不管多拼，身邊始終沒有實質的積累", weights: { yellow: 3 } },
    { id: "b", label: "感覺生活缺乏支撐，地基始終在晃動", weights: { mahashri: 2, padmasambhava: 2 } },
    { id: "c", label: "感覺在迷宮裡，找不到對的時機與出口", weights: { ganapati: 3 } },
    { id: "d", label: "感覺世界冷漠，沒有人真正理解與支持", weights: { kurukulla: 3 } },
    { id: "e", label: "感覺載體已超載，無法再承受更多壓力", weights: { "medicine-buddha": 2, "green-tara": 2 } },
  ]},
];

const sampleQuestions = (bank: QuizQuestion[], count: number) => [...bank].sort(() => 0.5 - Math.random()).slice(0, count);
const emptyScore = (): Record<DeityKey, number> => ({ yellow: 0, mahashri: 0, ganapati: 0, kurukulla: 0, padmasambhava: 0, "medicine-buddha": 0, "green-tara": 0 });

export default function TreasuryQuiz() {
  const [seed, setSeed] = useState(() => Date.now());
  const questions = useMemo(() => sampleQuestions(QUESTION_BANK, 6), [seed]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState<Record<DeityKey, number>>(emptyScore());
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [remainingSpots, setRemainingSpots] = useState(3);
  
  const shareCardRef = useRef<HTMLDivElement>(null);
  const current = questions[step];
  const progress = Math.round((step / questions.length) * 100);

  useEffect(() => {
    const timer = setTimeout(() => setRemainingSpots(2), 25000);
    return () => clearTimeout(timer);
  }, []);

  const restart = () => {
    setSeed(Date.now()); setStep(0); setAnswers({}); setScore(emptyScore());
    setShowResult(false); setIsAnalyzing(false);
  };

  const next = () => {
    const pickedId = answers[current.id];
    if (!pickedId) return;
    const picked = current.options.find((o) => o.id === pickedId);
    if (picked) {
      setScore((prev) => {
        const copy = { ...prev };
        (Object.keys(copy) as DeityKey[]).forEach((k) => copy[k] += picked.weights[k] ?? 0);
        return copy;
      });
    }
    if (step === questions.length - 1) {
      setIsAnalyzing(true);
      setTimeout(() => { setIsAnalyzing(false); setShowResult(true); }, 4000);
    } else { setStep((s) => s + 1); }
  };

  // 🟢 核心數據運算：取得所有分數排序，支援全維度長條圖
  const sortedScores = useMemo(() => {
    if (!showResult) return [];
    return (Object.entries(score) as Array<[DeityKey, number]>)
      .sort((a, b) => b[1] - a[1]);
  }, [score, showResult]);

  const primaryDeityKey = sortedScores[0]?.[0];
  const primaryScore = sortedScores[0]?.[1] || 1; // 避免除以零
  const secondaryDeityKey = sortedScores[1]?.[1] > 0 ? sortedScores[1]?.[0] : null;

  const advice = primaryDeityKey ? KARMA_ADVICE[primaryDeityKey] : null;
  const deity = primaryDeityKey ? DEITY_BY_KEY[primaryDeityKey] : null;
  const secondaryDeity = secondaryDeityKey ? DEITY_BY_KEY[secondaryDeityKey] : null;

  const handleTrackCheckout = (planName: string, price: number, deityName: string) => {
    if (typeof window !== "undefined") {
      window.gtag?.('event', 'begin_checkout', {
        currency: 'TWD',
        value: price,
        items: [{ item_name: `${deityName}-${planName}`, price: price }]
      });
      window.fbq?.('track', 'InitiateCheckout', {
        content_name: planName,
        value: price,
        currency: 'TWD'
      });
    }
  };

  const downloadShareCard = async () => {
    if (!shareCardRef.current || !primaryDeityKey) return;
    setIsDownloading(true);
    try {
      const dataUrl = await toPng(shareCardRef.current, { cacheBust: true, pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `滿願藏庫-因緣鑑定-${primaryDeityKey}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) { console.error("生成失敗", err); }
    finally { setIsDownloading(false); }
  };

  return (
    <section className="relative scroll-mt-20" id="quiz">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        {/* Header 視覺優化 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-[10px] md:text-xs tracking-[0.26em] uppercase text-muted-foreground inline-flex items-center gap-2 font-bold bg-primary/5 px-2 py-1 rounded">
              <ShieldCheck className="h-3 w-3 text-primary" /> 因緣與資糧業力現況建議
            </div>
            <h2 className="font-display text-3xl md:text-5xl italic tracking-tight">30秒，發現您的生命維度</h2>
          </div>
          <Button variant="ghost" className="text-muted-foreground text-xs h-8 px-2 mx-auto md:mx-0" onClick={restart}>
            <RefreshCcw className="h-3 w-3 mr-1" /> 重新檢測
          </Button>
        </div>

        <Card className="mt-8 p-5 md:p-10 gold-border bg-card/80 backdrop-blur paper-grain min-h-[500px] relative overflow-hidden shadow-xl">
          {/* Loading 儀式感 */}
          {isAnalyzing && (
            <div className="py-24 flex flex-col items-center justify-center animate-in fade-in duration-1000">
              <div className="relative h-20 w-20 mb-10">
                <Sparkles className="h-full w-full text-primary animate-pulse" />
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping" />
              </div>
              <div className="font-display text-xl md:text-2xl text-primary animate-pulse tracking-widest text-center px-6 leading-relaxed">
                正在對位佛法經典依據...<br/>
                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] block mt-4 font-bold">正在多維度掃描您的能量分佈</span>
              </div>
            </div>
          )}

          {/* 題目區塊：行動端點選優化 */}
          {!showResult && !isAnalyzing && current && (
            <div className="animate-in fade-in duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-bold">鑑定進度 {step + 1}/6</div>
                <Progress value={progress} className="w-32 md:w-64 h-1 bg-primary/10" />
              </div>
              <div className="font-display text-2xl md:text-4xl mb-10 leading-snug">{current.title}</div>
              <RadioGroup className="grid gap-3 md:gap-4" value={answers[current.id] || ""} onValueChange={(v) => setAnswers(p => ({...p, [current.id]: v}))}>
                {current.options.map((opt) => (
                  <div key={opt.id} className="flex items-start gap-4 rounded-xl border bg-background/40 gold-border px-5 py-5 md:py-6 hover:bg-accent/20 cursor-pointer transition-all active:scale-[0.98]">
                    <RadioGroupItem value={opt.id} id={opt.id} className="mt-1.5" />
                    <Label htmlFor={opt.id} className="readable text-base md:text-xl cursor-pointer leading-relaxed flex-1">{opt.label}</Label>
                  </div>
                ))}
              </RadioGroup>
              <div className="mt-12">
                <Button className="h-16 w-full md:w-auto px-12 text-xl font-bold tracking-[0.2em] gold-border shadow-xl group" onClick={next} disabled={!answers[current.id]}>
                  下一題 <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          )}

          {/* 結果建議書：全維度能量立體分析 */}
          {showResult && primaryDeityKey && advice && deity && (
            <div className="animate-in slide-in-from-bottom-8 duration-1000">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <Badge className="gold-border bg-primary/15 text-primary px-4 py-1.5 font-bold tracking-[0.2em] text-[10px] w-fit italic">
                  主修復維度 (Primary)
                </Badge>
                <div className="text-[9px] font-mono text-muted-foreground tracking-widest uppercase opacity-60">ID: YZ-2026-ENERGY-{primaryDeityKey.toUpperCase().substring(0,3)}</div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
                <div className="flex-1">
                  <div className="text-primary font-bold tracking-widest text-sm mb-3">對位本尊：{deity.name}</div>
                  <h2 className="font-display text-3xl md:text-5xl leading-[1.2] tracking-tight text-foreground/90">{advice.title}</h2>
                </div>
                <div className="hidden md:block"><LifeExplorationSeal /></div>
              </div>

              {/* 主維度建議 */}
              <Card className="p-6 md:p-10 bg-primary/5 gold-border border-dashed mb-6 relative overflow-hidden group shadow-inner">
                <Quote className="absolute top-4 right-4 w-10 h-10 md:w-16 md:h-16 opacity-5 text-primary group-hover:opacity-10 transition-opacity" />
                <div className="text-[10px] md:text-sm font-bold text-primary mb-5 flex items-center gap-3 tracking-[0.25em]">✦ 醫者仁心的體貼建議</div>
                <p className="readable italic text-lg md:text-2xl text-muted-foreground leading-relaxed font-serif">「{advice.analogy}」</p>
              </Card>

              {/* 副修復維度 (Secondary Archetype) */}
              {secondaryDeity && (
                <Card className="p-6 bg-background/40 border border-primary/20 rounded-xl mb-14 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: secondaryDeity.themeColor.accent }} />
                  <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground font-bold mb-3 flex items-center gap-2">
                    <MoonStar className="w-3.5 h-3.5 opacity-70" /> 輔助修復維度 (Secondary)
                  </div>
                  <div className="font-display text-xl md:text-2xl text-foreground/80 mb-2">
                    潛在牽引力量：{secondaryDeity.name}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground readable leading-relaxed">
                    您的生命維度有兩股力量交織。主修復是您此刻最急迫的課題；而這股輔助力量，則在特定時刻浮現，暗示著您在解決表層危機後，也需要關注這個面向的安頓。
                  </p>
                </Card>
              )}

              {/* 🟢 核心視覺升級：完整能量分佈圖譜 (Complete Energy Distribution) */}
              <div className="mb-16">
                <div className="flex items-center gap-2 mb-6">
                  <Activity className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-2xl text-foreground/90">各本尊對位能量分佈</h3>
                </div>
                <p className="text-sm text-muted-foreground readable mb-8">
                  這不是普通的測驗，而是系統對您生命因緣的全面掃描。頻率越高，代表該維度的漏損越需要被關注與修復。
                </p>
                
                <div className="space-y-6 bg-background/30 p-6 md:p-8 rounded-xl border border-border/50 shadow-inner">
                  {sortedScores.map(([key, val], index) => {
                    const d = DEITY_BY_KEY[key];
                    const percent = Math.max(Math.round((val / primaryScore) * 100), 2); // 最少顯示 2%
                    const isWinner = index === 0;
                    
                    // 動態抓取專屬圖示與輔助標籤
                    const MetaIcon = DEITY_META[key]?.icon || Sparkles;
                    const enLabel = DEITY_META[key]?.enLabel || "Energy";

                    // 動態頻率解讀 (Status Labels)
                    let statusText = "相對穩定";
                    let statusOpacity = "opacity-50 text-muted-foreground";
                    let glowEffect = "none";

                    if (percent >= 80) { 
                      statusText = "急需修復"; 
                      statusOpacity = "opacity-100 font-bold text-foreground";
                      glowEffect = `0 0 12px ${d.themeColor.accent}90`;
                    } else if (percent >= 50) { 
                      statusText = "潛在牽引"; 
                      statusOpacity = "opacity-80 text-foreground/80"; 
                    }

                    return (
                      <div key={key} className={`relative transition-all duration-700 group ${val === 0 ? 'opacity-30 grayscale' : 'opacity-100'}`}>
                        <div className="flex justify-between items-end mb-2.5">
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-md border bg-background" style={{ borderColor: isWinner ? d.themeColor.accent : 'var(--border)' }}>
                              <MetaIcon className="w-4 h-4" style={{ color: isWinner ? d.themeColor.accent : 'currentColor' }} />
                            </div>
                            <div>
                              <div className="text-sm md:text-base font-bold tracking-wide" style={{ color: isWinner ? d.themeColor.accent : 'currentColor' }}>
                                {d.name}
                              </div>
                              <div className="text-[9px] uppercase tracking-widest text-muted-foreground opacity-70">
                                {enLabel}
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className={`text-[10px] md:text-xs tracking-widest mb-0.5 ${statusOpacity}`}>
                              {statusText}
                            </div>
                            <div className="text-xs text-muted-foreground font-mono font-bold">{val} Pts</div>
                          </div>
                        </div>

                        {/* 帶有高光的能量條 */}
                        <div className="w-full h-1.5 md:h-2 bg-background/80 rounded-full overflow-hidden border border-border/40">
                          <div 
                            className="h-full rounded-full transition-all duration-1000 ease-out relative" 
                            style={{ 
                              width: `${percent}%`, 
                              backgroundColor: d.themeColor.accent,
                              boxShadow: glowEffect
                            }} 
                          >
                            {/* 模擬光澤滑動效果 */}
                            {isWinner && (
                              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 連貫性的時間軸陪伴引導 */}
              <div className="p-6 md:p-10 gold-border bg-card/50 paper-grain rounded-xl mb-14 border-primary/20">
                <h3 className="font-display text-xl md:text-2xl text-primary mb-4 tracking-wider underline underline-offset-8 decoration-primary/20">
                  接下來，我們將為您進行的四步修復
                </h3>
                <p className="readable text-base md:text-lg text-muted-foreground mb-10 leading-loose">
                  {advice.repairPlan}
                </p>
                
                <div className="relative">
                  {/* 電腦版橫向連接線 */}
                  <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-primary/10"></div>
                  {/* 手機版直向連接線 */}
                  <div className="block md:hidden absolute left-[28px] top-[10%] bottom-[10%] w-[2px] bg-primary/10"></div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                    {[
                      { title: "能量定位", desc: "您已完成目前的診斷與對位", active: true },
                      { title: "志工造冊", desc: "今晚下班後，台灣志工將為您靜心造冊", active: false },
                      { title: "壇城修法", desc: "名錄送達西藏，如法進行儀軌修持", active: false },
                      { title: "公佈名錄", desc: "隔週於 FB 公佈名單，見證善緣流動", active: false }
                    ].map((step, i) => (
                      <div key={step.title} className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-3 group">
                        {/* 狀態圓圈 */}
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 z-10 border-[3px] transition-all duration-700
                          ${step.active ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]' : 'bg-background border-primary/30 text-muted-foreground'}
                        `}>
                          {step.active ? <CheckCircle2 className="w-6 h-6" /> : <span className="font-bold text-lg">{i + 1}</span>}
                        </div>
                        {/* 文字區塊 */}
                        <div className={`text-left md:text-center mt-2 md:mt-0 ${step.active ? 'opacity-100' : 'opacity-60 group-hover:opacity-100 transition-opacity'}`}>
                          <div className={`text-base md:text-lg font-bold ${step.active ? 'text-primary' : 'text-foreground'}`}>{step.title}</div>
                          <div className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed readable">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 轉化與行動：引入 Dialog 陪伴通道 */}
              <div className="flex flex-col items-center gap-10 pt-12 border-t border-border/30 relative">
                {/* L6 稀缺感 */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-destructive/10 text-destructive text-[9px] md:text-[11px] font-bold tracking-[0.2em] border border-destructive/20 rounded-full animate-pulse whitespace-nowrap shadow-sm z-10">
                  ⚡ 今日僅餘 {remainingSpots} 個修復名額（22:00 截止造冊）
                </div>

                <div className="w-full flex flex-col md:flex-row gap-4 items-stretch">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="h-20 w-full flex-1 text-xl md:text-2xl font-bold tracking-[0.2em] uppercase gold-border bg-primary text-primary-foreground shadow-2xl active:scale-95 transition-all group">
                        啟動我的修復計畫 <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    
                    {/* 溫暖陪伴通道 Dialog */}
                    <DialogContent className="max-w-md p-0 overflow-hidden bg-background border-primary/30 shadow-2xl">
                      <div className="bg-primary/5 p-8 pb-6 border-b border-primary/20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                          <Sparkles className="w-24 h-24 text-primary" />
                        </div>
                        <Badge className="bg-primary/10 text-primary gold-border mb-4 font-bold tracking-widest">志工陪伴通道</Badge>
                        <DialogTitle className="text-2xl md:text-3xl font-display text-foreground/90 tracking-wide">
                          深呼吸，我們準備啟程
                        </DialogTitle>
                        <p className="text-sm text-muted-foreground mt-3 readable">
                          為了確保您的祈願能精準傳達至壇城，<br/>請在進入綠界前，跟著我們確認以下兩件事：
                        </p>
                      </div>

                      <div className="p-6 md:p-8 space-y-7">
                        <div className="flex gap-4 items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold shrink-0 gold-border mt-0.5 text-sm shadow-sm">1</div>
                          <div>
                            <div className="font-bold text-foreground/90 text-lg">備妥您的真實心音</div>
                            <div className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                              進入綠界後，請滑到最下方的<strong className="text-foreground">「備註欄 (Remark)」</strong>，寫下您的：姓名、生辰、與此刻最想改變的困境。
                            </div>
                            <div className="mt-3 p-4 bg-background/50 border border-primary/20 rounded-md font-mono text-[13px] text-muted-foreground shadow-inner leading-loose">
                              <span className="text-primary font-bold">📝 填寫範例：</span><br/>
                              王小明，50年1月1日<br/>
                              祈求{deity.name}加持，{deity.plans.find(p => p.hot)?.name.split(/[｜：]/)[0] || "平靜微光"}。
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4 items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold shrink-0 gold-border mt-0.5 text-sm shadow-sm">2</div>
                          <div>
                            <div className="font-bold text-foreground/90 text-lg">放心交給安全系統</div>
                            <div className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                              點擊下方按鈕後，您將進入綠界的 256-bit SSL 加密通道。付款完成後，系統會自動引導您回來，<strong className="text-foreground font-medium">我們會在成功頁面等您。</strong>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4">
                          <a
                            href={deity.plans.find(p => p.hot)?.url || deity.plans[0].url}
                            target="_blank"
                            rel="noreferrer"
                            className="block w-full"
                            onClick={() => {
                              const targetPlan = deity.plans.find(p => p.hot) || deity.plans[0];
                              handleTrackCheckout(targetPlan.name, targetPlan.price, deity.name);
                            }}
                          >
                            <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold shadow-xl transition-all active:scale-95 tracking-[0.15em] group">
                              準備好了，前往安全通道 <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" className="h-16 md:h-20 w-full md:w-auto px-10 gold-border tracking-[0.2em] group border-primary/40 hover:bg-primary/5 shadow-sm" onClick={downloadShareCard} disabled={isDownloading}>
                    {isDownloading ? <RefreshCcw className="animate-spin h-5 w-5" /> : <><Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" /> 下載鑑定卡</>}
                  </Button>
                </div>
                
                <div className="text-center space-y-8">
                  <div className="flex items-center justify-center gap-3 text-muted-foreground/80">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="text-[10px] md:text-xs font-bold tracking-wider">台灣志工每晚跨境造冊，確保心念如實交付。</p>
                  </div>
                  
                  {/* L6 免責說明塊 */}
                  <div className="max-w-2xl mx-auto p-5 md:p-7 rounded-lg bg-background/40 border border-border/40 text-left">
                    <div className="flex items-center gap-2 mb-3 text-primary/70">
                      <Info className="h-3.5 w-3.5" />
                      <span className="text-[10px] font-bold tracking-[0.15em] uppercase">生命維度顧問免責聲明</span>
                    </div>
                    <p className="text-[10px] leading-relaxed text-muted-foreground/60 readable">
                      本建議書內容由「滿願藏庫」志工團隊依據佛法傳承經典整理，旨在提供因緣與資糧現況參考，不具備任何醫療、法律、財務或心理諮商診斷效力。法事護持屬於宗教信仰與修持範疇，其感受因個人發心而異。我們不造神、不賣神話，亦不對特定物質結果保證。數據僅供系統匿名分析，守護您的隱私。
                    </p>
                  </div>
                  <div className="text-[11px] text-primary/60 font-bold tracking-[0.4em] uppercase">滿願藏庫 · 生命維度對位系統</div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* --- 分享圖卡模板 (隱藏) --- */}
      <div className="fixed left-[-5000px] top-0 pointer-events-none">
        <div ref={shareCardRef} className="w-[1080px] h-[1080px] bg-background paper-grain p-24 flex flex-col justify-between relative overflow-hidden" style={{ backgroundImage: `url(${deity?.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-background/90" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-16">
              <div className="space-y-6">
                <Badge className="gold-border bg-primary/20 text-primary text-3xl px-8 py-3 tracking-[0.3em] font-bold uppercase">{advice?.tag}</Badge>
                <div className="text-muted-foreground tracking-[0.5em] text-xl font-bold uppercase opacity-60 font-mono">ID: YZ-2026-LIFE-CONSULTANT</div>
              </div>
              <LifeExplorationSeal />
            </div>
            <h1 className="mt-10 font-display text-[90px] text-foreground leading-[1.1] max-w-[900px] tracking-tight">{advice?.title}</h1>
            <div className="mt-auto">
              <div className="p-16 gold-border bg-primary/5 border-dashed rounded-3xl border-2 mb-12">
                <Quote className="w-20 h-20 text-primary/20 mb-8" />
                <p className="font-display text-[55px] text-primary leading-snug italic font-serif">「{advice?.goldenPhrase}」</p>
              </div>
              <div className="flex justify-between items-end border-t border-primary/20 pt-12">
                <div className="text-muted-foreground/80 text-2xl font-bold tracking-[0.4em] space-y-2">
                  <div>滿願藏庫 · 2026 生命能量鑑定</div>
                  <div className="text-primary/60 text-lg uppercase tracking-widest font-mono">ZAMBALA-TIBETAN.COM.TW</div>
                </div>
                <div className="w-36 h-36 border-2 border-primary/40 p-3 rounded-2xl bg-white/5 backdrop-blur shadow-2xl">
                  <div className="w-full h-full bg-primary/20 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
        </div>
      </div>
    </section>
  );
}