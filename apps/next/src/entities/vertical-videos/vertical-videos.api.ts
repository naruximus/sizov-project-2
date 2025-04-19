import { z } from 'zod';

import { createApi } from '@/shared/api/base';
import { StrapiResponse } from '@/shared/model/strapi-response';

import { VerticalVideo } from './vertical-videos.model';

export const getVerticalVideos = createApi({
  method: 'GET',
  endpoint: '/vertical-videos?populate=*',
  responseSchema: StrapiResponse(z.array(VerticalVideo)),
});
