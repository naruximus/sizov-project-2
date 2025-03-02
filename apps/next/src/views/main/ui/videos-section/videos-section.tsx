'use client';

import { useState } from 'react';
import clsx from 'clsx';

const videos = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/1cZ3K3kQELw?si=6PQsCd4nAsTds4Y7',
    name: 'YT: Голоса #1 (Пилот)',
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/IYeYXKJIInw?si=j4yxKK_9gfQiwjfm',
    name: 'YT: Голоса #2 (Баку)',
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/UfNmMJkrrkg?si=0UPtrQPEOmlBpPa_',
    name: 'YT: #СкеТЧинез. Выпуск 1.',
  },
  {
    id: 4,
    src: 'https://vkvideo.ru/video_ext.php?oid=-20696208&id=456239587&hd=2&autoplay=1',
    name: 'VK: Искусство в действии',
  },
];

export function VideosSection() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  console.log(activeVideo);

  return (
    <div className="flex">
      <iframe
        className="w-full h-[50vh] inset-0 m-auto"
        src={activeVideo.src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="w-[300px] flex flex-col gap-2">
        {videos.map((video) => (
          <div
            key={video.id}
            className={clsx(
              activeVideo.id === video.id && 'bg-blue-500',
              'p-2 flex items-center w-full h-[100px] bg-red-500 hover:bg-blue-500 cursor-pointer',
            )}
            onClick={() => setActiveVideo(video)}
          >
            {video.id} {video.name}
          </div>
        ))}
      </div>
    </div>
  );
}
