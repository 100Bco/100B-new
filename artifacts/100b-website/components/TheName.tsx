"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * The only lyrical section on the site, held to a single screen.
 * The 100 splits into 50 and 50 once it scrolls into view.
 */
export function TheName() {
  return (
    <section className="relative lg:h-screen lg:min-h-[720px] flex items-center bg-bg-dark border-b border-border-subtle overflow-hidden grain-overlay py-20 lg:py-0">
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
          whileInView="split"
          viewport={{ once: true, amount: 0.6 }}
          aria-hidden
        >
          <motion.span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[96px] md:text-[130px] lg:text-[160px] leading-none text-gradient-gold"
            variants={{
              rest: { opacity: 1, scale: 1 },
              split: {
                opacity: 0,
                scale: 0.9,
                transition: { delay: 0.9, duration: 0.6, ease },
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
                rest: { opacity: 0, x: "-50%" },
                split: {
                  opacity: 1,
                  x: side === "left" ? "calc(-50% - 24vw)" : "calc(-50% + 24vw)",
                  transition: { delay: 1.0, duration: 1.1, ease },
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

        <p className="font-serif text-lg md:text-xl lg:text-2xl font-light leading-[1.5] text-text-body max-w-3xl mb-4">
          Âu Cơ bore one hundred children. Fifty went to the mountains with their mother.
          Fifty went to the sea with their father.
        </p>
        <p className="font-serif text-lg md:text-xl lg:text-2xl font-light leading-[1.5] text-text-body max-w-3xl">
          Vietnam&apos;s oldest story is about going out into the world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-12 pt-8 mt-8 border-t border-border-subtle w-full max-w-3xl">
          <p className="flex items-baseline gap-3">
            <span className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none">
              100
            </span>
            <span className="font-serif text-base lg:text-lg text-text-body">
              is also a perfect score.
            </span>
          </p>
          <p className="flex items-baseline gap-3">
            <span className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none">
              B
            </span>
            <span className="font-serif text-base lg:text-lg text-text-body">
              is for Brands. Borders. Billions.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
