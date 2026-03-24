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
      <div className="relative mx-auto max-w-6xl px-4 pb-4 pt-3">
        <div className="pointer-events-auto rounded-2xl gold-border bg-card/90 backdrop-blur p-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">窗口有限 · 先預定保留名額</div>
            <div className="font-display text-base truncate">選對路，現在就走</div>
          </div>
          <Link href="/pay" className="shrink-0">
            <Button className="h-11 px-4 font-black tracking-[0.22em] uppercase gold-border">
              立即預定 <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
