import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Sutra() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="經典主軸｜金光明最勝王經" path="/sutra" />
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 pt-10 pb-24">
        <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Sutra Narrative</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">以《金光明最勝王經》說清楚：為何要護持</h1>
        <p className="mt-4 readable text-muted-foreground max-w-prose">
          這一頁不是要你背經文，而是把「你為什麼會卡」與「你接下來要做什麼」講清楚。
          我們採用《金光明最勝王經》的增益、除障、護持意象作為敘事主軸：
          讓人從危機感出發，走到可行動的路。
        </p>

        <section className="mt-10 grid gap-4">
          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">危機：很多人都中了</div>
            <div className="mt-3 readable">
              你以為你在缺錢，但你其實在缺「穩定的福德資糧與正確路徑」。
              匱乏感會把人推去做錯決策；決策錯了，努力就會變成耗損。
            </div>
          </Card>

          <Card className="p-7 gold-border bg-card">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">解法：不是口號，是路徑</div>
            <div className="mt-3 readable text-muted-foreground">
              我們把路徑拆成可理解的三步：
              <ul className="mt-3 list-disc list-inside grid gap-1">
                <li>先對位：你到底是穩財、守財、清明、還是貴人卡住？</li>
                <li>再護持：以如法供養與回向，讓心行回到正位。</li>
                <li>最後行動：完成護持，不再只是焦慮地看內容。</li>
              </ul>
            </div>
          </Card>

          <Card className="p-7 gold-border bg-card">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">我們的立場：很重要</div>
            <div className="mt-3 readable text-muted-foreground">
              我們不做「保證中獎」式的承諾，也不把宗教話術包裝成投資建議。
              你在這裡做的是護持與回向；我們負責把流程與選擇講清楚。
            </div>
          </Card>
        </section>

        <section className="mt-10 grid gap-4">
          <Card className="p-7 gold-border bg-card">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">觀念：財佈施為什麼快</div>
            <div className="mt-3 readable text-muted-foreground">
              很多人求財只會『抓緊』，但經典與祖師都反覆提醒：真正讓資糧續得起來的，是佈施與供養。
              《金光明最勝王經》在〈大吉祥天女增長財物品〉甚至直說：得財之後要以上分供養三寶，並「時時給濟貧乏，不應慳惜，獨為己身」。
              近代傳承中，Lama Zopa Rinpoche 也開示：就算做財神法，日常仍要修佈施，這才是成功與資糧的基本因。
            </div>
          </Card>

          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">急迫性：你想要的改善，其實很明確</div>
            <div className="mt-3 readable">
              你想要的通常不是抽象的『變有錢』，而是更具體的：睡得著、決策不後悔、支出止得住、關係不再一直耗損。
              這些改善越早開始，越少把今天的耗損拖成明天的洞。拖延本身，就是匱乏感在收利息。
            </div>
          </Card>
        </section>

        <section className="mt-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/puja" className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-card gold-border readable">
              回法會總覽
            </Link>
            <Link href="/pay" className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border">
              我已理解，直接去預定 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingFb />
      <StickyCta />
      <div className="h-20" />
    </div>
  );
}
