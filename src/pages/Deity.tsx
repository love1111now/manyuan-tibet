import React, { useEffect } from "react";
import { useLocation, Redirect } from "wouter";
import { Helmet } from "react-helmet-async";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

import { DEITY_BY_KEY } from "@/data/deities"; 
import type { DeityKey } from "@/lib/siteData";

import ogDeityImg from "@/assets/visuals/seo/image_w5504_h3072_page-deity-1.webp";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import FloatingFb from "@/components/FloatingFb";

import DeityHero from "../components/deity/DeityHero";
import DeityDiagnosis from "../components/deity/DeityDiagnosis";
import DeityRitualAndEvidence from "../components/deity/DeityRitualAndEvidence";
import DeityPlanSelection from "../components/deity/DeityPlanSelection";
import DeityFaqAndCrossSell from "../components/deity/DeityFaqAndCrossSell";

import type { Deity } from "@/lib/siteData";

// ── 顧客見證區塊（內嵌，不需要獨立檔案）──────────────────────────
function DeityTestimonials({ d }: { d: Deity }) {
  if (!d.testimonials || d.testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="mb-8 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-2">
          真實回饋
        </p>
        <h2 className="text-2xl md:text-3xl font-bold">
          他們是怎麼改變的
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          不是廣告詞，是他們自己說的話
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {d.testimonials.map((t, i) => (
          <Card
            key={i}
            className="p-5 flex flex-col gap-3 bg-white/[0.04] border border-white/10 hover:border-primary/30 transition-colors"
          >
            <Quote
              className="h-5 w-5 shrink-0"
              style={{ color: d.themeColor.accent, opacity: 0.6 }}
            />
            <p className="text-sm font-semibold text-foreground leading-snug">
              {t.title}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {t.body}
            </p>
            <p
              className="text-xs font-medium mt-1"
              style={{ color: d.themeColor.accent, opacity: 0.75 }}
            >
              — {t.by}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          每個人的情況不同，但卡住的感覺是一樣的。
        </p>
        <button
          onClick={() => {
            const el = document.getElementById("plans");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
          style={{ color: d.themeColor.accent }}
        >
          看看適合你的方案 →
        </button>
      </div>
    </section>
  );
}

// ── 主頁面組件 ────────────────────────────────────────────────────
interface DeityPageProps {
  deityKey: DeityKey;
}

const DeityPage: React.FC<DeityPageProps> = ({ deityKey }) => {
  const [location] = useLocation();

  const d = deityKey ? DEITY_BY_KEY[deityKey] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  if (!d) {
    return <Redirect to="/" replace />;
  }

  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = setTimeout(() => {
      window.fbq?.("track", "ViewContent", {
        content_ids: [d.key],
        content_name: d.name,
        content_type: "product",
        value: d.plans?.find((p) => p.hot)?.price ?? d.plans?.[0]?.price ?? 0,
        currency: "TWD",
      });
      window.gtag?.("event", "view_item", {
        currency: "TWD",
        value: d.plans?.find((p) => p.hot)?.price ?? 0,
        items: [{ item_id: d.key, item_name: d.name, item_category: d.primaryIntent }],
      });
    }, 800);
    return () => clearTimeout(timer);
  }, [d.key]);

  return (
    <div
      className="min-h-screen font-sans antialiased text-white selection:bg-white/20 transition-colors duration-700 ease-in-out"
      style={
        {
          backgroundColor: d.themeColor.bg,
          "--deity-accent": d.themeColor.accent,
        } as React.CSSProperties
      }
    >
      <Helmet>
        <title>{d.name}｜{d.primaryIntent}｜滿願藏庫</title>
        <meta name="description" content={`${d.heroKicker}。${d.promise.slice(0, 80)}…`} />
        <meta property="og:title" content={`${d.name}｜${d.primaryIntent}｜滿願藏庫`} />
        <meta property="og:description" content={d.heroKicker} />
        <meta property="og:image" content={ogDeityImg} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogDeityImg} />
      </Helmet>

      <SiteHeader />

      <main className="relative pb-24 overflow-x-hidden">
        <DeityHero d={d} />

        <div className="relative z-10 -mt-12 space-y-20 md:space-y-32">

          <section id="diagnosis" className="scroll-mt-32">
            <DeityDiagnosis d={d} />
          </section>

          <section id="evidence" className="scroll-mt-32">
            <DeityRitualAndEvidence d={d} />
          </section>

          {/* ✅ 見證在方案前，建立信任後再請求購買 */}
          <section id="testimonials" className="scroll-mt-32">
            <DeityTestimonials d={d} />
          </section>

          <section id="plans" className="scroll-mt-32">
            <DeityPlanSelection d={d} />
          </section>

          <section id="cross-sell" className="pb-20">
            <DeityFaqAndCrossSell d={d} />
          </section>

        </div>

        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-50 pointer-events-none" />
      </main>

      <SiteFooter />
      <StickyCta />
      <FloatingFb />
    </div>
  );
};

export default DeityPage;