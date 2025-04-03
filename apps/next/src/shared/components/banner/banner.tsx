'use client';
import React from 'react';
import type { LottieOptions } from 'lottie-react';
import dynamic from 'next/dynamic';
import Image, { type StaticImageData } from 'next/image';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface Props {
  imageSrc: StaticImageData;
  imageAlt: string;
  animationData: LottieOptions['animationData'];
}

export const Banner = ({ imageSrc, imageAlt, animationData }: Props) => {
  return (
    <div className="relative w-full h-[300px] md:h-[700px] overflow-hidden">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="relative max-w-[1000px] ">
          <Lottie animationData={animationData} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
