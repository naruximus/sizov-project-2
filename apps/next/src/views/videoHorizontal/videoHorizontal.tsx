import { getHorizontalVideos } from '@/entities/horizontal-videos/horizontal-videos.api';
import imgHorizontal from '@/shared/assets/images/Video_Horizontal.jpg';
import horizontalWhite from '@/shared/assets/lotties/Horizontal_white.json';
import { Banner, MasonryVideos } from '@/shared/components';

export async function VideoHorizontal() {
  const { data: horizontalVideos } = await getHorizontalVideos();

  return (
    <>
      <Banner
        imageSrc={imgHorizontal}
        imageAlt="HorizontalVideosBanner"
        animationData={horizontalWhite}
      />
      <div className="space-y-6 flex-1">
        <section>
          <MasonryVideos
            videos={horizontalVideos}
            responsiveProps={{
              columnsCountBreakPoints: {
                425: 1,
                640: 2,
                768: 3,
              },
            }}
            masonryProps={{ gutter: '12px' }}
          />
        </section>
      </div>
    </>
  );
}
