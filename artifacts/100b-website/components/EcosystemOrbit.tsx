"use client";

import { useState } from "react";
import Link from "next/link";
import { Accent, ArrowLink } from "@/components/Section";
import { companies } from "@/content/site";
import emblem from "@assets/100b-emblem-trimmed.png";

/** The arc the nodes sit on, from top-left round to bottom-left. */
const ARC_START = 245;
const ARC_END = 115;

/** Node centres sit on the container's own circle, so the whole system scales
 *  with the container and needs no pixel radius. */
function nodeAngle(index: number, total: number) {
  return ARC_START + ((ARC_END - ARC_START) * index) / (total - 1);
}

function nodePosition(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + 50 * Math.cos(rad)}%`,
    top: `${50 + 50 * Math.sin(rad)}%`,
  };
}

/**
 * The five companies in orbit around 100B. The list on the left and the ring
 * on the right are one control: pointing at either end lights the company,
 * draws its ray in from the hub and dims the other four.
 */
export function EcosystemOrbit() {
  const [activeName, setActiveName] = useState<string | null>(null);
  const active = companies.find((c) => c.name === activeName) ?? null;

  return (
    <section className="relative bg-bg-alt border-b border-border-subtle overflow-hidden py-20 lg:pt-24 lg:pb-0 lg:h-screen lg:min-h-[800px] flex items-center">
      {/* Ambient light behind the ring, brighter while a company is held */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 82% 50%, rgba(195,163,116,0.16) 0%, transparent 62%)",
          opacity: active ? 1 : 0.35,
        }}
        aria-hidden
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* The ring, anchored to the content's right edge and bleeding past it */}
        <div
          className="hidden lg:block absolute top-1/2 right-8 -translate-y-1/2 translate-x-[35%]
                     w-[min(62vh,660px)] h-[min(62vh,660px)] pointer-events-none"
          aria-hidden
        >
          <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />

          {/* One ray per company, drawn from the hub out to its node */}
          {companies.map((c, i) => (
            <div
              key={`ray-${c.name}`}
              className={`absolute left-1/2 top-1/2 w-1/2 h-px origin-left transition-all duration-700 ease-out ${
                activeName === c.name ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{
                transform: `translateY(-50%) rotate(${nodeAngle(i, companies.length)}deg)`,
                background:
                  "linear-gradient(90deg, rgba(195,163,116,0.85) 0%, rgba(195,163,116,0.12) 80%, transparent 100%)",
                boxShadow: "0 0 10px rgba(195,163,116,0.45)",
              }}
            />
          ))}

          {/* Hub — the 100B emblem on a lit sphere */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                        w-[38%] h-[38%] rounded-full
                        flex items-center justify-center transition-transform duration-700 ease-out
                        ${active ? "scale-105" : "scale-100"}`}
            style={{
              background: "radial-gradient(circle at 34% 28%, #35332F 0%, #0A0908 76%)",
              border: "1px solid rgba(195,163,116,0.22)",
              boxShadow: active
                ? "inset 0 0 24px rgba(255,255,255,0.06), 0 0 90px rgba(195,163,116,0.32)"
                : "inset 0 0 24px rgba(255,255,255,0.04), 0 0 48px rgba(195,163,116,0.14)",
            }}
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 22%, rgba(255,255,255,0.10) 0%, transparent 52%)",
              }}
            />
            <img
              src={emblem.src}
              alt=""
              className="w-[54%] h-[54%] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Nodes */}
          {companies.map((c, i) => {
            const isActive = activeName === c.name;
            const isDimmed = activeName !== null && !isActive;
            return (
              <div
                key={`node-${c.name}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[21%] pointer-events-auto"
                style={nodePosition(nodeAngle(i, companies.length))}
              >
                <button
                  type="button"
                  onMouseEnter={() => setActiveName(c.name)}
                  onMouseLeave={() => setActiveName(null)}
                  onFocus={() => setActiveName(c.name)}
                  onBlur={() => setActiveName(null)}
                  aria-label={`${c.name}, ${c.role}`}
                  className={`relative w-full aspect-square flex items-center justify-center rounded-full
                              overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                              ${
                                isActive
                                  ? "border border-brand-gold scale-[1.18] z-30"
                                  : "border border-white/12 hover:border-white/30 z-20"
                              }
                              ${isDimmed ? "opacity-20 blur-[2px] scale-90" : "opacity-100"}`}
                  style={{
                    background: isActive
                      ? "radial-gradient(circle at 30% 28%, rgba(195,163,116,0.30) 0%, rgba(6,6,6,0.94) 78%)"
                      : "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.06) 0%, rgba(10,10,10,0.95) 78%)",
                    boxShadow: isActive
                      ? "inset 0 0 22px rgba(195,163,116,0.28), 0 12px 40px rgba(0,0,0,0.8), 0 0 34px rgba(195,163,116,0.22)"
                      : "inset 0 0 12px rgba(255,255,255,0.03), 0 10px 24px rgba(0,0,0,0.55)",
                  }}
                >
                  <span
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 22%, rgba(255,255,255,0.10) 0%, transparent 55%)",
                    }}
                  />
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt=""
                      className={`relative max-w-[72%] max-h-[38%] w-auto h-auto object-contain transition-opacity duration-700 ${
                        isActive ? "opacity-100" : "opacity-80"
                      }`}
                    />
                  ) : (
                    // No mark supplied yet, so the node carries the name instead.
                    <span
                      className={`relative font-sans tracking-wide leading-none transition-all duration-700 ${
                        isActive
                          ? "text-brand-gold-hover text-base font-medium"
                          : "text-white/80 text-sm font-light"
                      }`}
                    >
                      {c.name}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* The list */}
        <div className="relative z-10 lg:w-[48%]">
          <div className="mb-6 lg:mb-8">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-text-heading text-balance">
              Five companies. <Accent>One corridor.</Accent>
            </h2>
          </div>

          <div className="flex flex-col">
            {companies.map((c) => {
              const isActive = activeName === c.name;
              const isDimmed = activeName !== null && !isActive;
              return (
                <div
                  key={c.name}
                  onMouseEnter={() => setActiveName(c.name)}
                  onMouseLeave={() => setActiveName(null)}
                  className={`border-l pl-6 py-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                              ${isActive ? "border-brand-gold translate-x-3" : "border-white/10 translate-x-0"}
                              ${isDimmed ? "opacity-25 blur-[1px]" : "opacity-100 blur-0"}`}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1.5">
                    <h3
                      className={`font-sans font-bold text-lg lg:text-xl leading-snug transition-colors duration-700 ${
                        isActive ? "text-brand-gold-hover" : "text-text-heading"
                      }`}
                    >
                      {c.name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                      {c.role}
                    </span>
                  </div>
                  <p
                    className={`font-sans font-light text-sm lg:text-base leading-relaxed max-w-md transition-colors duration-700 ${
                      isActive ? "text-text-body" : "text-text-muted"
                    }`}
                  >
                    {c.line}
                  </p>
                  <div
                    className={`flex flex-wrap gap-x-5 gap-y-2 overflow-hidden transition-all duration-700 ${
                      isActive ? "max-h-12 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    {c.links.map((l) =>
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
                </div>
              );
            })}
          </div>

          <p
            className={`mt-6 font-sans font-light text-lg lg:text-xl leading-relaxed text-text-muted transition-opacity duration-700 ${
              active ? "opacity-30" : "opacity-100"
            }`}
          >
            A brand at $5M uses two of them. A brand at $50M uses{" "}
            <em className="italic text-text-heading">all five.</em>
          </p>

          <div className="mt-6">
            <ArrowLink href="/ecosystem">All five companies</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
