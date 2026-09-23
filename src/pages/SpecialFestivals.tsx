import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, Flag, Gem, Flame, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import FloatingFb from "@/components/FloatingFb";

const FESTIVALS = [
  {
    slug: "wind-horse",
    title: "風馬旗",
    subtitle: "祈願隨風而行・半年護持",
    description: "以藏地風馬旗傳統承接發願與回向，讓一份心願不只停留在一天，而有半年時間持續護持。",
    icon: Flag,
  },
  {
    slug: "mani-stone",
    title: "瑪尼石",
    subtitle: "經咒入石・願心延續・半年護持",
    description: "以瑪尼石與經咒供養傳統承接祈願，將供養、發願與回向延續在一段完整的護持週期裡。",
    icon: Gem,
  },
  {
    slug: "butter-lamp-festival",
    title: "燃燈節",
    subtitle: "一盞燈明・半年光明護持",
    description: "以燃燈供養象徵智慧與光明，讓節日當下的一份願心，延續成半年祈願與回向。",
    icon: Flame,
  },
] as const;

export default function SpecialFestivals() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>特別祭典｜半年護持・風馬旗・瑪尼石・燃燈節｜滿願藏庫</title>
        <meta
          name="description"
          content="滿願藏庫特別祭典，風馬旗、瑪尼石、燃燈節，三項特別祭典皆為 NT$6,000 半年護持，付款與登記於綠界完成。"
        />
      </Helmet>

      <SiteHeader />

      <main className="pb-24">
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28 text-center">
            <p className="text-xs font-bold tracking-[0.35em] text-primary uppercase">
              Special Festivals · 首發限定 18 席 · 半年護持
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl tracking-tight">
              特別祭典
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
              這不是大量開放的常態項目。首發三項特別祭典，每項僅開放 18 席，以半年為一期，將一份難得的發心、供養與回向，留給真正珍惜這份因緣的人。
            </p>

            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> NT$6,000／半年</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> 付款與登記皆於綠界完成</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 md:px-8 pt-14 md:pt-20">
          <div className="grid gap-6 md:grid-cols-3">
            {FESTIVALS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={`/special-festivals/${item.slug}`}
                  className="group block"
                >
                  <Card className="h-full overflow-hidden border-primary/20 bg-card/70 p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-7 text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                      首發 18 席 · NT$6,000／半年
                    </p>
                    <h2 className="mt-2 font-display text-3xl">{item.title}</h2>
                    <p className="mt-3 text-sm font-medium text-foreground/80">
                      {item.subtitle}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary">
                      進入專屬登記頁
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center md:p-8">
            <p className="text-xs font-bold tracking-[0.25em] text-primary">首發限定・每項 18 席</p>
            <p className="mt-2 font-display text-xl md:text-2xl">一次 NT$6,000，半年護持</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              三項特別祭典首發各限 18 席。這份限定，不在於製造喧鬧，而是讓每一位參與者都知道：自己選擇的，是一段需要被珍惜的半年護持因緣。付款與登記資料填寫皆在綠界安全通道完成。
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
      <FloatingFb />
    </div>
  );
}