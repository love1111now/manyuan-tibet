// src/components/deity/DeityDiagnosis.tsx
// ✅ v2 改動：painPoints 渲染時自動去除開頭的 emoji 符號（❌ ✅ 等）
//    避免資料層的 emoji 與組件的紅點/綠勾圖示重複顯示

import React from "react";
import { Card } from "@/components/ui/card";
import { Flame, Sparkles, CheckCircle2 } from "lucide-react";
import { type Deity } from "@/lib/siteData";

// 去除字串開頭的 emoji 與空白
function stripLeadingEmoji(str: string): string {
  return str.replace(/^[\p{Emoji}\s]+/u, "").trim();
}

export default function DeityDiagnosis({ d }: { d: Deity }) {
  return (
    <section id="pain" className="mx-auto max-w-6xl px-4 md:px-8 pb-8 pt-6 scroll-mt-24">
      <div className="grid gap-6 md:grid-cols-2">
        {/* 痛點卡 */}
        <Card className="p-4 md:p-8 gold-border bg-card/70 paper-grain hover:border-primary/40 transition-colors">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold flex items-center gap-2 mb-3">
            <Flame className="h-4 w-4 text-destructive" /> Diagnosis
          </div>
          <h2 className="font-display text-2xl md:text-3xl leading-tight">
            結構性漏損：<br />您或許正經歷這些掙扎
          </h2>
          <ul className="mt-6 space-y-4 text-muted-foreground readable">
            {d.painPoints.map((p) => (
              <li key={p} className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                <span className="text-sm md:text-lg leading-relaxed">
                  {stripLeadingEmoji(p)}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        {/* 解方卡 */}
        <Card className="p-4 md:p-8 gold-border bg-card/70 paper-grain hover:border-primary/40 transition-colors">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-primary" /> Solution
          </div>
          <h2 className="font-display text-2xl md:text-3xl leading-tight">
            系統對位：<br />這份力量將如何修復您
          </h2>
          <ul className="mt-6 space-y-4 text-muted-foreground readable">
            {d.whyThisDeity.map((x) => (
              <li key={x} className="flex gap-3 items-start">
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg leading-relaxed">
                  {stripLeadingEmoji(x)}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* 誠信承諾 */}
      {d.precaution && (
        <div className="mt-6 p-5 md:p-7 rounded-xl border border-primary/20 bg-primary/3">
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary/70 font-bold mb-3">
            關於這份修復的誠實說明
          </div>
          <ul className="space-y-2">
            {d.precaution.items.map((item: string, i: number) => (
              <li key={i} className="flex gap-2 text-xs md:text-sm text-muted-foreground readable leading-relaxed">
                <span className="text-primary/50 shrink-0 mt-0.5">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
