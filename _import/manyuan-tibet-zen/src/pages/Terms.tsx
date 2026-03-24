import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="條款與隱私" path="/terms" />
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 pt-10 pb-24">
        <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Terms</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">條款與隱私</h1>
        <p className="mt-4 readable text-muted-foreground max-w-prose">
          為了讓你安心了解護持流程與個資處理方式，我們把重要事項整理如下。
        </p>

        <section className="mt-10 grid gap-4">
          <Card className="p-7 gold-border bg-card">
            <div className="font-semibold">1. 服務性質</div>
            <p className="mt-3 readable text-muted-foreground">
              本站提供宗教護持與回向相關之資訊與導流，並不提供醫療、法律、投資建議或任何報酬保證。
              你在本站所做的行為，屬自願性之護持與發心。
            </p>
          </Card>

          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="font-semibold">2. 付款與個資</div>
            <p className="mt-3 readable text-muted-foreground">
              付款將導向第三方金流平台綠界完成。本站不在站內蒐集敏感個資；必要欄位以第三方平台提示為準。
            </p>
          </Card>

          <Card className="p-7 gold-border bg-card">
            <div className="font-semibold">3. 內容著作權</div>
            <p className="mt-3 readable text-muted-foreground">
              本站文字、設計、素材若無特別標示，皆屬本站或權利人所有。未經同意不得任意轉載、改作或商用。
            </p>
          </Card>

          <Card className="p-7 gold-border bg-card">
            <div className="font-semibold">4. 免責聲明</div>
            <p className="mt-3 readable text-muted-foreground">
              任何成效皆受個人因緣、行為與外在條件影響，本站不做結果保證。
            </p>
          </Card>
        </section>
      </main>

      <SiteFooter />
      <FloatingFb />
    </div>
  );
}
