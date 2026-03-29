/*
  DESIGN REMINDER (StickyCta)
  - Always present: minimal, high-contrast
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <div className="text-xs tracking-[0.28em] uppercase text-muted-foreground">Book now</div>
          <div className="font-display text-base">保留名額・完成登記</div>
        </div>
        <Link href="/pay">
          <Button className="h-11 px-5 font-bold tracking-[0.2em] uppercase gold-border">立即登記</Button>
        </Link>
      </div>
    </div>
  );
}
