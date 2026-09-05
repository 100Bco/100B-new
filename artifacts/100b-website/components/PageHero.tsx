import type { ReactNode } from "react";

/**
 * The hero every inner page uses. Same shape as the homepage hero: one full
 * screen, full-bleed backdrop, centred stack, and the same type scale, so the
 * pages read as one site.
 *
 * Pass `image` for a photographic hero. The scrim over it is deliberately
 * heavy in the middle, since the headline sits there and the photographs are
 * brightest there.
 */
export function PageHero({
  image,
  imagePosition = "center",
  title,
  lead,
  actions,
  meta,
}: {
  image?: string;
  imagePosition?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <section
      className={`relative bg-bg-dark overflow-hidden h-screen min-h-[720px] flex flex-col justify-center border-b border-border-subtle ${
        image ? "" : "glow-warm-top"
      }`}
    >
      {image && (
        <>
          <img
            src={image}
            alt=""
            style={{ objectPosition: imagePosition }}
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          />
          {/* Readability scrim: dark at the top and bottom edges, and a soft
              well behind the type so white stays legible over the sunrise. */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.42) 32%, rgba(0,0,0,0.5) 62%, rgba(0,0,0,0.94) 100%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 72% 58% at 50% 46%, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.28) 55%, transparent 78%)",
            }}
            aria-hidden
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center gap-7 pt-24 lg:pt-28">
        <h1 className="text-[44px] md:text-7xl lg:text-[96px] font-serif leading-[0.9] tracking-tight max-w-6xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)]">
          {title}
        </h1>

        {lead && (
          <p className="text-base lg:text-xl font-light leading-relaxed max-w-xl text-text-body drop-shadow-[0_1px_12px_rgba(0,0,0,0.6)]">
            {lead}
          </p>
        )}

        {actions && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {actions}
          </div>
        )}

        {meta && (
          <div className="mt-4 pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.25em] text-text-muted">
            {meta}
          </div>
        )}
      </div>
    </section>
  );
}
