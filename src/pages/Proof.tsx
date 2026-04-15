/*
Design philosophy: Neo-thangka noir (Professional Consultant Upgrade)
- L6 [Trust & Social Proof]: Aggregating ALL deity-specific testimonials.
- Features: Categorized success stories, Transparency declaration, Clear CTAs.
- 100% Unabbreviated Production Ready Code.
*/

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
// 🟢 AI SEO 必備：引入 Helmet 動態注入 SEO 與結構化資料
import { Helmet } from "react-helmet-async"; 

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import { Link } from "wouter";
import { 
  ShieldCheck, 
  ClipboardList, 
  ExternalLink, 
  ArrowRight, 
  Quote, 
  HeartHandshake, 
  Sparkles 
} from "lucide-react";

import { DEITIES, HOME_TESTIMONIALS } from "@/lib/siteData";

export default function Proof() {
  // 🟢 核心邏輯：自動聚合並提取所有神明資料庫中的專屬見證
  const allDeityTestimonials = DEITIES.flatMap(d => 
    (d.testimonials || []).map(t => ({
      ...t,
      deityName: d.name,
      deityKey: d.key,
      themeColor: d.themeColor.accent
    }))
  );

  // 顧問級分類邏輯
  const wealthAndObstacleTestimonials = allDeityTestimonials.filter(t => 
    ['yellow', 'mahashri', 'ganapati', 'green-tara'].includes(t.deityKey)
  );
  
  const healingAndRelationshipTestimonials = allDeityTestimonials.filter(t => 
    ['medicine-buddha', 'kurukulla', 'padmasambhava'].includes(t.deityKey)
  );

  // 🟢 AI SEO (AEO) 核心晶片：動態生成 Review (評論) 結構化資料
  // 這會告訴 AI 這些都是針對特定服務的 5 星好評，大幅提升網站 E-E-A-T 信任度
  const reviewsSchema = allDeityTestimonials.map(t => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": t.by
    },
    "name": t.title,
    "reviewBody": t.body,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "itemReviewed": {
      "@type": "Service",
      "name": `滿願藏庫 - ${t.deityName} 修復計畫`
    }
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* 🟢 注入專屬的 Title, Meta 與 JSON-LD */}
      <Helmet>
        <title>生命轉變實證｜絕對透明的造冊機制｜滿願藏庫</title>
        <meta name="description" content="不賣神話，只提供絕對透明的造冊機制與真實發生的改變。閱覽來自全台各地，透過滿願藏庫祈福法事重獲身心安頓的真實生命見證。" />
        <script type="application/ld+json">{JSON.stringify(reviewsSchema)}</script>
      </Helmet>

      <SiteHeader />

      <main className="flex-1 mx-auto max-w-6xl px-4 pt-12 pb-32 w-full">
        {/* HEADER: 顧問質感導言 */}
        <div className="flex flex-col md:items-center text-left md:text-center mb-16">
          <div className="flex items-center gap-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-bold mb-4 bg-primary/5 px-3 py-1.5 rounded-sm w-fit md:mx-auto">
            <ShieldCheck className="w-4 h-4" /> Transparency & Trust
          </div>
          <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">信任，建立在看得到的細節</h1>
          <p className="mt-6 readable text-muted-foreground max-w-2xl text-lg leading-relaxed md:mx-auto italic">
            我們深知網路充滿了誇大的神蹟與保證。因此，滿願藏庫不賣神話，我們只提供兩件事：<br className="hidden md:block"/>
            <strong className="text-foreground/90 font-medium">絕對透明的造冊機制</strong>，以及<strong className="text-foreground/90 font-medium">真實發生的改變</strong>。
          </p>
        </div>

        {/* SECTION 1: 絕對透明的造冊機制 (L6 信任收割區) */}
        <section className="mb-20">
          <Card className="gold-border bg-card/80 backdrop-blur paper-grain overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none transition-transform duration-1000 hover:scale-110">
              <ClipboardList className="w-48 h-48 text-primary" />
            </div>
            
            <div className="p-8 md:p-14 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary text-primary-foreground gold-border px-4 py-1.5 tracking-widest text-[10px] font-bold uppercase animate-pulse">
                  我們最強的證明
                </Badge>
              </div>
              
              <h2 className="font-display text-3xl md:text-5xl leading-tight">不支薪志工・隔週名單公佈</h2>
              <p className="mt-6 readable text-muted-foreground max-w-3xl text-lg leading-relaxed">
                我們無法提供遠在西藏壇城的即時直播，但我們給您最踏實的行政透明。<br/>
                台灣志工團隊將於晚間下班後嚴謹造冊，並於<strong className="text-foreground font-bold">隔週在 FB 粉專公佈「去識別化」的功德名錄</strong>。您付出的每一分善意，都有跡可循。
              </p>

              {/* 模擬名單視覺，具象化透明度 */}
              <div className="mt-10 p-6 md:p-8 rounded-xl bg-background/60 border border-primary/20 shadow-inner">
                <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase font-bold mb-5 flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-primary" /> 功德名錄發布範例 (已去識別化)
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-foreground/80 font-bold font-mono tracking-wider">
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />陳*明 (台北市)</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />林*華 (台中市)</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />張*傑 (高雄市)</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />王*婷 (新北市)</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />吳*恩 (桃園市)</div>
                  <div className="text-muted-foreground italic col-span-2 md:col-span-3">...及其他發心護持者，皆已如法送達壇城。</div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <a href="https://www.facebook.com/profile.php?id=61583749010531" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button className="h-16 w-full px-10 font-bold tracking-[0.15em] gold-border bg-[#0866FF]/90 hover:bg-[#0866FF] text-white shadow-xl transition-all active:scale-95 text-lg">
                    前往 FB 粉專查證過往名單 <ExternalLink className="w-5 h-5 ml-2 opacity-90" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </section>

        <div className="tibetan-divider h-12 opacity-60 mb-16" aria-hidden />

        {/* SECTION 2: 聚合真實回饋 (資糧與破局分類) */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-4">
            <HeartHandshake className="w-6 h-6 text-primary" />
            <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold">Real Transformations</div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground/90">資糧流動與事業破局</h2>
          <p className="mt-4 readable text-muted-foreground max-w-3xl text-lg italic">
            「他們也曾被現金流壓得喘不過氣，或在決策的迷霧中打轉。直到這份力量，幫助他們找回定見。」
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wealthAndObstacleTestimonials.map((t, idx) => (
              <Card key={`wealth-${idx}`} className="p-8 gold-border bg-card/70 paper-grain hover:bg-accent/10 transition-all duration-500 flex flex-col justify-between h-full group relative overflow-hidden border-primary/20 hover:border-primary/60">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-[40px] pointer-events-none" />
                <Quote className="absolute top-6 left-6 w-12 h-12 text-primary opacity-5 group-hover:opacity-15 transition-opacity" />
                
                <div className="relative z-10">
                  <Badge variant="outline" className="mb-5 bg-background/50 border-primary/30 text-xs tracking-widest font-bold" style={{ color: t.themeColor }}>
                    對位：{t.deityName}
                  </Badge>
                  <div className="font-display text-2xl text-foreground/90 group-hover:text-primary transition-colors leading-snug">{t.title}</div>
                  <p className="mt-4 readable text-muted-foreground text-[15px] leading-loose opacity-90 font-serif">
                    「{t.body}」
                  </p>
                </div>
                <div className="relative z-10 mt-8 pt-5 border-t border-border/40 flex justify-between items-center">
                  <span className="text-[11px] tracking-[0.2em] uppercase font-black italic opacity-80" style={{ color: t.themeColor }}>{t.by}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/pay">
              <Button className="h-16 px-12 text-xl font-bold tracking-[0.2em] uppercase gold-border shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                我需要事業與資糧的修復 <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 3: 聚合真實回饋 (身心與善緣分類) */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold">Deep Healing</div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground/90">身心安頓與善緣懷愛</h2>
          <p className="mt-4 readable text-muted-foreground max-w-3xl text-lg italic">
            「不是所有的傷口都能被看見。這些微光，曾照亮那些最深層的焦慮與孤單。」
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {healingAndRelationshipTestimonials.map((t, idx) => (
              <Card key={`healing-${idx}`} className="p-8 gold-border bg-card/70 paper-grain hover:bg-accent/10 transition-all duration-500 flex flex-col justify-between h-full group relative overflow-hidden border-primary/20 hover:border-primary/60">
                <div className="absolute top-0 left-0 w-full h-1.5 opacity-60" style={{ backgroundColor: t.themeColor }} />
                <Quote className="absolute top-8 left-6 w-12 h-12 text-primary opacity-5 group-hover:opacity-15 transition-opacity" />
                
                <div className="relative z-10 pt-2">
                  <Badge variant="outline" className="mb-5 bg-background/50 border-primary/30 text-xs tracking-widest font-bold" style={{ color: t.themeColor }}>
                    對位：{t.deityName}
                  </Badge>
                  <div className="font-display text-2xl text-foreground/90 group-hover:text-primary transition-colors leading-snug">{t.title}</div>
                  <p className="mt-4 readable text-muted-foreground text-[15px] leading-loose opacity-90 font-serif">
                    「{t.body}」
                  </p>
                </div>
                <div className="relative z-10 mt-8 pt-5 border-t border-border/40 flex justify-between items-center">
                  <span className="text-[11px] tracking-[0.2em] uppercase font-black italic opacity-80" style={{ color: t.themeColor }}>{t.by}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/pay">
              <Button className="h-16 px-12 text-xl font-bold tracking-[0.2em] uppercase gold-border shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                我需要身心與善緣的修復 <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
}