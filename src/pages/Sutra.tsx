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

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-32">
        <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Scripture</div>
        <h1 className="mt-2 font-display text-4xl">經典依據（引用）</h1>
        <p className="mt-4 readable text-muted-foreground max-w-prose leading-relaxed">
          我們把經典放在這裡，不是要您背誦名詞。<br/>
          而是當您很慌、很急、很怕做錯決定時，您可以回來確認：
          <strong className="text-foreground/90 font-medium">護持從來都不是金錢交易</strong>，而是一種把心念放回正因、讓混亂的生活重新回到可控的方式。我們的一切儀軌，皆立基於此。
        </p>

        <Separator className="my-10" />

        <div className="grid gap-5 md:grid-cols-2">
          {quotes.map((q) => (
            <Card key={q.key} className="p-7 gold-border bg-card/70 paper-grain hover:border-primary/20 transition-colors">
              <div className="text-xs tracking-[0.26em] uppercase text-primary font-bold">
                {q.deity} · {q.intent}
              </div>
              <blockquote className="mt-4 border-l-2 border-primary/50 pl-4 readable text-muted-foreground">
                {q.quote}
              </blockquote>
              <div className="mt-5 text-xs text-muted-foreground">出處：{q.source}</div>
              {q.hint ? <div className="mt-2 text-sm text-foreground/80 font-medium bg-background/50 p-2 rounded-sm inline-block">💡 核心：{q.hint}</div> : null}
              {q.url ? (
                <div className="mt-5">
                  <a href={q.url} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="gold-border hover:bg-accent/50">
                      開啟原文連結 <ExternalLink className="h-3 w-3 ml-2" />
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