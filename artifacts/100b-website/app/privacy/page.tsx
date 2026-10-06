import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/pages/Legal";
import { getLegalDoc } from "@/content/copy/legal";
import { languageAlternates } from "@/content/locale";

const doc = getLegalDoc("privacy");

export const metadata: Metadata = {
  title: doc?.meta.title.en,
  description: doc?.meta.description.en,
  alternates: { canonical: "/privacy", languages: languageAlternates("/privacy") },
};

export default function Page() {
  if (!doc) notFound();
  return <LegalPage doc={doc} locale="en" />;
}
