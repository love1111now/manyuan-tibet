// src/components/deity/DeityPlanSelection.tsx
import React from "react";
import pujaImg from "@/assets/visuals/testimonial-puja.png";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { type Deity } from "@/lib/siteData";

export default function DeityPlanSelection({ d }: { d: Deity }) {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="plans" className="mx-auto max-w-6xl px-4 md:px-8 pt-8 md:pt-12 pb-12 md:pb-16 scroll-mt-24">
      {/* ── P1 真實見證區塊：法事現場照 + 用戶見證文 ── */}
      <div className="mb-10 grid gap-5 md:grid-cols-[1fr_1.1fr] items-start">
        {/* 法事現場照片 */}
        <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
          <img
            src={pujaImg}
            alt="黃財神祈福法會・滿願藏庫"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-xs text-white/80 tracking-widest uppercase font-bold">黃財神祈福法會・現場實況</p>
            <p className="text-[10px] text-white/50 mt-1">壇城莊嚴供養・喇嘛如法誦經・造冊信眾同沾法益</p>
          </div>
        </div>

        {/* 真實見證文 */}
        <div className="flex flex-col justify-center">
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-4">真實見證</div>
          <blockquote className="space-y-4 text-muted-foreground readable text-sm md:text-base leading-relaxed">
            <p className="text-foreground/90 font-medium text-base md:text-lg leading-relaxed">
              「在參加法會之前，我正面臨著生活的低谷與事業的瓶頸。面對未來的迷茫，我常常在深夜感到焦慮，難以入眠。」
            </p>
            <p>
              法會結束後，我不再病急亂投醫，而是學會了理性規劃人生。我開始更專注於自己的工作。奇妙的是，當我的內心變得充實與篤定，生活和事業似乎也真的有了起色。
            </p>
            <p>
              我開始明白，真正的財富，不僅僅是物質上的豐盛，更是心靈的富足、智慧的開展。
            </p>
          </blockquote>
          <footer className="mt-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">林</div>
            <div>
              <div className="text-sm font-bold text-foreground">林小姐</div>
              <div className="text-[10px] text-muted-foreground tracking-wider">參與黃財神如意水供殊勝法會後</div>
            </div>
          </footer>
          <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="text-primary font-bold">✦ 關於這份見證：</span>這是真實參與者在法會後自發撰寫的感謝信。我們不承諾每個人的體驗相同，但我們承諾每一道儀軌都如法如實完成。
            </p>
          </div>
        </div>
      </div>

      {/* 本月限定加碼（移除頂部阻力卡片，直接進入加碼區） */}
      <div className="mb-8 p-4 md:p-7 rounded-xl border border-primary/40 bg-primary/5 relative overflow-hidden group shadow-inner">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
          <Badge className="w-fit bg-primary text-primary-foreground gold-border animate-pulse px-3 py-1 font-bold tracking-widest text-[10px]">本月限定</Badge>
          <span className="font-display text-xl md:text-2xl text-foreground/90">啟動修復，雙重加碼「藥師佛息災煙供」</span>
        </div>
        <p className="text-sm md:text-base text-muted-foreground readable leading-relaxed">
          現在登記下方任一 {d.name} 方案，系統將自動為您列入每週六的藥師佛煙供名單。
        </p>
      </div>

      {/* 直覺導航（解決按鈕擠壓問題） */}
      <Card className="mb-8 p-4 md:p-7 gold-border bg-card/70 paper-grain">
        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-4">直覺導航</div>
        <div className={`grid gap-4 ${d.plans.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {[...d.plans].sort((a, b) => a.price - b.price).map((p, index, arr) => {
            const label = index === 0 ? "溫柔安頓" : (index === arr.length - 1 ? "深耕轉化" : "深切共鳴");
            const shortName = p.name.split(/[｜|：|:]/)[0].trim();
            return (
              <button key={p.id} onClick={() => scrollToId(`plan-${p.id}`)} className="block text-left h-full group">
                <Button variant={p.hot ? "default" : "outline"} className={`h-auto py-3 px-4 w-full gold-border flex items-center justify-between gap-3 ${p.hot ? 'bg-primary/10 text-foreground' : ''}`}>
                  <div className="flex flex-col gap-1 items-start">
                    <span className="text-[10px] opacity-80 font-bold tracking-widest">{label}</span>
                    <span className="text-sm md:text-base font-bold tracking-widest leading-snug break-words">{shortName}</span>
                  </div>
                  {p.hot && <ArrowRight className="h-4 w-4 shrink-0 text-primary" />}
                </Button>
              </button>
            );
          })}
        </div>
      </Card>

      {/* 詳細方案卡片 */}
      <div className="grid gap-6 md:grid-cols-2">
        {[...d.plans].sort((a, b) => a.price - b.price).map((p) => (
          <Card key={p.id} id={`plan-${p.id}`} className="p-4 md:p-8 gold-border bg-card/70 paper-grain scroll-mt-28 flex flex-col justify-between transition-all duration-500 hover:border-primary/80">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <div className="font-display text-2xl md:text-3xl">{p.name}</div>
                    {p.hot && <Badge className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5 whitespace-nowrap">系統推薦</Badge>}
                  </div>
                  <div className="text-xs md:text-sm text-primary/80 font-bold">精準對位：{p.suitableFor.join("、")}</div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-bold mb-1">修復投資</div>
                  <div className="font-display text-3xl md:text-4xl text-primary">{p.price.toLocaleString()}</div>
                  <div className="mt-1 text-[10px] text-muted-foreground/60">
                    ≈ 每日 NT${Math.round(p.price / 30)} · 守護 30 天
                  </div>
                </div>
              </div>
              <p className="mt-5 readable text-muted-foreground text-sm md:text-base leading-relaxed">{p.blurb}</p>
              {p.details && p.details.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {p.details.map((detail, i) => (
                    <li key={i} className="flex gap-2 text-xs text-muted-foreground/70">
                      <span className="text-primary/60 shrink-0">·</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* 直達付款 CTA（移除中間層 Dialog，減少流失） */}
            <div className="mt-8 pt-6 border-t border-border/40 space-y-3">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.gtag?.("event", "begin_checkout", {
                      currency: "TWD",
                      value: p.price,
                      items: [{ item_name: `${d.name}-${p.name}`, price: p.price }],
                    });
                    window.fbq?.("track", "InitiateCheckout", {
                      content_name: p.name,
                      value: p.price,
                      currency: "TWD",
                    });
                  }
                }}
                className="block w-full"
              >
                <Button className="h-14 w-full text-base font-bold tracking-[0.15em] uppercase gold-border bg-primary text-primary-foreground shadow-lg transition-all hover:scale-[1.02] active:scale-95">
                  確認護持 NT${p.price.toLocaleString()}，啟動造冊 <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
              <div className="flex items-center justify-center gap-4 text-[10px] text-muted-foreground/50 tracking-wider">
                <span>🔒 256-bit SSL 加密</span>
                <span>·</span>
                <span>✓ 24h 內志工造冊回覆</span>
                <span>·</span>
                <span>綠界科技金流</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}