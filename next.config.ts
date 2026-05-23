import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isProd && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath é setado automaticamente no GitHub Pages via GITHUB_REPOSITORY
  basePath,
  // Expõe o basePath para componentes client-side (imagens, vídeos)
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // Loader customizado: adiciona o basePath ao src.
    // Necessário porque `unoptimized: true` não prepend basePath no export estático.
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
};

export default nextConfig;
