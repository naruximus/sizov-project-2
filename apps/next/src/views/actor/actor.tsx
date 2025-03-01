import { getActorPage } from '@/entities/actor-page';
import { Masonry, VideoPlayer } from '@/shared/components';
import { getImageUrl } from '@/shared/utils/get-image-url';
import { getVideoUrl } from '@/shared/utils/get-video-url';

export async function Actor() {
  const { data } = await getActorPage();

  return (
    <main>
      <section className="pt-10">
        <VideoPlayer
          src={getVideoUrl(data.video)}
          type="video/mp4"
          poster={getImageUrl(data.videoPoster.formats.small)}
          showMuteButton
          showRestartButton
          showPlayPauseButton
        />
      </section>
      <section className="py-4 px-8 md:px-16 lg:px-24">
        <p>
          Здравствуйте.
          <br />
          <br />
          Меня зовут Сезо Вдми, тремя 23 года, я выпускник театральной академии Намыховой.
          <br />
          <br />
          В 22-м году я ее закончил и был принять на службу в Александринский театр.
          <br />
          <br />
          За не таких постановках как Серон Гдубрижа Рак, Николай Орощина, игра Бетранду, Коварайми
          Мир Хольдокерил, Люкевича, играю там Станиславского Есенина, Литр Ге Зоро, Валерия
          Фокенна, я там Князь Борбирине.
          <br />
          <br />
          Нана, Андрея Желдака, любовник Наны.
          <br />
          <br />
          И так далее.
          <br />
          <br />
          Есть съемочный опыт, полнометражный и короткометражный фильм, второстепенный главной роли.
          <br />
          <br />
          Также я вожу автомобиль, говорю на английском, чуть-чуть на испанском, играю на
          контрабасию, гитаре, мелодики, ударных могу, могу и на фротопиано, если нужно.
          <br />
          <br />
          Очень люблю сниматься и буду радцатьрудничеству.
          <br />
          <br />
          [музыка].
        </p>
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
