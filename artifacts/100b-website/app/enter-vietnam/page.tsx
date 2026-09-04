import type { Metadata } from "next";
import { Landmark, Factory, Banknote, Users } from "lucide-react";
import {
  Accent,
  ArrowLink,
  Lead,
  PrimaryButton,
  SectionTitle,
} from "@/components/Section";
import { StatGrid, type Stat } from "@/components/StatGrid";
import { PhotoTile } from "@/components/PhotoTile";
import { IconCard } from "@/components/IconCard";
import { programs } from "@/content/site";
import { TestimonialWall } from "@/components/TestimonialWall";
import { ContactCTA } from "@/components/ContactCTA";
import { delegateTestimonials } from "@/content/site";

export const metadata: Metadata = {
  title: "Enter Vietnam",
  description:
    "For companies, funds, and organizations coming into Vietnam. We build delegations into the rooms that matter: government, innovation, capital, and the founders actually building.",
  alternates: { canonical: "/enter-vietnam" },
};

const vietnamStats: Stat[] = [
  { value: 514, prefix: "$", suffix: "B", label: "GDP, 2025" },
  { value: 8.02, suffix: "%", decimals: 2, label: "Growth, 2025" },
  { value: 38.42, prefix: "$", suffix: "B", decimals: 2, label: "FDI disbursed, an all-time high" },
  { value: 475, prefix: "$", suffix: "B", label: "Exports, 2025" },
  { value: 102.3, suffix: "M", decimals: 1, label: "People, median age 34" },
  { value: 1.1, prefix: "$", suffix: "T", decimals: 1, label: "GDP forecast by 2035" },
];

const whatWeBuild = [
  {
    icon: Landmark,
    title: "Government.",
    line: "Ministries, city governments, national agencies.",
  },
  {
    icon: Factory,
    title: "Industry.",
    line: "The companies actually operating, at their own facilities.",
  },
  { icon: Banknote, title: "Capital.", line: "The funds writing checks in Vietnam." },
  {
    icon: Users,
    title: "Founders.",
    line: "The people building, in the room, not on a panel.",
  },
];

const whoWeMet = [
  "AmCham Hanoi and the US Embassy",
  "National Data Association",
  "National Data Center",
  "City of Hanoi",
  "National Innovation Center",
  "Do Ventures",
  "Mekong Capital",
  "AVV",
  "Earth VC",
  "Fulbright University Vietnam",
  "OpenCommerce",
  "Coolmate",
  "MindX",
  "MISA",
  "BCA and BNI Vietnam",
];

const whoThisIsFor = [
  { title: "Chambers and trade associations", line: "bringing members into a new market" },
  { title: "Funds and investors", line: "looking for Vietnam exposure and deal flow" },
  { title: "Corporates", line: "exploring supply chain, partnership, or market entry" },
  {
    title: "Government and economic development bodies",
    line: "building bilateral ties",
  },
];

const accessVietnam = programs.find((p) => p.name === "Access Vietnam");

