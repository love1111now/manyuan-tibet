import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import PageIllustrations from "@/components/PageIllustrations";

import nfImg1 from "@/assets/visuals/seo/image_w5504_h3072_page-404-1.webp";
import nfImg2 from "@/assets/visuals/seo/image_w5504_h3072_page-404-2.webp";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="找不到頁面" noIndex />
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 pt-14 pb-24">
        <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">404</div>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">你走到一條沒有路的路</h1>
        <p className="mt-4 readable text-muted-foreground max-w-prose">
          沒關係。回到首頁用「困境對位」重新選一尊，或到付款入口把護持先安排好。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="/" className="shrink-0">
            <Button className="h-12 px-6 font-black tracking-[0.22em] uppercase gold-border">
              回首頁 <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="/pay"
            className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-card gold-border readable"
          >
            去付款入口
          </Link>
        </div>
      </main>

      <PageIllustrations images={[{ src: nfImg1, alt: "寺院走廊光影象徵回到正軌" }, { src: nfImg2, alt: "黑暗中金色光束指引前行" }]} />

      <SiteFooter />
    </div>
  );
}
