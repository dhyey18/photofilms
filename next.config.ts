import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photofilms.in',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
