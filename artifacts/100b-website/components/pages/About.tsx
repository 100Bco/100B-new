import { Accent, SectionTitle } from "@/components/Section";
import { TheName } from "@/components/TheName";
import { Founders } from "@/components/Founders";
import { PressCarousel } from "@/components/PressCarousel";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import aboutBanner from "@assets/about-banner-vn.jpg";
import { getSite } from "@/content/get-site";
import { aboutCopy as a } from "@/content/copy/about";
import type { Locale } from "@/content/locale";
import { pressSchema } from "@/content/structured-data";
import { JsonLd } from "@/components/JsonLd";

// Team grid across 100B, Container Club, ZAD, 100Bold. Populate when the
// roster is confirmed; the section renders only when there are members.
type Member = { name: string; role: string; company: string };
const team: Member[] = [];

export function AboutPage({ locale }: { locale: Locale }) {
  const { pressItems } = getSite(locale);
  const howWeWork = a.howWeWork.items.map((i) => ({
    en: i.en[locale],
    enSub: i.enSub[locale],
  }));
  return (
    <div className="flex flex-col">
      <JsonLd data={pressSchema(pressItems)} />

      {/* 6.1 HERO */}
      <PageHero
        image={aboutBanner.src}
        imagePosition="center 55%"
        title={
          <>
            <span className="block">{a.hero.line1[locale]}</span>
            <span className="block">
              <Accent>{a.hero.line2[locale]}</Accent>
            </span>
          </>
        }
        meta={
          <>
            <span>{a.hero.metaCities[locale]}</span>
            <span className="w-px h-3 bg-border-subtle hidden sm:inline-block" aria-hidden />
            <span>{a.hero.metaFounders[locale]}</span>
          </>
        }
      />

      {/* 6.2 THE NAME */}
      <TheName />

      {/* 6.3 FOUNDING TEAM */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-12 lg:mb-16">
            {a.founders.headingLead[locale]} <Accent>{a.founders.headingAccent[locale]}</Accent>
          </SectionTitle>
          <Founders variant="long" locale={locale} />
        </div>
      </section>

      {/* 6.4 THE TEAM */}
      {team.length > 0 && (
        <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-10">
              {team.map((m) => (
                <div key={m.name} className="flex flex-col gap-3">
                  <div className="aspect-square rounded-2xl bg-[#111111] border border-white/10" />
                  <span className="font-serif text-lg text-text-heading">{m.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                    {m.role} · {m.company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6.5 HOW WE WORK. Four principles, one to a card, numbered. Two
          abreast on a phone and four across from lg: the statements are short
          enough to hold their own box, and the four read as one set rather
          than as a list you scroll past. */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-12 lg:mb-16">
            {a.howWeWork.headingLead[locale]} <Accent>{a.howWeWork.headingAccent[locale]}</Accent>
          </SectionTitle>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {howWeWork.map((item, i) => (
              <li
                key={item.en}
                className="h-full bg-bg-card rounded-3xl border border-border-subtle hover:border-brand-gold/40 transition-colors p-5 sm:p-7 lg:p-8 flex flex-col gap-4 lg:gap-5"
              >
                <span className="font-display text-gradient-gold leading-none font-medium text-3xl sm:text-5xl lg:text-[56px]">
                  0{i + 1}
                </span>
                {/* Inter, as on every other card title on the site. The gold
                    half stays gold but takes the same face rather than the
                    serif italic Accent, which would put two fonts in one
                    sentence. */}
                <p className="font-sans font-semibold leading-snug text-text-heading text-[15px] sm:text-lg lg:text-xl text-balance">
                  {item.en}
                  {item.enSub && (
                    <>
                      {" "}
                      <span className="text-gradient-gold">{item.enSub}</span>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6.6 PRESS — the same carousel the homepage runs */}
      <section className="py-20 lg:py-28 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="text-center mb-10 lg:mb-12">
            {a.press.headingLead[locale]} <Accent>{a.press.headingAccent[locale]}</Accent>
          </SectionTitle>
          <PressCarousel />
        </div>
      </section>

      {/* 6.7 CONTACT */}
      <ContactCTA
        locale={locale}
        title={
          <>
            {a.contact.titleLead[locale]} <Accent>{a.contact.titleAccent[locale]}</Accent>
          </>
        }
        meta={a.contact.meta[locale]}
        note={a.contact.note[locale]}
      />
    </div>
  );
}
