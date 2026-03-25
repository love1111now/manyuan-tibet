import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "法會總覽", href: "/puja" },
  { label: "經典主軸", href: "/sutra" },
  { label: "見證", href: "/proof" },
  { label: "關於", href: "/about" },
];

export default function SiteHeader() {
  const [loc] = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [loc]);

  const isActive = useMemo(() => {
    const v = new Set(["/puja", "/sutra", "/proof", "/about", "/pay"]);
    return (href: string) => {
      if (href === "/") return loc === "/";
      return loc === href || (v.has(href) && loc.startsWith(href));
    };
  }, [loc]);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/65 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl gold-border bg-card grid place-items-center">
            <span className="font-display text-lg">滿</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-[0.06em] group-hover:text-primary transition-colors">
              滿願
            </div>
            <div className="text-[11px] text-muted-foreground tracking-[0.26em] uppercase">
              warm zen · gentle vow
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "text-sm tracking-[0.22em] uppercase hover:text-primary transition-colors",
                isActive(n.href) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/pay">
            <Button className="h-10 px-5 font-black tracking-[0.24em] uppercase gold-border">
              我想安排護持 <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden h-10 w-10 grid place-items-center rounded-xl gold-border bg-card"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "關閉選單" : "開啟選單"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 grid gap-2">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "py-3 px-3 rounded-xl gold-border bg-card text-sm tracking-[0.22em] uppercase",
                  isActive(n.href) ? "text-primary" : "text-foreground"
                )}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/pay" className="py-3 px-3 rounded-xl gold-border bg-primary text-primary-foreground text-sm font-black tracking-[0.22em] uppercase">
              我想安排護持
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
