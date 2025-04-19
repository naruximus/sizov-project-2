import { getVerticalVideos } from '@/entities/vertical-videos/vertical-videos.api';
import imgVertical from '@/shared/assets/images/Video_Vertical.jpg';
import verticalWhite from '@/shared/assets/lotties/Vertical_white.json';
import { Banner } from '@/shared/components/banner';
import { MasonryVideos } from '@/shared/components/masonry-video/masonry-video';

export async function VideoVertical() {
  const { data: verticalVideos } = await getVerticalVideos();

  return (
    <>
      <Banner
        imageSrc={imgVertical}
        imageAlt="VerticalVideosBanner"
        animationData={verticalWhite}
      />
      <div className="space-y-6">
        <section>
          <MasonryVideos
            videos={verticalVideos}
            responsiveProps={{
              columnsCountBreakPoints: {
                640: 2,
                768: 3,
                1024: 4,
              },
            }}
            masonryProps={{ gutter: '12px' }}
          />
        </section>
      </div>
    </>
  );
}
