import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";

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
} from "lucide-react";

import { useEffect, useState } from "react";

import { DEITIES, type DeityKey } from "@/lib/siteData";

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function anchorBtn(label: string, targetId: string, Icon: any) {
  return (
    <button type="button" className="block text-left" onClick={() => scrollToId(targetId)}>
      <Button
        variant="outline"
        className="h-11 w-full justify-start gap-2 gold-border bg-card/50 hover:bg-accent/30"
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
            <div className="font-display text-2xl">找不到此頁</div>
            <p className="mt-3 text-muted-foreground readable">請從首頁重新選擇本尊。</p>
            <div className="mt-6">
              <Link href="/">
                <Button className="gold-border">回首頁</Button>
              </Link>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  const [ritualText, setRitualText] = useState<string>("");
  const [ritualLoading, setRitualLoading] = useState(false);
  const [ritualError, setRitualError] = useState<string>("");

  useEffect(() => {
    let alive = true;
    async function load() {
      if (!d?.ritual?.mdPath) {
        setRitualText("");
        setRitualError("");
        return;
      }
      try {
        setRitualLoading(true);
        setRitualError("");
        const res = await fetch(`/rituals/${d.ritual.mdPath}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const txt = await res.text();
        if (!alive) return;
        setRitualText(txt);
      } catch (e: any) {
        if (!alive) return;
        setRitualError("載入儀軌內容失敗，請稍後再試。");
        setRitualText("");
      } finally {
        if (alive) setRitualLoading(false);
      }
    }
    load();
    return () => {
      alive = false;
    };
  }, [d.key]);

  // Quick pick helpers
  const cheapest = [...d.plans].sort((a, b) => a.price - b.price)[0];
  const priciest = [...d.plans].sort((a, b) => b.price - a.price)[0];
  const hot = d.plans.find((p) => p.hot) ?? d.plans[0];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> 回首頁
          </Link>

          <div className="mt-4 grid gap-6 md:grid-cols-[1.08fr_.92fr] md:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="gold-border bg-card/60">{d.primaryIntent}</Badge>
                <Badge className="gold-border bg-card/60 text-muted-foreground">{d.heroKicker}</Badge>
              </div>

              <h1 className="mt-5 font-display text-4xl md:text-5xl">{d.name}</h1>
              <div className="mt-2 text-muted-foreground">{d.subtitle}</div>

              <p className="mt-5 readable text-muted-foreground max-w-prose">{d.promise}</p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <button type="button" onClick={() => scrollToId("plans")}>
                  <Button className="h-12 px-6 font-bold tracking-[0.22em] uppercase gold-border">
                    直接選方案 <ArrowRight className="h-4 w-4" />
                  </Button>
                </button>
                <Link href="/pay">
                  <Button variant="outline" className="h-12 px-6 gold-border">
                    看全收費表
                  </Button>
                </Link>
              </div>

              {/* TOC */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {anchorBtn("痛點與對治", "pain", Sparkles)}
                {anchorBtn("流程怎麼做", "process", ClipboardList)}
                {d.ritual ? anchorBtn("正統儀軌", "ritual", ExternalLink) : null}
                {anchorBtn("方案與價格", "plans", ShieldCheck)}
                {anchorBtn("常見問題", "faq", HelpCircle)}
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
                        className="h-full w-full object-contain bg-background/40"
                        loading="eager"
                      />
                    </AspectRatio>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl">
                  <DialogHeader>
                    <DialogTitle className="font-display">{d.name}｜圖片大圖</DialogTitle>
                  </DialogHeader>
                  <div className="mt-2">
                    <img
                      src={d.heroImage}
                      alt={`${d.name} 唐卡形象示意（大圖）`}
                      className="w-full h-auto rounded-md"
                      loading="lazy"
                    />
                    <div className="mt-2 text-xs text-muted-foreground">點擊主圖可開啟大圖，確保神明形象完整呈現。</div>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="p-6">
                <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">經典依據（節錄）</div>
                <blockquote className="mt-3 border-l-2 border-border pl-4 readable text-muted-foreground">
                  {d.scripture[0]?.quote}
                  <div className="mt-3 text-xs text-muted-foreground/80">出處：{d.scripture[0]?.source}</div>
                </blockquote>
                <div className="mt-4">
                  <Link href="/sutra" className="text-sm underline text-muted-foreground hover:text-foreground">
                    看更多經典引用
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
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">你可能正在</div>
              <h2 className="mt-2 font-display text-2xl">卡在這些痛點</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground readable">
                {d.painPoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Flame className="h-5 w-5 text-primary mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-7 gold-border bg-card/70 paper-grain">
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">我們會怎麼幫你</div>
              <h2 className="mt-2 font-display text-2xl">把方向拉回可落地</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground readable">
                {d.whyThisDeity.map((x) => (
                  <li key={x} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
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
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">流程</div>
          <h2 className="mt-2 font-display text-3xl">三步完成：清楚、如法、好配合</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {d.process.map((s) => (
              <Card key={s.title} className="p-7 gold-border bg-card/70 paper-grain">
                <div className="font-display text-xl">{s.title}</div>
                <div className="mt-3 readable text-muted-foreground">{s.body}</div>
              </Card>
            ))}
          </div>
        </section>

        <div className="tibetan-divider h-9 opacity-70" aria-hidden />

        {/* RITUAL */}
        {d.ritual ? (
          <section id="ritual" className="mx-auto max-w-6xl px-4 pt-10 pb-4 scroll-mt-24">
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">正統儀軌</div>
            <h2 className="mt-2 font-display text-3xl">本次修持依循的正統儀軌</h2>
            <p className="mt-3 readable text-muted-foreground max-w-prose">
              下列為我們實際依循的儀軌要點（修持依據）與準備項目；全文保留權威來源與出處，確保修持如法。
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-[0.95fr_1.05fr] md:items-start">
              <Card className="gold-border bg-card/70 paper-grain overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={d.ritual.image}
                    alt={d.ritual.imageAlt}
                    className="h-full w-full object-contain bg-background/30"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="p-5">
                  <div className="font-display text-xl">{d.ritual.title}</div>
                  {d.ritual.note ? (
                    <div className="mt-2 text-sm text-muted-foreground readable">{d.ritual.note}</div>
                  ) : null}

                  {(d.ritual.keyPoints?.length || d.ritual.offeringsChecklist?.length || d.ritual.practiceFocus?.length) ? (
                    <div className="mt-5 grid gap-3">
                      {d.ritual.keyPoints?.length ? (
                        <div className="rounded-md border border-border/70 bg-background/30 p-4">
                          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">儀軌要點</div>
                          <ul className="mt-3 space-y-2 text-sm text-muted-foreground readable list-disc list-inside">
                            {d.ritual.keyPoints.map((x) => (
                              <li key={x}>{x}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {d.ritual.offeringsChecklist?.length ? (
                        <div className="rounded-md border border-border/70 bg-background/30 p-4">
                          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">供養準備（我們依此備辦）</div>
                          <ul className="mt-3 space-y-2 text-sm text-muted-foreground readable list-disc list-inside">
                            {d.ritual.offeringsChecklist.map((x) => (
                              <li key={x}>{x}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {d.ritual.practiceFocus?.length ? (
                        <div className="rounded-md border border-border/70 bg-background/30 p-4">
                          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">觀修/持誦重點（修持依據）</div>
                          <ul className="mt-3 space-y-2 text-sm text-muted-foreground readable list-disc list-inside">
                            {d.ritual.practiceFocus.map((x) => (
                              <li key={x}>{x}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="mt-4 flex items-center gap-2">
                    <a href={d.ritual.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex">
                      <Button variant="outline" className="gold-border h-10 gap-2">
                        查看原文出處 <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                  {d.ritual.license ? (
                    <div className="mt-2 text-xs text-muted-foreground">授權：{d.ritual.license}</div>
                  ) : null}
                </div>
              </Card>

              <Card className="p-7 gold-border bg-card/70 paper-grain">
                <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">全文（可複製）</div>
                <div className="mt-4">
                  {ritualLoading ? (
                    <div className="text-sm text-muted-foreground">載入中…</div>
                  ) : ritualError ? (
                    <div className="text-sm text-destructive">{ritualError}</div>
                  ) : (
                    <pre className="max-h-[520px] overflow-auto rounded-md border border-border/70 bg-background/30 p-4 text-sm leading-6 whitespace-pre-wrap">
                      {ritualText}
                    </pre>
                  )}
                </div>
              </Card>
            </div>
          </section>
        ) : null}

        <div className="tibetan-divider h-9 opacity-70" aria-hidden />

        {/* PLANS */}
        <section id="plans" className="mx-auto max-w-6xl px-4 pt-12 pb-6 scroll-mt-24">
          <Card className="mb-6 p-6 md:p-8 gold-border bg-background/50 border-primary/40 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-primary/60"></div>
            <div className="text-sm tracking-[0.2em] text-primary mb-3 font-bold">【 寫在您選擇方案之前 】</div>
            <p className="text-muted-foreground readable leading-relaxed max-w-3xl">
              我們知道，在這繁華的網路世界，您可能看過無數名師與神蹟保證。但滿願藏庫是一群在台北堅持不支薪、不造神的凡夫。我們每週的廣告費不到一千元，因為大家繳交的每一分錢，我們都想實實在在地匯往西藏換成供品。<br/><br/>
              如果您讀到了這裡，請相信，這不是演算法的推薦，是這份清淨傳承與您的緣分。
            </p>
          </Card>

          {/* 活動加碼橫幅 (Banner) */}
          <div className="mt-2 mb-8 p-5 rounded-lg border border-primary/40 bg-primary/5 relative overflow-hidden group">
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
              <h2 className="mt-2 font-display text-3xl">選一個最對位的方案</h2>
              <p className="mt-3 readable text-muted-foreground max-w-prose">
                若你不確定，先選「推薦」那個（已標示）。你也可以先做入門，把狀態穩住。
              </p>
            </div>
          </div>

          {/* QUICK PICK */}
          <Card className="mt-6 p-6 gold-border bg-card/70 paper-grain">
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">快速挑選（不想看太多字就用這個）</div>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <button type="button" className="block text-left" onClick={() => scrollToId("plan-hot")}>
                <Button className="h-12 w-full gold-border font-bold">
                  最多人選：{hot.name} <ArrowRight className="h-4 w-4" />
                </Button>
              </button>
              <button type="button" className="block text-left" onClick={() => scrollToId("plan-cheap")}>
                <Button variant="outline" className="h-12 w-full gold-border">
                  先入門穩住：{cheapest.name}
                </Button>
              </button>
              <button type="button" className="block text-left" onClick={() => scrollToId("plan-pricy")}>
                <Button variant="outline" className="h-12 w-full gold-border">
                  想一次到位：{priciest.name}
                </Button>
              </button>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              付款完成即保留名額。若需更改祈願內容，可透過 Facebook 私訊協助。
            </div>
          </Card>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {d.plans.map((p) => {
              const planAnchor = p.id === hot.id ? "plan-hot" : p.id === cheapest.id ? "plan-cheap" : p.id === priciest.id ? "plan-pricy" : undefined;
              return (
                <Card
                  key={p.id}
                  id={planAnchor}
                  className="p-7 gold-border bg-card/70 paper-grain scroll-mt-28 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className="font-display text-2xl">{p.name}</div>
                          {p.hot ? <Badge className="gold-border bg-primary text-primary-foreground">推薦</Badge> : null}
                          {p.badge ? <Badge variant="secondary">{p.badge}</Badge> : null}
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">適合：{p.suitableFor.join("、")}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">費用</div>
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
                              <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-primary/80 flex-none" />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-6">
                    <Separator className="mb-5" />
                    
                    {/* 保留原本的文字提示 */}
                    <div className="mb-4 p-3 bg-background/60 rounded-md border border-border/50 text-[11px] text-muted-foreground leading-relaxed">
                      <Info className="w-3 h-3 inline mr-1 text-primary mb-0.5" />
                      祈願越具體越好！結帳時請於<strong className="text-foreground/80">備註欄</strong>寫下您的：<span className="text-foreground">姓名、居住地與具體困境</span>。
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 text-center">
                        
                        {/* ★★★ 核心修改區：將單純的跳轉 a 標籤改為包含視覺導引的 Dialog ★★★ */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              className="h-12 w-full font-bold tracking-[0.1em] gold-border bg-primary/90 hover:bg-primary text-primary-foreground shadow-sm transition-all"
                            >
                              我願以此發心，請師兄代為造冊 <ExternalLink className="h-4 w-4 ml-2" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md p-0 overflow-hidden bg-[#fffaf0] border-[#d4b483]">
                            {/* 彈窗標題 */}
                            <DialogHeader className="bg-[#fffaf0] p-6 pb-4 border-b border-[#d4b483]">
                              <DialogTitle className="text-xl font-bold text-[#8b4513] flex items-center justify-center gap-2">
                                <span>✍️</span> 綠界填寫預演
                              </DialogTitle>
                              <p className="text-sm text-[#8b4513] opacity-80 text-center mt-2 font-medium">
                                為確保造冊無誤，請先看過<span className="text-red-700">備註欄填寫範例</span>再前往付款
                              </p>
                            </DialogHeader>

                            {/* 彈窗內容：視覺模擬圖 */}
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

                              {/* 實際跳轉綠界的按鈕（包含原有的 GA/FB 追蹤代碼） */}
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
                        {/* ★★★ 核心修改區結束 ★★★ */}
                        
                        {/* 金流視覺化與志工排程承諾 */}
                        <div className="flex flex-col items-center gap-2 pt-3 mt-3 border-t border-border/30">
                          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
                            <Lock className="w-3 h-3 text-green-600/80" />
                            綠界 256-bit SSL 安全加密付款
                          </div>
                          <div className="flex items-center gap-3 opacity-60 grayscale scale-90">
                            <span className="text-[9px] font-bold tracking-tighter flex items-center gap-1">
                              <CreditCard className="w-3 h-3" /> VISA / MASTER / JCB / 超商代碼
                            </span>
                          </div>
                          <div className="text-[10px] text-center text-muted-foreground/70 mt-1">
                            <Clock className="w-3 h-3 inline mr-1 mb-0.5" />
                            志工於晚間造冊，隔週公佈名錄於 FB
                          </div>
                        </div>
                      </div>
                      
                      <Link href="/pay" className="flex-1 sm:flex-none">
                        <Button variant="outline" className="h-12 w-full gold-border">
                          看完整登記說明
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
          <h2 className="mt-2 font-display text-3xl">常見問題</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[0, 1].map((col) => (
              <Card key={col} className="p-2 gold-border bg-card/70 paper-grain">
                <Accordion type="single" collapsible className="w-full">
                  {d.faq
                    .filter((_, idx) => idx % 2 === col)
                    .map((f) => (
                      <AccordionItem key={f.q} value={f.q} className="px-4">
                        <AccordionTrigger className="font-display text-left">{f.q}</AccordionTrigger>
                        <AccordionContent className="readable text-muted-foreground">{f.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </Card>
            ))}
          </div>
        </section>

        {/* CROSS SELL - 修改 pb-14 為 pb-32 以避免被 StickyCta 遮擋 */}
        <section className="mx-auto max-w-6xl px-4 pb-32">
          <Card className="p-7 gold-border bg-card/70 paper-grain">
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">你也可以</div>
            <div className="mt-2 font-display text-2xl">如果你的狀態更像下面這些</div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {d.crossSell.map((x) => {
                const t = DEITIES.find((k) => k.key === x.to);
                if (!t) return null;
                return (
                  <Link key={x.to} href={`/deity/${x.to}`} aria-label={`前往 ${t.name} 頁面`}>
                    <Card className="p-6 gold-border bg-background/35 hover:bg-accent/30 transition-colors">
                      <div className="font-display text-xl">{x.title}</div>
                      <div className="mt-2 text-muted-foreground readable">{x.desc}</div>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                        看 {t.name} <ArrowRight className="h-4 w-4" />
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