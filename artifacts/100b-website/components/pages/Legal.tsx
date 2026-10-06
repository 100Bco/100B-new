import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { Accent } from "@/components/Section";
import { CONTACT_EMAIL } from "@/content/site";
import { legalCopy as c, legalDocs, type LegalDoc } from "@/content/copy/legal";
import { localePath, type Locale } from "@/content/locale";

/**
 * One reading page for all three legal documents. A single measure, no
 * pictures, nothing to click through: a policy is read in a hurry by someone
 * looking for one clause, so the headings do the work.
 *
 * The section headings take the UTM caps the rest of the site gives an inner
 * heading, one step down, because a document carries ten of them where a
 * section carries one.
 */
export function LegalPage({ doc, locale }: { doc: LegalDoc; locale: Locale }) {
  return (
    <div className="flex flex-col">
      <article className="bg-bg-dark border-b border-border-subtle pt-[calc(88px+3rem)] lg:pt-[calc(96px+4rem)] pb-20 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-text-heading tracking-tight">
            {doc.title[locale]}
          </h1>
          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
            {c.updated[locale]}
          </p>
          <p className="mt-8 text-base lg:text-lg font-light leading-relaxed text-text-body">
            {doc.lead[locale]}
          </p>

          {doc.sections.map((s) => (
            <section
              key={s.heading.en}
              className="pt-9 mt-9 border-t border-border-subtle"
            >
              <h2 className="font-display uppercase tracking-wide text-gradient-gold text-lg lg:text-xl leading-[1.2] mb-4">
                {s.heading[locale]}
              </h2>
              {s.body?.map((p) => (
                <p
                  key={p.en}
                  className="text-base font-light leading-relaxed text-text-body mb-4 last:mb-0"
                >
                  {p[locale]}
                </p>
              ))}
              {s.items && (
                <ul className="flex flex-col gap-3 mt-4">
                  {s.items.map((i) => (
                    <li
                      key={i.en}
                      className="relative pl-[18px] text-base font-light leading-relaxed text-text-body before:absolute before:left-0 before:top-[0.68em] before:w-[5px] before:h-[5px] before:rounded-full before:bg-brand-gold"
                    >
                      {i[locale]}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="pt-9 mt-9 border-t border-border-subtle flex flex-col gap-5">
            <p className="text-base font-light leading-relaxed text-text-body">
              {c.contactLead[locale]}{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-text-heading underline underline-offset-4 decoration-brand-gold/40 hover:text-brand-gold hover:decoration-brand-gold transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            {/* The other two documents, since whoever reads one often wants
                the next. */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {legalDocs
                .filter((d) => d.slug !== doc.slug)
                .map((d) => (
                  <Link
                    key={d.slug}
                    href={localePath(locale, `/${d.slug}`)}
                    className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted hover:text-brand-gold transition-colors"
                  >
                    {d.title[locale]}
                  </Link>
                ))}
            </nav>
          </div>
        </div>
      </article>

      <ContactCTA
        locale={locale}
        title={
          <>
            {c.cta.titleLead[locale]} <Accent>{c.cta.titleAccent[locale]}</Accent>
          </>
        }
      />
    </div>
  );
}
