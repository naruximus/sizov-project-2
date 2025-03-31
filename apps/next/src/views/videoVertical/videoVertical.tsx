import imgVertical from '@/shared/assets/images/Video_Vertical.jpg';
import verticalWhite from '@/shared/assets/lotties/Vertical_white.json';
import { Banner } from '@/shared/components/banner';

export function VideoVertical() {
  return (
    <>
      <Banner imageSrc={imgVertical} imageAlt="ssss" animationData={verticalWhite} />
      <div className="space-y-6">
        <section>
        </section>
      </div>
    </>
  );
}