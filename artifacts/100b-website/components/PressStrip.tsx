import { pressItems } from "@/content/site";
import { PressCard, PressSwipeRow } from "@/components/PressCard";

/**
 * Three placements. Outlet, headline, link. No body copy.
 * A row of three from md up; on a phone, one horizontal row you swipe.
 */
export function PressStrip({ limit = 3 }: { limit?: number }) {
  const items = pressItems.slice(0, limit);

  return (
    <>
      <PressSwipeRow items={items} variant="strip" />

      <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-6">
        {items.map((item) => (
          <PressCard key={item.link} item={item} variant="strip" />
        ))}
      </div>
    </>
  );
}
