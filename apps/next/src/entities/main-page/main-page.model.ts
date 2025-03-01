import { z } from 'zod';

import { StrapiMedia } from '@/shared/model/strapi-media';
import { StrapiMediaVideo } from '@/shared/model/strapi-media';

export const MainPage = z.object({
  id: z.number(),
  title: z.string(),
  video: StrapiMediaVideo,
  videoPoster: StrapiMedia,
  documentId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
