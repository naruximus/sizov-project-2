import imgPhotos from '@/shared/assets/images/Photos.jpg';
import photosWhite from '@/shared/assets/lotties/photos_white.json'
import { TypeLayout } from '@/shared/components/type-layout';

export function Photos() {
  return (
    <>
      <TypeLayout imageSrc={imgPhotos} imageAlt="ssss" animationData={photosWhite} />
      <div className="space-y-6">
        <section>
        </section>
      </div>
    </>
  );
}