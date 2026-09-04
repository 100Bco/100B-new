import type { Metadata } from "next";
import {
  Accent,
  ArrowLink,
  Eyebrow,
  Lead,
  PrimaryButton,
  SectionTitle,
} from "@/components/Section";
import { StatGrid, type Stat } from "@/components/StatGrid";
import { PhotoTile } from "@/components/PhotoTile";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Container Club",
  description:
    "100B's trade arm. Buy from the factory and pay a commission, not a markup. Sourcing, factory vetting, quality control, freight, and the network behind it.",
  alternates: { canonical: "/container-club" },
};

const opportunityStats: Stat[] = [
  { value: 20, suffix: "-25%", label: "Savings going direct" },
  {
    value: 17.5,
    prefix: "$",
    suffix: "B",
    decimals: 1,
    label: "Vietnam's construction and furniture exports, 2024",
  },
  { value: 3, suffix: "-4×", label: "Domestic distribution markup" },
  { value: 2, suffix: "nd", label: "Vietnam's global rank in furniture exports" },
];

const whatWeDo = [
  { title: "Factory audit and vetting.", line: "Pre-screened before you arrive." },
  { title: "Quality control.", line: "Samples, mid-run checks, final inspection, ground QC." },
  { title: "Logistics.", line: "Container loading, customs, forwarding, delivery." },
  { title: "Your procurement team.", line: "Spec to delivery. No overseas hire." },
  {
    title: "Capital.",
    line: "US projects connected to Vietnamese capital seeking US exposure.",
  },
];

const factories = [
  "An Cuong",
  "BM Windows",
  "Phu Tai and Vina G7",
  "Dai Dung",
  "AA Corporation",
  "Eurowindow",
  "An Phat Holdings",
  "Woodsland",
  "The One",
  "Tonmat",
  "Amy Grupo",
  "Jager",
  "EuroStark",
];

const repeats = [
  { title: "Other industries.", line: "Beyond construction and finishing." },
  { title: "Other origins.", line: "Across Asia and beyond." },
  { title: "Other buyers.", line: "Europe and other international markets." },
  { title: "Other partners.", line: "Bring a buyer group, we build the program." },
];

const network = [
  "Freight forwarders",
  "Customs brokers",
  "Verified buyers",
  "Factory reps",
  "Trade finance",
  "Compliance advisors",
];

