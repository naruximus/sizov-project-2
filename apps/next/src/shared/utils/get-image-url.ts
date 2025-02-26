import { TStrapiMediaFormat } from '@/shared/model/strapi-media';

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export const getImageUrl = (format: TStrapiMediaFormat) => {
  return `${IMAGE_URL}${format.url}`;
};
