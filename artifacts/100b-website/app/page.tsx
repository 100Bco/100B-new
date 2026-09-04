import type { Metadata } from "next";
import Link from "next/link";
import { Globe, DoorOpen, Container, Layers } from "lucide-react";
import { Accent, ArrowLink, Eyebrow, SectionTitle, Lead } from "@/components/Section";
import { IconCard } from "@/components/IconCard";
import { TheName } from "@/components/TheName";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { PhotoTile } from "@/components/PhotoTile";
import { Founders } from "@/components/Founders";
import { PressCarousel } from "@/components/PressCarousel";
import { ContactCTA } from "@/components/ContactCTA";
import { EcosystemOrbit } from "@/components/EcosystemOrbit";
import {
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
              <IconCard
                key={door.title}
                icon={door.icon}
                title={door.title}
                className="min-h-[320px]"
                footer={door.links.map((l) => (
                  <ArrowLink key={l.href} href={l.href}>
                    {l.label}
                  </ArrowLink>
                ))}
              >
                {door.line}
              </IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* 1.3 THE NAME */}
      <TheName />

      {/* 1.4 ECOSYSTEM — 100B at the centre, the five companies in orbit */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>Ecosystem</Eyebrow>
          <SectionTitle className="mb-12 lg:mb-16">
            Five companies. <Accent>One corridor.</Accent>
          </SectionTitle>

          <EcosystemOrbit />

          <div className="mt-14 lg:mt-16 pt-8 border-t border-border-subtle">
            <ArrowLink href="/ecosystem">All five companies</ArrowLink>
          </div>
        </div>
      </section>

      {/* 1.5 PROOF — one voice at a time, as on the previous site */}
      <section className="min-h-screen lg:h-screen flex flex-col bg-bg-alt border-b border-border-subtle overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full flex-1 flex flex-col">
          <div className="shrink-0">
            <Eyebrow>Proof</Eyebrow>
            <SectionTitle className="mb-8 lg:mb-10">
              What our <Accent>clients say.</Accent>
            </SectionTitle>
          </div>
          <TestimonialCarousel
            groups={[
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
                  src={p.image}
                  alt={p.name}
                  aspect="aspect-[3/2]"
                  position="center 62%"
                  tone={i === 0 ? "warm" : "cool"}
                  label={`${p.when} · ${p.where}`}
                  caption={p.name}
                />
                <p className="text-sm lg:text-base font-light leading-relaxed text-text-body">
                  {p.line}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <ArrowLink href={p.href}>{p.cta}</ArrowLink>
                  <ArrowLink href={p.site} external>
                    Event site
                  </ArrowLink>
                </div>
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
      <section className="py-16 lg:py-20 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>Founding Team</Eyebrow>
          <SectionTitle className="mb-10 lg:mb-12">
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

      {/* 1.9 PRESS — carousel, as on the previous site */}
      <section className="py-20 lg:py-24 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="text-center mb-10 lg:mb-12">
            In the <Accent>press.</Accent>
          </SectionTitle>
          <PressCarousel />
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
