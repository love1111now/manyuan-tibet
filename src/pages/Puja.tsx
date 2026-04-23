import { Link } from "wouter";
import { ArrowRight, ClipboardList } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import FloatingFb from "@/components/FloatingFb";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// 🚨 關鍵修正：將 DEITIES 的來源指向搬家後的資料來源 @/data/deities
// 徹底排除終端機報錯：No matching export in "src/lib/siteData.ts" for import "DEITIES"
import { DEITIES } from "@/data/deities";

export default function Puja() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="法會總覽" path="/puja" />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-32">
        <div className="grid gap-10 md:grid-cols-[1fr_.9fr] items-start">
          <div>
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">總覽</div>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">先對位，再護持</h1>
            <p className="mt-4 readable text-muted-foreground max-w-prose">
              當您正在焦慮、正在失眠、正在被金錢或關係逼到牆角——最容易做錯的，就是亂選、亂拜、亂花錢。
              我們把路徑拆清楚：<span className="text-foreground/90 font-medium">增財、守家、破障、人緣、救急、護身心</span>。
              您只要做一件事：選到最像您現況的那一尊，然後將沉重交託給傳承。
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/pay">
                <Button className="h-12 px-6 font-bold tracking-[0.2em] uppercase gold-border shadow-sm">
                  我想直接前往總表登記 <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link
                href="/sutra"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-card gold-border readable hover:bg-accent/30 transition-colors"
              >
                先看經典主軸
              </Link>
            </div>
          </div>

          <Card className="p-7 gold-border bg-card paper-grain relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <ClipboardList className="w-24 h-24" />
            </div>
            <div className="font-semibold text-lg">怎麼選：圖解 3 步驟</div>
            <ol className="mt-5 grid gap-4 text-sm readable text-muted-foreground list-decimal list-inside relative z-10">
              <li><strong className="text-foreground/90">感受下方卡片</strong>：哪一句最對位，就是您現在的方向。</li>
              <li><strong className="text-foreground/90">選擇方案</strong>：進入本尊頁，挑選符合您狀態的方案。</li>
              <li><strong className="text-foreground/90">綠界結帳與造冊</strong>：結帳時於「備註欄」寫下具體困境，志工將於晚間造冊，並於隔週公佈名錄。</li>
            </ol>
            <div className="mt-6 pt-4 border-t border-border/50 text-xs text-primary/80 font-medium tracking-widest">
              ✦ 圓滿的開始，只需要做一次正確的決定。
            </div>
          </Card>
        </div>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {DEITIES.map((d) => (
            <Link key={d.key} href={`/deity/${d.key}`}>
              <Card className="overflow-hidden gold-border bg-card hover:bg-accent/25 hover:border-primary/40 transition-all duration-300">
                <div className="grid md:grid-cols-[220px_1fr]">
                  <img 
                    src={d.heroImage} 
                    alt={d.name} 
                    className="h-44 w-full object-contain bg-background/30" 
                    loading="lazy" 
                    decoding="async"
                  />
                  <div className="p-7 flex flex-col justify-between">
                    <div>
                      <div className="text-xs tracking-[0.24em] uppercase text-primary font-bold">{d.primaryIntent}</div>
                      <div className="mt-1 font-display text-3xl">{d.name}</div>
                      <p className="mt-3 readable text-muted-foreground text-sm line-clamp-2">{d.promise}</p>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground/90">
                      看方案與介紹 <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </section>
      </main>

      <SiteFooter />
      <FloatingFb />
      <StickyCta />
    </div>
  );
}