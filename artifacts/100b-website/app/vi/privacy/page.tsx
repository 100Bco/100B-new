import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/pages/Legal";
import { getLegalDoc } from "@/content/copy/legal";
import { languageAlternates } from "@/content/locale";

const doc = getLegalDoc("privacy");

export const metadata: Metadata = {
  title: doc?.meta.title.vi,
  description: doc?.meta.description.vi,
  alternates: { canonical: "/vi/privacy", languages: languageAlternates("/privacy") },
};

export default function Page() {
  if (!doc) notFound();
  return <LegalPage doc={doc} locale="vi" />;
}
