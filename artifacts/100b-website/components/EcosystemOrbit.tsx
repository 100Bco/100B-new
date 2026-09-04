"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { companies } from "@/content/site";
import emblem from "@assets/100B Emblem.png";

const ORBIT_SECONDS = 90;
/** Node centres sit on a circle at this share of the container's half-width. */
const RADIUS = 40;

function nodePosition(index: number, total: number) {
  const angle = (-90 + (360 / total) * index) * (Math.PI / 180);
  return {
    left: `${50 + RADIUS * Math.cos(angle)}%`,
    top: `${50 + RADIUS * Math.sin(angle)}%`,
  };
}

/**
 * The five companies orbiting 100B. Pointing at a node reveals that
 * company's line in the panel; the ring drifts slowly and holds still
 * while the pointer is over it so nodes never move under the cursor.
 */
export function EcosystemOrbit() {
  const [active, setActive] = useState<number | null>(null);
  const company = active === null ? null : companies[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(340px,520px)] gap-12 lg:gap-16 items-center">
      {/* Panel — swaps to the company under the pointer */}
      <div className="order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left min-h-[220px] lg:min-h-[260px]">
        <AnimatePresence mode="wait">
          {company ? (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                {company.role}
              </span>
              <span className="font-display text-4xl lg:text-5xl text-text-heading leading-none">
                {company.name}
              </span>
              <p className="text-base lg:text-lg font-light leading-relaxed text-text-body max-w-md">
                {company.detail ?? company.line}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                {company.links.map((l) =>
                  l.external ? (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-text-heading hover:text-brand-gold transition-colors"
                    >
                      {l.label}
                      <span className="text-brand-gold transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  ) : (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-text-heading hover:text-brand-gold transition-colors"
                    >
                      {l.label}
                      <span className="text-brand-gold transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  ),
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="resting"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5"
            >
              <p className="font-serif text-2xl lg:text-3xl text-text-heading leading-snug max-w-lg">
                A brand at $5M uses two of them. A brand at $50M uses{" "}
                <em className="italic text-gradient-gold">all five.</em>
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted">
                Select a company to see what it does
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Orbit */}
      <div
        className="order-1 lg:order-2 group relative w-full max-w-[520px] mx-auto aspect-square"
        onMouseLeave={() => setActive(null)}
      >
        {/* Ambient gold light behind the system */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(195,163,116,0.12) 0%, transparent 62%)",
          }}
          aria-hidden
        />

        {/* Orbit path */}
        <div
          className="absolute rounded-full border border-dashed border-brand-gold/25 pointer-events-none"
          style={{
            left: `${50 - RADIUS}%`,
            top: `${50 - RADIUS}%`,
            width: `${RADIUS * 2}%`,
            height: `${RADIUS * 2}%`,
          }}
          aria-hidden
        />

        {/* Centre — 100B */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10 pointer-events-none">
          <img
            src={emblem.src}
            alt="100B"
            className="w-40 h-40 lg:w-48 lg:h-48 object-contain drop-shadow-[0_14px_40px_rgba(0,0,0,0.7)]"
          />
        </div>

        {/* Orbiting nodes. The ring drifts; each node spins back so the
            wordmarks stay upright. Both stop while the pointer is over it. */}
        <div
          className="absolute inset-0 animate-[spin_90s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ animationDuration: `${ORBIT_SECONDS}s` }}
        >
          {companies.map((c, i) => (
            <button
              key={c.name}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(active === i ? null : i)}
              aria-label={`${c.name} — ${c.role}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 animate-[spin_90s_linear_infinite_reverse] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
              style={{ ...nodePosition(i, companies.length), animationDuration: `${ORBIT_SECONDS}s` }}
            >
              <span
                className={`flex items-center justify-center rounded-full bg-bg-dark w-[84px] h-[84px] lg:w-[96px] lg:h-[96px] border transition-all duration-300 ${
                  active === i
                    ? "border-brand-gold scale-110 shadow-[0_0_36px_rgba(195,163,116,0.45)]"
                    : "border-brand-gold/35 shadow-[0_0_24px_rgba(195,163,116,0.10)]"
                }`}
              >
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="w-3/5 h-3/5 object-contain"
                  />
                ) : (
                  <span className="font-display text-gradient-gold text-base lg:text-lg leading-[1.05] text-center px-3">
                    {c.name}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
