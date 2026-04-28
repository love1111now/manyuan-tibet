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

      {/* 🔥 廣告銜接（優化：更像承接而不是提示） */}
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

      <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr_.9fr]">

        {/* 左側 */}
        <div>

          {/* 🔥 痛點（加強） */}
          <p className="text-base md:text-lg text-muted-foreground border-l-2 border-primary pl-4 italic">
            {d.painPoints?.[0]}
          </p>

          {/* 標題 */}
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
            {d.name}
          </h1>

          {/* 🔥 關鍵句（往「解決」走） */}
          <p className="mt-4 text-lg text-muted-foreground">
            {d.heroKicker}
          </p>

          {/* 🔥 新增：轉換關鍵說明（這段很重要） */}
          <p className="mt-4 text-sm md:text-base text-muted-foreground/80 max-w-prose leading-relaxed">
            {d.promise}
          </p>

          {/* 🔥 CTA區（大升級） */}
          <div className="mt-8 space-y-4">

            <button onClick={() => scrollToId("plans")} className="w-full sm:w-auto">
              <Button className="h-16 px-10 text-lg font-bold tracking-wider shadow-xl hover:scale-[1.02]">
                查看方案與費用 <ArrowRight className="ml-2" />
              </Button>
            </button>

            {/* 🔥 新增：信任補強 */}
            <div className="text-xs text-muted-foreground/70 space-y-1">
              <div>✔ 已有使用者回饋財務改善</div>
              <div>✔ 非投機、非快速致富</div>
              <div>✔ 依傳承儀軌進行</div>
            </div>

          </div>

          {/* 導覽（保留） */}
          <div className="mt-6 hidden md:grid gap-3 sm:grid-cols-2">
            <Button variant="outline" onClick={() => scrollToId("pain")}>
              <Layers className="mr-2 h-4 w-4" /> 問題分析
            </Button>
            <Button variant="outline" onClick={() => scrollToId("process")}>
              <ClipboardList className="mr-2 h-4 w-4" /> 運作方式
            </Button>
            <Button variant="outline" onClick={() => scrollToId("ritual")}>
              <ExternalLink className="mr-2 h-4 w-4" /> 儀軌說明
            </Button>
            <Button variant="outline" onClick={() => scrollToId("plans")}>
              <ShieldCheck className="mr-2 h-4 w-4" /> 方案
            </Button>
          </div>

        </div>

        {/* 右側圖片 */}
        <Card className="overflow-hidden">
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full">
                <AspectRatio ratio={4 / 5}>
                  <img
                    src={d.heroImage}
                    alt={d.name}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{d.name}</DialogTitle>
              </DialogHeader>
              <img src={d.heroImage} alt={d.name} />
            </DialogContent>
          </Dialog>
        </Card>

      </div>
    </section>
  );
}