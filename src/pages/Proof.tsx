/*
Design philosophy: Neo-thangka noir — transparent information architecture and trust-first UX.
*/

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
// 🟢 AI SEO 必備：引入 Helmet 動態注入 SEO 與結構化資料
import { Helmet } from "react-helmet-async"; 

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Link } from "wouter";
import { ShieldCheck, ArrowRight } from "lucide-react";

// 🚨 關鍵修正：將 DEITIES 與 HOME_TESTIMONIALS 的來源精準分開

export default function Proof() {
  const transparencyPoints = [
    ["法門資訊", "各本尊頁面分別說明法門定位、經典依據、適合情境與參與流程，讓訪客能先理解再選擇。"],
    ["付款與登記", "本站將付款交由綠界處理；特別祭典明確標示付款與登記於綠界完成，避免在本站重複收集資料。"],
    ["結果界線", "宗教修持與供養不是世俗結果的保證。網站不以醫療、投資、法律或其他現實結果作為承諾。"],
    ["志工角色", "志工協助行政與流程說明，不把個人意見包裝成佛法權威，也不以恐懼催促參與。"],
  ] as const;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* 🟢 注入專屬的 Title, Meta 與 JSON-LD */}
      <Helmet>
        <title>透明說明｜法門、流程與參與須知｜滿願藏庫</title>
        <meta name="description" content="滿願藏庫透明說明：法門資訊、付款與登記流程、志工角色與宗教修持的結果界線。先理解，再決定是否參與。" />
      </Helmet>

      <SiteHeader />

      <main className="flex-1 mx-auto max-w-6xl px-4 pt-12 pb-32 w-full">
        <div className="flex flex-col md:items-center text-left md:text-center mb-16">
          <div className="flex items-center gap-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-bold mb-4 bg-primary/5 px-3 py-1.5 rounded-sm w-fit md:mx-auto">
            <ShieldCheck className="w-4 h-4" /> Transparency
          </div>
          <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">信任，建立在看得到的細節</h1>
          <p className="mt-6 readable text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed md:mx-auto">
            與其用難以驗證的故事說服您，不如把能查清楚的事情直接說清楚：法門是什麼、如何參與、費用在哪裡、誰負責哪一段流程。
          </p>
        </div>

        <section className="grid gap-5 md:grid-cols-2 mb-16">
          {transparencyPoints.map(([title, body]) => (
            <Card key={title} className="p-7 md:p-9 gold-border bg-card/70 paper-grain">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h2 className="font-display text-2xl">{title}</h2>
              </div>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">{body}</p>
            </Card>
          ))}
        </section>

        <section className="mb-16">
          <Card className="p-7 md:p-10 gold-border bg-primary/5">
            <h2 className="font-display text-3xl md:text-4xl">參與前，建議確認這 5 件事</h2>
            <div className="mt-7 grid gap-3">
              {[
                "你是否理解這一項法門在藏傳佛教脈絡中的意義？",
                "你是否清楚本次費用與護持期間？",
                "你是否知道付款與登記資料會在哪個系統完成？",
                "你是否理解宗教修持不等於世俗結果保證？",
                "若仍有疑問，是否已先向志工詢問，而不是在焦慮中做決定？",
              ].map((item, i) => (
                <div key={item} className="flex gap-3 rounded-xl border border-border/60 bg-background/30 p-4 text-sm md:text-base">
                  <span className="text-primary font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="text-center">
          <p className="text-sm text-muted-foreground">如果你已經看懂流程，下一步再選擇適合自己的法門即可。</p>
          <Link href="/pay" className="mt-5 inline-flex">
            <Button className="h-14 px-8 font-bold tracking-widest gold-border">
              查看法事方案 <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
}