import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false, // Prevents Netlify from adding unnecessary slashes
  output: "standalone", // Ensures everything needed is bundled
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
