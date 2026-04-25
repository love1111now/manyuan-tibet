/**
 * ExitIntent — 離開前攔截
 * 
 * 桌機：偵測滑鼠移出視窗頂部（mouseleave on document）
 * 行動：偵測快速向上滑動（scroll velocity）
 * 
 * 規則：
 * - 每個工作階段只顯示一次
 * - 進入頁面至少 15 秒後才啟動偵測
 * - 在神明頁顯示對應本尊的引導；其他頁顯示通用版本
 */
import { useEffect, useState, useCallback } from "react";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { DEITY_BY_KEY } from "@/data/deities";
import type { DeityKey } from "@/lib/siteData";

const SESSION_KEY = "exit_intent_shown";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);
  const [location] = useLocation();

  const deityMatch = location.match(/^\/deity\/([^/]+)/);
  const deityKey = deityMatch?.[1] as DeityKey | undefined;
  const deity = deityKey ? DEITY_BY_KEY[deityKey] : null;
  const hotPlan = deity?.plans?.find((p) => p.hot) ?? deity?.plans?.[0];

  const show = useCallback(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
    // GA4 追蹤
    window.gtag?.("event", "exit_intent_shown", {
      page: location,
      deity: deityKey ?? "none",
    });
  }, [location, deityKey]);

  useEffect(() => {
    let ready = false;
    const readyTimer = setTimeout(() => { ready = true; }, 15000);

    // 桌機：滑鼠移出頂部
    const onMouseLeave = (e: MouseEvent) => {
      if (!ready || e.clientY > 20) return;
      show();
    };

    // 行動：快速向上滑動
    let lastY = 0;
    let lastT = 0;
    const onScroll = () => {
      if (!ready) return;
      const y = window.scrollY;
      const t = Date.now();
      const velocity = (lastY - y) / Math.max(t - lastT, 1);
      if (velocity > 2 && y > 300) show();
      lastY = y;
      lastT = t;
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(readyTimer);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="離開前確認"
      onClick={(e) => { if (e.target === e.currentTarget) setVisible(false); }}
    >
      <div className="relative w-full max-w-md bg-background border border-primary/30 rounded-2xl shadow-2xl p-8 animate-in zoom-in-95 duration-300">
        {/* 關閉按鈕 */}
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="關閉"
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {deity ? (
          /* 神明頁版本：對應具體本尊 */
          <>
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-3">還沒確定？</div>
            <h2 className="font-display text-2xl text-foreground/90 leading-snug mb-3">
              關於{deity.name}，<br />有什麼疑問可以直接問
            </h2>
            <p className="text-sm text-muted-foreground readable leading-relaxed mb-6">
              我們是志工，不是業務。您不需要現在決定，可以先把問題傳給我們，由志工親自回覆。
            </p>
            <div className="space-y-3">
              <a
                href="https://m.me/61583749010531"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  window.gtag?.("event", "exit_intent_messenger_click", { deity: deityKey });
                  window.fbq?.("track", "Contact", { content_name: deity.name });
                  setVisible(false);
                }}
                className="flex items-center justify-center gap-3 h-14 w-full rounded-xl bg-primary text-primary-foreground font-bold text-base tracking-wider hover:bg-primary/90 transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                傳訊息給志工詢問
              </a>
              {hotPlan && (
                <a
                  href={hotPlan.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    window.gtag?.("event", "exit_intent_checkout_click", { deity: deityKey });
                    window.fbq?.("track", "InitiateCheckout", { value: hotPlan.price, currency: "TWD" });
                    setVisible(false);
                  }}
                  className="flex items-center justify-center gap-2 h-12 w-full rounded-xl border border-primary/30 text-foreground text-sm font-bold hover:bg-primary/5 transition-all"
                >
                  直接護持 NT${hotPlan.price.toLocaleString()} <ArrowRight className="w-4 h-4 text-primary" />
                </a>
              )}
            </div>
          </>
        ) : (
          /* 非神明頁通用版本 */
          <>
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-3">在離開之前</div>
            <h2 className="font-display text-2xl text-foreground/90 leading-snug mb-3">
              不確定從哪裡開始？<br />讓志工幫您找到方向
            </h2>
            <p className="text-sm text-muted-foreground readable leading-relaxed mb-6">
              描述您目前的狀況，志工會根據您的需求推薦最對位的修復方向。完全免費，沒有任何購買壓力。
            </p>
            <a
              href="https://m.me/61583749010531"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                window.gtag?.("event", "exit_intent_messenger_click", { page: location });
                setVisible(false);
              }}
              className="flex items-center justify-center gap-3 h-14 w-full rounded-xl bg-primary text-primary-foreground font-bold text-base tracking-wider hover:bg-primary/90 transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              免費諮詢志工
            </a>
          </>
        )}

        <p className="mt-4 text-center text-[10px] text-muted-foreground/40 tracking-wider">
          不支薪志工・無銷售壓力・因果清晰
        </p>
      </div>
    </div>
  );
}
