import { z } from 'zod';

import { StrapiMedia } from '@/shared/model/strapi-media';

export const ContactPage = z.object({
  id: z.number(),
  photo: StrapiMedia,
  documentId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
