import type { Metadata } from "next";
import { GoGlobalPage } from "@/components/pages/GoGlobal";
import { goGlobalCopy } from "@/content/copy/go-global";
import { languageAlternates } from "@/content/locale";

export const metadata: Metadata = {
  title: goGlobalCopy.meta.title.vi,
  description: goGlobalCopy.meta.description.vi,
  alternates: { canonical: "/vi/go-global", languages: languageAlternates("/go-global") },
};

export default function Page() {
  return <GoGlobalPage locale="vi" />;
}
