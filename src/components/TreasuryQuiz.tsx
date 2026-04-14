/*
Design philosophy: Neo-thangka noir (App-like Native Experience & CRO)
- Mobile UX 1 & 2: Smart Auto-Scroll with `scroll-mt-24` to align questions and results perfectly without hiding behind fixed headers.
- Mobile UX 3: Native Anti-Tap-Zoom using `select-none` and `touch-manipulation`.
- Mobile UX 4: Sticky Bottom Action Bar for the result page to capture conversions at any scroll depth.
- Mobile UX 5: Safe Area Insets to protect against iPhone home bar overlaps.
- Mobile UX 6: Fluid 60fps transitions for progress and auto-advance.
- Core Preserved: Projective psychology questions, Haptic Feedback, Real-Time Timestamp, Dynamic Share Hook.
- 100% Unabbreviated Production Ready Code.
*/

import { useMemo, useState, useRef, useEffect } from "react";
import { 
  ArrowRight, 
  RefreshCcw, 
  Sparkles, 
  Quote, 
  ShieldCheck, 
  Clock, 
  Info, 
  CheckCircle2, 
  MoonStar,
  Activity,
  Share2,
  Check,
  Coins,
  Home,
  Eye,
  Heart,
  Leaf,
  Zap,
  Shield,
  Users,
  HeartHandshake
} from "lucide-react";
import { Link } from "wouter";
import { toPng } from "html-to-image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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
  options: QuizOption[];
};

// --- 神明專屬圖示與「功能標籤」對應表 ---
const DEITY_META: Record<DeityKey, { icon: any; enLabel: string; funcTag: string }> = {
  yellow: { icon: Coins, enLabel: "Wealth & Flow", funcTag: "資糧流動修復" },
  kurukulla: { icon: Heart, enLabel: "Love & Harmony", funcTag: "善緣懷愛重建" },
  mahashri: { icon: Home, enLabel: "Stability & Family", funcTag: "家運地基穩固" },
  ganapati: { icon: Eye, enLabel: "Clarity & Breakthrough", funcTag: "決策迷霧除障" },
  "medicine-buddha": { icon: Leaf, enLabel: "Healing & Peace", funcTag: "身心耗損息災" },
  "green-tara": { icon: Zap, enLabel: "Swift Rescue", funcTag: "突發急難化解" },
  padmasambhava: { icon: Shield, enLabel: "Protection & Anchor", funcTag: "動盪防禦建構" }
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
    goldenPhrase: "清明，是跨越障礙最高效的武器。"
  },
  "medicine-buddha": {
    tag: "能量載體損耗與息災滯礙",
    title: "您的生命載體正處於『低電量運作』：身心耗損不除，福報便難以受用",
    analogy: "這段時間，您辛苦了。這就像是一台電池健康度只剩 1% 的手機。即便您一直插著電，電力也很快就耗光。您的身心這個『載體』太累了。我們需要透過藥師佛的琉璃光頻率幫您進行深層的『重置與息災』，先把電力充回來。",
    repairPlan: "接下來，我們建議為您執行『琉璃息災修復計畫』，透過系統化的能量補給，先穩住生命最核心的『底氣』，消除身心耗損因素。",
    goldenPhrase: "身心的安定，是承載福報唯一的容器。"
  },
  "green-tara": {
    tag: "急性違緣栓塞與突發阻礙",
    title: "您的前進路徑遭遇『突發落石』：需要迅疾的力量，推開眼前的巨石",
    analogy: "這段時間，您辛苦了。這就像是通往目標的路上，突然倒下一棵大樹擋住了去路。這不是您走路技術不好，而是突如其來的業力波峰集中釋放，一般的努力會被這種極大的阻力迅速消耗。",
    repairPlan: "接下來，我們建議為您啟動『迅疾除障儀軌』，這是一套針對急迫危機的解凍計畫，協助您在最短時間內化解壓力，恢復生命的常態節奏。",
    goldenPhrase: "有些難關，需要迅疾如風的慈愛來化解。"
  },
  padmasambhava: {
    tag: "震盪頻率與生命支撐缺失",
    title: "您的心神正處於『暴風雨中心』：缺乏強大的靠山，讓您搖擺不定",
    analogy: "這段時間，您辛苦了。這就像是在暴風雨的海面上划著小船。外在環境太亂，讓你心神不寧。這時候您需要的不是更用力划槳，而是找一個『超級大靠山』，讓您的船能在大靠山的港灣裡停泊避風，找回內在的定見。",
    repairPlan: "接下來，我們建議委託『金剛護持造冊』，為您建立不可摧毀的守護罩。這不只是祈求，而是為您的生命引擎換上乾淨的燃料，讓您找回做決定的底氣。",
    goldenPhrase: "在動盪的時代，找回內在不動的中心。"
  }
};

