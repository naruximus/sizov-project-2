import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

// Динамический импорт Lottie с отключением SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  animationData: Record<string, unknown>;
}

const CustomLink: React.FC<LinkProps> = ({
  href,
  className,
  imageSrc,
  imageAlt,
  animationData,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Link href={href} className={className}>
      <div className="relative w-full h-[350px] md:h-[871px]">
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

export default CustomLink;
