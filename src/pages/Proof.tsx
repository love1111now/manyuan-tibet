import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import Seo from "@/components/Seo";
import { DEITIES } from "@/lib/siteData";

export default function Proof() {
  const all = DEITIES.flatMap((d) => d.testimonials.map((t) => ({ deity: d.name, ...t })));

  return (
    <div className="min-h-screen bg-background">
      <Seo title="見證" path="/proof" />
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 pt-10 pb-24">
        <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Proof</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">見證回饋</h1>
        <p className="mt-4 readable text-muted-foreground max-w-prose">
          我們不主張保證式承諾；我們把路徑與流程講清楚，讓你能做一次不再後悔的決定。
        </p>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {all.map((t) => (
            <Card key={`${t.deity}-${t.title}`} className="p-7 gold-border bg-card">
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">{t.deity}</div>
              <div className="mt-2 font-semibold">{t.title}</div>
              <div className="mt-3 readable text-muted-foreground">{t.body}</div>
              <div className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">{t.by}</div>
            </Card>
          ))}
        </section>

        <div className="mt-10">
          <Link href="/pay" className="underline underline-offset-4 text-primary">
            我已決定，直接去付款入口
          </Link>
        </div>
      </main>

      <SiteFooter />
      <FloatingFb />
      <StickyCta />
      <div className="h-20" />
    </div>
  );
}
