import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    // Most marketing assets are local; allow any future remote sources case-by-case.
    remotePatterns: [],
  },
  async redirects() {
    // v1 routes. Keep old links alive after the v2 restructure.
    return [
      { source: "/build", destination: "/enter-vietnam", permanent: true },
      { source: "/trade", destination: "/container-club", permanent: true },
      { source: "/cc", destination: "/container-club", permanent: true },
    ];
  },
};

export default config;
