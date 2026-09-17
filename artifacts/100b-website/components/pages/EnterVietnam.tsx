import { Landmark, Factory, Banknote, Users } from "lucide-react";
import {
  Accent,
  ArrowLink,
  Lead,
  PrimaryButton,
  SectionTitle,
} from "@/components/Section";
import { StatGrid, type Stat } from "@/components/StatGrid";
import { IconCard } from "@/components/IconCard";
import { NumberedCard } from "@/components/NumberedCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PhotoCarousel, type TripPhoto } from "@/components/PhotoCarousel";
import delegationHanoi from "@assets/trip/delegation-hanoi.jpg";
import cityOfHanoi from "@assets/trip/city-of-hanoi.jpg";
import ministryScience from "@assets/trip/ministry-of-science-and-technology.jpg";
import mekongCapital from "@assets/trip/mekong-capital.jpg";
import earthVc from "@assets/trip/earth-vc.jpg";
import coolmate from "@assets/trip/coolmate.jpg";
import bca from "@assets/trip/bca.jpg";
import nic from "@assets/trip/national-innovation-center.jpg";
import fulbright from "@assets/trip/fulbright.jpg";
import mindx from "@assets/trip/mindx.jpg";
import abb from "@assets/trip/abb.jpg";
import vinmake from "@assets/trip/vinmake.jpg";
import metub from "@assets/trip/metub.jpg";
import dls from "@assets/trip/dls.jpg";
import { getSite } from "@/content/get-site";
import { enterVietnamCopy as v } from "@/content/copy/enter-vietnam";
import { ui } from "@/content/copy/ui";
import type { Locale } from "@/content/locale";
import { gallerySchema } from "@/content/structured-data";
import { JsonLd } from "@/components/JsonLd";

const vietnamFigures: Omit<Stat, "label">[] = [
  { value: 514, prefix: "$", suffix: "B" },
  { value: 8.02, suffix: "%", decimals: 2 },
  { value: 38.42, prefix: "$", suffix: "B", decimals: 2 },
  { value: 475, prefix: "$", suffix: "B" },
  { value: 102.3, suffix: "M", decimals: 1 },
  { value: 1.1, prefix: "$", suffix: "T", decimals: 1 },
];

const whoWeMet = [
  "AmCham Vietnam",
  "National Data Center",
  "City of Hanoi",
  "National Innovation Center",
  "Ministry of Science and Technology",
  "Do Ventures",
  "Mekong Capital",
  "AVV",
  "Earth VC",
  "Fulbright University Vietnam",
  "Coolmate",
  "MindX",
  "ABB Capital",
  "Vinmake",
  "Metub",
  "DLS Incorporation",
  "BCA and BNI Vietnam",
];

/* The week in order: the opening room, then government, capital, education,
 * the operators building, and the network that closed it. */
const photoRows = [
  { src: delegationHanoi.src, group: "opening" as const },
  { src: cityOfHanoi.src, group: "government" as const, caption: "City of Hanoi" },
  { src: ministryScience.src, group: "government" as const, caption: "Ministry of Science and Technology" },
  { src: nic.src, group: "government" as const, caption: "National Innovation Center" },
  { src: mekongCapital.src, group: "capital" as const, caption: "Mekong Capital" },
  { src: earthVc.src, group: "capital" as const, caption: "Earth VC" },
  { src: abb.src, group: "capital" as const, caption: "ABB Capital" },
  { src: fulbright.src, group: "education" as const, caption: "Fulbright University Vietnam" },
  { src: mindx.src, group: "education" as const, caption: "MindX" },
  { src: coolmate.src, group: "operators" as const, caption: "Coolmate" },
  { src: vinmake.src, group: "operators" as const, caption: "Vinmake" },
  { src: metub.src, group: "operators" as const, caption: "Metub" },
  { src: dls.src, group: "operators" as const, caption: "DLS Incorporation" },
  { src: bca.src, group: "network" as const, caption: "BCA and BNI Vietnam" },
];


const buildIcons = [Landmark, Factory, Banknote, Users];

