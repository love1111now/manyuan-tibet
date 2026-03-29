/*
  DESIGN REMINDER (SiteFooter)
  - Keep it calm and trustworthy
  - No exaggerated claims
*/

import { SITE } from "@/lib/siteData";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-18">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">{SITE.name}</div>
          <p className="mt-3 text-sm text-muted-foreground readable">
            我們把儀軌做得精準，也把流程說得清楚。護持不是交易，
            而是把心念安放在正因上——讓你更穩、更能做對的選擇。
          </p>
        </div>

        <div>
          <div className="text-xs tracking-[0.28em] uppercase text-muted-foreground">Notice</div>
          <ul className="mt-3 text-sm text-muted-foreground readable space-y-2">
            <li>本網站內容為宗教服務資訊與修持建議，非投資/醫療/法律承諾。</li>
            <li>結果受因緣、心行、努力與環境等多重因素影響；請以平常心護持。</li>
            <li>若有重大身心狀況，請同步尋求專業協助。</li>
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-[0.28em] uppercase text-muted-foreground">Contact</div>
          <div className="mt-3 text-sm text-muted-foreground readable">
            Facebook：{" "}
            <a className="underline hover:text-foreground" href={SITE.fb} target="_blank" rel="noreferrer">
              {SITE.fb}
            </a>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">© {new Date().getFullYear()} {SITE.name}</div>
        </div>
      </div>
    </footer>
  );
}
