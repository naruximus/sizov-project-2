import { getActorPage } from '@/entities/actor-page';
import { Masonry, VideoPlayer } from '@/shared/components';
import { getImageUrl } from '@/shared/utils/get-image-url';
import { getVideoUrl } from '@/shared/utils/get-video-url';
import { Collapsible } from '@/views/actor/components/collapsible';

export async function Actor() {
  const { data } = await getActorPage();

  return (
    <main>
      <section className="pt-10">
        <VideoPlayer
          src={getVideoUrl(data.video)}
          type="video/mp4"
          poster={getImageUrl(data.videoPoster.formats.small.url)}
          showMuteButton
          showRestartButton
        />
      </section>
      <section className="py-4 px-8 md:px-16 lg:px-24">
        <Collapsible>
          <p className="text-base leading-relaxed font-medium">Привет!</p>
          <p className="text-base leading-relaxed font-medium">
            Меня зовут Сизов Дима, и мне 24 года
          </p>
          <p className="text-base leading-relaxed font-medium">
            Я закончил РГИСИ (бывш. СПБГАТИ)
            <br />
            Мастерская И.И. Благодёра
            <br />
            Красный диплом артиста музыкального театра
          </p>
          <p className="text-base leading-relaxed font-medium">
            С 2022 года служу в Александринском театре.
          </p>
          <p className="text-base leading-relaxed font-medium">
            Также я вожу автомобиль, говорю на английском, чуть-чуть на испанском,
            <br />
            играю на контрабасе, гитаре, мелодике, немного на ударных, и немного на фортепиано.
          </p>
        </Collapsible>
      </section>
      <section className="py-4 px-8 md:px-16 lg:px-24">
        <Masonry
          images={data.portfolio}
          responsiveProps={{
            columnsCountBreakPoints: {
              640: 2,
              768: 3,
              1024: 4,
              1280: 5,
              1440: 7,
            },
          }}
          masonryProps={{ gutter: '12px' }}
        />
      </section>
    </main>
  );
}
