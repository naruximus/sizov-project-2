import type { NextConfig } from 'next';

import { urlToRemotePattern } from '@/shared/utils/url-to-remote-pattern';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
      ...(process.env.NEXT_PUBLIC_IMAGE_URL
        ? [urlToRemotePattern(process.env.NEXT_PUBLIC_IMAGE_URL)]
        : []),
    ],
  },
};

export default nextConfig;
