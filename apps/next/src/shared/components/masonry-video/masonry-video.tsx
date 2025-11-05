'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Video from 'next-video';
import { type ResponsiveMasonryProps } from 'react-responsive-masonry';
import { useWindowSize } from 'usehooks-ts';

import { type THorizontalVideo } from '@/entities/horizontal-videos';
import { Modal } from '@/shared/components/modal';
import { getImageUrl } from '@/shared/utils/get-image-url';
import { getVideoUrl } from '@/shared/utils/get-video-url';

import styles from './masonry-video.module.css';

const ResponsiveMasonry = dynamic(
  () => import('react-responsive-masonry').then((mod) => mod.ResponsiveMasonry),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);
const ReactMasonry = dynamic(() => import('react-responsive-masonry').then((mod) => mod.default), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

type Props = {
  videos: THorizontalVideo[];
  responsiveProps: Omit<ResponsiveMasonryProps, 'children'>;
};

export const MasonryVideos = ({ videos, responsiveProps }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<THorizontalVideo | null>(
    videos[0] ?? null,
  );
  const { height, width } = useWindowSize();

  if (videos.length === 0 || !selectedVideo) {
    return (
      <section className="flex h-[200px] items-center justify-center bg-stone-900">
        <p className="text-sm text-gray-500">Нет доступных видео</p>
      </section>
    );
  }

  const isFirstVideo = videos[0].id === selectedVideo.id;
  const isLastVideo = videos[videos.length - 1].id === selectedVideo.id;

  const handleNextVideo = () => {
    const currentIndex = videos.findIndex((video) => video.id === selectedVideo.id);
    const nextIndex = (currentIndex + 1) % videos.length;
    setSelectedVideo(videos[nextIndex]);
  };

  const handlePreviousVideo = () => {
    const currentIndex = videos.findIndex((video) => video.id === selectedVideo.id);
    const previousIndex = (currentIndex - 1 + videos.length) % videos.length;
    setSelectedVideo(videos[previousIndex]);
  };

  const scaleWidth = width / selectedVideo.preview.width;
  const scaleHeight = height / selectedVideo.preview.height;
  const scale = Math.min(scaleWidth, scaleHeight);

  const videoWidth = Math.round(selectedVideo.preview.width * scale) - 40;
  const videoHeight = Math.round(selectedVideo.preview.height * scale) - 40;

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          className={clsx(
            'relative min-w-full w-full h-full max-h-[90vh] max-w-full object-contain flex',
            styles.modal,
          )}
        >
          {/* Buttons Controls */}
          {!isFirstVideo && (
            <button
              type="button"
              className="text-white bg-black rounded-full p-1 bg-opacity-50 absolute left-2 top-1/2 -translate-y-1/2 z-10"
              onClick={handlePreviousVideo}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {!isLastVideo && (
            <button
              type="button"
              className="ml-auto text-white bg-black rounded-full p-1 bg-opacity-50 absolute right-2 top-1/2 -translate-y-1/2 z-10"
              onClick={handleNextVideo}
            >
              <ChevronRight size={24} />
            </button>
          )}

          <Video
            className="justify-center"
            key={selectedVideo.id}
            src={getVideoUrl(selectedVideo.video)}
            type="video/mp4"
            poster={getImageUrl(selectedVideo.preview.url)}
            autoPlay
            loop
            playsInline
            height={videoHeight}
            width={videoWidth}
          />
        </div>
      </Modal>

      <ResponsiveMasonry {...responsiveProps}>
        <ReactMasonry>
          {videos.map((v) => (
            <div
              key={v.id}
              className="relative cursor-pointer"
              onClick={() => {
                setSelectedVideo(v);
                setIsOpen(true);
              }}
            >
              <Play
                size={36}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black rounded-full p-2 bg-opacity-50"
              />
              <Image
                width={v.preview.formats.large.width}
                height={v.preview.formats.large.height}
                alt={v.preview.caption ?? v.name}
                src={getImageUrl(v.preview.formats.large.url)}
                className="max-h-[90vh] max-w-full object-contain mx-auto "
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </ReactMasonry>
      </ResponsiveMasonry>
    </>
  );
};
