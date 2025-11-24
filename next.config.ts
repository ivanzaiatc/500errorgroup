import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/500errorgroup/' : '',
  basePath: isProd ? '/500errorgroup' : '',
  output: 'export'
};

export default nextConfig;
