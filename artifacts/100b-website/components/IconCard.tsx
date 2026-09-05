import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/**
 * Centred card: emblem icon in a metallic sphere, bold Inter title,
 * lighter Inter line under it. Used wherever a section presents a set of
 * four so they all read the same way.
 */
export function IconCard({
  icon: Icon,
  title,
  children,
  footer,
  className = "",
}: {
  icon: LucideIcon;
  title: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative bg-bg-card rounded-2xl sm:rounded-3xl px-4 py-6 sm:px-6 sm:py-8 lg:py-9 border border-border-subtle hover:border-brand-gold/50 transition-colors flex flex-col items-center text-center gap-3.5 sm:gap-5 ${className}`}
    >
      <div className="icon-sphere w-12 h-12 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] mb-1 shrink-0">
        <Icon size={26} strokeWidth={1.5} className="text-white/90 w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]" />
      </div>
      <h3 className="font-sans font-bold text-[15px] sm:text-lg lg:text-xl text-text-heading leading-snug text-balance">
        {title}
      </h3>
      <p className="font-sans font-light text-[13px] sm:text-sm lg:text-base text-text-body leading-relaxed">
        {children}
      </p>
      {footer && (
        <div className="mt-auto pt-4 sm:pt-5 flex flex-wrap justify-center gap-x-4 sm:gap-x-5 gap-y-2">
          {footer}
        </div>
      )}
    </div>
  );
}
