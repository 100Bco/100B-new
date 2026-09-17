"use client";

import { useEffect } from "react";
import type { Locale } from "@/content/locale";
import { localeTags } from "@/content/locale";

/**
 * Sets <html lang> for the Vietnamese pages.
 *
 * English keeps the bare paths, so the tree has no [locale] segment and the
 * root layout, which owns the <html> tag, never learns which language it is
 * rendering. The Vietnamese layout therefore sets the attribute itself. What
 * search engines read for language pairing is the hreflang in the metadata and
 * the sitemap, both of which are server-rendered; this is for screen readers
 * and for the browser's own hyphenation and spellcheck.
 */
export function SetLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = localeTags[locale];
    return () => {
      document.documentElement.lang = previous;
    };
  }, [locale]);
  return null;
}
