// src/components/deity/DeityRitualAndEvidence.tsx
// ✅ v2 改動：移除右側見證區塊（已由 Deity.tsx 的 DeityTestimonials 獨立渲染，避免重複）
//    保留左側儀軌說明、實境照片網格，其他不動

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Sparkles, ExternalLink } from "lucide-react";
import RitualMarkdown from "@/components/RitualMarkdown";
import { type Deity } from "@/lib/siteData";

export default function DeityRitualAndEvidence({ d }: { d: Deity }) {
  if (!d.ritual) return null;

  return (
    <section id="ritual" className="mx-auto max-w-6xl px-4 md:px-8 pt-10 pb-8 scroll-mt-24">
      <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">
        Heritage & Evidence
      </div>
      <h2 className="font-display text-3xl md:text-4xl text-primary">{d.ritual.title}</h2>
      <p className="mt-4 readable text-muted-foreground max-w-2xl text-base md:text-lg">
        以下為我們為您代為修持的儀軌核心。透過嚴謹的能量對位，讓修復真實發生。
      </p>

      {/* 儀軌說明卡（全寬，移除右側見證欄） */}
      <div className="mt-8">
        <Card className="gold-border bg-card/70 paper-grain overflow-hidden">
          <div className="grid md:grid-cols-[1fr_1.2fr]">
            {/* 左：儀軌圖片 */}
            <AspectRatio ratio={4 / 3} className="md:h-full">
              <img
                src={d.ritual.image}
                alt={d.ritual.imageAlt}
                className="h-full w-full object-cover bg-background/30"
                loading="lazy"
              />
            </AspectRatio>

            {/* 右：儀軌細節 */}
            <div className="p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="font-display text-2xl text-foreground/90">{d.ritual.title}</div>
                {d.ritual.note && (
                  <div className="mt-3 text-sm text-muted-foreground readable italic leading-relaxed">
                    {d.ritual.note}
                  </div>
                )}
                <div className="mt-6">
                  {d.ritual?.keyPoints && d.ritual.keyPoints.length > 0 ? (
                    <div className="rounded-xl border border-primary/20 bg-background/50 p-5 shadow-inner">
                      <div className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-primary font-bold mb-4 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" /> 核心心法
                      </div>
                      <ul className="space-y-4">
                        {d.ritual.keyPoints.map((point, index) => {
                          const [title, ...descArr] = point.split("：");
                          const desc = descArr.join("：");
                          return (
                            <li key={index} className="flex items-start gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/80 shrink-0" />
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
                    <div className="rounded-xl border border-primary/20 bg-background/50 p-5 md:p-6 shadow-inner">
                      <RitualMarkdown mdPath={d.ritual.mdPath} />
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/40">
                <a href={d.ritual.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex w-full sm:w-auto">
                  <Button variant="outline" className="h-11 w-full sm:px-6 gap-2 text-primary border-primary/30 tracking-widest text-xs font-bold">
                    查閱經典文獻出處 <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* 實境照片網格 */}
      {d.rituals && d.rituals.length > 0 && (
        <div className="mt-16">
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
                className="overflow-hidden gold-border bg-card/70 paper-grain border-primary/30 hover:border-primary/70 transition-all duration-500"
              >
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={r.img}
                    alt={r.alt}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="p-5 md:p-6 flex-1 bg-background/40">
                  <div className="font-display text-lg md:text-xl text-primary">{r.alt}</div>
                  <div className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">{r.caption}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
