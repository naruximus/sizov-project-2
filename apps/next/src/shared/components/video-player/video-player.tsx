'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { RotateCcw, Volume, Volume2 } from 'lucide-react';
import Video, { type VideoProps } from 'next-video';

type Props = VideoProps & {
  showMuteButton?: boolean;
  showRestartButton?: boolean;
};

export const VideoPlayer = ({
  showMuteButton = false,
  showRestartButton = false,
  autoPlay = true,
  loop = true,
  playsInline = true,
  muted = true,
  controls = false,
  className = '',
  ...videoProps
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  const handleRestartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
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
        {showRestartButton && (
          <button
            onClick={handleRestartVideo}
            // disabled={!isLoaded}
            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <RotateCcw />
          </button>
        )}
        {showMuteButton && (
          <button
            onClick={handleMuteToggle}
            // disabled={!isLoaded}
            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isMuted ? <Volume /> : <Volume2 />}
          </button>
        )}
      </div>
      <Video
        {...videoProps}
        ref={videoRef}
        autoPlay={autoPlay}
        loop={loop}
        className={clsx('!aspect-auto w-full', className)}
        playsInline={playsInline}
        muted={isMuted}
        controls={controls}
      />
    </div>
  );
};
