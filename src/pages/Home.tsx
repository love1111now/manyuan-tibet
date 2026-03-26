/*
Homepage funnel:
停留率 → 信任 → 衝動 → 下單
*/

import { Link } from "wouter";
import { ArrowRight, Sparkles, Check, ShieldCheck, Zap } from "lucide-react";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import TreasuryQuiz from "@/components/TreasuryQuiz";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DEITIES, HOME_TESTIMONIALS, SUTRA_QUOTES, SITE } from "@/lib/siteData";

import heroBrocade from "@/assets/visuals/generated/hero-airy-brocade.jpeg";
import iconYellow from "@/assets/visuals/generated/image_w1024_h1024_icon-yellow-water-offering.webp";
import iconMahashri from "@/assets/visuals/generated/image_w1024_h1024_icon-mahashri-home.webp";
import iconGanapati from "@/assets/visuals/generated/image_w1024_h1024_icon-ganapati-clarity.webp";
import iconKurukulla from "@/assets/visuals/generated/image_w1024_h1024_icon-kurukulla-magnetize.webp";
import quizArt from "@/assets/visuals/generated/treasury-quiz-illustration.jpeg";
import wallpaperYellow from "@/assets/downloads/huangcaishen-wallpaper.jpg";

const ICON_BY_KEY: Record<string, string> = {
  yellow: iconYellow,
  mahashri: iconMahashri,
  ganapati: iconGanapati,
  kurukulla: iconKurukulla,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="滿願藏庫｜密法能量校正・運財法事" path="/" />
      <SiteHeader />

      {/* Bonus strip (不打斷首屏敘事，但提供立即回饋) */}
      <div className="border-b border-border/60 bg-card/50 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="readable text-sm text-foreground">
            <span className="font-semibold text-primary">Bonus</span>
            <span className="text-muted-foreground">：領取「黃財神手機桌布」— 先把氣場立起來。</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <a
              href="#/wallpaper"
              className="inline-flex h-10 px-4 w-full sm:w-auto items-center justify-center rounded-md bg-primary text-primary-foreground font-black uppercase gold-border text-xs sm:text-sm tracking-[0.14em] sm:tracking-[0.18em]"
            >
              立即領取
            </a>
           
          </div>
        </div>
      </div>

      <main>
        {/* 1) 停留率：Hero */}
        <section className="relative overflow-hidden isolate">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroBrocade}
              alt=""
              className="h-full w-full object-cover opacity-80"
              loading="eager"
            />
            <div className="absolute inset-0 hero-brocade opacity-80" />
          </div>

          <div className="mx-auto max-w-6xl px-4 pt-14 pb-14 md:pt-20 md:pb-18">
            <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr] items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-xs tracking-[0.26em] uppercase text-muted-foreground">
                  <Sparkles className="h-4 w-4" />
                  30 秒對位卡點，直接走最短路
                </div>

                <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05]">
                  豐補財庫
                  <br />
                  <strong className="text-primary font-black">迎來貴人</strong>。
                </h1>

                <p className="mt-6 readable text-muted-foreground max-w-prose">
                  透過正法護持：
                  <span className="text-foreground">穩財／補庫／清明／聚人</span>。
                  你只要完成一次對位。
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    className="h-12 px-6 font-black tracking-[0.24em] uppercase gold-border"
                    onClick={() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    找到您的護持 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Link
                    href="/puja"
                    className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-background/30 gold-border readable"
                  >
                    直接看四大本尊
                  </Link>
                </div>

                <div className="mt-6 text-xs text-muted-foreground leading-relaxed max-w-prose">
                  提醒：本站內容屬宗教護持與迴向之資訊整理，不提供醫療、法律、投資報酬之保證或替代建議。
                </div>
              </div>

              <Card className="p-7 gold-border bg-card/75 backdrop-blur paper-grain">
                <div className="text-xs tracking-[0.36em] uppercase text-muted-foreground">留存核心：能量檢測</div>
                <div className="mt-4 overflow-hidden rounded-2xl gold-border bg-background/30">
                  <img src={quizArt} alt="" className="h-44 w-full object-cover opacity-95" loading="eager" />
                </div>
                <div className="mt-5 readable text-muted-foreground">
                  不用想太多，照直覺選。
                  <span className="text-foreground">我們會把你的卡點抓出來</span>，
                  直接帶你去最對位的本尊頁。
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    className="h-11 px-5 font-black tracking-[0.22em] uppercase gold-border"
                    onClick={() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    開始檢測 <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 1) 停留率：互動測驗 */}
        <TreasuryQuiz />

        {/* 2) 信任：經典主軸（證據） */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-6">
          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">
                  信任背書｜{SUTRA_QUOTES.protectionSource}
                </div>
                <div className="mt-3 font-display text-2xl md:text-3xl">先護守，後增益</div>
              </div>
              <Badge className="gold-border bg-accent/25 text-accent-foreground">不做保證，只講路徑</Badge>
            </div>

            <blockquote className="mt-4 border-l-2 border-border/70 pl-4 readable text-foreground italic">
              「{SUTRA_QUOTES.protection}」
            </blockquote>

            <div className="mt-5 grid gap-3 sm:grid-cols-3 readable text-muted-foreground">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">先止耗損</div>
                  <div className="text-sm">把災橫、漏財、失位先止住，人生才站得住。</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Zap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">再求增益</div>
                  <div className="text-sm">用正確儀軌補資糧，讓財路與貴人自然回來。</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">路徑透明</div>
                  <div className="text-sm">選本尊 → 選方案 → 完成護持登記。</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/sutra"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-background/30 gold-border readable"
              >
                先看增益經典
              </Link>
              <Link
                href="/pay"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border"
              >
                我想安排護持 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Card>
        </section>

        {/* 2) 信任：見證精選 */}
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">翻轉實證</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">願你是下一個回來感恩的人</h2>
              <p className="mt-3 readable text-muted-foreground max-w-prose">
                你要的改善往往很具體：睡得著、支出止得住、決策不後悔、關係不再耗損。
              </p>
            </div>
            <Link href="/proof" className="underline underline-offset-4 text-primary text-sm">
              看更多見證
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {HOME_TESTIMONIALS.slice(0, 6).map((t) => (
              <Card key={t.title} className="p-7 gold-border bg-card">
                <div className="font-semibold text-primary/90">{t.title}</div>
                <div className="mt-3 readable text-muted-foreground leading-relaxed">{t.body}</div>
                <div className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground border-t pt-3 border-border/50">
                  {t.by}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/proof">
              <Button variant="outline" className="h-12 px-6 gold-border readable">
                我想先確認更多回饋
              </Button>
            </Link>
            <Link
              href="/pay"
              className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border"
            >
              我準備好，直接安排 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* 3) 衝動：四尊入口（選擇變簡單） */}
        <section className="mx-auto max-w-6xl px-4 pt-12 pb-6" id="deities">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">精準校正</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">四條路徑，不混走</h2>
              <p className="mt-3 readable text-muted-foreground max-w-prose">
                你只要選一尊，先把最痛的耗損止住，再把增益做上來。
              </p>
            </div>
            <Link href="/puja" className="underline underline-offset-4 text-primary text-sm">
              看法會總覽
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {DEITIES.map((d) => (
              <Link key={d.key} href={d.route}>
                <Card className="p-7 gold-border bg-card hover:bg-accent/20 transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="h-16 w-16 rounded-2xl gold-border bg-background/30 overflow-hidden shrink-0">
                      <img src={ICON_BY_KEY[d.key]} alt="" className="h-full w-full object-cover" loading="eager" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="font-display text-2xl">{d.name}</div>
                        <Badge className="gold-border bg-accent/25 text-accent-foreground">{d.subtitle}</Badge>
                      </div>
                      <div className="mt-2 readable text-muted-foreground">「{d.promise}」</div>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        看方案與流程 <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* 3) 衝動：Bonus 區塊（立即回饋） */}
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-6">
          <Card className="p-7 gold-border bg-card/70 backdrop-blur paper-grain">
            <div className="grid gap-6 md:grid-cols-[1fr_.9fr] items-center">
              <div>
                <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">立即回饋</div>
                <div className="mt-2 font-display text-2xl md:text-3xl">先把氣場立起來：黃財神桌布</div>
                <p className="mt-3 readable text-muted-foreground max-w-prose">
                  不用等「全部都準備好」才開始。先把每天會看到的畫面換成對位的象徵，提醒自己：
                  我正在走出耗損，往增益走。
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/wallpaper"
                    className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border"
                  >
                    立即領取 <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={SITE.fb}
                    target="_blank"
                    rel="noreferrer"
                    className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-background/30 gold-border readable"
                  >
                    追蹤 FB 領更多資源
                  </a>
                </div>
              </div>
              <div className="rounded-[32px] overflow-hidden gold-border">
                <img src={wallpaperYellow} alt="黃財神桌布預覽" className="h-[360px] w-full object-cover" loading="eager" />
              </div>
            </div>
          </Card>
        </section>

        {/* 4) 下單：流程 + 強 CTA */}
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-16">
          <Card className="p-7 gold-border bg-card">
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">下單流程</div>
            <div className="mt-2 font-display text-2xl md:text-3xl">選對一次，就往下走完</div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Card className="p-6 gold-border bg-background/25">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl gold-border bg-card/60 grid place-items-center font-black">1</div>
                  <div>
                    <div className="font-semibold text-foreground">選本尊</div>
                    <div className="mt-1 readable text-muted-foreground text-sm">用測驗或直覺，進本尊頁看「首選方案」。</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 gold-border bg-background/25">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl gold-border bg-card/60 grid place-items-center font-black">2</div>
                  <div>
                    <div className="font-semibold text-foreground">選方案</div>
                    <div className="mt-1 readable text-muted-foreground text-sm">從最推薦那張開始，不確定就先選 NT$980 核心路線。</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 gold-border bg-background/25">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl gold-border bg-card/60 grid place-items-center font-black">3</div>
                  <div>
                    <div className="font-semibold text-foreground">到緣界完成護持</div>
                    <div className="mt-1 readable text-muted-foreground text-sm">本站不蒐集敏感個資，付款由第三方金流承接。</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/pay"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border"
              >
                直接去預定入口 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/puja"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-background/30 gold-border readable"
              >
                先看法會總覽
              </Link>
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
