import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, Flag, Gem, Flame, ShieldCheck, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import FloatingFb from "@/components/FloatingFb";

const FESTIVALS = [
  { slug: "wind-horse", title: "風馬旗", subtitle: "祈願隨風而行・一季護持", description: "以藏地風馬旗傳統承接經咒、發願與回向，讓一份心願從一念開始，延續成一季護持。", icon: Flag },
  { slug: "mani-stone", title: "瑪尼石", subtitle: "經咒入石・願心長存・一季護持", description: "以瑪尼石與經咒供養傳統承接祈願，讓供養、發願與回向在時間裡持續累積。", icon: Gem },
  { slug: "butter-lamp-festival", title: "燃燈節", subtitle: "一盞燈明・一季光明護持", description: "承接 Chötrul Düchen／神變節供燈傳統，以光明象徵智慧，讓節日的殊勝因緣延續到日常。", icon: Flame },
] as const;

export default function SpecialFestivals() {
  return <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title="特別祭典｜最高規格法事・一季護持｜滿願藏庫</title>
      <meta name="description" content="滿願藏庫目前最高規格的特別祭典：風馬旗、瑪尼石、燃燈節，三項皆 NT$6,000／一季護持，一次登記最多五人，首發每項僅 18 席。" />
    </Helmet>
    <SiteHeader />
    <main className="pb-24">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,hsl(var(--primary)/0.15),transparent_45%),linear-gradient(to_bottom,hsl(var(--primary)/0.07),transparent_75%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
          <p className="text-xs font-bold tracking-[0.35em] text-primary uppercase">Special Festivals · 最高規格 · 首發限定 18 席</p>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">特別祭典</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            這是滿願藏庫目前規格最高的特別法事方案。三項法門各自承接不同的藏傳佛教傳統，以一季為一期，讓發心、供養、儀軌與回向不只停留在一天，而有一段完整時間被珍惜與延續。
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-primary/15 bg-card/40 p-4"><Sparkles className="mx-auto h-5 w-5 text-primary" /><p className="mt-2 text-sm font-bold">NT$6,000／一季</p></div>
            <div className="rounded-2xl border border-primary/15 bg-card/40 p-4"><Users className="mx-auto h-5 w-5 text-primary" /><p className="mt-2 text-sm font-bold">一席最多五人</p></div>
            <div className="rounded-2xl border border-primary/15 bg-card/40 p-4"><ShieldCheck className="mx-auto h-5 w-5 text-primary" /><p className="mt-2 text-sm font-bold">首發每項 18 席</p></div>
          </div>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-foreground/70">
            特別適合家人、夫妻、兄弟姊妹與親朋好友共同發心。一筆登記最多五位，不必分別登記五次。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-primary">THREE DISTINCT TRADITIONS</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">三項法門，三種願心</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">不是把三項法事做成同一種商品，而是讓信眾依自己的願心，選擇最有共鳴的一項。</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FESTIVALS.map(item => {
            const Icon = item.icon;
            return <Link key={item.slug} href={`/special-festivals/${item.slug}`} className="group block">
              <Card className="h-full overflow-hidden border-primary/20 bg-card/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 md:p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary"><Icon className="h-8 w-8" /></div>
                <p className="mt-7 text-[10px] font-bold tracking-[0.25em] text-primary uppercase">最高規格 · 首發 18 席</p>
                <h2 className="mt-2 font-display text-3xl">{item.title}</h2>
                <p className="mt-3 text-sm font-medium text-foreground/80">{item.subtitle}</p>
                <p className="mt-5 text-sm leading-8 text-muted-foreground">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px]"><span className="rounded-full border border-primary/20 px-3 py-1 text-primary">NT$6,000／一季</span><span className="rounded-full border border-border/60 px-3 py-1">最多五人</span></div>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary">進入完整法事頁<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
              </Card>
            </Link>;
          })}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-9">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-primary">一席之願・五人同行</p>
              <h3 className="mt-2 font-display text-2xl md:text-3xl">最適合家人與親朋好友共同發心</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                一筆 NT$6,000 登記，最多可由五位共同參與。父母、夫妻、子女、手足或多年好友，都可以在同一期特別祭典裡各自有願、共同回向。
              </p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-background/40 px-6 py-5 text-center"><p className="font-display text-5xl text-primary">5</p><p className="text-xs font-bold">最多共同參與</p></div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-border/60 bg-card/40 p-5 text-center">
          <p className="text-xs leading-6 text-muted-foreground">
            付款與五人登記資料填寫皆於綠界完成；本站提供法事背景與參與說明，不另行收集登記資料。
          </p>
        </div>
      </section>
    </main>
    <SiteFooter /><StickyCta /><FloatingFb />
  </div>;
}
