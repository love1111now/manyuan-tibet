import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import RitualMarkdown from "@/components/RitualMarkdown";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Flame,
  CheckCircle2,
  Sparkles,
  ClipboardList,
  HelpCircle,
  ShieldCheck,
  Lock,
  CreditCard,
  Clock,
  Info,
  Quote,
  Layers
} from "lucide-react";

import { DEITIES, HOME_TESTIMONIALS, type DeityKey } from "@/lib/siteData";

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function anchorBtn(label: string, targetId: string, Icon: any) {
  return (
    <button type="button" className="block w-full text-left" onClick={() => scrollToId(targetId)}>
      <Button
        variant="outline"
        className="h-12 md:h-11 w-full justify-start gap-3 gold-border bg-card/50 hover:bg-primary/10 transition-all"
      >
        <Icon className="h-4 w-4 text-primary" />
        <span className="font-bold tracking-wider">{label}</span>
      </Button>
    </button>
  );
}

export default function Deity({ deityKey }: { deityKey?: string }) {
  const d = DEITIES.find((x) => x.key === (deityKey as DeityKey));

  if (!d) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-4 py-20">
          <Card className="p-8 md:p-12 gold-border bg-card/70 paper-grain text-center">
            <div className="font-display text-3xl text-foreground/90">未知的修復路徑</div>
            <p className="mt-4 text-muted-foreground readable text-lg">請從首頁重新探索與您共鳴的生命維度。</p>
            <div className="mt-8">
              <Link href="/">
                <Button className="gold-border h-12 px-8 tracking-widest font-bold">回到首頁重新導航</Button>
              </Link>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  const cheapest = [...d.plans].sort((a, b) => a.price - b.price)[0];
  const priciest = [...d.plans].sort((a, b) => b.price - a.price)[0];
  const hot = d.plans.find((p) => p.hot) ?? d.plans[0];

  const deityData = d as any;
  const displayTestimonials = deityData.testimonials && deityData.testimonials.length > 0 
    ? deityData.testimonials 
    : HOME_TESTIMONIALS.slice(0, 3);

  return (
    <div 
      className="min-h-screen bg-background transition-colors duration-700 relative"
      style={{
        "--page-bg": d.themeColor.bg,
        "--page-accent": d.themeColor.accent,
      } as React.CSSProperties}
    >
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 pt-8 md:pt-12 pb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> 返回系統導航
          </Link>

          <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/40 px-3 py-1 text-[10px] md:text-xs tracking-widest font-black uppercase" style={{ borderWidth: '1px' }}>
                  {d.primaryIntent}
                </Badge>
                <Badge className="gold-border bg-card/60 text-muted-foreground px-3 py-1 text-[10px] md:text-xs tracking-widest font-bold">
                  {d.heroKicker}
                </Badge>
              </div>

              <h1 className="mt-6 font-display text-5xl md:text-6xl tracking-tight leading-[1.1] text-foreground/90">{d.name}</h1>
              <div className="mt-3 text-lg md:text-xl text-primary font-serif italic tracking-wide">{d.subtitle}</div>

              <p className="mt-6 readable text-muted-foreground max-w-prose text-base md:text-lg leading-relaxed">
                {d.promise}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button type="button" onClick={() => scrollToId("plans")} className="w-full sm:w-auto">
                  <Button className="h-14 w-full px-8 text-lg font-bold tracking-[0.2em] uppercase gold-border transition-all hover:scale-[1.02] active:scale-95 shadow-xl">
                    啟動專屬修復計畫 <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </button>
                <Link href="/pay" className="w-full sm:w-auto">
                  <Button variant="outline" className="h-14 w-full px-8 gold-border hover:bg-primary/10 text-base tracking-widest">
                    檢視全站造冊總覽
                  </Button>
                </Link>
              </div>

              {/* TOC */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {anchorBtn("生命結構與診斷", "pain", Layers)}
                {anchorBtn("系統修復指引", "process", ClipboardList)}
                {d.ritual ? anchorBtn("經典儀軌與實證", "ritual", ExternalLink) : null}
                {anchorBtn("對位修復方案", "plans", ShieldCheck)}
                {anchorBtn("顧問釋疑 (FAQ)", "faq", HelpCircle)}
              </div>
            </div>

            <Card className="gold-border bg-card/70 paper-grain overflow-hidden group">
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="block w-full text-left relative" aria-label={`查看 ${d.name} 圖片大圖`}>
                    <AspectRatio ratio={4 / 5}>
                      <img
                        src={d.heroImage}
                        alt={`${d.name} 唐卡形象示意`}
                        className="h-full w-full object-cover bg-background/40 transition-transform duration-1000 group-hover:scale-105"
                        loading="eager"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-xl border-primary/30">
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl text-primary tracking-widest">{d.name}｜經典法相</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <img
                      src={d.heroImage}
                      alt={`${d.name} 唐卡形象示意（大圖）`}
                      className="w-full h-auto rounded-lg border border-primary/20 shadow-2xl"
                      loading="lazy"
                    />
                    <div className="mt-3 text-xs text-muted-foreground text-center tracking-widest uppercase">點擊主圖外區域可關閉</div>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="p-6 md:p-8 relative z-10 -mt-16 backdrop-blur-md bg-background/60 border-t border-primary/20">
                <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">佛法經典依據（核心運算法）</div>
                <blockquote className="mt-3 border-l-2 border-primary/50 pl-4 readable text-foreground/90 font-serif italic text-lg leading-relaxed">
                  「{d.scripture[0]?.quote}」
                  <div className="mt-3 text-[11px] text-muted-foreground/80 tracking-widest font-sans not-italic uppercase">出處：{d.scripture[0]?.source}</div>
                </blockquote>
              </div>
            </Card>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section id="pain" className="mx-auto max-w-6xl px-4 pb-8 pt-6 scroll-mt-24">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-8 md:p-10 gold-border bg-card/70 paper-grain hover:border-primary/40 transition-colors">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold flex items-center gap-2 mb-3">
                <Flame className="h-4 w-4 text-destructive" /> Diagnosis
              </div>
              <h2 className="font-display text-3xl leading-tight">結構性漏損：<br/>您或許正經歷這些掙扎</h2>
              <ul className="mt-6 space-y-4 text-muted-foreground readable">
                {d.painPoints.map((p) => (
                  <li key={p} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                    <span className="text-base md:text-lg leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 md:p-10 gold-border bg-card/70 paper-grain hover:border-primary/40 transition-colors">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-primary" /> Solution
              </div>
              <h2 className="font-display text-3xl leading-tight">系統對位：<br/>這份力量將如何修復您</h2>
              <ul className="mt-6 space-y-4 text-muted-foreground readable">
                {d.whyThisDeity.map((x) => (
                  <li key={x} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg leading-relaxed">{x}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <div className="tibetan-divider h-12 opacity-60" aria-hidden />

        {/* PROCESS */}
        <section id="process" className="mx-auto max-w-6xl px-4 pt-10 pb-8 scroll-mt-24">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">Restoration Process</div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground/90">系統修復指引：清晰、如法、溫暖相伴</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {d.process.map((s, idx) => (
              <Card key={s.title} className="p-8 gold-border bg-card/70 paper-grain relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 text-7xl font-display text-primary/5 pointer-events-none group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <div className="font-display text-2xl text-primary relative z-10">{s.title}</div>
                <div className="mt-4 readable text-muted-foreground text-base leading-loose relative z-10">{s.body}</div>
              </Card>
            ))}
          </div>
        </section>

        <div className="tibetan-divider h-12 opacity-60" aria-hidden />

        {/* RITUAL & TESTIMONIALS */}
        {d.ritual ? (
          <section id="ritual" className="mx-auto max-w-6xl px-4 pt-10 pb-8 scroll-mt-24">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">Heritage & Evidence</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary">{d.ritual.title}</h2>
            <p className="mt-4 readable text-muted-foreground max-w-2xl text-lg">
              以下為我們為您代為修持的儀軌核心。透過嚴謹的能量對位，讓修復真實發生。
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-start">
              
              <Card className="gold-border bg-card/70 paper-grain overflow-hidden h-full flex flex-col">
                <AspectRatio ratio={16 / 10}>
                  <img
                    src={d.ritual.image}
                    alt={d.ritual.imageAlt}
                    className="h-full w-full object-cover bg-background/30"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="p-6 md:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="font-display text-2xl text-foreground/90">{d.ritual.title}</div>
                    {d.ritual.note ? (
                      <div className="mt-3 text-sm text-muted-foreground readable italic leading-relaxed">{d.ritual.note}</div>
                    ) : null}

                    <div className="mt-6 rounded-lg border border-primary/20 bg-background/50 p-5 md:p-6 shadow-inner">
                      <RitualMarkdown mdPath={d.ritual.mdPath} />
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/40">
                    <div className="flex items-center gap-2">
                      <a href={d.ritual.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex w-full sm:w-auto">
                        <Button variant="outline" className="h-11 w-full sm:px-6 gap-2 hover:bg-primary/10 transition-colors text-primary border-primary/30 tracking-widest text-xs font-bold">
                          查閱經典文獻出處 <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                    {d.ritual.license ? (
                      <div className="mt-3 text-[10px] text-muted-foreground opacity-60 tracking-wider">授權：{d.ritual.license}</div>
                    ) : null}
                  </div>
                </div>
              </Card>

              <Card className="p-8 md:p-12 gold-border bg-card/70 paper-grain flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Quote className="w-5 h-5 text-primary opacity-80" />
                    <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Real Transformations</div>
                  </div>
                  <h3 className="font-display text-3xl text-foreground/90">這些微光，也曾照亮相似的掙扎</h3>
                  <p className="mt-3 text-base text-muted-foreground readable italic">
                    他們也曾走過焦慮與迷惘，直到這套修復系統溫柔地承接了不安。
                  </p>
                </div>

                <div className="mt-12 flex flex-col gap-10 flex-1 relative z-10 pl-2 md:pl-4">
                  {displayTestimonials.map((t: any, idx: number) => (
                    <div 
                      key={idx} 
                      className="relative pl-6 border-l-[2px] border-primary/20 hover:border-primary/60 transition-colors duration-500 group"
                    >
                      <div className="absolute -left-[7px] top-2 w-[12px] h-[12px] rounded-full bg-background border-[2px] border-primary/60 group-hover:bg-primary/40 transition-colors duration-300"></div>
                      
                      <div className="font-display text-2xl text-foreground/90 leading-snug">{t.title}</div>
                      
                      <p className="mt-3 text-base text-muted-foreground leading-loose readable">
                        「{t.body}」
                      </p>
                      
                      <div className="mt-5 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-primary/40"></span>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/80">{t.by}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center relative z-10">
                  <Link href="/proof">
                    <Button variant="outline" className="w-full h-14 text-sm tracking-widest font-bold hover:bg-primary/5 text-foreground hover:text-primary transition-colors border border-primary/20">
                      閱讀更多生命轉變實證 <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {d.rituals && d.rituals.length > 0 && (
              <div className="mt-16">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-primary opacity-80" />
                  <h3 className="font-display text-2xl md:text-3xl text-foreground/90">修復現場：實境光影紀實</h3>
                </div>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
                  {d.rituals.map((r) => (
                    <Card key={r.id} className="overflow-hidden gold-border bg-card/70 paper-grain group flex flex-col border-primary/30 hover:border-primary/70 transition-all duration-500">
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={r.img}
                          alt={r.alt}
                          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          loading="lazy"
                        />
                      </AspectRatio>
                      <div className="p-6 flex-1 flex flex-col justify-center border-t border-border/40 bg-background/40 backdrop-blur-sm">
                        <div className="font-display text-xl text-primary">{r.alt}</div>
                        <div className="mt-2 text-sm text-muted-foreground readable leading-relaxed">{r.caption}</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : null}

        <div className="tibetan-divider h-12 opacity-60" aria-hidden />

        {/* PLANS */}
        <section id="plans" className="mx-auto max-w-6xl px-4 pt-12 pb-16 scroll-mt-24">
          
          <Card className="mb-10 p-8 md:p-10 gold-border bg-background/50 border-primary/40 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-primary/60"></div>
            <div className="text-[10px] md:text-xs tracking-[0.3em] text-primary mb-4 font-bold uppercase">【 寫在您決定啟動修復之前 】</div>
            <p className="text-muted-foreground readable text-base md:text-lg leading-loose max-w-4xl">
              我們知道，在這繁華的網路世界，您可能看過無數名師與神蹟保證。但滿願藏庫是一群在台北堅持<strong className="text-foreground">不支薪、不造神</strong>的志工。我們每週的廣告費不到一千元，因為大家付出的每一分錢，我們都必須實實在在地匯往西藏換成莊嚴供品。<br/><br/>
              如果您讀到了這裡，請相信，這不是演算法的推薦，而是這套清淨系統與您的甚深對位。
            </p>
          </Card>

          <div className="mb-10 p-6 md:p-8 rounded-xl border border-primary/40 bg-primary/5 relative overflow-hidden group shadow-inner">
            <div className="absolute top-0 right-0 p-6 opacity-5 font-display text-8xl text-primary pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-12">
              ✦
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-primary text-primary-foreground gold-border animate-pulse px-3 py-1 font-bold tracking-widest">本月限定</Badge>
              <span className="font-display text-xl md:text-2xl text-foreground/90">啟動修復，雙重加碼「藥師佛息災煙供」</span>
            </div>
            <p className="text-base text-muted-foreground readable leading-relaxed max-w-3xl">
              現在登記下方任一 {d.name} 方案，系統將自動為您列入每週六的藥師佛煙供名單。讓本尊的針對性修復與藥師佛的底層息災，為您建構雙重防禦。
            </p>
          </div>

          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">Restoration Plans</div>
              <h2 className="font-display text-3xl md:text-4xl">尋找最精準的對位方案</h2>
              <p className="mt-3 readable text-muted-foreground max-w-prose text-lg">
                若您感到遲疑，可先從「推薦」路徑開始；或選擇入門方案，溫柔地穩住當下狀態。
              </p>
            </div>
          </div>

          {/* QUICK PICK */}
          <Card className="mb-10 p-6 md:p-8 gold-border bg-card/70 paper-grain">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-4">直覺導航（給需要迅速安頓的您）</div>
            <div className="grid gap-4 md:grid-cols-3">
              <button type="button" className="block text-left" onClick={() => scrollToId("plan-hot")}>
                <Button className="h-14 w-full gold-border font-bold text-base tracking-widest shadow-md transition-transform hover:scale-[1.02] active:scale-95 bg-primary/10 text-foreground hover:bg-primary/20">
                  深切共鳴：{hot.name} <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </button>
              <button type="button" className="block text-left" onClick={() => scrollToId("plan-cheap")}>
                <Button variant="outline" className="h-14 w-full gold-border hover:bg-primary/5 transition-colors text-base tracking-widest">
                  溫柔安頓：{cheapest.name}
                </Button>
              </button>
              <button type="button" className="block text-left" onClick={() => scrollToId("plan-pricy")}>
                <Button variant="outline" className="h-14 w-full gold-border hover:bg-primary/5 transition-colors text-base tracking-widest">
                  深耕轉化：{priciest.name}
                </Button>
              </button>
            </div>
            <div className="mt-5 text-xs text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> 登記完成即保留名額。若需梳理祈願內容，可透過 FB 私訊由志工溫暖陪伴。
            </div>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            {d.plans.map((p) => {
              const planAnchor = p.id === hot.id ? "plan-hot" : p.id === cheapest.id ? "plan-cheap" : p.id === priciest.id ? "plan-pricy" : undefined;
              return (
                <Card
                  key={p.id}
                  id={planAnchor}
                  className="p-8 md:p-10 gold-border bg-card/70 paper-grain scroll-mt-28 flex flex-col justify-between transition-all duration-500 hover:border-primary/80 hover:shadow-[0_0_30px_rgba(var(--primary),0.05)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <div className="font-display text-3xl">{p.name}</div>
                          {p.hot ? <Badge className="gold-border bg-primary text-primary-foreground font-bold tracking-widest text-[10px] px-2 py-0.5">系統推薦</Badge> : null}
                          {p.badge ? <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-bold tracking-widest text-[10px] px-2 py-0.5">{p.badge}</Badge> : null}
                        </div>
                        <div className="text-sm text-primary/80 font-bold tracking-wide">精準對位：{p.suitableFor.join("、")}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-bold mb-1">修復投資</div>
                        <div className="font-display text-4xl text-primary">{p.price}</div>
                      </div>
                    </div>

                    <p className="mt-6 readable text-muted-foreground text-base leading-relaxed">{p.blurb}</p>

                    {p.details?.length ? (
                      <div className="mt-6">
                        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-3 border-b border-border/40 pb-2">如法內容（工程細節）</div>
                        <ul className="space-y-3 text-sm md:text-base text-muted-foreground readable">
                          {p.details.map((x) => (
                            <li key={x} className="flex gap-3 items-start">
                              <span className="mt-[0.4rem] h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span className="leading-relaxed">{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-8 pt-8 border-t border-border/40">
                    <div className="mb-6 p-4 bg-background/60 rounded-lg border border-primary/20 text-xs text-muted-foreground leading-relaxed shadow-inner">
                      <Info className="w-4 h-4 inline mr-2 text-primary mb-0.5" />
                      祈願越真實，對位越精準！請於綠界<strong className="text-foreground/90 font-bold">備註欄</strong>寫下您的：<span className="text-foreground font-bold">姓名、居住地與目前的生命掙扎</span>。
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 text-center">
                        
                        {/* 🟢 溫暖陪伴感 Dialog (與 Pay.tsx 完全一致) */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="h-14 w-full text-base font-bold tracking-[0.15em] uppercase gold-border bg-primary text-primary-foreground shadow-lg transition-all hover:scale-[1.02] active:scale-95">
                              確認護持意願，請志工代為造冊 <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md p-0 overflow-hidden bg-background border-primary/30 shadow-2xl">
                            
                            {/* 彈窗頭部：感性安撫 */}
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

                            {/* 彈窗內容：1-2 步驟溫暖指引 */}
                            <div className="p-6 md:p-8 space-y-7">
                              {/* 步驟 1 */}
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
                                    祈求{d.name}加持，{p.name.split(/[｜：]/)[0]}。
                                  </div>
                                </div>
                              </div>

                              {/* 步驟 2 */}
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
                                  href={p.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="block w-full"
                                  onClick={() => {
                                    if (typeof window !== "undefined") {
                                      window.gtag?.('event', 'begin_checkout', {
                                        currency: 'TWD',
                                        value: p.price,
                                        items: [{ item_name: `${d.name}-${p.name}`, price: p.price }]
                                      });
                                      window.fbq?.('track', 'InitiateCheckout', {
                                        content_name: p.name,
                                        value: p.price,
                                        currency: 'TWD'
                                      });
                                    }
                                  }}
                                >
                                  <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold shadow-xl transition-all active:scale-95 tracking-[0.15em] group">
                                    準備好了，前往綠界安全通道 <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                  </Button>
                                </a>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <div className="flex flex-col items-center gap-2.5 pt-4 mt-4 border-t border-border/30">
                          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-bold tracking-widest">
                            <Lock className="w-3 h-3 text-green-600/80" />
                            綠界 256-bit SSL 安全加密
                          </div>
                          <div className="flex items-center gap-3 opacity-50 grayscale scale-90">
                            <span className="text-[10px] font-bold tracking-widest flex items-center gap-1.5 uppercase">
                              <CreditCard className="w-3.5 h-3.5" /> VISA / MASTER / JCB / 超商代碼
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <Link href="/pay" className="flex-1 sm:flex-none">
                        <Button variant="outline" className="h-14 w-full gold-border hover:bg-primary/5 transition-colors text-sm tracking-widest font-bold">
                          了解完整修復說明
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 pt-10 pb-16 scroll-mt-24">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">FAQ Consultation</div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground/90">顧問釋疑</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[0, 1].map((col) => (
              <Card key={col} className="p-3 md:p-4 gold-border bg-card/70 paper-grain">
                <Accordion type="single" collapsible className="w-full">
                  {d.faq
                    .filter((_, idx) => idx % 2 === col)
                    .map((f) => (
                      <AccordionItem key={f.q} value={f.q} className="px-4 border-border/50">
                        <AccordionTrigger className="font-display text-left text-lg hover:text-primary transition-colors py-5 leading-relaxed">{f.q}</AccordionTrigger>
                        <AccordionContent className="readable text-muted-foreground text-base leading-loose pb-5">{f.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </Card>
            ))}
          </div>
        </section>

        {/* CROSS SELL */}
        <section className="mx-auto max-w-6xl px-4 pb-32">
          <Card className="p-8 md:p-10 gold-border bg-card/70 paper-grain">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">Explore Other Dimensions</div>
            <div className="font-display text-3xl text-foreground/90">若您的靈魂更共鳴於以下維度</div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {d.crossSell.map((x) => {
                const t = DEITIES.find((k) => k.key === x.to);
                if (!t) return null;
                return (
                  <Link key={x.to} href={`/deity/${x.to}`} aria-label={`前往 ${t.name} 頁面`}>
                    <Card className="p-7 gold-border bg-background/30 hover:bg-primary/10 transition-all duration-500 cursor-pointer group">
                      <div className="font-display text-2xl transition-colors group-hover:opacity-80" style={{ color: t.themeColor.accent }}>{x.title}</div>
                      <div className="mt-3 text-muted-foreground readable text-base">{x.desc}</div>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-transform group-hover:translate-x-2" style={{ color: t.themeColor.accent }}>
                        尋找 {t.name} <ArrowRight className="h-4 w-4" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </Card>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
}