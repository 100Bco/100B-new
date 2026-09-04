"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { pressItems, type PressItem } from "@/content/site";
import nextButtonIcon from "@assets/carbon_next-filled_1777018054288.png";

const VISIBLE = 3;

/**
 * Press carousel. Three cards per page, paging through the full list.
 * The last page wraps back to the start so the row is always full.
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
      <div className="relative">
        {showNav && (
          <button
            onClick={prev}
            aria-label="Previous press article"
            className="hidden md:flex absolute -left-4 lg:-left-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 items-center justify-center transition-all hover:scale-105"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full"
          >
            {visible.map((item, idx) => (
              <article
                key={page + ":" + idx}
                className="bg-bg-card rounded-2xl overflow-hidden border border-white/5 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.headline}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #2A2520 0%, #1A1714 60%, #0D0B09 100%)",
                      }}
                      aria-hidden
                    />
                  )}
                  <span className="absolute bottom-3 left-3 bg-brand-gold/90 text-bg-dark text-[10px] font-semibold px-2.5 py-1 rounded">
                    {item.outlet}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-gradient-gold uppercase leading-[1.15] text-base lg:text-lg mb-2 line-clamp-2">
                    {item.headline}
                  </h3>
                  <p className="text-[13px] text-text-muted leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start text-sm text-text-heading underline underline-offset-4 decoration-white/30 hover:decoration-brand-gold hover:text-brand-gold transition-colors"
                  >
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {showNav && (
          <button
            onClick={next}
            aria-label="Next press article"
            className="hidden md:flex absolute -right-4 lg:-right-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 items-center justify-center transition-all hover:scale-105"
          >
            <img src={nextButtonIcon.src} alt="" className="w-full h-full" />
          </button>
        )}
      </div>

      {/* Mobile prev/next */}
      {showNav && (
        <div className="md:hidden flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            aria-label="Previous press article"
            className="w-11 h-11 flex items-center justify-center transition-all hover:scale-105"
          >
            <img src={nextButtonIcon.src} alt="" className="w-full h-full -scale-x-100" />
          </button>
          <button
            onClick={next}
            aria-label="Next press article"
            className="w-11 h-11 flex items-center justify-center transition-all hover:scale-105"
          >
            <img src={nextButtonIcon.src} alt="" className="w-full h-full" />
          </button>
        </div>
      )}
    </>
  );
}
