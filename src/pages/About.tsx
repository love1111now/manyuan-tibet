import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { 
  Heart, 
  ShieldCheck, 
  EyeOff, 
  PenTool, 
  Clock, 
  MessageCircle 
} from "lucide-react";

import bannerArt from "@/assets/visuals/generated/deity-page-banner-abstract.webp";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="關於" path="/about" />
      <SiteHeader />

      {/* 增加 pb-32 確保手機端不會被 StickyCta 遮擋 */}
      <main className="mx-auto max-w-5xl px-4 pt-10 pb-32">
        <div className="text-xs tracking-[0.26em] uppercase text-primary font-bold flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" /> About Us
        </div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">我們把話說清楚，才值得您護持</h1>
        <p className="mt-5 readable text-muted-foreground max-w-prose leading-relaxed">
          滿願藏庫的核心不是「讓您迷信」，而是「讓您能安心地做決定」。<br/>
          我們用清楚的敘事與透明的流程，把您從焦慮與資訊過載中拉回來：
          <strong className="text-foreground/90 font-medium">選對路徑、完成護持、回到可延續的生活節奏。</strong>
        </p>

        <Card className="mt-8 overflow-hidden gold-border bg-card/80 backdrop-blur paper-grain">
          <img src={bannerArt} alt="傳承與立場示意" className="h-[280px] md:h-[360px] w-full object-cover" loading="eager" />
        </Card>

        {/* 新增：志工團隊的真實故事 */}
        <section className="mt-12">
          <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground mb-3">Our Story</div>
          <h2 className="font-display text-3xl">一群利用下班時間發心的專業志工</h2>
          <div className="mt-4 p-6 md:p-8 rounded-lg bg-primary/5 border border-primary/20">
            <p className="readable text-muted-foreground leading-relaxed">
              您可能會好奇，為什麼這個網站看起來與傳統的宗教網頁不太一樣？<br/><br/>
              滿願藏庫不是一間商業行銷公司，而是由一群具備<strong className="text-foreground">專業設計與網站技術背景的台灣志工</strong>所建立的平台。<br/><br/>
              我們發現，許多正統的藏傳佛法資源，往往被包裝成令人充滿壓力的商業模式或迷信。因此，我們決定利用下班時間，發揮自身的專業，打造一個「安靜、透明、不造神」的護持管道。我們吸收了所有的視覺設計、網站建置與伺服器維護成本，只為讓這份清淨的傳承，能以最莊嚴的樣貌與您結緣。
            </p>
          </div>
        </section>

        <div className="tibetan-divider h-9 opacity-50 my-12" aria-hidden />

        <section className="grid gap-6 md:grid-cols-2">
          {/* 我們相信 */}
          <Card className="p-7 md:p-9 gold-border bg-card hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-primary font-bold mb-6">
              <Heart className="w-4 h-4" /> 我們的堅持
            </div>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground/90 text-sm">因果敬畏，絕不支薪</div>
                  <div className="mt-1 text-sm text-muted-foreground readable">團隊全體皆為不支薪志工。扣除綠界科技必要的金流手續費後，您的每一分護持金，都將全數交由西藏師兄姊化作壇城上的供品。</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground/90 text-sm">透明交付，隔週公佈名單</div>
                  <div className="mt-1 text-sm text-muted-foreground readable">我們無法提供遠在西藏的即時直播，但我們承諾：志工於晚間造冊後，將於隔週在 FB 粉專公佈「去識別化」的功德名錄，讓每一份發心都有跡可循。</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground/90 text-sm">護持是因緣，不是交易</div>
                  <div className="mt-1 text-sm text-muted-foreground readable">最好的結果，是您看懂了本尊的願力，心安地做出決定，然後將精力放回現實生活的努力中。</div>
                </div>
              </li>
            </ul>
          </Card>

          {/* 我們不做 */}
          <Card className="p-7 md:p-9 gold-border bg-card paper-grain hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-muted-foreground font-bold mb-6">
              <EyeOff className="w-4 h-4" /> 我們絕對不做
            </div>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                </div>
                <div>
                  <div className="font-bold text-foreground/80 text-sm">拒絕造神與恐嚇行銷</div>
                  <div className="mt-1 text-sm text-muted-foreground readable">我們沒有投資報酬保證，沒有快速致富的承諾，更不會用「業障重」等恐嚇話術逼迫您立刻下單。</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                </div>
                <div>
                  <div className="font-bold text-foreground/80 text-sm">不收集敏感個資</div>
                  <div className="mt-1 text-sm text-muted-foreground readable">本站不留存您的信用卡號等敏感資訊。所有付款皆由台灣合法的「綠界科技 ECPay」第三方金流安全承接。</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                </div>
                <div>
                  <div className="font-bold text-foreground/80 text-sm">不隨意打擾您的生活</div>
                  <div className="mt-1 text-sm text-muted-foreground readable">我們不主動發送推銷簡訊，也不會因為您護持過一次就瘋狂糾纏。安靜，是我們對您的尊重。</div>
                </div>
              </li>
            </ul>
          </Card>
        </section>

        {/* 聯繫志工區塊 */}
        <section className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">若您對我們的理念有共鳴，或有任何需要協助的地方：</p>
          <a href="https://m.me/61583749010531" target="_blank" rel="noreferrer" className="inline-block">
            <Button variant="outline" className="h-12 px-8 gold-border text-[#0866FF] border-[#0866FF]/30 hover:bg-[#0866FF]/10 transition-colors font-bold tracking-widest">
              <MessageCircle className="w-4 h-4 mr-2" />
              前往 FB 私訊志工團隊
            </Button>
          </a>
          <div className="mt-3 text-[10px] text-muted-foreground opacity-70">
            （志工皆為下班後回覆，若稍有延遲敬請見諒）
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