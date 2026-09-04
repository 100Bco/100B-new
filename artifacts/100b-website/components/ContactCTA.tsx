import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/content/site";
import emblem from "@assets/100B Emblem.png";

/**
 * Closing contact block. Every page ends with one, and the nav's
 * "Start a Conversation" scrolls here.
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
      className="relative py-24 lg:py-32 bg-bg-dark border-t border-border-subtle overflow-hidden glow-warm-center"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8 flex flex-col items-center gap-8">
        <img
          src={emblem.src}
          alt=""
          aria-hidden
          className="w-32 h-32 lg:w-40 lg:h-40 object-contain -mb-5 lg:-mb-8"
        />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight">
          {title}
        </h2>
        {meta && (
          <p className="text-[11px] uppercase tracking-[0.25em] text-text-muted font-semibold">
            {meta}
          </p>
        )}
        <p className="text-sm text-text-muted font-light leading-relaxed">{note}</p>
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
