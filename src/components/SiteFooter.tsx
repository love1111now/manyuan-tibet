import { Link } from "wouter";
import { SITE } from "@/lib/siteData";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <div className="font-display text-2xl">滿願藏庫</div>
          <p className="mt-3 readable text-muted-foreground max-w-prose">
            以《金光明最勝王經》的增益、除障與護持意象作為敘事主軸，
            讓你在困境中找到可理解、可行動的路：選對本尊 → 選對方案 → 到綠界完成護持。
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <a
              href={SITE.fb}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-primary"
            >
              追蹤 FB
            </a>
            <span className="text-muted-foreground">·</span>
            <Link href="/terms" className="underline underline-offset-4 text-muted-foreground">
              條款與隱私
            </Link>
          </div>

          <div className="mt-6 text-xs text-muted-foreground leading-relaxed">
            提醒：本站內容屬宗教護持與回向之資訊整理，不提供醫療、法律、投資報酬之保證或替代建議；付款將導向第三方金流平台綠界完成。
          </div>

          <div className="mt-4 text-xs text-muted-foreground leading-relaxed">
            退換機制與服務性質：本服務屬「特定勞務」與「個別化啟修」性質。當你完成預定且儀軌啟動後，即進入修持流程與資源配置，故不適用七日鑑賞期；敬請在預定前確認需求。
          </div>
        </div>

        <div className="grid gap-3">
          <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">站內導覽</div>
          <div className="grid gap-2 text-sm">
            <Link href="/puja" className="hover:text-primary transition-colors">法會總覽</Link>
            <Link href="/sutra" className="hover:text-primary transition-colors">經典主軸</Link>
            <Link href="/proof" className="hover:text-primary transition-colors">見證</Link>
            <Link href="/about" className="hover:text-primary transition-colors">關於</Link>
            <Link href="/pay" className="hover:text-primary transition-colors">付款入口</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} 滿願藏庫</div>

        </div>
      </div>
    </footer>
  );
}
