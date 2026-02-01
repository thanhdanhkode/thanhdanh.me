import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: ["*.thanhdanh.me"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
