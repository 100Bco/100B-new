"use client";

import { usePathname } from "next/navigation";
import { localeFromPath, type Locale } from "@/content/locale";

/**
 * Which language the page being viewed is in, read off the URL.
 *
 * The chrome, the carousels and the two prose components sit under the root
 * layout, which never sees a route parameter, so the path is what tells them
 * where they are. Anything rendered on the server takes the locale as a prop
 * from the page instead.
 */
export function useLocale(): Locale {
  return localeFromPath(usePathname());
}
