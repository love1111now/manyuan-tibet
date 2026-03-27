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
import wallpaperYellow from "@/assets/downloads/huangcaishen-wallpaper.jpg";

import PageIllustrations from "@/components/PageIllustrations";
import homeHero1 from "@/assets/visuals/seo/image_w5504_h3072_home-hero-1.webp";
import homeHero2 from "@/assets/visuals/seo/image_w5504_h3072_home-hero-2.webp";
import homeHero3 from "@/assets/visuals/seo/image_w5504_h3072_home-hero-3.webp";
import homeHero4 from "@/assets/visuals/seo/image_w5504_h3072_home-hero-4.webp";

const ICON_BY_KEY: Record<string, string> = {
  yellow: iconYellow,
  mahashri: iconMahashri,
  ganapati: iconGanapati,
  kurukulla: iconKurukulla,
};

export default function Home() {
  // 點擊選項後，平滑捲動到完整的測驗元件
  const handleQuizClick = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo title="滿願藏庫｜密法能量校正・運財法事" path="/" />
      <SiteHeader />

      <main>
        {/* 1) 停留率：Hero (3秒內接住FB冷流量) */}
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

          <div className="mx-auto max-w-6xl px-4 pt-8 pb-14 md:pt-16 md:pb-18">
            <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr] items-start">
              
              {/* 左側：痛點共鳴標題 */}
              <div className="pt-2 md:pt-8">
                <div className="inline-flex items-center gap-2 text-xs tracking-[0.26em] uppercase text-muted-foreground">
                  <Sparkles className="h-4 w-4" />
                  30 秒精準能量對位
                </div>

                <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.15]">
                  現在的狀態，<br />
                  <strong className="text-primary font-black">哪裡卡住了？</strong>
                </h1>

                <p className="mt-6 readable text-muted-foreground max-w-prose">
                  努力總像石沉大海？關係一直耗損？<br />
                  <span className="text-foreground">別把今天的耗損，養成明天的痛。</span><br />
                  找對專屬本尊，你只需要完成一次正確的對位。
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 hidden md:flex">
                  <Link
                    href="/puja"
                    className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-background/30 gold-border readable"
                  >
                    直接看四大本尊路徑
                  </Link>
                </div>
              </div>

              {/* 右側：超級鉤子 (測驗第一題直接裸露) */}
              <Card className="p-6 md:p-8 gold-border bg-card/85 backdrop-blur paper-grain shadow-xl">
                <div className="font-display text-xl md:text-2xl text-foreground">
                  碰到錢或關係，你最常陷入哪種狀態？
                </div>
                <div className="mt-2 text-sm text-muted-foreground mb-6">
                  請憑直覺點擊，我們帶你找答案：
                </div>

                <div className="flex flex-col gap-3">
                  <Button 
                    variant="outline" 
                    className="h-auto py-4 px-5 justify-start text-left bg-background/50 hover:bg-accent/20 gold-border whitespace-normal"
                    onClick={handleQuizClick}
                  >
                    <span className="font-bold text-primary mr-3 text-lg">悶</span> 
                    <span className="text-muted-foreground">錢進不來，努力總像石沉大海</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-auto py-4 px-5 justify-start text-left bg-background/50 hover:bg-accent/20 gold-border whitespace-normal"
                    onClick={handleQuizClick}
                  >
                    <span className="font-bold text-primary mr-3 text-lg">漏</span> 
                    <span className="text-muted-foreground">錢守不住，總有意外支出破財</span>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="h-auto py-4 px-5 justify-start text-left bg-background/50 hover:bg-accent/20 gold-border whitespace-normal"
                    onClick={handleQuizClick}
                  >
                    <span className="font-bold text-primary mr-3 text-lg">迷</span> 
                    <span className="text-muted-foreground">遇不到對的人，關係一直耗損</span>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="h-auto py-4 px-5 justify-start text-left bg-background/50 hover:bg-accent/20 gold-border whitespace-normal"
                    onClick={handleQuizClick}
                  >
                    <span className="font-bold text-primary mr-3 text-lg">亂</span> 
                    <span className="text-muted-foreground">總遇小人，關鍵時刻差臨門一腳</span>
                  </Button>
                </div>

                {/* 秒級信任見證 */}
                <div className="mt-6 pt-5 border-t border-border/60">
                  <div className="text-sm italic text-muted-foreground leading-relaxed">
                    「原本卡住半年的案子，能量對位後當週就動了。找回節奏的感覺真好。」
                    <span className="block mt-1 text-xs not-italic tracking-wider uppercase opacity-70">—— 台北 郭先生</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 額外配圖（首頁 4 張） */}
        <PageIllustrations
          images={[
            { src: homeHero1, alt: "藏傳佛教寺院內景與祭壇" },
            { src: homeHero2, alt: "供水碗與酥油燈的供桌靜物" },
            { src: homeHero3, alt: "金色曼荼羅光紋抽象背景" },
            { src: homeHero4, alt: "念珠與香爐的靜心場景" },
          ]}
          className="pt-8"
        />

        {/* 1) 停留率：完整的互動測驗元件 (點擊上面按鈕會滑動到這裡) */}
        <div id="quiz">
          <TreasuryQuiz />
        </div>

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

        {/* 3) 衝動：四尊入口 */}
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

        {/* 3) 衝動：Bonus 區塊（原本的最上方橫條移到這裡，不干擾初次閱讀） */}
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-6">
          <Card className="p-7 gold-border bg-card/70 backdrop-blur paper-grain">
            <div className="grid gap-6 md:grid-cols-[1fr_.9fr] items-center">
              <div>
                <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">免費結緣</div>
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