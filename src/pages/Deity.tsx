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
  Quote
} from "lucide-react";

import { DEITIES, HOME_TESTIMONIALS, type DeityKey } from "@/lib/siteData";

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function anchorBtn(label: string, targetId: string, Icon: any) {
  return (
    <button type="button" className="block text-left" onClick={() => scrollToId(targetId)}>
      <Button
        variant="outline"
        className="h-11 w-full justify-start gap-2 gold-border bg-card/50 hover:bg-accent/30 transition-colors"
      >
        <Icon className="h-4 w-4" />
        <span className="font-semibold">{label}</span>
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
        <main className="mx-auto max-w-3xl px-4 py-16">
          <Card className="p-8 gold-border bg-card/70 paper-grain">
            <div className="font-display text-2xl">未知的路徑</div>
            <p className="mt-3 text-muted-foreground readable">請從首頁重新探索與您共鳴的本尊。</p>
            <div className="mt-6">
              <Link href="/">
                <Button className="gold-border">回到首頁</Button>
              </Link>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  // Quick pick helpers
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
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> 回首頁
          </Link>

          <div className="mt-4 grid gap-6 md:grid-cols-[1.08fr_.92fr] md:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-card/60 text-primary border-primary" style={{ borderWidth: '1px' }}>
                  {d.primaryIntent}
                </Badge>
                <Badge className="gold-border bg-card/60 text-muted-foreground">{d.heroKicker}</Badge>
              </div>

              <h1 className="mt-5 font-display text-4xl md:text-5xl">{d.name}</h1>
              <div className="mt-2 text-muted-foreground">{d.subtitle}</div>

              <p className="mt-5 readable text-muted-foreground max-w-prose">{d.promise}</p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <button type="button" onClick={() => scrollToId("plans")}>
                  <Button className="h-12 px-6 font-bold tracking-[0.22em] uppercase gold-border transition-transform hover:scale-[1.02] active:scale-95">
                    探索護持路徑 <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </button>
                <Link href="/pay">
                  <Button variant="outline" className="h-12 px-6 gold-border hover:bg-primary/10">
                    檢視完整護持總覽
                  </Button>
                </Link>
              </div>

              {/* TOC */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {anchorBtn("生命掙扎與啟發", "pain", Sparkles)}
                {anchorBtn("修持指引", "process", ClipboardList)}
                {d.ritual ? anchorBtn("傳承儀軌與見證", "ritual", ExternalLink) : null}
                {anchorBtn("護持方案", "plans", ShieldCheck)}
                {anchorBtn("探索釋疑", "faq", HelpCircle)}
              </div>
            </div>

            <Card className="gold-border bg-card/70 paper-grain overflow-hidden">
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="block w-full text-left" aria-label={`查看 ${d.name} 圖片大圖`}>
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={d.heroImage}
                        alt={`${d.name} 唐卡形象示意`}
                        className="h-full w-full object-contain bg-background/40 transition-transform duration-500 hover:scale-105"
                        loading="eager"
                      />
                    </AspectRatio>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl">
                  <DialogHeader>
                    <DialogTitle className="font-display">{d.name}｜莊嚴法相</DialogTitle>
                  </DialogHeader>
                  <div className="mt-2">
                    <img
                      src={d.heroImage}
                      alt={`${d.name} 唐卡形象示意（大圖）`}
                      className="w-full h-auto rounded-md"
                      loading="lazy"
                    />
                    <div className="mt-2 text-xs text-muted-foreground">點擊主圖可開啟大圖，感受神聖光芒的完整照耀。</div>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="p-6">
                <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">經典依據（節錄）</div>
                <blockquote className="mt-3 border-l-2 border-primary/50 pl-4 readable text-muted-foreground">
                  {d.scripture[0]?.quote}
                  <div className="mt-3 text-xs text-muted-foreground/80">出處：{d.scripture[0]?.source}</div>
                </blockquote>
                <div className="mt-4">
                  <Link href="/sutra" className="text-sm underline text-muted-foreground hover:text-foreground transition-colors">
                    探索更多經典智慧
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section id="pain" className="mx-auto max-w-6xl px-4 pb-4 scroll-mt-24">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-7 gold-border bg-card/70 paper-grain">
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">您或許正經歷</div>
              <h2 className="mt-2 font-display text-2xl">這些生命的掙扎</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground readable">
                {d.painPoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Flame className="h-5 w-5 text-primary mt-0.5 flex-none" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-7 gold-border bg-card/70 paper-grain">
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">這份力量將如何啟發您</div>
              <h2 className="mt-2 font-display text-2xl">讓轉變真實發生</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground readable">
                {d.whyThisDeity.map((x) => (
                  <li key={x} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-none" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <div className="tibetan-divider h-9 opacity-70" aria-hidden />

        {/* PROCESS */}
        <section id="process" className="mx-auto max-w-6xl px-4 pt-10 pb-4 scroll-mt-24">
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">護持指引</div>
          <h2 className="mt-2 font-display text-3xl">三步安頓：清晰、如法、溫暖相伴</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {d.process.map((s) => (
              <Card key={s.title} className="p-7 gold-border bg-card/70 paper-grain">
                <div className="font-display text-xl text-primary">{s.title}</div>
                <div className="mt-3 readable text-muted-foreground">{s.body}</div>
              </Card>
            ))}
          </div>
        </section>

        <div className="tibetan-divider h-9 opacity-70" aria-hidden />

        {/* RITUAL & TESTIMONIALS */}
        {d.ritual ? (
          <section id="ritual" className="mx-auto max-w-6xl px-4 pt-10 pb-4 scroll-mt-24">
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">傳承儀軌與見證</div>
            <h2 className="mt-2 font-display text-3xl text-primary">{d.ritual.title}</h2>
            <p className="mt-3 readable text-muted-foreground max-w-prose">
              下列為我們為您代為修持的儀軌要點；透過如法的祈請，讓生命看見真實的轉變。
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-[0.95fr_1.05fr] md:items-start">
              
              {/* 左側：儀軌細節 (已整合 Markdown 渲染) */}
              <Card className="gold-border bg-card/70 paper-grain overflow-hidden h-full flex flex-col">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={d.ritual.image}
                    alt={d.ritual.imageAlt}
                    className="h-full w-full object-cover bg-background/30"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="font-display text-xl">{d.ritual.title}</div>
                    {d.ritual.note ? (
                      <div className="mt-2 text-sm text-muted-foreground readable">{d.ritual.note}</div>
                    ) : null}

                    {/* Markdown 內容渲染區塊 */}
                    <div className="mt-5 rounded-md border border-border/70 bg-background/30 p-4 md:p-6">
                      <RitualMarkdown mdPath={d.ritual.mdPath} />
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40">
                    <div className="flex items-center gap-2">
                      <a href={d.ritual.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex">
                        <Button variant="ghost" className="h-9 px-3 gap-2 hover:bg-primary/10 transition-colors text-primary border border-primary/20">
                          查閱原文出處 <ExternalLink className="h-3.5 w-3.5" />
                        </Button>
                      </a>
                    </div>
                    {d.ritual.license ? (
                      <div className="mt-2 text-[11px] text-muted-foreground opacity-70">授權：{d.ritual.license}</div>
                    ) : null}
                  </div>
                </div>
              </Card>

              {/* 右側：回饋文見證 */}
              <Card className="p-7 md:p-9 gold-border bg-card/70 paper-grain flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Quote className="w-4 h-4 text-primary opacity-80" />
                    <div className="text-xs tracking-[0.26em] uppercase text-primary font-medium">Resonance</div>
                  </div>
                  <h3 className="font-display text-2xl text-foreground/90">這些微光，也曾照亮相似的掙扎</h3>
                  <p className="mt-2 text-[13px] text-muted-foreground readable">
                    他們也曾走過焦慮與迷惘，直到這份願力溫柔地承接了不安。
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-8 flex-1 relative z-10 pl-2">
                  {displayTestimonials.map((t: any, idx: number) => (
                    <div 
                      key={idx} 
                      className="relative pl-6 border-l-[1.5px] border-primary/20 hover:border-primary/60 transition-colors duration-500 group"
                    >
                      <div className="absolute -left-[5px] top-1.5 w-[8px] h-[8px] rounded-full bg-background border border-primary/60 group-hover:bg-primary/30 transition-colors duration-300"></div>
                      
                      <div className="font-display text-[1.15rem] text-foreground/90 leading-snug">{t.title}</div>
                      
                      <p className="mt-2.5 text-[14px] text-muted-foreground leading-loose readable">
                        {t.body}
                      </p>
                      
                      <div className="mt-4 flex items-center gap-3">
                        <span className="w-6 h-[1px] bg-primary/40"></span>
                        <span className="text-[11px] tracking-[0.18em] text-primary/80">{t.by}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 text-center relative z-10">
                  <Link href="/proof">
                    <Button variant="ghost" className="w-full text-sm hover:bg-primary/5 hover:text-primary transition-colors border border-transparent hover:border-primary/20">
                      閱讀更多生命轉變的故事 <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {/* 🟢 新增：實修光影紀實 (3 張圖片的 Gallery) */}
            {d.rituals && d.rituals.length > 0 && (
              <div className="mt-10">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary opacity-80" />
                  <h3 className="font-display text-2xl text-foreground/90">實修光影與紀實</h3>
                </div>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-3">
                  {d.rituals.map((r) => (
                    <Card key={r.id} className="overflow-hidden gold-border bg-card/70 paper-grain group flex flex-col border-primary/30 hover:border-primary/60 transition-colors">
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={r.img}
                          alt={r.alt}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </AspectRatio>
                      <div className="p-5 flex-1 flex flex-col justify-center border-t border-border/40">
                        <div className="font-display text-lg text-primary">{r.alt}</div>
                        <div className="mt-1.5 text-[13px] text-muted-foreground readable leading-relaxed">{r.caption}</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : null}

        <div className="tibetan-divider h-9 opacity-70" aria-hidden />

        {/* PLANS */}
        <section id="plans" className="mx-auto max-w-6xl px-4 pt-12 pb-6 scroll-mt-24">
          
          <Card className="mb-6 p-6 md:p-8 gold-border bg-background/50 border-primary/40 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-primary/60"></div>
            <div className="text-sm tracking-[0.2em] text-primary mb-3 font-bold">【 寫在您決定啟程之前 】</div>
            <p className="text-muted-foreground readable leading-relaxed max-w-3xl">
              我們知道，在這繁華的網路世界，您可能看過無數名師與神蹟保證。但滿願藏庫是一群在台北堅持不支薪、不造神的凡夫。我們每週的廣告費不到一千元，因為大家繳交的每一分錢，我們都想實實在在地匯往西藏換成莊嚴供品。<br/><br/>
              如果您讀到了這裡，請相信，這不是演算法的推薦，是這份清淨傳承與您的甚深緣分。
            </p>
          </Card>

          <div className="mb-8 p-5 rounded-lg border border-primary/40 bg-primary/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-6xl text-primary pointer-events-none transition-transform group-hover:scale-110">
              ✦
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary text-primary-foreground gold-border animate-pulse">本月限定</Badge>
              <span className="font-display text-lg text-foreground/90">護持本尊，加碼贈「藥師佛每週息災煙供」</span>
            </div>
            <p className="text-sm text-muted-foreground readable">
              現在登記下方任一 {d.name} 方案，我們將額外為您列入每週六的藥師佛煙供名單，讓本尊的大願與藥師佛的息災為您雙重護持。
            </p>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Plans</div>
              <h2 className="mt-2 font-display text-3xl">尋找最與您共鳴的路徑</h2>
              <p className="mt-3 readable text-muted-foreground max-w-prose">
                若您感到遲疑，可先從「推薦」路徑開始；或選擇入門方案，溫柔地穩住當下狀態。
              </p>
            </div>
          </div>

          {/* QUICK PICK */}
          <Card className="mt-6 p-6 gold-border bg-card/70 paper-grain">
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">直覺指引（給需要迅速安頓的您）</div>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <button type="button" className="block text-left" onClick={() => scrollToId("plan-hot")}>
                <Button className="h-12 w-full gold-border font-bold shadow-sm transition-transform hover:scale-[1.02] active:scale-95">
                  深切共鳴：{hot.name} <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </button>
              <button type="button" className="block text-left" onClick={() => scrollToId("plan-cheap")}>
                <Button variant="outline" className="h-12 w-full gold-border hover:bg-primary/10 transition-colors">
                  溫柔安頓：{cheapest.name}
                </Button>
              </button>
              <button type="button" className="block text-left" onClick={() => scrollToId("plan-pricy")}>
                <Button variant="outline" className="h-12 w-full gold-border hover:bg-primary/10 transition-colors">
                  深耕轉化：{priciest.name}
                </Button>
              </button>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              登記完成即保留名額。若需梳理祈願內容，可透過 Facebook 私訊，我們將溫暖陪伴您。
            </div>
          </Card>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {d.plans.map((p) => {
              const planAnchor = p.id === hot.id ? "plan-hot" : p.id === cheapest.id ? "plan-cheap" : p.id === priciest.id ? "plan-pricy" : undefined;
              return (
                <Card
                  key={p.id}
                  id={planAnchor}
                  className="p-7 gold-border bg-card/70 paper-grain scroll-mt-28 flex flex-col justify-between transition-colors hover:border-primary/80"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className="font-display text-2xl">{p.name}</div>
                          {p.hot ? <Badge className="gold-border bg-primary text-primary-foreground">推薦</Badge> : null}
                          {p.badge ? <Badge variant="secondary" className="bg-secondary text-secondary-foreground">{p.badge}</Badge> : null}
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">適合：{p.suitableFor.join("、")}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">護持金</div>
                        <div className="mt-1 font-display text-3xl text-primary">{p.price}</div>
                      </div>
                    </div>

                    <p className="mt-4 readable text-muted-foreground">{p.blurb}</p>

                    {p.details?.length ? (
                      <div className="mt-4">
                        <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">如法內容（節錄）</div>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground readable">
                          {p.details.map((x) => (
                            <li key={x} className="flex gap-2">
                              <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-primary flex-none" />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-6">
                    <Separator className="mb-5 bg-border/50" />
                    
                    <div className="mb-4 p-3 bg-background/60 rounded-md border border-primary/20 text-[11px] text-muted-foreground leading-relaxed">
                      <Info className="w-3 h-3 inline mr-1 text-primary mb-0.5" />
                      祈願越真實越好！登記時請於<strong className="text-foreground/90">備註欄</strong>寫下您的：<span className="text-foreground">姓名、居住地與目前的生命掙扎</span>。
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 text-center">
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              className="h-12 w-full font-bold tracking-[0.1em] gold-border bg-primary text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95"
                            >
                              確認護持意願，請志工代為造冊 <ExternalLink className="h-4 w-4 ml-2" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md p-0 overflow-hidden bg-[#fffaf0] border-[#d4b483]">
                            <DialogHeader className="bg-[#fffaf0] p-6 pb-4 border-b border-[#d4b483]">
                              <DialogTitle className="text-xl font-bold text-[#8b4513] flex items-center justify-center gap-2">
                                <span>✍️</span> 綠界填寫預演
                              </DialogTitle>
                              <p className="text-sm text-[#8b4513] opacity-80 text-center mt-2 font-medium">
                                為確保造冊無誤，請先看過<span className="text-red-700">備註欄填寫範例</span>再前往啟動
                              </p>
                            </DialogHeader>

                            <div className="p-6">
                              <div className="bg-white rounded-xl p-5 mb-6 border border-gray-200 shadow-inner">
                                <p className="text-sm text-gray-600 mb-4 text-center font-bold">
                                  進入綠界後請滑到<span className="text-red-600 text-base">最下方</span>，照著下圖格式填寫：
                                </p>
                                
                                <div className="bg-white border-2 border-red-500 rounded-lg p-5 relative shadow-sm mx-1">
                                  <div className="absolute -top-3 left-4 bg-red-600 text-white text-[11px] px-3 py-0.5 rounded-full font-bold shadow-md tracking-wider">
                                    必填位置：備註 (Remark)
                                  </div>
                                  <div className="font-mono text-gray-800 text-[14px] leading-relaxed mt-2 font-bold">
                                    姓名：王小明<br/>
                                    生辰：50年1月1日<br/>
                                    祈願：祈求{d.name}加持，{p.name.split('｜')[0]}。
                                  </div>
                                  <div className="absolute inset-0 border-4 border-red-400 opacity-20 animate-pulse rounded-lg pointer-events-none"></div>
                                </div>
                              </div>

                              <a
                                href={p.url}
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full"
                                aria-label={`前往外部付款頁：${p.name}`}
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
                                <Button className="w-full h-14 bg-[#b22222] hover:bg-red-800 text-white text-lg font-bold rounded-full shadow-lg transition-all active:scale-95">
                                  確認瞭解，前往綠界登記 <ExternalLink className="h-5 w-5 ml-2" />
                                </Button>
                              </a>

                              <div className="mt-4 text-center">
                                <p className="text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
                                  <Lock className="w-3 h-3 text-green-600" /> 點擊後將跳轉至綠界安全支付
                                </p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <div className="flex flex-col items-center gap-2 pt-3 mt-3 border-t border-border/30">
                          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
                            <Lock className="w-3 h-3 text-green-600/80" />
                            綠界 256-bit SSL 安全加密護持
                          </div>
                          <div className="flex items-center gap-3 opacity-60 grayscale scale-90">
                            <span className="text-[9px] font-bold tracking-tighter flex items-center gap-1">
                              <CreditCard className="w-3 h-3" /> VISA / MASTER / JCB / 超商代碼
                            </span>
                          </div>
                          <div className="text-[10px] text-center text-muted-foreground/70 mt-1">
                            <Clock className="w-3 h-3 inline mr-1 mb-0.5" />
                            志工於晚間靜心造冊，隔週公佈名錄
                          </div>
                        </div>
                      </div>
                      
                      <Link href="/pay" className="flex-1 sm:flex-none">
                        <Button variant="outline" className="h-12 w-full gold-border hover:bg-primary/10 transition-colors">
                          了解完整護持說明
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
        <section id="faq" className="mx-auto max-w-6xl px-4 pt-10 pb-8 scroll-mt-24">
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">FAQ</div>
          <h2 className="mt-2 font-display text-3xl">探索釋疑</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[0, 1].map((col) => (
              <Card key={col} className="p-2 gold-border bg-card/70 paper-grain">
                <Accordion type="single" collapsible className="w-full">
                  {d.faq
                    .filter((_, idx) => idx % 2 === col)
                    .map((f) => (
                      <AccordionItem key={f.q} value={f.q} className="px-4 border-border/50">
                        <AccordionTrigger className="font-display text-left hover:text-primary transition-colors">{f.q}</AccordionTrigger>
                        <AccordionContent className="readable text-muted-foreground">{f.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </Card>
            ))}
          </div>
        </section>

        {/* CROSS SELL */}
        <section className="mx-auto max-w-6xl px-4 pb-32">
          <Card className="p-7 gold-border bg-card/70 paper-grain">
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">探索其他緣分</div>
            <div className="mt-2 font-display text-2xl">若您的靈魂更共鳴於以下頻率</div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {d.crossSell.map((x) => {
                const t = DEITIES.find((k) => k.key === x.to);
                if (!t) return null;
                return (
                  <Link key={x.to} href={`/deity/${x.to}`} aria-label={`前往 ${t.name} 頁面`}>
                    <Card className="p-6 gold-border bg-background/35 hover:bg-primary/10 transition-colors cursor-pointer group">
                      <div className="font-display text-xl transition-colors group-hover:opacity-80" style={{ color: t.themeColor.accent }}>{x.title}</div>
                      <div className="mt-2 text-muted-foreground readable">{x.desc}</div>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-1" style={{ color: t.themeColor.accent }}>
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