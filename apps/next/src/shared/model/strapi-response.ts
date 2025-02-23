import { z } from 'zod';

export const StrapiResponse = <ItemType extends z.ZodTypeAny>(schema: ItemType) => {
  return z.object({
    meta: z.any(),
    data: schema,
  });
};
