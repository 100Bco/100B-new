import type { Metadata } from "next";
import { EcosystemPage } from "@/components/pages/Ecosystem";
import { ecosystemCopy } from "@/content/copy/ecosystem";
import { languageAlternates } from "@/content/locale";

export const metadata: Metadata = {
  title: ecosystemCopy.meta.title.vi,
  description: ecosystemCopy.meta.description.vi,
  alternates: { canonical: "/vi/ecosystem", languages: languageAlternates("/ecosystem") },
};

export default function Page() {
  return <EcosystemPage locale="vi" />;
}
