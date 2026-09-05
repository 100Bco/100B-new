import type { PressItem } from "@/content/site";

/**
 * One press placement: the outlet as a gold badge over the image, a UTM
 * headline, the standfirst, and the link out. Shared so the mobile swipe row
 * and the desktop grid cannot drift apart.
 */
export function PressCard({ item }: { item: PressItem }) {
  return (
    <article className="h-full bg-bg-card rounded-2xl overflow-hidden border border-white/5 flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
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
        <span className="absolute bottom-3 left-3 bg-brand-gold/90 text-bg-dark text-[10px] font-semibold px-2.5 py-1 rounded">
          {item.outlet}
        </span>
      </div>
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

/**
 * The mobile shape for both press sections: one horizontal row you swipe,
 * rather than a column you scroll past. Snapping so a card always settles
 * square, and the row is peeked at the right edge so it reads as scrollable.
 */
export function PressSwipeRow({ items }: { items: PressItem[] }) {
  return (
    <div
      className="md:hidden -mx-6 px-6 scroll-pl-6 flex gap-4 overflow-x-auto snap-x snap-mandatory
                 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item) => (
        <div key={item.link} className="w-[74%] shrink-0 snap-start">
          <PressCard item={item} />
        </div>
      ))}
    </div>
  );
}
