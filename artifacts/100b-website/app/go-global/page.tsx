import type { Metadata } from "next";
import { Building2, DoorOpen, Handshake, X } from "lucide-react";
import {
  Accent,
  ArrowLink,
  Lead,
  PrimaryButton,
  SectionTitle,
} from "@/components/Section";
import { IconCard } from "@/components/IconCard";
import { PageHero } from "@/components/PageHero";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ContactCTA } from "@/components/ContactCTA";
import { founderTestimonials } from "@/content/site";
import heroImage from "@assets/go-global-banner-clean.png";
import logoZad from "@assets/logo-zad-mono.png";
import logoBond from "@assets/logo-bond-mono.png";
import logo100bold from "@assets/logo-100bold-mono.png";
import logoContainerClub from "@assets/logo-container-club-mono.png";
import logo100bDark from "@assets/logo-100b-dark.png";

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
    icon: Building2,
    title: "We build the US company.",
    line: "Entity, brand, positioning, go-to-market. Built for an American buyer, not translated from a Vietnamese one.",
  },
  {
    icon: DoorOpen,
    title: "We open the rooms.",
    line: "Distribution, retail, capital, chambers.",
  },
  {
    icon: Handshake,
    title: "We stay in it.",
    line: "Board seat, operating input, and a call when it breaks.",
  },
];

const path = [
  { name: "ZAD", step: "Identity", logo: logoZad.src },
  { name: "BOND", step: "Packaging", logo: logoBond.src },
  { name: "100Bold", step: "US marketing", logo: logo100bold.src },
  { name: "Container Club", step: "Export", logo: logoContainerClub.src },
  { name: "100B", step: "The US entity", logo: logo100bDark.src },
];

export default function GoGlobalPage() {
  return (
    <div className="flex flex-col">
      {/* 2.1 HERO */}
      <PageHero
        image={heroImage.src}
        imagePosition="center 58%"
        title={
          <>
            <span className="block">You built the brand in Vietnam.</span>
            <span className="block">
              <Accent>America is a different job.</Accent>
            </span>
          </>
        }
        lead="We build the US entity with you and take equity in it."
        actions={<PrimaryButton>Start a Conversation</PrimaryButton>}
        meta={
          <>
            <span>Vietnamese brands at $20M-$100M</span>
            <span className="w-px h-3 bg-border-subtle hidden sm:inline-block" aria-hidden />
            <span>Equity, 3-20% · No referral fees</span>
          </>
        }
      />

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {whatWeDo.map((item) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                className="min-h-[300px]"
              >
                {item.line}
              </IconCard>
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
                    className={`w-24 h-24 rounded-full flex items-center justify-center shrink-0 px-4 ${
                      i === path.length - 1
                        ? "bg-brand-gold shadow-[0_0_30px_rgba(195,163,116,0.35)]"
                        : "bg-bg-dark border border-brand-gold/40"
                    }`}
                  >
                    <img
                      src={node.logo}
                      alt={node.name}
                      className="max-w-[74%] max-h-[38%] w-auto h-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-text-muted">
                      Step {i + 1}
                    </span>
                    <span className="font-sans font-bold text-lg lg:text-xl text-text-heading leading-snug">
                      {node.step}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-text-muted text-center">
            Every contract separate. Every vendor optional.
          </p>
        </div>
      </section>

      {/* 2.7 PROOF — one voice at a time, as on the homepage */}
      <section className="min-h-screen lg:h-screen flex flex-col bg-bg-dark overflow-hidden py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full flex-1 flex flex-col">
          <div className="shrink-0">
            <SectionTitle className="mb-8 lg:mb-10">
              What Vietnamese founders <Accent>say.</Accent>
            </SectionTitle>
          </div>
          <TestimonialCarousel
            groups={[{ label: "Vietnamese founders", items: founderTestimonials }]}
          />
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
