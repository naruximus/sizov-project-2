'use client';
import { useEffect, useRef, useState } from 'react';
import { Play, Volume2, Pause, Volume, RotateCcw } from 'lucide-react';

interface Props {
  src: string;
  type: string;
  poster?: string;
  showPlayPauseButton?: boolean;
  showMuteButton?: boolean;
  showRestartButton?: boolean;
}

export const VideoPlayer = ({
  src,
  type,
  poster,
  showPlayPauseButton = false,
  showMuteButton = false,
  showRestartButton = false,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };
  const handlePlayPauseToggle = () => {
    if (videoRef.current) {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    const videoElement = videoRef.current;

    const handleLoadedData = () => {
      if (!isLoaded) {
        console.log('Видео загружено и готово к воспроизведению');
        setIsLoaded(true);
      }
    };

    if (videoElement) {
      // Если видео уже загружено
      if (videoElement.readyState >= 3) {
        handleLoadedData();
      } else {
        // Устанавливаем обработчик события
        videoElement.addEventListener('loadeddata', handleLoadedData);
      }
    }

    // Удаляем обработчик при размонтировании
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center relative">
      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        {showPlayPauseButton && (
          <button
            onClick={handleRestartVideo}
            disabled={!isLoaded}
            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <RotateCcw />
          </button>
        )}
        {showRestartButton && (
          <button
            onClick={handlePlayPauseToggle}
            disabled={!isLoaded}
            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isPlaying ? <Play /> : <Pause />}
          </button>
        )}
        {showMuteButton && (
          <button
            onClick={handleMuteToggle}
            disabled={!isLoaded}
            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isMuted ? <Volume /> : <Volume2 />}
          </button>
        )}
      </div>
      <video
        height={500}
        className="w-full"
        ref={videoRef}
        poster={poster}
        autoPlay={isPlaying}
        muted={isMuted}
        playsInline
        loop
      >
        <source src={src} type={type} />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
};
