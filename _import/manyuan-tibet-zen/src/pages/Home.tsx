import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HOME_TESTIMONIALS, DEITIES } from "@/lib/siteData";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="滿願藏庫｜把話說清楚，再決定要不要護持" path="/" />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-10">
          <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr] items-start">
            <div>
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Warm Zen · gentle vow</div>
              <h1 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05]">
                把焦慮放下來。
                <br />
                你只需要走對一條路。
              </h1>
              <p className="mt-5 readable text-muted-foreground max-w-prose">
                你不缺努力，你缺的是「對位」：你現在卡住的是穩財、家運、清明、還是善緣？
                先選對本尊，再用最短路徑完成護持。這不是被推著買，是你替自己做一次安穩的安排。
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/puja">
                  <Button className="h-12 px-6 font-black tracking-[0.24em] uppercase gold-border">
                    30 秒困境對位 <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href="/sutra"
                  className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-card gold-border readable"
                >
                  先看經典主軸
                </Link>
              </div>

              <div className="mt-6 text-xs text-muted-foreground leading-relaxed">
                付款會跳轉第三方金流綠界完成；本站不在站內蒐集敏感個資。
              </div>
            </div>

            <Card className="p-7 gold-border bg-card paper-grain">
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">你現在最貼近哪一句？</div>
              <div className="mt-5 grid gap-3">
                {DEITIES.map((d) => (
                  <Link key={d.key} href={d.route}>
                    <div className="rounded-2xl gold-border bg-background/40 p-4 hover:bg-accent/25 transition-colors">
                      <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">{d.subtitle}</div>
                      <div className="mt-1 font-display text-2xl">{d.name}</div>
                      <div className="mt-2 text-sm readable text-muted-foreground">{d.oracle.question}</div>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                        看對應路徑 <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Deities gallery */}
        <section className="mx-auto max-w-6xl px-4 pb-4">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">四尊 · 四條路徑</h2>
              <p className="mt-2 readable text-muted-foreground max-w-prose">
                你不用把所有內容看完。挑一尊，照著本尊頁標示的首選方案先走完一次。
              </p>
            </div>
            <Link href="/pay" className="text-sm tracking-[0.2em] uppercase underline underline-offset-4">
              不想再拖了，直接去選方案
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
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
                        進本尊頁看方案與流程 <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-7 gold-border bg-card paper-grain">
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">Step 1</div>
              <div className="mt-2 font-display text-2xl">困境對位</div>
              <p className="mt-3 readable text-muted-foreground">哪一句最刺痛，就先從那一尊開始。先對位，才不會亂走。</p>
            </Card>
            <Card className="p-7 gold-border bg-card">
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">Step 2</div>
              <div className="mt-2 font-display text-2xl">挑首選方案</div>
              <p className="mt-3 readable text-muted-foreground">你不需要把所有方案研究到極致。先完成一次可承擔的護持。</p>
            </Card>
            <Card className="p-7 gold-border bg-card">
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">Step 3</div>
              <div className="mt-2 font-display text-2xl">到綠界完成</div>
              <p className="mt-3 readable text-muted-foreground">付款會跳轉第三方金流。依提示填寫姓名與祈願事項，其餘照流程安排。</p>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">一些回饋｜更貼近日常</h2>
              <p className="mt-2 readable text-muted-foreground max-w-prose">
                我們不寫神話式的保證。這些回饋多半是「心比較定、步驟比較清楚、生活比較能延續」那種細微但長久的變化。
              </p>
            </div>
            <Link href="/proof" className="text-sm tracking-[0.2em] uppercase underline underline-offset-4 text-muted-foreground">
              看更多見證
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
        </section>
      </main>

      <SiteFooter />
      <FloatingFb />
      <StickyCta />
      <div className="h-20" />
    </div>
  );
}
