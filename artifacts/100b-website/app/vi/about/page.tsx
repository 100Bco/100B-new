import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/About";
import { aboutCopy } from "@/content/copy/about";
import { languageAlternates } from "@/content/locale";

export const metadata: Metadata = {
  title: aboutCopy.meta.title.vi,
  description: aboutCopy.meta.description.vi,
  alternates: { canonical: "/vi/about", languages: languageAlternates("/about") },
};

export default function Page() {
  return <AboutPage locale="vi" />;
}
