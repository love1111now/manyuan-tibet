/*
  Loads Vercel Analytics / Speed Insights only when available.
  - Prevents noisy 404s on non-Vercel deployments or local preview.
  - Keeps compatibility when deployed on Vercel (scripts exist).
*/

import { useEffect } from "react";

type ScriptSpec = { id: string; src: string };

const SCRIPTS: ScriptSpec[] = [
  { id: "vercel-analytics", src: "/_vercel/analytics/script.js" },
  { id: "vercel-speed-insights", src: "/_vercel/speed-insights/script.js" },
];

function alreadyLoaded(id: string) {
  return typeof document !== "undefined" && !!document.getElementById(id);
}

async function scriptExists(src: string) {
  try {
    const r = await fetch(src, { method: "HEAD" });
    return r.ok;
  } catch {
    return false;
  }
}

export default function VercelScriptsLoader() {
  useEffect(() => {
    // Avoid noisy 404s: only attempt loading on Vercel domains.
    // If you deploy on a custom domain via Vercel and want these,
    // add your own condition here.
    const host = window.location.hostname;
    const looksLikeVercel = host.includes("vercel") || host.endsWith(".vercel.app");
    if (!looksLikeVercel) return;

    let cancelled = false;

    (async () => {
      for (const s of SCRIPTS) {
        if (cancelled) return;
        if (alreadyLoaded(s.id)) continue;
        const ok = await scriptExists(s.src);
        if (!ok) continue;

        const el = document.createElement("script");
        el.id = s.id;
        el.src = s.src;
        el.defer = true;
        document.head.appendChild(el);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
