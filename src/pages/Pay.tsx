import { ExternalLink, ShieldCheck, TriangleAlert, Sparkles, Zap } from "lucide-react";
import { Link } from "wouter";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DEITIES, money } from "@/lib/siteData";

import altarPhoto from "@/assets/visuals/generated/altar-stilllife-offering-set.jpeg";

// ✅ GA4 追蹤函數：修正報表數據空白問題，記錄點擊付款的行為
const trackEcPayClick = (planName: string, price: number, deityName: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "begin_checkout", {
      currency: "TWD",
      value: price,
      items: [{
        item_id: planName,
        item_name: `${deityName} - ${planName}`,
        price: price,
        quantity: 1
      }]
    });
    // 自定義事件，方便您在 GA4 報表中直接觀察「總覽頁」的轉化
    (window as any).gtag("event", "click_ecpay_paypage", {
      deity: deityName,
      plan: planName,
      value: price
    });
  }
};

export default function Pay() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="付款入口" path="/pay" />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-24">
        <div className="grid gap-8 md:grid-cols-[1fr_.95fr]">
          <div>
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground flex items-center gap-2">
              <Sparkles className="h-3 w-3 text-primary" /> Pay Hub
            </div>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">到綠界完成護持登記</h1>
            <p className="mt-4 readable text-muted-foreground max-w-prose">
              付款會跳轉至第三方金流平台綠界完成。你只要依提示完成付款與必要欄位，其餘照如法流程安排。
            </p>

            <Card className="mt-6 p-7 gold-border bg-accent/20 paper-grain shadow-sm">
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">本期活動</div>
              <div className="mt-2 font-display text-2xl">完成登記法事，即免費加入「煙供聖典」一次</div>
              <p className="mt-3 readable text-muted-foreground">
                這個法事之後才會正式開放；現在只要完成任一項護持登記，我們會把你加進本期的煙供名單，作為額外的善緣增上。
              </p>
              <div className="mt-3 text-sm text-muted-foreground">
                你也可以替家人朋友登記（把善意往外放，福德迴流通常更大）。
              </div>
            </Card>
          </div>

          <div className="grid gap-4">
            <Card className="overflow-hidden gold-border bg-card/80 backdrop-blur paper-grain">
              <img
                src={altarPhoto}
                alt="供養與儀軌示意"
                className="h-[260px] w-full object-cover transition-transform hover:scale-105 duration-700"
                loading="eager"
              />
            </Card>

            <Card className="p-7 gold-border bg-card paper-grain">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">為什麼要跳轉第三方？</div>
                  <div className="mt-2 readable text-muted-foreground text-sm">
                    我們沒有收集個資的必要性，敏感資訊由專業金流平台承接。
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <TriangleAlert className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">重要提醒</div>
                  <ul className="mt-2 readable text-muted-foreground text-sm list-disc list-inside grid gap-1">
                    <li>請以綠界頁面顯示之金額與資訊為準。</li>
                    <li>請確認姓名／祈願事項填寫正確（可填你本人或你想護念的人）。</li>
                    <li>本站不提供投資/報酬之保證或承諾。</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-sm readable text-muted-foreground">
                <span className="text-foreground font-semibold">良善提醒：</span>
                你想要的改善通常很具體——睡得著、止得住、不後悔，得益處。越早把護持排進行程，別把今天的耗損拖成明天的巨洞。
              </div>
            </Card>
          </div>
        </div>

        <section className="mt-12 grid gap-4">
          {DEITIES.map((d) => (
            <Card key={d.key} className="p-7 gold-border bg-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div>
                  <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">{d.subtitle}</div>
                  <div className="mt-1 font-display text-3xl">{d.name}</div>
                  <div className="mt-3 readable text-muted-foreground max-w-prose text-sm">{d.promise}</div>
                </div>
                <div className="shrink-0">
                  <Link href={d.route} className="underline underline-offset-4 text-sm text-primary hover:text-primary/80 transition-colors">
                    回到本尊頁看完整內容
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {d.plans.map((p) => (
                  <Card key={p.id} className="p-6 gold-border bg-background/40 hover:bg-background/60 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="font-semibold">{p.name}</div>
                          {p.hot ? (
                            <Badge className="gold-border bg-accent/35 text-accent-foreground px-2 py-0.5 text-[10px]">{p.badge || "優先"}</Badge>
                          ) : null}
                        </div>
                        <div className="mt-3 readable text-muted-foreground text-sm">{p.blurb}</div>
                        <div className="mt-3 text-xs italic text-primary/90 flex items-center gap-1">
                          <Zap className="h-3 w-3" /> {p.feedback}
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-primary">{money(p.price)}</div>
                    </div>

                    <div className="mt-5">
                      <a 
                        href={p.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => trackEcPayClick(p.name, p.price, d.name)} // ✅ 植入追蹤邏輯
                      >
                        <Button className="h-11 px-5 font-black tracking-[0.22em] uppercase gold-border hover:bg-primary/10 transition-all">
                          前往綠界完成 <ExternalLink className="h-4 w-4 ml-1" />
                        </Button>
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </section>
      </main>

      <SiteFooter />
      <FloatingFb />
    </div>
  );
}