import { z } from 'zod';

import { createApi } from '@/shared/api/base';
import { StrapiResponse } from '@/shared/model/strapi-response';

import { HorizontalVideo } from './horizontal-videos.model';

export const getHorizontalVideos = createApi({
  method: 'GET',
  endpoint: '/horizontal-videos?populate=*&sort=publishedAt:desc',
  responseSchema: StrapiResponse(z.array(HorizontalVideo)),
});
