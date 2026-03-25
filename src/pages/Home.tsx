/*
Design philosophy: Neo-thangka noir
- Indigo night base, gold foil accents, paper grain textures
- Asymmetric composition with dramatic hero image
- Typography: ZCOOL XiaoWei (display) + Noto Serif TC (body)
*/

import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DEITIES, HOME_TESTIMONIALS, SUTRA_QUOTES } from "@/lib/siteData";

import heroBrocade from "@/assets/visuals/generated/hero-brocade.jpg";
import iconYellow from "@/assets/visuals/generated/image_w1024_h1024_icon-yellow-water-offering.jpeg";
import iconMahashri from "@/assets/visuals/generated/image_w1024_h1024_icon-mahashri-home.jpeg";
import iconGanapati from "@/assets/visuals/generated/image_w1024_h1024_icon-ganapati-clarity.jpeg";
import iconKurukulla from "@/assets/visuals/generated/image_w1024_h1024_icon-kurukulla-magnetize.jpeg";

const ICON_BY_KEY: Record<string, string> = {
  yellow: iconYellow,
  mahashri: iconMahashri,
  ganapati: iconGanapati,
  kurukulla: iconKurukulla,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="滿願藏庫｜招財護持法事" path="/" />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroBrocade}
              alt=""
              className="h-full w-full object-cover opacity-55"
              loading="eager"
            />
            <div className="absolute inset-0 hero-brocade opacity-90" />
          </div>

          <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 md:pt-20 md:pb-20">
            <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr] items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-xs tracking-[0.26em] uppercase text-muted-foreground">
                  <Sparkles className="h-4 w-4" />
                  求財不是賭運，是把路走正
                </div>

                <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05]">
                  你不是缺錢。
                  <br />
                  你是缺一場
                  <span className="text-primary">把耗損停下來</span>
                  的護持。
                </h1>

                <p className="mt-6 readable text-muted-foreground max-w-prose">
                  我們做的不是誇張保證，而是用經典脈絡與清楚流程，幫你把四條招財路徑分清楚：
                  <span className="text-foreground">穩財／運財／理財／貴人</span>。
                  你只要選對一尊——很多人最先回來說的，是睡得著、決策不後悔、
                  停止匱乏感，善念對象開始出現。
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/puja">
                    <Button className="h-12 px-6 font-black tracking-[0.24em] uppercase gold-border">
                      30 秒困境對位 <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href="/pay"
                    className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border"
                  >
                    我今天就要先安排
                  </Link>
                </div>

                <div className="mt-6 text-xs text-muted-foreground leading-relaxed max-w-prose">
                  提醒：本站不提供投資建議或報酬承諾；此為宗教護持與迴向之安排。結果因人而異，
                  請以清淨發心與可承擔的行動作為落地。
                </div>
              </div>

              <Card className="p-7 gold-border bg-card/75 backdrop-blur paper-grain">
                <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">你現在最需要的改善</div>
                <div className="mt-3 grid gap-2 readable text-muted-foreground">
                  <div>• 睡得著，不再半夜盤算財富失去感</div>
                  <div>• 建立庫房，進財節奏出現</div>
                  <div>• 決策不後悔，清晰的投資觀念</div>
                  <div>• 關係不耗損，貴人與戀情進得來</div>
                </div>
                <div className="mt-6 text-sm text-primary/90">
                  拖一天，耗損多一天。你想要的改善，其實很具體。
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Deity selector */}
        <section className="mx-auto max-w-6xl px-4 pt-12 pb-6" id="deities">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">困境對位</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">四條路徑，不混走</h2>
              <p className="mt-3 readable text-muted-foreground max-w-prose">
                哪一句最刺痛，就是你現在的卡點。點進去，看清楚『經典故事』『方案』與『流程』。
              </p>
            </div>
            <Link href="/pay" className="underline underline-offset-4 text-primary text-sm">
              我已選好，直接去付款入口
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {DEITIES.map((d) => (
              <Link key={d.key} href={d.route}>
                <Card className="p-7 gold-border bg-card hover:bg-accent/25 transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="h-16 w-16 rounded-2xl gold-border bg-background/40 overflow-hidden shrink-0">
                      <img
                        src={ICON_BY_KEY[d.key]}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="font-display text-2xl">{d.name}</div>
                        <Badge className="gold-border bg-accent/35 text-accent-foreground">{d.subtitle}</Badge>
                      </div>
                      <div className="mt-2 readable text-muted-foreground">{d.promise}</div>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                        看經典故事與方案 <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Sutra backing */}
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-6">
          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">
              經典背書｜{SUTRA_QUOTES.protectionSource}
            </div>
            <div className="mt-3 font-display text-2xl md:text-3xl">先護念，再增益</div>
            <blockquote className="mt-4 border-l-2 border-border pl-4 readable text-foreground">
              {SUTRA_QUOTES.protection}
            </blockquote>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link
                href="/sutra"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-background/40 gold-border readable"
              >
                我想先看經典主軸
              </Link>
              <Link
                href="/pay"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border"
              >
                我已理解，直接去預定
              </Link>
            </div>
          </Card>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">見證</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">你就是下一個回來感恩的人</h2>
              <p className="mt-3 readable text-muted-foreground max-w-prose">
                我們不靠誇張保證，靠的是清楚路徑、如法護持與你願意落地的一步。
              </p>
            </div>
            <Link href="/proof" className="underline underline-offset-4 text-primary text-sm">
              看更多回饋
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {HOME_TESTIMONIALS.map((t) => (
              <Card key={t.title} className="p-7 gold-border bg-card">
                <div className="font-semibold">{t.title}</div>
                <div className="mt-3 readable text-muted-foreground">{t.body}</div>
                <div className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">{t.by}</div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/puja">
              <Button className="h-12 px-6 font-black tracking-[0.24em] uppercase gold-border">
                帶我去選一尊 <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="/pay"
              className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border"
            >
              我不再拖，直接安排
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingFb />
      <StickyCta />
      <div className="h-20" />
    </div>
  );
}
