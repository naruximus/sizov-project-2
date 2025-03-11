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
          poster={getImageUrl(data.videoPoster.formats.small.url)}
          showMuteButton
          showRestartButton
        />
      </section>
      <section className="py-4 px-8 md:px-16 lg:px-24">
  <div className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
    <p className="">Привет!</p>
    <p className=" mt-4">Меня зовут Сизов Дима, и мне 24 года</p>
    <p className=" mt-4">
      Я закончил РГИСИ (бывш. СПБГАТИ)<br />
      Мастерская И.И. Благодёра<br />
      Красный диплом артиста музыкального театра
    </p>
    <p className=" mt-4">С 2022 года служу в Александринском театре.</p>

    <details className="mt-6">
      <summary className="font-semibold cursor-pointer hover:text-gray-300 ">
        <span className="font-bold">Список Ролей:</span>
      </summary>
      <div className="mt-4 text-gray-200">
        <p className="font-semibold">Александринский театр, Санкт-Петербург</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Бетранду - спектакль `Сирано де Бержерак` реж. Н. Рощин</li>
          <li>Любовник Наны гитарист Филлип - `НАНА` А. Жолдак</li>
          <li>Парень с Гостиного двора - `Женитьба` В. Фокин</li>
          <li>Князь Барберини, Фишка, Игрок - `Литургия Zero` В. Фокин</li>
          <li>Маска - `Маскарад. Воспоминания будущего` В. Фокин</li>
          <li>Кузьма, музыкант - `Блаженная Ксения. История любви` В. Фокин</li>
          <li>Музыкант - `Швейк. Возвращение` В. Фокин</li>
          <li>Королевский барбанщик - `Гамлет` В. Фокин</li>
          <li>Оператор, красногвардеец - `12` А. Оконешников</li>
          <li>Оператор - `Руслан и Людмила` А. Оконешников</li>
          <li>Переговорщик, участник хора - `Мамаша Кураж и ее дети` Т. Терзопулос</li>
          <li>Участник хора - `Маузер` Т. Терзопулос</li>
          <li>Матрос, участник революционного концерта, артист картонного театра марионеток и трагического иллюзиона - `Оптимистическая трагедия. Прощальный бал.` В. Рыжаков</li>
          <li>Каторжник, Студент, Официант, Полицейский - `Преступление и Наказание` А. Виднянский</li>
          <li>Музыкант - `Пушкин. Стихи и мысли ` Ю. Васильев</li>
        </ul>
        <p className="font-semibold mt-4">Театр `Приют Комедианта`, Санкт-Петербург</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Щелкунчик, Дроссельмейер младший - `Щелкунчик` В. Любский</li>
        </ul>
      </div>
    </details>

    <details className="mt-6">
      <summary className="font-semibold cursor-pointer hover:text-gray-300 ">
        <span className="font-bold">Съемочный опыт:</span>
      </summary>
      <div className="mt-4 text-gray-200">
        <ul className="list-disc list-inside ml-4">
          <li>2024 Красный смех (к/м) Родион</li>
          <li>2022 Агнец (к/м) Саша</li>
          <li>2021 Свои 5 Глеб Никонов</li>
          <li>2020 Семейные тайны администратор</li>
          <li>2019 Идеальный пациент администратор</li>
        </ul>
      </div>
    </details>

    <p className="mt-6 ">
      Также я вожу автомобиль, говорю на английском, чуть-чуть на испанском, играю на контрабасе, гитаре, мелодике, немного на ударных, и немного на фортепиано.
    </p>
    <p className="mt-4 ">
      Очень люблю сниматься и буду рад сотрудничеству.
    </p>
    <p className="mt-4  font-bold">Пишите!</p>
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
  );
}
