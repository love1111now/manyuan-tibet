// src/components/deity/DeityFaqAndCrossSell.tsx
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

// 🚨 關鍵修正：將 DEITIES 的來源指向新的資料匯總處
import { DEITIES } from "@/data/deities"; 
import type { Deity } from "@/lib/siteData";

interface DeityFaqAndCrossSellProps {
  d: Deity;
}

export default function DeityFaqAndCrossSell({ d }: DeityFaqAndCrossSellProps) {
  return (
    <>
      {/* FAQ 顧問釋疑區塊 - 完整還原雙欄手風琴邏輯 */}
      <section id="faq" className="mx-auto max-w-6xl px-5 md:px-8 pt-10 pb-16 scroll-mt-24">
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

      {/* CROSS SELL 維度跳轉區塊 - 1:1 還原對位邏輯 */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 pb-32">
        <Card className="p-7 md:p-10 gold-border bg-card/70 paper-grain">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">
            Explore Other Dimensions
          </div>
          <div className="font-display text-2xl md:text-3xl text-foreground/90">
            若您的靈魂更共鳴於以下維度
          </div>
          
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {d.crossSell.map((x) => {
              // 透過 key 從全站資料庫找尋對應的神明資訊
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