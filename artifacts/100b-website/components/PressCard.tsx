import type { PressItem } from "@/content/site";

/**
 * One press placement. Two dressings of the same card: "carousel" carries the
 * outlet as a gold badge over the image with a UTM headline, "strip" puts the
 * outlet above a serif headline with a Read link. Shared so the mobile swipe
 * strip and the desktop grid never drift apart.
 */
export function PressCard({
  item,
  variant,
}: {
  item: PressItem;
  variant: "carousel" | "strip";
}) {
  const image = (
    <div className="relative aspect-[16/10] overflow-hidden shrink-0">
      {item.image ? (
        <img
          src={item.image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover ${
            variant === "strip"
              ? "grayscale group-hover:grayscale-0 transition-all duration-700"
              : ""
          }`}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #2A2520 0%, #1A1714 60%, #0D0B09 100%)",
          }}
          aria-hidden
        />
      )}
      {variant === "carousel" && (
        <span className="absolute bottom-3 left-3 bg-brand-gold/90 text-bg-dark text-[10px] font-semibold px-2.5 py-1 rounded">
          {item.outlet}
        </span>
      )}
    </div>
  );

  if (variant === "carousel") {
    return (
      <article className="h-full bg-bg-card rounded-2xl overflow-hidden border border-white/5 flex flex-col">
        {image}
        <div className="p-4 sm:p-5 flex flex-col flex-1">
          <h3 className="font-display text-gradient-gold uppercase leading-[1.15] text-[15px] sm:text-base lg:text-lg mb-2 line-clamp-2">
            {item.headline}
          </h3>
          <p className="text-[13px] font-light text-text-body leading-relaxed mb-3 line-clamp-2">
            {item.description}
          </p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto self-start text-sm text-text-heading underline underline-offset-4 decoration-white/30 hover:decoration-brand-gold hover:text-brand-gold transition-colors"
          >
            Read more
          </a>
        </div>
      </article>
    );
  }

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group h-full bg-bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-gold/40 transition-colors flex flex-col"
    >
      {image}
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-2.5 sm:gap-3 flex-1">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-gold">
          {item.outlet}
        </span>
        <h3 className="font-serif text-lg sm:text-xl lg:text-[22px] leading-snug text-text-heading">
          {item.headline}
        </h3>
        <span className="mt-auto pt-2 text-[11px] uppercase tracking-[0.2em] font-bold text-text-body group-hover:text-brand-gold transition-colors">
          Read{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </a>
  );
}

/**
 * The mobile shape for both press sections: one horizontal row you swipe,
 * rather than a column you scroll past. Snapping so a card always settles
 * square, and the row is peeked at the right edge so it reads as scrollable.
 */
export function PressSwipeRow({
  items,
  variant,
}: {
  items: PressItem[];
  variant: "carousel" | "strip";
}) {
  return (
    <div
      className="md:hidden -mx-6 px-6 scroll-pl-6 flex gap-4 overflow-x-auto snap-x snap-mandatory
                 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item) => (
        <div key={item.link} className="w-[74%] shrink-0 snap-start">
          <PressCard item={item} variant={variant} />
        </div>
      ))}
    </div>
  );
}
