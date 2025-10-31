import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ⚠️ Use só temporariamente
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
