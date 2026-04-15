/*
Design philosophy: Neo-thangka noir (Enterprise React 18 Architecture)
- TypeScript Fix: Updated `scrollToElement` ref parameter to `HTMLDivElement | null` to resolve ts(2345) strict null-checking errors.
- Architecture: Extracted massive data objects to `quizData.ts` for clean SoC.
- Perf Fix: Removed unused `html-to-image` dependency and hidden DOM trees.
- React 18 Fix: Added `isMounted` checks in `useEffect` to prevent memory leak warnings on unmount during timeouts.
- UX Fix: Implemented multistage countdown for true scarcity psychology.
- Top-Tier Opt 1: Replaced setTimeouts with requestAnimationFrame for flawless DOM-aligned scrolling.
- Top-Tier Opt 2: Added extensive ARIA & a11y support for keyboard navigation.
- Top-Tier Opt 3: Unhandled Promise Rejection fix on navigator.clipboard.
- Top-Tier Opt 4: Centralized unmount timer cleanup preventing memory leaks.
- Top-Tier Opt 5: SSR/Hydration safe random seeding.
- 100% Unabbreviated Production Ready Code.
*/

import React, { useMemo, useState, useRef, useEffect } from "react";
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
  Users,
  HeartHandshake
} from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { DEITY_BY_KEY, type DeityKey } from "@/lib/siteData";
import { QUESTION_BANK, KARMA_ADVICE, DEITY_META, type QuizQuestion } from "@/data/quizData";

