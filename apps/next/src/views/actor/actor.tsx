import { getActorPage } from '@/entities/actor-page';
import { Masonry, VideoPlayer } from '@/shared/components';
import { getImageUrl } from '@/shared/utils/get-image-url';
import { getVideoUrl } from '@/shared/utils/get-video-url';
import CollapsibleList from '@/views/actor/components/collapsibleList';

export async function Actor() {
  const { data } = await getActorPage();
  const sections = [
    {
      title: 'Александринский театр, Санкт-Петербург',
      titleClass: 'font-semibold',
      roles: [
        'Бетранду - спектакль Сирано де Бержерак реж. Н. Рощин',
        'Любовник Наны гитарист Филлип - НАНА А. Жолдак',
        'Парень с Гостиного двора - Женитьба В. Фокин',
        'Князь Барберини, Фишка, Игрок - Литургия Zero В. Фокин',
        'Маска - Маскарад. Воспоминания будущего В. Фокин',
        'Кузьма, музыкант - Блаженная Ксения. История любви В. Фокин',
        'Музыкант - Швейк. Возвращение В. Фокин',
        'Королевский барбанщик - Гамлет В. Фокин',
        'Оператор, красногвардеец - 12 А. Оконешников',
        'Оператор - Руслан и Людмила А. Оконешников',
        'Переговорщик, участник хора - Мамаша Кураж и ее дети Т. Терзопулос',
        'Участник хора - Маузер Т. Терзопулос',
        'Матрос, участник революционного концерта, артист картонного театра марионеток и трагического иллюзиона - Оптимистическая трагедия. Прощальный бал. В. Рыжаков',
        'Каторжник, Студент, Официант, Полицейский - Преступление и Наказание А. Виднянский',
        'Музыкант - Пушкин. Стихи и мысли Ю. Васильев',
      ],
    },
    {
      title: 'Театр Приют Комедианта, Санкт-Петербург',
      titleClass: 'font-semibold mt-4',
      roles: ['Щелкунчик, Дроссельмейер младший - Щелкунчик В. Любский'],
    },
    {
      title: 'Съемочный опыт:',
      titleClass: 'font-bold mt-6',
      roles: [
        '2024 Красный смех (к/м) Родион',
        '2022 Агнец (к/м) Саша',
        '2021 Свои 5 Глеб Никонов',
        '2020 Семейные тайны администратор',
        '2019 Идеальный пациент администратор',
      ],
    },
  ];
  return (
    <>
      <main>
        <section className="pt-10">
          <VideoPlayer
            src={getVideoUrl(data.video)}
            type="video/mp4"
            poster={getImageUrl(data.videoPoster.formats.small)}
            showMuteButton
            showRestartButton
          />
        </section>
        <section className="py-4 px-8 md:px-16 lg:px-24">
          <div className="text-lg text-gray-200 leading-relaxed max-w-6xl mx-auto">
            <p>Привет!</p>
            <p className=" mt-4">Меня зовут Сизов Дима, и мне 24 года</p>
            <p className=" mt-4">
              Я закончил РГИСИ (бывш. СПБГАТИ)
              <br />
              Мастерская И.И. Благодёра
              <br />
              Красный диплом артиста музыкального театра
            </p>
            <p className=" mt-4">С 2022 года служу в Александринском театре.</p>

            <p className="mt-6 ">
              Также я вожу автомобиль, говорю на английском, чуть-чуть на испанском,
              <br />
              играю на контрабасе, гитаре, мелодике, немного на ударных, и немного на фортепиано.
            </p>
            <p className="mt-4 ">Очень люблю сниматься и буду рад сотрудничеству.</p>
            <p className="mt-4  font-bold">Пишите!</p>

            <div>
              <div>
                <p className="font-bold mt-6">Список Ролей:</p>
                <CollapsibleList sections={sections} visibleItems={3} />
              </div>
            </div>
          </div>
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
    </>
  );
}
