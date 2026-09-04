import type { Testimonial } from "@/content/site";

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
 * Quote wall. Portrait, quote, signature, one credential.
 * Rows are passed in separately so the founder wall and the partner wall
 * never mix.
 */
export function TestimonialWall({
  rows,
  columns = 3,
}: {
  rows: { label: string; items: Testimonial[] }[];
  columns?: 2 | 3;
}) {
  const grid =
    columns === 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2";

  return (
    <div className="flex flex-col gap-14 lg:gap-16">
      {rows.map((row) => (
        <div key={row.label}>
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-text-muted mb-6">
            {row.label}
          </p>
          <div className={`grid ${grid} gap-4 lg:gap-6`}>
            {row.items.map((t) => (
              <figure
                key={t.name}
                className="relative bg-bg-card rounded-3xl p-6 lg:p-8 border border-border-subtle hover:border-brand-gold/40 transition-colors flex flex-col gap-6"
              >
                <span className="absolute top-0 left-0 w-1 h-full bg-brand-gold/70 rounded-l-3xl" />
                <blockquote className="font-serif italic text-xl lg:text-[22px] leading-[1.4] text-text-heading">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 ring-1 ring-white/15 bg-[#111111] flex items-center justify-center">
                    {t.photo ? (
                      <img
                        src={t.photo}
                        alt={t.name}
                        className="w-full h-full object-cover grayscale"
                      />
                    ) : (
                      <span className="font-display text-gradient-gold text-base tracking-wide">
                        {initials(t.name)}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-serif italic text-lg text-text-heading leading-tight">
                      {t.name}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-brand-gold font-semibold">
                      {t.credential ? `${t.credential} · ` : ""}
                      {t.company}
                    </span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
