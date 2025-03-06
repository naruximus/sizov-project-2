import React, { useEffect, useRef, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        // Прогресс прокрутки конкретного элемента (от 0 до 1)
        const progress = Math.min(Math.max((windowHeight - elementTop) / (windowHeight + elementHeight), 0), 1);
        
        // Смещение от -100 до 100 с центром в 0
        const offset = (progress - 0.5) * 200; // 200px полного движения как на сайте
        setScrollOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link href={href}>
      <div 
        ref={containerRef}
        className="relative w-full h-[350px] md:h-[700px] overflow-hidden"
        onMouseEnter={() => setIsAnimating(true)}
        onMouseLeave={() => setIsAnimating(false)}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-[-100px] left-0 w-full h-[calc(100%+200px)] object-cover transition-transform duration-800 ease-out"
          style={{
            transform: `translateY(${scrollOffset}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <Lottie 
            animationData={animationData} 
            loop={isMobile || isAnimating}
            className="w-full h-[600px]"
          />
        </div>
      </div>
    </Link>
  );
};