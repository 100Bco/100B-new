import {
  Accent,
  ArrowLink,
  Lead,
  PrimaryButton,
  SectionTitle,
} from "@/components/Section";
import { StatGrid, type Stat } from "@/components/StatGrid";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { DistributionShift } from "@/components/DistributionShift";
import logoSpecMate from "@assets/LOGO SPECMATA-04.png";
import { PhotoCarousel, type TripPhoto } from "@/components/PhotoCarousel";
import { gallerySchema } from "@/content/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { containerClubCopy as cc } from "@/content/copy/container-club";
import { localePath, type Locale } from "@/content/locale";
import vdAnCuong from "@assets/vietnam-direct/an-cuong.jpg";
import vdBmWindows from "@assets/vietnam-direct/bm-windows.jpg";
import vdDaiDung from "@assets/vietnam-direct/dai-dung.jpg";
import vdAaCorporation from "@assets/vietnam-direct/aa-corporation.jpg";
import vdEurowindow from "@assets/vietnam-direct/eurowindow.jpg";
import vdWoodsland from "@assets/vietnam-direct/woodsland.jpg";
import vdAmyGrupo from "@assets/vietnam-direct/amy-grupo.jpg";
import vdSlabstone from "@assets/vietnam-direct/slabstone.jpg";
import vdFactoryVisit from "@assets/vietnam-direct/factory-visit.jpg";

const opportunityFigures: Omit<Stat, "label">[] = [
  { value: 20, suffix: "-25%" },
  { value: 17.5, prefix: "$", suffix: "B", decimals: 1 },
  { value: 3, suffix: "-4×" },
  { value: 2, suffix: "nd" },
];

/* The nine factory floors, in the order the factory list runs. Each frame
 * names its factory; the programme line under them stays constant. */
const vietnamDirectPhotos: TripPhoto[] = [
  { src: vdAnCuong.src, label: "An Cuong", caption: "Vietnam Direct 2026" },
  { src: vdBmWindows.src, label: "BM Windows", caption: "Vietnam Direct 2026" },
  { src: vdDaiDung.src, label: "Dai Dung", caption: "Vietnam Direct 2026" },
  { src: vdAaCorporation.src, label: "AA Corporation", caption: "Vietnam Direct 2026" },
  { src: vdEurowindow.src, label: "Eurowindow", caption: "Vietnam Direct 2026" },
  { src: vdWoodsland.src, label: "Woodsland", caption: "Vietnam Direct 2026" },
  { src: vdAmyGrupo.src, label: "Amy Grupo", caption: "Vietnam Direct 2026" },
  { src: vdSlabstone.src, label: "Slabstone", caption: "Vietnam Direct 2026" },
  
];


