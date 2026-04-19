// src/components/deity/DeityDiagnosis.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { Flame, Sparkles, CheckCircle2 } from "lucide-react";
import { type Deity } from "@/lib/siteData";

export default function DeityDiagnosis({ d }: { d: Deity }) {
  return (
    <section id="pain" className="mx-auto max-w-6xl px-5 md:px-8 pb-8 pt-6 scroll-mt-24">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-7 md:p-10 gold-border bg-card/70 paper-grain hover:border-primary/40 transition-colors">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold flex items-center gap-2 mb-3">
            <Flame className="h-4 w-4 text-destructive" /> Diagnosis
          </div>
          <h2 className="font-display text-2xl md:text-3xl leading-tight">結構性漏損：<br/>您或許正經歷這些掙扎</h2>
          <ul className="mt-6 space-y-4 text-muted-foreground readable">
            {d.painPoints.map((p) => (
              <li key={p} className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                <span className="text-sm md:text-lg leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-7 md:p-10 gold-border bg-card/70 paper-grain hover:border-primary/40 transition-colors">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-primary" /> Solution
          </div>
          <h2 className="font-display text-2xl md:text-3xl leading-tight">系統對位：<br/>這份力量將如何修復您</h2>
          <ul className="mt-6 space-y-4 text-muted-foreground readable">
            {d.whyThisDeity.map((x) => (
              <li key={x} className="flex gap-3 items-start">
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5 md:mt-0.5" />
                <span className="text-sm md:text-lg leading-relaxed">{x}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}