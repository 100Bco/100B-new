import type { Metadata } from "next";
import { Accent, ArrowLink, Lead, SectionTitle } from "@/components/Section";
import { ContactCTA } from "@/components/ContactCTA";
import { companies } from "@/content/site";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "Five companies. Each stands on its own. 100B, Container Club, ZAD, 100Bold, and BOND. Every one takes outside clients. No referral fees, ever.",
  alternates: { canonical: "/ecosystem" },
};

const ladder = [
  { range: "$5M-$20M", who: "ZAD, 100Bold, BOND" },
  { range: "$20M+", who: "all of it, plus 100B in the US entity" },
  { range: "Moving goods, any size", who: "Container Club" },
];

export default function EcosystemPage() {
  return (
    <div className="flex flex-col">
      {/* 5.1 HERO */}
      <section className="relative bg-bg-dark py-32 lg:py-40 border-b border-border-subtle overflow-hidden glow-warm-top">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center gap-8">
          <h1 className="text-[44px] md:text-6xl lg:text-[84px] font-serif leading-[0.9] tracking-tight max-w-6xl">
            <span className="block">Five companies.</span>
            <span className="block">
              <em className="font-serif italic text-gradient-gold">Each stands on its own.</em>
            </span>
          </h1>
          <Lead>Every one takes outside clients.</Lead>
        </div>
      </section>

      {/* 5.2 THE COMPANIES */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-10">
            {companies.map((c) => (
              <div
                key={c.name}
                className="relative bg-bg-card rounded-3xl p-7 lg:p-8 border border-border-subtle hover:border-brand-gold/40 transition-colors flex flex-col gap-5 overflow-hidden"
              >
                <span
                  className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl"
                  style={{ background: c.accent }}
                />
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20"
                  style={{ background: c.accent }}
                  aria-hidden
                />
                <div className="relative flex items-center justify-between gap-4 min-h-[34px]">
                  {c.logo ? (
                    <img src={c.logo} alt={c.name} className="h-6 lg:h-7 w-auto object-contain" />
                  ) : (
                    <span className="font-sans font-light text-2xl lg:text-[28px] text-text-heading leading-none tracking-wide">
                      {c.name}
                    </span>
                  )}
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-gold text-right shrink-0">
                    {c.role}
                  </span>
                </div>
                <p className="relative text-sm lg:text-base font-light leading-relaxed text-text-body">
                  {c.detail ?? c.line}
                </p>
                <div className="relative mt-auto pt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {c.links.map((l) => (
                    <ArrowLink key={l.href} href={l.href} external={l.external}>
                      {l.label}
                    </ArrowLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.3 THE LADDER */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mt-10 relative">
            <div className="hidden md:block absolute left-0 right-0 top-[5px] h-px bg-gradient-to-r from-brand-gold/20 via-brand-gold/60 to-brand-gold/20" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {ladder.map((rung) => (
                <div key={rung.range} className="flex flex-col items-center text-center gap-4">
                  <div className="w-[11px] h-[11px] rounded-full bg-brand-gold shadow-[0_0_12px_rgba(195,163,116,0.7)]" />
                  <span className="font-display text-3xl lg:text-4xl text-gradient-gold leading-none">
                    {rung.range}
                  </span>
                  <span className="font-serif text-xl lg:text-2xl text-text-heading leading-snug">
                    → {rung.who}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-text-muted font-semibold">
            <span>Revenue</span>
            <span>Companies</span>
          </div>
        </div>
      </section>

      {/* 5.4 THE RULE */}
      <section className="py-20 lg:py-28 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <SectionTitle>
            No referral fees. <Accent>Ever.</Accent>
          </SectionTitle>
          <p className="font-serif text-xl lg:text-2xl text-text-body leading-snug max-w-2xl mx-auto text-center">
            We hold equity in these companies and we say so. Hire anyone you want.
          </p>
        </div>
      </section>

      <ContactCTA
        title={
          <>
            Not sure which company fits? <Accent>Ask us.</Accent>
          </>
        }
      />
    </div>
  );
}
