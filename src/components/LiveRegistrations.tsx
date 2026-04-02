import { useEffect, useMemo, useState } from "react";
// ⚠️ 修正路徑：因為此檔案在 components 內，要跳出一層去 lib 找資料
import { DEITIES } from "../lib/siteData"; 

/**
 * 工具函式
 */
function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const FAMILY_NAMES = ["林", "陳", "張", "黃", "李", "吳", "王", "蔡", "楊", "劉", "周", "鄭"];
const GIVEN_NAMES = ["怡", "安", "芸", "晴", "昕", "芯", "妍", "庭", "恩", "昊", "承", "柏", "宇", "翔", "皓", "瑄", "甯", "涵"];
const CITIES = ["台北", "新北", "桃園", "新竹", "台中", "彰化", "台南", "高雄", "屏東", "宜蘭"];

function randomMaskedName() {
  const f = FAMILY_NAMES[randInt(0, FAMILY_NAMES.length - 1)];
  const g = GIVEN_NAMES[randInt(0, GIVEN_NAMES.length - 1)];
  return `${f}${g}＊`;
}

function runWhenIdle(fn: () => void) {
  const ric = (window as any).requestIdleCallback;
  if (typeof ric === "function") {
    ric(() => fn(), { timeout: 2000 });
  } else {
    window.setTimeout(fn, 0);
  }
}

export default function LiveRegistrations() {
  const [toast, setToast] = useState<{ id: number; title: string; desc: string } | null>(null);

  const items = useMemo(() => {
    if (!DEITIES) return [];
    return DEITIES.flatMap((d) => d.plans.map((p) => ({ deity: d.name, plan: p.name })));
  }, []);

  useEffect(() => {
    if (items.length === 0) return;
    let timer: number | null = null;
    let cancelled = false;

    const scheduleToast = () => {
      const delayMs = randInt(90_000, 240_000); 
      timer = window.setTimeout(() => {
        if (cancelled) return;
        if (document.visibilityState !== "visible") {
          scheduleToast();
          return;
        }

        runWhenIdle(() => {
          if (cancelled) return;
          const pick = items[randInt(0, items.length - 1)];
          const name = randomMaskedName();
          const city = CITIES[randInt(0, CITIES.length - 1)];
          const remain = randInt(2, 16);
          const days = randInt(1, 5);

          setToast({
            id: Date.now(),
            title: `${name} 已完成護持登記`,
            desc: `${city} · ${pick.deity} · ${pick.plan} · 剩餘 ${remain} 位`
          });

          setTimeout(() => setToast(null), 6000);
          scheduleToast();
        });
      }, delayMs);
    };

    timer = window.setTimeout(scheduleToast, randInt(25_000, 45_000));
    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, [items]);

  if (!toast) return null;

  return (
    <div key={toast.id} className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-[350px] pointer-events-none">
      <div className="bg-slate-900/95 backdrop-blur border border-amber-500/50 p-4 rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-start gap-3">
          <div className="h-2 w-2 mt-1.5 rounded-full bg-amber-500 shrink-0 animate-pulse" />
          <div className="space-y-1">
            <div className="text-sm font-bold text-slate-50">{toast.title}</div>
            <div className="text-xs text-slate-400">{toast.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}