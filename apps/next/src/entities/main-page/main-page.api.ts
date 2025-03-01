import { createApi } from '@/shared/api/base';
import { StrapiResponse } from '@/shared/model/strapi-response';

import { MainPage } from './main-page.model';

export const getMainPage = createApi({
  method: 'GET',
  endpoint: 'main-page?populate=*',
  responseSchema: StrapiResponse(MainPage),
});
