"use client";

import { useState } from "react";
import { motion } from "motion/react";

const copy = {
  en: {
    title: "Where the name comes from.",
    lines: [
      "Âu Cơ bore one hundred children. Fifty went to the mountains with their mother. Fifty went to the sea with their father.",
      "Vietnam's oldest story is about going out into the world.",
    ],
    hundred: "is also a perfect score.",
    b: "is for Brands. Borders. Billions.",
    left: "to the mountains",
    right: "to the sea",
  },
  vi: {
    title: "Cái tên đến từ đâu.",
    lines: [
      "Mẹ Âu Cơ sinh trăm trứng. 50 người con theo mẹ lên rừng. 50 người con theo cha xuống biển.",
      "Câu chuyện xưa nhất của người Việt là câu chuyện bước ra năm châu.",
    ],
    hundred: "cũng là điểm tuyệt đối.",
    b: "là Brands. Borders. Billions.",
    left: "theo mẹ lên rừng",
    right: "theo cha xuống biển",
  },
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * The only lyrical section on the site. Near-black, plenty of air.
 * The 100 splits into 50 and 50 once the section scrolls into view.
 * EN and VI are both written natively; the toggle swaps them in place.
 */
export function TheName() {
  const [lang, setLang] = useState<"en" | "vi">("en");
  const t = copy[lang];

  return (
    <section className="relative py-24 lg:py-40 bg-bg-dark border-b border-border-subtle overflow-hidden grain-overlay">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 50%, rgba(195,163,116,0.07) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center mb-12 lg:mb-16">
          <div
            className="inline-flex items-center rounded-full border border-white/15 p-1 text-[10px] uppercase tracking-[0.2em] font-semibold"
            role="group"
            aria-label="Language"
          >
            {(["en", "vi"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  lang === l
                    ? "bg-brand-gold text-bg-dark"
                    : "text-text-muted hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* 100 splitting into 50 and 50 */}
        <motion.div
          className="relative h-[140px] md:h-[200px] lg:h-[260px] mb-16 lg:mb-24 select-none"
          initial="rest"
          whileInView="split"
          viewport={{ once: true, amount: 0.6 }}
          aria-hidden
        >
          <motion.span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[120px] md:text-[180px] lg:text-[240px] leading-none text-gradient-gold"
            variants={{
              rest: { opacity: 1, scale: 1 },
              split: { opacity: 0, scale: 0.9, transition: { delay: 0.9, duration: 0.6, ease } },
            }}
          >
            100
          </motion.span>

          {(["left", "right"] as const).map((side) => (
            <motion.div
              key={side}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
              style={{ x: "-50%" }}
              variants={{
                rest: { opacity: 0, x: "-50%" },
                split: {
                  opacity: 1,
                  x: side === "left" ? "calc(-50% - 26vw)" : "calc(-50% + 26vw)",
                  transition: { delay: 1.0, duration: 1.1, ease },
                },
              }}
            >
              <span className="font-display text-[96px] md:text-[150px] lg:text-[200px] leading-none text-text-heading">
                50
              </span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-brand-gold whitespace-nowrap">
                {side === "left" ? t.left : t.right}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-text-heading">
            {t.title}
          </h2>
          {t.lines.map((line) => (
            <p
              key={line}
              className="font-serif text-xl md:text-2xl lg:text-[28px] font-light leading-[1.45] text-text-body max-w-3xl"
            >
              {line}
            </p>
          ))}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-8 mt-4 border-t border-border-subtle w-full max-w-3xl">
            <p className="flex items-baseline gap-3">
              <span className="font-display text-5xl lg:text-6xl text-gradient-gold leading-none">
                100
              </span>
              <span className="font-serif text-lg lg:text-xl text-text-body">{t.hundred}</span>
            </p>
            <p className="flex items-baseline gap-3">
              <span className="font-display text-5xl lg:text-6xl text-gradient-gold leading-none">
                B
              </span>
              <span className="font-serif text-lg lg:text-xl text-text-body">{t.b}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
