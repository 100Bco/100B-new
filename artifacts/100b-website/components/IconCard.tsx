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
      className={`group relative bg-bg-card rounded-3xl px-6 py-8 lg:py-9 border border-border-subtle hover:border-brand-gold/50 transition-colors flex flex-col items-center text-center gap-5 ${className}`}
    >
      <div className="icon-sphere w-16 h-16 lg:w-[72px] lg:h-[72px] mb-1">
        <Icon size={26} strokeWidth={1.5} className="text-white/90" />
      </div>
      <h3 className="font-sans font-bold text-lg lg:text-xl text-text-heading leading-snug">
        {title}
      </h3>
      <p className="font-sans font-light text-sm lg:text-base text-text-body leading-relaxed">
        {children}
      </p>
      {footer && (
        <div className="mt-auto pt-5 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {footer}
        </div>
      )}
    </div>
  );
}
