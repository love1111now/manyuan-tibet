import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { DEITY_BY_KEY, money, type Deity, type DeityKey } from "@/lib/siteData";

export default function DeityPage({ deityKey }: { deityKey: string }) {
  const keys: readonly DeityKey[] = ["yellow", "mahashri", "ganapati", "kurukulla"];
  const d: Deity | undefined = keys.includes(deityKey as DeityKey)
    ? DEITY_BY_KEY[deityKey as DeityKey]
    : undefined;

  if (!d) {
    return (
      <div className="min-h-screen bg-background">
        <Seo title="頁面不存在" noIndex />
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 pt-14 pb-24">
          <h1 className="font-display text-4xl">此本尊頁尚未上架</h1>
          <p className="mt-4 readable text-muted-foreground">你可以先回首頁用『困境對位』選一尊。</p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/" className="underline underline-offset-4 text-primary">
              回首頁
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/pay" className="underline underline-offset-4 text-muted-foreground">
              去付款入口
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${d.name}｜${d.subtitle}`} path={d.route} />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-24">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[1.05fr_.95fr] items-start">
          <div>
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">四大神明 · 四條路徑</div>
            <h1 className="mt-2 font-display text-4xl md:text-6xl">{d.name}</h1>
            <div className="mt-3 text-sm tracking-[0.22em] uppercase text-primary">{d.subtitle}</div>

            <Card className="mt-7 p-7 gold-border bg-card paper-grain">
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">你現在最貼近的卡點</div>
              <div className="mt-2 font-display text-2xl md:text-3xl">{d.oracle.question}</div>
              <div className="mt-3 readable text-muted-foreground">{d.promise}</div>
            </Card>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/pay">
                <Button className="h-12 px-6 font-black tracking-[0.24em] uppercase gold-border">
                  我想把這條路先安排好 <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="/puja"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-card gold-border readable"
              >
                回法會總覽
              </Link>
            </div>

            <div className="mt-6 text-xs text-muted-foreground leading-relaxed">
              付款將跳轉第三方金流平台綠界完成；本站不在站內蒐集敏感個資。
            </div>
          </div>

          <div className="relative vignette">
            <div className="absolute -inset-5 -z-10 rounded-[32px] bg-accent/25 paper-grain" />
            <div className="rounded-[32px] overflow-hidden gold-border">
              <img src={d.heroImage} alt={d.name} className="w-full h-[360px] md:h-[520px] object-cover" loading="eager" />
            </div>
            <div className="mt-4 text-xs text-muted-foreground leading-relaxed">
              《金光明最勝王經》以護念、增益、除障的意象，讓你把路徑走穩。
            </div>
          </div>
        </section>

        {/* Gentle guide */}
        <section className="mt-12 grid gap-4 md:grid-cols-3">
          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">溫柔提醒</div>
            <div className="mt-2 font-display text-2xl">先把祈願寫成一句話</div>
            <p className="mt-3 readable text-muted-foreground">
              不用寫很玄。用一句你看得懂、也願意承擔的話就好：例如「願我把財務節奏穩住」或「願我做一次清明的選擇」。
            </p>
          </Card>
          <Card className="p-7 gold-border bg-card">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">完成後你要做的</div>
            <div className="mt-2 font-display text-2xl">把一件小事做完</div>
            <p className="mt-3 readable text-muted-foreground">
              護持不是把責任丟出去。你可以選一件最小、最可行的事情：整理帳單、回一封訊息、把一個決策寫下來——讓路徑開始落地。
            </p>
          </Card>
          <Card className="p-7 gold-border bg-card">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">你可能感受到</div>
            <div className="mt-2 font-display text-2xl">心比較定、路比較清楚</div>
            <p className="mt-3 readable text-muted-foreground">
              我們不寫「保證」。比較常見的是：焦慮下降、猶豫變少、做事更能延續——這種細微但會累積的改變。
            </p>
          </Card>
        </section>

        {/* Plans */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">方案與價位</h2>
              <p className="mt-2 readable text-muted-foreground">先從標示的首選方案開始，再依你的狀況往上加深；路徑不要混走。</p>
            </div>
            <Link href="/pay" className="text-sm tracking-[0.2em] uppercase underline underline-offset-4">
              想一次看完四尊方案，去總覽頁
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {d.plans.map((p) => (
              <Card key={p.id} className="p-7 gold-border bg-card">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="font-semibold text-lg">{p.name}</div>
                      {p.hot ? (
                        <Badge className="gold-border bg-accent/35 text-accent-foreground">{p.badge || "優先"}</Badge>
                      ) : null}
                    </div>
                    <div className="mt-3 readable text-muted-foreground">{p.blurb}</div>
                    <div className="mt-3 text-sm text-primary/90">{p.feedback}</div>
                  </div>
                  <div className="text-sm font-semibold text-primary">{money(p.price)}</div>
                </div>

                <div className="mt-6">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <Button className="h-12 px-6 font-black tracking-[0.22em] uppercase gold-border">
                      前往綠界填寫 <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>

                <div className="mt-4 text-[11px] text-muted-foreground leading-relaxed">
                  開啟綠界後，依頁面提示填寫祈願姓名與事項，其餘依如法流程安排。
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Sutra merit */}
        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl">經典對應功德與經文引用</h2>
          <Card className="mt-6 p-7 gold-border bg-card paper-grain">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">{d.sutraMerit.quoteSource}</div>
            <div className="mt-2 font-display text-2xl md:text-3xl">{d.sutraMerit.title}</div>

            <blockquote className="mt-4 border-l-2 border-border pl-4 readable text-foreground">
              {d.sutraMerit.quote.split("\n").map((line) => (
                <div key={line}>{line}</div>
              ))}
            </blockquote>

            <div className="mt-5 grid gap-4">
              {d.sutraMerit.paragraphs.map((p) => (
                <p key={p} className="readable text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </Card>
        </section>

        {/* Wealth story */}
        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl">經典裡，這尊如何給你『財』</h2>
          <Card className="mt-6 p-7 gold-border bg-card paper-grain">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">{d.wealthStory.source}</div>
            <div className="mt-2 font-display text-2xl md:text-3xl">{d.wealthStory.title}</div>
            <div className="mt-5 grid gap-4">
              {d.wealthStory.paragraphs.map((p) => (
                <p key={p} className="readable text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </Card>
        </section>

        {/* Testimonials */}
        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl">三則見證回饋</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {d.testimonials.slice(0, 3).map((t) => (
              <Card key={t.title} className="p-7 gold-border bg-card">
                <div className="font-semibold">{t.title}</div>
                <div className="mt-3 readable text-muted-foreground">{t.body}</div>
                <div className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">{t.by}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl">常見疑慮</h2>
          <div className="mt-6">
            <Accordion type="single" collapsible className="grid gap-3">
              {d.faq.map((x, i) => (
                <AccordionItem key={x.q} value={`${i}`} className="gold-border rounded-2xl bg-card px-2">
                  <AccordionTrigger className="px-3 text-left">{x.q}</AccordionTrigger>
                  <AccordionContent className="px-3 pb-4 readable text-muted-foreground">{x.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Cross links */}
        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl">你也可能更適合…</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {d.crossSell.map((x) => (
              <Link key={x.title} href={`/deities/${x.to}`}>
                <Card className="p-7 gold-border bg-card hover:bg-accent/25 transition-colors">
                  <div className="font-semibold">{x.title}</div>
                  <div className="mt-2 readable text-muted-foreground">{x.desc}</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                    看對應路徑 <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingFb />
      <StickyCta />
      <div className="h-20" />
    </div>
  );
}
