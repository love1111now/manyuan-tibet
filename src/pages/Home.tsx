import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { Link } from "wouter";
import { ArrowRight, ShieldCheck, ScrollText, Sparkles, ClipboardList, Clock } from "lucide-react";

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
                  我們不造神、不支薪
                  <br />
                  <span className="text-primary">只為您修補缺失的力量</span>
                </h1>

                <p className="mt-6 readable text-muted-foreground max-w-prose">
                  我們是台北的無償志工團隊，與西藏師兄姊跨境協力。我們沒有大師包裝，沒有預算打廣告，只有實實在在的法事造冊。
                  <br className="hidden sm:block" />
                  如果您覺得這世界太虛假、太吵鬧，想找回一點點安靜且真實的加持——
                  <span className="text-foreground/90">不用硬撐，請將這份沉重交託給純粹的傳承。</span>
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <div className="w-full sm:w-auto flex flex-col">
                    <Link href="/pay">
                      <Button className="h-12 w-full px-6 font-bold tracking-[0.22em] uppercase gold-border shadow-md">
                        立即登記保留名額 <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                    {/* 優化點 1：在主要 CTA 下方直接給予透明度承諾 */}
                    <div className="mt-2 text-[10px] text-muted-foreground/80 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      台灣志工晚間造冊，隔週公佈去識別化名錄供您核對
                    </div>
                  </div>

                  <a
                    href="#choose"
                    className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-background/35 gold-border readable hover:bg-accent/35 transition-colors self-start"
                  >
                    先幫我選本尊 <Sparkles className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6 text-xs text-muted-foreground tracking-[0.22em] uppercase">
                  清楚流程 · 經典依據 · 隔週造冊公佈
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

        <div className="tibetan-divider h-10 opacity-70" aria-hidden />

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
                  <li>3) 決定後到 <span className="text-foreground/90">登記頁</span> 直接下單，付款完成即由志工接手安排。</li>
                </ul>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="#choose" className="flex-1">
                  <Button className="h-12 w-full font-bold tracking-[0.22em] uppercase gold-border">
                    開始選本尊 <ArrowRight className="h-4 w-4 ml-2" />
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
                    { title: "① 選本尊與方案", body: "依困境對位（增財/守財/愛情/除障），挑選最貼近狀態的價位。" },
                    { title: "② 登記與祈願", body: "完成綠界付款，並於備註欄寫下具體困境，系統即刻保留名額。" },
                    { title: "③ 造冊與公佈", body: "志工於晚間造冊、送達壇城；並於隔週在 FB 公佈去識別化名錄。" }, // 優化點 2：加入造冊公佈流程
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

                <Separator className="my-3 border-border/50" />

                <div className="text-sm text-muted-foreground readable">
                  <span className="text-foreground/90 font-medium">小提醒：</span>
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
                      <div className="text-xs tracking-[0.24em] uppercase text-primary font-semibold">
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

        {/* ACTIVITY - 藥師佛加碼活動區塊 */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-2">
          <Card className="gold-border bg-card/70 overflow-hidden paper-grain border-primary/40 relative">
            <div className="absolute top-0 right-0 p-10 opacity-5 font-display text-9xl text-primary pointer-events-none">
              ✦
            </div>
            <div className="grid md:grid-cols-[280px_1fr]">
              <img src={VISUALS.sutraCloseup} alt="經卷與供燈示意" className="h-56 md:h-full w-full object-cover" loading="lazy" />
              <div className="p-7 md:p-10 z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary text-primary-foreground gold-border animate-pulse">本月限定企劃</Badge>
                  <span className="text-xs tracking-[0.26em] uppercase text-muted-foreground">琉璃護佑計畫</span>
                </div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl text-foreground">完成任一登記 → 免費加碼「藥師佛息災煙供」</h3>
                <p className="mt-4 readable text-muted-foreground">
                  我們深知「健康與安穩」是所有福報的底氣。地基不穩，再多資糧也難以受用。<br/>
                  <span className="text-foreground/90 font-medium">即日起，只要您護持本站任一法事（如黃財神、綠度母等），我們將直接為您加碼列入每週六的「藥師佛健康息災煙供」名錄中。</span>
                </p>
                <Separator className="my-6 border-primary/20" />
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase text-primary">雙重守護</div>
                    <div className="mt-1 font-display text-xl">主法事 + 藥師佛</div>
                    <div className="mt-2 text-sm text-muted-foreground">補足資糧同時清淨身心</div>
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase text-primary flex items-center gap-1">
                      <ClipboardList className="w-3 h-3" /> 流程全透明
                    </div>
                    <div className="mt-1 font-display text-xl">隔週名單公佈</div>
                    {/* 優化點 3：修正在首頁承諾影像回報的錯誤 */}
                    <div className="mt-2 text-sm text-muted-foreground">志工彙整後於 FB 公佈去識別化名單</div>
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase text-primary">免去繁瑣</div>
                    <div className="mt-1 font-display text-xl">自動併入名單</div>
                    <div className="mt-2 text-sm text-muted-foreground">下單主法事即自動獲取資格</div>
                  </div>
                </div>

                <div className="mt-7">
                  <Link href="/pay">
                    <Button className="h-12 px-6 font-bold tracking-[0.22em] uppercase gold-border hover:bg-primary hover:text-primary-foreground shadow-sm transition-all">
                      立即登記，領取雙重加持 <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                  <div className="mt-3 text-xs text-muted-foreground">
                    提醒：此為團隊發心加碼，名額將依每週壇城負載量動態調整。
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* PROOF */}
        <section className="mx-auto max-w-6xl px-4 pt-12 pb-24"> {/* 增加 pb 避免被 sticky CTA 擋住 */}
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Proof</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">回饋文：你不用猜</h2>
          <p className="mt-4 readable text-muted-foreground max-w-prose">
            我們不賣神話，只呈現大家最在意的：睡得著、決策變穩、錢留得住、關係少內耗。
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {HOME_TESTIMONIALS.map((t) => (
              <Card key={t.title} className="p-7 gold-border bg-card/70 paper-grain hover:border-primary/40 transition-colors">
                <div className="font-display text-xl text-foreground/90">{t.title}</div>
                <div className="mt-3 readable text-muted-foreground text-sm">{t.body}</div>
                <div className="mt-4 text-xs tracking-[0.22em] uppercase text-primary/80">{t.by}</div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:text-left">
            <Link href="/proof">
              <Button variant="outline" className="gold-border h-11 px-6">看更多真實回饋</Button>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
}