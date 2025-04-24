import { z } from 'zod';

import { StrapiMedia } from '@/shared/model/strapi-media';

export const Photos = z.object({
  id: z.number(),
  portfolio: z.array(StrapiMedia),
  documentId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
