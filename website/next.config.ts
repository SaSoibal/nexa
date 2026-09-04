import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nexa",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;