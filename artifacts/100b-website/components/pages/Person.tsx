import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { Accent } from "@/components/Section";
import { ContactCTA } from "@/components/ContactCTA";
import { JsonLd } from "@/components/JsonLd";
import { peopleCopy as c, type Person } from "@/content/copy/people";
import { localePath, type Locale } from "@/content/locale";
import { personSchema } from "@/content/structured-data";

/** The small gold rule and label every block on this page sits under. */
function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-10 mt-10 border-t border-border-subtle first:border-0 first:mt-0 first:pt-0">
      {/* The same face the testimonial headlines take, caps in UTM on gold,
          at a smaller size: this heading sits inside a half-width column of
          running text rather than across a full-width section. */}
      <h2 className="font-display uppercase tracking-wide text-gradient-gold text-2xl lg:text-3xl leading-[1.1] mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}

/**
 * One leader, one page. The portrait holds still on the right while the words
 * move on the left, so the face stays with the reader the whole way down.
 * Below the large breakpoint there is no second column to hold, so the
 * portrait leads and the words follow.
 */
export function PersonPage({ person, locale }: { person: Person; locale: Locale }) {
  const name = person.name[locale];
  return (
    <div className="flex flex-col">
      <JsonLd data={personSchema(person, locale)} />

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,44%)] bg-bg-dark border-b border-border-subtle">
        {/* The portrait, first on a phone and second on a desktop, where it
            becomes the column that does not move. */}
        <div className="lg:order-2">
          <div className="lg:sticky lg:top-[88px] xl:top-[96px] lg:h-[calc(100vh-88px)] xl:h-[calc(100vh-96px)]">
            <div className="relative h-[58vh] min-h-[320px] lg:h-full">
              <Image
                src={person.photo}
                alt={name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
                style={{ objectPosition: person.photoPosition ?? "center" }}
                className="object-cover"
              />
              {/* The source is a studio grey. These two hold it in the same
                  light as the rest of the site without touching the face. */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.6) 100%)",
                }}
                aria-hidden
              />
              <div
                className="absolute inset-0 pointer-events-none lg:bg-gradient-to-r lg:from-bg-dark lg:via-transparent lg:to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </div>

        {/* The words */}
        <div className="lg:order-1 px-6 lg:px-12 xl:px-16 pt-12 lg:pt-[calc(88px+3rem)] xl:pt-[calc(96px+3.5rem)] pb-20 lg:pb-28 max-w-3xl lg:max-w-none mx-auto w-full">
          <Link
            href={localePath(locale, "/about")}
            className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted hover:text-brand-gold transition-colors mb-8"
          >
            ← {c.labels.back[locale]}
          </Link>

          <h1 className="font-serif font-light text-5xl md:text-6xl xl:text-7xl leading-[1.04] text-text-heading tracking-tight">
            {name}
          </h1>

          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
            {person.title[locale]}
            <span className="mx-2 text-border-subtle">·</span>
            <span className="font-display text-base align-[-0.08em] tracking-normal">
              {person.company}
            </span>
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`mailto:${person.email}`}
              className="group inline-flex items-center gap-2 text-sm font-light text-text-body hover:text-brand-gold transition-colors"
            >
              <Mail strokeWidth={1.75} className="w-4 h-4 text-brand-gold" />
              <span className="underline underline-offset-4 decoration-brand-gold/40 group-hover:decoration-brand-gold transition-colors">
                {person.email}
              </span>
            </a>
            {person.linkedin && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-light text-text-body hover:text-brand-gold transition-colors"
              >
                <Linkedin strokeWidth={1.75} className="w-4 h-4 text-brand-gold" />
                <span className="underline underline-offset-4 decoration-brand-gold/40 group-hover:decoration-brand-gold transition-colors">
                  {c.labels.linkedin[locale]}
                </span>
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-col gap-5">
            {person.intro.map((p) => (
              <p
                key={p.en}
                className="text-base lg:text-lg font-light leading-relaxed text-text-body"
              >
                {p[locale]}
              </p>
            ))}
          </div>

          <div className="mt-14">
            <Block title={c.labels.workedWith[locale]}>
              <ul className="flex flex-col gap-2">
                {person.workedWith.map((w) => (
                  <li key={w.en} className="text-base lg:text-lg font-light text-text-heading">
                    {w[locale]}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={c.labels.expertIn[locale]}>
              <ul className="flex flex-col gap-2">
                {person.expertIn.map((e) => (
                  <li
                    key={e.en}
                    className="text-base lg:text-lg font-light leading-snug text-text-heading"
                  >
                    {e[locale]}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={c.labels.wantsYouToKnow[locale]}>
              <ul className="flex flex-col gap-4">
                {person.wantsYouToKnow.map((w) => (
                  <li
                    key={w.en}
                    className="relative pl-5 text-base lg:text-lg font-light leading-relaxed text-text-body before:absolute before:left-0 before:top-[0.62em] before:w-2 before:h-px before:bg-brand-gold"
                  >
                    {w[locale]}
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </div>
      </div>

      <ContactCTA
        locale={locale}
        email={person.email}
        title={
          <>
            {c.contact.titleLead[locale]} <Accent>{c.contact.titleAccent[locale]}</Accent>
          </>
        }
        meta={c.contact.meta[locale]}
      />
    </div>
  );
}
