import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://100b.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1.0 },
    { path: "/go-global", priority: 0.9 },
    { path: "/enter-vietnam", priority: 0.9 },
    { path: "/container-club", priority: 0.9 },
    { path: "/ecosystem", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/communities", priority: 0.6 },
  ];
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
