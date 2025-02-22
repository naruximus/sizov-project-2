import { VideoPlayer } from '@/shared/components';

export function HeroSection() {
  return (
    <section className="pt-10">
      <VideoPlayer
        src="/showreel.mov"
        type="video/mp4"
        poster="/greet.png"
        showMuteButton
      />
    </section>
  );
}
