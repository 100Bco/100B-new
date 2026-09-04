import type { Metadata } from "next";
import Link from "next/link";
import { Globe, DoorOpen, Container, Layers } from "lucide-react";
import { Accent, ArrowLink, Eyebrow, SectionTitle, Lead } from "@/components/Section";
import { TheName } from "@/components/TheName";
import { TestimonialWall } from "@/components/TestimonialWall";
import { PhotoTile } from "@/components/PhotoTile";
import { Founders } from "@/components/Founders";
import { PressStrip } from "@/components/PressStrip";
import { ContactCTA } from "@/components/ContactCTA";
import {
  companies,
  communities,
  founderTestimonials,
  partnerTestimonials,
  programs,
} from "@/content/site";

export const metadata: Metadata = {
  title: "100B | Beyond Borders",
  description:
    "Vietnamese brands go out. The world comes in. 100B works both directions: capital, brands, and goods across the Vietnam corridor.",
  alternates: { canonical: "/" },
};

const doors = [
  {
    icon: Globe,
    title: "A Vietnamese brand going to the US.",
    line: "We build the US entity with you and take equity in it.",
    links: [{ label: "Go Global", href: "/go-global" }],
  },
  {
    icon: DoorOpen,
    title: "A company, fund, or organization coming into Vietnam.",
    line: "We open the rooms. Government, industry, capital.",
    links: [{ label: "Enter Vietnam", href: "/enter-vietnam" }],
  },
  {
    icon: Container,
    title: "A buyer sourcing from Asia.",
    line: "Straight to the factory. Commission, not markup.",
    links: [{ label: "Container Club", href: "/container-club" }],
  },
  {
    icon: Layers,
    title: "Under $20M, or you want to sell with us.",
    line: "Our companies work at every size.",
    links: [
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "Communities", href: "/communities" },
    ],
  },
];

