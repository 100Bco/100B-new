import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/content/site";
import pattern from "@assets/100B Pattern (1).png";

/**
 * Closing contact block. Every page ends with one, and the nav's
 * "Start a Conversation" scrolls here. The 100B mark sits behind the type
 * as an oversized watermark on a grained grey ground.
 */
export function ContactCTA({
  title,
  note = "Read by one of us. 48 hours.",
  meta,
}: {
  title: ReactNode;
  note?: string;
  meta?: string;
}) {
  return (
    <section
      id="contact-footer"
      className="relative py-24 lg:py-32 border-t border-border-subtle overflow-hidden"
      style={{ backgroundColor: "#1A1917" }}
    >
      {/* Grey ground, lit from the left so the watermark has somewhere to sit */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 120% at 10% 40%, rgba(255,255,255,0.05) 0%, transparent 60%), linear-gradient(120deg, #232220 0%, #1A1917 45%, #121110 100%)",
        }}
        aria-hidden
      />

      {/* The 100B pattern, bleeding off the right corner */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <img
          src={pattern.src}
          alt=""
          className="absolute -right-[6%] bottom-[-14%] w-[420px] md:w-[560px] lg:w-[720px] max-w-none opacity-[0.10] select-none"
        />
      </div>

      {/* Grain over the whole ground */}
      <div className="absolute inset-0 grain-fine" aria-hidden />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8 flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight">
          {title}
        </h2>
        {meta && (
          <p className="text-[11px] uppercase tracking-[0.25em] text-text-muted font-semibold">
            {meta}
          </p>
        )}
        <p className="text-sm text-text-body font-light leading-relaxed">{note}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="btn-silver-gradient rounded-full px-10 py-4 text-sm uppercase tracking-widest font-semibold inline-block"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
