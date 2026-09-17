import type { MetadataRoute } from "next";
import { localePath, locales, localeTags } from "@/content/locale";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://100b.co";

/**
 * Both languages, and each entry pointing at its counterpart. Listing the
 * alternates here as well as in the pages' own metadata is what tells Google
 * that /go-global and /vi/go-global are one page in two languages rather than
 * two pages saying the same thing.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1.0 },
    { path: "/go-global", priority: 0.9 },
    { path: "/enter-vietnam", priority: 0.9 },
    { path: "/container-club", priority: 0.9 },
    { path: "/ecosystem", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/communities", priority: 0.6 },
  ];

  const languages = (path: string) =>
    Object.fromEntries(
      locales.map((l) => [localeTags[l], `${SITE_URL}${localePath(l, path)}`]),
    );

  return pages.flatMap((p) =>
    locales.map((l) => ({
      url: `${SITE_URL}${localePath(l, p.path)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      // The Vietnamese set sits just below its English counterpart rather than
      // competing with it for the same crawl budget.
      priority: l === "en" ? p.priority : Math.max(0.1, p.priority - 0.1),
      alternates: { languages: languages(p.path) },
    })),
  );
}
