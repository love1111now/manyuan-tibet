/*
  DESIGN REMINDER (Proof)
  - Social proof should feel real: specific, grounded, no hype
*/

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Link } from "wouter";

import { DEITIES, HOME_TESTIMONIALS } from "@/lib/siteData";

export default function Proof() {
  const deityProof = DEITIES.flatMap((d) =>
    d.plans
      .filter((p) => p.hot)
      .map((p) => ({
        deity: d.name,
        plan: p.name,
        body: p.blurb,
      }))
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-16">
        <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Proof</div>
        <h1 className="mt-2 font-display text-4xl">回饋文（節錄）</h1>
        <p className="mt-4 readable text-muted-foreground max-w-prose">
          我們只整理大家最在意的變化：睡眠、情緒穩定、決策更清楚、現金流止漏、關係回暖。
          你可以先看與你狀態最像的那幾則。
        </p>

        <Separator className="my-10" />

        <section>
          <h2 className="font-display text-2xl">最常被提到的三種轉變</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {HOME_TESTIMONIALS.map((t) => (
              <Card key={t.title} className="p-7 gold-border bg-card/70 paper-grain">
                <div className="font-display text-xl">{t.title}</div>
                <div className="mt-3 readable text-muted-foreground">{t.body}</div>
                <div className="mt-4 text-xs tracking-[0.22em] uppercase text-muted-foreground">{t.by}</div>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/pay">
              <Button className="gold-border font-bold tracking-[0.22em] uppercase">我也想先保留名額</Button>
            </Link>
          </div>
        </section>

        <Separator className="my-10" />

        <section>
          <h2 className="font-display text-2xl">各本尊「推薦方案」的常見回饋方向</h2>
          <p className="mt-3 readable text-muted-foreground max-w-prose">
            這不是保證，只是讓你更快看懂：大家常用哪個方案來對位什麼狀態。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {deityProof.map((x) => (
              <Card key={`${x.deity}-${x.plan}`} className="p-7 gold-border bg-card/70 paper-grain">
                <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">{x.deity}</div>
                <div className="mt-2 font-display text-2xl">{x.plan}</div>
                <div className="mt-3 readable text-muted-foreground">{x.body}</div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
}
