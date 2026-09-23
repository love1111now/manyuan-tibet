import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Flag, Gem, Flame } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import FloatingFb from "@/components/FloatingFb";

const FESTIVALS = {
  "wind-horse": {
    title: "風馬旗",
    subtitle: "祈願、回向與善業功德的傳遞",
    icon: Flag,
    intro: "風馬旗（Lungta）是藏地文化中極具代表性的祈願象徵之一。旗幟隨風飄揚，承載祈願、祝福與回向的心意。",
    sections: [
      ["文化意義", "風馬旗常見於藏地寺院、山口與高原環境，是藏地信仰文化中重要的祈願象徵。"],
      ["祈願精神", "重點不只在旗幟本身，而在於發願、行善、回向與祝福眾生的心念。"],
      ["如法觀念", "實際供奉與修持方式應依循傳承與具體儀軌，不宜將其簡化成單純的招財或許願物。"],
    ],
  },
  "mani-stone": {
    title: "瑪尼石",
    subtitle: "六字大明咒與石刻祈願文化",
    icon: Gem,
    intro: "瑪尼石是藏地文化中常見的石刻形式，許多石頭刻有六字大明咒等經咒文字，形成獨特的祈願與功德文化。",
    sections: [
      ["文化意義", "瑪尼石堆與石刻經咒在藏地廣泛可見，反映出藏傳佛教將經咒、祈願與日常生活結合的傳統。"],
      ["六字大明咒", "「唵嘛呢叭咪吽」是觀世音菩薩相關的重要咒語，在藏地文化中具有深厚的信仰與修持傳統。"],
      ["功德與回向", "傳統上重視發心與回向，重點在於善念與修持，而非將石刻視為具有世俗魔法功能的物件。"],
    ],
  },
  "butter-lamp-festival": {
    title: "燃燈節",
    subtitle: "以燈明供養，象徵智慧與光明",
    icon: Flame,
    intro: "燃燈供佛在藏傳佛教文化中具有重要地位。燈明象徵驅散無明、開顯智慧，也承載著對佛法與眾生的祈願。",
    sections: [
      ["供燈象徵", "燈明常被視為智慧與光明的象徵，藉由供燈表達恭敬、發願與回向。"],
      ["燃燈節", "藏地不同地區與傳承有不同的節日與紀念方式，實際日期及儀軌應以當地傳承或寺院公告為準。"],
      ["祈願方向", "供燈可以作為善行與發願的一部分，常見回向方向包括智慧增長、障礙消除、家人平安與眾生離苦。"],
    ],
  },
} as const;

type FestivalSlug = keyof typeof FESTIVALS;

export default function SpecialFestivalDetail({ slug }: { slug: string }) {
  const data = FESTIVALS[slug as FestivalSlug];

  if (!data) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h1 className="font-display text-4xl">找不到這個祭典</h1>
          <Link href="/special-festivals" className="mt-8 inline-flex items-center gap-2 text-primary">
            <ArrowLeft className="h-4 w-4" /> 返回特別祭典
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{data.title}｜特別祭典｜滿願藏庫</title>
        <meta name="description" content={data.intro} />
      </Helmet>

      <SiteHeader />

      <main className="pb-24">
        <section className="border-b bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <Link
              href="/special-festivals"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> 特別祭典
            </Link>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
                  Special Festival
                </p>
                <h1 className="mt-1 font-display text-4xl md:text-6xl">{data.title}</h1>
              </div>
            </div>

            <p className="mt-6 text-lg text-foreground/80">{data.subtitle}</p>
            <p className="mt-6 max-w-3xl text-base md:text-lg leading-loose text-muted-foreground">
              {data.intro}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 pt-14 md:pt-20">
          <div className="space-y-10">
            {data.sections.map(([title, body]) => (
              <article key={title} className="border-b border-border/50 pb-10">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">{title}</h2>
                <p className="mt-4 text-base leading-loose text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <Link
              href="/special-festivals"
              className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> 返回特別祭典
            </Link>
            <Link
              href="/pay"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              查看法事登記 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
      <FloatingFb />
    </div>
  );
}
