/**
 * Two languages, two sets of URLs.
 *
 * English keeps the bare paths it has always had, so every indexed page, every
 * link in the press and every entry already in the sitemap still resolves.
 * Vietnamese hangs off /vi. Giving each language its own URL is what lets a
 * search engine hold both: a switch that swapped the words on one URL would
 * leave one of the two languages with no address of its own.
 */
export const locales = ["en", "vi"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** What the switcher in the nav calls each one. */
export const localeNames: Record<Locale, string> = {
  en: "EN",
  vi: "VI",
};

/** The full name, for the label a screen reader reads off the flag. */
export const localeLabels: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
};

/** The BCP 47 tag for <html lang> and for hreflang. */
export const localeTags: Record<Locale, string> = {
  en: "en",
  vi: "vi",
};

/** Which language a path belongs to. */
export function localeFromPath(pathname: string): Locale {
  return pathname === "/vi" || pathname.startsWith("/vi/") ? "vi" : "en";
}

/** The path a page lives at in a given language. `route` is the English one. */
export function localePath(locale: Locale, route: string): string {
  const clean = route === "/" ? "" : route;
  return locale === "vi" ? `/vi${clean}` || "/vi" : clean || "/";
}

/** The same page in the other language, for the switcher. */
export function swapLocale(pathname: string): string {
  if (localeFromPath(pathname) === "vi") {
    const rest = pathname.replace(/^\/vi/, "");
    return rest || "/";
  }
  return pathname === "/" ? "/vi" : `/vi${pathname}`;
}

/** hreflang for a page's metadata, given its English route. */
export function languageAlternates(route: string) {
  return {
    en: localePath("en", route),
    vi: localePath("vi", route),
  };
}

/** A dictionary that carries one value per language. */
export type Dict<T> = Record<Locale, T>;
