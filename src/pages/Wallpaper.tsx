/*
Design philosophy: Neo-thangka noir
- Indigo night base, gold foil accents, paper grain textures
- Asymmetric composition with dramatic hero image
- Typography: ZCOOL XiaoWei (display) + Noto Serif TC (body)
*/

import { Download } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import wallpaperUrl from "@/assets/downloads/huangcaishen-wallpaper.jpg?url";

export default function Wallpaper() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="黃財神手機桌布下載" path="/wallpaper" />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-32">
        <div className="grid gap-8 md:grid-cols-[1fr_.95fr] items-start">
          <div>
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Free Gift</div>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">黃財神手機桌布</h1>
            <p className="mt-4 readable text-muted-foreground max-w-prose">
              慶祝 FB 粉絲團成立，這張桌布送給您。
              <span className="text-foreground">願您每天打開手機，都記得：您的財庫在回正，您值得被善緣與資糧好好照顧。</span>
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href={wallpaperUrl} download>
                <Button className="h-12 w-full sm:w-auto px-6 font-bold tracking-[0.22em] uppercase gold-border">
                  下載高畫質桌布 <Download className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>

            <div className="mt-5 text-xs readable text-muted-foreground">
              小提醒：若您的手機自動裁切，建議在相簿內移動縮放位置後再設定。
            </div>

            <div className="mt-10 pt-6 border-t border-border/50">
              <Link href="/">
                <span className="inline-flex items-center text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                  回首頁查看法事總覽與本月加碼活動 →
                </span>
              </Link>
            </div>
          </div>

          <Card className="p-4 gold-border bg-card/75 backdrop-blur paper-grain">
            <img
              src={wallpaperUrl}
              alt="黃財神手機桌布預覽"
              className="w-full rounded-lg gold-border object-cover"
              loading="eager"
            />
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}