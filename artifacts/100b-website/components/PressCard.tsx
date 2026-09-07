"use client";

import { useEffect, useRef, useState } from "react";
import type { PressItem } from "@/content/site";

/** Matches the row's scroll-pl-6, in pixels. */
const SCROLL_PADDING = 24;

/**
 * Most dots the mobile row will show. A dot per article is the honest
 * indicator: it says exactly where you are. Grouping is a compromise, so it
 * is held off as long as the dots genuinely fit. Past ten they tighten, and
 * only past twenty does each dot start covering a group, which keeps the row
 * inside a 390px screen however long the list grows.
 */
const MAX_DOTS = 20;

/** Beyond this many, the dots and their gaps tighten to keep the row short. */
const TIGHTEN_ABOVE = 10;

/**
 * One press placement: the outlet as a gold badge over the image, a UTM
 * headline, the standfirst, and the link out. Shared so the mobile swipe row
 * and the desktop grid cannot drift apart.
 */
export function PressCard({ item }: { item: PressItem }) {
  return (
    <article className="h-full bg-bg-card rounded-2xl overflow-hidden border border-white/5 flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
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
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-display text-gradient-gold uppercase leading-[1.15] text-[15px] sm:text-base lg:text-lg mb-2 line-clamp-2">
          {item.headline}
        </h3>
        <p className="text-[13px] font-light text-text-body leading-relaxed mb-3 line-clamp-2">
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
  );
}

/**
 * The mobile shape for both press sections: one horizontal row you swipe,
 * rather than a column you scroll past. Snapping so a card always settles
 * square, and the row is peeked at the right edge so it reads as scrollable.
 *
 * The dots underneath do the same job as the ones on the paged grid above md:
 * they say where you are in the run and take you straight to a card. Position
 * is read off the row's own scroll rather than tracked separately, so a swipe
 * and a tap can never disagree.
 */
export function PressSwipeRow({ items }: { items: PressItem[] }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  /** Distance from the row's snap edge to a card's leading edge. */
  const offsetOf = (row: HTMLDivElement, index: number) => {
    const card = row.children[index] as HTMLElement | undefined;
    if (!card) return 0;
    return card.getBoundingClientRect().left - row.getBoundingClientRect().left - SCROLL_PADDING;
  };

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const sync = () => {
      let best = 0;
      let bestDistance = Infinity;
      for (let i = 0; i < row.children.length; i++) {
        const distance = Math.abs(offsetOf(row, i));
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      }
      setActive(best);
    };
    sync();
    row.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      row.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [items.length]);

  // One dot per article while they fit; beyond that, one dot per group.
  const perDot = Math.ceil(items.length / MAX_DOTS);
  const dotCount = Math.ceil(items.length / perDot);
  const activeDot = Math.floor(active / perDot);
  const tight = dotCount > TIGHTEN_ABOVE;

  return (
    <div className="md:hidden">
      <div
        ref={rowRef}
        className="-mx-6 px-6 scroll-pl-6 flex gap-4 overflow-x-auto snap-x snap-mandatory
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div key={item.link} className="w-[74%] shrink-0 snap-start">
            <PressCard item={item} />
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className={`flex items-center justify-center mt-6 ${tight ? "gap-2" : "gap-3"}`}>
          {Array.from({ length: dotCount }, (_, dot) => {
            const first = dot * perDot;
            const last = Math.min(first + perDot, items.length);
            return (
              <button
                key={first}
                onClick={() =>
                  rowRef.current?.scrollBy({
                    left: offsetOf(rowRef.current, first),
                    behavior: "smooth",
                  })
                }
                aria-label={
                  perDot === 1
                    ? `Go to press article ${first + 1}`
                    : `Go to press articles ${first + 1} to ${last}`
                }
                aria-current={dot === activeDot}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dot === activeDot
                    ? "w-8 bg-brand-gold"
                    : `bg-white/15 ${tight ? "w-1.5" : "w-2"}`
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
