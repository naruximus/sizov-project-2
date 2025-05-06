import { getActorPage } from '@/entities/actor-page';
import { Masonry, VideoPlayer } from '@/shared/components';
import { getImageUrl } from '@/shared/utils/get-image-url';
import { getVideoUrl } from '@/shared/utils/get-video-url';

import { ActorBio } from './components/actorBio';

export async function Actor() {
  const { data } = await getActorPage();

  return (
    <main>
      <section>
        <VideoPlayer
          src={getVideoUrl(data.video)}
          type="video/mp4"
          poster={getImageUrl(data.videoPoster.formats.small.url)}
          showMuteButton
          showRestartButton
        />
      </section>
      <ActorBio />
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
            gutterBreakPoints: {
              640: '1px',
            },
          }}
        />
      </section>
    </main>
  );
}
