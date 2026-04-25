// src/components/deity/DeityRitualAndEvidence.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Sparkles, Quote, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import RitualMarkdown from "@/components/RitualMarkdown";
import { type Deity, HOME_TESTIMONIALS } from "@/lib/siteData";

export default function DeityRitualAndEvidence({ d }: { d: Deity }) {
  const displayTestimonials: Array<{ title: string; body: string; by: string }> =
    d.testimonials && d.testimonials.length > 0
      ? [...d.testimonials]
      : HOME_TESTIMONIALS.slice(0, 3);

  if (!d.ritual) return null;

  return (
    <section id="ritual" className="mx-auto max-w-6xl px-4 md:px-8 pt-10 pb-8 scroll-mt-24">
      <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">Heritage & Evidence</div>
      <h2 className="font-display text-3xl md:text-4xl text-primary">{d.ritual.title}</h2>
      <p className="mt-4 readable text-muted-foreground max-w-2xl text-base md:text-lg">
        以下為我們為您代為修持的儀軌核心。透過嚴謹的能量對位，讓修復真實發生。
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-start">
        {/* 左側：儀軌細節 */}
        <Card className="gold-border bg-card/70 paper-grain overflow-hidden h-full flex flex-col">
          <AspectRatio ratio={16 / 10}>
            <img src={d.ritual.image} alt={d.ritual.imageAlt} className="h-full w-full object-cover bg-background/30" loading="lazy" />
          </AspectRatio>
          <div className="p-6 md:p-10 flex-1 flex flex-col justify-between">
            <div>
              <div className="font-display text-2xl text-foreground/90">{d.ritual.title}</div>
              {d.ritual.note && <div className="mt-3 text-sm text-muted-foreground readable italic leading-relaxed">{d.ritual.note}</div>}
              <div className="mt-6 flex flex-col gap-5">
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
                              {desc ? (<><strong className="text-foreground/90 font-bold">{title}：</strong><span>{desc}</span></>) : (<span>{point}</span>)}
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
        </Card>

        {/* 右側：見證 */}
        <Card className="p-6 md:p-10 gold-border bg-card/70 paper-grain flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Quote className="w-5 h-5 text-primary opacity-80" />
              <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Real Transformations</div>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground/90">這些微光，也曾照亮相似的掙扎</h3>
          </div>
          <div className="mt-8 flex flex-col gap-8 flex-1 relative z-10">
            {displayTestimonials.map((t, idx) => (
              <div key={idx} className="relative pl-4 md:pl-5 border-l-[2px] border-primary/30 hover:border-primary/60 transition-colors duration-500 group">
                <div className="absolute -left-[5px] top-2 w-[8px] h-[8px] rounded-full bg-background border-[2px] border-primary/60 group-hover:bg-primary transition-colors duration-300"></div>
                <div className="font-display text-xl md:text-2xl text-foreground/90 leading-snug">{t.title}</div>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-loose">「{t.body}」</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-primary/40"></span>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-primary/80">{t.by}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center relative z-10">
            <Link href="/proof">
              <Button variant="outline" className="w-full h-14 text-xs md:sm tracking-widest font-bold border border-primary/20">
                閱讀更多生命轉變實證 <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* 實境照片網格 */}
      {d.rituals && d.rituals.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary opacity-80" />
            <h3 className="font-display text-2xl md:text-3xl text-foreground/90">修復現場：實境光影紀實</h3>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            {d.rituals.map((r) => (
              <Card key={r.id} className="overflow-hidden gold-border bg-card/70 paper-grain border-primary/30 hover:border-primary/70 transition-all duration-500">
                <AspectRatio ratio={4 / 3}>
                  <img src={r.img} alt={r.alt} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
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