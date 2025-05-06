import { getPhotosPage } from '@/entities/photos-page/photos-page.api';
import imgPhotos from '@/shared/assets/images/Photos.jpg';
import photosWhite from '@/shared/assets/lotties/photos_white.json';
import { Masonry } from '@/shared/components';
import { Banner } from '@/shared/components/banner';

export async function Photos() {
  const { data } = await getPhotosPage();
  return (
    <>
      <Banner imageSrc={imgPhotos} imageAlt="PhotosBanner" animationData={photosWhite} />
      <div className="space-y-6 flex-1">
        <section>
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
      </div>
    </>
  );
}
