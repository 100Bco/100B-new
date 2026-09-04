import { pressItems } from "@/content/site";

/** Three placements. Outlet, headline, link. No body copy. */
export function PressStrip({ limit = 3 }: { limit?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
      {pressItems.slice(0, limit).map((item) => (
        <a
          key={item.link}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-gold/40 transition-colors flex flex-col"
        >
          <div className="relative aspect-[16/10] overflow-hidden shrink-0">
            {item.image ? (
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(135deg, #2A2520 0%, #1A1714 60%, #0D0B09 100%)",
                }}
                aria-hidden
              />
            )}
          </div>
          <div className="p-5 lg:p-6 flex flex-col gap-3 flex-1">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-gold">
              {item.outlet}
            </span>
            <h3 className="font-serif text-xl lg:text-[22px] leading-snug text-text-heading">
              {item.headline}
            </h3>
            <span className="mt-auto pt-2 text-[11px] uppercase tracking-[0.2em] font-bold text-text-body group-hover:text-brand-gold transition-colors">
              Read <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
