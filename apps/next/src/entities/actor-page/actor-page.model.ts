import { z } from 'zod';

import { StrapiMedia, StrapiMediaVideo } from '@/shared/model/strapi-media';

export const ActorPage = z.object({
  id: z.number(),
  title: z.string(),
  portfolio: z.array(StrapiMedia),
  video: StrapiMediaVideo,
  videoPoster: StrapiMedia,
  documentId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
//
