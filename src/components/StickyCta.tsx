import { useEffect, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 當使用者往下滑動超過 300px 時顯示，避免擋住最頂部的 Hero 視覺
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToQuiz = () => {
    const quizSection = document.getElementById("quiz");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // 如果不在首頁，則導回首頁並帶上 hash
      window.location.href = "/#quiz";
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden pb-safe animate-in slide-in-from-bottom-10 duration-500">
      {/* 漸層背景遮罩，讓按鈕浮出感更強 */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent -z-10" />
      
      <div className="relative max-w-md mx-auto">
        {/* L6 稀缺感微小提示 */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-destructive text-destructive-foreground text-[9px] font-bold tracking-[0.2em] px-3 py-0.5 rounded-full shadow-lg z-20 whitespace-nowrap animate-pulse border border-destructive-foreground/20">
          今日造冊名額釋出中
        </div>
        
        <Button 
          onClick={scrollToQuiz}
          className="w-full h-14 rounded-full gold-border bg-primary/95 hover:bg-primary text-primary-foreground font-bold tracking-[0.15em] text-base shadow-[0_0_20px_rgba(var(--primary),0.3)] backdrop-blur-md relative overflow-hidden group"
        >
          {/* 按鈕內部的光澤掃過特效 */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-active:translate-x-full transition-transform duration-700 ease-out" />
          
          <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
          開始 30 秒能量診斷
          <ArrowRight className="w-4 h-4 ml-2 opacity-80" />
        </Button>
      </div>
    </div>
  );
}