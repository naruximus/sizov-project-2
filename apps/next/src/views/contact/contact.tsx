import Image from 'next/image';

import imgActor from '@/shared/assets/images/Actor.jpg';

import { SocialLinks } from './components/SocialLinks';

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 w-full h-[50vh] lg:h-auto relative">
        <Image src={imgActor} alt="Дима" fill className="object-cover" />
      </div>

      <div className="flex items-center justify-center lg:pl-24">
        <div className="space-y-10">
          <h1 className="text-4xl font-medium">Связаться со мной</h1>
          <div className="space-y-4">
            <p>
              Если у вас есть вопросы, предложения или вы хотите обсудить сотрудничество, пишите
              мне!
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
