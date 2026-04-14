/*
Design philosophy: Neo-thangka noir (Mobile Typography & UX Defense)
- Mobile Fix 1: Refactored "Intuitive Navigation" buttons to prevent icon crushing and awkward wrapping on small screens.
- Mobile Fix 2: Decoupled Plan Title and Price in the Plan Cards. They now stack vertically on mobile and align horizontally on desktop.
- Mobile Fix 3: Scaled down massive typography on mobile breakpoints to prevent 4-line text walls.
- 100% Unabbreviated Production Ready Code.
*/

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
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { 
  CheckCircle2, 
  MessageCircle, 
  Heart, 
  ShieldCheck, 
  Lock,
  CreditCard,
  Clock,
  Info,
  Layers,
  ArrowRight,
  Sparkles,
  Coffee,
  Coins,
  Home,
  Eye,
  Leaf,
  Zap,
  Shield
} from "lucide-react";
import { Link } from "wouter";

import { DEITIES } from "@/lib/siteData";

export default function Pay() {
  
  const handleTrackCheckout = (planName: string, price: number, deityName: string) => {
    if (typeof window !== "undefined") {
      window.gtag?.('event', 'begin_checkout', {
        currency: 'TWD',
        value: price,
        items: [{ item_name: `${deityName}-${planName}`, price: price }]
      });
      window.fbq?.('track', 'InitiateCheckout', {
        content_name: planName,
        value: price,
        currency: 'TWD'
      });
    }
  };

  const scrollToDeity = (key: string) => {
    const element = document.getElementById(`deity-section-${key}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-32">
        {/* 上半部：引言與流程說明 */}
        <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-start">
          <div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-bold mb-3">
              <ShieldCheck className="w-4 h-4" /> Secure Registry System
            </div>
            {/* 🟢 修正手機版標題過大造成的壓迫感 */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
              專屬祈福法事登記<br/>
              <span className="text-foreground/80 text-2xl sm:text-3xl md:text-4xl">（安全造冊系統）</span>
            </h1>
            <p className="mt-6 readable text-muted-foreground max-w-prose text-base md:text-lg leading-relaxed">
              這是一個讓您的祈願能如實傳達的所在。
              <span className="text-foreground font-bold">選擇契合的本尊 → 選擇加持方案 → 點擊「確認委託」</span>。
              完成登記後，名額即刻為您保留。當您處於焦慮與掙扎中，一次清晰且安定的行動，勝過無數的胡思亂想。
            </p>

            <div className="mt-8 p-5 md:p-6 rounded-xl bg-primary/5 border border-primary/30 flex items-start gap-4 shadow-inner">
              <Coffee className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground text-base md:text-lg mb-2 tracking-wide">毫無負擔的護持起點：自 NT$490 起</h3>
                <p className="text-sm md:text-base text-muted-foreground readable leading-relaxed">
                  我們堅持不造神、不以恐懼行銷。系統內所有的基礎祈福方案皆從 <strong className="text-foreground font-bold">NT$490</strong> 起。這大概是一頓簡餐的價格，卻能為您點亮一盞長明的護佑之燈。請依循您當下的能力與心意，安心選擇最契合的路徑。
                </p>
              </div>
            </div>

            <Card className="mt-8 p-6 md:p-10 gold-border bg-card/70 paper-grain relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <Layers className="w-40 h-40 text-primary" />
              </div>
              <div className="font-display text-2xl md:text-3xl flex items-center gap-3 text-foreground/90">
                法事報名後的執行進度
              </div>
              <div className="mt-8 grid gap-6">
                {[
                  { title: "確認委託（鎖定修復名額）", desc: "透過綠界金流系統立即確認您的登記名額與意願。" },
                  { title: "志工啟動靜心造冊", desc: "台灣志工將於下班後的晚間統一核對名單，進行系統歸檔。", highlight: true },
                  { title: "依本尊法門如法設供", desc: "名冊將傳遞至西藏壇城，由師兄姊如法展開清淨與增益儀軌。" },
                  { title: "隔週公佈結案名錄", desc: "志工彙整後，於 FB 粉專公佈去識別化名錄，確保工程透明。", highlight: true },
                  { title: "交付專屬『修復指引』", desc: "提供圖文引導，協助您將壇城的加持力精準落實於日常頻率中。" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 text-muted-foreground readable items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className={`w-5 h-5 ${item.highlight ? 'text-primary' : 'text-primary/50'}`} />
                    </div>
                    <div>
                      <div className={`text-base md:text-lg font-bold ${item.highlight ? 'text-foreground' : 'text-foreground/80'}`}>
                        {item.title}
                      </div>
                      <div className="text-sm mt-1 opacity-80 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 md:p-5 rounded-lg bg-background/60 border border-border/70 text-sm text-muted-foreground readable shadow-inner">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="leading-relaxed text-xs md:text-sm">
                    <span className="font-bold text-foreground block mb-2 text-sm md:text-base">💡 關於手續費與因果的誠實說明：</span>
                    為符合台灣法令讓您安心委託，每筆登記將由綠界收取必要金流手續費。而台灣團隊全體皆為<strong className="text-foreground">下班後發心的不支薪志工</strong>，完全吸收了行政與網站維護成本。您的發心將全數用於法事工程本身。這份近乎笨拙的透明，是我們對因果的最高敬畏。
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 md:p-10 gold-border bg-card/70 paper-grain">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">Intuitive Navigation</div>
            <div className="font-display text-2xl md:text-3xl text-foreground/90">不知道該怎麼選？</div>
            <p className="mt-3 text-sm md:text-base text-muted-foreground readable">
              您可以參考各本尊頁面的詳細介紹；或透過下方情境，直覺尋找契合您的<strong className="text-foreground">本尊加持力量</strong>：
            </p>

            <div className="mt-6 grid gap-3">
              {/* 🟢 修復手機版防擠壓的導航按鈕 (Flexbox 絕對防禦) */}
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollToDeity('yellow')} className="w-full text-left group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-lg border border-primary/20 bg-background/50 group-hover:bg-primary/10 transition-colors gap-2">
                    <div className="flex items-center text-sm font-medium">
                      <Coins className="w-4 h-4 md:w-5 md:h-5 mr-3 shrink-0 text-[#Eab308]" />
                      <span>渴望豐盛 / 重啟現金流</span>
                    </div>
                    <div className="flex items-center text-sm font-bold text-[#Eab308] sm:ml-4">
                      <span className="sm:hidden text-muted-foreground/50 mr-2 ml-7">→</span>
                      黃財神
                    </div>
                  </div>
                </button>
                <button onClick={() => scrollToDeity('mahashri')} className="w-full text-left group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-lg border border-primary/20 bg-background/50 group-hover:bg-primary/10 transition-colors gap-2">
                    <div className="flex items-center text-sm font-medium">
                      <Home className="w-4 h-4 md:w-5 md:h-5 mr-3 shrink-0 text-[#F97316]" />
                      <span>祈求安穩 / 守護家運</span>
                    </div>
                    <div className="flex items-center text-sm font-bold text-[#F97316] sm:ml-4">
                      <span className="sm:hidden text-muted-foreground/50 mr-2 ml-7">→</span>
                      大吉祥天女
                    </div>
                  </div>
                </button>
                <button onClick={() => scrollToDeity('ganapati')} className="w-full text-left group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-lg border border-primary/20 bg-background/50 group-hover:bg-primary/10 transition-colors gap-2">
                    <div className="flex items-center text-sm font-medium">
                      <Eye className="w-4 h-4 md:w-5 md:h-5 mr-3 shrink-0 text-[#F59E0B]" />
                      <span>面臨抉擇 / 尋求清明洞察</span>
                    </div>
                    <div className="flex items-center text-sm font-bold text-[#F59E0B] sm:ml-4">
                      <span className="sm:hidden text-muted-foreground/50 mr-2 ml-7">→</span>
                      象頭財神
                    </div>
                  </div>
                </button>
                <button onClick={() => scrollToDeity('kurukulla')} className="w-full text-left group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-lg border border-primary/20 bg-background/50 group-hover:bg-primary/10 transition-colors gap-2">
                    <div className="flex items-center text-sm font-medium">
                      <Heart className="w-4 h-4 md:w-5 md:h-5 mr-3 shrink-0 text-[#F43F5E]" />
                      <span>修復關係 / 吸引善緣貴人</span>
                    </div>
                    <div className="flex items-center text-sm font-bold text-[#F43F5E] sm:ml-4">
                      <span className="sm:hidden text-muted-foreground/50 mr-2 ml-7">→</span>
                      作明佛母
                    </div>
                  </div>
                </button>
                <button onClick={() => scrollToDeity('medicine-buddha')} className="w-full text-left group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-lg border border-primary/20 bg-background/50 group-hover:bg-primary/10 transition-colors gap-2">
                    <div className="flex items-center text-sm font-medium">
                      <Leaf className="w-4 h-4 md:w-5 md:h-5 mr-3 shrink-0 text-[#3B82F6]" />
                      <span>身心耗損 / 祈求健康平安</span>
                    </div>
                    <div className="flex items-center text-sm font-bold text-[#3B82F6] sm:ml-4">
                      <span className="sm:hidden text-muted-foreground/50 mr-2 ml-7">→</span>
                      藥師佛
                    </div>
                  </div>
                </button>
                <button onClick={() => scrollToDeity('green-tara')} className="w-full text-left group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-lg border border-primary/20 bg-background/50 group-hover:bg-primary/10 transition-colors gap-2">
                    <div className="flex items-center text-sm font-medium">
                      <Zap className="w-4 h-4 md:w-5 md:h-5 mr-3 shrink-0 text-[#10B981]" />
                      <span>突發變故 / 平息深層恐懼</span>
                    </div>
                    <div className="flex items-center text-sm font-bold text-[#10B981] sm:ml-4">
                      <span className="sm:hidden text-muted-foreground/50 mr-2 ml-7">→</span>
                      綠度母
                    </div>
                  </div>
                </button>
                <button onClick={() => scrollToDeity('padmasambhava')} className="w-full text-left group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-lg border border-primary/20 bg-background/50 group-hover:bg-primary/10 transition-colors gap-2">
                    <div className="flex items-center text-sm font-medium">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 mr-3 shrink-0 text-[#6366F1]" />
                      <span>動盪不安 / 尋求強大靠山</span>
                    </div>
                    <div className="flex items-center text-sm font-bold text-[#6366F1] sm:ml-4">
                      <span className="sm:hidden text-muted-foreground/50 mr-2 ml-7">→</span>
                      蓮花生大士
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <Separator className="my-8 border-border/50" />

            <div className="p-5 md:p-6 rounded-lg bg-foreground/5 border border-border/50 text-center">
              <div className="text-sm md:text-base text-foreground/90 font-bold mb-4">不確定如何表達內心深處的祈願嗎？</div>
              <a href="https://m.me/61583749010531" target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full h-12 border-[#0866FF]/50 text-[#0866FF] hover:bg-[#0866FF]/10 transition-colors font-bold tracking-widest text-xs md:text-sm">
                  <MessageCircle className="w-4 h-4 mr-2 shrink-0" />
                  私訊 FB 粉專，志工溫暖陪伴梳理
                </Button>
              </a>
              <div className="mt-3 text-[10px] md:text-[11px] text-muted-foreground opacity-70 tracking-widest">
                （志工將於晚間下班後盡速為您解答）
              </div>
            </div>
          </Card>
        </div>

        <div className="tibetan-divider h-12 opacity-60 mt-12" aria-hidden />

        {/* 方案列表總覽 */}
        <section className="rounded-xl p-2 md:p-0 pt-8">
          <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">Restoration Catalog</div>
          <h2 className="font-display text-3xl md:text-5xl text-foreground/90">全站修復計畫總案冊</h2>
          <p className="mt-4 readable text-muted-foreground max-w-prose text-base md:text-lg">
            為您完整展開所有本尊法事的專業路徑。
          </p>

          <div className="mt-8 p-5 md:p-8 rounded-xl border border-primary/40 bg-primary/5 relative overflow-hidden group shadow-inner">
            <div className="absolute top-0 right-0 p-6 opacity-10 font-display text-5xl md:text-7xl text-primary pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-12">
              ✦
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
              <Badge className="bg-primary text-primary-foreground gold-border animate-pulse px-3 py-1 font-bold tracking-widest text-[10px] w-fit">顧問加碼</Badge>
              <span className="font-display text-lg md:text-2xl text-foreground/90">琉璃護佑：萬願隨行計畫</span>
            </div>
            <p className="text-sm md:text-lg text-muted-foreground readable leading-relaxed">
              我們深知「健康與安穩」是所有福報的底氣。即日起，只要於本站委託<strong className="text-foreground">任一修復計畫</strong>，我們將為您<strong className="text-primary font-bold">免費加碼</strong>列入每週六的「藥師佛健康息災煙供」工程中，為您或家人建立雙重防禦。
            </p>
          </div>

          <div className="mt-10 grid gap-8">
            {DEITIES.map((d) => (
              <Card key={d.key} id={`deity-section-${d.key}`} className="p-5 md:p-10 gold-border bg-card/70 paper-grain backdrop-blur-sm shadow-lg scroll-mt-24">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-primary/20 pb-5 md:pb-6 mb-6 md:mb-8">
                  <div>
                    <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-black mb-1.5">{d.primaryIntent}</div>
                    <div className="font-display text-3xl md:text-4xl">{d.name}</div>
                    <div className="mt-2 text-sm md:text-base text-muted-foreground italic font-serif">{d.subtitle}</div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/deity/${d.key}`} className="w-full md:w-auto">
                      <Button variant="outline" className="w-full gold-border text-xs md:text-sm tracking-widest font-bold h-11 px-6 hover:bg-primary/10">探索本尊詳情</Button>
                    </Link>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {d.plans
                    .slice()
                    .sort((a, b) => a.price - b.price)
                    .map((p) => (
                      <Card key={p.id} className="relative p-6 md:p-8 gold-border bg-background/35 hover:border-primary/50 transition-all duration-500 flex flex-col justify-between hover:shadow-xl">
                        
                        {p.hot && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                            <Badge className="bg-primary text-primary-foreground gold-border px-4 md:px-5 py-1 text-[9px] md:text-[10px] font-bold tracking-widest shadow-lg animate-bounce uppercase whitespace-nowrap">
                              進階首選・系統推薦
                            </Badge>
                          </div>
                        )}

                        <div>
                          {/* 🟢 修正手機版卡片標題與價格互相擠壓的問題 */}
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div>
                              <div className="font-display text-2xl md:text-3xl text-foreground/90 leading-snug">{p.name}</div>
                              <div className="mt-2 text-xs md:text-sm font-bold text-primary/80 tracking-wide leading-relaxed">精準對位：{p.suitableFor.join("、")}</div>
                            </div>
                            <div className="text-left sm:text-right shrink-0 mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-border/50">
                              <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-bold mb-1">護持結緣金</div>
                              <div className="font-display text-3xl md:text-4xl text-primary">{p.price}</div>
                            </div>
                          </div>

                          <div className="mt-6 text-sm md:text-base text-muted-foreground readable min-h-[3rem] md:min-h-[4rem] leading-relaxed">
                            {p.blurb}
                          </div>
                        </div>

                        <div className="mt-8 space-y-5">
                          <div className="p-4 bg-background/60 rounded-lg border border-primary/20 text-[11px] md:text-xs text-muted-foreground leading-relaxed shadow-inner">
                            <Info className="w-3.5 h-3.5 md:w-4 md:h-4 inline mr-2 text-primary mb-0.5" />
                            祈願越真實越好！委託時請於綠界<strong className="text-foreground/90 font-bold">備註欄</strong>寫下您的：<span className="text-foreground font-bold">姓名、居住地與目前的生命掙扎</span>。
                          </div>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="h-14 w-full text-sm md:text-base font-bold tracking-[0.15em] uppercase gold-border bg-primary text-primary-foreground shadow-lg transition-all hover:scale-[1.02] active:scale-95">
                                確認委託，請志工造冊 <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md w-[95%] p-0 overflow-hidden bg-background border-primary/30 shadow-2xl rounded-xl">
                              
                              <div className="bg-primary/5 p-6 md:p-8 pb-5 md:pb-6 border-b border-primary/20 text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                  <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-primary" />
                                </div>
                                <Badge className="bg-primary/10 text-primary gold-border mb-3 md:mb-4 font-bold tracking-widest text-[9px] md:text-[10px]">志工陪伴通道</Badge>
                                <DialogTitle className="text-xl md:text-3xl font-display text-foreground/90 tracking-wide">
                                  深呼吸，我們準備啟程
                                </DialogTitle>
                                <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3 readable">
                                  為了確保您的祈願能精準傳達至壇城，<br className="hidden md:block"/>請在進入綠界前，跟著我們確認以下兩件事：
                                </p>
                              </div>

                              <div className="p-5 md:p-8 space-y-6 md:space-y-7">
                                <div className="flex gap-3 md:gap-4 items-start">
                                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold shrink-0 gold-border mt-0.5 text-xs md:text-sm shadow-sm">1</div>
                                  <div>
                                    <div className="font-bold text-foreground/90 text-base md:text-lg">備妥您的真實心音</div>
                                    <div className="text-xs md:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                                      進入綠界後，請滑到最下方的<strong className="text-foreground">「備註欄 (Remark)」</strong>，寫下您的：姓名、生辰、與此刻最想改變的困境。
                                    </div>
                                    <div className="mt-3 p-3 md:p-4 bg-background/50 border border-primary/20 rounded-md font-mono text-[11px] md:text-[13px] text-muted-foreground shadow-inner leading-relaxed">
                                      <span className="text-primary font-bold">📝 填寫範例：</span><br/>
                                      王小明，50年1月1日<br/>
                                      祈求{d.name}加持，{p.name.split(/[｜：]/)[0]}。
                                    </div>
                                  </div>
                                </div>

                                <div className="flex gap-3 md:gap-4 items-start">
                                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold shrink-0 gold-border mt-0.5 text-xs md:text-sm shadow-sm">2</div>
                                  <div>
                                    <div className="font-bold text-foreground/90 text-base md:text-lg">放心交給安全系統</div>
                                    <div className="text-xs md:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                                      點擊下方按鈕後，您將進入綠界的 256-bit SSL 加密通道。付款完成後，系統會自動引導您回來，<strong className="text-foreground font-medium">我們會在成功頁面等您。</strong>
                                    </div>
                                  </div>
                                </div>

                                <div className="pt-2 md:pt-4">
                                  <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block w-full"
                                    onClick={() => handleTrackCheckout(p.name, p.price, d.name)}
                                  >
                                    <Button className="w-full h-14 md:h-16 bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-lg font-bold shadow-xl transition-all active:scale-95 tracking-[0.1em] md:tracking-[0.15em] group">
                                      準備好了，前往安全通道 <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                  </a>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          
                          <div className="flex flex-col items-center gap-2.5 pt-4 border-t border-border/30">
                            <div className="flex items-center gap-1.5 text-[9px] md:text-[11px] text-muted-foreground font-bold tracking-widest">
                              <Lock className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-600/80" />
                              綠界 256-bit SSL 安全加密系統
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 opacity-60 grayscale scale-90 md:scale-95">
                              <span className="text-[9px] md:text-[10px] font-bold tracking-widest flex items-center gap-1.5 uppercase">
                                <CreditCard className="w-3 h-3 md:w-3.5 md:h-3.5" /> VISA / MASTER / JCB / 超商代碼
                              </span>
                            </div>
                            <div className="text-[9px] md:text-[11px] text-center text-muted-foreground/80 mt-1 font-medium tracking-wide">
                              <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 inline mr-1.5 mb-0.5 text-primary" />
                              志工於晚間靜心造冊，隔週公佈透明名錄
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