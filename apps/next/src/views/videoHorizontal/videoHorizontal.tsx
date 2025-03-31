import imgHorizontal from '@/shared/assets/images/Video_Horizontal.jpg';
import horizontalWhite from '@/shared/assets/lotties/Horizontal_white.json';
import { Banner } from '@/shared/components/banner';

export function VideoHorizontal() {
  return (
    <>
      <Banner imageSrc={imgHorizontal} imageAlt="ssss" animationData={horizontalWhite} />
      <div className="space-y-6">
        <section>
        </section>
      </div>
    </>
  );
}
