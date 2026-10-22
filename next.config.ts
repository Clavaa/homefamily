import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Canonicals, sitemaps, and internal links all use trailing slashes —
  // serve the pages that way too so there's exactly one URL per page.
  trailingSlash: true,
  // www served the whole site as a 200 duplicate of the apex. Search Console
  // reported 934 of the top 1,000 pages under www despite every canonical
  // naming the apex, so the two hosts were splitting the site's signals.
  async redirects() {
    // One hop, landing on the trailing-slash URL; files keep no slash.
    const www = [{ type: "host" as const, value: "www.sunroomcare.com" }];
    const apex = "https://sunroomcare.com";
    return [
      { source: "/", has: www, destination: `${apex}/`, permanent: true },
      { source: "/:path((?!.*\\.).+)", has: www, destination: `${apex}/:path/`, permanent: true },
      { source: "/:path+", has: www, destination: `${apex}/:path+`, permanent: true },
    ];
  },
};

export default nextConfig;
