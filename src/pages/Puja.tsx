import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import FloatingFb from "@/components/FloatingFb";
import Seo from "@/components/Seo";
import PageIllustrations from "@/components/PageIllustrations";

import pujaImg1 from "@/assets/visuals/seo/image_w5504_h3072_page-puja-1.webp";
import pujaImg2 from "@/assets/visuals/seo/image_w5504_h3072_page-puja-2.webp";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DEITIES } from "@/lib/siteData";

export default function Puja() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="法會總覽" path="/puja" />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-24">
        <div className="grid gap-10 md:grid-cols-[1fr_.9fr] items-start">
          <div>
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">總覽</div>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">四條路徑，不混走</h1>
            <p className="mt-4 readable text-muted-foreground max-w-prose">
              我們不讓你在一堆神祕話術裡亂選。先把困境對位：穩財／補庫／清思／聚人。
              你只要選對路，然後用最短路徑完成護持。
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/pay">
                <Button className="h-12 px-6 font-black tracking-[0.24em] uppercase gold-border">
                  我想先完成護持 <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="/sutra"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-card gold-border readable"
              >
                先看經典主軸
              </Link>
            </div>
          </div>

          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="font-semibold">怎麼選：30 秒版</div>
            <ol className="mt-4 grid gap-3 text-sm readable text-muted-foreground list-decimal list-inside">
              <li>感受四尊卡片：哪一句最有感，就是你現在的方向。</li>
              <li>進本尊頁，看標示的首選方案卡。</li>
              <li>點『前往綠界完成』，依提示填寫姓名與事項。</li>
            </ol>
            <div className="mt-6 text-xs text-muted-foreground">
              圓滿的開始；你只要做一次正確的選擇。
            </div>
          </Card>
        </div>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {DEITIES.map((d) => (
            <Link key={d.key} href={d.route}>
              <Card className="overflow-hidden gold-border bg-card hover:bg-accent/25 transition-colors">
                <div className="grid md:grid-cols-[220px_1fr]">
                  <img src={d.heroImage} alt={d.name} className="h-44 w-full object-cover" loading="lazy" />
                  <div className="p-7">
                    <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">{d.subtitle}</div>
                    <div className="mt-2 font-display text-3xl">{d.name}</div>
                    <p className="mt-3 readable text-muted-foreground">{d.promise}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                      看方案與流程 <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </section>
      </main>

      <PageIllustrations images={[{ src: pujaImg1, alt: "供品與供養的儀軌靜物" }, { src: pujaImg2, alt: "點燃酥油燈的儀軌瞬間" }]} />

      <SiteFooter />
      <FloatingFb />
      <StickyCta />
      <div className="h-20" />
    </div>
  );
}
