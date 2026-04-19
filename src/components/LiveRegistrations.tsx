/**
 * LiveRegistrations — 誠信版
 * 以靜態、可查核的社會認同訊息取代原本的隨機假通知。
 * 顯示時機：進入頁面 30 秒後，每次停留僅顯示一次，不循環。
 */
import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

const TRUST_MESSAGES = [
  { title: "志工團隊承諾", desc: "護持金 100% 專款專用於西藏壇城法事，不抽取任何行政費用。" },
  { title: "綠界 SSL 金流保護", desc: "所有付款均透過綠界 256-bit SSL 加密傳輸，資料安全有保障。" },
  { title: "造冊機制說明", desc: "完成登記後，志工於 24 小時內完成造冊並回傳確認，流程透明可追蹤。" },
];

export default function LiveRegistrations() {
  const [msg, setMsg] = useState<typeof TRUST_MESSAGES[0] | null>(null);

  useEffect(() => {
    // 進入頁面 30 秒後顯示一次，不重複
    const timer = window.setTimeout(() => {
      if (document.visibilityState !== "visible") return;
      const pick = TRUST_MESSAGES[Math.floor(Math.random() * TRUST_MESSAGES.length)];
      setMsg(pick);
      // 顯示 7 秒後自動收起
      window.setTimeout(() => setMsg(null), 7000);
    }, 30_000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!msg) return null;

  return (
    <div
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-[360px] pointer-events-none"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="bg-slate-900/95 backdrop-blur border border-amber-500/40 p-4 rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-start gap-3">
          <ShieldCheck className="h-4 w-4 mt-0.5 text-amber-400 shrink-0" />
          <div className="space-y-0.5">
            <div className="text-sm font-bold text-slate-50">{msg.title}</div>
            <div className="text-xs text-slate-400 leading-relaxed">{msg.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
