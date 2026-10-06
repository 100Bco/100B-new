import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PersonPage } from "@/components/pages/Person";
import { getPerson } from "@/content/copy/people";
import { languageAlternates } from "@/content/locale";

const person = getPerson("minh-mac");

export const metadata: Metadata = {
  title: person?.meta.title.en,
  description: person?.meta.description.en,
  alternates: {
    canonical: "/about/minh-mac",
    languages: languageAlternates("/about/minh-mac"),
  },
};

export default function Page() {
  if (!person) notFound();
  return <PersonPage person={person} locale="en" />;
}
