import type { Locale } from "./locale";
import * as en from "./site";
import * as vi from "./site.vi";

/**
 * The site's data in one language. The Vietnamese module lays its words over
 * the English rows, so both sides always hold the same pictures, links and
 * order, and only the text differs.
 */
export function getSite(locale: Locale) {
  const src = locale === "vi" ? vi : en;
  return {
    navLinks: src.navLinks,
    footerLinks: src.footerLinks,
    founderTestimonials: src.founderTestimonials,
    partnerTestimonials: src.partnerTestimonials,
    delegateTestimonials: src.delegateTestimonials,
    companies: src.companies,
    founders: src.founders,
    communities: src.communities,
    programs: src.programs,
    pressItems: src.pressItems,
    CONTACT_EMAIL: en.CONTACT_EMAIL,
  };
}

export type Site = ReturnType<typeof getSite>;
