'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { type MasonryProps, type ResponsiveMasonryProps } from 'react-responsive-masonry';

import type { TStrapiMedia } from '@/shared/model/strapi-media';
import { getImageUrl } from '@/shared/utils/get-image-url';

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
  masonryProps: Omit<MasonryProps, 'children'>;
  images: TStrapiMedia[];
};

export const Masonry = ({ images, responsiveProps, masonryProps }: Props) => {
  const { gutter = '12px', ...restMasonryProps } = masonryProps;

  return (
    <ResponsiveMasonry {...responsiveProps}>
      <ReactMasonry gutter={gutter} {...restMasonryProps}>
        {images.map((image) => {
          const format = image.formats.small;
          return (
            <Image
              key={image.id}
              width={format.width}
              height={format.height}
              alt={image.caption ?? image.name}
              src={getImageUrl(format)}
            />
          );
        })}
      </ReactMasonry>
    </ResponsiveMasonry>
  );
};
