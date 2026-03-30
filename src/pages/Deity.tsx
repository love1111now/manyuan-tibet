/*
  DESIGN REMINDER (Deity)
  - Make decision easy: pain points → why → plans → FAQ → cross-sell
  - Add a clear page TOC + quick plan picker
  - Prefer scannable blocks, fewer walls of text
*/

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
} from "lucide-react";

import { useEffect, useState } from "react";

import { DEITIES, type DeityKey } from "@/lib/siteData";

function anchorBtn(label: string, href: string, Icon: any) {
  return (
    <a href={href} className="block">
      <Button
        variant="outline"
        className="h-11 w-full justify-start gap-2 gold-border bg-card/50 hover:bg-accent/30"
      >
        <Icon className="h-4 w-4" />
        <span className="font-semibold">{label}</span>
      </Button>
    </a>
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
                <a href="#plans">
                  <Button className="h-12 px-6 font-bold tracking-[0.22em] uppercase gold-border">
                    直接選方案 <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <Link href="/pay">
                  <Button variant="outline" className="h-12 px-6 gold-border">
                    看全收費表
                  </Button>
                </Link>
              </div>

              {/* TOC */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {anchorBtn("痛點與對治", "#pain", Sparkles)}
                {anchorBtn("流程怎麼做", "#process", ClipboardList)}
                {d.ritual ? anchorBtn("正統儀軌", "#ritual", ExternalLink) : null}
                {anchorBtn("方案與價格", "#plans", ShieldCheck)}
                {anchorBtn("常見問題", "#faq", HelpCircle)}
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

        {/* RITUAL */}
        {d.ritual ? (
          <section id="ritual" className="mx-auto max-w-6xl px-4 pt-10 pb-4 scroll-mt-24">
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">正統儀軌</div>
            <h2 className="mt-2 font-display text-3xl">正統儀軌與供養指南</h2>
            <p className="mt-3 readable text-muted-foreground max-w-prose">
              依你的要求，本區塊以「權威來源的全文」呈現，避免自行改寫造成失真；並附上原始出處連結。
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-[0.95fr_1.05fr] md:items-start">
              <Card className="gold-border bg-card/70 paper-grain overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={d.ritual.image}
                    alt={d.ritual.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="p-5">
                  <div className="font-display text-xl">{d.ritual.title}</div>
                  {d.ritual.note ? (
                    <div className="mt-2 text-sm text-muted-foreground readable">{d.ritual.note}</div>
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

        {/* PLANS */}
        <section id="plans" className="mx-auto max-w-6xl px-4 pt-12 pb-6 scroll-mt-24">
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
              <a href="#plan-hot" className="block">
                <Button className="h-12 w-full gold-border font-bold">
                  最多人選：{hot.name} <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#plan-cheap" className="block">
                <Button variant="outline" className="h-12 w-full gold-border">
                  先入門穩住：{cheapest.name}
                </Button>
              </a>
              <a href="#plan-pricy" className="block">
                <Button variant="outline" className="h-12 w-full gold-border">
                  想一次到位：{priciest.name}
                </Button>
              </a>
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
                  className="p-7 gold-border bg-card/70 paper-grain scroll-mt-28"
                >
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

                  <Separator className="my-5" />

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                      aria-label={`前往外部付款頁：${p.name}`}
                    >
                      <Button className="h-12 w-full font-bold tracking-[0.22em] uppercase gold-border">
                        立即下單 <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                    <Link href="/pay" className="flex-1">
                      <Button variant="outline" className="h-12 w-full gold-border">
                        看完整登記說明
                      </Button>
                    </Link>
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

        {/* CROSS SELL */}
        <section className="mx-auto max-w-6xl px-4 pb-14">
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
