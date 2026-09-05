"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { pressItems, type PressItem } from "@/content/site";
import { PressCard, PressSwipeRow } from "@/components/PressCard";
import nextButtonIcon from "@assets/carbon_next-filled_1777018054288.png";

const VISIBLE = 3;

/**
 * Press carousel. Three cards per page from md up, paging through the full
 * list, the last page wrapping back to the start so the row is always full.
 * On a phone there is no room for three abreast, so the same cards become one
 * horizontal row you swipe rather than a column you scroll past.
 */
export function PressCarousel() {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(pressItems.length / VISIBLE));
  const showNav = pageCount > 1;

  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const next = () => setPage((p) => (p + 1) % pageCount);

  const visible: PressItem[] = pressItems.length
    ? Array.from(
        { length: VISIBLE },
        (_, i) => pressItems[(page * VISIBLE + i) % pressItems.length],
      )
    : [];

  return (
    <>
      <PressSwipeRow items={pressItems} variant="carousel" />

      <div className="relative hidden md:block md:px-14 lg:px-16">
        {showNav && (
          <button
            onClick={prev}
            aria-label="Previous press article"
            className="absolute left-0 lg:left-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center transition-all hover:scale-110"
          >
            <img src={nextButtonIcon.src} alt="" className="w-full h-full -scale-x-100" />
          </button>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full"
          >
            {visible.map((item, idx) => (
              <PressCard key={page + ":" + idx} item={item} variant="carousel" />
            ))}
          </motion.div>
        </AnimatePresence>

        {showNav && (
          <button
            onClick={next}
            aria-label="Next press article"
            className="absolute right-0 lg:right-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center transition-all hover:scale-110"
          >
            <img src={nextButtonIcon.src} alt="" className="w-full h-full" />
          </button>
        )}
      </div>
    </>
  );
}
