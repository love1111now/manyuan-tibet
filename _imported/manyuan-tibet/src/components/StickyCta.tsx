import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyCta() {
  const [loc] = useLocation();

  // 在付款頁就不重複壓 CTA
  if (loc === "/pay") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 pt-3 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <div className="pointer-events-auto rounded-2xl gold-border bg-card/90 backdrop-blur p-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">如果你已經想好了，就把這件事先安放好</div>
            <div className="font-display text-base truncate">把路徑定下來，心就會比較穩</div>
          </div>
          <Link href="/pay" className="shrink-0">
            <Button className="h-11 px-4 font-black tracking-[0.22em] uppercase gold-border">
              前往綠界完成 <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
