import type { Metadata } from "next";
import { ContainerClubPage } from "@/components/pages/ContainerClub";
import { containerClubCopy } from "@/content/copy/container-club";
import { languageAlternates } from "@/content/locale";

export const metadata: Metadata = {
  title: containerClubCopy.meta.title.vi,
  description: containerClubCopy.meta.description.vi,
  alternates: { canonical: "/vi/container-club", languages: languageAlternates("/container-club") },
};

export default function Page() {
  return <ContainerClubPage locale="vi" />;
}
