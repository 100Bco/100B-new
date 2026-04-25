import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://100b.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "100B | Made In Vietnam, Consumed Worldwide.",
    template: "%s | 100B Beyond Borders",
  },
  description:
    "100B is the operating partner for serious deals between two worlds. We connect elite operators, capital, and builders across the Vietnam–US corridor — co-building global brands made in Vietnam and consumed worldwide.",
  keywords: [
    "100B",
    "100B Beyond Borders",
    "Vietnam US corridor",
    "cross-border capital",
    "Vietnam manufacturing",
    "direct-to-factory sourcing",
    "Vietnamese brands global",
    "Austin Vietnam",
    "Hanoi capital",
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
    title: "100B | Made In Vietnam, Consumed Worldwide.",
    description:
      "The operating partner for serious deals between two worlds. Capital, founders, and operators across the Vietnam–US corridor.",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "100B Beyond Borders — Made In Vietnam, Consumed Worldwide.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100B | Made In Vietnam, Consumed Worldwide.",
    description:
      "The operating partner for serious deals between two worlds.",
    images: ["/opengraph.jpg"],
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
  maximumScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "100B Beyond Borders",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-100b.png`,
  description:
    "The operating partner for serious deals between two worlds. Cross-border capital & brand platform across the Vietnam–US corridor.",
  founder: {
    "@type": "Person",
    name: "Minh Mac",
  },
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
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Wistia player for the hero video background */}
        <Script
          src="https://fast.wistia.com/player.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://fast.wistia.com/embed/9hbymhvynw.js"
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
