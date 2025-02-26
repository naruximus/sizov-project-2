import { z } from 'zod';

export const StrapiMediaFormat = z.object({
  name: z.string(),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  path: z.string().nullable(),
  width: z.number(),
  height: z.number(),
  size: z.number(),
  sizeInBytes: z.number(),
  url: z.string(),
});

export type TStrapiMediaFormat = z.infer<typeof StrapiMediaFormat>;

export const StrapiMedia = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  alternativeText: z.string().nullable(),
  caption: z.string().nullable(),
  width: z.number(),
  height: z.number(),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  size: z.number(),
  url: z.string(),
  previewUrl: z.string().nullable(),
  provider: z.string(),
  provider_metadata: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  formats: z.object({
    thumbnail: StrapiMediaFormat,
    small: StrapiMediaFormat,
    medium: StrapiMediaFormat,
    large: StrapiMediaFormat,
  }),
});

export type TStrapiMedia = z.infer<typeof StrapiMedia>;
