"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;
/** One full cycle: the 100 reforms, holds, then splits again. */
const CYCLE_MS = 12000;
/** How long the 100 holds before it splits, so the reset reads as a beat. */
const MERGE_HOLD_MS = 3000;

/**
 * The only lyrical section on the site, held to a single screen.
 * The 100 splits into 50 and 50, reforms, and splits again on a 12s loop.
 */
export function TheName() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [split, setSplit] = useState(false);

  // The 100 splits into 50 and 50, reforms every 12 seconds, and splits again.
  // It only runs while the section is on screen.
  useEffect(() => {
    if (!inView) return;
    let splitTimer: ReturnType<typeof setTimeout>;
    const run = () => {
      setSplit(false);
      splitTimer = setTimeout(() => setSplit(true), MERGE_HOLD_MS);
    };
    run();
    const cycle = setInterval(run, CYCLE_MS);
    return () => {
      clearInterval(cycle);
      clearTimeout(splitTimer);
    };
  }, [inView]);

  return (
    <section ref={ref} className="relative lg:h-screen lg:min-h-[720px] flex items-center bg-bg-dark border-b border-border-subtle overflow-hidden grain-overlay py-20 lg:py-0">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 50%, rgba(195,163,116,0.07) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        {/* 100 splitting into 50 and 50 */}
        <motion.div
          className="relative h-[110px] md:h-[150px] lg:h-[180px] w-full mb-10 lg:mb-12 select-none"
          initial="rest"
          animate={split ? "split" : "rest"}
          aria-hidden
        >
          <motion.span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[96px] md:text-[130px] lg:text-[160px] leading-none text-gradient-gold"
            variants={{
              rest: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
              split: {
                opacity: 0,
                scale: 0.9,
                transition: { duration: 0.5, ease },
              },
            }}
          >
            100
          </motion.span>

          {(["left", "right"] as const).map((side) => (
            <motion.div
              key={side}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
              style={{ x: "-50%" }}
              variants={{
                rest: {
                  opacity: 0,
                  x: "-50%",
                  transition: { duration: 0.6, ease },
                },
                split: {
                  opacity: 1,
                  x: side === "left" ? "calc(-50% - 24vw)" : "calc(-50% + 24vw)",
                  transition: { duration: 1.1, ease },
                },
              }}
            >
              <span className="font-display text-[76px] md:text-[110px] lg:text-[132px] leading-none text-text-heading">
                50
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold whitespace-nowrap">
                {side === "left" ? "to the mountains" : "to the sea"}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-text-heading mb-6">
          Where the name comes from.
        </h2>

        <p className="font-sans text-base md:text-lg lg:text-xl font-light leading-relaxed text-text-body max-w-3xl mb-4">
          Âu Cơ bore one hundred children. Fifty went to the mountains with their mother.
          Fifty went to the sea with their father.
        </p>
        <p className="font-sans text-base md:text-lg lg:text-xl font-light leading-relaxed text-text-body max-w-3xl">
          Vietnam&apos;s oldest story is about going out into the world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-12 pt-8 mt-8 border-t border-border-subtle w-full max-w-3xl">
          <p className="flex items-baseline gap-3">
            <span className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none">
              100
            </span>
            <span className="font-sans font-light text-sm lg:text-base text-text-body">
              is also a perfect score.
            </span>
          </p>
          <p className="flex items-baseline gap-3">
            <span className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none">
              B
            </span>
            <span className="font-sans font-light text-sm lg:text-base text-text-body">
              is for Brands. Borders. Billions.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
