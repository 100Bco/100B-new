/**
 * Photography slot. Renders the image when one is supplied; otherwise a
 * dark, intentional placeholder so the layout reads as finished until the
 * selected gallery from the trips is delivered.
 */
export function PhotoTile({
  src,
  alt = "",
  label,
  caption,
  aspect = "aspect-[4/3]",
  className = "",
  tone = "warm",
  position = "center",
}: {
  src?: string | null;
  alt?: string;
  label?: string;
  caption?: string;
  aspect?: string;
  className?: string;
  tone?: "warm" | "cool" | "neutral";
  position?: string;
}) {
  const gradients = {
    warm: "linear-gradient(160deg, #2A2520 0%, #1A1714 55%, #0D0B09 100%)",
    cool: "linear-gradient(160deg, #1B1F26 0%, #12151A 55%, #090A0C 100%)",
    neutral: "linear-gradient(160deg, #222222 0%, #151515 55%, #0A0A0A 100%)",
  };

  return (
    <figure
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-bg-card ${aspect} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ objectPosition: position }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 grain-overlay"
          style={{ background: gradients[tone] }}
          aria-hidden
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(195,163,116,0.16) 0%, transparent 70%)",
            }}
          />
        </div>
      )}

      {(label || caption) && (
        <figcaption className="absolute inset-x-0 bottom-0 p-5 lg:p-6 flex flex-col gap-1 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
          {label && (
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-gold">
              {label}
            </span>
          )}
          {caption && (
            <span className="font-serif text-lg lg:text-xl text-text-heading leading-snug">
              {caption}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
