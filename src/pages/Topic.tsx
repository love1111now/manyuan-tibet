import { Link } from "wouter";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// 🚨 關鍵修正：將 DEITY_BY_KEY 與 TOPICS 的來源精準拆分
import { DEITY_BY_KEY } from "@/data/deities";
import { TOPICS } from "@/lib/siteData";

export default function Topic({ slug }: { slug: string }) {
  const t = TOPICS.find((x) => x.slug === slug);

  if (!t) {
    // 保底：外部流量（廣告/分享）打到未知 slug 時，不要顯示「未上架」
    // 目標是：把使用者導回「測驗 → 對位 → 方案」的主漏斗
    const pretty = decodeURIComponent(slug).replace(/[-_]/g, " ").slice(0, 40);

    return (
      <div className="min-h-screen bg-background">
        <Seo title={`困境對位｜${pretty || "主題"}`} noIndex />
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 pt-10 pb-32">
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">困境對位｜快速指引</div>
          <h1 className="mt-2 font-display text-4xl md:text-5xl">先不用多看，先找出你卡在哪裡</h1>
          <p className="mt-4 readable text-muted-foreground max-w-prose leading-relaxed">
            你現在的狀態如果很混亂，最容易做錯的是：亂選、亂拜、亂花錢。
            滿願藏庫的設計是讓你用最短的路徑，先「對位」再決定要不要護持。
          </p>

          <section className="mt-10 grid gap-4">
            <Card className="p-7 gold-border bg-card/70 paper-grain">
              <div className="font-semibold text-lg text-primary">30 秒找到方向</div>
              <div className="mt-2 readable text-muted-foreground">
                先做「生命能量對位診斷」，系統會把你導向最可能對位的本尊頁。
              </div>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link href="/#quiz" className="shrink-0">
                  <Button className="h-12 px-6 font-bold tracking-[0.22em] uppercase gold-border shadow-sm">
                    開始 30 秒診斷
                  </Button>
                </Link>
                <Link href="/pay" className="shrink-0">
                  <Button variant="outline" className="h-12 px-6 gold-border">
                    我想直接看方案總表
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="p-7 gold-border bg-card">
              <div className="font-semibold">你是從這個主題進來的</div>
              <div className="mt-2 text-sm text-muted-foreground readable">
                <span className="text-primary font-bold">{pretty || slug}</span>
                <span className="opacity-70">（外部連結 / 分享）</span>
              </div>
              <div className="mt-4 text-sm text-muted-foreground readable">
                若你願意，也可以直接私訊志工描述現況，我們會給你「對位方向」建議（無銷售壓力）。
              </div>
              <div className="mt-5">
                <a href="https://m.me/61583749010531" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="h-12 px-6 gold-border text-[#0866FF] border-[#0866FF]/30 hover:bg-[#0866FF]/10">
                    私訊志工詢問
                  </Button>
                </a>
              </div>
            </Card>
          </section>
        </main>
        <SiteFooter />
        <FloatingFb />
        <StickyCta />
      </div>
    );
  }

  const deity = DEITY_BY_KEY[t.deity];

  return (
    <div className="min-h-screen bg-background">
      <Seo title={t.title} path={`/topics/${t.slug}`} />
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 pt-10 pb-32">
        <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">困境對位｜指引</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">{t.title}</h1>
        <p className="mt-4 readable text-muted-foreground max-w-prose leading-relaxed">{t.summary}</p>

        <section className="mt-10 grid gap-4">
          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="font-semibold text-lg text-primary">您現在要做的不是「多看」，是「走對路」</div>
            <div className="mt-2 readable text-muted-foreground">
              這篇文只負責幫您把問題拆清楚；真正的下一步是選對本尊，交給志工團隊，用最單純的路徑完成護持。
            </div>
          </Card>

          <Card className="p-7 gold-border bg-card">
            <div className="font-semibold">下一步｜直接帶您前往</div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link href={deity.route} className="shrink-0">
                <Button className="h-12 w-full sm:w-auto px-6 font-bold tracking-[0.22em] uppercase gold-border shadow-sm">
                  {t.ctaLabel} <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link
                href="/pay"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-card gold-border readable hover:bg-accent/30 transition-colors"
              >
                我想直接看方案，前往總表登記
              </Link>
            </div>
          </Card>
        </section>

        <section className="mt-10">
          <Card className="overflow-hidden gold-border bg-card hover:border-primary/40 transition-colors">
            <div className="grid md:grid-cols-[240px_1fr]">
              <img src={deity.heroImage} alt={deity.name} className="h-48 w-full object-contain bg-background/30" />
              <div className="p-7 flex flex-col justify-center">
                <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">對應本尊</div>
                <div className="mt-1 font-display text-3xl">{deity.name}</div>
                <p className="mt-3 readable text-muted-foreground text-sm">{deity.promise}</p>
                <div className="mt-5">
                  <Link href={deity.route} className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors">
                    看完整方案與流程 <ArrowRight className="h-4 w-4 ml-1" />
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
    </div>
  );
}