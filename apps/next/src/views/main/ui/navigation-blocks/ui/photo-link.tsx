import React, { useState } from 'react';
import type { LottieOptions } from 'lottie-react';
import dynamic from 'next/dynamic';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface Props {
  href: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  animationData: LottieOptions['animationData'];
}

export const PhotoLink = ({ href, imageSrc, imageAlt, animationData }: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Link href={href}>
      <div className="relative w-full h-[350px] md:h-[666px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-black/30 flex items-center"
          onMouseEnter={() => setIsAnimating(true)}
          onMouseLeave={() => setIsAnimating(false)}
        >
          <Lottie animationData={animationData} loop={isAnimating} className="w-full h-[600px]" />
        </div>
      </div>
    </Link>
  );
};
