'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

// Динамический импорт Lottie с отключением SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import actor_black from '../../../../../public/lotties/actor_black.json';
import contact_black from '../../../../../public/lotties/contact_black.json';
import Horizontal_black from '../../../../../public/lotties/Horizontal_black.json';
import photos_black from '../../../../../public/lotties/photos_black.json';
import Vertical_black from '../../../../../public/lotties/Vertical_black.json';

export function NavigationBlocks() {
  // Создаем состояния для управления воспроизведением каждой анимации
  const [isAnimatingPortfolio, setIsAnimatingPortfolio] = useState(false);
  const [isAnimatingVideo, setIsAnimatingVideo] = useState(false);
  const [isAnimatingActor, setIsAnimatingActor] = useState(false);
  const [isAnimatingPhotos, setIsAnimatingPhotos] = useState(false);
  const [isAnimatingContact, setIsAnimatingContact] = useState(false);

  return (
    <section className="space-y-0 mt-20">
      <Link href="/portfolio" className="relative block w-full h-[350px] md:h-[871px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/IMG_5291.jpg"
            alt="Портфолио"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0 bg-black/30 flex items-center justify-center"
          onMouseEnter={() => setIsAnimatingPortfolio(true)}
          onMouseLeave={() => setIsAnimatingPortfolio(false)}
        >
          <Lottie
            animationData={Horizontal_black}
            loop={isAnimatingPortfolio}
            className="w-full h-[600px]"
          />
        </div>
      </Link>

      <Link href="/video" className="relative block w-full h-[350px] md:h-[871px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/IMG_9724.jpg"
            alt="Видео"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0 bg-black/30 flex items-center justify-center"
          onMouseEnter={() => setIsAnimatingVideo(true)}
          onMouseLeave={() => setIsAnimatingVideo(false)}
        >
          <Lottie
            animationData={Vertical_black}
            loop={isAnimatingVideo}
            className="w-full h-[600px]"
          />
        </div>
      </Link>

      <Link href="/contacts" className="relative block w-full h-[350px] md:h-[871px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/Mstr_ph-1460165.jpg"
            alt="Контакты"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0 bg-black/30 flex items-center justify-center"
          onMouseEnter={() => setIsAnimatingActor(true)}
          onMouseLeave={() => setIsAnimatingActor(false)}
        >
          <Lottie
            animationData={actor_black}
            loop={isAnimatingActor}
            className="w-full h-[600px]"
          />
        </div>
      </Link>

      <Link href="/contacts" className="relative block w-full h-[350px] md:h-[871px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/Mstr_ph-1460165.jpg"
            alt="Контакты"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0 bg-black/30 flex items-center justify-center"
          onMouseEnter={() => setIsAnimatingPhotos(true)}
          onMouseLeave={() => setIsAnimatingPhotos(false)}
        >
          <Lottie
            animationData={photos_black}
            loop={isAnimatingPhotos}
            className="w-full h-[600px]"
          />
        </div>
      </Link>

      <Link href="/contacts" className="relative block w-full h-[350px] md:h-[871px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/Mstr_ph-1460165.jpg"
            alt="Контакты"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0 bg-black/30 flex items-center justify-center"
          onMouseEnter={() => setIsAnimatingContact(true)}
          onMouseLeave={() => setIsAnimatingContact(false)}
        >
          <Lottie
            animationData={contact_black}
            loop={isAnimatingContact}
            className="w-full h-[600px]"
          />
        </div>
      </Link>
    </section>
  );
}
