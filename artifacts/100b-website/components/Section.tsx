import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Italic gold accent inside a heading. Serif, per the brand guideline's
 * titleAccent rule.
 */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-serif italic text-gradient-gold">{children}</em>;
}

/**
 * Section H2. Cormorant, light, centred. Matches the guideline's H2 spec
 * and reads far easier than an all-caps display face.
 */
export function SectionTitle({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={twMerge(
        "text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight text-center mx-auto max-w-4xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Lead paragraph under a section title. Inter, centred under the heading. */
export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={twMerge(
        "text-lg lg:text-xl font-light leading-relaxed text-text-body text-center mx-auto max-w-3xl",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Text link with the sliding arrow. */
export function ArrowLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const base = twMerge(
    "group inline-flex items-center gap-[10px] font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-text-heading hover:text-brand-gold transition-colors duration-300",
    className,
  );
  const arrow = (
    <span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        <span>{children}</span>
        {arrow}
      </a>
    );
  }
  return (
    <a href={href} className={base}>
      <span>{children}</span>
      {arrow}
    </a>
  );
}

/** Primary silver CTA. Anchors to the contact block by default. */
export function PrimaryButton({
  href = "#contact-footer",
  children,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={twMerge(
        "btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center text-center",
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Secondary outlined gold CTA. */
export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={twMerge(
        "border border-brand-gold/50 text-brand-gold hover:bg-brand-gold/10 rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-colors inline-flex items-center justify-center text-center",
        className,
      )}
    >
      {children}
    </a>
  );
}
