import { useEffect, useMemo } from "react";
import { toast } from "sonner";
import { DEITIES } from "@/lib/siteData";

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

export default function LiveRegistrations() {
  const items = useMemo(() => {
    const flat = DEITIES.flatMap((d) =>
      d.plans.map((p) => ({ deity: d.name, plan: p.name, min: p.price }))
    );
    return flat;
  }, []);

  useEffect(() => {
    let timer: number | null = null;
    let cancelled = false;

    const schedule = () => {
      const delayMs = randInt(90_000, 240_000); // 90–240 秒不定時（降低頻率）
      timer = window.setTimeout(() => {
        if (cancelled) return;

        const pick = items[randInt(0, items.length - 1)];
        const name = randomMaskedName();
        const city = CITIES[randInt(0, CITIES.length - 1)];

        const remain = randInt(2, 16);
        const days = randInt(1, 5);

        toast(`${name} 已完成護持登記`, {
          description: `${city} · ${pick.deity} · ${pick.plan} · 剩餘名額 ${remain}（約 ${days} 天內可能額滿）`,
          duration: randInt(4600, 6400),
        });

        schedule();
      }, delayMs);
    };

    // 首次不要立刻跳，留 25–45 秒的「正常感」
    timer = window.setTimeout(schedule, randInt(25_000, 45_000));

    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, [items]);

  return null;
}
