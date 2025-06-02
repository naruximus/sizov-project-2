import Image from 'next/image';

import { getIntegratedVideos } from '@/entities/integrated-videos';
import { getMainPage } from '@/entities/main-page';
import { getImageUrl } from '@/shared/utils/get-image-url';
import { getVideoUrl } from '@/shared/utils/get-video-url';

import { HeroSection } from './ui/hero-section';
import { NavigationBlocks } from './ui/navigation-blocks';
import { VideosSection } from './ui/videos-section';

export async function Main() {
  const { data: mainPage } = await getMainPage();
  const { data: integratedVideos } = await getIntegratedVideos();

  return (
    <>
      <HeroSection
        src={getVideoUrl(mainPage.video)}
        poster={getImageUrl(mainPage.videoPoster.formats.small.url)}
      />
      <main className="flex flex-col">
        <div className="space-y-8 bg-neutral-900 p-8 md:p-16 text-neutural">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center">
              <h1 className="text-4xl font-bold">{mainPage.title}</h1>
              <div className="relative w-[25rem] h-60 sm:w-40 sm:h-40 align-middle -ml-10">
                <Image
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGlmang0cXVtMnBhdTRrcGdtbmdtb2wzbGs1OHdianZ5cXViN2xrYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kGNldrILTzYKV5DvXX/giphy.gif"
                  alt="Title GIF"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <section className="space-y-8">
              <p className="text-lg">
                С 2007 года держу в руках камеру с 2018 года занимаюсь фото и видео съемкой
                профессионально.
              </p>

              <p className="text-lg">
                За это время успел создать бессчетное количество контента для театров, выставочных
                пространств, баров, артистов, музыкантов, режиссеров, (среди которых -
                Александринский театр, ЦВЗ Манеж, группа Zoloto, телеканал 2Х2 И так далее) ну и для
                друзей, конечно же.
              </p>

              <p className="text-lg">С некоторыми из моих работ, вы можете ознакомиться здесь!</p>

              <p className="text-lg">Приятного просмотра!</p>
            </section>
          </div>
        </div>
        <div className="px-8 md:px-16 lg:px-24 py-20 lg:py-0 lg:pb-32">
          <div className="max-w-6xl mx-auto">
            <VideosSection videos={integratedVideos} />
          </div>
        </div>
      </main>
      <NavigationBlocks />
    </>
  );
}
