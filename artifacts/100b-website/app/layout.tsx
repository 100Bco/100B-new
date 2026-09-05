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
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "100B Beyond Borders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100B | Beyond Borders",
    description:
      "Vietnamese brands go out. The world comes in.",
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
        <Script
          src="https://fast.wistia.com/embed/im4oab6ppu.js"
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
