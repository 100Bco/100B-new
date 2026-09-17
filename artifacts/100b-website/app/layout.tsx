import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter } from "next/font/google";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

/* The three faces, self-hosted. Loading them from fonts.googleapis.com with an
   @import meant the browser had to fetch globals.css before it even learned a
   font existed, two round trips in series before any text could paint. Next
   inlines the @font-face rules and preloads the files from our own origin
   instead. The vietnamese subset is not optional here: the founders' and the
   testimonial names carry diacritics, and without it they fall back to a
   system face mid-sentence. */
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const utm = localFont({
  src: "../public/fonts/UTM-Classizism-Antiqua.ttf",
  variable: "--font-utm",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://100b.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "100B | Beyond Borders",
    template: "%s | 100B Beyond Borders",
  },
  description:
    "Vietnamese brands go out. The world comes in. 100B works both directions: capital, brands, and goods between Vietnam and the world.",
  keywords: [
    "100B",
    "100B Beyond Borders",
    "Vietnamese brands go global",
    "enter Vietnam",
    "Vietnam delegation",
    "direct-to-factory sourcing",
    "Container Club",
    "Vietnam US entity",
    "Austin Hanoi Ho Chi Minh City",
  ],
  authors: [{ name: "100B Beyond Borders" }],
  creator: "100B",
  publisher: "100B",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "100B Beyond Borders",
    title: "100B | Beyond Borders",
    description:
      "Vietnamese brands go out. The world comes in. We work both directions. Capital, brands, and goods.",
    url: SITE_URL,
    images: [
      {
        url: "/og-100b.jpg?v=2",
        width: 2400,
        height: 1260,
        alt: "100B Beyond Borders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100B | Beyond Borders",
    description:
      "Vietnamese brands go out. The world comes in.",
    images: ["/og-100b.jpg?v=2"],
  },
  icons: {
    icon: [{ url: "/Favicon 100B.png", type: "image/png" }],
    apple: [{ url: "/Favicon 100B.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  /* No maximumScale: pinning it to 1 stops a reader pinching to zoom, which
     Lighthouse flags and which matters more than the stray iOS input zoom it
     was presumably there to avoid. */
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "100B Beyond Borders",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-100b.png`,
  description:
    "Vietnamese brands go out. The world comes in. 100B works both directions: capital, brands, and goods between Vietnam and the world.",
  founder: [
    { "@type": "Person", name: "Minh Mac", jobTitle: "Founder & CEO" },
    { "@type": "Person", name: "Tung Cao", jobTitle: "Co-Founder & Head of International Trade" },
    { "@type": "Person", name: "Tu Mac", jobTitle: "Co-Founder & Head of Factory Ops" },
  ],
  sameAs: ["https://100b.co"],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Hanoi",
      addressCountry: "VN",
    },
  ],
  email: "global@100b.co",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${utm.variable}`}>
      <body>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Ahrefs Web Analytics. afterInteractive so it is fetched once the page
            is usable rather than competing with the hero for bandwidth. */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Lmnnu9lq/mOdk3LPVASIbA"
          strategy="afterInteractive"
        />

        {/* Wistia player for the hero video background */}
        <Script
          src="https://fast.wistia.com/player.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://fast.wistia.com/embed/68iibq5ow9.js"
          strategy="afterInteractive"
          type="module"
        />
        <Script
          src="https://fast.wistia.com/embed/9hbymhvynw.js"
          strategy="afterInteractive"
          type="module"
        />
        <Script
          src="https://fast.wistia.com/embed/t0jdqo7des.js"
          strategy="afterInteractive"
          type="module"
        />

        {/* Organization structured data for search engines / AI crawlers */}
        <Script
          id="ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
