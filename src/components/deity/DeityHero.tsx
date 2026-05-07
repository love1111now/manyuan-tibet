/*
  DeityHero.tsx — v3（手機轉換優化版）
  ─────────────────────────────────────

  ✅ 核心優化：
  1. 移除手機版 AspectRatio（解決主圖下方巨大空白）
  2. 手機圖片改自然高度 h-auto
  3. gap / padding 全部改手機優先
  4. Card 去除商品感（透明化）
  5. CTA 更集中
  6. promise 折疊優化
  7. 手機視覺密度提升
  8. 降低「電商感」，提高「法門感」

*/

import React, { useState } from "react";
import { Link } from "wouter";

import {
  ArrowLeft,
  ArrowRight,
  Layers,
  ClipboardList,
  ShieldCheck,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { type Deity } from "@/lib/siteData";

export default function DeityHero({ d }: { d: Deity }) {
  const [promiseExpanded, setPromiseExpanded] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ─────────────────────────────
  // promise 摺疊
  // ─────────────────────────────

  const promiseLines = d.promise.split("\n");

  const previewLines = promiseLines.slice(0, 6);

  const hasMore = promiseLines.length > 6;

  const displayedPromise = promiseExpanded
    ? d.promise
    : previewLines.join("\n") + (hasMore ? "\n…" : "");

  return (
    <section
      className="
        relative
        mx-auto
        max-w-6xl
        px-4
        md:px-8
        pt-3
        md:pt-12
        pb-8
        md:pb-12
      "
    >

      {/* ───────────────────────────── */}
      {/* 頂部導流條 */}
      {/* ───────────────────────────── */}

      <div
        className="
          mb-3
          flex
          items-center
          justify-between
          gap-2
          rounded-xl
          border
          border-primary/15
          bg-primary/5
          px-3
          py-2.5
        "
      >
        <div className="text-[11px] md:text-sm text-foreground/75 leading-relaxed">
          <strong className="text-foreground">
            {d.name}
          </strong>
          ｜{d.primaryIntent}
        </div>

        <button
          onClick={() => scrollToId("plans")}
          className="
            whitespace-nowrap
            text-[11px]
            font-bold
            tracking-widest
            text-primary
            hover:underline
          "
        >
          查看方案 →
        </button>
      </div>

      {/* 返回 */}
      <Link
        href="/"
        className="
          inline-flex
          items-center
          gap-2
          text-[11px]
          font-bold
          tracking-widest
          text-muted-foreground
          transition-colors
          hover:text-primary
        "
      >
        <ArrowLeft className="h-4 w-4" />
        返回首頁
      </Link>

      {/* ───────────────────────────── */}
      {/* 主體 */}
      {/* ───────────────────────────── */}

      <div
        className="
          mt-4
          flex
          flex-col
          gap-4
          md:grid
          md:grid-cols-[1.05fr_.95fr]
          md:gap-10
        "
      >

        {/* ========================================================= */}
        {/* 手機圖片優先 */}
        {/* ========================================================= */}

        <div className="order-1 md:order-2">

          <Dialog>

            <DialogTrigger asChild>

              <button
                className="
                  relative
                  block
                  w-full
                  overflow-hidden
                  rounded-3xl
                "
              >

                {/* ───────────────────────────── */}
                {/* 手機版（重點修復區） */}
                {/* 不使用 AspectRatio */}
                {/* ───────────────────────────── */}

                <div className="relative md:hidden">

                  <img
                    src={d.heroImage}
                    alt={d.name}
                    className="
                      block
                      w-full
                      h-auto
                      object-contain
                    "
                  />

                  {/* 漸層 */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* 手機標題覆蓋 */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-full
                      p-4
                    "
                  >
                    <p
                      className="
                        text-sm
                        font-bold
                        tracking-wide
                        text-white
                      "
                    >
                      {d.name}
                    </p>
                  </div>

                </div>

                {/* ───────────────────────────── */}
                {/* 桌面版 */}
                {/* ───────────────────────────── */}

                <div
                  className="
                    relative
                    hidden
                    md:block
                    overflow-hidden
                    rounded-3xl
                  "
                >

                  <img
                    src={d.heroImage}
                    alt={d.name}
                    className="
                      block
                      w-full
                      h-auto
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-[1.02]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      to-transparent
                    "
                  />

                </div>

              </button>

            </DialogTrigger>

            {/* Lightbox */}

            <DialogContent
              className="
                border-none
                bg-transparent
                shadow-none
                max-w-3xl
              "
            >

              <DialogHeader className="sr-only">
                <DialogTitle>{d.name}</DialogTitle>
              </DialogHeader>

              <img
                src={d.heroImage}
                alt={d.name}
                className="
                  w-full
                  h-auto
                  rounded-2xl
                "
              />

            </DialogContent>

          </Dialog>

          {/* ───────────────────────────── */}
          {/* 手機 CTA */}
          {/* ───────────────────────────── */}

          <div className="mt-4 md:hidden">

            <Button
              onClick={() => scrollToId("plans")}
              size="lg"
              className="
                h-14
                w-full
                rounded-2xl
                text-base
                font-bold
                tracking-wider
                shadow-2xl
                transition-transform
                active:scale-[0.985]
              "
              style={{
                backgroundColor: d.themeColor.accent,
                color: "#1a1209",
              }}
            >
              查看方案與費用

              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p
              className="
                mt-2
                text-center
                text-[11px]
                leading-relaxed
                text-muted-foreground/60
              "
            >
              ✔ NT$490 起・當天造冊・公開修法
            </p>

          </div>

        </div>

        {/* ========================================================= */}
        {/* 文字區 */}
        {/* ========================================================= */}

        <div
          className="
            order-2
            md:order-1
            flex
            flex-col
            justify-center
          "
        >

          {/* 痛點引言 */}

          <p
            className="
              border-l-2
              border-primary
              pl-4
              text-sm
              italic
              leading-relaxed
              text-muted-foreground
              md:text-base
            "
          >
            {d.painPoints?.[0]}
          </p>

          {/* 主標 */}

          <h1
            className="
              mt-4
              text-[32px]
              font-bold
              leading-[1.15]
              tracking-tight
              break-keep
              md:text-5xl
            "
          >
            {d.name}
          </h1>

          {/* 副標 */}

          <p
            className="
              mt-3
              text-base
              leading-relaxed
              text-muted-foreground
              md:text-lg
            "
          >
            {d.subtitle}
          </p>

          {/* heroKicker */}

          <p
            className="
              mt-5
              text-[22px]
              font-semibold
              leading-snug
              md:text-[30px]
            "
            style={{
              color: d.themeColor.accent,
            }}
          >
            {d.heroKicker}
          </p>

          {/* promise */}

          <div className="mt-5">

            <p
              className="
                whitespace-pre-line
                text-[14px]
                leading-[1.9]
                text-muted-foreground/85
                md:text-base
              "
            >
              {displayedPromise}
            </p>

            {hasMore && (

              <button
                onClick={() =>
                  setPromiseExpanded(!promiseExpanded)
                }
                className="
                  mt-3
                  inline-flex
                  items-center
                  gap-1
                  text-xs
                  text-primary
                  hover:underline
                "
              >

                {promiseExpanded ? (
                  <>
                    <ChevronUp className="h-3 w-3" />
                    收起內容
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-3 w-3" />
                    展開完整說明
                  </>
                )}

              </button>

            )}

          </div>

          {/* Desktop CTA */}

          <div className="mt-8 hidden md:flex flex-col gap-3">

            <Button
              onClick={() => scrollToId("plans")}
              size="lg"
              className="
                h-14
                w-fit
                px-10
                text-lg
                font-bold
                tracking-wider
                shadow-2xl
                transition-transform
                hover:scale-[1.02]
              "
              style={{
                backgroundColor: d.themeColor.accent,
                color: "#1a1209",
              }}
            >
              查看方案與費用

              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div
              className="
                flex
                flex-wrap
                gap-x-4
                gap-y-1
                text-xs
                text-muted-foreground/70
              "
            >
              <span>✔ 真實案例回饋</span>
              <span>✔ 如法修持</span>
              <span>✔ 非投機致富</span>
            </div>

          </div>

          {/* 快捷導航 */}

          <div
            className="
              mt-6
              grid
              grid-cols-2
              gap-2
              sm:gap-3
            "
          >

            <Button
              variant="outline"
              onClick={() => scrollToId("diagnosis")}
              className="h-11 text-xs sm:text-sm"
            >
              <Layers className="mr-1.5 h-4 w-4" />
              問題與運作
            </Button>

            <Button
              variant="outline"
              onClick={() => scrollToId("evidence")}
              className="h-11 text-xs sm:text-sm"
            >
              <ClipboardList className="mr-1.5 h-4 w-4" />
              儀軌與實證
            </Button>

            <Button
              variant="outline"
              onClick={() => scrollToId("testimonials")}
              className="h-11 text-xs sm:text-sm"
            >
              <Users className="mr-1.5 h-4 w-4" />
              使用者心得
            </Button>

            <Button
              variant="outline"
              onClick={() => scrollToId("plans")}
              className="
                h-11
                border-primary/50
                text-xs
                text-primary
                hover:bg-primary/10
                sm:text-sm
              "
            >
              <ShieldCheck className="mr-1.5 h-4 w-4" />
              方案費用
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}