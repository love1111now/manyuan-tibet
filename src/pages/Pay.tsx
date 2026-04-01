import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { ExternalLink, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "wouter";

import { DEITIES } from "@/lib/siteData";

export default function Pay() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-16">
        <div className="grid gap-6 md:grid-cols-[1.05fr_.95fr] md:items-start">
          <div>
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Checkout</div>
            <h1 className="mt-2 font-display text-4xl">法事登記（綠界多元支付）</h1>
            <p className="mt-4 readable text-muted-foreground max-w-prose">
              這一頁是「把事情做完」的地方。
              <span className="text-foreground/90">先選本尊 → 再選方案 → 點「登記法事」</span>。
              付款完成即保留名額並安排法事。
              當你處在危機感裡，最需要的不是更多資訊，而是一次正確、可完成的行動。
            </p>

            <Card className="mt-7 p-7 gold-border bg-card/70 paper-grain">
              <div className="font-display text-2xl">下單後你會發生什麼</div>
              <div className="mt-4 grid gap-3">
                {["你完成付款（保留名額）", "透過綠界金流/確認祈願內容", "依本尊法門如法設供與修持", "完成後給你一份『回向心念指引』（本月活動）"].map(
                  (x) => (
                    <div key={x} className="flex gap-2 text-muted-foreground readable">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <div>{x}</div>
                    </div>
                  )
                )}
              </div>
              <div className="mt-6 p-4 rounded-md bg-background/50 border border-border/70 text-sm text-muted-foreground readable">
                <span className="font-semibold text-foreground/80 block mb-1">💡 關於綠界手續費與因果的誠實說明：</span>
                為了符合台灣法令讓您安心支付，每筆登記會由綠界科技收取必要的金流手續費。而我們台灣團隊全體皆為不支薪志工，完全吸收了行政與網站維護成本。您的發心將全數用於法事本身。這份近乎笨拙的透明，是我們對因果的最高敬畏。
              </div>
            </Card>
          </div>

          <Card className="p-7 gold-border bg-card/70 paper-grain">
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">快速選擇</div>
            <div className="mt-2 font-display text-2xl">我不確定選哪個？</div>
            <p className="mt-3 text-muted-foreground readable">
              先看每位本尊頁面的「推薦」方案；或用下面的速選：
            </p>

            <div className="mt-5 grid gap-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">想增財/跑現金流 → 黃財神</Badge>
                <Badge variant="secondary">想守財/護家運 → 大吉祥天女</Badge>
                <Badge variant="secondary">投資理財/決策期 → 象頭財神</Badge>
                <Badge variant="secondary">愛情/貴人緣 → 作明佛母</Badge>
                <Badge variant="secondary">迅速破災/消除恐懼 → 綠度</Badge>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">成交小建議</div>
            <ul className="mt-3 text-sm text-muted-foreground readable space-y-2">
              <li>1) 先選「推薦」方案：通常是最對位、回饋最多的。</li>
              <li>2) 祈願寫越具體越好：對象/時間/困境/你希望的改變。</li>
              <li>3) 做完後配合一個小行動：沖澡、溝通、寫下困境、建立佈施預備金…</li>
            </ul>

            {/* 在成交小建議下方，加入 FB 私訊導流 */}
            <div className="mt-6 p-4 rounded-md bg-foreground/5 border border-border/50 text-center">
              <div className="text-sm text-foreground/80 mb-3">還是不知道怎麼寫祈願名單嗎？</div>
              <a href="https://m.me/61583749010531" target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full border-[#0866FF]/50 text-[#0866FF] hover:bg-[#0866FF]/10 transition-colors">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  私訊 FB 粉專，由專人協助您評估
                </Button>
              </a>
            </div>
          </Card>
        </div>

        <div className="tibetan-divider h-9 opacity-70" aria-hidden />
        <Separator className="my-10" />

        <section className="rounded-xl tibetan-texture-bg">
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Pricing</div>
          <h2 className="mt-2 font-display text-3xl">全法事總表</h2>
          <p className="mt-3 readable text-muted-foreground max-w-prose">
            可供全面清楚所需。
          </p>

          {/* 加入這個活動橫幅 (Banner) */}
          <div className="mt-6 p-5 rounded-lg border border-primary/40 bg-primary/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-6xl text-primary pointer-events-none">
              ✦
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary text-primary-foreground gold-border">本月限定</Badge>
              <span className="font-display text-lg text-foreground/90">琉璃護佑：萬願隨行計畫</span>
            </div>
            <p className="text-sm text-muted-foreground readable">
              我們深知「健康與安穩」是所有福報的底氣。即日起，只要於本站登記<strong className="text-foreground">任一法事方案</strong>，我們將為您<strong className="text-primary">免費加碼</strong>列入每週六的「藥師佛健康息災煙供」名單，為您或家人祈求身心平穩。
            </p>
          </div>

          <div className="mt-7 grid gap-6">
            {DEITIES.map((d) => (
              <Card key={d.key} className="p-7 gold-border bg-card/70 paper-grain">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">{d.primaryIntent}</div>
                    <div className="mt-1 font-display text-2xl">{d.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{d.subtitle}</div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/deity/${d.key}`}>
                      <Button variant="outline" className="gold-border">看介紹</Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {d.plans
                    .slice()
                    .sort((a, b) => a.price - b.price)
                    .map((p) => (
                      <Card key={p.id} className="p-6 gold-border bg-background/35">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <div className="font-display text-xl">{p.name}</div>
                              {p.hot ? (
                                <Badge className="gold-border bg-primary text-primary-foreground">推薦</Badge>
                              ) : null}
                            </div>
                            <div className="mt-2 text-xs text-muted-foreground">適合：{p.suitableFor.join("、")}</div>
                          </div>
                          <div className="font-display text-2xl text-primary">{p.price}</div>
                        </div>

                        <div className="mt-3 text-sm text-muted-foreground readable">{p.blurb}</div>

                        <div className="mt-5 text-center">
                          <a href={p.url} target="_blank" rel="noreferrer">
                            <Button className="h-11 w-full font-bold tracking-[0.22em] uppercase gold-border hover:bg-primary/90 transition-colors">
                              前往登記名額 <ExternalLink className="h-4 w-4 ml-2 opacity-70" />
                            </Button>
                          </a>
                          <div className="mt-2.5 text-[11px] text-muted-foreground/70 flex flex-col items-center gap-1">
                            <span className="flex items-center gap-1">
                              <span className="inline-block w-2 h-2 rounded-full bg-green-500/80"></span>
                              綠界科技第三方金流代收，安全有保障
                            </span>
                            <span className="opacity-80">遇到問題？隨時歡迎至 FB 粉專私訊我們</span>
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