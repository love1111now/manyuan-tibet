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
  type LucideIcon,
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const anchorBtn = (label: string, targetId: string, Icon: LucideIcon) => (
    <button type="button" className="block w-full text-left" onClick={() => scrollToId(targetId)}>
      <Button
        variant="outline"
        className="h-12 md:h-11 w-full justify-start gap-3 gold-border bg-card/50 hover:bg-primary/10 transition-all"
      >
        <Icon className="h-4 w-4 text-primary" />
        <span className="font-bold tracking-wider">{label}</span>
      </Button>
    </button>
  );

  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8 pt-8 md:pt-12 pb-10">
      {/* 廣告銜接帶 */}
      <div className="mb-5 flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg bg-primary/5 border border-primary/20">
        <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/80 min-w-0">
          <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
          <span className="truncate"><strong className="text-foreground">{d.name}</strong> — {d.primaryIntent}</span>
        </div>
        <button
          type="button"
          onClick={() => scrollToId("plans")}
          className="text-[10px] md:text-xs font-bold text-primary tracking-widest uppercase hover:underline underline-offset-4 shrink-0 ml-2"
        >
          看方案 ↓
        </button>
      </div>

      <Link href="/" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="h-4 w-4" /> 返回系統導航
      </Link>

      {/* ── 廣告承接首屏：痛點確認 → 結構解釋 → 立即行動 ── */}
      <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-start">
        <div>
          {/* 步驟一：痛點共鳴句（對應廣告說的那句話）*/}
          <p className="text-base md:text-lg text-muted-foreground readable leading-relaxed border-l-2 border-primary/60 pl-4 italic">
            {d.painPoints?.[0]}
          </p>

          {/* 步驟二：本尊名稱 + 這是什麼 */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge className="bg-primary/10 text-primary border-primary/40 px-3 py-1 text-[10px] md:text-xs tracking-widest font-black uppercase">
              {d.primaryIntent}
            </Badge>
          </div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-foreground/90">{d.name}</h1>
          <p className="mt-4 readable text-muted-foreground max-w-prose text-sm md:text-base leading-relaxed opacity-80">
            {d.heroKicker}
          </p>

          {/* 步驟三：主 CTA — 放大、提前、直接 */}
          <div className="mt-8">
            <button type="button" onClick={() => scrollToId("plans")} className="block w-full sm:w-auto">
              <Button className="h-16 w-full sm:w-auto px-10 text-base md:text-xl font-bold tracking-[0.2em] uppercase gold-border shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
                查看修復方案與費用 <ArrowRight className="h-5 w-5 ml-3" />
              </Button>
            </button>
            <div className="mt-3 flex flex-wrap gap-4 text-[10px] text-muted-foreground/60 tracking-widest uppercase font-bold">
              <span>✦ 不支薪志工</span>
              <span>✦ 24h 內造冊回覆</span>
              <span>✦ 護持金全數用於壇城</span>
            </div>
          </div>

          {/* 快速導覽：桌機完整版 / 手機精簡版 */}
          <div className="mt-6 hidden md:grid gap-3 sm:grid-cols-2">
            {anchorBtn("生命結構與診斷", "pain", Layers)}
            {anchorBtn("系統修復指引", "process", ClipboardList)}
            {d.ritual && anchorBtn("經典儀軌與實證", "ritual", ExternalLink)}
            {anchorBtn("對位修復方案", "plans", ShieldCheck)}
            {anchorBtn("顧問釋疑 (FAQ)", "faq", HelpCircle)}
          </div>
          {/* 手機：單一「向下探索」按鈕，不佔空間 */}
          <button
            type="button"
            onClick={() => scrollToId("pain")}
            className="md:hidden mt-4 w-full text-center text-xs text-muted-foreground/60 tracking-widest uppercase font-bold py-2"
          >
            ↓ 查看詳細說明與診斷
          </button>
        </div>

        <Card className="gold-border bg-card/70 paper-grain overflow-hidden group">
          <Dialog>
            <DialogTrigger asChild>
              <button type="button" className="block w-full text-left relative cursor-zoom-in">
                <AspectRatio ratio={16 / 10} className="md:aspect-[4/5]">
                  {/* ✅ 已修正：fetchPriority 大寫 P 以符合 React 屬性規範 */}
                  <img 
                    src={d.heroImage} 
                    alt={d.name} 
                    className="h-full w-full object-cover bg-background/40 transition-transform duration-1000 group-hover:scale-105" 
                    loading="eager" 
                    fetchPriority="high" 
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-xl border-primary/30">
              <DialogHeader><DialogTitle className="font-display text-2xl text-primary tracking-widest">{d.name}｜經典法相</DialogTitle></DialogHeader>
              <img src={d.heroImage} alt={d.name} className="w-full h-auto rounded-lg border border-primary/20 shadow-2xl" />
            </DialogContent>
          </Dialog>
          <div className="p-6 md:p-8 relative z-10 -mt-16 backdrop-blur-md bg-background/60 border-t border-primary/20">
            <blockquote className="mt-3 border-l-2 border-primary/50 pl-4 readable italic text-base md:text-lg text-foreground/90 font-serif">
              「{d.scripture[0]?.quote}」
              <footer className="mt-3 text-[10px] text-muted-foreground uppercase not-italic">出處：{d.scripture[0]?.source}</footer>
            </blockquote>
          </div>
        </Card>
      </div>
    </section>
  );
}