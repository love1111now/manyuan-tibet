import { Link } from "wouter";
import { ArrowRight, ScrollText, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import Seo from "@/components/Seo";
import heroImg from "@/assets/visuals/hero.webp";
import { DEITIES, TOPICS, HOME_TESTIMONIALS } from "@/lib/siteData";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo title="線上招財法事入口" path="/" />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-24">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[1.08fr_.92fr] items-start">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-card/60 px-4 py-2 gold-border">
              <Timer className="h-4 w-4 text-primary" />
              <span className="text-xs tracking-[0.22em] uppercase">窗口有限 · 先預定保留名額</span>
            </div>

            <h1 className="font-display text-[44px] leading-[1.06] md:text-[64px]">
              把因緣說清楚。
              <br />
              讓你走到成交。
            </h1>

            <p className="readable text-muted-foreground max-w-prose">
              你不是缺努力，你是卡在「匱乏印記、決策迷霧、財庫漏損、關係耗損」。
              這裡以《金光明最勝王經》的增益、除障與護持意象作為主軸：把路徑分清楚，
              讓你選對本尊 → 選對方案 → 到綠界完成護持。
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/pay">
                <Button className="h-12 px-6 font-black tracking-[0.24em] uppercase gold-border">
                  立即預定 <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a
                href="#oracle"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-card gold-border readable"
              >
                先看我適合哪一尊
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: <ShieldCheck className="h-5 w-5 text-primary" />,
                  t: "流程透明",
                  d: "付款後要做什麼、多久、怎麼確認，都寫清楚。",
                },
                {
                  icon: <ScrollText className="h-5 w-5 text-primary" />,
                  t: "如法安排",
                  d: "以傳承儀軌修持與回向，不走神祕話術。",
                },
                {
                  icon: <Sparkles className="h-5 w-5 text-primary" />,
                  t: "困境對位",
                  d: "四條路徑不混走：穩財／守財／清明／貴人。",
                },
              ].map((x) => (
                <div key={x.t} className="flex items-start gap-3 rounded-2xl bg-card p-4 gold-border">
                  {x.icon}
                  <div>
                    <div className="font-semibold">{x.t}</div>
                    <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Asymmetric visual */}
          <div className="relative vignette">
            <div className="absolute -inset-5 -z-10 rounded-[32px] bg-accent/25 paper-grain" />
            <div className="rounded-[32px] overflow-hidden gold-border">
              <img
                src={heroImg}
                alt="燈海與護持意象"
                className="w-full h-[360px] md:h-[560px] object-cover"
                loading="eager"
              />
            </div>
            <div className="mt-4 text-xs text-muted-foreground leading-relaxed">
              你不需要相信口號；你只需要看懂流程，然後做出不再後悔的決定。
            </div>
          </div>
        </section>

        {/* Oracle */}
        <section id="oracle" className="mt-16 md:mt-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">你卡在哪一種困境？</h2>
              <p className="mt-2 readable text-muted-foreground">
                選一個最接近的句子，直接帶你到對應本尊頁。
              </p>
            </div>
            <Link href="/puja" className="text-sm tracking-[0.2em] uppercase underline underline-offset-4">
              先看法會總覽
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {DEITIES.map((d) => (
              <Link key={d.key} href={d.route}>
                <Card className="p-7 gold-border bg-card hover:bg-accent/25 transition-colors">
                  <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">
                    {d.oracle.question}
                  </div>
                  <div className="mt-2 font-display text-2xl md:text-3xl">{d.oracle.title}</div>
                  <div className="mt-2 readable text-muted-foreground">{d.oracle.desc}</div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    看方案與流程 <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Deity cards */}
        <section className="mt-16 md:mt-20">
          <h2 className="font-display text-3xl md:text-4xl">四尊一屏比較</h2>
          <p className="mt-2 readable text-muted-foreground max-w-prose">
            先把路徑分清楚：穩財、守財、清明、貴人。看懂再預定，成交更穩。
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-4">
            {DEITIES.map((d) => (
              <Link key={d.key} href={d.route}>
                <Card className="overflow-hidden gold-border bg-card hover:bg-accent/25 transition-colors">
                  <img src={d.heroImage} alt={d.name} className="h-32 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <div className="font-display text-xl">{d.name}</div>
                    <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{d.subtitle}</div>
                    <div className="mt-3 text-sm font-semibold underline underline-offset-4">
                      看方案
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mt-16 md:mt-20">
          <h2 className="font-display text-3xl md:text-4xl">流程說明</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-4">
            {[
              { t: "1｜對位困境", d: "先選你最痛的那一句，找到對應本尊。" },
              { t: "2｜選方案", d: "從『最推薦』開始，最不容易走偏。" },
              { t: "3｜到綠界預定", d: "跳轉第三方付款，完成後保留名額。" },
              { t: "4｜依提示填寫", d: "依綠界頁面提示填寫即可，其餘照流程安排。" },
            ].map((x) => (
              <Card key={x.t} className="p-5 gold-border bg-card">
                <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">{x.t}</div>
                <div className="mt-2 readable">{x.d}</div>
              </Card>
            ))}
          </div>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link href="/pay">
              <Button className="h-12 px-6 font-black tracking-[0.24em] uppercase gold-border">
                現在就預定
              </Button>
            </Link>
            <Link
              href="/sutra"
              className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-card gold-border readable"
            >
              我想先看經典主軸
            </Link>
          </div>
        </section>

        {/* SEO Topics */}
        <section className="mt-16 md:mt-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">先把困境拆清楚</h2>
              <p className="mt-2 readable text-muted-foreground">
                不是所有人都需要同一尊。先讀一篇，把你的卡點講明白。
              </p>
            </div>
            <Link href="/pay" className="text-sm tracking-[0.2em] uppercase underline underline-offset-4">
              我已決定，直接預定
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {TOPICS.map((t) => (
              <Link key={t.slug} href={`/topics/${t.slug}`}>
                <Card className="p-7 gold-border bg-card hover:bg-accent/25 transition-colors h-full">
                  <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">困境型內容</div>
                  <div className="mt-2 font-display text-2xl">{t.title}</div>
                  <p className="mt-3 readable text-muted-foreground">{t.summary}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    讀完直接帶你去 <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16 md:mt-20">
          <h2 className="font-display text-3xl md:text-4xl">三則回饋</h2>
          <p className="mt-2 readable text-muted-foreground max-w-prose">
            我們不靠保證式承諾，而是靠「流程透明」與「路徑清楚」。
          </p>
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

        {/* FAQ */}
        <section className="mt-16 md:mt-20">
          <h2 className="font-display text-3xl md:text-4xl">常見疑慮</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "預定後我要做什麼？",
                a: "在綠界頁面完成付款後，依提示填寫祈願姓名與事項即可。其餘由如法流程完成。",
              },
              {
                q: "你們會在網站上收集個資嗎？",
                a: "不會。本站不要求使用者在網站上輸入敏感個資；預定與付款流程由第三方金流平台綠界承接。",
              },
              {
                q: "我怕選錯本尊。",
                a: "先用『困境對位』選一尊；若仍拿不定主意，從各尊的『最推薦』方案開始，路徑最穩。",
              },
              {
                q: "我沒有時間研究很多文字。",
                a: "沒關係：看首頁四句困境 → 點進本尊頁 → 方案卡直接預定。最短三步完成。",
              },
            ].map((x) => (
              <Card key={x.q} className="p-7 gold-border bg-card">
                <div className="font-semibold">{x.q}</div>
                <div className="mt-2 readable text-muted-foreground">{x.a}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Social */}
        <section className="mt-16 md:mt-20">
          <Card className="p-8 gold-border bg-card paper-grain">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl">用關係累積觸及，用流程換成交</h3>
                <p className="mt-2 readable text-muted-foreground max-w-prose">
                  追蹤 FB：窗口提醒／短解答／常見困境的拆解。你看懂了，成交自然就快。
                </p>
              </div>
              <a
                href="https://www.facebook.com/profile.php?id=61583749010531"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Button variant="secondary" className="h-12 px-6 font-black tracking-[0.22em] uppercase gold-border">
                  追蹤 FB <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </Card>
        </section>
      </main>

      <SiteFooter />
      <FloatingFb />
      <StickyCta />

      {/* bottom spacing for sticky */}
      <div className="h-20" />
    </div>
  );
}
