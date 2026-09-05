import type { ReactNode } from "react";
import { Check } from "lucide-react";

/**
 * Numbered card: the numeral is the only UTM in it. Title and line are Inter,
 * with the line carried by the silver check badge the guideline specifies.
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
      <span className="font-display text-[52px] lg:text-[60px] text-gradient-gold leading-none font-medium">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="font-sans font-bold text-lg lg:text-xl capitalize text-brand-gold leading-snug md:min-h-[2.8em] xl:min-h-[5.6em]">
        {title}
      </h3>
      <div className="flex items-start gap-3 pt-1">
        <div className="w-6 h-6 icon-silver-gradient shrink-0 mt-0.5">
          <Check size={14} strokeWidth={3} />
        </div>
        <p className="font-sans font-light text-base lg:text-lg capitalize leading-relaxed text-text-body">
          {children}
        </p>
      </div>
    </div>
  );
}
