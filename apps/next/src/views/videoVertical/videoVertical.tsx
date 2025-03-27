import imgVertical from '@/shared/assets/images/Video_Vertical.jpg';
import verticalWhite from '@/shared/assets/lotties/Vertical_white.json';
import { TypeLayout } from '@/shared/components/type-layout';

export function VideoVertical() {
  return (
    <>
      <TypeLayout imageSrc={imgVertical} imageAlt="ssss" animationData={verticalWhite} />
      <div className="space-y-6">
        <section>
        </section>
      </div>
    </>
  );
}