/*
Design philosophy: Neo-thangka noir
- Indigo night base, gold foil accents, paper grain textures
- Asymmetric composition with dramatic hero image
- Typography: ZCOOL XiaoWei (display) + Noto Serif TC (body)

Component intent:
- High-retention interactive: 5-question random quiz
- Clear progress, satisfying motion, premium feel
*/

import { useMemo, useState } from "react";
import { ArrowRight, RefreshCcw, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { DEITY_BY_KEY, type DeityKey } from "@/lib/siteData";

type QuizOption = {
  id: string;
  label: string;
  weights: Partial<Record<DeityKey, number>>;
};

type QuizQuestion = {
  id: string;
  title: string;
  subtitle?: string;
  options: QuizOption[];
};

const QUESTION_BANK: QuizQuestion[] = [
  {
    id: "q1",
    title: "你最近最常冒出的擔心是？",
    subtitle: "選最貼近你現在的感受",
    options: [
      { id: "a", label: "賺得到但留不住，總有莫名開銷", weights: { yellow: 3, mahashri: 1 } },
      { id: "b", label: "家裡不太安穩，容易內耗或意外破財", weights: { mahashri: 3 } },
      { id: "c", label: "我常做錯決定，事後一直後悔", weights: { ganapati: 3 } },
      { id: "d", label: "人脈卡住、貴人少，做事像孤軍", weights: { kurukulla: 3 } },
    ],
  },
  {
    id: "q2",
    title: "碰到錢的事，你最容易進入哪種狀態？",
    options: [
      { id: "a", label: "急：想快點翻身，越急越亂", weights: { yellow: 2, ganapati: 1 } },
      { id: "b", label: "怕：不敢花也不敢投，心裡一直緊", weights: { yellow: 2, mahashri: 1 } },
      { id: "c", label: "迷：資訊太多，判斷力像被遮住", weights: { ganapati: 3 } },
      { id: "d", label: "悶：都得靠自己，沒人能一起扛", weights: { kurukulla: 2, mahashri: 1 } },
    ],
  },
  {
    id: "q3",
    title: "你覺得『漏財點』最像哪一種？",
    options: [
      { id: "a", label: "人情壓力、被情緒勒索，很難拒絕", weights: { yellow: 2, kurukulla: 1 } },
      { id: "b", label: "家庭／健康／意外支出，常常突然來", weights: { mahashri: 3 } },
      { id: "c", label: "投資／合作踩雷，總是看錯人、看錯局", weights: { ganapati: 3 } },
      { id: "d", label: "客源不穩、貴人不出手，資源接不上", weights: { kurukulla: 3 } },
    ],
  },
  {
    id: "q4",
    title: "你最想先『立刻改善』的，是哪一件小事？",
    options: [
      { id: "a", label: "睡覺別再一直算錢、別再焦慮", weights: { yellow: 2, ganapati: 1 } },
      { id: "b", label: "家裡少吵、事情少出包，日子穩一點", weights: { mahashri: 3 } },
      { id: "c", label: "談合作更清楚，做決定更果斷", weights: { ganapati: 3 } },
      { id: "d", label: "人緣變順，遇到願意拉我一把的人", weights: { kurukulla: 3 } },
    ],
  },
  {
    id: "q5",
    title: "如果只能選一個『能量方向』先做校正，你會選？",
    options: [
      { id: "a", label: "先把漏口補起來：錢要先留住", weights: { yellow: 3 } },
      { id: "b", label: "先把家運穩住：安住才有續航", weights: { mahashri: 3 } },
      { id: "c", label: "先把腦袋變清楚：少走冤枉路", weights: { ganapati: 3 } },
      { id: "d", label: "先把人脈打通：資源與貴人要能接上", weights: { kurukulla: 3 } },
    ],
  },
  // 備用題庫（避免每次都一樣，隨機抽 5 題）
  {
    id: "q6",
    title: "你現在最像卡在哪個關卡？",
    options: [
      { id: "a", label: "錢進來一下就流走，像破洞水桶", weights: { yellow: 3 } },
      { id: "b", label: "家庭／生活常出狀況，心很累", weights: { mahashri: 3 } },
      { id: "c", label: "明明很努力，方向卻一直不對", weights: { ganapati: 3 } },
      { id: "d", label: "好機會常擦身而過，關鍵人接不上", weights: { kurukulla: 3 } },
    ],
  },
  {
    id: "q7",
    title: "你做決定時，最常被什麼拉走？",
    options: [
      { id: "a", label: "怕沒錢：所以容易衝動或亂買", weights: { yellow: 2 } },
      { id: "b", label: "怕家裡不穩：所以不敢往外衝", weights: { mahashri: 2 } },
      { id: "c", label: "怕看錯：所以一直拖、一直改", weights: { ganapati: 2 } },
      { id: "d", label: "怕沒人挺：所以只好自己硬扛", weights: { kurukulla: 2 } },
    ],
  },
  {
    id: "q8",
    title: "如果用一句話形容你的『財庫狀態』，你會選？",
    options: [
      { id: "a", label: "有進無存，像漏水", weights: { yellow: 3 } },
      { id: "b", label: "地基不穩，常被意外掏空", weights: { mahashri: 3 } },
      { id: "c", label: "方向不明，像在霧裡走", weights: { ganapati: 3 } },
      { id: "d", label: "資源接不上，像沒訊號", weights: { kurukulla: 3 } },
    ],
  },
  {
    id: "q9",
    title: "你最希望『哪一種助力』主動出現？",
    options: [
      { id: "a", label: "錢的流動變順：款項、業績、收入", weights: { yellow: 3 } },
      { id: "b", label: "家裡變安：健康、居住、情緒", weights: { mahashri: 3 } },
      { id: "c", label: "判斷變準：資訊收束、止損轉機", weights: { ganapati: 3 } },
      { id: "d", label: "貴人變多：合作、介紹、提攜", weights: { kurukulla: 3 } },
    ],
  },
  {
    id: "q10",
    title: "你覺得你『最吃虧』的地方是？",
    options: [
      { id: "a", label: "太容易心軟，錢跟力氣都被拖走", weights: { yellow: 2, kurukulla: 1 } },
      { id: "b", label: "太容易把家裡扛在身上，自己被耗乾", weights: { mahashri: 2 } },
      { id: "c", label: "太容易被漂亮話帶走，事後才醒", weights: { ganapati: 2 } },
      { id: "d", label: "太容易一個人撐，撐到沒人知道你在撐", weights: { kurukulla: 2 } },
    ],
  },
];

function sampleFive(bank: QuizQuestion[]) {
  const pool = [...bank];
  // Fisher–Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 5);
}

function emptyScore(): Record<DeityKey, number> {
  return {
    yellow: 0,
    mahashri: 0,
    ganapati: 0,
    kurukulla: 0,
    padmasambhava: 0,
    "green-tara": 0,
  };
}

function pickWinner(score: Record<DeityKey, number>): DeityKey {
  const entries = Object.entries(score) as Array<[DeityKey, number]>;
  entries.sort((a, b) => b[1] - a[1]);
  // tie-breaker: deterministic order + a tiny jitter from Math.random
  const top = entries[0][1];
  const tied = entries.filter(([, v]) => v === top).map(([k]) => k);
  return tied[Math.floor(Math.random() * tied.length)];
}

const RESULT_COPY: Record<DeityKey, { tag: string; title: string; desc: string }> = {
  yellow: {
    tag: "止漏／補庫",
    title: "你的財庫正在『漏』：先把漏口補起來",
    desc: "你最需要的不是更拼命，而是先把『守不住、一直被掏空』的模式停掉。從止漏開始，錢才會留下來，心才會定。",
  },
  mahashri: {
    tag: "安家／續航",
    title: "你的底盤要先『安住』：家運穩，財才續",
    desc: "你現在像在晃動的地基上衝刺：一有意外就歸零。先把家宅與資糧的秩序立起來，日子站穩了，運勢自然往上。",
  },
  ganapati: {
    tag: "清明／止損",
    title: "你需要『清明的判斷』：少走冤枉路就是賺",
    desc: "你不是不努力，是方向常被雜訊帶走。當你看清、敢止損，新的轉機會立刻浮上來。",
  },
  kurukulla: {
    tag: "貴人／感召",
    title: "你要先『打通人脈磁場』：資源才接得上",
    desc: "你現在靠自己撐太久了。當你的狀態回到正位，貴人、合作、介紹會更容易靠近，事情自然變好談。",
  },
  padmasambhava: {
    tag: "靠山／護持",
    title: "你需要『穩固的靠山』：先把恐懼與亂流鎮住",
    desc: "當外在環境與內在焦慮同時拉扯，你最需要的是一股穩定的護持力，讓心不再飄，事情才有機會翻盤。",
  },
  "green-tara": {
    tag: "除障／轉運",
    title: "你需要『迅速清障』：把阻力先拿掉",
    desc: "當阻力一直在拖，你再努力也會被消耗。先除障、再前進，節奏才會回到正軌。",
  },
};

export default function TreasuryQuiz() {
  const [seed, setSeed] = useState(() => Date.now());
  const questions = useMemo(() => {
    // seed is only used to re-trigger sampling
    void seed;
    return sampleFive(QUESTION_BANK);
  }, [seed]);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState<Record<DeityKey, number>>(emptyScore());

  const current = questions[step];
  const done = step >= questions.length;

  const progress = Math.round((Math.min(step, questions.length) / questions.length) * 100);

  function restart() {
    setSeed(Date.now());
    setStep(0);
    setAnswers({});
    setScore(emptyScore());
  }

  function onPick(optionId: string) {
    if (!current) return;
    setAnswers((prev) => ({ ...prev, [current.id]: optionId }));
  }

  function next() {
    if (!current) return;
    const pickedId = answers[current.id];
    if (!pickedId) return;

    const picked = current.options.find((o) => o.id === pickedId);
    if (picked) {
      setScore((prev) => {
        const copy = { ...prev };
        (Object.keys(copy) as DeityKey[]).forEach((k) => {
          copy[k] += picked.weights[k] ?? 0;
        });
        return copy;
      });
    }

    setStep((s) => s + 1);
  }

  const winner = done ? pickWinner(score) : null;
  const winnerDeity = winner ? DEITY_BY_KEY[winner] : null;

  return (
    <section className="relative" id="quiz">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> 財庫能量檢測
            </div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">30 秒找出你該去的本尊頁</h2>
            <p className="mt-3 readable text-muted-foreground max-w-prose">
              你只要照直覺選。
              <span className="text-foreground">我們用五題把你的『卡點頻率』抓出來</span>，
              直接帶你走到最對位的路徑。
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="gold-border bg-accent/35 text-accent-foreground">隨機抽題</Badge>
            <Button variant="outline" className="gold-border" onClick={restart}>
              重新抽題 <RefreshCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="mt-6 p-7 gold-border bg-card/80 backdrop-blur paper-grain">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              進度 {Math.min(step + 1, questions.length)}/{questions.length}
            </div>
            <div className="w-full sm:w-64">
              <Progress value={done ? 100 : progress} />
            </div>
          </div>

          {!done && current ? (
            <div className="mt-6">
              <div className="font-display text-2xl md:text-3xl">{current.title}</div>
              {current.subtitle ? (
                <div className="mt-2 readable text-muted-foreground">{current.subtitle}</div>
              ) : null}

              <RadioGroup
                className="mt-6 grid gap-3"
                value={answers[current.id]}
                onValueChange={(v) => onPick(v)}
              >
                {current.options.map((opt) => {
                  const id = `${current.id}-${opt.id}`;
                  return (
                    <div
                      key={opt.id}
                      className="flex items-start gap-3 rounded-xl border bg-background/40 gold-border px-4 py-4 hover:bg-accent/20 transition-colors"
                    >
                      <RadioGroupItem value={opt.id} id={id} className="mt-0.5" />
                      <Label htmlFor={id} className="readable leading-relaxed cursor-pointer">
                        {opt.label}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button
                  className="h-12 px-6 font-black tracking-[0.22em] uppercase gold-border"
                  onClick={next}
                  disabled={!answers[current.id]}
                >
                  下一題 <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="/pay" className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-background/40 gold-border readable">
                  我已經很確定，直接去預定
                </Link>
              </div>
            </div>
          ) : winnerDeity && winner ? (
            <div className="mt-6">
              <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">你的結果</div>
              <div className="mt-2 font-display text-3xl md:text-4xl text-primary">{RESULT_COPY[winner].title}</div>
              <p className="mt-4 readable text-muted-foreground max-w-prose">{RESULT_COPY[winner].desc}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-[1fr_.9fr] items-start">
                <Card className="p-6 gold-border bg-background/40">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-2xl gold-border bg-card/60 overflow-hidden shrink-0">
                      <img src={winnerDeity.heroImage} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="font-display text-2xl">{winnerDeity.name}</div>
                        <Badge className="gold-border bg-accent/35 text-accent-foreground">{RESULT_COPY[winner].tag}</Badge>
                      </div>
                      <div className="mt-2 readable text-muted-foreground">「{winnerDeity.promise}」</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 gold-border bg-background/40">
                  <div className="font-semibold">接下來怎麼做？</div>
                  <div className="mt-2 readable text-muted-foreground">
                    去你的本尊頁，先看「經典邏輯」再選擇「價位層級」。
                    你會更清楚：
                    <span className="text-foreground">現在該先止什麼、再增什麼</span>。
                  </div>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Link href={winnerDeity.route} className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-black tracking-[0.22em] uppercase gold-border">
                      帶我去本尊頁 <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Button variant="outline" className="h-12 px-6 gold-border" onClick={restart}>
                      再測一次 <RefreshCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          ) : null}
        </Card>
      </div>
    </section>
  );
}
