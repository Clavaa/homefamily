import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Canonicals, sitemaps, and internal links all use trailing slashes —
  // serve the pages that way too so there's exactly one URL per page.
  trailingSlash: true,
};

export default nextConfig;