export function ContainerClubPage({ locale }: { locale: Locale }) {
  const opportunityStats: Stat[] = opportunityFigures.map((f, i) => ({
    ...f,
    label: cc.opportunity.labels[i][locale],
  }));
  const whatWeDo = cc.whatWeDo.items.map((w) => ({ title: w.title[locale], line: w.line[locale] }));
  const factories = cc.trip.factoryNames.map((f) => f[locale]);
  const repeats = cc.repeats.items.map((r) => ({ title: r.title[locale], line: r.line[locale] }));
  const network = cc.network.items.map((n) => n[locale]);
  const tripPhotos: TripPhoto[] = [
    ...vietnamDirectPhotos,
    { src: vdFactoryVisit.src, label: cc.trip.factoryVisit[locale], caption: "Vietnam Direct 2026" },
  ];
  return (
    <div className="flex flex-col">
      <JsonLd data={gallerySchema("Vietnam Direct 2026", tripPhotos)} />

      {/* 4.1 HERO */}
      <PageHero
        locale={locale}
        titleScale={
          locale === "vi"
            ? "md:text-[min(60px,calc((100vw-4rem)/20.1))]"
            : "md:text-7xl lg:text-[96px]"
        }
        videoId="9hbymhvynw"
        title={
          <>
            <span className="block">{cc.hero.line1[locale]}</span>
            <span className="block">
              <Accent>{cc.hero.line2[locale]}</Accent>
            </span>
          </>
        }
        lead={cc.hero.lead[locale]}
        meta={
          <>
            <span>{cc.hero.meta[locale]}</span>
            <span className="w-px h-3 bg-border-subtle hidden sm:inline-block" aria-hidden />
            <span>3-5% commission</span>
          </>
        }
      />

      {/* 4.2 THE MODEL. Held to one screen: the diagram is the point, and it
          was being pushed off the bottom by the air around it. */}
      <section className="py-14 lg:py-16 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-5">
            <span className="font-display">3%</span> {cc.commission.to[locale]}{" "}
            <span className="font-display">5%</span> <Accent>{cc.commission.word[locale]}</Accent>
          </SectionTitle>
          <Lead className="mb-8 lg:mb-10 max-w-3xl">
            {cc.commission.lead[locale]}
          </Lead>

          <DistributionShift locale={locale} />

          <p className="mt-8 lg:mt-10 text-center text-sm font-light text-text-body">
            {cc.commission.note[locale]}
          </p>
        </div>
      </section>

      {/* 4.3 THE OPPORTUNITY */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-6 max-w-4xl">
            {cc.opportunity.headingLead[locale]} <Accent>{cc.opportunity.headingAccent[locale]}</Accent>
          </SectionTitle>
          <Lead className="mb-12 lg:mb-16 max-w-3xl">
            {cc.opportunity.lead[locale]}
          </Lead>
          <StatGrid stats={opportunityStats} columns={4} size="md" />
        </div>
      </section>

      {/* 4.4 WHAT WE DO */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative mt-10">
            <div className="absolute top-[20px] sm:top-[23px] lg:top-[26px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
            <ol className="grid grid-cols-5 gap-1.5 sm:gap-3 lg:gap-4 relative">
              {whatWeDo.map((item, i) => (
                <li key={item.title} className="flex flex-col items-center text-center gap-2.5 lg:gap-4">
                  <div className="w-10 h-10 sm:w-[46px] sm:h-[46px] lg:w-[52px] lg:h-[52px] rounded-full bg-bg-dark border border-brand-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gradient-gold text-sm lg:text-lg leading-none">
                      0{i + 1}
                    </span>
                  </div>
                  {/* Two of the five titles run to two lines, so every title
                      reserves two and the descriptions under them start on
                      one line rather than five different ones. */}
                  <h3 className="font-sans font-bold text-[11px] sm:text-sm lg:text-xl text-text-heading leading-snug sm:min-h-[2.75em]">
                    {item.title}
                  </h3>
                  <p className="hidden sm:block text-xs lg:text-sm font-light leading-relaxed text-text-body">
                    {item.line}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-10 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-text-muted font-semibold">
            <span>{cc.whatWeDo.factoryFloor[locale]}</span>
            <span>{cc.whatWeDo.jobSite[locale]}</span>
          </div>
        </div>
      </section>

      {/* 4.5 VIETNAM DIRECT 2026 */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-10">
            {cc.trip.headingLead[locale]} <Accent>{cc.trip.headingAccent[locale]}</Accent>
          </SectionTitle>

          {/* The story reads across the whole section; only the route and the
              photographs split left and right underneath it. */}
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 text-base lg:text-lg font-light leading-relaxed text-text-body mb-12 lg:mb-14">
            <p>
              {cc.trip.para1[locale]}
            </p>
            <p>
              {cc.trip.hostedWith[locale]}{" "}
              <a
                href="https://ltcommercialgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-heading underline underline-offset-4 decoration-white/30 hover:decoration-brand-gold hover:text-brand-gold transition-colors"
              >
                LT Commercial Group
              </a>
              .
            </p>
            <p className="text-sm font-light text-text-body">
              {cc.trip.certs[locale]}
            </p>
          </div>

          {/* The route on the left, the photographs on the right, the same
              shape Access Vietnam uses. */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-end mb-10">
            {/* The carousel hangs its dots below the frame, so the left column
                is inset by exactly that much: the route card's bottom edge
                then sits level with the photograph's, not with the dots. */}
            <div className="flex flex-col gap-7 lg:pb-[1.625rem]">
              {/* Route: HCMC to Hanoi */}
              <div className="bg-bg-card rounded-3xl p-8 lg:p-10 border border-border-subtle flex flex-col gap-8">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                  {cc.trip.route[locale]}
                </span>
                <div className="relative flex items-start justify-between">
                  {/* The connector sits on the dots' own centre line and runs
                      from the first dot to the last, so nothing crosses the
                      city names underneath. */}
                  <div className="absolute left-[16.667%] right-[16.667%] top-3 -translate-y-1/2 h-px bg-gradient-to-r from-brand-gold/60 via-brand-gold/30 to-brand-gold/60" />
                  {[
                    ...cc.trip.stops.map((s) => ({ city: s.city[locale], note: s.note[locale] })),
                  ].map((stop, i) => (
                    <div key={stop.city} className="relative flex flex-col items-center gap-3 text-center w-1/3">
                      <div
                        className={`w-6 h-6 rounded-full border-[4px] border-bg-card shrink-0 ${
                          i === 1 ? "bg-white/30" : "bg-brand-gold shadow-[0_0_15px_rgba(195,163,116,0.5)]"
                        }`}
                      />
                      {/* The middle name runs to two lines, so every name
                          reserves two and the three notes sit on one line. */}
                      <span className="font-sans font-bold text-sm text-text-heading leading-snug min-h-[2.75em]">
                        {stop.city}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-text-muted">
                        {stop.note}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-6 border-t border-border-subtle pt-6">
                  <div className="flex flex-col items-center text-center gap-1">
                    <span className="font-display text-4xl text-gradient-gold leading-none">14</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                      {cc.trip.factoriesStat[locale]}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1">
                    <span className="font-display text-4xl text-gradient-gold leading-none">2</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                      {cc.trip.citiesStat[locale]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <PhotoCarousel
              photos={tripPhotos}
              captionClassName="font-display uppercase tracking-wide text-gradient-gold text-lg lg:text-xl leading-snug"
            />
          </div>

          <div className="flex justify-center mb-12">
            <ArrowLink href="https://vietnamdirect2026factory.100b.co/" external>
              {cc.trip.fullProgram[locale]}
            </ArrowLink>
          </div>

          <p className="text-center text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-6">
            {cc.trip.factoriesHeading[locale]}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-3">
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
        {/* Centred on its own axis, the button included: the heading was
            already centred and everything under it was ranged left, which
            left the section reading as two different layouts. */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <SectionTitle className="mb-10 lg:mb-12 max-w-4xl">
            {cc.repeats.headingLead[locale]} <Accent>{cc.repeats.headingAccent[locale]}</Accent>
          </SectionTitle>
          <p className="text-base lg:text-lg font-light leading-relaxed text-text-body mb-10 max-w-3xl text-center">
            {cc.repeats.intro[locale]}
          </p>

          <div className="w-full max-w-4xl grid grid-cols-2 gap-x-6 md:gap-x-12 border-t border-border-subtle mb-12">
            {repeats.map((r) => (
              <div
                key={r.title}
                className="py-6 border-b border-border-subtle flex flex-col items-center text-center gap-1"
              >
                <h3 className="font-sans font-bold text-[15px] sm:text-lg lg:text-xl text-text-heading">{r.title}</h3>
                <p className="text-[13px] sm:text-sm lg:text-base font-light text-text-body">{r.line}</p>
              </div>
            ))}
          </div>
          <PrimaryButton>{cc.repeats.cta[locale]}</PrimaryButton>
        </div>
      </section>

      {/* 4.7 SPECMATE */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-bg-card rounded-3xl p-8 lg:p-12 border border-border-subtle grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center">
            <span className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold rounded-l-3xl" />
            <img
              src={logoSpecMate.src}
              alt="SpecMate"
              className="h-9 lg:h-11 w-auto object-contain"
            />
            <div className="flex flex-col gap-3">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                {cc.specMate.kicker[locale]}
              </p>
              <p className="text-base lg:text-lg font-light leading-relaxed text-text-body">
                {cc.specMate.body[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.8 THE NETWORK */}
      <section className="py-20 lg:py-28 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <SectionTitle className="mb-6">
            {cc.network.headingLead[locale]} <Accent>{cc.network.headingAccent[locale]}</Accent>
          </SectionTitle>
          <Lead className="mb-12">
            <strong className="font-semibold text-text-heading">{cc.network.vetted[locale]}</strong>{" "}
            {cc.network.vettedRest[locale]}
          </Lead>

          <ul className="w-full max-w-3xl grid grid-cols-2 gap-x-5 sm:gap-x-10 border-t border-border-subtle">
            {network.map((item) => (
              <li
                key={item}
                className="py-4 sm:py-5 border-b border-border-subtle flex items-center gap-3 sm:gap-4 font-sans text-[13px] sm:text-base lg:text-lg font-light text-text-body"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(195,163,116,0.8)] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <ArrowLink href={localePath(locale, "/communities")}>{cc.network.link[locale]}</ArrowLink>
          </div>
        </div>
      </section>

      {/* 4.9 CTA */}
      <ContactCTA
        locale={locale}
        title={
          <>
            {cc.contact.titleLead[locale]} <Accent>{cc.contact.titleAccent[locale]}</Accent>
          </>
        }
      />
    </div>
  );
}
