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
import TreasuryQuiz from "@/components/TreasuryQuiz";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DEITIES, HOME_TESTIMONIALS, SUTRA_QUOTES, SITE } from "@/lib/siteData";

import heroBrocade from "@/assets/visuals/generated/zen-wealth-hero.jpeg";
import iconYellow from "@/assets/visuals/generated/image_w1024_h1024_icon-yellow-water-offering.webp";
import iconMahashri from "@/assets/visuals/generated/image_w1024_h1024_icon-mahashri-home.webp";
import iconGanapati from "@/assets/visuals/generated/image_w1024_h1024_icon-ganapati-clarity.webp";
import iconKurukulla from "@/assets/visuals/generated/image_w1024_h1024_icon-kurukulla-magnetize.webp";
import quizArt from "@/assets/visuals/generated/treasury-quiz-illustration.jpeg";

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

      {/* Home notice */}
      <div className="border-b border-border bg-card/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="readable text-sm text-foreground">
            <span className="font-semibold text-primary">慶祝 FB 粉絲團成立</span>
            <span className="text-muted-foreground">：立即領取「黃財神手機桌布」。</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <a
              href="#/wallpaper"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 px-4 w-full sm:w-auto items-center justify-center rounded-md bg-primary text-primary-foreground font-black uppercase gold-border text-xs sm:text-sm tracking-[0.14em] sm:tracking-[0.18em]"
            >
              <span className="sm:hidden">領取桌布</span><span className="hidden sm:inline">立即領取黃財神桌布</span>
            </a>
            <a
              href={SITE.fb}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 px-4 w-full sm:w-auto items-center justify-center rounded-md border bg-background/40 gold-border text-xs sm:text-sm tracking-[0.14em] sm:tracking-[0.18em]"
            >
              <span className="sm:hidden">追蹤FB</span><span className="hidden sm:inline">更多佛法財庫等著你</span>
            </a>
          </div>
        </div>
      </div>

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
                  別在錯誤的頻率裡空轉，讓財富重新校正
                </div>

                <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05]">
                  你很努力。
                  <br />
                  就缺一場
                  <br />
                  <span className="text-primary">運行增益</span>
                  的護持。
                </h1>

                <p className="mt-6 readable text-muted-foreground max-w-prose">
                  盲目追逐增益，不如先截斷虧損。我們不給誇張保證，只用經典脈絡幫你精準切割四種困局：
                  <span className="text-foreground">集財／補庫／斷惑／聚人</span>。
                  只要選對儀軌、完成一次能量校正——你會發現最先回來的，是決策的清明、不再流失的財氣與久違的掌控感與貴人相助，魅力啟動。
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    className="h-12 px-6 gold-border bg-background/40"
                    onClick={() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    當下能量檢測 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Link href="/puja">
                    <Button className="h-12 px-6 font-black tracking-[0.24em] uppercase gold-border">
                      直達四大本尊 <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href="/pay"
                    className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border"
                  >
                    立刻啟動能量護持
                  </Link>
                </div>

                <div className="mt-6 text-xs text-muted-foreground leading-relaxed max-w-prose">
                  提醒：本站僅提供如法之宗教護持與功德迴向，非金融投資建議。真正的豐盛來自於上供下佈施與精準行動的能量顯化。
                </div>
              </div>

              <Card className="p-7 gold-border bg-card/75 backdrop-blur paper-grain">
                <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">留存核心：能量檢測</div>
                <div className="mt-4 overflow-hidden rounded-2xl gold-border bg-background/40">
                  <img src={quizArt} alt="" className="h-44 w-full object-cover opacity-95" loading="eager" />
                </div>
                <div className="mt-5 readable text-muted-foreground">
                  你不用想太多，照直覺選五題。
                  <span className="text-foreground">我們把你的卡點頻率抓出來</span>，
                  直接帶你去最對位的本尊頁。
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    className="h-11 px-5 font-black tracking-[0.22em] uppercase gold-border"
                    onClick={() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    立刻開始檢測 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Link href="/pay" className="h-11 px-5 inline-flex items-center justify-center rounded-md border bg-background/40 gold-border readable">
                    我已確定，直接去預定
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <TreasuryQuiz />

        {/* Deity selector */}
        <section className="mx-auto max-w-6xl px-4 pt-12 pb-6" id="deities">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">精準校正</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">四大正法，不再徒勞</h2>
              <p className="mt-3 readable text-muted-foreground max-w-prose">
                找出最令你不安的痛點，即是當前最需校正的頻率。點擊看見『經典邏輯』與『儀軌方案』。
              </p>
            </div>
            <Link href="/pay" className="underline underline-offset-4 text-primary text-sm">
              我已選定，直接進入預定入口
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
                      <div className="mt-2 readable text-muted-foreground">「{d.promise}」</div>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        解鎖古老智慧與解決方案 <ArrowRight className="h-4 w-4" />
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
            <div className="mt-3 font-display text-2xl md:text-3xl">先護守，後增益</div>
            <blockquote className="mt-4 border-l-2 border-border pl-4 readable text-foreground italic">
              「{SUTRA_QUOTES.protection}」
            </blockquote>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link
                href="/sutra"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-background/40 gold-border readable"
              >
                探尋法流核心邏輯
              </Link>
              <Link
                href="/pay"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border"
              >
                理解真理，啟動預定
              </Link>
            </div>
          </Card>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">翻轉實證</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">拿回人生主導權</h2>
              <p className="mt-3 readable text-muted-foreground max-w-prose">
                我們不靠奇蹟，靠的是如法儀軌、精準路徑與你願意踏出的那一步。
              </p>
            </div>
            <Link href="/proof" className="underline underline-offset-4 text-primary text-sm">
              參閱更多真實回饋
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {HOME_TESTIMONIALS.map((t) => (
              <Card key={t.title} className="p-7 gold-border bg-card">
                <div className="font-semibold text-primary/90">{t.title}</div>
                <div className="mt-3 readable text-muted-foreground leading-relaxed">{t.body}</div>
                <div className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground border-t pt-3 border-border/50">{t.by}</div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/puja">
              <Button className="h-12 px-6 font-black tracking-[0.24em] uppercase gold-border">
                對位適合我的儀軌 <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="/pay"
              className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border"
            >
              不再等待，直接安排
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