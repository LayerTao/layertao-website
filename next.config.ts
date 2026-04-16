import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // ADD THIS LINE
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
