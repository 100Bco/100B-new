import type { ReactNode } from "react";
import { Check } from "lucide-react";

/**
 * Numbered card: gold UTM numeral, gold uppercase title, then the line
 * carried by the silver check badge the guideline specifies for benefits.
 */
export function NumberedCard({
  index,
  title,
  children,
  className = "",
}: {
  index: number;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-bg-card rounded-3xl p-7 lg:p-8 border border-border-subtle hover:border-brand-gold/40 transition-colors flex flex-col gap-3 ${className}`}
    >
      <span className="font-display text-[40px] text-gradient-gold leading-none font-medium">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="text-[13px] lg:text-sm uppercase tracking-[0.15em] font-semibold text-brand-gold leading-snug md:min-h-[4.2em]">
        {title}
      </h3>
      <div className="flex items-start gap-3 mt-1">
        <div className="w-6 h-6 icon-silver-gradient shrink-0 mt-0.5">
          <Check size={14} strokeWidth={3} />
        </div>
        <p className="font-sans font-light text-sm lg:text-base leading-relaxed text-text-body">
          {children}
        </p>
      </div>
    </div>
  );
}
