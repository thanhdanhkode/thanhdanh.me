import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.thanhdanh.me"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
