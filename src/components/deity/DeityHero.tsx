/*
  DeityHero.tsx — v2
  ✅ 改動重點：
  1. 手機首屏：圖片置頂全寬顯示，視覺衝擊最大化
  2. heroKicker 獨立放大，字級提升，顏色對比強化
  3. promise 折疊：只顯示前 3 行，「展開」讓頁面不顯得太長
  4. CTA 主按鈕更大、金色底、全寬手機
  5. 信任標語移至按鈕正下方，強化決策時機
  6. 導航快捷列保留，加入 testimonials 錨點
*/

import React, { useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  ClipboardList,
  ShieldCheck,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { type Deity } from "@/lib/siteData";

export default function DeityHero({ d }: { d: Deity }) {
  const [promiseExpanded, setPromiseExpanded] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // promise 折疊：取前 5 行作為預覽
  const promiseLines = d.promise.split("\n");
  const previewLines = promiseLines.slice(0, 6);
  const hasMore = promiseLines.length > 6;
  const displayedPromise = promiseExpanded
    ? d.promise
    : previewLines.join("\n") + (hasMore ? "\n…" : "");

  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8 pt-6 md:pt-12 pb-10">

      {/* ── 頂部廣告銜接條 ── */}
      <div className="mb-4 flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg bg-primary/5 border border-primary/20">
        <div className="text-xs md:text-sm text-foreground/80">
          <strong className="text-foreground">{d.name}</strong>｜{d.primaryIntent}
        </div>
        <button
          onClick={() => scrollToId("plans")}
          className="text-xs font-bold text-primary tracking-widest hover:underline whitespace-nowrap"
        >
          立即看方案 →
        </button>
      </div>

      <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> 返回
      </Link>

      {/* ── 主體：手機單欄（圖上字下），桌面雙欄（字左圖右） ── */}
      <div className="mt-5 flex flex-col md:grid md:grid-cols-[1.1fr_.9fr] gap-8">

        {/* ==================== 區塊 A：文字 ==================== */}
        <div className="order-2 md:order-1 flex flex-col justify-center">

          {/* 第一痛點引言 */}
          <p className="text-sm md:text-base text-muted-foreground border-l-2 border-primary pl-4 italic leading-relaxed">
            {d.painPoints?.[0]}
          </p>

          {/* 主標題 */}
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            {d.name}
          </h1>

          {/* ✅ heroKicker：獨立放大，作為情緒橋接的核心句子 */}
          <p
            className="mt-5 text-xl md:text-2xl font-semibold leading-snug"
            style={{ color: d.themeColor.accent }}
          >
            {d.heroKicker}
          </p>

          {/* ✅ promise：折疊顯示，避免文字牆趕走用戶 */}
          <div className="mt-4">
            <p className="text-sm md:text-base text-muted-foreground/85 max-w-prose leading-relaxed whitespace-pre-line">
              {displayedPromise}
            </p>
            {hasMore && (
              <button
                onClick={() => setPromiseExpanded(!promiseExpanded)}
                className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                {promiseExpanded ? (
                  <><ChevronUp className="h-3 w-3" /> 收起</>
                ) : (
                  <><ChevronDown className="h-3 w-3" /> 了解更多</>
                )}
              </button>
            )}
          </div>

          {/* ✅ CTA 主按鈕：全寬手機、金色底、更大更醒目 */}
          <div className="mt-8 flex flex-col gap-3">
            <Button
              onClick={() => scrollToId("plans")}
              size="lg"
              className="w-full md:w-auto h-14 px-10 text-lg font-bold tracking-wider shadow-2xl hover:scale-[1.02] transition-transform"
              style={{
                backgroundColor: d.themeColor.accent,
                color: "#1a1209",
              }}
            >
              查看方案與費用 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* 信任標語緊接在 CTA 下方 */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground/70">
              <span>✔ 已有使用者回饋財務改善</span>
              <span>✔ 依傳承儀軌進行</span>
              <span>✔ 非投機快速致富</span>
            </div>
          </div>

          {/* ── 快捷導覽（含見證錨點） ── */}
          <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3">
            <Button variant="outline" onClick={() => scrollToId("diagnosis")} className="h-11 text-xs sm:text-sm">
              <Layers className="mr-1.5 h-4 w-4" /> 問題與運作
            </Button>
            <Button variant="outline" onClick={() => scrollToId("evidence")} className="h-11 text-xs sm:text-sm">
              <ClipboardList className="mr-1.5 h-4 w-4" /> 儀軌與實證
            </Button>
            <Button variant="outline" onClick={() => scrollToId("testimonials")} className="h-11 text-xs sm:text-sm">
              <Users className="mr-1.5 h-4 w-4" /> 使用者心得
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToId("plans")}
              className="h-11 text-xs sm:text-sm border-primary/50 text-primary hover:bg-primary/10"
            >
              <ShieldCheck className="mr-1.5 h-4 w-4" /> 方案費用
            </Button>
          </div>

        </div>

        {/* ==================== 區塊 B：神明圖片 ==================== */}
        {/* 手機版優先顯示（order-1），桌面版在右（md:order-2） */}
        <Card className="overflow-hidden order-1 md:order-2">
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full relative group">
                {/* 手機版圖片比例：更接近方形，不佔太多垂直空間 */}
                <AspectRatio ratio={4 / 3} className="md:hidden">
                  <img
                    src={d.heroImage}
                    alt={d.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-bold">{d.name}</p>
                  </div>
                </AspectRatio>
                {/* 桌面版圖片比例：4:5 縱向，填滿欄位 */}
                <AspectRatio ratio={4 / 5} className="hidden md:block">
                  <img
                    src={d.heroImage}
                    alt={d.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity">
                      點擊放大法相
                    </span>
                  </div>
                </AspectRatio>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-transparent border-none shadow-none">
              <DialogHeader className="sr-only">
                <DialogTitle>{d.name}</DialogTitle>
              </DialogHeader>
              <img src={d.heroImage} alt={d.name} className="w-full h-auto rounded-lg" />
            </DialogContent>
          </Dialog>
        </Card>

      </div>

      {/* ── 手機版：圖片下方立即加一個 CTA，讓滑完圖的人不用再滑 ── */}
      <div className="mt-5 md:hidden">
        <Button
          onClick={() => scrollToId("plans")}
          size="lg"
          className="w-full h-14 text-base font-bold tracking-wider shadow-xl"
          style={{
            backgroundColor: d.themeColor.accent,
            color: "#1a1209",
          }}
        >
          查看方案與費用 <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="mt-2 text-center text-xs text-muted-foreground/60">
          ✔ NT$490 起・當天造冊・結果公開透明
        </p>
      </div>

    </section>
  );
}
