'use client';

import imgActor from '@/shared/assets/images/Actor2.jpg';
import imgContacts from '@/shared/assets/images/Contact.jpg';
import imgPhotos from '@/shared/assets/images/Photos.jpg';
import imgHorizontal from '@/shared/assets/images/Video_Horizontal.jpg';
import imgVertical from '@/shared/assets/images/Video_Vertical.jpg';
import actorBlack from '@/shared/assets/lotties/actor_black.json';
import contactBlack from '@/shared/assets/lotties/contact_black.json';
import horizontalWhite from '@/shared/assets/lotties/Horizontal_white.json';
import photosWhite from '@/shared/assets/lotties/photos_white.json'
import verticalWhite from '@/shared/assets/lotties/Vertical_white.json';
import { PhotoLink } from '@/views/main/ui/navigation-blocks/ui/photo-link';

export function NavigationBlocks() {
  const links = [
    {
      href: '/videoHorizontal',
      imageSrc: imgHorizontal,
      imageAlt: 'Горизонтальные видео',
      animationData: horizontalWhite,
      text: 'Горизонтальные видео',
    },

    {
      href: '/videoVertical',
      imageSrc: imgVertical,
      imageAlt: 'Вертикальные видео',
      animationData: verticalWhite,
      text: 'Вертикальные видео',
    },

    {
      href: '/photos',
      imageSrc: imgPhotos,
      imageAlt: 'Фото',
      animationData: photosWhite,
      text: 'Фото',
    },
    {
      href: '/actor',
      imageSrc: imgActor,
      imageAlt: 'Актер',
      animationData: actorBlack,
      text: 'Актер',
    },
    {
      href: '/contact',
      imageSrc: imgContacts,
      imageAlt: 'Контакты',
      animationData: contactBlack,
      text: 'Контакты',
    },
  ];

  return (
    <section className="space-y-0">
      {links.map((link) => (
        <PhotoLink
          key={link.href}
          href={link.href}
          imageSrc={link.imageSrc}
          imageAlt={link.imageAlt}
          animationData={link.animationData}
        />
      ))}
    </section>
  );
}
