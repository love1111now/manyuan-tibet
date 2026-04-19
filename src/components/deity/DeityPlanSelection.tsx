// src/components/deity/DeityPlanSelection.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, NotebookPen, ShieldCheck } from "lucide-react";
import { type Deity } from "@/lib/siteData";

export default function DeityPlanSelection({ d }: { d: Deity }) {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="plans" className="mx-auto max-w-6xl px-5 md:px-8 pt-12 pb-16 scroll-mt-24">
      {/* 寫在決定啟動之前 */}
      <Card className="mb-10 p-7 md:p-10 gold-border bg-background/50 border-primary/40 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1.5 h-full bg-primary/60"></div>
        <div className="text-[10px] md:text-xs tracking-[0.3em] text-primary mb-4 font-bold uppercase">【 寫在您決定啟動修復之前 】</div>
        <p className="text-muted-foreground readable text-sm md:text-lg leading-loose max-w-4xl">
          我們知道，在這繁華的網路世界，您可能看過無數的法事與祈福。但在「滿願藏庫」，我們堅持的是一份近乎執拗的「因果透明」。
          這裡沒有造神的商業包裝，只有一群不支薪的志工，默默為每一份心願進行精準的對位與造冊。
          這不是一場交易，而是一次跨越空間的生命修復工程。
        </p>
      </Card>

      {/* 本月限定加碼 */}
      <div className="mb-10 p-6 md:p-8 rounded-xl border border-primary/40 bg-primary/5 relative overflow-hidden group shadow-inner">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
          <Badge className="w-fit bg-primary text-primary-foreground gold-border animate-pulse px-3 py-1 font-bold tracking-widest text-[10px]">本月限定</Badge>
          <span className="font-display text-xl md:text-2xl text-foreground/90">啟動修復，雙重加碼「藥師佛息災煙供」</span>
        </div>
        <p className="text-sm md:text-base text-muted-foreground readable leading-relaxed">
          現在登記下方任一 {d.name} 方案，系統將自動為您列入每週六的藥師佛煙供名單。
        </p>
      </div>

      {/* 直覺導航 */}
      <Card className="mb-10 p-6 md:p-8 gold-border bg-card/70 paper-grain">
        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-4">直覺導航</div>
        <div className={`grid gap-4 ${d.plans.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {[...d.plans].sort((a, b) => a.price - b.price).map((p, index, arr) => {
            let label = "溫柔安頓";
            if (arr.length === 2) {
              label = index === 0 ? "溫柔安頓" : "深切共鳴";
            } else {
              if (index === 0) label = "溫柔安頓";
              else if (index === arr.length - 1) label = "深耕轉化";
              else label = "深切共鳴";
            }
            const shortName = p.name.split(/[｜|：|:]/)[0].trim();
            return (
              <button key={p.id} onClick={() => scrollToId(`plan-${p.id}`)} className="block text-left h-full group">
                <Button variant={p.hot ? "default" : "outline"} className={`h-auto py-3 px-4 w-full gold-border flex items-center justify-between gap-3 ${p.hot ? 'bg-primary/10 text-foreground' : ''}`}>
                  <div className="flex flex-col gap-1 items-start">
                    <span className="text-[10px] opacity-80 font-bold tracking-widest">{label}</span>
                    <span className="text-sm md:text-base font-bold tracking-widest leading-snug break-words">{shortName}</span>
                  </div>
                  {p.hot && <ArrowRight className="h-4 w-4 shrink-0 text-primary" />}
                </Button>
              </button>
            );
          })}
        </div>
      </Card>

      {/* 詳細方案卡片 */}
      <div className="grid gap-6 md:grid-cols-2">
        {[...d.plans].sort((a, b) => a.price - b.price).map((p) => (
          <Card key={p.id} id={`plan-${p.id}`} className="p-7 md:p-10 gold-border bg-card/70 paper-grain scroll-mt-28 flex flex-col justify-between transition-all duration-500 hover:border-primary/80">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <div className="font-display text-2xl md:text-3xl">{p.name}</div>
                    {p.hot && <Badge className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5 whitespace-nowrap">系統推薦</Badge>}
                  </div>
                  <div className="text-xs md:text-sm text-primary/80 font-bold">精準對位：{p.suitableFor.join("、")}</div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-bold mb-1">修復投資</div>
                  <div className="font-display text-3xl md:text-4xl text-primary">{p.price.toLocaleString()}</div>
                </div>
              </div>
              <p className="mt-5 readable text-muted-foreground text-sm md:text-base leading-relaxed">{p.blurb}</p>
            </div>

            {/* 綠界引導 Dialog - 已依照截圖內容更新 */}
            <div className="mt-8 pt-6 border-t border-border/40">
               <Dialog>
                 <DialogTrigger asChild>
                   <Button className="h-14 w-full text-base font-bold tracking-[0.15em] uppercase gold-border bg-primary text-primary-foreground shadow-lg transition-all hover:scale-[1.02]">
                     確認護持，請志工造冊 <ArrowRight className="h-4 w-4 ml-2" />
                   </Button>
                 </DialogTrigger>
                 <DialogContent className="max-w-md bg-background border-primary/30 rounded-xl overflow-hidden p-0">
                   <div className="bg-primary/5 p-8 border-b border-primary/20 text-center relative">
                     <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest mb-3 uppercase">志工陪伴通道</div>
                     <DialogTitle className="text-2xl font-display text-foreground/90">深呼吸，我們準備啟程</DialogTitle>
                     <p className="mt-4 text-xs text-muted-foreground leading-relaxed px-4">
                       為了確保您的祈福能精準傳達至壇城，請在進入綠界前，跟著我們確認以下兩件事：
                     </p>
                   </div>
                   
                   <div className="p-8 space-y-8">
                     {/* 步驟 1 */}
                     <div className="flex gap-4">
                       <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">1</div>
                       <div className="space-y-3">
                         <h4 className="font-bold text-foreground tracking-wide">備妥您的真實心音</h4>
                         <p className="text-sm text-muted-foreground leading-relaxed">
                           進入綠界後，請滑到最下方的<span className="text-foreground font-bold">「備註欄 (Remark)」</span>，寫下您的：姓名、生辰、與此刻最想改變的困境。
                         </p>
                         <div className="p-4 rounded-lg bg-muted/50 border border-border/50 space-y-2">
                           <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase">
                             <NotebookPen className="w-3 h-3" /> 填寫範例：
                           </div>
                           <p className="text-xs text-muted-foreground leading-loose">
                             王小明，50年1月1日<br />
                             祈求 {d.name} 加持，平靜微光。
                           </p>
                         </div>
                       </div>
                     </div>

                     {/* 步驟 2 */}
                     <div className="flex gap-4">
                       <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">2</div>
                       <div className="space-y-2">
                         <h4 className="font-bold text-foreground tracking-wide">放心交給安全系統</h4>
                         <p className="text-sm text-muted-foreground leading-relaxed">
                           點擊下方按鈕後，您將進入綠界的 256-bit SSL 加密通道。付款完成後，系統會自動引導您回來，我們會在成功頁面等您。
                         </p>
                       </div>
                     </div>

                     <a href={p.url} target="_blank" rel="noreferrer" className="block w-full pt-2">
                       <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-xl gold-border transition-all hover:scale-[1.01]">
                         前往安全通道 <ArrowRight className="h-5 w-5 ml-2" />
                       </Button>
                     </a>
                   </div>
                 </DialogContent>
               </Dialog>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}