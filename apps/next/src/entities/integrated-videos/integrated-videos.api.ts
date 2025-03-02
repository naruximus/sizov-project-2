import { z } from 'zod';

import { createApi } from '@/shared/api/base';
import { StrapiResponse } from '@/shared/model/strapi-response';

import { IntegratedVideo } from './integrated-videos.model';

export const getIntegratedVideos = createApi({
  method: 'GET',
  endpoint: '/integrated-videos?populate=*',
  responseSchema: StrapiResponse(z.array(IntegratedVideo)),
});
