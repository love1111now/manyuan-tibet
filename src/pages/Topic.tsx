import { Link } from "wouter";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DEITY_BY_KEY, TOPICS } from "@/lib/siteData";

export default function Topic({ slug }: { slug: string }) {
  const t = TOPICS.find((x) => x.slug === slug);

  if (!t) {
    return (
      <div className="min-h-screen bg-background">
        <Seo title="主題尚未上架" noIndex />
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 pt-12 pb-24">
          <h1 className="font-display text-4xl md:text-5xl">主題尚未上架</h1>
          <p className="mt-4 readable text-muted-foreground">
            這個主題頁目前還沒寫完。你可以先回首頁用「困境對位」選一尊，或直接去 /pay 完成預定。
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/" className="underline underline-offset-4 text-primary">回首頁</Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/pay" className="underline underline-offset-4 text-muted-foreground">去付款入口</Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const deity = DEITY_BY_KEY[t.deity];

  return (
    <div className="min-h-screen bg-background">
      <Seo title={t.title} path={`/topics/${t.slug}`} />
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 pt-10 pb-24">
        <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">困境型內容｜長尾入口</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">{t.title}</h1>
        <p className="mt-4 readable text-muted-foreground">{t.summary}</p>

        <section className="mt-10 grid gap-4">
          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="font-semibold">你現在要做的不是「多看」，是「走對路」</div>
            <div className="mt-2 readable text-muted-foreground">
              這篇文只負責幫你把問題拆清楚；真正的下一步是選對本尊，然後用最短路徑完成護持。
            </div>
          </Card>

          <Card className="p-7 gold-border bg-card">
            <div className="font-semibold">下一步｜直接帶你去</div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link href={deity.route} className="shrink-0">
                <Button className="h-12 px-6 font-black tracking-[0.22em] uppercase gold-border">
                  {t.ctaLabel} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="/pay"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-card gold-border readable"
              >
                我想直接選方案，前往總覽
              </Link>
            </div>
          </Card>
        </section>

        <section className="mt-10">
          <Card className="overflow-hidden gold-border bg-card">
            <div className="grid md:grid-cols-[240px_1fr]">
              <img src={deity.heroImage} alt={deity.name} className="h-48 w-full object-contain bg-background/30" />
              <div className="p-7">
                <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">對應本尊</div>
                <div className="mt-2 font-display text-3xl">{deity.name}</div>
                <p className="mt-3 readable text-muted-foreground">{deity.promise}</p>
                <div className="mt-5">
                  <Link href={deity.route} className="underline underline-offset-4 text-primary">
                    看完整方案與流程
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <SiteFooter />
      <FloatingFb />
      <StickyCta />
      <div className="h-20" />
    </div>
  );
}
