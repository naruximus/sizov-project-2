import { z } from 'zod';

export const MainPage = z.object({
  id: z.number(),
  title: z.string(),
  documentId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
