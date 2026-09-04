import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  ...(process.env.NODE_ENV !== "development" && { basePath: "/nexa", assetPrefix: "/nexa" }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;