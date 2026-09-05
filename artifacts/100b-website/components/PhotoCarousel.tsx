"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import nextButtonIcon from "@assets/carbon_next-filled_1777018054288.png";

export type TripPhoto = { src: string; label: string; caption: string };

/**
 * Photo carousel for a trip. One frame at a time with the room named
 * underneath, the same silver arrows and gold dots as the quote carousel.
 */
export function PhotoCarousel({
  photos,
  interval = 5000,
  className = "",
}: {
  photos: TripPhoto[];
  interval?: number;
  className?: string;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % photos.length),
      interval,
    );
    return () => clearInterval(timer);
  }, [interval, photos.length]);

  if (!photos.length) return null;
  const photo = photos[current];
  const goPrev = () => setCurrent((p) => (p - 1 + photos.length) % photos.length);
  const goNext = () => setCurrent((p) => (p + 1) % photos.length);

  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <div className="relative">
        <figure className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-bg-card">
          <AnimatePresence mode="wait">
            <motion.img
              key={photo.src}
              src={photo.src}
              alt={photo.caption}
              loading={current === 0 ? "eager" : "lazy"}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <figcaption className="absolute inset-x-0 bottom-0 px-5 lg:px-6 pb-5 lg:pb-6 pt-14 flex flex-col gap-1.5 bg-gradient-to-t from-black via-black/70 to-transparent">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-gold">
              {photo.label}
            </span>
            <span className="font-sans font-bold text-base lg:text-lg text-text-heading leading-snug">
              {photo.caption}
            </span>
          </figcaption>
        </figure>

        <button
          onClick={goPrev}
          aria-label="Previous photo"
          className="hidden md:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center transition-transform hover:scale-110"
        >
          <img src={nextButtonIcon.src} alt="" className="w-full h-full -scale-x-100" />
        </button>
        <button
          onClick={goNext}
          aria-label="Next photo"
          className="hidden md:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center transition-transform hover:scale-110"
        >
          <img src={nextButtonIcon.src} alt="" className="w-full h-full" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-5">
        <button
          onClick={goPrev}
          aria-label="Previous photo"
          className="md:hidden w-8 h-8 flex items-center justify-center"
        >
          <img src={nextButtonIcon.src} alt="" className="w-full h-full -scale-x-100" />
        </button>
        <div className="flex items-center gap-2.5">
          {photos.map((p, idx) => (
            <button
              key={p.src}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to photo ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current ? "w-7 bg-brand-gold" : "w-1.5 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          aria-label="Next photo"
          className="md:hidden w-8 h-8 flex items-center justify-center"
        >
          <img src={nextButtonIcon.src} alt="" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}