// --- 輔助組件：生命探索專用印 ---
const LifeExplorationSeal = () => (
  <div className="relative w-16 h-16 md:w-20 md:h-20 opacity-85 select-none flex-shrink-0 rotate-[-12deg] animate-in fade-in zoom-in duration-1000 delay-500" aria-hidden="true">
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

// --- 核心演算法：Fisher-Yates 選項洗牌機制 ---
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const getShuffledQuestions = (bank: QuizQuestion[], count: number) => {
  const selected = [...bank].sort(() => 0.5 - Math.random()).slice(0, count);
  return selected.map(q => ({ ...q, options: shuffleArray(q.options) }));
};

const emptyScore = (): Record<DeityKey, number> => ({ yellow: 0, mahashri: 0, ganapati: 0, kurukulla: 0, padmasambhava: 0, "medicine-buddha": 0, "green-tara": 0 });

export default function TreasuryQuiz() {
  // 🟢 優化 5: SSR 安全的亂數種子產生，避免 Hydration Mismatch
  const [seed, setSeed] = useState<number | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState<Record<DeityKey, number>>(emptyScore());
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [completionTime, setCompletionTime] = useState("");
  const [isoCompletionTime, setIsoCompletionTime] = useState(""); // 給 <time> 標籤用語意
  
  const [isCopied, setIsCopied] = useState(false);
  const [remainingSpots, setRemainingSpots] = useState(3);
  const [socialProofNum, setSocialProofNum] = useState(142);
  
  const questionContainerRef = useRef<HTMLDivElement>(null);
  const resultContainerRef = useRef<HTMLDivElement>(null);
  
  // 🟢 總管計時器：防止記憶體洩漏
  const optionTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // 僅在客戶端初次掛載時生成，確保 Hydration 安全
    setSeed(Date.now());
    setQuestions(getShuffledQuestions(QUESTION_BANK, 6));
  }, []);

  const current = questions[step];
  const progress = questions.length > 0 ? Math.round((step / questions.length) * 100) : 0;

  // 🟢 優化 1 & 解決問題 4: 雙重 rAF 取代 setTimeout，完美對齊 DOM 繪製幀
  const scrollToElement = (ref: React.RefObject<HTMLDivElement | null>) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  useEffect(() => {
    const t1 = setTimeout(() => setRemainingSpots(2), 25000);
    const t2 = setTimeout(() => setRemainingSpots(1), 70000);
    setSocialProofNum(Math.floor(Math.random() * 60) + 120);
    
    // 清除計時器
    return () => { 
      clearTimeout(t1); 
      clearTimeout(t2); 
      if (optionTimeoutRef.current) clearTimeout(optionTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isAnalyzing) return;
    let isMounted = true;

    const t1 = setTimeout(() => { if (isMounted) setLoadingPhase(1); }, 1500);
    const t2 = setTimeout(() => { if (isMounted) setLoadingPhase(2); }, 3000);
    const t3 = setTimeout(() => {
      if (!isMounted) return;
      setIsAnalyzing(false);
      setShowResult(true);
      
      const now = new Date();
      setIsoCompletionTime(now.toISOString());
      const timeString = `${now.getFullYear()}/${String(now.getMonth()+1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      setCompletionTime(timeString);
      
      scrollToElement(resultContainerRef);
    }, 4500);

    return () => {
      isMounted = false;
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isAnalyzing]);

  const restart = () => {
    setSeed(Date.now());
    setQuestions(getShuffledQuestions(QUESTION_BANK, 6));
    setStep(0); 
    setAnswers({}); 
    setScore(emptyScore());
    setShowResult(false); 
    setIsAnalyzing(false);
    setLoadingPhase(0);
    setCompletionTime("");
    scrollToElement(questionContainerRef);
  };

  const handleOptionSelect = (optId: string) => {
    if (typeof window !== "undefined" && navigator.vibrate) {
      try { navigator.vibrate(50); } catch(e) {} // 避免某些 WebView 阻擋震動 API
    }
    
    setAnswers(p => ({...p, [current.id]: optId}));
    
    // 🟢 解決問題 1: 使用 useRef 記錄 timeout，防止 Unmount 時觸發
    if (optionTimeoutRef.current) clearTimeout(optionTimeoutRef.current);
    
    optionTimeoutRef.current = setTimeout(() => {
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
        scrollToElement(questionContainerRef);
      } else { 
        setStep((s) => s + 1); 
        scrollToElement(questionContainerRef);
      }
    }, 600);
  };

  // 鍵盤無障礙支援
  const handleKeyDown = (e: React.KeyboardEvent, optId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOptionSelect(optId);
    }
  };

  const sortedScores = useMemo(() => {
    return (Object.entries(score) as Array<[DeityKey, number]>).sort((a, b) => b[1] - a[1]);
  }, [score]);

  const primaryDeityKey = sortedScores[0]?.[0];
  const primaryScore = Math.max(sortedScores[0]?.[1] ?? 1, 1); 
  const secondaryDeityKey = sortedScores.length > 1 && sortedScores[1]?.[1] > 0 ? sortedScores[1]?.[0] : null;

  const advice = primaryDeityKey ? KARMA_ADVICE[primaryDeityKey] : null;
  const deity = primaryDeityKey ? DEITY_BY_KEY[primaryDeityKey] : null;
  const secondaryDeity = secondaryDeityKey ? DEITY_BY_KEY[secondaryDeityKey] : null;

  const PrimaryIcon = primaryDeityKey ? (DEITY_META[primaryDeityKey]?.icon || Sparkles) : Sparkles;

  // 🟢 解決問題 3: 攔截非同步錯誤，確保 UI 不崩潰
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
      } catch (err) { 
        console.log('Share canceled or failed'); 
      }
    } else {
      navigator.clipboard.writeText(`${shareTitle}\n${shareText}\n${shareUrl}`)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 3000);
        })
        .catch((err) => {
          console.error("Clipboard API failed:", err);
          alert("複製失敗，請手動複製網址分享。");
        });
    }
  };

  // 等待客戶端掛載完成才顯示，避免 SSR 錯亂
  if (!seed || questions.length === 0) return null;

  return (
    <section className="relative" id="quiz">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-[10px] md:text-xs tracking-[0.26em] uppercase text-muted-foreground inline-flex items-center gap-2 font-bold bg-primary/5 px-2 py-1 rounded">
              <ShieldCheck className="h-3 w-3 text-primary" /> 隱喻式因緣掃描
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl italic tracking-tight">30秒，發現您的生命維度</h2>
          </div>
          <Button variant="ghost" className="text-muted-foreground text-xs h-8 px-2 mx-auto md:mx-0" onClick={restart}>
            <RefreshCcw className="h-3 w-3 mr-1" /> 重新檢測
          </Button>
        </div>

        {!showResult && !isAnalyzing && (
          <div className="mt-4 flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-[10px] md:text-xs font-bold tracking-widest animate-in fade-in zoom-in duration-700">
              <Users className="w-3.5 h-3.5" /> 過去 24 小時已有 {socialProofNum} 人完成能量診斷
            </div>
          </div>
        )}

        <div ref={questionContainerRef} style={{ scrollMarginTop: '100px' }} />

        {/* 🟢 優化 2: ARIA 語意區塊宣告 */}
        <Card aria-live="polite" className="mt-6 md:mt-8 p-5 md:p-10 gold-border bg-card/80 backdrop-blur paper-grain min-h-[500px] relative overflow-hidden shadow-xl">
          
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

          {!showResult && !isAnalyzing && current && (
            <div className="animate-in fade-in duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-bold">診斷進度 {step + 1}/6</div>
                <Progress value={progress} className="w-32 md:w-64 h-1 bg-primary/10 transition-all duration-700 ease-out" />
              </div>
              <div className="font-display text-2xl md:text-4xl mb-10 leading-snug">{current.title}</div>
              <RadioGroup className="grid gap-3 md:gap-4" value={answers[current.id] || ""}>
                {current.options.map((opt) => (
                  // 🟢 解決問題 2: 完整 A11y 鍵盤與 Screen Reader 支援
                  <div 
                    key={opt.id} 
                    role="radio"
                    aria-checked={answers[current.id] === opt.id}
                    tabIndex={0}
                    onClick={() => handleOptionSelect(opt.id)}
                    onKeyDown={(e) => handleKeyDown(e, opt.id)}
                    className={`flex items-start gap-4 rounded-xl border gold-border px-5 py-5 md:py-6 cursor-pointer transition-all duration-300 active:scale-[0.98] select-none touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      answers[current.id] === opt.id 
                        ? "bg-primary/15 border-primary shadow-[0_0_15px_rgba(var(--primary),0.2)]" 
                        : "bg-background/40 hover:bg-accent/20 active:bg-primary/10"
                    }`}
                  >
                    <RadioGroupItem value={opt.id} id={opt.id} className="mt-1.5 pointer-events-none" tabIndex={-1} />
                    <Label htmlFor={opt.id} className="readable text-base md:text-xl cursor-pointer leading-relaxed flex-1 pointer-events-none">
                      {opt.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {showResult && primaryDeityKey && advice && deity && (
            <div ref={resultContainerRef} style={{ scrollMarginTop: '100px' }} className="animate-in slide-in-from-bottom-8 duration-1000">
              
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary/40 via-background to-primary/10 mb-12 shadow-2xl group">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                <Card className="relative p-6 md:p-10 bg-background/95 backdrop-blur-xl border-none rounded-xl overflow-hidden flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <PrimaryIcon className="absolute -bottom-10 -right-10 w-64 h-64 text-primary opacity-[0.03] rotate-12 pointer-events-none" />
                  
                  <div className="flex-1 z-10 w-full">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner shrink-0">
                        <PrimaryIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/20 border-none font-bold tracking-[0.2em] text-[10px] w-fit px-3 py-1">
                          主修復維度 (Primary)
                        </Badge>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase opacity-80">
                            ID: YZ-2026-{primaryDeityKey.toUpperCase().substring(0,3)}
                          </div>
                          <div className="hidden sm:block w-1 h-1 rounded-full bg-border/50" />
                          {/* 🟢 優化 3: Semantic Time 實體化時間標籤 */}
                          <time dateTime={isoCompletionTime} className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">
                            {completionTime}
                          </time>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-primary font-bold tracking-wider text-xs md:text-sm mb-3 mt-5">
                      <span className="block mb-1 text-muted-foreground">您的能量對位本尊：</span>
                      <span className="text-xl md:text-2xl text-foreground tracking-widest">{deity.name}</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl md:text-4xl leading-[1.4] tracking-tight text-foreground/90">
                      {advice.title}
                    </h2>
                  </div>
                  <div className="hidden lg:block z-10"><LifeExplorationSeal /></div>
                </Card>
              </div>

              <Card className="p-5 md:p-10 bg-primary/5 gold-border border-dashed mb-6 relative overflow-hidden shadow-inner">
                <Quote className="absolute top-4 right-4 w-10 h-10 md:w-16 md:h-16 opacity-5 text-primary" />
                <div className="text-[10px] md:text-sm font-bold text-primary mb-5 flex items-center gap-3 tracking-[0.25em]">
                  ✦ 滿願藏庫的能量指引
                </div>
                <p className="readable italic text-base md:text-2xl text-muted-foreground leading-relaxed font-serif">「{advice.analogy}」</p>
              </Card>

              {secondaryDeity && (
                <Card className="p-5 md:p-6 bg-background/40 border border-primary/20 rounded-xl mb-14 relative overflow-hidden hover:bg-accent/10 transition-colors">
                  <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: secondaryDeity.themeColor.accent }} />
                  <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground font-bold mb-3 flex items-center gap-2">
                    <MoonStar className="w-3.5 h-3.5 opacity-70" /> 輔助修復維度 (Secondary)
                  </div>
                  <div className="font-display text-lg md:text-2xl text-foreground/80 mb-2">潛在牽引力量：{secondaryDeity.name}</div>
                  <p className="text-sm md:text-base text-muted-foreground readable leading-relaxed">您的生命維度有兩股力量交織。主修復是您此刻最急迫的課題；而這股輔助力量，則在特定時刻浮現，暗示著您在解決表層危機後，也需要關注這個面向的安頓。</p>
                </Card>
              )}

              <div className="mb-16">
                <div className="flex items-center gap-2 mb-6">
                  <Activity className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-2xl text-foreground/90">各本尊對位能量分佈</h3>
                </div>
                <p className="text-sm text-muted-foreground readable mb-8">
                  這不是普通的測驗，而是系統對您生命因緣的全面掃描。頻率越高，代表該維度的漏損越需要被關注與修復。
                </p>
                
                <div className="space-y-6 bg-background/30 p-5 md:p-8 rounded-xl border border-border/50 shadow-inner">
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
                        <div className="flex justify-between items-center mb-2.5 gap-3">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="p-1.5 rounded-md border bg-background shrink-0" style={{ borderColor: isWinner ? d.themeColor.accent : 'var(--border)' }}>
                              <MetaIcon className="w-4 h-4" style={{ color: isWinner ? d.themeColor.accent : 'currentColor' }} />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 min-w-0 overflow-hidden">
                              <div className="text-sm md:text-base font-bold tracking-wide truncate" style={{ color: isWinner ? d.themeColor.accent : 'currentColor' }}>{d.name}</div>
                              <div className="text-[10px] px-1.5 py-0.5 rounded border border-border/50 text-muted-foreground opacity-80 whitespace-nowrap shrink-0 w-fit">
                                {funcTag}
                              </div>
                            </div>
                          </div>
                          <div className="text-right shrink-0 flex flex-col items-end">
                            <div className={`text-[10px] md:text-xs tracking-widest mb-0.5 ${statusOpacity}`}>{statusText}</div>
                            <div className="text-xs md:text-sm text-muted-foreground font-mono font-bold tracking-wider">{percent}%</div>
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
                <h3 className="font-display text-lg md:text-2xl text-primary mb-4 tracking-wider underline underline-offset-8 decoration-primary/20">接下來，我們將為您進行的四步修復</h3>
                <p className="readable text-sm md:text-lg text-muted-foreground mb-10 leading-loose">{advice.repairPlan}</p>
                <div className="relative">
                  <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-primary/10" />
                  <div className="block md:hidden absolute left-[28px] top-[10%] bottom-[10%] w-[2px] bg-primary/10" />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                    {[
                      { title: "能量定位", desc: "您已完成目前的診斷與對位", active: true },
                      { title: "志工造冊", desc: "今晚下班後，台灣志工將為您靜心造冊", active: false },
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

              <div className="flex flex-col items-center gap-8 pt-8 border-t border-border/30 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-destructive/10 text-destructive text-[9px] md:text-[11px] font-bold tracking-[0.2em] border border-destructive/20 rounded-full animate-pulse whitespace-nowrap shadow-sm z-10">
                  ⚡ 今日僅餘 {remainingSpots} 個修復名額（22:00 截止造冊）
                </div>

                <div className="w-full flex flex-col md:flex-row gap-4 items-stretch mt-4">
                  <Link href={`/deity/${primaryDeityKey}`} className="flex-1">
                    <Button className="h-16 md:h-20 w-full text-lg md:text-xl font-bold tracking-[0.2em] uppercase gold-border bg-primary text-primary-foreground shadow-2xl active:scale-95 transition-all group">
                      啟動我的修復計畫 <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                
                <div className="w-full max-w-sm mx-auto flex flex-col gap-3">
                  <div className="flex items-center gap-2 justify-center text-[10px] md:text-[11px] font-bold text-muted-foreground/70 tracking-widest uppercase">
                    <HeartHandshake className="w-3.5 h-3.5" /> 將覺察分享給需要的人，是善念的流動
                  </div>
                  <Button 
                    variant="outline" 
                    className={`h-14 w-full px-6 gold-border tracking-[0.2em] group shadow-sm transition-all ${isCopied ? 'bg-green-600/20 text-green-500 border-green-600/50' : 'border-primary/40 hover:bg-primary/5'}`} 
                    onClick={handleShare}
                  >
                    {isCopied ? (
                      <><Check className="mr-2 h-4 w-4" /> 測驗連結已複製</>
                    ) : (
                      <><Share2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> 點此分享測驗網址</>
                    )}
                  </Button>
                </div>
                
                <div className="text-center space-y-8 mt-4">
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
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}