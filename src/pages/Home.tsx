/*
Design philosophy: Neo-thangka noir (Professional Consultant Upgrade)
- L1 [Attention]: Hero section capturing "structural life crises". Removed buttons to force funnel downwards.
- L2 [Interest]: Scientific/Sutra-based explanation logic -> Seamlessly enters TreasuryQuiz.
- L3 [Desire]: Deities as "Systemic Repair Experts" (All 7 Dimensions).
- L4 [Clarity]: 4-Phase Systemic Restoration visualization.
- L5 & L6: High-value packaging and scarcity logic.
- A11y Upgrade: Full ARIA labels, semantic buttons, and keyboard focus management added.
- LCP Optimization: Fixed fetchPriority casing for React TypeScript compliance.
- 100% Unabbreviated Production Ready Code.
*/

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import TreasuryQuiz from "@/components/TreasuryQuiz";
// 🟢 AI SEO 必備：引入 Helmet 動態注入首頁專屬 SEO 與清單結構化資料
import { Helmet } from "react-helmet-async";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Link } from "wouter";
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
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

  // 🟢 AI SEO (AEO) 核心晶片：動態生成 ItemList (服務清單) 結構化資料
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": DEITIES.map((d, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `${d.name} - ${d.primaryIntent}`,
      "description": d.subtitle,
      "url": `https://zambala-tibetan.com.tw/deity/${d.key}`
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>滿願藏庫｜生命能量對位系統｜專屬祈福法事造冊</title>
        <meta name="description" content="由台灣志工團隊維護，提供黃財神、藥師佛、綠度母等七大本尊祈福法事。透過絕對透明的造冊機制與佛法經典能量對位，修復您的資糧結構與生命困境。" />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* L1 [痛點捕捉]: HERO */}
        <section className="relative overflow-hidden section-fade">
          <div className="absolute inset-0 opacity-30 md:opacity-40" aria-hidden="true">
            {/* ✅ 已修正：將 fetchpriority 改為 fetchPriority 以符合 React 規範 */}
            <img
              src={VISUALS.heroGilded}
              alt="滿願藏庫主視覺"
              className="h-full w-full object-cover scale-[1.05]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" aria-hidden="true" />

          <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-20 flex flex-col items-center text-center">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              <Badge className="gold-border bg-primary/10 text-primary backdrop-blur px-3 py-1 text-[10px] md:text-xs tracking-widest font-bold">
                台灣志工不支薪團隊
              </Badge>
              <Badge className="gold-border bg-background/40 text-foreground/80 backdrop-blur px-3 py-1 text-[10px] md:text-xs tracking-widest">
                護持金 100% 用於西藏壇城供養
              </Badge>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[1.1] tracking-tight">
              無論多努力，
              <br />
              <span className="text-primary italic">總有些坎就是跨不過去</span>
            </h1>

            <p className="mt-8 readable text-muted-foreground max-w-3xl text-base md:text-xl leading-relaxed mx-auto">
              這往往不是意志力的問題。<span className="text-foreground font-semibold">當生命的資糧容器出現了結構性漏損</span>，再多的努力也會在不知不覺中流失。
            </p>
            <p className="mt-4 readable text-muted-foreground max-w-3xl text-base md:text-lg leading-relaxed mx-auto italic opacity-80">
              我們是台灣不支薪志工，依循佛法古老智慧，陪伴您修復那個漏損。不高調，不造神，只如法完成每一道儀軌。
            </p>

            <button 
              type="button"
              onClick={() => scrollToSection("choose-path")}
              aria-label="向下選擇您的問題類型"
              className="mt-10 flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity animate-bounce cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-lg p-2"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-primary mb-3">選擇您的問題類型</span>
              <ArrowDown className="w-6 h-6 text-primary" aria-hidden="true" />
            </button>
          </div>
        </section>

        {/* 三痛點快速入口：冷流量 5 秒選擇自己的問題，直達對應神明頁 */}
        <section id="choose-path" className="mx-auto max-w-5xl px-4 pb-4 -mt-4 scroll-mt-20">
          <div className="grid gap-4 md:grid-cols-3">
            {/* 痛點一：財富 / 事業 */}
            <Link href="/deity/yellow" className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl">
              <div className="h-full p-6 md:p-8 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <div className="text-2xl mb-3">💰</div>
                <div className="font-display text-xl md:text-2xl text-foreground/90 mb-2">錢留不住、事業卡關</div>
                <p className="text-sm text-muted-foreground readable leading-relaxed">
                  努力了卻總差一步，財富不斷漏失，找不到突破口。
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-primary tracking-widest uppercase">
                  對位黃財神 <ChevronRight className="h-3 w-3" />
                </div>
              </div>
            </Link>

            {/* 痛點二：關係 / 人緣 */}
            <Link href="/deity/kurukulla" className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl">
              <div className="h-full p-6 md:p-8 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <div className="text-2xl mb-3">🌸</div>
                <div className="font-display text-xl md:text-2xl text-foreground/90 mb-2">感情不順、人緣薄弱</div>
                <p className="text-sm text-muted-foreground readable leading-relaxed">
                  感覺社交透明，找不到對的人，職場人際也總是吃力。
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-primary tracking-widest uppercase">
                  對位作明佛母 <ChevronRight className="h-3 w-3" />
                </div>
              </div>
            </Link>

            {/* 痛點三：不確定 / 綜合 → 測驗 */}
            <button
              type="button"
              onClick={() => scrollToSection("quiz")}
              className="group block text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
            >
              <div className="h-full p-6 md:p-8 rounded-xl border border-border/40 bg-card/50 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 cursor-pointer">
                <div className="text-2xl mb-3">🔍</div>
                <div className="font-display text-xl md:text-2xl text-foreground/90 mb-2">說不清楚，就是卡</div>
                <p className="text-sm text-muted-foreground readable leading-relaxed">
                  整體感覺不對勁，不知道問題在哪裡，想先做個診斷。
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-primary tracking-widest uppercase">
                  30 秒免費診斷 <ChevronRight className="h-3 w-3" />
                </div>
              </div>
            </button>
          </div>
        </section>

        {/* L2 [學理證明]: 核心測驗入口 */}
        <div id="quiz" className="scroll-mt-20">
          <TreasuryQuiz />
        </div>

        <div className="tibetan-divider h-12 opacity-60 mt-6" aria-hidden="true" />

        {/* L3 [解決方案]: 生命維度導航 */}
        <section aria-labelledby="dimension-nav-heading" className="mx-auto max-w-6xl px-4 pt-16 pb-4">
          <div className="grid gap-6 md:grid-cols-[1.1fr_.9fr] md:items-stretch">
            <Card className="p-8 md:p-12 gold-border bg-card/70 paper-grain relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none" aria-hidden="true">
                <Layers className="w-64 h-64 text-primary" />
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-bold mb-4" aria-hidden="true">Dimension Navigation</div>
              <h2 id="dimension-nav-heading" className="font-display text-4xl md:text-5xl leading-tight text-foreground/90">生命維度導航：<br/>精準對位您的修復需求</h2>
              <p className="mt-6 readable text-muted-foreground text-lg italic">
                「生命的問題不能僅靠心念解決，必須修復底層的資糧結構。」
              </p>

              <div className="mt-8 grid gap-4" role="navigation" aria-label="神明對位快速導航">
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "資糧流動修復 → 黃財神", to: "yellow", srLabel: "前往黃財神介紹頁面" },
                    { label: "家運地基穩固 → 大吉祥天女", to: "mahashri", srLabel: "前往大吉祥天女介紹頁面" },
                    { label: "決策認知除障 → 象頭財神", to: "ganapati", srLabel: "前往象頭財神介紹頁面" },
                    { label: "懷愛磁場重建 → 作明佛母", to: "kurukulla", srLabel: "前往作明佛母介紹頁面" },
                    { label: "身心耗損息災 → 藥師佛", to: "medicine-buddha", srLabel: "前往藥師佛介紹頁面" },
                    { label: "急難突發化解 → 綠度母", to: "green-tara", srLabel: "前往綠度母介紹頁面" },
                    { label: "動盪防禦建構 → 蓮花生大士", to: "padmasambhava", srLabel: "前往蓮花生大士介紹頁面" }
                  ].map((item) => (
                    <Link key={item.to} href={`/deity/${item.to}`} aria-label={item.srLabel} className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md">
                      <Badge className="px-3 py-2 text-xs md:text-sm gold-border bg-background/40 hover:bg-primary text-foreground hover:text-primary-foreground transition-all cursor-pointer font-medium">
                        {item.label} <ChevronRight className="h-3 w-3 ml-1 opacity-50" aria-hidden="true" />
                      </Badge>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-lg bg-primary/5 border-l-4 border-primary/40 space-y-4" role="note" aria-label="本尊引導建議">
                  <div className="flex items-center gap-3 text-primary font-bold">
                    <Info className="h-5 w-5" aria-hidden="true" /> 本尊引導建議
                  </div>
                  <ul className="text-sm md:text-base text-muted-foreground readable space-y-3">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold" aria-hidden="true">01</span>
                      <span><strong className="text-foreground">前測對位</strong>：先看本尊介紹頁，確認「能量缺失」是否與現況共鳴。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold" aria-hidden="true">02</span>
                      <span><strong className="text-foreground">確定方案</strong>：閱讀「如法內容」，了解這份投資如何運作。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold" aria-hidden="true">03</span>
                      <span><strong className="text-foreground">啟動造冊</strong>：登記完成後，即日送達名單至西藏排程法事。</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex flex-col md:flex-row gap-4">
                <button 
                  type="button"
                  onClick={() => scrollToSection("choose")}
                  className="flex-1 h-14 w-full font-bold tracking-[0.2em] uppercase gold-border shadow-xl bg-primary text-primary-foreground hover:scale-[1.02] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
                >
                  開始選對位本尊 <ArrowRight className="h-5 w-5 ml-2 inline" aria-hidden="true" />
                </button>
                <Link href="/pay" className="flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md">
                  <Button variant="outline" className="h-14 w-full gold-border text-lg tracking-widest pointer-events-none">
                    全站神明本尊介紹
                  </Button>
                </Link>
              </div>
            </Card>

            {/* L4 [流程具象化]: 階段性修復計畫表 */}
            <Card className="p-8 md:p-12 gold-border bg-background/30 backdrop-blur paper-grain border-dashed">
              <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold mb-4 italic" aria-hidden="true">Step-by-Step Restoration</div>
              <h3 className="font-display text-3xl text-foreground/90">四階段系統修復計畫</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">不再是模糊的「祈福」，而是由志工與壇城共同執行的工程進度。</p>

              <div className="mt-10 grid gap-6" role="list">
                {[
                  { step: "Phase 1", title: "能量定位 (Diagnosis)", body: "透過深度測驗或私訊溝通，確認目前的因緣卡關點（如：資糧漏損、關係防禦）。" },
                  { step: "Phase 2", title: "業印清理 (Clearing)", body: "完成登記後 24h 內由志工造冊，送達西藏壇城啟動第一步：障礙清淨儀軌。" },
                  { step: "Phase 3", title: "結構穩定 (Stabilizing)", body: "持續的如法供養與共振，修補受損的容器邊界，讓您的心神找回做決定的定見。" },
                  { step: "Phase 4", title: "能量強化 (Fortifying)", body: "在修復完成後注入增益能量。地基穩了，您的努力才會在現實中產生感應力。" },
                ].map((s, idx) => (
                  <div key={idx} className="relative flex gap-5 group" role="listitem">
                    <div aria-hidden="true" className="flex-shrink-0 w-12 h-12 rounded-full border gold-border bg-card/80 flex items-center justify-center font-display text-primary text-xs tracking-tighter group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 z-10">
                      {s.step}
                    </div>
                    <div>
                      <div className="font-display text-xl text-foreground/90 group-hover:text-primary transition-colors">
                        <span className="sr-only">{`階段 ${idx + 1}: `}</span>{s.title}
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground readable opacity-80">{s.body}</div>
                    </div>
                    {idx < 3 && <div className="absolute left-6 top-12 w-px h-full bg-primary/20 -z-10 hidden md:block" aria-hidden="true" />}
                  </div>
                ))}
              </div>

              <div className="mt-12 p-5 rounded bg-destructive/5 border border-destructive/20 text-xs text-destructive/80 leading-relaxed font-bold tracking-wider" role="alert">
                <Zap className="h-4 w-4 inline mr-2 mb-1" aria-hidden="true" />
                提醒：護持非交易。我們承諾的是如法完成每一道修復流程。祈願越具體，能量對位越清晰。
              </div>
            </Card>
          </div>
        </section>

        {/* DEITIES: 產品對位區塊 */}
        <section id="choose" aria-labelledby="deities-heading" className="mx-auto max-w-6xl px-4 pt-20 pb-10 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="text-center md:text-left">
              <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold" aria-hidden="true">Expert Alignment</div>
              <h2 id="deities-heading" className="mt-3 font-display text-4xl md:text-6xl tracking-tight">滿願藏庫法事本尊</h2>
              <p className="mt-4 readable text-muted-foreground text-lg max-w-2xl italic">
                不需要亂拜，對準困境。每一位本尊代表著不同的修復運算法。
              </p>
            </div>
            <Link href="/pay" className="hidden md:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md">
              <Button variant="outline" className="gold-border hover:bg-primary/10 px-8 h-14 text-lg pointer-events-none">
                查看全站登記名冊
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {DEITIES.map((d) => (
              <Link key={d.key} href={`/deity/${d.key}`} aria-label={`查看 ${d.name}，專注於${d.primaryIntent}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-xl">
                <Card className="overflow-hidden gold-border bg-card/70 hover:bg-accent/20 hover:border-primary transition-all duration-700 paper-grain group cursor-pointer relative">
                  <div className="grid md:grid-cols-[240px_1fr]">
                    <div className="h-56 md:h-full w-full overflow-hidden">
                      {/* 這裡非首屏圖片，保持 lazy loading */}
                      <img
                        src={d.heroImage}
                        alt=""
                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] tracking-[0.25em] uppercase text-primary font-black mb-2 opacity-80">
                          能量解決方案 · {d.primaryIntent}
                        </div>
                        <div className="mt-1 font-display text-4xl group-hover:text-primary transition-colors">{d.name}</div>
                        <div className="mt-2 text-sm text-muted-foreground font-medium tracking-wide">{d.subtitle}</div>
                        <p className="mt-5 readable text-muted-foreground text-sm line-clamp-2 leading-relaxed opacity-70">{d.whyThisDeity?.[0]}</p>
                        <p className="mt-3 readable text-muted-foreground text-xs line-clamp-2 leading-relaxed opacity-50 italic">「{d.heroKicker}」</p>
                      </div>
                      <div className="mt-8 flex items-center gap-3 text-xs font-bold text-foreground/80 tracking-[0.2em] group-hover:translate-x-2 transition-transform uppercase" aria-hidden="true">
                        對位介紹與修復方案 <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity" aria-hidden="true">
                     <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* L5 [產品包裝]: 藥師佛加碼活動 */}
        <section aria-labelledby="bonus-heading" className="mx-auto max-w-6xl px-4 pt-10 pb-4">
          <Card className="gold-border bg-primary/5 overflow-hidden paper-grain border-primary/30 relative group">
            <div className="absolute top-0 right-0 p-12 opacity-5 font-display text-[15rem] text-primary pointer-events-none group-hover:rotate-12 transition-transform duration-1000" aria-hidden="true">
              ✦
            </div>
            <div className="grid md:grid-cols-[320px_1fr]">
              <div className="h-64 md:h-full w-full relative">
                <img
                  src={VISUALS.sutraCloseup}
                  alt="藥師佛法事意象"
                  className="h-full w-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5" aria-hidden="true" />
              </div>
              <div className="p-8 md:p-14 z-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-primary text-primary-foreground gold-border animate-pulse px-4 py-1.5 tracking-widest text-xs font-bold">本月顧問加碼</Badge>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold italic" aria-hidden="true">Lapis Lazuli Restoration</span>
                </div>
                <h3 id="bonus-heading" className="font-display text-3xl md:text-5xl text-foreground leading-tight tracking-tight">啟動任一主計畫，<br/><span className="text-primary underline underline-offset-8">免費對位每週「藥師佛息災煙供」</span></h3>
                <p className="mt-8 readable text-muted-foreground text-lg leading-loose max-w-3xl">
                  我們深知<strong className="text-foreground">「健康與安穩」</strong>是所有福報的底氣。地基不穩，再多資糧也難以受用。
                  這不是商業贈品，而是為了確保您的修復容器足夠穩固，能真正接住後續降臨的善緣與財富。
                </p>
                
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-primary font-black flex items-center gap-2 italic" aria-hidden="true">Double Protection < Zap className="h-3 w-3" /></div>
                    <div className="font-display text-2xl">雙重能量守護</div>
                    <div className="text-[13px] text-muted-foreground readable">補足資糧缺口，同時清淨身心負累。</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-primary font-black flex items-center gap-2 italic" aria-hidden="true">Transparency < ShieldCheck className="h-3 w-3" /></div>
                    <div className="font-display text-2xl">流程全程透明</div>
                    <div className="text-[13px] text-muted-foreground readable">每週六結案，並於隔週公佈去識別化造冊。</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-primary font-black flex items-center gap-2 italic" aria-hidden="true">Automatic Entry < Clock className="h-3 w-3" /></div>
                    <div className="font-display text-2xl">系統自動併入</div>
                    <div className="text-[13px] text-muted-foreground readable">登記任一法事後，志工將主動為您名冊歸類。</div>
                  </div>
                </div>

                <div className="mt-12">
                  <Link href="/pay" aria-label="前往預約名冊，啟動藥師佛雙重修復" className="inline-block w-full md:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md">
                    <Button tabIndex={-1} className="h-20 w-full md:w-auto px-12 text-xl md:text-2xl font-bold tracking-[0.4em] uppercase gold-border bg-primary text-primary-foreground shadow-2xl hover:scale-[1.02] active:scale-95 transition-all group pointer-events-none">
                      立即預約，啟動修復 <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
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
        <section aria-label="免費贈品區塊" className="mx-auto max-w-6xl px-4 pt-10 pb-2">
          <Card className="gold-border bg-card/70 overflow-hidden paper-grain hover:border-primary/40 transition-colors">
            <div className="grid md:grid-cols-[1fr_260px] items-center gap-6">
              <div className="p-7 md:p-10">
                <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold flex items-center gap-2 mb-2" aria-hidden="true">
                  <Download className="w-4 h-4" /> Free Gift
                </div>
                <h2 className="font-display text-3xl md:text-4xl">黃財神手機桌布免費下載</h2>
                <p className="mt-4 readable text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  慶祝 FB 粉絲團成立，我們製作了專屬的高畫質桌布送給您。<br/>
                  願您每天打開手機，都記得：<strong className="text-foreground">您的財庫正在回正，您值得被善緣與資糧好好照顧。</strong>
                </p>
                <div className="mt-8">
                  <Link href="/wallpaper" aria-label="前往下載黃財神免費手機桌布" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md">
                    <Button variant="outline" tabIndex={-1} className="gold-border tracking-[0.2em] font-bold h-14 px-8 text-lg hover:bg-primary/10 pointer-events-none">
                      前往免費領取 <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block h-[320px] w-full" aria-hidden="true">
                <img 
                  src={DEITIES.find(d => d.key === 'yellow')?.heroImage} 
                  alt="" 
                  className="h-full w-full object-cover border-l border-border/50 opacity-80" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* L6 [終局收割]: 回饋文 */}
        <section aria-labelledby="testimonials-heading" className="mx-auto max-w-6xl px-4 pt-20 pb-28">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-bold mb-4 bg-primary/5 px-3 py-1 rounded" aria-hidden="true">
              <ShieldCheck className="w-4 h-4" /> Real Transformations
            </div>
            <h2 id="testimonials-heading" className="font-display text-4xl md:text-6xl tracking-tight">他們，也曾站在同樣的岔路口</h2>
            <p className="mt-6 readable text-muted-foreground text-lg max-w-3xl mx-auto italic">
              我們不賣神話，我們呈現真實的改變。當您把心念放正，世界便會開始對位。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {HOME_TESTIMONIALS.map((t, idx) => (
              <Card key={idx} className="p-8 md:p-10 gold-border bg-card/70 paper-grain hover:bg-accent/10 transition-all duration-500 group relative">
                <Quote className="absolute top-6 left-6 w-10 h-10 text-primary opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true" />
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
            <Link href="/proof" aria-label="查看更多護持者的真實見證故事" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md">
              <Button variant="outline" tabIndex={-1} className="gold-border h-16 px-12 text-lg font-bold tracking-[0.2em] hover:bg-primary/5 transition-all group pointer-events-none">
                探索更多真實轉變的故事 <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform opacity-70" aria-hidden="true" />
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