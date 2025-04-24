import { createApi } from '@/shared/api/base';
import { StrapiResponse } from '@/shared/model/strapi-response';

import { PhotosPage } from './photos-page.model';

export const getPhotosPage = createApi({
  method: 'GET',
  endpoint: 'photos-page?populate=*',
  responseSchema: StrapiResponse(PhotosPage),
});
