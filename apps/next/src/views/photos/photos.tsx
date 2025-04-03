import imgPhotos from '@/shared/assets/images/Photos.jpg';
import photosWhite from '@/shared/assets/lotties/photos_white.json'
import { Banner } from '@/shared/components/banner';

export function Photos() {
  return (
    <>
      <Banner imageSrc={imgPhotos} imageAlt="PhotosBanner" animationData={photosWhite} />
      <div className="space-y-6">
        <section>
        </section>
      </div>
    </>
  );
}