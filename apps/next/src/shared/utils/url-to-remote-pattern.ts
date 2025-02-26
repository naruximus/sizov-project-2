import type { RemotePattern } from 'next/dist/shared/lib/image-config';

export const urlToRemotePattern = (url: string): RemotePattern => {
  const parsedUrl = new URL(url);
  return {
    protocol: parsedUrl.protocol.replace(':', '') as 'http' | 'https',
    hostname: parsedUrl.hostname,
    port: parsedUrl.port || '',
    pathname: '/uploads/**',
  };
};
