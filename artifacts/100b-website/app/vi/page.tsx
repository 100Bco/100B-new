import type { Metadata } from "next";
import { HomePage } from "@/components/pages/Home";
import { home } from "@/content/copy/home";
import { languageAlternates } from "@/content/locale";

export const metadata: Metadata = {
  title: home.meta.title.vi,
  description: home.meta.description.vi,
  alternates: { canonical: "/vi", languages: languageAlternates("/") },
};

export default function Page() {
  return <HomePage locale="vi" />;
}