// Vertical offsets that place the five nodes on a shallow arc.
const orbitOffsets = ["lg:translate-y-10", "lg:translate-y-3", "", "lg:translate-y-3", "lg:translate-y-10"];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1.1 HERO */}
      <section className="relative bg-bg-dark overflow-hidden h-screen min-h-[720px] flex flex-col justify-center border-b border-border-subtle">
        {/* Full-bleed footage. Wistia embed scaled to cover the viewport. */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: "max(100vw, 177.78vh)", height: "max(56.25vw, 100vh)" }}
          >
            <wistia-player
              media-id="9hbymhvynw"
              aspect="1.7777777777777777"
              autoplay="true"
              muted="true"
              end-video-behavior="loop"
              controls-visible-on-load="false"
              play-button="false"
              playbar="false"
              small-play-button="false"
              fullscreen-button="false"
              volume-control="false"
              settings-control="false"
              quality-control="false"
              silent-auto-play="allow"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </div>
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.9) 100%)",
          }}
          aria-hidden
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col items-start gap-7 pt-24 lg:pt-28">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-gold">
            <span className="w-10 h-px bg-brand-gold/60" />
            <span>Vietnam ⇄ The World</span>
          </div>

          <h1 className="text-[44px] md:text-7xl lg:text-[96px] font-serif leading-[0.9] tracking-tight max-w-6xl">
            <span className="block">Vietnamese brands go out.</span>
            <span className="block">
              <em className="font-serif italic text-gradient-gold">The world comes in.</em>
            </span>
          </h1>

          <p className="text-base lg:text-xl font-light leading-relaxed max-w-xl text-text-body">
            We work both directions. Capital, brands, and goods.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href="/go-global"
              className="btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold text-center"
            >
              I'm a Vietnamese brand →
            </Link>
            <Link
              href="/enter-vietnam"
              className="bg-white hover:bg-brand-gold text-bg-dark rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-colors duration-300 text-center"
            >
              I want into Vietnam →
            </Link>
          </div>

          <div className="mt-4 pt-6 border-t border-white/10 w-full flex flex-wrap items-baseline gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.25em] text-text-muted">
            <span>Austin · Hanoi · Ho Chi Minh City</span>
            <span className="w-px h-3 bg-border-subtle hidden sm:inline-block" aria-hidden />
            <span>Five companies · One corridor</span>
          </div>
        </div>
      </section>

      {/* 1.2 FOUR DOORS */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>Four Doors</Eyebrow>
          <SectionTitle className="mb-12 lg:mb-16">
            Four ways in. <Accent>Pick yours.</Accent>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {doors.map((door) => (
              <div
                key={door.title}
                className="group relative bg-bg-card rounded-3xl p-7 lg:p-8 border border-border-subtle hover:border-brand-gold/50 transition-colors flex flex-col gap-6 min-h-[300px]"
              >
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 bg-brand-gold/5 flex items-center justify-center">
                  <door.icon size={22} strokeWidth={1.5} className="text-brand-gold" />
                </div>
                <h3 className="font-serif text-2xl leading-tight text-text-heading">
                  {door.title}
                </h3>
                <p className="text-sm lg:text-base font-light text-text-body leading-relaxed">
                  {door.line}
                </p>
                <div className="mt-auto pt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {door.links.map((l) => (
                    <ArrowLink key={l.href} href={l.href}>
                      {l.label}
                    </ArrowLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.3 THE NAME */}
      <TheName />

      {/* 1.4 ECOSYSTEM */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>Ecosystem</Eyebrow>
          <SectionTitle className="mb-16 lg:mb-20">
            Five companies. <Accent>One corridor.</Accent>
          </SectionTitle>

          {/* Orbit: five nodes on a curve */}
          <div className="relative mb-12 lg:mb-16">
            <svg
              className="hidden lg:block absolute inset-x-0 top-[38px] w-full h-[80px] pointer-events-none"
              viewBox="0 0 1000 80"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0 70 Q 500 -40 1000 70"
                fill="none"
                stroke="rgba(195,163,116,0.35)"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
            </svg>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 relative">
              {companies.map((c, i) => (
                <div
                  key={c.name}
                  className={`flex flex-col items-center text-center gap-3 transition-transform ${orbitOffsets[i]}`}
                >
                  <div className="w-24 h-24 rounded-full bg-bg-dark border border-brand-gold/40 flex items-center justify-center shadow-[0_0_30px_rgba(195,163,116,0.12)] text-center">
                    <span
                      className={`font-display text-gradient-gold tracking-wide px-2 ${
                        c.name.length > 6 ? "text-[13px] leading-[1.1]" : "text-xl leading-none"
                      }`}
                    >
                      {c.name}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-text-muted">
                    {c.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border-subtle">
            {companies.map((c) => (
              <div
                key={c.name}
                className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_200px_1fr] gap-x-6 gap-y-1 py-5 border-b border-border-subtle items-baseline"
              >
                <span className="font-display text-xl text-text-heading">{c.name}</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                  {c.role}
                </span>
                <span className="col-span-2 md:col-span-1 text-sm lg:text-base font-light text-text-body">
                  {c.line}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-10 font-serif text-2xl lg:text-3xl text-text-heading max-w-3xl leading-snug">
            A brand at $5M uses two of them. A brand at $50M uses{" "}
            <em className="italic text-gradient-gold">all five.</em>
          </p>
          <div className="mt-8">
            <ArrowLink href="/ecosystem">Ecosystem</ArrowLink>
          </div>
        </div>
      </section>

      {/* 1.5 PROOF */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>Proof</Eyebrow>
          <SectionTitle className="mb-12 lg:mb-16">
            What our <Accent>clients say.</Accent>
          </SectionTitle>
          <TestimonialWall
            rows={[
              { label: "Vietnamese founders", items: founderTestimonials },
              { label: "International partners", items: partnerTestimonials },
            ]}
          />
        </div>
      </section>

      {/* 1.6 WHAT WE'VE RUN */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>What We've Run</Eyebrow>
          <SectionTitle className="mb-12 lg:mb-16">
            Two programs. <Accent>Mid-2026.</Accent>
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {programs.map((p, i) => (
              <div key={p.name} className="flex flex-col gap-6">
                <PhotoTile
                  aspect="aspect-[16/10]"
                  tone={i === 0 ? "warm" : "cool"}
                  label={`${p.when} · ${p.where}`}
                  caption={p.name}
                />
                <p className="text-sm lg:text-base font-light leading-relaxed text-text-body">
                  {p.line}
                </p>
                <ArrowLink href={p.href}>{p.cta}</ArrowLink>
              </div>
            ))}
          </div>

          <p className="mt-14 font-serif text-2xl lg:text-3xl text-text-heading leading-snug max-w-4xl">
            Both are repeatable. Different countries, different industries,{" "}
            <em className="italic text-gradient-gold">different buyers.</em>
          </p>
        </div>
      </section>

      {/* 1.7 FOUNDING TEAM */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>Founding Team</Eyebrow>
          <SectionTitle className="mb-12 lg:mb-16">
            Three founders. <Accent>Both sides.</Accent>
          </SectionTitle>
          <Founders variant="short" />
        </div>
      </section>

      {/* 1.8 COMMUNITIES */}
      <section className="py-20 lg:py-24 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Eyebrow>Communities</Eyebrow>
            <SectionTitle>
              We build rooms, <Accent>not lists.</Accent>
            </SectionTitle>
          </div>
          <div className="flex flex-col gap-6">
            <ul className="flex flex-wrap gap-x-3 gap-y-3">
              {communities.map((c) => (
                <li
                  key={c.name}
                  className="text-[11px] uppercase tracking-[0.15em] px-4 py-2 border border-white/20 text-white font-medium rounded-full"
                >
                  {c.name}
                </li>
              ))}
            </ul>
            <ArrowLink href="/communities">Communities</ArrowLink>
          </div>
        </div>
      </section>

      {/* 1.9 PRESS */}
      <section className="py-20 lg:py-24 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>Press</Eyebrow>
          <PressStrip />
        </div>
      </section>

      {/* 1.10 CONTACT */}
      <ContactCTA
        title={
          <>
            If one of the four doors is yours, <Accent>let's talk.</Accent>
          </>
        }
      />
    </div>
  );
}