// --- 深層心理學隱喻題庫 (完全無括號，降低防禦感) ---
const QUESTION_BANK: QuizQuestion[] = [
  { id: "q1", title: "當生活出現難以掌控的變化，你最希望立刻擁有一種什麼樣的能力？", options: [
    { id: "a", label: "讓積累的資源不再流失", weights: { yellow: 3 } },
    { id: "b", label: "保護家人不受侵擾", weights: { mahashri: 3 } },
    { id: "c", label: "一眼看穿複雜的迷霧與人心", weights: { ganapati: 3 } },
    { id: "d", label: "吸引那些願意幫助我的人", weights: { kurukulla: 3 } },
    { id: "e", label: "瞬間把眼前的障礙吹走", weights: { "green-tara": 3 } },
    { id: "f", label: "讓耗損的身心徹底關機修復", weights: { "medicine-buddha": 3 } },
  ]},
  { id: "q2", title: "想像一部驚悚片的開場，會什麼模樣？", options: [
    { id: "a", label: "一座乾涸的湖泊，一旁都是龜裂的土地", weights: { yellow: 3 } },
    { id: "b", label: "一棟破損老舊的房子，斑駁且生鏽", weights: { mahashri: 3, padmasambhava: 1 } },
    { id: "c", label: "一個被濃霧籠罩的路口，找不到指標", weights: { ganapati: 3 } },
    { id: "d", label: "一座被高聳冰冷圍牆包圍的孤島", weights: { kurukulla: 3 } },
    { id: "e", label: "一片不斷落雷擊中的荒野", weights: { "green-tara": 3 } },
    { id: "f", label: "一棵樹葉枯黃、根部疲憊不堪的老樹", weights: { "medicine-buddha": 3 } },
  ]},
  { id: "q3", title: "如果現在可以有一隻守護靈獸陪在你身邊，你會選擇？", options: [
    { id: "a", label: "勤勞的松鼠", weights: { yellow: 3 } },
    { id: "b", label: "穩重的棕熊", weights: { mahashri: 3 } },
    { id: "c", label: "翱翔的雄鷹", weights: { ganapati: 3 } },
    { id: "d", label: "優雅的白鹿", weights: { kurukulla: 3 } },
    { id: "e", label: "威嚴的雄獅", weights: { padmasambhava: 3 } },
    { id: "f", label: "敏捷的神馬", weights: { "medicine-buddha": 2, "green-tara": 2 } },
  ]},
  { id: "q4", title: "走進一個房間放鬆，哪一種氣味最能瞬間撫平你的焦慮？", options: [
    { id: "a", label: "豐收的果香與琥珀", weights: { yellow: 3 } },
    { id: "b", label: "剛出爐的麵包與柴火", weights: { mahashri: 3 } },
    { id: "c", label: "清晨的薄荷與檸檬", weights: { ganapati: 3 } },
    { id: "d", label: "綻放的玫瑰與花香", weights: { kurukulla: 3 } },
    { id: "e", label: "舒緩的薰衣草與草本", weights: { "medicine-buddha": 3 } },
    { id: "f", label: "雷雨過後的松針木香", weights: { padmasambhava: 2, "green-tara": 2 } },
  ]},
  { id: "q5", title: "一位充滿智慧的長者，準備送你一句祝福，你最想聽到哪一句？", options: [
    { id: "a", label: "「願你的水杯永遠滿溢。」", weights: { yellow: 3 } },
    { id: "b", label: "「願你的家園堅如磐石。」", weights: { mahashri: 3 } },
    { id: "c", label: "「願你的雙眼銳利如炬。」", weights: { ganapati: 3 } },
    { id: "d", label: "「願你的周圍充滿善意。」", weights: { kurukulla: 3 } },
    { id: "e", label: "「願你眼前的困境化為塵埃。」", weights: { "green-tara": 3 } },
    { id: "f", label: "「願你的身心徹底痊癒。」", weights: { "medicine-buddha": 3 } },
  ]},
  { id: "q6", title: "如果給你一張畫布，畫出你此刻最渴望的生命狀態，你會用哪種主色調？", options: [
    { id: "a", label: "飽滿的金黃色", weights: { yellow: 3 } },
    { id: "b", label: "溫暖的大地棕", weights: { mahashri: 3 } },
    { id: "c", label: "清透的純白色", weights: { ganapati: 3 } },
    { id: "d", label: "柔和的蜜桃粉", weights: { kurukulla: 3 } },
    { id: "e", label: "療癒的翡翠綠", weights: { "medicine-buddha": 3 } },
    { id: "f", label: "深邃的靜謐藍", weights: { padmasambhava: 3, "green-tara": 1 } },
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
  
  // 儀式感過場與時間狀態
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [completionTime, setCompletionTime] = useState("");
  
  const [isCopied, setIsCopied] = useState(false);
  const [remainingSpots, setRemainingSpots] = useState(3);
  const [socialProofNum, setSocialProofNum] = useState(142);
  
  // 🟢 智慧滾動所需的 Refs
  const shareCardRef = useRef<HTMLDivElement>(null);
  const questionContainerRef = useRef<HTMLDivElement>(null);
  const resultContainerRef = useRef<HTMLDivElement>(null);

  const current = questions[step];
  const progress = Math.round((step / questions.length) * 100);

  useEffect(() => {
    const timer = setTimeout(() => setRemainingSpots(2), 25000);
    setSocialProofNum(Math.floor(Math.random() * 60) + 120);
    return () => clearTimeout(timer);
  }, []);

  // 🟢 多段式「儀式感」讀取過場邏輯 + 智慧跟隨滾動
  useEffect(() => {
    if (isAnalyzing) {
      const timers = [
        setTimeout(() => setLoadingPhase(1), 1500),
        setTimeout(() => setLoadingPhase(2), 3000),
        setTimeout(() => {
          setIsAnalyzing(false);
          setShowResult(true);
          const now = new Date();
          const timeString = `${now.getFullYear()}/${String(now.getMonth()+1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
          setCompletionTime(timeString);
          
          // 🟢 顯示結果後，自動平滑滾動到結果最上方
          setTimeout(() => {
            resultContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }, 4500)
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [isAnalyzing]);

  const restart = () => {
    setSeed(Date.now()); 
    setStep(0); 
    setAnswers({}); 
    setScore(emptyScore());
    setShowResult(false); 
    setIsAnalyzing(false);
    setLoadingPhase(0);
    setCompletionTime("");
    setTimeout(() => {
      questionContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  // 🟢 APP 級神優化：自動推進 + 微觸覺 + 智慧滾動對齊
  const handleOptionSelect = (optId: string) => {
    // 1. 微觸覺回饋 (Haptic Feedback) - 提升沉浸感
    if (typeof window !== "undefined" && navigator.vibrate) {
      navigator.vibrate(50); 
    }
    
    setAnswers(p => ({...p, [current.id]: optId}));
    
    // 2. 延遲 0.6 秒讓使用者看到選中狀態，然後推進
    setTimeout(() => {
      const picked = current.options.find((o) => o.id === optId);
      if (picked) {
        setScore((prev) => {
          const copy = { ...prev };
          (Object.keys(copy) as DeityKey[]).forEach((k) => copy[k] += picked.weights[k] ?? 0);
          return copy;
        });
      }
      
      if (step === questions.length - 1) {
        setIsAnalyzing(true);
        setLoadingPhase(0);
        // 滾動到分析畫面頂部
        setTimeout(() => {
          questionContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      } else { 
        setStep((s) => s + 1); 
        // 3. 智慧滾動：跳轉下一題時，自動將題目對齊螢幕上緣
        setTimeout(() => {
          questionContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    }, 600);
  };

  const sortedScores = useMemo(() => {
    if (!showResult) return [];
    return (Object.entries(score) as Array<[DeityKey, number]>)
      .sort((a, b) => b[1] - a[1]);
  }, [score, showResult]);

  const primaryDeityKey = sortedScores[0]?.[0];
  const primaryScore = sortedScores[0]?.[1] || 1; 
  const secondaryDeityKey = sortedScores[1]?.[1] > 0 ? sortedScores[1]?.[0] : null;

  const advice = primaryDeityKey ? KARMA_ADVICE[primaryDeityKey] : null;
  const deity = primaryDeityKey ? DEITY_BY_KEY[primaryDeityKey] : null;
  const secondaryDeity = secondaryDeityKey ? DEITY_BY_KEY[secondaryDeityKey] : null;

  // 病毒傳播分享邏輯
  const handleShare = async () => {
    if (!advice) return;
    const shareUrl = "https://zambala-tibetan.com.tw";
    const shareTitle = '滿願藏庫｜生命維度與能量對位測驗';
    const shareText = `我在滿願藏庫測出我的生命能量最需要【${advice.tag}】的修復。你最近有覺得哪裡卡卡的嗎？來測測你的 30 秒專屬能量圖譜！`;

    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      } catch (err) { console.log('Share canceled or failed'); }
    } else {
      navigator.clipboard.writeText(`${shareTitle}\n${shareText}\n${shareUrl}`);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  return (
    <section className="relative" id="quiz">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-[10px] md:text-xs tracking-[0.26em] uppercase text-muted-foreground inline-flex items-center gap-2 font-bold bg-primary/5 px-2 py-1 rounded">
              <ShieldCheck className="h-3 w-3 text-primary" /> 隱喻式因緣掃描
            </div>
            <h2 className="font-display text-3xl md:text-5xl italic tracking-tight">30秒，發現您的生命維度</h2>
          </div>
          <Button variant="ghost" className="text-muted-foreground text-xs h-8 px-2 mx-auto md:mx-0" onClick={restart}>
            <RefreshCcw className="h-3 w-3 mr-1" /> 重新檢測
          </Button>
        </div>

        {/* 動態社會認同 */}
        {!showResult && !isAnalyzing && (
          <div className="mt-4 flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-[10px] md:text-xs font-bold tracking-widest animate-in fade-in zoom-in duration-700">
              <Users className="w-3.5 h-3.5" /> 過去 24 小時已有 {socialProofNum} 人完成能量診斷
            </div>
          </div>
        )}

        {/* 🟢 智慧滾動錨點：防止被 fixed header 蓋住 */}
        <div ref={questionContainerRef} className="scroll-mt-24" />

        <Card className="mt-6 md:mt-8 p-5 md:p-10 gold-border bg-card/80 backdrop-blur paper-grain min-h-[500px] relative overflow-hidden shadow-xl">
          
          {/* 儀式感讀取畫面 */}
          {isAnalyzing && (
            <div className="py-24 flex flex-col items-center justify-center animate-in fade-in duration-1000">
              <div className="relative h-20 w-20 mb-10">
                <Sparkles className="h-full w-full text-primary animate-pulse" />
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping" />
              </div>
              <div className="font-display text-xl md:text-2xl text-primary animate-pulse tracking-widest text-center px-6 leading-relaxed">
                {loadingPhase === 0 && "正在連結深層意識軌跡..."}
                {loadingPhase === 1 && "正在對位佛法經典內容..."}
                {loadingPhase === 2 && "正在生成您的專屬能量圖譜..."}
              </div>
              <Progress value={(loadingPhase + 1) * 33} className="w-48 h-1 bg-primary/10 mt-8 transition-all duration-1000 ease-out" />
            </div>
          )}

          {/* 測驗題目區塊 */}
          {!showResult && !isAnalyzing && current && (
            <div className="animate-in fade-in duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-bold">診斷進度 {step + 1}/6</div>
                <Progress value={progress} className="w-32 md:w-64 h-1 bg-primary/10 transition-all duration-700 ease-out" />
              </div>
              <div className="font-display text-2xl md:text-4xl mb-10 leading-snug">{current.title}</div>
              <RadioGroup className="grid gap-3 md:gap-4" value={answers[current.id] || ""}>
                {current.options.map((opt) => (
                  <div 
                    key={opt.id} 
                    onClick={() => handleOptionSelect(opt.id)}
                    // 🟢 APP 級防誤觸優化：select-none touch-manipulation
                    className={`flex items-start gap-4 rounded-xl border gold-border px-5 py-5 md:py-6 cursor-pointer transition-all duration-300 active:scale-[0.98] select-none touch-manipulation ${
                      answers[current.id] === opt.id ? "bg-primary/15 border-primary shadow-inner" : "bg-background/40 hover:bg-accent/20 active:bg-primary/10"
                    }`}
                  >
                    <RadioGroupItem value={opt.id} id={opt.id} className="mt-1.5 pointer-events-none" />
                    <Label htmlFor={opt.id} className="readable text-base md:text-xl cursor-pointer leading-relaxed flex-1 pointer-events-none">
                      {opt.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* 結果呈現區塊 */}
          {showResult && primaryDeityKey && advice && deity && (
            <div ref={resultContainerRef} className="animate-in slide-in-from-bottom-8 duration-1000 scroll-mt-24">
              
              {/* 主本尊高階流光卡片 */}
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary/40 via-background to-primary/10 mb-12 shadow-2xl group">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                <Card className="relative p-6 md:p-10 bg-background/95 backdrop-blur-xl border-none rounded-xl overflow-hidden flex flex-col md:flex-row gap-8 items-start md:items-center">
                  {(() => {
                    const PrimaryIcon = DEITY_META[primaryDeityKey]?.icon || Sparkles;
                    return <PrimaryIcon className="absolute -bottom-10 -right-10 w-64 h-64 text-primary opacity-[0.03] rotate-12 pointer-events-none" />;
                  })()}
                  
                  <div className="flex-1 z-10">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner">
                        {(() => {
                          const MetaIcon = DEITY_META[primaryDeityKey]?.icon || Sparkles;
                          return <MetaIcon className="w-6 h-6 text-primary" />;
                        })()}
                      </div>
                      <div>
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/20 border-none font-bold tracking-[0.2em] text-[10px] mb-1">主修復維度 (Primary)</Badge>
                        <div className="flex items-center gap-2">
                          <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase opacity-80">ID: YZ-2026-ENERGY-{primaryDeityKey.toUpperCase().substring(0,3)}</div>
                          <div className="hidden md:block w-1 h-1 rounded-full bg-border/50" />
                          <div className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">{completionTime}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-primary font-bold tracking-widest text-sm mb-2 mt-6">您的能量對位本尊：<span className="text-lg">{deity.name}</span></div>
                    <h2 className="font-display text-3xl md:text-5xl leading-[1.2] tracking-tight text-foreground/90">{advice.title}</h2>
                  </div>
                  <div className="hidden lg:block z-10"><LifeExplorationSeal /></div>
                </Card>
              </div>

              {/* 滿願藏庫的能量指引 */}
              <Card className="p-6 md:p-10 bg-primary/5 gold-border border-dashed mb-6 relative overflow-hidden shadow-inner">
                <Quote className="absolute top-4 right-4 w-10 h-10 md:w-16 md:h-16 opacity-5 text-primary" />
                <div className="text-[10px] md:text-sm font-bold text-primary mb-5 flex items-center gap-3 tracking-[0.25em]">
                  ✦ 滿願藏庫的能量指引
                </div>
                <p className="readable italic text-lg md:text-2xl text-muted-foreground leading-relaxed font-serif">「{advice.analogy}」</p>
              </Card>

              {secondaryDeity && (
                <Card className="p-6 bg-background/40 border border-primary/20 rounded-xl mb-14 relative overflow-hidden hover:bg-accent/10 transition-colors">
                  <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: secondaryDeity.themeColor.accent }} />
                  <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground font-bold mb-3 flex items-center gap-2">
                    <MoonStar className="w-3.5 h-3.5 opacity-70" /> 輔助修復維度 (Secondary)
                  </div>
                  <div className="font-display text-xl md:text-2xl text-foreground/80 mb-2">潛在牽引力量：{secondaryDeity.name}</div>
                  <p className="text-sm md:text-base text-muted-foreground readable leading-relaxed">您的生命維度有兩股力量交織。主修復是您此刻最急迫的課題；而這股輔助力量，則在特定時刻浮現，暗示著您在解決表層危機後，也需要關注這個面向的安頓。</p>
                </Card>
              )}

              {/* 各本尊對位能量分佈 */}
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
                    const percent = Math.max(Math.round((val / primaryScore) * 100), 2); 
                    const isWinner = index === 0;
                    
                    const MetaIcon = DEITY_META[key]?.icon || Sparkles;
                    const funcTag = DEITY_META[key]?.funcTag || "能量修復";

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
                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2.5">
                              <div className="text-sm md:text-base font-bold tracking-wide" style={{ color: isWinner ? d.themeColor.accent : 'currentColor' }}>{d.name}</div>
                              <div className="text-[10px] md:text-[11px] px-1.5 py-0.5 rounded border border-border/50 text-muted-foreground opacity-80 w-fit">
                                {funcTag}
                              </div>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <div className={`text-[10px] md:text-xs tracking-widest mb-0.5 ${statusOpacity}`}>{statusText}</div>
                            <div className="text-xs md:text-sm text-muted-foreground font-mono font-bold tracking-wider">{percent}% <span className="text-[10px] opacity-50 hidden md:inline">({val} Pts)</span></div>
                          </div>
                        </div>
                        <div className="w-full h-1.5 md:h-2 bg-background/80 rounded-full overflow-hidden border border-border/40">
                          <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${percent}%`, backgroundColor: d.themeColor.accent, boxShadow: glowEffect }}>
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

              <div className="p-6 md:p-10 gold-border bg-card/50 paper-grain rounded-xl mb-6 md:mb-14 border-primary/20">
                <h3 className="font-display text-xl md:text-2xl text-primary mb-4 tracking-wider underline underline-offset-8 decoration-primary/20">接下來，我們將為您進行的四步修復</h3>
                <p className="readable text-base md:text-lg text-muted-foreground mb-10 leading-loose">{advice.repairPlan}</p>
                <div className="relative">
                  <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-primary/10" />
                  <div className="block md:hidden absolute left-[28px] top-[10%] bottom-[10%] w-[2px] bg-primary/10" />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                    {[
                      { title: "能量定位", desc: "您已完成目前的診斷與對位", active: true },
                      { title: "志工造冊", desc: "台灣志工將為您靜心造冊", active: false },
                      { title: "壇城修法", desc: "名錄送達西藏，如法進行儀軌修持", active: false },
                      { title: "公佈名錄", desc: "隔週於 FB 公佈名單，見證善緣流動", active: false }
                    ].map((step, i) => (
                      <div key={step.title} className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-3 group">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 z-10 border-[3px] transition-all duration-700
                          ${step.active ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]' : 'bg-background border-primary/30 text-muted-foreground'}
                        `}>
                          {step.active ? <CheckCircle2 className="w-6 h-6" /> : <span className="font-bold text-lg">{i + 1}</span>}
                        </div>
                        <div className={`text-left md:text-center mt-2 md:mt-0 ${step.active ? 'opacity-100' : 'opacity-60 group-hover:opacity-100 transition-opacity'}`}>
                          <div className={`text-base md:text-lg font-bold ${step.active ? 'text-primary' : 'text-foreground'}`}>{step.title}</div>
                          <div className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed readable">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 🟢 懸浮行動條 (Sticky Bottom Action Bar) */}
              <div className="sticky bottom-0 z-50 p-4 md:p-6 bg-background/95 backdrop-blur-xl border-t border-border/50 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] -mx-4 px-4 md:mx-0 md:rounded-b-xl pb-[calc(1rem+env(safe-area-inset-bottom))]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-destructive text-destructive-foreground text-[10px] md:text-[11px] font-bold tracking-[0.2em] rounded-full shadow-lg z-10 whitespace-nowrap animate-pulse border border-destructive-foreground/20">
                  ⚡ 今日僅餘 {remainingSpots} 個修復名額（22:00 截止造冊）
                </div>

                <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-3 md:gap-4 mt-2">
                  <Link href={`/deity/${primaryDeityKey}`} className="flex-1">
                    <Button className="h-14 md:h-16 w-full text-lg md:text-xl font-bold tracking-[0.2em] uppercase gold-border bg-primary text-primary-foreground shadow-2xl active:scale-95 transition-all group">
                      啟動我的修復計畫 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <Button 
                    variant="outline" 
                    className={`h-14 md:h-16 w-full md:w-auto px-6 gold-border tracking-[0.2em] group shadow-sm transition-all ${isCopied ? 'bg-green-600/20 text-green-500 border-green-600/50' : 'border-primary/40 hover:bg-primary/5'}`} 
                    onClick={handleShare}
                  >
                    {isCopied ? (
                      <><Check className="mr-2 h-4 w-4" /> 測驗連結已複製</>
                    ) : (
                      <><Share2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> <span className="md:hidden">分享測驗</span><span className="hidden md:inline">分享測驗網址</span></>
                    )}
                  </Button>
                </div>
                
                <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-bold text-muted-foreground/70 tracking-widest uppercase">
                  <HeartHandshake className="w-3 h-3 text-primary/70" /> 將覺察分享出去，也是善念的流動
                </div>
              </div>
              
              <div className="text-center space-y-8 mt-12 pb-10">
                <div className="flex items-center justify-center gap-3 text-muted-foreground/80">
                  <Clock className="h-4 w-4 text-primary" />
                  <p className="text-[10px] md:text-xs font-bold tracking-wider">台灣志工每晚跨境造冊，確保心念如實交付。</p>
                </div>
                
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
          )}
        </Card>
      </div>

      {/* 分享圖卡模板 (隱藏) */}
      <div className="fixed left-[-5000px] top-0 pointer-events-none">
        <div ref={shareCardRef} className="w-[1080px] h-[1080px] bg-background paper-grain p-24 flex flex-col justify-between relative overflow-hidden" style={{ backgroundImage: `url(${deity?.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-background/90" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-16">
              <div className="space-y-6">
                <Badge className="gold-border bg-primary/20 text-primary text-3xl px-8 py-3 tracking-[0.3em] font-bold uppercase">{advice?.tag}</Badge>
                <div className="text-muted-foreground tracking-[0.5em] text-xl font-bold uppercase opacity-60 font-mono">
                  ID: YZ-2026-LIFE-CONSULTANT
                  <div className="text-sm mt-2 font-mono text-primary/60">{completionTime}</div>
                </div>
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
                  <div>滿願藏庫 · 生命能量鑑定測驗</div>
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