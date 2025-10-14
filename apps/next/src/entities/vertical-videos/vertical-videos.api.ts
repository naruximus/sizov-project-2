import { z } from 'zod';

import { createApi } from '@/shared/api/base';
import { StrapiResponse } from '@/shared/model/strapi-response';

import { VerticalVideo } from './vertical-videos.model';

export const getVerticalVideos = createApi({
  method: 'GET',
  endpoint: '/vertical-videos?populate=*&pagination[pageSize]=100',
  responseSchema: StrapiResponse(z.array(VerticalVideo)),
});
