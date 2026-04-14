/*
Design philosophy: Neo-thangka noir (Professional Consultant Upgrade)
- L1 [Attention]: Hero section capturing "structural life crises". Removed buttons to force funnel downwards.
- L2 [Interest]: Scientific/Sutra-based explanation logic -> Seamlessly enters TreasuryQuiz.
- L3 [Desire]: Deities as "Systemic Repair Experts" (All 7 Dimensions).
- L4 [Clarity]: 4-Phase Systemic Restoration visualization.
- L5 & L6: High-value packaging and scarcity logic.
- 100% Unabbreviated Production Ready Code.
*/

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import TreasuryQuiz from "@/components/TreasuryQuiz";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { Link } from "wouter";
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  ClipboardList, 
  Clock, 
  ChevronRight, 
  Zap, 
  Info,
  Layers,
  Download,
  Quote,
  ArrowDown // 🟢 新增向下引導圖示
} from "lucide-react";

import { HOME_TESTIMONIALS, VISUALS } from "@/lib/siteData";
import { DEITIES } from "@/data/deities";

export default function Home() {
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* L1 [痛點捕捉]: HERO - 將情緒轉化為結構性觀察 */}
        <section className="relative overflow-hidden section-fade">
          <div className="absolute inset-0 opacity-30 md:opacity-40">
            <img
              src={VISUALS.heroGilded}
              alt="滿願藏庫｜增財盈貴 斷孽消災法事"
              className="h-full w-full object-cover scale-[1.05]"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

          <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-20 flex flex-col items-center text-center">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              <Badge className="gold-border bg-primary/10 text-primary backdrop-blur px-3 py-1 text-[10px] md:text-xs tracking-widest font-bold">
                生命能量對位系統 2.0
              </Badge>
              <Badge className="gold-border bg-background/40 text-foreground/80 backdrop-blur px-3 py-1 text-[10px] md:text-xs tracking-widest">
                今日吉時名額開放中
              </Badge>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[1.1] tracking-tight">
              我們不高調、不支薪
              <br />
              <span className="text-primary italic">只依正法力量為您完成儀軌</span>
            </h1>

            <p className="mt-8 readable text-muted-foreground max-w-3xl text-base md:text-xl leading-relaxed mx-auto italic">
              「為什麼無論多努力，生命中總有些坎跨不過去？」
              <br className="hidden md:block" />
              這往往非關運氣，而是您的<span className="text-foreground font-bold">資糧容器出現了結構性漏損</span>。我們是志工團隊，旨在透過佛法經典的能量對位，協助您在動盪的時代找回不動的中心。
            </p>

            {/* 🟢 核心優化：移除按鈕，換成無縫向下的沈浸式引導 */}
            <div className="mt-16 flex flex-col items-center justify-center opacity-70 animate-bounce">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-primary mb-3">向下探索生命維度</span>
              <ArrowDown className="w-6 h-6 text-primary" />
            </div>
          </div>
        </section>

        {/* L2 [學理證明]: 核心測驗入口 - 專業診斷起始點 (緊接在箭頭下方) */}
        <div id="quiz" className="scroll-mt-20">
          <TreasuryQuiz />
        </div>

        <div className="tibetan-divider h-12 opacity-60 mt-6" aria-hidden />

        {/* L3 [解決方案]: 生命維度導航 - 將七大神明定義為「修復引導者」 */}
        <section className="mx-auto max-w-6xl px-4 pt-16 pb-4">
          <div className="grid gap-6 md:grid-cols-[1.1fr_.9fr] md:items-stretch">
            <Card className="p-8 md:p-12 gold-border bg-card/70 paper-grain relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
                <Layers className="w-64 h-64 text-primary" />
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-bold mb-4">Dimension Navigation</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight text-foreground/90">生命維度導航：<br/>精準對位您的修復需求</h2>
              <p className="mt-6 readable text-muted-foreground text-lg italic">
                「生命的問題不能僅靠心念解決，必須修復底層的資糧結構。」
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "資糧流動修復 → 黃財神", to: "yellow" },
                    { label: "家運地基穩固 → 大吉祥天女", to: "mahashri" },
                    { label: "決策認知除障 → 象頭財神", to: "ganapati" },
                    { label: "懷愛磁場重建 → 作明佛母", to: "kurukulla" },
                    { label: "身心耗損息災 → 藥師佛", to: "medicine-buddha" },
                    { label: "急難突發化解 → 綠度母", to: "green-tara" },
                    { label: "動盪防禦建構 → 蓮花生大士", to: "padmasambhava" }
                  ].map((item) => (
                    <Link key={item.to} href={`/deity/${item.to}`} className="inline-flex">
                      <Badge className="px-3 py-2 text-xs md:text-sm gold-border bg-background/40 hover:bg-primary text-foreground hover:text-primary-foreground transition-all cursor-pointer font-medium">
                        {item.label} <ChevronRight className="h-3 w-3 ml-1 opacity-50" />
                      </Badge>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-lg bg-primary/5 border-l-4 border-primary/40 space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold">
                    <Info className="h-5 w-5" /> 本尊引導建議
                  </div>
                  <ul className="text-sm md:text-base text-muted-foreground readable space-y-3">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">01</span>
                      <span><strong className="text-foreground">前測對位</strong>：先看本尊介紹頁，確認「能量缺失」是否與現況共鳴。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">02</span>
                      <span><strong className="text-foreground">確定方案</strong>：閱讀「如法內容」，了解這份投資如何運作。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">03</span>
                      <span><strong className="text-foreground">啟動造冊</strong>：登記完成後，即日送達名單至西藏排程法事。</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex flex-col md:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection("choose")}
                  className="flex-1 h-14 w-full font-bold tracking-[0.2em] uppercase gold-border shadow-xl bg-primary text-primary-foreground hover:scale-[1.02] transition-all"
                >
                  開始選對位本尊 <ArrowRight className="h-5 w-5 ml-2 inline" />
                </button>
                <Link href="/pay" className="flex-1">
                  <Button variant="outline" className="h-14 w-full gold-border text-lg tracking-widest">
                    全站神明本尊介紹
                  </Button>
                </Link>
              </div>
            </Card>

            {/* L4 [流程具象化]: 階段性修復計畫表 */}
            <Card className="p-8 md:p-12 gold-border bg-background/30 backdrop-blur paper-grain border-dashed">
              <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold mb-4 italic">Step-by-Step Restoration</div>
              <h3 className="font-display text-3xl text-foreground/90">四階段系統修復計畫</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">不再是模糊的「祈福」，而是由志工與壇城共同執行的工程進度。</p>

              <div className="mt-10 grid gap-6">
                {[
                  { step: "Phase 1", title: "能量定位 (Diagnosis)", body: "透過深度測驗或私訊溝通，確認目前的因緣卡關點（如：資糧漏損、關係防禦）。" },
                  { step: "Phase 2", title: "業印清理 (Clearing)", body: "完成登記後 24h 內由志工造冊，送達西藏壇城啟動第一步：障礙清淨儀軌。" },
                  { step: "Phase 3", title: "結構穩定 (Stabilizing)", body: "持續的如法供養與共振，修補受損的容器邊界，讓您的心神找回做決定的定見。" },
                  { step: "Phase 4", title: "能量強化 (Fortifying)", body: "在修復完成後注入增益能量。地基穩了，您的努力才會在現實中產生感應力。" },
                ].map((s, idx) => (
                  <div key={idx} className="relative flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border gold-border bg-card/80 flex items-center justify-center font-display text-primary text-xs tracking-tighter group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 z-10">
                      {s.step}
                    </div>
                    <div>
                      <div className="font-display text-xl text-foreground/90 group-hover:text-primary transition-colors">{s.title}</div>
                      <div className="mt-2 text-sm text-muted-foreground readable opacity-80">{s.body}</div>
                    </div>
                    {idx < 3 && <div className="absolute left-6 top-12 w-px h-full bg-primary/20 -z-10 hidden md:block" />}
                  </div>
                ))}
              </div>

              <div className="mt-12 p-5 rounded bg-destructive/5 border border-destructive/20 text-xs text-destructive/80 leading-relaxed font-bold tracking-wider">
                <Zap className="h-4 w-4 inline mr-2 mb-1" />
                提醒：護持非交易。我們承諾的是如法完成每一道修復流程。祈願越具體，能量對位越清晰。
              </div>
            </Card>
          </div>
        </section>

        {/* DEITIES: 產品對位區塊 (自動 mapping 7 尊) */}
        <section id="choose" className="mx-auto max-w-6xl px-4 pt-20 pb-10 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="text-center md:text-left">
              <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold">Expert Alignment</div>
              <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight">滿願藏庫法事本尊</h2>
              <p className="mt-4 readable text-muted-foreground text-lg max-w-2xl italic">
                不需要亂拜，對準困境。每一位本尊代表著不同的修復運算法。
              </p>
            </div>
            <Link href="/pay" className="hidden md:block">
              <Button variant="outline" className="gold-border hover:bg-primary/10 px-8 h-14 text-lg">
                查看全站登記名冊
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {DEITIES.map((d) => (
              <Link key={d.key} href={`/deity/${d.key}`}>
                <Card className="overflow-hidden gold-border bg-card/70 hover:bg-accent/20 hover:border-primary transition-all duration-700 paper-grain group cursor-pointer relative">
                  <div className="grid md:grid-cols-[240px_1fr]">
                    <div className="h-56 md:h-full w-full overflow-hidden">
                      <img src={d.heroImage} alt={d.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" loading="lazy" />
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] tracking-[0.25em] uppercase text-primary font-black mb-2 opacity-80">
                          {d.primaryIntent}
                        </div>
                        <div className="mt-1 font-display text-4xl group-hover:text-primary transition-colors">{d.name}</div>
                        <div className="mt-2 text-sm text-muted-foreground font-medium tracking-wide">{d.subtitle}</div>
                        <p className="mt-5 readable text-muted-foreground text-sm line-clamp-3 leading-relaxed opacity-70">「{d.promise}」</p>
                      </div>
                      <div className="mt-8 flex items-center gap-3 text-xs font-bold text-foreground/80 tracking-[0.2em] group-hover:translate-x-2 transition-transform uppercase">
                        對位介紹與修復方案 <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                     <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* L5 [產品包裝]: 藥師佛加碼活動 - 建立「雙重守護」的高價值感 */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-4">
          <Card className="gold-border bg-primary/5 overflow-hidden paper-grain border-primary/30 relative group">
            <div className="absolute top-0 right-0 p-12 opacity-5 font-display text-[15rem] text-primary pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
              ✦
            </div>
            <div className="grid md:grid-cols-[320px_1fr]">
              <div className="h-64 md:h-full w-full relative">
                <img src={VISUALS.sutraCloseup} alt="琉璃光息災" className="h-full w-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5" />
              </div>
              <div className="p-8 md:p-14 z-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-primary text-primary-foreground gold-border animate-pulse px-4 py-1.5 tracking-widest text-xs font-bold">本月顧問加碼</Badge>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold italic">Lapis Lazuli Restoration</span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl text-foreground leading-tight tracking-tight">啟動任一主計畫，<br/><span className="text-primary underline underline-offset-8">免費對位每週「藥師佛息災煙供」</span></h3>
                <p className="mt-8 readable text-muted-foreground text-lg leading-loose max-w-3xl">
                  我們深知<strong className="text-foreground">「健康與安穩」</strong>是所有福報的底氣。地基不穩，再多資糧也難以受用。
                  這不是商業贈品，而是為了確保您的修復容器足夠穩固，能真正接住後續降臨的善緣與財富。
                </p>
                
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-primary font-black flex items-center gap-2 italic">Double Protection < Zap className="h-3 w-3" /></div>
                    <div className="font-display text-2xl">雙重能量守護</div>
                    <div className="text-[13px] text-muted-foreground readable">補足資糧缺口，同時清淨身心負累。</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-primary font-black flex items-center gap-2 italic">Transparency < ShieldCheck className="h-3 w-3" /></div>
                    <div className="font-display text-2xl">流程全程透明</div>
                    <div className="text-[13px] text-muted-foreground readable">每週六結案，並於隔週公佈去識別化造冊。</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-primary font-black flex items-center gap-2 italic">Automatic Entry < Clock className="h-3 w-3" /></div>
                    <div className="font-display text-2xl">系統自動併入</div>
                    <div className="text-[13px] text-muted-foreground readable">登記任一法事後，志工將主動為您名冊歸類。</div>
                  </div>
                </div>

                <div className="mt-12">
                  <Link href="/pay">
                    <Button className="h-20 w-full md:w-auto px-12 text-xl md:text-2xl font-bold tracking-[0.4em] uppercase gold-border bg-primary text-primary-foreground shadow-2xl hover:scale-[1.02] active:scale-95 transition-all group">
                      立即預約，啟動修復 <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                  <div className="mt-5 text-[11px] text-muted-foreground/60 tracking-widest font-bold uppercase italic text-center md:text-left">
                    * 本企劃為志工團隊自發加碼，名額將依壇城負載量動態控管。
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* FREE GIFT 黃財神桌布下載區塊 */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-2">
          <Card className="gold-border bg-card/70 overflow-hidden paper-grain hover:border-primary/40 transition-colors">
            <div className="grid md:grid-cols-[1fr_260px] items-center gap-6">
              <div className="p-7 md:p-10">
                <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold flex items-center gap-2 mb-2">
                  <Download className="w-4 h-4" /> Free Gift
                </div>
                <h2 className="font-display text-3xl md:text-4xl">黃財神手機桌布免費下載</h2>
                <p className="mt-4 readable text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  慶祝 FB 粉絲團成立，我們製作了專屬的高畫質桌布送給您。<br/>
                  願您每天打開手機，都記得：<strong className="text-foreground">您的財庫正在回正，您值得被善緣與資糧好好照顧。</strong>
                </p>
                <div className="mt-8">
                  <Link href="/wallpaper">
                    <Button variant="outline" className="gold-border tracking-[0.2em] font-bold h-14 px-8 text-lg hover:bg-primary/10">
                      前往免費領取 <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block h-[320px] w-full">
                <img 
                  src={DEITIES.find(d => d.key === 'yellow')?.heroImage} 
                  alt="黃財神桌布示意" 
                  className="h-full w-full object-cover border-l border-border/50 opacity-80" 
                />
              </div>
            </div>
          </Card>
        </section>

        {/* L6 [終局收割]: 回饋文 - 建立真實人情味與信任 */}
        <section className="mx-auto max-w-6xl px-4 pt-20 pb-28">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-bold mb-4 bg-primary/5 px-3 py-1 rounded">
              <ShieldCheck className="w-4 h-4" /> Real Transformations
            </div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight">他們，也曾站在同樣的岔路口</h2>
            <p className="mt-6 readable text-muted-foreground text-lg max-w-3xl mx-auto italic">
              我們不賣神話，我們呈現真實的改變。當您把心念放正，世界便會開始對位。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {HOME_TESTIMONIALS.map((t, idx) => (
              <Card key={idx} className="p-8 md:p-10 gold-border bg-card/70 paper-grain hover:bg-accent/10 transition-all duration-500 group relative">
                <Quote className="absolute top-6 left-6 w-10 h-10 text-primary opacity-5 group-hover:opacity-10 transition-opacity" />
                <div className="relative z-10">
                  <div className="font-display text-2xl text-foreground/90 group-hover:text-primary transition-colors mb-5">{t.title}</div>
                  <p className="readable text-muted-foreground text-sm leading-loose opacity-80">「{t.body}」</p>
                  <div className="mt-8 pt-6 border-t border-border/30 flex justify-between items-center">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary font-black italic">{t.by}</span>
                    <Badge variant="outline" className="text-[8px] opacity-40 border-primary/20">Verified Feedback</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/proof">
              <Button variant="outline" className="gold-border h-16 px-12 text-lg font-bold tracking-[0.2em] hover:bg-primary/5 transition-all group">
                探索更多真實轉變的故事 <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform opacity-70" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
}