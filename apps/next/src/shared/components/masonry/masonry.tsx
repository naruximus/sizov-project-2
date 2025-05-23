'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { type ResponsiveMasonryProps } from 'react-responsive-masonry';

import type { TStrapiMedia } from '@/shared/model/strapi-media';
import { getImageUrl } from '@/shared/utils/get-image-url';

import { Modal } from '../modal';

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
  responsiveProps: Omit<ResponsiveMasonryProps, 'children'>;
  images: TStrapiMedia[];
};

export const Masonry = ({ images, responsiveProps }: Props) => {
  const [selectedImage, setSelectedImage] = useState<TStrapiMedia>(images[0]);
  const [isOpen, setIsOpen] = useState(false);

  const isFirstImage = images[0].id === selectedImage.id;
  const isLastImage = images[images.length - 1].id === selectedImage.id;

  const handleNextImage = () => {
    const currentIndex = images.findIndex((image) => image.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePreviousImage = () => {
    const currentIndex = images.findIndex((image) => image.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="relative w-full h-full max-h-[90vh] max-w-full object-contain">
          <div className="absolute w-full h-full flex justify-between items-center p-2">
            {!isFirstImage && (
              <button
                type="button"
                className="text-white bg-black rounded-full p-1 bg-opacity-50"
                onClick={handlePreviousImage}
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {!isLastImage && (
              <button
                type="button"
                className="ml-auto text-white bg-black rounded-full p-1 bg-opacity-50"
                onClick={handleNextImage}
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>
          <Image
            key={selectedImage.id}
            width={selectedImage.formats.large.width}
            height={selectedImage.formats.large.height}
            alt={selectedImage.caption ?? selectedImage.name}
            src={getImageUrl(selectedImage.formats.large.url)}
            className="max-h-[90vh] max-w-full object-contain mx-auto"
            style={{ objectFit: 'contain' }}
          ></Image>
        </div>
      </Modal>

      <ResponsiveMasonry
        {...responsiveProps}
      >
        <ReactMasonry>
          {images.map((image) => {
            const format = image.formats.small;
            return (
              <Image
                className="cursor-zoom-in"
                onClick={() => {
                  setSelectedImage(image);
                  setIsOpen(true);
                }}
                key={image.id}
                width={format.width}
                height={format.height}
                alt={image.caption ?? image.name}
                src={getImageUrl(format.url)}
              />
            );
          })}
        </ReactMasonry>
      </ResponsiveMasonry>
    </>
  );
};
