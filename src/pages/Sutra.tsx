/*
  DESIGN REMINDER (Sutra)
  - Present quotes with sources + links
  - Keep it reverent and readable
*/

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ExternalLink } from "lucide-react";

import { DEITIES } from "@/lib/siteData";

export default function Sutra() {
  const quotes = DEITIES.flatMap((d) =>
    d.scripture.map((q, idx) => ({
      key: `${d.key}-${idx}`,
      deity: d.name,
      intent: d.primaryIntent,
      ...q,
    }))
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-16">
        <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Scripture</div>
        <h1 className="mt-2 font-display text-4xl">經典依據（引用）</h1>
        <p className="mt-4 readable text-muted-foreground max-w-prose">
          我們把經典放在這裡，不是要你背名詞。
          而是當你很慌、很急、很怕做錯時，你可以回來確認：
          <span className="text-foreground/90">護持不是交易</span>，是一種把心念放回正因、讓生活重新可控的方式。
        </p>

        <Separator className="my-10" />

        <div className="grid gap-4 md:grid-cols-2">
          {quotes.map((q) => (
            <Card key={q.key} className="p-7 gold-border bg-card/70 paper-grain">
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">
                {q.deity} · {q.intent}
              </div>
              <blockquote className="mt-3 border-l-2 border-border pl-4 readable text-muted-foreground">
                {q.quote}
              </blockquote>
              <div className="mt-4 text-xs text-muted-foreground">出處：{q.source}</div>
              {q.hint ? <div className="mt-2 text-sm text-muted-foreground">重點：{q.hint}</div> : null}
              {q.url ? (
                <div className="mt-4">
                  <a href={q.url} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="gold-border">
                      開啟原文 <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
}
