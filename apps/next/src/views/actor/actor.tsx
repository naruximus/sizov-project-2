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
          <p className="text-base leading-relaxed font-medium">
            Очень люблю сниматься и буду рад сотрудничеству.
          </p>
          <p className="text-base leading-relaxed font-medium">Пишите!</p>

          <h3 className="text-lg font-medium mt-6">Список Ролей:</h3>
          <p className="text-base font-medium">Александринский театр, Санкт-Петербург</p>
          <ul className="space-y-3 text-base leading-relaxed font-medium">
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Бетранду - спектакль Сирано де Бержерак реж. Н. Рощин
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Любовник Наны гитарист Филлип - НАНА А. Жолдак
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Парень с Гостиного двора - Женитьба В. Фокин
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Князь Барберини, Фишка, Игрок - Литургия Zero В. Фокин
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Маска - Маскарад. Воспоминания будущего В. Фокин
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Кузьма, музыкант - Блаженная Ксения. История любви В. Фокин
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Музыкант - Швейк. Возвращение В. Фокин
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Королевский барбанщик - Гамлет В. Фокин
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Оператор, красногвардеец - 12 А. Оконешников
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Оператор - Руслан и Людмила А. Оконешников
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Переговорщик, участник хора - Мамаша Кураж и ее дети Т. Терзопулос
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Участник хора - Маузер Т. Терзопулос
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Матрос, участник революционного концерта, артист картонного театра марионеток и
              трагического иллюзиона - Оптимистическая трагедия. Прощальный бал. В. Рыжаков
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Каторжник, Студент, Официант, Полицейский - Преступление и Наказание А. Виднянский
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Музыкант - Пушкин. Стихи и мысли Ю. Васильев
            </li>
          </ul>

          <p className="text-base font-medium mt-4">Театр Приют Комедианта, Санкт-Петербург</p>
          <ul className="space-y-3 text-base leading-relaxed font-medium">
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              Щелкунчик, Дроссельмейер младший - Щелкунчик В. Любский
            </li>
          </ul>

          <h3 className="text-lg font-medium mt-6">Съемочный опыт:</h3>
          <ul className="space-y-3 text-base leading-relaxed font-medium">
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              2024 Красный смех (к/м) Родион
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              2022 Агнец (к/м) Саша
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              2021 Свои 5 Глеб Никонов
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              2020 Семейные тайны администратор
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-neutral-500">
              2019 Идеальный пациент администратор
            </li>
          </ul>
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
