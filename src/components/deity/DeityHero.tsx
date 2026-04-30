import React from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  ClipboardList,
  ExternalLink,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { type Deity } from "@/lib/siteData";

export default function DeityHero({ d }: { d: Deity }) {

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8 pt-8 md:pt-12 pb-10">

      {/* 🔥 廣告銜接 */}
      <div className="mb-5 flex items-center justify-between gap-2 px-3 py-3 rounded-lg bg-primary/5 border border-primary/20">
        <div className="text-xs md:text-sm text-foreground/80">
          <strong className="text-foreground">{d.name}</strong>｜{d.primaryIntent}
        </div>
        <button
          onClick={() => scrollToId("plans")}
          className="text-xs font-bold text-primary tracking-widest hover:underline"
        >
          立即看方案 →
        </button>
      </div>

      <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> 返回
      </Link>

      {/* 🔥 手機版優化 1：使用 flex-col 搭配 order，讓手機版先顯示圖片，電腦版保持左字右圖 */}
      <div className="mt-6 flex flex-col md:grid md:grid-cols-[1.1fr_.9fr] gap-8">

        {/* ==================== 區塊 A：文字與按鈕 ==================== */}
        {/* 手機版排在下方 (order-2)，電腦版排在左側 (md:order-1) */}
        <div className="order-2 md:order-1">

          {/* 痛點 */}
          <p className="text-base md:text-lg text-muted-foreground border-l-2 border-primary pl-4 italic">
            {d.painPoints?.[0]}
          </p>

          {/* 標題 */}
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
            {d.name}
          </h1>

          {/* 關鍵句 */}
          <p className="mt-4 text-lg text-muted-foreground">
            {d.heroKicker}
          </p>

          {/* 轉換關鍵說明（保留 whitespace-pre-line 解決文字牆問題） */}
          <p className="mt-4 text-sm md:text-base text-muted-foreground/80 max-w-prose leading-relaxed whitespace-pre-line">
            {d.promise}
          </p>

          {/* CTA區 */}
          <div className="mt-8 space-y-4">
            
            {/* 🔥 手機版優化 3：移除無效的 <button> 巢狀結構，直接使用組件 <Button> */}
            <Button 
              onClick={() => scrollToId("plans")} 
              className="w-full sm:w-auto h-16 px-10 text-lg font-bold tracking-wider shadow-xl hover:scale-[1.02]"
            >
              查看方案與費用 <ArrowRight className="ml-2" />
            </Button>

            {/* 信任補強 */}
            <div className="text-xs text-muted-foreground/70 space-y-1">
              <div>✔ 已有使用者回饋財務改善</div>
              <div>✔ 非投機、非快速致富</div>
              <div>✔ 依傳承儀軌進行</div>
            </div>

          </div>

          {/* 🔥 手機版優化 2：移除 hidden，在手機版顯示 2 欄網格，電腦版維持 2 欄網格 */}
          <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3">
            <Button variant="outline" onClick={() => scrollToId("diagnosis")} className="h-12 text-xs sm:text-sm">
              <Layers className="mr-1.5 h-4 w-4" /> 問題與運作
            </Button>
            <Button variant="outline" onClick={() => scrollToId("evidence")} className="h-12 text-xs sm:text-sm">
              <ClipboardList className="mr-1.5 h-4 w-4" /> 儀軌與實證
            </Button>
            <Button variant="outline" onClick={() => scrollToId("plans")} className="h-12 text-xs sm:text-sm border-primary/50 text-primary hover:bg-primary/10">
              <ShieldCheck className="mr-1.5 h-4 w-4" /> 方案費用
            </Button>
            <Button variant="outline" onClick={() => scrollToId("cross-sell")} className="h-12 text-xs sm:text-sm">
              <HelpCircle className="mr-1.5 h-4 w-4" /> 常見問題
            </Button>
          </div>

        </div>

        {/* ==================== 區塊 B：神明圖片 ==================== */}
        {/* 手機版排在上方 (order-1) 優先吸睛，電腦版排在右側 (md:order-2) */}
        <Card className="overflow-hidden order-1 md:order-2">
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full relative group">
                <AspectRatio ratio={4 / 5}>
                  <img
                    src={d.heroImage}
                    alt={d.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* 小提示：讓圖片看起來是可以點擊放大的 */}
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
    </section>
  );
}