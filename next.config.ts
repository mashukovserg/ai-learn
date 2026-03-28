import type { NextConfig } from "next";
import { resolve } from "path";

// BACKEND_URL is set in Vercel env vars for production.
// Falls back to localhost:8000 for local development.
const backendUrl = process.env.BACKEND_URL ?? 'http://localhost:8000';

const nextConfig: NextConfig = {
  turbopack: {
    root: resolve(__dirname),
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
