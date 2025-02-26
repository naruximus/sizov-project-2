import { z } from 'zod';

import { StrapiMedia } from '@/shared/model/strapi-media';

export const ActorPage = z.object({
  id: z.number(),
  title: z.string(),
  portfolio: z.array(StrapiMedia),
  documentId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
//
