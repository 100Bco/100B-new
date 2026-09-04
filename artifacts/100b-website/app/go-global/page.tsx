import type { Metadata } from "next";
import { X } from "lucide-react";
import {
  Accent,
  ArrowLink,
  Lead,
  PrimaryButton,
  SectionTitle,
} from "@/components/Section";
import { TestimonialWall } from "@/components/TestimonialWall";
import { ContactCTA } from "@/components/ContactCTA";
import { founderTestimonials } from "@/content/site";

export const metadata: Metadata = {
  title: "Go Global",
  description:
    "For Vietnamese brands entering the US. We build the US entity with you and take equity in it. 3% to 20%, no referral fees.",
  alternates: { canonical: "/go-global" },
};

const problems = [
  "An American agency that has never sold a Vietnamese product",
  "Amazon, and hope",
  "A distributor who owns the customer forever",
  "Two years learning what a partner on the ground already knew",
];

const whatWeDo = [
  {
    title: "We build the US company.",
    line: "Entity, brand, positioning, go-to-market. Built for an American buyer, not translated from a Vietnamese one.",
  },
  {
    title: "We open the rooms.",
    line: "Distribution, retail, capital, chambers.",
  },
  {
    title: "We stay in it.",
    line: "Board seat, operating input, and a call when it breaks.",
  },
];

const path = [
  { name: "ZAD", step: "Identity" },
  { name: "BOND", step: "Packaging" },
  { name: "100Bold", step: "US marketing" },
  { name: "Container Club", step: "Export" },
  { name: "100B", step: "The US entity" },
];

export default function GoGlobalPage() {
  return (
    <div className="flex flex-col">
      {/* 2.1 HERO */}
      <section className="relative bg-bg-dark py-32 lg:py-40 border-b border-border-subtle overflow-hidden glow-warm-top">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center gap-8">
          <h1 className="text-[44px] md:text-6xl lg:text-[84px] font-serif leading-[0.9] tracking-tight max-w-6xl">
            <span className="block">You built the brand in Vietnam.</span>
            <span className="block">
              <em className="font-serif italic text-gradient-gold">America is a different job.</em>
            </span>
          </h1>
          <Lead>We build the US entity with you and take equity in it.</Lead>
          <PrimaryButton>Start a Conversation</PrimaryButton>
        </div>
      </section>

      {/* 2.2 THE PROBLEM */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <SectionTitle className="mb-12">
            Most Vietnamese brands enter the US <Accent>the expensive way.</Accent>
          </SectionTitle>
          <ul className="w-full max-w-3xl flex flex-col border-t border-border-subtle">
            {problems.map((p) => (
              <li
                key={p}
                className="flex items-center gap-5 py-6 border-b border-border-subtle"
              >
                <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center shrink-0 text-text-muted">
                  <X size={14} strokeWidth={2.5} />
                </span>
                <span className="font-sans text-base lg:text-lg font-light text-text-muted line-through decoration-brand-gold/60 decoration-1">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2.3 WHAT WE DO */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
            {whatWeDo.map((item, i) => (
              <div
                key={item.title}
                className="relative bg-bg-card rounded-3xl p-8 lg:p-10 border border-border-subtle flex flex-col items-center text-center gap-5"
              >
                <span className="text-[40px] font-display text-gradient-gold leading-none font-medium">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-text-heading leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base font-light leading-relaxed text-text-body">
                  {item.line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.4 THE MODEL */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-12 lg:mb-16">
            We take equity. <Accent>Nothing else.</Accent>
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-bg-card rounded-3xl p-8 lg:p-12 border border-brand-gold/30 flex flex-col items-center text-center gap-6">
              <span className="font-display text-[88px] md:text-[120px] lg:text-[140px] leading-none text-gradient-gold">
                3-20%
              </span>
              <p className="text-base lg:text-lg font-light leading-relaxed text-text-body">
                <strong className="font-semibold text-text-heading">
                  3% to 20% of the US entity
                </strong>
                , depending on scope and stage. When equity lands low, we add a retainer and
                success fees.
              </p>
            </div>
            <div className="bg-bg-card rounded-3xl p-8 lg:p-12 border border-border-subtle flex flex-col items-center text-center gap-6">
              <span className="font-display text-[88px] md:text-[120px] lg:text-[140px] leading-none text-text-heading">
                0%
              </span>
              <p className="text-base lg:text-lg font-light leading-relaxed text-text-body">
                <strong className="font-semibold text-text-heading">No referral fees.</strong> If
                you hire ZAD, 100Bold, or Container Club, none of it comes back to us.
              </p>
            </div>
          </div>

          <p className="mt-12 font-serif text-2xl lg:text-3xl text-text-heading leading-snug max-w-3xl mx-auto text-center">
            We make money when your US company is{" "}
            <em className="italic text-gradient-gold">worth something.</em>
          </p>
        </div>
      </section>

      {/* 2.5 WHO WE WORK WITH */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          <p className="font-display text-5xl md:text-6xl lg:text-7xl text-gradient-gold leading-none mb-6">
            $20M to $100M
          </p>
          <Lead className="mb-14">
            in revenue. Established in Vietnam. Ready to give up equity in a new entity for a
            partner who works.
          </Lead>

          <div className="w-full max-w-3xl pt-10 border-t border-border-subtle flex flex-col items-center gap-5">
            <h3 className="font-serif text-2xl lg:text-3xl text-text-heading">Under $20M?</h3>
            <p className="text-base lg:text-lg font-light leading-relaxed text-text-body">
              The equity model doesn't fit yet. Our companies do.
            </p>
            <ArrowLink href="/ecosystem">Ecosystem</ArrowLink>
          </div>
        </div>
      </section>

      {/* 2.6 THE PATH */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative mt-10 mb-12">
            <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
              {path.map((node, i) => (
                <li key={node.name} className="flex lg:flex-col items-center gap-5 lg:gap-4 lg:text-center">
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center shrink-0 text-center ${
                      i === path.length - 1
                        ? "bg-brand-gold text-bg-dark shadow-[0_0_30px_rgba(195,163,116,0.35)]"
                        : "bg-bg-dark border border-brand-gold/40"
                    }`}
                  >
                    <span
                      className={`font-display px-2 ${
                        node.name.length > 6 ? "text-[13px] leading-[1.1]" : "text-xl leading-none"
                      } ${i === path.length - 1 ? "text-bg-dark" : "text-gradient-gold"}`}
                    >
                      {node.name}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-text-muted">
                      Step {i + 1}
                    </span>
                    <span className="font-serif text-xl text-text-heading">{node.step}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-text-muted">
            Every contract separate. Every vendor optional.
          </p>
        </div>
      </section>

      {/* 2.7 PROOF */}
      <section className="py-20 lg:py-28 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-12 lg:mb-16">
            What Vietnamese founders <Accent>say.</Accent>
          </SectionTitle>
          <TestimonialWall rows={[{ label: "Vietnamese founders", items: founderTestimonials }]} />
        </div>
      </section>

      {/* 2.8 CTA */}
      <ContactCTA
        title={
          <>
            Tell us about <Accent>your brand.</Accent>
          </>
        }
      />
    </div>
  );
}
