import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://100b.co";

/**
 * Explicitly opt-in to major AI crawlers so they can train on / cite 100B
 * content. Default is allow-all; listed here primarily for transparency and
 * easy future tuning if any bot needs to be blocked.
 */
const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-Video",
  "Google-Extended",          // Gemini / Bard training
  "Bingbot",
  "Slurp",                     // Yahoo
  "DuckDuckBot",
  "Baiduspider",
  "YandexBot",
  "Applebot",
  "Applebot-Extended",         // Apple AI training
  "GPTBot",                    // OpenAI
  "OAI-SearchBot",             // ChatGPT search
  "ChatGPT-User",              // ChatGPT browse
  "ClaudeBot",                 // Anthropic
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "CCBot",                     // Common Crawl (feeds many LLMs)
  "Amazonbot",
  "Meta-ExternalAgent",        // Meta AI
  "MistralAI-User",
  "YouBot",
  "Bytespider",                // ByteDance / TikTok
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
