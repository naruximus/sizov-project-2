import Image from 'next/image';

import { getContactPage } from '@/entities/contact-page';
import { SocialLinks } from '@/shared/components';
import { getImageUrl } from '@/shared/utils/get-image-url';

export async function Contact() {
  const { data } = await getContactPage();
  return (
    <div className="flex pt-10 sm:flex-1 sm:flex-row flex-col ">
      <div className={`hidden relative sm:flex-1 sm:max-w-[600px] sm:h-auto  sm:block`}>
        <Image
          src={getImageUrl(data.photo.formats.large.url)}
          alt="Дима"
          fill
          className="sm:object-cover object-contain"
          priority
        />
      </div>
      <Image
        src={getImageUrl(data.photo.formats.large.url)}
        alt="Дима"
        width={data.photo.formats.large.width}
        height={data.photo.formats.large.height}
        priority
        className="sm:hidden"
      />

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

