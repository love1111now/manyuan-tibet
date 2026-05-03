/*
  DeityTestimonials.tsx
  顧客見證區塊——獨立抽出，插入於儀軌實證與方案選擇之間。
  設計目標：讓猶豫的人在決定掏錢前，先看到真實的他人經歷。
*/

import React from "react";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { type Deity } from "@/lib/siteData";

export default function DeityTestimonials({ d }: { d: Deity }) {
  if (!d.testimonials || d.testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8">

      {/* 區塊標題 */}
      <div className="mb-8 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-2">
          真實回饋
        </p>
        <h2 className="text-2xl md:text-3xl font-bold">
          他們是怎麼改變的
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          不是廣告詞，是他們自己說的話
        </p>
      </div>

      {/* 見證卡片網格 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {d.testimonials.map((t, i) => (
          <Card
            key={i}
            className="p-5 flex flex-col gap-3 bg-white/[0.04] border border-white/10 hover:border-primary/30 transition-colors"
          >
            {/* 引號裝飾 */}
            <Quote
              className="h-5 w-5 shrink-0"
              style={{ color: d.themeColor.accent, opacity: 0.6 }}
            />

            {/* 標題 */}
            <p className="text-sm font-semibold text-foreground leading-snug">
              {t.title}
            </p>

            {/* 內文 */}
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {t.body}
            </p>

            {/* 作者 */}
            <p
              className="text-xs font-medium mt-1"
              style={{ color: d.themeColor.accent, opacity: 0.75 }}
            >
              — {t.by}
            </p>
          </Card>
        ))}
      </div>

      {/* 底部轉換引導 */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          每個人的情況不同，但卡住的感覺是一樣的。
        </p>
        <button
          onClick={() => {
            const el = document.getElementById("plans");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
          style={{ color: d.themeColor.accent }}
        >
          看看適合你的方案 →
        </button>
      </div>

    </section>
  );
}
