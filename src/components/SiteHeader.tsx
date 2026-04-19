import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/siteData";

const nav = [
  { href: "/", label: "首頁" },
  { href: "/pay", label: "法事登記" },
  { href: "/proof", label: "回饋文" },
  { href: "/sutra", label: "經典依據" },
] as const;

export default function SiteHeader() {
  const [loc] = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-wide">{SITE.name}</span>
          <span className="hidden sm:inline text-xs text-muted-foreground tracking-[0.28em] uppercase">
            Ritual registration
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "px-3 py-2 text-sm rounded-md hover:bg-accent/40 transition-colors",
                loc === n.href ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.fb}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Facebook
          </a>
          <Link href="/pay">
            <Button className="h-10 px-4 font-bold tracking-[0.2em] uppercase gold-border">
              立即登記
            </Button>
          </Link>
        </div>
      </div>

      <div className="md:hidden border-t">
        <div className="mx-auto max-w-6xl px-2 py-2 grid grid-cols-4 gap-1">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "py-2 text-center text-xs rounded-md font-medium transition-colors",
                n.href === "/pay"
                  ? loc === n.href
                    ? "bg-primary text-primary-foreground font-bold"
                    : "bg-primary/15 text-primary font-bold hover:bg-primary/25"
                  : loc === n.href
                  ? "bg-accent/40 text-foreground"
                  : "text-muted-foreground hover:bg-accent/30"
              )}
            >
              {n.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
