"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Testimonial } from "@/content/site";
import nextButtonIcon from "@assets/carbon_next-filled_1777018054288.png";

type Group = { label: string; items: Testimonial[] };
type Slide = Testimonial & { group: string };

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Client quote carousel, as on the previous site. One voice at a time:
 * headline, quote and signature on the left, portrait in the silver frame
 * on the right, silver arrows flanking the slide and dots underneath.
 * Advances on its own every 12 seconds.
 */
export function TestimonialCarousel({
  groups,
  interval = 12000,
}: {
  groups: Group[];
  interval?: number;
}) {
  const slides: Slide[] = groups.flatMap((g) =>
    g.items.map((t) => ({ ...t, group: g.label })),
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      interval,
    );
    return () => clearInterval(timer);
  }, [interval, slides.length]);

  if (!slides.length) return null;
  const slide = slides[current];

  const goPrev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="relative flex-1 min-h-0 flex items-center">
        {/* Silver arrows, one each side of the slide */}
        <button
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="hidden md:flex absolute -left-4 lg:-left-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 items-center justify-center transition-all hover:scale-105"
        >
          <img src={nextButtonIcon.src} alt="" className="w-full h-full -scale-x-100" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,420px)] gap-8 lg:gap-14 items-center"
          >
            {/* Left — headline, quote, signature */}
            <div className="relative flex flex-col justify-center">
              <div className="absolute -top-6 -left-4 text-[140px] leading-none font-serif select-none pointer-events-none text-white/5">
                “
              </div>

              <h3 className="font-display uppercase tracking-wide text-gradient-gold mb-5 lg:mb-6 relative z-10 leading-[1.05] text-[22px] md:text-[28px] lg:text-[34px]">
                “{slide.headline ?? slide.company}”
              </h3>

              <p className="text-lg md:text-xl lg:text-[22px] font-normal font-serif italic leading-[1.55] text-text-body mb-6 lg:mb-8 relative z-10">
                {slide.quote}
              </p>

              <div className="w-10 h-px bg-brand-gold/50 mb-4" />

              <div className="flex flex-col gap-1">
                <span className="font-serif italic text-lg md:text-xl text-text-heading">
                  {slide.name}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-brand-gold font-semibold mt-1">
                  {slide.title ? `${slide.title} · ` : ""}
                  <span className="font-bold">{slide.company}</span>
                </span>
                {slide.credential && (
                  <span className="text-xs text-text-body italic mt-1">
                    {slide.credential}
                  </span>
                )}
              </div>
            </div>

            {/* Right — portrait in the silver frame */}
            <div
              className="w-full aspect-[4/5] max-h-[min(58vh,500px)] mx-auto rounded-[28px] p-[12px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(105.42deg, #EAEAEA 0%, #C9C9C9 36%, #FFFFFF 49%, #EAEAEA 69%, #6A6A6A 94%)",
              }}
            >
              <div className="w-full h-full rounded-[18px] overflow-hidden ring-1 ring-black/20">
                {slide.photo ? (
                  <img
                    src={slide.photo}
                    alt={slide.name}
                    style={{ objectPosition: slide.photoPosition ?? "center" }}
                    className="w-full h-full object-cover grayscale"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-4 w-full h-full bg-[#111111]">
                    <span className="text-6xl lg:text-7xl font-display text-gradient-gold opacity-30 leading-none">
                      {initials(slide.name)}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted text-center px-6">
                      {slide.company}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goNext}
          aria-label="Next testimonial"
          className="hidden md:flex absolute -right-4 lg:-right-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 items-center justify-center transition-all hover:scale-105"
        >
          <img src={nextButtonIcon.src} alt="" className="w-full h-full" />
        </button>
      </div>

      {/* Dots, with the arrows joining them on mobile */}
      <div className="flex items-center justify-center gap-6 mt-8 shrink-0">
        <button
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="md:hidden w-11 h-11 flex items-center justify-center transition-all hover:scale-105"
        >
          <img src={nextButtonIcon.src} alt="" className="w-full h-full -scale-x-100" />
        </button>

        <div className="flex items-center gap-3">
          {slides.map((s, idx) => (
            <button
              key={s.name}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === current ? "w-8 bg-brand-gold" : "w-2 bg-white/15 hover:bg-white/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Next testimonial"
          className="md:hidden w-11 h-11 flex items-center justify-center transition-all hover:scale-105"
        >
          <img src={nextButtonIcon.src} alt="" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}
