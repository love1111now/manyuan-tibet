/*
  DESIGN REMINDER (Pay)
  - Make checkout frictionless: single place for all links
  - Explain how to choose + what happens after payment
*/

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { ExternalLink, CheckCircle2 } from "lucide-react";

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
              你可以直接在這一頁完成下單。建議順序：
              <span className="text-foreground/90">先選本尊 → 再選方案 → 點「登記法事」</span>。
              付款完成即安排法事。
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
              <div className="mt-5 text-xs text-muted-foreground">
                提醒：護持不是交易；我們承諾的是如法完成流程與清楚交付。
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
                <Badge variant="secondary">迅速破災/消除恐懼 → 綠度母</Badge>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">成交小建議</div>
            <ul className="mt-3 text-sm text-muted-foreground readable space-y-2">
              <li>1) 先選「推薦」方案：通常是最對位、回饋最多的。</li>
              <li>2) 祈願寫越具體越好：對象/時間/困境/你希望的改變。</li>
              <li>3) 做完後配合一個小行動：沖澡、溝通、寫下困境、建立佈施預備金…</li>
            </ul>
          </Card>
        </div>

        <Separator className="my-10" />

        <section>
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Pricing</div>
          <h2 className="mt-2 font-display text-3xl">全法事總表</h2>
          <p className="mt-3 readable text-muted-foreground max-w-prose">
            可供全面清楚所需。
          </p>

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
                    <a href={`/#/deity/${d.key}`}>
                      <Button variant="outline" className="gold-border">看介紹</Button>
                    </a>
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

                        <div className="mt-5">
                          <a href={p.url} target="_blank" rel="noreferrer">
                            <Button className="h-11 w-full font-bold tracking-[0.22em] uppercase gold-border">
                              登記法事 <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
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
