import type { NextConfig } from "next";
import path from "path";

const config: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.resolve(__dirname, "../.."),
  images: {
    // Most marketing assets are local; allow any future remote sources case-by-case.
    remotePatterns: [],
  },
};

export default config;
