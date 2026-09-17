import type { Metadata } from "next";
import { EnterVietnamPage } from "@/components/pages/EnterVietnam";
import { enterVietnamCopy } from "@/content/copy/enter-vietnam";
import { languageAlternates } from "@/content/locale";

export const metadata: Metadata = {
  title: enterVietnamCopy.meta.title.vi,
  description: enterVietnamCopy.meta.description.vi,
  alternates: { canonical: "/vi/enter-vietnam", languages: languageAlternates("/enter-vietnam") },
};

export default function Page() {
  return <EnterVietnamPage locale="vi" />;
}
