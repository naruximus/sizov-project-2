import { createApi } from '@/shared/api/base';
import { StrapiResponse } from '@/shared/model/strapi-response';

import { Photos } from './photos.model';

export const getPhotos= createApi({
    method: 'GET',
    endpoint: 'photo?populate=*',
    responseSchema: StrapiResponse(Photos),
  });
