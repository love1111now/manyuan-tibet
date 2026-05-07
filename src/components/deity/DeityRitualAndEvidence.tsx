// src/components/deity/DeityRitualAndEvidence.tsx
// ✅ v3 優化版：解決視覺空白問題，縮減間距並優化排版對齊

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Sparkles, ExternalLink, CheckCircle2 } from "lucide-react";
import RitualMarkdown from "@/components/RitualMarkdown";
import { type Deity } from "@/lib/siteData";

export default function DeityRitualAndEvidence({ d }: { d: Deity }) {
  if (!d.ritual) return null;

  return (
    <section id="ritual" className="mx-auto max-w-6xl px-4 md:px-8 pt-4 pb-12 scroll-mt-24">
      {/* 區塊標題 */}
      <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">
        Heritage & Evidence
      </div>
      <h2 className="font-display text-3xl md:text-4xl text-primary">{d.ritual.title}</h2>
      <p className="mt-4 readable text-muted-foreground max-w-2xl text-base md:text-lg">
        以下為我們為您代為修持的儀軌核心。透過嚴謹的能量對位，讓修復真實發生。
      </p>

      {/* 儀軌主卡片 */}
      <div className="mt-6">
        <Card className="gold-border bg-card/70 paper-grain overflow-hidden border-primary/20">
          <div className="grid md:grid-cols-[1fr_1.1fr] items-center"> {/* items-center 解決左右不對稱空白 */}
            
            {/* 左側：儀軌視覺圖 */}
            <div className="relative group">
              <AspectRatio ratio={4 / 3} className="bg-muted/30">
                <img
                  src={d.ritual.image}
                  alt={d.ritual.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
            </div>

            {/* 右側：儀軌心法與細節 */}
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <div>
                <div className="font-display text-2xl text-foreground/90 flex items-center gap-2">
                  {d.ritual.title}
                </div>
                
                {d.ritual.note && (
                  <div className="mt-3 text-sm text-muted-foreground readable italic leading-relaxed border-l-2 border-primary/30 pl-4">
                    {d.ritual.note}
                  </div>
                )}

                <div className="mt-8">
                  {d.ritual?.keyPoints && d.ritual.keyPoints.length > 0 ? (
                    <div className="rounded-xl border border-primary/10 bg-background/40 p-5 shadow-sm">
                      <div className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-primary font-bold mb-4 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" /> 核心心法
                      </div>
                      <ul className="space-y-4">
                        {d.ritual.keyPoints.map((point, index) => {
                          const [title, ...descArr] = point.split("：");
                          const desc = descArr.join("：");
                          return (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-primary/70 mt-1 shrink-0" />
                              <div className="text-sm md:text-base leading-relaxed text-muted-foreground">
                                {desc ? (
                                  <>
                                    <strong className="text-foreground/90 font-bold">{title}：</strong>
                                    <span>{desc}</span>
                                  </>
                                ) : (
                                  <span>{point}</span>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    <div className="rounded-xl border border-primary/10 bg-background/40 p-5 shadow-inner">
                      <RitualMarkdown mdPath={d.ritual.mdPath} />
                    </div>
                  )}
                </div>
              </div>

              {/* 出處連結 */}
              <div className="mt-8 pt-6 border-t border-border/20">
                <a href={d.ritual.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex w-full sm:w-auto">
                  <Button variant="outline" className="h-10 w-full sm:px-6 gap-2 text-primary border-primary/30 tracking-widest text-xs font-bold hover:bg-primary/5">
                    查閱經典文獻出處 <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* 實境照片網格 - 間距縮減為 mt-10 */}
      {d.rituals && d.rituals.length > 0 && (
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary opacity-80" />
            <h3 className="font-display text-2xl md:text-3xl text-foreground/90">
              修復現場：實境光影紀實
            </h3>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            {d.rituals.map((r) => (
              <Card
                key={r.id}
                className="group overflow-hidden gold-border bg-card/70 paper-grain border-primary/10 hover:border-primary/50 transition-all duration-500"
              >
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={r.img}
                    alt={r.alt}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="p-5 flex flex-col bg-background/20">
                  <div className="font-display text-lg text-primary">{r.alt}</div>
                  <div className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {r.caption}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}