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
        <h1 className="mt-2 font-display text-4xl md:text-5xl">或許你就是下一個回來感恩的人</h1>
        <p className="mt-4 readable text-muted-foreground max-w-prose">
          我們不主張保證式承諾；我們把路徑與流程講清楚，讓你能做一次不再後悔的決定。
          很多人最先想要的改善其實很具體：睡得著、支出止得住、決策不後悔、親密關係不再一直耗損。
          這些越早開始，越少把今天的耗損拖成明天的洞。
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

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/puja" className="underline underline-offset-4 text-primary">
            我想先困境對位，選一尊
          </Link>
          <span className="hidden sm:inline text-muted-foreground">·</span>
          <Link href="/pay" className="underline underline-offset-4 text-primary">
            我已選好，直接去挑方案
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
