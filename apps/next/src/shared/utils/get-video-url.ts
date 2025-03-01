import { TStrapiMediaVideo } from '@/shared/model/strapi-media';

// TODO: rename to media
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export const getVideoUrl = (media: TStrapiMediaVideo) => {
  return `${IMAGE_URL}${media.url}`;
};
