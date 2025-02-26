import { createApi } from '@/shared/api/base';
import { StrapiResponse } from '@/shared/model/strapi-response';

import { ActorPage } from './actor-page.model';

export const getActorPage = createApi({
  method: 'GET',
  endpoint: 'actor-page?populate=*',
  responseSchema: StrapiResponse(ActorPage),
});