export default function EnterVietnamPage() {
  return (
    <div className="flex flex-col">
      {/* 3.1 HERO */}
      <section className="relative bg-bg-dark py-32 lg:py-40 border-b border-border-subtle overflow-hidden glow-warm-top">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center gap-8">
          <h1 className="text-[44px] md:text-6xl lg:text-[84px] font-serif leading-[0.9] tracking-tight max-w-6xl">
            <span className="block">Vietnam rewards the people</span>
            <span className="block">
              <em className="font-serif italic text-gradient-gold">who show up.</em>
            </span>
          </h1>
          <Lead>
            We build delegations into the rooms that matter. Government, innovation, capital,
            and the founders actually building.
          </Lead>
          <PrimaryButton>Start a Conversation</PrimaryButton>
        </div>
      </section>

      {/* 3.2 WHY VIETNAM */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mt-4 mb-10">
            <StatGrid stats={vietnamStats} columns={3} />
          </div>
          <p className="font-serif text-xl lg:text-2xl text-text-body leading-snug max-w-4xl mx-auto text-center">
            690,000 STEM students, growing 10% a year. 4,100+ startups. 4 unicorns. 290+ active
            VC firms.
          </p>
        </div>
      </section>

      {/* 3.3 WHAT WE BUILD */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-12 lg:mb-16 max-w-4xl">
            A week that would take you <Accent>two years to arrange.</Accent>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            {whatWeBuild.map((item) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                className="min-h-[260px]"
              >
                {item.line}
              </IconCard>
            ))}
          </div>

          <p className="text-base lg:text-lg font-light leading-relaxed text-text-body max-w-3xl mx-auto text-center">
            We handle the itinerary, the introductions, the translation, and everything between
            the airport and the airport.
          </p>
        </div>
      </section>

      {/* 3.4 ACCESS VIETNAM 2026 */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-10">
            What it <Accent>looked like.</Accent>
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 mb-12">
            <div className="flex flex-col gap-6 text-base lg:text-lg font-light leading-relaxed text-text-body">
              <p>
                June 2026. Hanoi and Ho Chi Minh City. 18 delegates. Government officials and
                business leaders, brought into Vietnam's ministries, innovation centers, and
                capital circles over eight days.
              </p>
              <p>
                Organized with the Greater Austin Asian Chamber of Commerce, led by GAACC
                President and CEO Mark Duval, former President of AmCham China.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.06] self-start">
              {[
                { n: "18", l: "Delegates" },
                { n: "8", l: "Days" },
                { n: "2", l: "Cities" },
              ].map((s) => (
                <div key={s.l} className="bg-bg-card p-6 flex flex-col gap-2 text-center">
                  <span className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none">
                    {s.n}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* The trip, carried by photography. */}
          <div className="mb-8">
            <PhotoTile
              src={accessVietnam?.image}
              alt="The Access Vietnam 2026 delegation in Hanoi"
              aspect="aspect-[16/9]"
              position="center 62%"
              label="June 2026 · Hanoi"
              caption="The delegation"
            />
          </div>
          <div className="mb-14">
            <ArrowLink href="https://austin2vietnam.100b.co/" external>
              See the full programme
            </ArrowLink>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-6">
              Who we met
            </p>
            <ul className="flex flex-wrap gap-x-3 gap-y-3">
              {whoWeMet.map((org) => (
                <li
                  key={org}
                  className="text-[11px] uppercase tracking-[0.12em] px-4 py-2 border border-white/15 text-white/90 font-medium rounded-full"
                >
                  {org}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3.5 WHAT DELEGATES SAID. About the trip, not the company. */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mt-4">
            <TestimonialWall rows={[{ label: "Access Vietnam 2026", items: delegateTestimonials }]} />
          </div>
        </div>
      </section>

      {/* 3.6 WHO THIS IS FOR */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-12 lg:mb-16 max-w-4xl">
            Access Vietnam was one delegation. <Accent>The model travels.</Accent>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-border-subtle mb-12">
            {whoThisIsFor.map((w) => (
              <div key={w.title} className="py-6 border-b border-border-subtle flex flex-col gap-1">
                <h3 className="font-sans font-bold text-lg text-text-heading">{w.title}</h3>
                <p className="text-sm lg:text-base font-light text-text-body">{w.line}</p>
              </div>
            ))}
          </div>

          <p className="font-serif text-2xl lg:text-3xl text-text-heading leading-snug max-w-3xl mb-10 mx-auto text-center">
            From any country. We've run the US corridor.{" "}
            <em className="italic text-gradient-gold">Europe, Asia, and the Gulf are open.</em>
          </p>
          <PrimaryButton>Talk to us about a delegation</PrimaryButton>
        </div>
      </section>

      {/* 3.7 BEYOND THE TRIP */}
      <section className="py-20 lg:py-28 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <SectionTitle className="mb-12">
            Some people leave with a contact list. Others want{" "}
            <Accent>an entity, a partner, or a supply chain.</Accent>
          </SectionTitle>

          <ul className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-x-8 border-t border-border-subtle">
            {["Market entry advisory", "Partner and factory matching", "Capital introductions"].map(
              (item) => (
                <li
                  key={item}
                  className="py-5 border-b border-border-subtle flex items-center gap-3 font-sans text-base font-light text-text-body"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(195,163,116,0.8)] shrink-0" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* 3.8 CTA */}
      <ContactCTA
        title={
          <>
            Tell us why you're <Accent>looking at Vietnam.</Accent>
          </>
        }
      />
    </div>
  );
}
