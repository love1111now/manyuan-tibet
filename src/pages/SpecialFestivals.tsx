import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, Flag, Gem, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import FloatingFb from "@/components/FloatingFb";

const FESTIVALS = [
  {
    slug: "wind-horse",
    title: "風馬旗",
    subtitle: "祈願、回向與善業功德的傳遞",
    description: "以藏地傳統風馬旗為主題，介紹風馬旗的文化意義、象徵與如法供奉方式。",
    icon: Flag,
  },
  {
    slug: "mani-stone",
    title: "瑪尼石",
    subtitle: "六字大明咒與石刻祈願文化",
    description: "認識藏地瑪尼石堆與六字大明咒的傳統，理解其在藏傳佛教文化中的象徵意義。",
    icon: Gem,
  },
  {
    slug: "butter-lamp-festival",
    title: "燃燈節",
    subtitle: "以燈明供養，象徵智慧與光明",
    description: "介紹燃燈供佛與藏地燃燈節的文化脈絡，以及點燈祈願所承載的祝福。",
    icon: Flame,
  },
] as const;

export default function SpecialFestivals() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>特別祭典｜風馬旗・瑪尼石・燃燈節｜滿願藏庫</title>
        <meta
          name="description"
          content="滿願藏庫特別祭典，介紹風馬旗、瑪尼石與燃燈節的藏地佛教文化、象徵意義與祈願傳統。"
        />
      </Helmet>

      <SiteHeader />

      <main className="pb-24">
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28 text-center">
            <p className="text-xs font-bold tracking-[0.35em] text-primary uppercase">
              Special Festivals
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl tracking-tight">
              特別祭典
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
              不同於日常本尊法事，這裡整理藏地傳統中具有特殊文化意義的祭典與供養形式。
            </p>
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
                      Special Festival
                    </p>
                    <h2 className="mt-2 font-display text-3xl">{item.title}</h2>
                    <p className="mt-3 text-sm font-medium text-foreground/80">
                      {item.subtitle}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary">
                      查看祭典介紹
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
      <FloatingFb />
    </div>
  );
}
