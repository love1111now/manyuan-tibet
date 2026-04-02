import { SITE } from "@/lib/siteData";
import { Heart } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-18 bg-background/30">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">{SITE.name}</div>
          <p className="mt-3 text-sm text-muted-foreground readable leading-relaxed">
            我們把儀軌做得精準，也把流程說得清楚。護持不是交易，
            而是把心念安放在正因上——讓您更穩、更能做對的選擇。
          </p>
          
          {/* 全域信任標籤：確保每個頁面底部都有志工聲明 */}
          <div className="mt-5 inline-flex items-start gap-2 p-3 rounded-md bg-primary/5 border border-primary/20 text-xs text-muted-foreground">
            <Heart className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
            <div>
              <span className="font-bold text-foreground/90">台灣不支薪志工團隊維護</span><br/>
              無商業行銷操作，護持金扣除第三方手續費後，將全數化作西藏壇城供品。
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs tracking-[0.28em] uppercase text-muted-foreground">Notice</div>
          <ul className="mt-3 text-sm text-muted-foreground readable space-y-2">
            <li>本網站內容為宗教服務資訊與修持建議，非投資/醫療/法律承諾。</li>
            <li>結果受因緣、心行、努力與環境等多重因素影響；請以平常心護持。</li>
            <li>若有重大身心狀況，請務必同步尋求專業醫療協助。</li>
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-[0.28em] uppercase text-muted-foreground">Contact</div>
          <div className="mt-3 text-sm text-muted-foreground readable">
            Facebook：{" "}
            <a className="underline hover:text-foreground transition-colors" href={SITE.fb} target="_blank" rel="noreferrer">
              滿願藏庫 粉專
            </a>
          </div>
          <div className="mt-1 text-[11px] text-muted-foreground opacity-80">
            （志工皆為下班後回覆，敬請見諒）
          </div>
          <div className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} {SITE.name}</div>
        </div>
      </div>
    </footer>
  );
}