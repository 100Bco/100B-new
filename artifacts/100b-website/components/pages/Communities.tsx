import { Rocket, Factory, Ship, Handshake } from "lucide-react";
import { Accent, Lead, PrimaryButton, SectionTitle } from "@/components/Section";
import { IconCard } from "@/components/IconCard";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { CONTACT_EMAIL } from "@/content/site";
import { getSite } from "@/content/get-site";
import { communitiesCopy as c } from "@/content/copy/communities";
import type { Locale } from "@/content/locale";

// One icon per network, in the order they are listed in content/site.ts
const networkIcons = [Rocket, Factory, Ship, Handshake];

export function CommunitiesPage({ locale }: { locale: Locale }) {
  const { communities } = getSite(locale);
  const applyHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    c.seller.applySubject[locale],
  )}`;
  return (
    <div className="flex flex-col">
      {/* 7.1 HERO */}
      <PageHero
        title={
          <>
            <span className="block">{c.hero.line1[locale]}</span>
            <span className="block">
              <Accent>{c.hero.line2[locale]}</Accent>
            </span>
          </>
        }
        lead={c.hero.lead[locale]}
        meta={<span>{c.hero.meta[locale]}</span>}
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
            {c.seller.headingLead[locale]} <Accent>{c.seller.headingAccent[locale]}</Accent>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-0 border-t border-border-subtle mb-12">
            {c.seller.items.map((item) => (
              <div key={item.title.en} className="py-8 border-b border-border-subtle flex flex-col gap-3">
                <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                  {item.title[locale]}
                </h3>
                <p className="text-base lg:text-lg font-light leading-relaxed text-text-body">
                  {item.line[locale]}
                </p>
              </div>
            ))}
          </div>

          <PrimaryButton href={applyHref}>{c.seller.apply[locale]}</PrimaryButton>
        </div>
      </section>

      <ContactCTA
        locale={locale}
        title={
          <>
            {c.contact.titleLead[locale]} <Accent>{c.contact.titleAccent[locale]}</Accent>
          </>
        }
      />
    </div>
  );
}
