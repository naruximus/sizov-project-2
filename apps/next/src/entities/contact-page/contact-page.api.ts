import { createApi } from '@/shared/api/base';
import { StrapiResponse } from '@/shared/model/strapi-response';

import { ContactPage } from './contact-page.model';

export const getContactPage = createApi({
  method: 'GET',
  endpoint: 'contact-page?populate=*',
  responseSchema: StrapiResponse(ContactPage),
});
