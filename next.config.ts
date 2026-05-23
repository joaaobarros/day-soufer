import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath é setado automaticamente no GitHub Pages via GITHUB_REPOSITORY
  basePath: isProd && repoName ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
