import type { Metadata } from "next";
import { CommunitiesPage } from "@/components/pages/Communities";
import { communitiesCopy } from "@/content/copy/communities";
import { languageAlternates } from "@/content/locale";

export const metadata: Metadata = {
  title: communitiesCopy.meta.title.vi,
  description: communitiesCopy.meta.description.vi,
  alternates: { canonical: "/vi/communities", languages: languageAlternates("/communities") },
};

export default function Page() {
  return <CommunitiesPage locale="vi" />;
}
