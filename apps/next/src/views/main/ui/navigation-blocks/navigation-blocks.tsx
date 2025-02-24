'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function NavigationBlocks() {
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    parallaxRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.transform = `translate(-50%, -50%) translateY(${scrollPosition * 0.05}px)`;
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="space-y-0 mt-20">
      <Link href="/portfolio" className="relative block w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/IMG_5291.jpg"
            alt="Портфолио"
            layout="responsive"
            width={1920}
            height={1000}
            className="object-cover"
            ref={(el) => { parallaxRefs.current[0] = el; }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-light">Портфолио</h2>
        </div>
      </Link>

      <Link href="/video" className="relative block w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/IMG_9724.jpg"
            alt="Видео"
            layout="responsive"
            width={1920}
            height={1000}
            className="object-cover"
            ref={(el) => { parallaxRefs.current[1] = el; }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              objectPosition: 'center',
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-light">Видео</h2>
        </div>
      </Link>

      <Link href="/contacts" className="relative block w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/Mstr_ph-1460165.jpg"
            alt="Контакты"
            layout="responsive"
            width={1920}
            height={1000}
            className="object-cover"
            ref={(el) => { parallaxRefs.current[2] = el; }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              objectPosition: 'center',
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-light">Контакты</h2>
        </div>
      </Link>
    </section>
  );
}
