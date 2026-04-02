import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import { Link } from "wouter";
import { ShieldCheck, ClipboardList, ExternalLink, ArrowRight } from "lucide-react";

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

      {/* 增加 pb-32 確保手機端不會被 StickyCta 遮擋 */}
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-32">
        <div className="flex items-center gap-2 text-xs tracking-[0.26em] uppercase text-primary font-bold">
          <ShieldCheck className="w-4 h-4" /> Proof & Trust
        </div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">信任，建立在看得到的細節</h1>
        <p className="mt-4 readable text-muted-foreground max-w-prose leading-relaxed">
          我們深知網路充滿了誇大的神蹟與詐騙。因此，滿願藏庫不賣保證，我們只提供兩件事：<strong className="text-foreground/90 font-medium">絕對透明的造冊機制</strong>，以及<strong className="text-foreground/90 font-medium">真實發生的改變</strong>。
        </p>

        {/* 新增：造冊與公佈機制的信任區塊 */}
        <section className="mt-10">
          <Card className="gold-border bg-card/70 paper-grain overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <ClipboardList className="w-32 h-32 text-primary" />
            </div>
            
            <div className="p-7 md:p-10 relative z-10">
              <Badge className="bg-primary text-primary-foreground gold-border mb-4">我們最強的證明</Badge>
              <h2 className="font-display text-2xl md:text-3xl">不支薪志工・隔週名單公佈</h2>
              <p className="mt-4 readable text-muted-foreground max-w-2xl">
                我們無法提供遠在西藏壇城的即時直播，但我們給您最踏實的行政透明。台灣志工團隊將於晚間下班後嚴謹造冊，並於<strong className="text-foreground font-medium">隔週在 FB 粉專公佈「去識別化」的功德名錄</strong>。
              </p>

              {/* 模擬名單視覺，具象化透明度 */}
              <div className="mt-6 p-5 rounded-md bg-background/50 border border-border/60">
                <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3 flex items-center gap-2">
                  <ClipboardList className="w-3 h-3" /> 功德名錄發布範例
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-foreground/80 font-medium font-mono">
                  <div>陳*明 (台北市)</div>
                  <div>林*華 (台中市)</div>
                  <div>張*傑 (高雄市)</div>
                  <div>王*婷 (新北市)</div>
                  <div>吳*恩 (桃園市)</div>
                  <div className="text-muted-foreground">...及其他發心護持者</div>
                </div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-4">
                <a href="https://www.facebook.com/profile.php?id=61583749010531" target="_blank" rel="noreferrer">
                  <Button className="h-12 w-full sm:w-auto px-6 font-bold tracking-[0.1em] gold-border bg-[#0866FF]/90 hover:bg-[#0866FF] text-white shadow-sm transition-all">
                    前往 FB 粉專查證過往名單 <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-12 opacity-50" />

        <section>
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground mb-2">Testimonials</div>
          <h2 className="font-display text-3xl">信眾真實回饋（節錄）</h2>
          <p className="mt-3 readable text-muted-foreground max-w-prose">
            我們只整理大家最在意、也最貼近危機感的變化：睡眠、情緒穩定、決策更清楚、現金流止漏、關係回暖。
            您可以先看與您狀態最像的那幾則——不是為了被安慰，而是為了更快做出一個正確的選擇。
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {HOME_TESTIMONIALS.map((t) => (
              <Card key={t.title} className="p-7 gold-border bg-card/70 paper-grain hover:border-primary/30 transition-colors flex flex-col justify-between h-full">
                <div>
                  <div className="font-display text-xl text-foreground/90">{t.title}</div>
                  <div className="mt-4 readable text-muted-foreground text-sm leading-relaxed">{t.body}</div>
                </div>
                <div className="mt-6 text-xs tracking-[0.22em] uppercase text-primary/80 pt-4 border-t border-border/40">
                  {t.by}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center md:text-left">
            <Link href="/pay">
              <Button className="h-12 px-8 font-bold tracking-[0.22em] uppercase gold-border shadow-sm">
                前往登記法事名額 <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <Separator className="my-12 opacity-50" />

        <section>
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground mb-2">Use Cases</div>
          <h2 className="font-display text-3xl">各本尊「推薦方案」的常見對位</h2>
          <p className="mt-3 readable text-muted-foreground max-w-prose">
            這不是保證，只是讓您更快看懂：大家通常用哪個方案，來對位什麼樣的生命狀態。
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {deityProof.map((x) => (
              <Card key={`${x.deity}-${x.plan}`} className="p-7 gold-border bg-card/70 paper-grain hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="gold-border text-xs">{x.deity}</Badge>
                </div>
                <div className="mt-1 font-display text-2xl text-foreground/90">{x.plan}</div>
                <div className="mt-3 text-sm readable text-muted-foreground leading-relaxed">
                  {x.body}
                </div>
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