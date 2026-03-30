/*
  DESIGN REMINDER (Home)
  - Hero: cinematic stillness, black + gold, strong hierarchy
  - Funnel: settle → choose deity → pick plan → checkout
*/

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { Link } from "wouter";
import { ArrowRight, ShieldCheck, ScrollText, Sparkles } from "lucide-react";

import { DEITIES, HOME_TESTIMONIALS, VISUALS } from "@/lib/siteData";

export default function Home() {
  const q = DEITIES[0].scripture[0];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden section-fade">
          <div className="absolute inset-0 opacity-40">
            <img
              src={VISUALS.heroGilded}
              alt="滿願藏庫｜法流意象"
              className="h-full w-full object-cover scale-[1.07]"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/75 to-background" />

          <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-12 md:pt-20 md:pb-18">
            <div className="flex flex-col gap-10 md:grid md:grid-cols-[1.12fr_.88fr] md:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="gold-border bg-background/35 text-foreground backdrop-blur">
                    本月吉日窗口・名額開放
                  </Badge>
                  <Badge className="gold-border bg-background/35 text-foreground/90 backdrop-blur">
                    先安定，再行動
                  </Badge>
                </div>

                <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02]">
                  把心安下來
                  <br />
                  <span className="text-primary">讓路重新亮起</span>
                </h1>

                <p className="mt-6 readable text-muted-foreground max-w-prose">
                  你不是不努力；你是一直在用同一種方式硬撐。
                  <br className="hidden sm:block" />
                  當現金流越來越緊、情緒越來越躁、決策越來越亂，問題就不只是在「再加把勁」。
                  <span className="text-foreground/90">先把心安下來、把方向對準、把流程做完</span>——
                  這才是危機真正開始收斂的方式。
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/pay">
                    <Button className="h-12 px-6 font-bold tracking-[0.22em] uppercase gold-border">
                      立即登記保留名額 <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>

                  <a
                    href="#choose"
                    className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-background/35 gold-border readable hover:bg-accent/35 transition-colors"
                  >
                    先幫我選本尊 <Sparkles className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6 text-xs text-muted-foreground tracking-[0.22em] uppercase">
                  清楚流程 · 經典依據 · 不亂承諾
                </div>
              </div>

              <Card className="gold-border bg-background/35 backdrop-blur p-7 paper-grain">
                <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">今日經典提醒</div>
                <div className="mt-3 font-display text-2xl">用慈心，讓良緣有路</div>
                <blockquote className="mt-4 border-l-2 border-border pl-4 readable text-muted-foreground">
                  {q.quote}
                  <div className="mt-3 text-xs text-muted-foreground/80">出處：{q.source}</div>
                </blockquote>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/sutra"
                    className="h-11 px-5 inline-flex items-center justify-center rounded-md border bg-card/35 gold-border text-sm hover:bg-accent/35 transition-colors"
                  >
                    看經典依據 <ScrollText className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/proof"
                    className="h-11 px-5 inline-flex items-center justify-center rounded-md border bg-card/35 gold-border text-sm hover:bg-accent/35 transition-colors"
                  >
                    看真實回饋 <ShieldCheck className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* QUICK GUIDE */}
        <section className="mx-auto max-w-6xl px-4 pt-12 pb-2">
          <div className="grid gap-4 md:grid-cols-[1.05fr_.95fr] md:items-stretch">
            <Card className="p-7 md:p-9 gold-border bg-card/70 paper-grain">
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">快速指引</div>
              <h2 className="mt-2 font-display text-3xl">30 秒找到你要的護持</h2>
              <p className="mt-4 readable text-muted-foreground">
                你不用研究一堆名詞。先選「你卡在哪」，我們把每位本尊的方向寫得很清楚。
              </p>

              <div className="mt-6 grid gap-3">
                <div className="flex flex-wrap gap-2">
                  <Link href="/deity/yellow" className="inline-flex">
                    <Badge className="text-white gold-border bg-background/35 hover:bg-accent/35 transition-colors">增財／現金流 → 黃財神</Badge>
                  </Link>
                  <Link href="/deity/mahashri" className="inline-flex">
                    <Badge className="text-white gold-border bg-background/35 hover:bg-accent/35 transition-colors">守財／家運 → 大吉祥天女</Badge>
                  </Link>
                  <Link href="/deity/ganapati" className="inline-flex">
                    <Badge className="text-white gold-border bg-background/35 hover:bg-accent/35 transition-colors">卡關／決策期 → 象頭財神</Badge>
                  </Link>
                  <Link href="/deity/kurukulla" className="inline-flex">
                    <Badge className="text-white gold-border bg-background/35 hover:bg-accent/35 transition-colors">愛情／人緣 → 作明佛母</Badge>
                  </Link>
                  <Link href="/deity/green-tara" className="inline-flex">
                    <Badge className="text-white gold-border bg-background/35 hover:bg-accent/35 transition-colors">焦慮／身心不穩 → 綠度母</Badge>
                  </Link>
                </div>

                <ul className="mt-2 text-sm text-muted-foreground readable space-y-2">
                  <li>1) <span className="text-foreground/90">先看本尊頁</span>：痛點、為什麼對位、推薦方案、FAQ。</li>
                  <li>2) 再看方案的「<span className="text-foreground/90">如法內容（節錄）</span>」：你會清楚知道我們會做哪些儀軌與回向。</li>
                  <li>3) 決定後到 <span className="text-foreground/90">登記頁</span> 直接下單，付款完成即保留名額。</li>
                </ul>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="#choose" className="flex-1">
                  <Button className="h-12 w-full font-bold tracking-[0.22em] uppercase gold-border">
                    開始選本尊 <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <Link href="/pay" className="flex-1">
                  <Button variant="outline" className="h-12 w-full gold-border">直接去登記（收費表）</Button>
                </Link>
              </div>
            </Card>

            <Card className="p-7 md:p-9 gold-border bg-background/35 backdrop-blur paper-grain">
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">圖解流程</div>
              <h3 className="mt-2 font-display text-2xl">清楚三步，完成護持</h3>

              <div className="mt-6 grid gap-3">
                <div className="grid gap-3">
                  {[
                    { title: "① 選本尊", body: "依困境對位：增財／守財／愛情／破障／護身心" },
                    { title: "② 選方案", body: "看推薦＋看儀軌內容，挑最貼近你狀態的價位" },
                    { title: "③ 登記", body: "到法事列表點『立即登記』，付款完成即保留名額" },
                  ].map((s, idx) => (
                    <div key={s.title} className="relative">
                      <Card className="p-5 gold-border bg-card/60">
                        <div className="font-display text-xl">{s.title}</div>
                        <div className="mt-2 text-sm text-muted-foreground readable">{s.body}</div>
                      </Card>
                      {idx < 2 ? (
                        <div className="hidden md:flex items-center justify-center py-2 text-muted-foreground">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>

                <Separator className="my-3" />

                <div className="text-sm text-muted-foreground readable">
                  <span className="text-foreground/90">小提醒：</span>
                  護持不是交易；我們承諾的是如法完成流程與清楚交付。祈願越具體（對象/時間/困境/你希望的改變），回向越容易對位。
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* DEITIES */}
        <section id="choose" className="mx-auto max-w-6xl px-4 pt-14 pb-4 scroll-mt-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">
                Choose → plan → checkout
              </div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">需求分明：依神明對位困境</h2>
              <p className="mt-3 readable text-muted-foreground max-w-prose">
                不用硬撐，也不用亂拜。先看你卡在哪裡，再選最對位的本尊。
              </p>
            </div>

            <div className="hidden md:flex">
              <Link href="/pay">
                <Button variant="outline" className="gold-border">
                  直接前往登記
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {DEITIES.map((d) => (
              <Link key={d.key} href={`/deity/${d.key}`}>
                <Card className="overflow-hidden gold-border bg-card/70 hover:bg-accent/30 transition-colors paper-grain">
                  <div className="grid md:grid-cols-[220px_1fr]">
                    <img src={d.heroImage} alt={d.name} className="h-44 w-full object-cover" loading="lazy" />
                    <div className="p-7">
                      <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">
                        {d.primaryIntent}
                      </div>
                      <div className="mt-2 font-display text-3xl">{d.name}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{d.subtitle}</div>
                      <p className="mt-3 readable text-muted-foreground">{d.promise}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                        看介紹與方案 <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/pay">
              <Button className="h-12 w-full font-bold tracking-[0.22em] uppercase gold-border">直接前往登記</Button>
            </Link>
          </div>
        </section>

        {/* ACTIVITY */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-2">
          <Card className="gold-border bg-card/70 overflow-hidden paper-grain">
            <div className="grid md:grid-cols-[280px_1fr]">
              <img src={VISUALS.sutraCloseup} alt="經卷與供燈示意" className="h-56 md:h-full w-full object-cover" loading="lazy" />
              <div className="p-7 md:p-10">
                <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">本月活動</div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl">完成登記 → 贈「回向心念指引」</h3>
                <p className="mt-4 readable text-muted-foreground">
                  你會收到一份簡短但可執行的建議：
                  <span className="text-foreground/90">做完護持後，怎麼持心、怎麼配合行動</span>。
                  不是大道理，是讓你更容易把力量接住。
                </p>
                <Separator className="my-6" />
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">名額</div>
                    <div className="mt-1 font-display text-xl">每月有限</div>
                    <div className="mt-2 text-sm text-muted-foreground">為了品質與如法流程</div>
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">速度</div>
                    <div className="mt-1 font-display text-xl">完成登記即保留</div>
                    <div className="mt-2 text-sm text-muted-foreground">下單完成即算保留名額</div>
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">清楚</div>
                    <div className="mt-1 font-display text-xl">每頁都寫明白</div>
                    <div className="mt-2 text-sm text-muted-foreground">本尊、方案、適合狀態、FAQ</div>
                  </div>
                </div>

                <div className="mt-7">
                  <Link href="/pay">
                    <Button className="h-12 px-6 font-bold tracking-[0.22em] uppercase gold-border">
                      立即登記保留名額 <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <div className="mt-3 text-xs text-muted-foreground">
                    提醒：護持不是交易；我們只承諾如法完成流程與清楚交付。
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* PROOF */}
        <section className="mx-auto max-w-6xl px-4 pt-12 pb-14">
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Proof</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">回饋文：你不用猜</h2>
          <p className="mt-4 readable text-muted-foreground max-w-prose">
            我們不賣神話，只呈現大家最在意的：睡得著、決策變穩、錢留得住、關係少內耗。
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {HOME_TESTIMONIALS.map((t) => (
              <Card key={t.title} className="p-7 gold-border bg-card/70 paper-grain">
                <div className="font-display text-xl">{t.title}</div>
                <div className="mt-3 readable text-muted-foreground">{t.body}</div>
                <div className="mt-4 text-xs tracking-[0.22em] uppercase text-muted-foreground">{t.by}</div>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/proof">
              <Button variant="outline" className="gold-border">看更多回饋</Button>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
}