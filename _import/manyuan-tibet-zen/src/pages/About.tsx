import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="關於" path="/about" />
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 pt-10 pb-24">
        <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">About</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">我們把話說清楚，才值得你護持</h1>
        <p className="mt-4 readable text-muted-foreground max-w-prose">
          滿願藏庫的核心不是「讓你迷信」，而是「讓你能做決定」。
          我們用清楚的敘事與透明流程，把你從焦慮與資訊過載中拉回來：
          選對路徑、完成護持、回到可延續的生活節奏。
        </p>

        <section className="mt-10 grid gap-4">
          <Card className="p-7 gold-border bg-card">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">我們相信</div>
            <ul className="mt-3 readable text-muted-foreground list-disc list-inside grid gap-2">
              <li>護持不是交易，而是發心與因緣的連結。</li>
              <li>說服力不是喊口號，而是把流程與選擇講清楚。</li>
              <li>最好的結果，是你看懂之後，心安地做決定。</li>
            </ul>
          </Card>

          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">我們不做</div>
            <ul className="mt-3 readable text-muted-foreground list-disc list-inside grid gap-2">
              <li>投資報酬保證、快速致富承諾、或任何誤導性話術。</li>
              <li>在本站收集敏感個資；付款與必要欄位由第三方金流承接。</li>
              <li>用恐嚇式話術逼迫你立刻行動；我們只做「把狀況講清楚」。</li>
            </ul>
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
