import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'out',
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/otyxzm50/**',
      },
    ],
  },
};

export default nextConfig;
