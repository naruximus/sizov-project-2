import Image from 'next/image';

import { getContactPage } from '@/entities/contact-page';
import { SocialLinks } from '@/shared/components';
import { getImageUrl } from '@/shared/utils/get-image-url';

export async function Contact() {
  const { data } = await getContactPage();
  return (
    <div className="flex flex-col md:flex-row pt-10 flex-1 md:flex-wrap">
      <div className="flex justify-center  max-w-[1210px] 2xl:max-w-none 2xl:justify-start">
        <Image
          src={getImageUrl(data.photo.formats.large.url)}
          alt="Дима"
          width={data.photo.formats.large.width}
          height={data.photo.formats.large.height}
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-center md:pl-24 px-6 md:px-0 py-8 md:py-0">
        <div className="space-y-6 md:space-y-10 max-w-md w-full md:pr-24">
          <h1 className="text-3xl md:text-4xl font-medium text-left">Связаться со мной</h1>
          <div className="space-y-4">
            <p className="text-lg md:text-lg leading-relaxed  text-left">
              Если у вас есть вопросы, предложения или вы хотите обсудить сотрудничество, пишите
              мне!
            </p>
            <SocialLinks className="flex-col space-y-2" showText />
          </div>
        </div>
      </div>
    </div>
  );
}
