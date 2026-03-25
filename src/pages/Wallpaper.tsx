/*
Design philosophy: Neo-thangka noir
- Indigo night base, gold foil accents, paper grain textures
- Asymmetric composition with dramatic hero image
- Typography: ZCOOL XiaoWei (display) + Noto Serif TC (body)
*/

import { Download, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/siteData";

import wallpaperUrl from "@/assets/downloads/huangcaishen-wallpaper.jpg?url";

export default function Wallpaper() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="黃財神手機桌布下載" path="/wallpaper" />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-24">
        <div className="grid gap-8 md:grid-cols-[1fr_.95fr] items-start">
          <div>
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Free Gift</div>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">黃財神手機桌布</h1>
            <p className="mt-4 readable text-muted-foreground max-w-prose">
              慶祝 FB 粉絲團成立，這張桌布送給你。
              <span className="text-foreground">願你每天打開手機，都記得：你的財庫在回正，你值得被善緣與資糧好好照顧。</span>
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href={wallpaperUrl} download>
                <Button className="h-12 px-6 font-black tracking-[0.22em] uppercase gold-border">
                  下載桌布 <Download className="h-4 w-4" />
                </Button>
              </a>
              <a href={SITE.fb} target="_blank" rel="noreferrer">
                <Button variant="outline" className="h-12 px-6 gold-border">
                  追蹤 FB 粉絲團 <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="mt-5 text-xs readable text-muted-foreground">
              小提醒：若你的手機自動裁切，建議在相簿內移動縮放位置後再設定。
            </div>

            <div className="mt-8">
              <Link href="/">
                <span className="underline underline-offset-4 text-primary text-sm">回首頁繼續做「財庫能量檢測」→</span>
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
      <FloatingFb />
    </div>
  );
}
