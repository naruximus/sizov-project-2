import { z } from 'zod';

export const IntegratedVideo = z.object({
  id: z.number(),
  name: z.string(),
  source: z.string(),
  description: z.string().optional(),
  timing: z.string(),
  order: z.number().optional(),
  documentId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
});

export type TIntegratedVideo = z.infer<typeof IntegratedVideo>;
