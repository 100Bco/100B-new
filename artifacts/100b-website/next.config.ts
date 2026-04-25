import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    // Most marketing assets are local; allow any future remote sources case-by-case.
    remotePatterns: [],
  },
};

export default config;
