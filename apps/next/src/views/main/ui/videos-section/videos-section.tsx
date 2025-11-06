'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Clapperboard } from 'lucide-react';

import { TIntegratedVideo } from '@/entities/integrated-videos';

interface Props {
  videos: TIntegratedVideo[];
}

export function VideosSection({ videos }: Props) {
  const [activeVideo, setActiveVideo] = useState<TIntegratedVideo>(videos[0]);
  if (videos.length === 0) {
    return (
      <section className="flex h-[200px] items-center justify-center bg-stone-900">
        <p className="text-sm text-gray-500">Нет доступных видео</p>
      </section>
    );
  }



  return (
    <section className="flex h-[500px] flex-col-reverse lg:flex-col ">
      <div className="w-full h-full flex bg-stone-900 flex-col lg:flex-row ">
        <iframe
          className="w-full h-full inset-0 m-auto"
          src={activeVideo?.source ?? ''}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="flex flex-col overflow-x-hidden overflow-y-scroll w-full lg:w-[360px] scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-stone-900">
          <div className="p-4 border-b border-stone-600">
            <h3 className="text-lg">My projects</h3>
            <p className="flex items-center gap-2 text-sm text-gray-500">
              <Clapperboard />
              {videos.length} videos
            </p>
          </div>
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={clsx(
                activeVideo.id === video.id ? 'bg-stone-800' : 'bg-stone-900',
                'px-4 py-8 flex items-center w-full h-[100px] cursor-pointer hover:bg-stone-800 border-b border-stone-600',
              )}
              onClick={() => setActiveVideo(video)}
            >
              <div className="flex items-baseline w-full  gap-2 text-sm">
                <span>{++index}</span>
                <span className="flex-1 text-sm">{video.name}</span>
                <span className="text-sm">{video.timing}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 gap-2">
        <h3 className="text-lg font-bold">{activeVideo?.name}</h3>
        <p className="text-sm text-gray-500">{activeVideo?.description}</p>
      </div>
    </section>
  );
}
