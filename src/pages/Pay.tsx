import React from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { 
  ExternalLink, 
  CheckCircle2, 
  MessageCircle, 
  Heart, 
  ShieldCheck, 
  ClipboardList,
  Lock,
  CreditCard,
  Clock,
  Info
} from "lucide-react";
import { Link } from "wouter";

import { DEITIES } from "@/lib/siteData";

export default function Pay() {
  
  // 處理點擊追蹤 (整合 Meta Pixel InitiateCheckout)
  const handleTrackCheckout = (planName: string) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: planName,
        content_category: 'Ritual_Registration',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* pb-32 確保手機端滑到底部時，不會被 StickyCta 懸浮按鈕擋住 */}
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-32">
        <div className="grid gap-6 md:grid-cols-[1.05fr_.95fr] md:items-start">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.26em] uppercase text-muted-foreground font-bold">
              <ShieldCheck className="w-3 h-3 text-primary" /> Initiate Journey
            </div>
            <h1 className="mt-2 font-display text-4xl">法事護持登記（綠界安全支付）</h1>
            <p className="mt-4 readable text-muted-foreground max-w-prose">
              這是一處讓心念得以落實的所在。
              <span className="text-foreground/90 font-medium">選擇相應本尊 → 探索適合方案 → 點擊「前往登記名額」</span>。
              護持完成即保留名額並為您安排修持。當您處於焦慮與掙扎中，最需要的往往不是更多資訊，而是一次清晰、且能為生命帶來安定的行動。
            </p>

            {/* 下單流程優化：加入夜間造冊與隔週公佈 */}
            <Card className="mt-7 p-7 gold-border bg-card/70 paper-grain relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <ClipboardList className="w-24 h-24" />
              </div>
              <div className="font-display text-2xl flex items-center gap-2">
                善緣啟動後的修持旅程
              </div>
              <div className="mt-5 grid gap-4">
                {[
                  { title: "您完成護持（保留修持名額）", desc: "透過綠界金流系統立即確認您的登記名額。" },
                  { title: "志工於晚間靜心造冊", desc: "台灣志工將於下班後的晚間統一核對名單，若有問題會主動私訊聯繫。", highlight: true },
                  { title: "依本尊法門如法設供", desc: "名冊將傳遞至西藏壇城，由師兄姊如法設供與修持。" },
                  { title: "隔週公佈功德名錄", desc: "志工彙整後，於 FB 粉專公佈去識別化名錄，確保流程透明。", highlight: true },
                  { title: "為您獻上一份『回向心念指引』", desc: "提供專屬圖文，引導您將加持力落實於日常。" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 text-muted-foreground readable">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className={`w-5 h-5 ${item.highlight ? 'text-primary' : 'text-primary/70'}`} />
                    </div>
                    <div>
                      <div className={`text-sm font-bold ${item.highlight ? 'text-foreground/90' : 'text-foreground/80'}`}>
                        {item.title}
                      </div>
                      <div className="text-xs mt-0.5 opacity-80">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 誠實聲明：融合原本的文案與志工狀態 */}
              <div className="mt-6 p-4 rounded-md bg-background/50 border border-border/70 text-sm text-muted-foreground readable">
                <div className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground/80 block mb-1">💡 關於綠界手續費與因果的誠實說明：</span>
                    為了符合台灣法令讓您安心支付，每筆登記會由綠界收取必要的金流手續費。而我們台灣團隊全體皆為<span className="text-foreground font-bold">下班後發心的不支薪志工</span>，完全吸收了行政與網站維護成本。您的發心將全數用於法事本身。這份近乎笨拙的透明，是我們對因果的最高敬畏。
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-7 gold-border bg-card/70 paper-grain">
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">直覺尋找</div>
            <div className="mt-2 font-display text-2xl">需要方向指引嗎？</div>
            <p className="mt-3 text-sm text-muted-foreground readable">
              您可以參考各本尊頁面的推薦路徑；或透過下方的情境直覺尋找：
            </p>

            <div className="mt-5 grid gap-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-background/50 hover:bg-primary/10 transition-colors">渴望豐盛/重啟現金流 → 黃財神</Badge>
                <Badge variant="secondary" className="bg-background/50 hover:bg-primary/10 transition-colors">祈求安隱/守護家運 → 大吉祥天女</Badge>
                <Badge variant="secondary" className="bg-background/50 hover:bg-primary/10 transition-colors">面臨抉擇/尋求清明洞察 → 象頭財神</Badge>
                <Badge variant="secondary" className="bg-background/50 hover:bg-primary/10 transition-colors">修復關係/吸引善緣貴人 → 作明佛母</Badge>
                <Badge variant="secondary" className="bg-background/50 hover:bg-primary/10 transition-colors">突發變故/平息深層恐懼 → 綠度母</Badge>
              </div>
            </div>

            <Separator className="my-6" />

            {/* FB 私訊導流 */}
            <div className="mt-6 p-4 rounded-md bg-foreground/5 border border-border/50 text-center">
              <div className="text-sm text-foreground/80 mb-3">不確定如何表達內心的祈願嗎？</div>
              <a href="https://m.me/61583749010531" target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full border-[#0866FF]/50 text-[#0866FF] hover:bg-[#0866FF]/10 transition-colors">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  私訊 FB 粉專，我們溫暖陪伴您梳理
                </Button>
              </a>
              <div className="mt-2 text-[10px] text-muted-foreground opacity-70">
                （志工將於晚間下班後盡速為您解答）
              </div>
            </div>
          </Card>
        </div>

        {/* 保留原版的藏式分隔線 */}
        <div className="tibetan-divider h-9 opacity-70 mt-10" aria-hidden />
        <Separator className="my-10" />

        {/* 找回原版的 tibetan-texture-bg */}
        <section className="rounded-xl tibetan-texture-bg p-2 md:p-0">
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Journey Overview</div>
          <h2 className="mt-2 font-display text-3xl">全站護持路徑總覽</h2>
          <p className="mt-3 readable text-muted-foreground max-w-prose">
            為您完整展開所有的修持與增益可能。
          </p>

          {/* 本月加碼活動橫幅 */}
          <div className="mt-6 p-5 rounded-lg border border-primary/40 bg-primary/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-6xl text-primary pointer-events-none transition-transform group-hover:scale-110">
              ✦
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary text-primary-foreground gold-border animate-pulse">本月限定</Badge>
              <span className="font-display text-lg text-foreground/90">琉璃護佑：萬願隨行計畫</span>
            </div>
            <p className="text-sm text-muted-foreground readable">
              我們深知「健康與安穩」是所有福報的底氣。即日起，只要於本站登記<strong className="text-foreground">任一法事方案</strong>，我們將為您<strong className="text-primary font-bold">免費加碼</strong>列入每週六的「藥師佛健康息災煙供」名單，為您或家人祈求身心平穩。
            </p>
          </div>

          <div className="mt-7 grid gap-6">
            {DEITIES.map((d) => (
              <Card key={d.key} className="p-7 gold-border bg-card/70 paper-grain backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-border/50 pb-5 mb-5">
                  <div>
                    <div className="text-xs tracking-[0.26em] uppercase text-primary font-semibold">{d.primaryIntent}</div>
                    <div className="mt-1 font-display text-2xl">{d.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{d.subtitle}</div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/deity/${d.key}`}>
                      <Button variant="outline" size="sm" className="gold-border text-xs">探索介紹</Button>
                    </Link>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {d.plans
                    .slice()
                    .sort((a, b) => a.price - b.price)
                    .map((p) => (
                      <Card key={p.id} className="relative p-6 gold-border bg-background/35 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between">
                        
                        {/* 推薦標籤：視覺焦點強化 */}
                        {p.hot && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                            <Badge className="bg-primary text-primary-foreground gold-border px-4 py-0.5 text-[10px] tracking-widest shadow-lg animate-bounce">
                              進階首選・推薦
                            </Badge>
                          </div>
                        )}

                        <div>
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="font-display text-xl">{p.name}</div>
                              <div className="mt-2 text-[11px] text-muted-foreground">適合：{p.suitableFor.join("、")}</div>
                            </div>
                            <div className="font-display text-2xl text-primary">{p.price}</div>
                          </div>

                          <div className="mt-4 text-sm text-muted-foreground readable min-h-[3rem]">
                            {p.blurb}
                          </div>
                        </div>

                        <div className="mt-6 space-y-4">
                          <div className="p-3 bg-background/60 rounded-md border border-border/50 text-[11px] text-muted-foreground leading-relaxed">
                            <Info className="w-3 h-3 inline mr-1 text-primary mb-0.5" />
                            祈願越真實越好！登記時請於<strong className="text-foreground/80">備註欄</strong>寫下您的：<span className="text-foreground">姓名、居住地與目前的生命掙扎</span>。
                          </div>

                          {/* ★★★ 核心修改區：把 a 標籤替換成 Dialog 視覺導引 ★★★ */}
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="h-11 w-full font-bold tracking-[0.22em] uppercase gold-border hover:bg-primary hover:text-primary-foreground shadow-sm transition-all">
                                確認了解，啟動善緣 <ExternalLink className="h-4 w-4 ml-2 opacity-70" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md p-0 overflow-hidden bg-[#fffaf0] border-[#d4b483]">
                              <DialogHeader className="bg-[#fffaf0] p-6 pb-4 border-b border-[#d4b483]">
                                <DialogTitle className="text-xl font-bold text-[#8b4513] flex items-center justify-center gap-2">
                                  <span>✍️</span> 綠界填寫預演
                                </DialogTitle>
                                <p className="text-sm text-[#8b4513] opacity-80 text-center mt-2 font-medium">
                                  為確保造冊無誤，請先看過<span className="text-red-700">備註欄填寫範例</span>再前往啟動
                                </p>
                              </DialogHeader>

                              <div className="p-6">
                                <div className="bg-white rounded-xl p-5 mb-6 border border-gray-200 shadow-inner">
                                  <p className="text-sm text-gray-600 mb-4 text-center font-bold">
                                    進入綠界後請滑到<span className="text-red-600 text-base">最下方</span>，照著下圖格式填寫：
                                  </p>
                                  
                                  <div className="bg-white border-2 border-red-500 rounded-lg p-5 relative shadow-sm mx-1">
                                    <div className="absolute -top-3 left-4 bg-red-600 text-white text-[11px] px-3 py-0.5 rounded-full font-bold shadow-md tracking-wider">
                                      必填位置：備註 (Remark)
                                    </div>
                                    <div className="font-mono text-gray-800 text-[14px] leading-relaxed mt-2 font-bold">
                                      姓名：王小明<br/>
                                      生辰：50年1月1日<br/>
                                      祈願：祈求{d.name}加持，{p.name.split('｜')[0]}。
                                    </div>
                                    <div className="absolute inset-0 border-4 border-red-400 opacity-20 animate-pulse rounded-lg pointer-events-none"></div>
                                  </div>
                                </div>

                                <a
                                  href={p.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="block w-full"
                                  aria-label={`前往外部付款頁：${p.name}`}
                                  onClick={() => handleTrackCheckout(p.name)}
                                >
                                  <Button className="w-full h-14 bg-[#b22222] hover:bg-red-800 text-white text-lg font-bold rounded-full shadow-lg transition-all active:scale-95">
                                    確認瞭解，前往綠界登記 <ExternalLink className="h-5 w-5 ml-2" />
                                  </Button>
                                </a>

                                <div className="mt-4 text-center">
                                  <p className="text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
                                    <Lock className="w-3 h-3 text-green-600" /> 點擊後將跳轉至綠界安全支付
                                  </p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          {/* ★★★ 核心修改區結束 ★★★ */}
                          
                          {/* 安全感與承諾視覺化 */}
                          <div className="flex flex-col items-center gap-2 pt-2 border-t border-border/30">
                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
                              <Lock className="w-3 h-3 text-green-600/80" />
                              綠界 256-bit SSL 安全加密護持
                            </div>
                            <div className="flex items-center gap-3 opacity-60 grayscale scale-90">
                              <span className="text-[9px] font-bold tracking-tighter flex items-center gap-1">
                                <CreditCard className="w-3 h-3" /> VISA / MASTER / JCB / 超商代碼
                              </span>
                            </div>
                            <div className="text-[10px] text-center text-muted-foreground/70 mt-1">
                              <Clock className="w-3 h-3 inline mr-1 mb-0.5" />
                              志工於晚間靜心造冊，隔週公佈名錄
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
}