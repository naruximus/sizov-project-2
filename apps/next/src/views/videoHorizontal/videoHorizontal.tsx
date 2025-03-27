import imgHorizontal from '@/shared/assets/images/Video_Horizontal.jpg';
import horizontalWhite from '@/shared/assets/lotties/Horizontal_white.json';
import { TypeLayout } from '@/shared/components/type-layout';

export function VideoHorizontal() {
  return (
    <>
      <TypeLayout imageSrc={imgHorizontal} imageAlt="ssss" animationData={horizontalWhite} />
      <div className="space-y-6">
        <section>
        </section>
      </div>
    </>
  );
}
