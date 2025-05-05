import { VideoPlayer } from '@/shared/components';

interface Props {
  src: string;
  poster: string;
}

export function HeroSection({ src, poster }: Props) {
  return (
    <section>
      <VideoPlayer src={src} type="video/mp4" poster={poster} showMuteButton />
    </section>
  );
}
