import Link from "next/link";
import { Globe, DoorOpen, Container, Layers } from "lucide-react";
import { Accent, ArrowLink, SectionTitle, Lead } from "@/components/Section";
import { IconCard } from "@/components/IconCard";
import { TheName } from "@/components/TheName";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { PhotoTile } from "@/components/PhotoTile";
import { Founders } from "@/components/Founders";
import { PressCarousel } from "@/components/PressCarousel";
import { ContactCTA } from "@/components/ContactCTA";
import { EcosystemOrbit } from "@/components/EcosystemOrbit";
import { JsonLd } from "@/components/JsonLd";
import { pressSchema } from "@/content/structured-data";
import { getSite } from "@/content/get-site";
import { home } from "@/content/copy/home";
import { localePath, type Locale } from "@/content/locale";

/** The icon and the destination are the same in both languages; the title,
 *  the line under it and the link's label come from the copy sheet. */
const doorRoutes = [
  { icon: Globe, href: "/go-global" },
  { icon: DoorOpen, href: "/enter-vietnam" },
  { icon: Container, href: "/container-club" },
  { icon: Layers, href: "/ecosystem" },
];

export function HomePage({ locale }: { locale: Locale }) {
  const { communities, founderTestimonials, partnerTestimonials, pressItems, programs } =
    getSite(locale);
  const doors = doorRoutes.map((d, i) => ({
    icon: d.icon,
    title: home.doors.items[i].title[locale],
    line: home.doors.items[i].line[locale],
    links: [{ label: home.doors.items[i].label[locale], href: localePath(locale, d.href) }],
  }));
  return (
    <div className="flex flex-col">
      <JsonLd data={pressSchema(pressItems)} />

      {/* 1.1 HERO */}
      <section className="relative bg-bg-dark overflow-hidden h-screen min-h-[720px] flex flex-col justify-center border-b border-border-subtle">
        {/* Full-bleed footage. Wistia embed scaled to cover the viewport. */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: "max(100vw, 177.78vh)", height: "max(56.25vw, 100vh)" }}
          >
            <wistia-player
              media-id="68iibq5ow9"
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center gap-7 pt-24 lg:pt-28">
          <h1 className="text-[44px] md:text-7xl lg:text-[96px] font-serif leading-[0.9] tracking-tight max-w-6xl">
            <span className="block">{home.hero.line1[locale]}</span>
            <span className="block">
              <em className="font-serif italic text-gradient-gold">{home.hero.line2[locale]}</em>
            </span>
          </h1>

          <p className="text-base lg:text-xl font-light leading-relaxed max-w-xl text-text-body">
            {home.hero.lead[locale]}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href={localePath(locale, "/go-global")}
              className="btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold text-center"
            >
              {home.hero.ctaBrand[locale]}
            </Link>
            <Link
              href={localePath(locale, "/enter-vietnam")}
              className="bg-white hover:bg-brand-gold text-bg-dark rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-colors duration-300 text-center"
            >
              {home.hero.ctaEnter[locale]}
            </Link>
          </div>

          <div className="mt-4 pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.25em] text-text-muted">
            <span>{home.hero.metaCities[locale]}</span>
            <span className="w-px h-3 bg-border-subtle hidden sm:inline-block" aria-hidden />
            <span>{home.hero.metaCompanies[locale]}</span>
            <span className="w-px h-3 bg-border-subtle hidden sm:inline-block" aria-hidden />
            <span>{home.hero.metaCorridor[locale]}</span>
          </div>
        </div>
      </section>

      {/* 1.2 FOUR DOORS */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-12 lg:mb-16">
            {home.doors.headingLead[locale]} <Accent>{home.doors.headingAccent[locale]}</Accent>
          </SectionTitle>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
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
      <EcosystemOrbit />

      {/* 1.5 PROOF — one voice at a time, as on the previous site */}
      <section className="min-h-screen lg:h-screen flex flex-col bg-bg-alt border-b border-border-subtle overflow-hidden py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full flex-1 flex flex-col">
          <div className="shrink-0">
            <SectionTitle className="mb-8 lg:mb-10">
              {home.testimonials.headingLead[locale]}{" "}
              <Accent>{home.testimonials.headingAccent[locale]}</Accent>
            </SectionTitle>
          </div>
          <TestimonialCarousel
            groups={[
              { label: home.groups.founders[locale], items: founderTestimonials },
              { label: home.groups.partners[locale], items: partnerTestimonials },
            ]}
          />
        </div>
      </section>

      {/* 1.6 WHAT WE'VE RUN */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-12 lg:mb-16">
            {home.programs.headingLead[locale]} <Accent>{home.programs.headingAccent[locale]}</Accent>
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {programs.map((p, i) => (
              <div key={p.name} className="flex flex-col items-center text-center gap-6">
                <a
                  href={p.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full"
                  aria-label={`${p.name}, ${home.programs.openSite[locale]}`}
                >
                  <PhotoTile
                    src={p.image}
                    alt={p.name}
                    aspect="aspect-[3/2]"
                    position="center 62%"
                    tone={i === 0 ? "warm" : "cool"}
                    label={`${p.when} · ${p.where}`}
                    caption={p.name.toUpperCase()}
                    captionClassName="font-display text-2xl md:text-3xl lg:text-4xl text-text-heading leading-none tracking-wide"
                    className="transition-transform duration-500 group-hover:scale-[1.01] group-hover:border-brand-gold/50"
                  />
                </a>
                <p className="text-sm lg:text-base font-light leading-relaxed text-text-body">
                  {p.line}
                </p>
                {/* One programme runs to three lines and the other to two, so
                    the links are pushed to the bottom of their own column
                    rather than sitting wherever the copy leaves them. */}
                <div className="mt-auto flex flex-wrap justify-center gap-x-6 gap-y-2">
                  <ArrowLink href={localePath(locale, p.href)}>{p.cta}</ArrowLink>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 font-serif text-2xl lg:text-3xl text-text-heading leading-snug max-w-4xl mx-auto text-center">
            {home.programs.closingLead[locale]}{" "}
            <em className="italic text-gradient-gold">{home.programs.closingAccent[locale]}</em>
          </p>
        </div>
      </section>

      {/* 1.7 FOUNDING TEAM */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-10 lg:mb-12">
            {home.founders.headingLead[locale]} <Accent>{home.founders.headingAccent[locale]}</Accent>
          </SectionTitle>
          <Founders variant="short" locale={locale} />
        </div>
      </section>

      {/* 1.8 COMMUNITIES */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <SectionTitle className="mb-10">
            {home.communities.headingLead[locale]}{" "}
            <Accent>{home.communities.headingAccent[locale]}</Accent>
          </SectionTitle>
          <ul className="flex flex-wrap justify-center gap-3 mb-10">
            {communities.map((c) => (
              <li
                key={c.name}
                className="text-[11px] uppercase tracking-[0.15em] px-4 py-2 border border-white/20 text-white font-medium rounded-full"
              >
                {c.name}
              </li>
            ))}
          </ul>
          <ArrowLink href={localePath(locale, "/communities")}>{home.communities.link[locale]}</ArrowLink>
        </div>
      </section>

      {/* 1.9 PRESS — carousel, as on the previous site */}
      <section className="py-20 lg:py-28 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="text-center mb-10 lg:mb-12">
            {home.press.headingLead[locale]} <Accent>{home.press.headingAccent[locale]}</Accent>
          </SectionTitle>
          <PressCarousel />
        </div>
      </section>

      {/* 1.10 CONTACT */}
      <ContactCTA
        locale={locale}
        title={
          <>
            {home.contact.titleLead[locale]} <Accent>{home.contact.titleAccent[locale]}</Accent>
          </>
        }
      />
    </div>
  );
}