export function EnterVietnamPage({ locale }: { locale: Locale }) {
  const { delegateTestimonials } = getSite(locale);
  const vietnamStats: Stat[] = vietnamFigures.map((f, i) => ({
    ...f,
    label: v.stats.labels[i][locale],
  }));
  const whatWeBuild = v.build.items.map((b, i) => ({
    icon: buildIcons[i],
    title: b.title[locale],
    line: b.line[locale],
  }));
  const orgName = (name: string) => v.orgs[name]?.[locale] ?? name;
  const whoWeMetNames = whoWeMet.map(orgName);
  const tripPhotos: TripPhoto[] = photoRows.map((p) =>
    p.group === "opening"
      ? {
          src: p.src,
          label: v.photos.opening.label[locale],
          caption: v.photos.opening.caption[locale],
        }
      : {
          src: p.src,
          label: v.photos[p.group][locale],
          caption: orgName(p.caption!),
        },
  );
  const whoThisIsFor = v.forWhom.items.map((w) => ({
    title: w.title[locale],
    line: w.line[locale],
  }));
  return (
    <div className="flex flex-col">
      <JsonLd data={gallerySchema("Access Vietnam 2026", tripPhotos)} />

      {/* 3.1 HERO */}
      <PageHero
        videoId="t0jdqo7des"
        title={
          <>
            <span className="block">{v.hero.line1[locale]}</span>
            <span className="block">
              <Accent>{v.hero.line2[locale]}</Accent>
            </span>
          </>
        }
        lead={v.hero.lead[locale]}
        actions={<PrimaryButton>{ui.nav.cta[locale]}</PrimaryButton>}
        meta={
          <>
            <span>{v.hero.metaCities[locale]}</span>
            <span className="w-px h-3 bg-border-subtle hidden sm:inline-block" aria-hidden />
            <span>{v.hero.metaThemes[locale]}</span>
          </>
        }
      />

      {/* 3.2 WHY VIETNAM */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mt-4 mb-10">
            <StatGrid stats={vietnamStats} columns={3} />
          </div>
          <p className="font-sans font-light text-base lg:text-lg text-text-body leading-relaxed max-w-4xl mx-auto text-center">
            {v.stats.footnote[locale]}
          </p>
        </div>
      </section>

      {/* 3.3 WHAT WE BUILD */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-12 lg:mb-16 max-w-4xl">
            {v.build.headingLead[locale]} <Accent>{v.build.headingAccent[locale]}</Accent>
          </SectionTitle>

          <p className="text-base lg:text-lg font-light leading-relaxed text-text-body max-w-3xl mb-12">
            {v.build.intro[locale]}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12">
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
            {v.build.outro[locale]}
          </p>
        </div>
      </section>

      {/* 3.4 ACCESS VIETNAM 2026 — the story and the numbers beside the
          photography, the rooms and the link centred underneath both. */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <SectionTitle className="mb-10 lg:mb-12">
            {v.trip.headingLead[locale]} <Accent>{v.trip.headingAccent[locale]}</Accent>
          </SectionTitle>

          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center mb-14">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-4 text-base lg:text-lg font-light leading-relaxed text-text-body">
                <p>
                  {v.trip.para1[locale]}
                </p>
                <p>
                  {v.trip.para2[locale]}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
                {[
                  { n: "18", l: v.trip.delegates[locale] },
                  { n: "8", l: v.trip.days[locale] },
                  { n: "2", l: v.trip.cities[locale] },
                ].map((s) => (
                  <div key={s.l} className="bg-bg-card py-6 flex flex-col gap-1.5 text-center">
                    <span className="font-display text-3xl lg:text-4xl text-gradient-gold leading-none">
                      {s.n}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <PhotoCarousel photos={tripPhotos} />
          </div>

          <div className="w-full max-w-4xl flex flex-col items-center text-center gap-8">
            <div className="w-full">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-4">
                {v.trip.whoWeMet[locale]}
              </p>
              <ul className="flex flex-wrap justify-center gap-2">
                {whoWeMetNames.map((org) => (
                  <li
                    key={org}
                    className="text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 border border-white/15 text-white/90 font-medium rounded-full"
                  >
                    {org}
                  </li>
                ))}
              </ul>
            </div>

            <ArrowLink href="https://austin2vietnam.100b.co/" external>
              {v.trip.fullProgram[locale]}
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* 3.5 WHAT DELEGATES SAID. About the trip, not the company. */}
      <section className="min-h-screen lg:h-screen flex flex-col bg-bg-dark border-b border-border-subtle overflow-hidden py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full flex-1 flex flex-col">
          <div className="shrink-0">
            <SectionTitle className="mb-8 lg:mb-10">
              {v.proof.headingLead[locale]} <Accent>{v.proof.headingAccent[locale]}</Accent>
            </SectionTitle>
          </div>
          <TestimonialCarousel
            groups={[{ label: v.proof.groupLabel[locale], items: delegateTestimonials }]}
          />
        </div>
      </section>

      {/* 3.6 WHO THIS IS FOR */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <SectionTitle className="mb-12 lg:mb-16 max-w-4xl">
            <span className="block">{v.forWhom.line1[locale]}</span>
            <span className="block">
              <Accent>{v.forWhom.line2[locale]}</Accent>
            </span>
          </SectionTitle>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-14">
            {whoThisIsFor.map((w, i) => (
              <NumberedCard key={w.title} index={i + 1} title={w.title}>
                {w.line}
              </NumberedCard>
            ))}
          </div>

          <p className="font-serif text-2xl lg:text-3xl text-text-heading leading-snug max-w-4xl mb-10 mx-auto text-center">
            <span className="block">{v.forWhom.closingLead[locale]}</span>
            <span className="block">
              <em className="italic text-gradient-gold">{v.forWhom.closingAccent[locale]}</em>
            </span>
          </p>
          <PrimaryButton>{v.forWhom.cta[locale]}</PrimaryButton>
        </div>
      </section>

      {/* 3.7 BEYOND THE TRIP */}
      <section className="py-20 lg:py-28 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <SectionTitle className="mb-12">
            {v.beyond.headingLead[locale]}{" "}
            <Accent>{v.beyond.headingAccent[locale]}</Accent>
          </SectionTitle>

          <ul className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-x-8 border-t border-border-subtle">
            {v.beyond.items.map((item) => item[locale]).map(
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
        locale={locale}
        title={
          <>
            {v.contact.titleLead[locale]} <Accent>{v.contact.titleAccent[locale]}</Accent>
          </>
        }
      />
    </div>
  );
}
