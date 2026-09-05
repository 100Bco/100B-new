import type { Metadata } from "next";
import { Rocket, Factory, Ship, Handshake } from "lucide-react";
import { Accent, Lead, PrimaryButton, SectionTitle } from "@/components/Section";
import { IconCard } from "@/components/IconCard";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { CONTACT_EMAIL, communities } from "@/content/site";

export const metadata: Metadata = {
  title: "Communities",
  description:
    "We build rooms, not lists. Four networks, vetted by introduction: founders, factory owners, trade professionals, sellers and partners.",
  alternates: { canonical: "/communities" },
};

// One icon per network, in the order they are listed in content/site.ts
const networkIcons = [Rocket, Factory, Ship, Handshake];

const applyHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Seller network application")}`;

export default function CommunitiesPage() {
  return (
    <div className="flex flex-col">
      {/* 7.1 HERO */}
      <PageHero
        title={
          <>
            <span className="block">We build rooms,</span>
            <span className="block">
              <Accent>not lists.</Accent>
            </span>
          </>
        }
        lead="Four networks. Vetted, by introduction."
        meta={<span>Founders · Factory owners · Trade · Sellers and partners</span>}
      />

      {/* 7.2 THE FOUR */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-10">
            {communities.map((c, i) => (
              <IconCard
                key={c.name}
                icon={networkIcons[i]}
                title={c.name}
                className="min-h-[260px]"
              >
                {c.line}
              </IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7.3 SELL WITH US */}
      <section className="py-20 lg:py-28 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-12 lg:mb-16 max-w-4xl">
            We're building a seller network. <Accent>By application.</Accent>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-0 border-t border-border-subtle mb-12">
            {[
              {
                title: "What you'd sell",
                line: "ZAD brand identity. BOND gifting and packaging. Both proven, both in demand.",
              },
              {
                title: "Who it's for",
                line: "Vietnam-based. Consultants, agency people, network members, salespeople with real relationships.",
              },
              {
                title: "Where it stands",
                line: "Invitation only while we build the first group. Applications open.",
              },
            ].map((item) => (
              <div key={item.title} className="py-8 border-b border-border-subtle flex flex-col gap-3">
                <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                  {item.title}
                </h3>
                <p className="text-base lg:text-lg font-light leading-relaxed text-text-body">
                  {item.line}
                </p>
              </div>
            ))}
          </div>

          <PrimaryButton href={applyHref}>Apply</PrimaryButton>
        </div>
      </section>

      <ContactCTA
        title={
          <>
            Know someone who belongs in one of these rooms? <Accent>Introduce them.</Accent>
          </>
        }
      />
    </div>
  );
}
