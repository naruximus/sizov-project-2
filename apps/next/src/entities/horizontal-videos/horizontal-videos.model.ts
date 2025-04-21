import { z } from 'zod';

import { StrapiMediaVideo } from '@/shared/model/strapi-media';
import { StrapiMedia } from '@/shared/model/strapi-media';

export const HorizontalVideo = z.object({
  id: z.number(),
  name: z.string(),
  video: StrapiMediaVideo,
  preview: StrapiMedia,
  documentId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
});

export type THorizontalVideo = z.infer<typeof HorizontalVideo>;
