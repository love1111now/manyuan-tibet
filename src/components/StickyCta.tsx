import { Link } from "wouter";
import { Button } from "@/components/ui/button";

/**
 * StickyCta 組件
 * 專門針對行動端設計的底部懸浮按鈕
 * 整合了 Meta Pixel 追蹤，確保每一個高意願點擊都能被臉書演算法記錄
 */
export default function StickyCta() {
  
  /**
   * 處理點擊追蹤
   * 當用戶在手機端點擊「立即登記」時，發送 InitiateCheckout 事件給 Meta
   */
  const handleTrackClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Mobile_Sticky_CTA',
        content_category: 'Navigation',
      });
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <div className="text-xs tracking-[0.28em] uppercase text-muted-foreground">Book now</div>
          <div className="font-display text-base text-foreground">保留名額・完成登記</div>
        </div>
        <Link href="/pay">
          <Button 
            className="h-11 px-5 font-bold tracking-[0.2em] uppercase gold-border hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={handleTrackClick}
          >
            立即登記
          </Button>
        </Link>
      </div>
    </div>
  );
}