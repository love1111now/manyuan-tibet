// src/components/deity/DeityFaqAndCrossSell.tsx
// ✅ v2 改動：終局 CTA「啟動我的修復造冊」加入 FB Pixel + GA4 追蹤

import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { DEITIES } from "@/data/deities"; 
import type { Deity } from "@/lib/siteData";

interface DeityFaqAndCrossSellProps {
  d: Deity;
}

export default function DeityFaqAndCrossSell({ d }: DeityFaqAndCrossSellProps) {

  // 終局 CTA 點擊追蹤
  const handleFinalCta = () => {
    if (typeof window === "undefined") return;

    const hotPlan = d.plans?.find((p) => p.hot) ?? d.plans?.[0];
    if (!hotPlan) return;

    // GA4
    window.gtag?.("event", "begin_checkout", {
      currency: "TWD",
      value: hotPlan.price,
      items: [
        {
          item_id: hotPlan.id,
          item_name: `${d.name}-${hotPlan.name}`,
          price: hotPlan.price,
          currency: "TWD",
          quantity: 1,
        },
      ],
    });

    // FB Pixel
    window.fbq?.("track", "InitiateCheckout", {
      content_ids: [hotPlan.id],
      content_name: hotPlan.name,
      content_type: "product",
      value: hotPlan.price,
      currency: "TWD",
      num_items: 1,
    });
  };

  return (
    <>
      {/* FAQ 顧問釋疑區塊 */}
      <section id="faq" className="mx-auto max-w-6xl px-4 md:px-8 pt-10 pb-16 scroll-mt-24">
        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">
          FAQ Consultation
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground/90">顧問釋疑</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[0, 1].map((col) => (
            <Card key={col} className="p-4 md:p-5 gold-border bg-card/70 paper-grain">
              <Accordion type="single" collapsible className="w-full">
                {d.faq
                  .filter((_, idx) => idx % 2 === col)
                  .map((f) => (
                    <AccordionItem key={f.q} value={f.q} className="px-2 md:px-4 border-border/50">
                      <AccordionTrigger className="font-display text-left text-base md:text-lg hover:text-primary transition-colors py-5 leading-relaxed">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="readable text-muted-foreground text-sm md:text-base leading-loose pb-5">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </Card>
          ))}
        </div>
      </section>

      {/* ── 終局收割：志工溫度 + 終極 CTA ── */}
      <section className="mx-auto max-w-6xl px-4 md:px-8 pb-10">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-14">
          <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-primary/5 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-4">
              準備好了嗎
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground/90 leading-snug">
              如果今天讀到這裡，<br />
              <span className="text-primary">您的因緣可能已經到了</span>
            </h3>
            <p className="mt-6 readable text-muted-foreground text-base md:text-lg leading-relaxed">
              我們不催促，不製造恐慌。但如果這份說明讓您感受到共鳴，那份共鳴本身，就是最誠實的訊號。
            </p>
            <p className="mt-3 readable text-muted-foreground text-sm leading-relaxed opacity-80">
              登記完成後，志工將於 24 小時內完成造冊，並送達您的名冊至西藏壇城排程法事。全程透明，因果清晰。
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* ✅ 終局 CTA：加入追蹤 */}
              <a
                href="#plans"
                onClick={(e) => {
                  e.preventDefault();
                  handleFinalCta();
                  document.getElementById("plans")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center gap-3 h-16 px-10 font-bold tracking-[0.2em] uppercase gold-border bg-primary text-primary-foreground rounded-md shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-base"
              >
                啟動我的修復造冊
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://m.me/61583749010531"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 h-16 px-8 font-bold tracking-wider gold-border border rounded-md text-foreground hover:bg-primary/10 transition-all text-sm"
              >
                有疑問，先諮詢志工
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-6 text-xs text-muted-foreground/60 font-bold tracking-widest uppercase">
              <span>✦ 不支薪志工團隊</span>
              <span>✦ 護持金全數用於壇城</span>
              <span>✦ 綠界 SSL 加密金流</span>
              <span>✦ 24h 內造冊回覆</span>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS SELL 維度跳轉 */}
      <section className="mx-auto max-w-6xl px-4 md:px-8 pb-32">
        <Card className="p-4 md:p-8 gold-border bg-card/70 paper-grain">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">
            Explore Other Dimensions
          </div>
          <div className="font-display text-2xl md:text-3xl text-foreground/90">
            若您的困境更接近以下方向
          </div>
          <p className="mt-2 text-sm text-muted-foreground readable">
            不同的生命困境，對位不同的修復本尊。選擇最共鳴的維度，繼續探索。
          </p>
          
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {d.crossSell.map((x) => {
              const t = DEITIES.find((k) => k.key === x.to);
              if (!t) return null;
              
              return (
                <Link key={x.to} href={`/deity/${x.to}`} aria-label={`前往 ${t.name} 頁面`}>
                  <Card className="p-6 md:p-7 gold-border bg-background/30 hover:bg-primary/10 transition-all duration-500 cursor-pointer group h-full flex flex-col justify-between">
                    <div>
                      <div 
                        className="font-display text-xl md:text-2xl transition-colors group-hover:opacity-80" 
                        style={{ color: t.themeColor.accent }}
                      >
                        {x.title}
                      </div>
                      <div className="mt-3 text-muted-foreground readable text-sm md:text-base">
                        {x.desc}
                      </div>
                    </div>
                    <div 
                      className="mt-5 inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase transition-transform group-hover:translate-x-2" 
                      style={{ color: t.themeColor.accent }}
                    >
                      尋找 {t.name} <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Card>
      </section>
    </>
  );
}
