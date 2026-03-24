import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/siteData";

export default function FloatingFb() {
  return (
    <a
      href={SITE.fb}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-[88px] md:bottom-6 z-40"
      aria-label="前往 Facebook 粉絲團"
    >
      <div className="h-12 w-12 rounded-2xl gold-border bg-card grid place-items-center hover:bg-accent/40 transition-colors">
        <MessageCircle className="h-5 w-5 text-primary" />
      </div>
    </a>
  );
}