export default function ContainerClubPage() {
  return (
    <div className="flex flex-col">
      {/* 4.1 HERO */}
      <section className="relative bg-bg-dark pt-32 pb-20 lg:pt-48 lg:pb-28 border-b border-border-subtle overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-start gap-8">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
            Container Club · Sourcing, factories, and the trade network
          </p>
          <h1 className="text-[44px] md:text-6xl lg:text-[84px] font-serif leading-[0.9] tracking-tight max-w-6xl">
            <span className="block">Buy from the factory.</span>
            <span className="block">
              <em className="font-serif italic text-gradient-gold">
                Pay a commission, not a markup.
              </em>
            </span>
          </h1>
          <Lead>
            100B's trade arm. Sourcing, factory vetting, quality control, freight, and the
            network behind it.
          </Lead>
          <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-text-muted">
            Led by Tung Cao and Tu Mac
          </p>
        </div>
      </section>

      {/* 4.2 THE MODEL */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>The Model</Eyebrow>
          <SectionTitle className="mb-6">
            3% to 5% <Accent>commission.</Accent>
          </SectionTitle>
          <Lead className="mb-12 lg:mb-16 max-w-3xl">
            We don't buy your goods and resell them at a margin you can't see. You pay the
            factory. You pay us a commission.
          </Lead>

          {/* Side by side: hidden spread vs visible commission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <div className="bg-bg-card/60 rounded-3xl p-8 lg:p-10 border border-dashed border-white/15 flex flex-col gap-8">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted">
                Distributor path
              </span>
              <div className="flex items-center gap-3 flex-wrap font-serif text-lg text-text-muted">
                <span>Factory</span>
                <span className="text-white/30">→</span>
                <span>Distributor</span>
                <span className="text-white/30">→</span>
                <span>You</span>
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <span className="font-display text-6xl lg:text-7xl leading-none text-white/25 blur-[2px] select-none">
                  ??%
                </span>
                <span className="text-sm font-light text-text-muted">
                  Hidden margin. Their incentive is to widen the spread.
                </span>
              </div>
            </div>
            <div className="bg-bg-card rounded-3xl p-8 lg:p-10 border border-brand-gold/40 flex flex-col gap-8">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                Direct path
              </span>
              <div className="flex items-center gap-3 flex-wrap font-serif text-lg text-text-heading">
                <span>Factory</span>
                <span className="text-brand-gold">→</span>
                <span>You</span>
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <span className="font-display text-6xl lg:text-7xl leading-none text-gradient-gold">
                  3-5%
                </span>
                <span className="text-sm font-light text-text-body">
                  Visible commission. Our incentive is to close the deal and keep you coming
                  back.
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm font-light text-text-muted">
            Sourcing trips are priced per trip, by approved application.
          </p>
        </div>
      </section>

      {/* 4.3 THE OPPORTUNITY */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>The Opportunity</Eyebrow>
          <SectionTitle className="mb-6 max-w-4xl">
            Materials are the one cost <Accent>you can control.</Accent>
          </SectionTitle>
          <Lead className="mb-12 lg:mb-16 max-w-3xl">
            Flooring, tile, cabinets, windows, doors, panels, roofing, steel. Typically 25-35%
            of construction cost. Most US buyers pay 3 to 4 times the factory price through
            domestic distribution.
          </Lead>
          <StatGrid stats={opportunityStats} columns={4} size="md" />
        </div>
      </section>

      {/* 4.4 WHAT WE DO */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>What We Do</Eyebrow>
          <div className="relative mt-10">
            <div className="hidden lg:block absolute top-[26px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
              {whatWeDo.map((item, i) => (
                <li key={item.title} className="flex flex-col gap-4">
                  <div className="w-[52px] h-[52px] rounded-full bg-bg-dark border border-brand-gold/40 flex items-center justify-center">
                    <span className="font-display text-gradient-gold text-lg leading-none">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-text-heading leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-text-body">{item.line}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-10 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-text-muted font-semibold">
            <span>Factory floor</span>
            <span>Job site</span>
          </div>
        </div>
      </section>

      {/* 4.5 VIETNAM DIRECT 2026 */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>Vietnam Direct 2026</Eyebrow>
          <SectionTitle className="mb-10">
            What it <Accent>looked like.</Accent>
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
            <div className="flex flex-col gap-6 text-base lg:text-lg font-light leading-relaxed text-text-body">
              <p>
                May to June 2026. Ho Chi Minh City to Hanoi. 13 hand-picked factories in
                construction and finishing materials. Decision-makers only: GC principals,
                development partners, architects who spec.
              </p>
              <p>Hosted with LT Commercial Group.</p>
              <p className="text-sm text-text-muted">
                ASTM, LEED, ISO, FSC certified. Suppliers to California's tallest building and
                US Marriott properties.
              </p>
            </div>

            {/* Route: HCMC to Hanoi */}
            <div className="bg-bg-card rounded-3xl p-8 lg:p-10 border border-border-subtle flex flex-col gap-8">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                The route
              </span>
              <div className="relative flex items-center justify-between">
                <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-brand-gold/60 via-brand-gold/30 to-brand-gold/60" />
                {[
                  { city: "Ho Chi Minh City", note: "Start" },
                  { city: "Binh Duong · Dong Nai", note: "Factories" },
                  { city: "Hanoi", note: "Finish" },
                ].map((stop, i) => (
                  <div key={stop.city} className="relative flex flex-col items-center gap-3 text-center w-1/3">
                    <div
                      className={`w-6 h-6 rounded-full border-[4px] border-bg-card ${
                        i === 1 ? "bg-white/30" : "bg-brand-gold shadow-[0_0_15px_rgba(195,163,116,0.5)]"
                      }`}
                    />
                    <span className="font-sans font-bold text-sm text-text-heading">{stop.city}</span>
                    <span className="text-[10px] uppercase tracking-widest text-text-muted">
                      {stop.note}
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6 border-t border-border-subtle pt-6">
                <div className="flex flex-col gap-1">
                  <span className="font-display text-4xl text-gradient-gold leading-none">13</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Factories</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display text-4xl text-gradient-gold leading-none">2</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Cities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            {[
              { label: "Engineered wood", caption: "Factory floor" },
              { label: "Aluminum windows", caption: "Production line" },
              { label: "Steel structures", caption: "Fabrication hall" },
              { label: "Finishing materials", caption: "Showroom walk" },
            ].map((g, i) => (
              <PhotoTile
                key={g.label}
                label={g.label}
                caption={g.caption}
                tone={i % 2 === 0 ? "neutral" : "warm"}
                aspect="aspect-[4/5]"
              />
            ))}
          </div>

          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-6">
            Factories
          </p>
          <ul className="flex flex-wrap gap-x-3 gap-y-3">
            {factories.map((f) => (
              <li
                key={f}
                className="text-[11px] uppercase tracking-[0.12em] px-4 py-2 border border-white/15 text-white/90 font-medium rounded-full"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4.6 THE MODEL REPEATS */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>The Model Repeats</Eyebrow>
          <SectionTitle className="mb-12 lg:mb-16 max-w-4xl">
            Vietnam. Construction materials. Texas buyers.{" "}
            <Accent>That was the first one.</Accent>
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-border-subtle mb-12">
            {repeats.map((r) => (
              <div key={r.title} className="py-6 border-b border-border-subtle flex flex-col gap-1">
                <h3 className="font-serif text-2xl text-text-heading">{r.title}</h3>
                <p className="text-sm lg:text-base font-light text-text-body">{r.line}</p>
              </div>
            ))}
          </div>
          <PrimaryButton>Talk to us about a sourcing program</PrimaryButton>
        </div>
      </section>

      {/* 4.7 SPECMATE */}
      <section className="py-16 lg:py-20 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-bg-card rounded-3xl p-8 lg:p-12 border border-border-subtle grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center">
            <span className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold rounded-l-3xl" />
            <span className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none">
              SpecMate
            </span>
            <p className="text-base lg:text-lg font-light leading-relaxed text-text-body">
              When a category is good enough, we build a company around it instead of just
              sourcing it. SpecMate supplies materials and furniture direct to contractors,
              multi-origin, built with LT Commercial Group.
            </p>
          </div>
        </div>
      </section>

      {/* 4.8 THE NETWORK */}
      <section className="py-20 lg:py-28 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <Eyebrow>The Network</Eyebrow>
            <SectionTitle className="mb-8">
              The people who make trade work <Accent>deserve a room of their own.</Accent>
            </SectionTitle>
            <p className="text-base lg:text-lg font-light leading-relaxed text-text-body mb-8">
              <strong className="font-semibold text-text-heading">Vetted, not listed.</strong>{" "}
              Introduced by someone already in. No cold applications.
            </p>
            <ArrowLink href="/communities">Communities</ArrowLink>
          </div>
          <ul className="flex flex-col border-t border-border-subtle">
            {network.map((item) => (
              <li
                key={item}
                className="py-5 border-b border-border-subtle flex items-center gap-4 font-serif text-xl lg:text-2xl text-text-heading"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(195,163,116,0.8)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4.9 CTA */}
      <ContactCTA
        title={
          <>
            Tell us what <Accent>you're sourcing.</Accent>
          </>
        }
      />
    </div>
  );
}
