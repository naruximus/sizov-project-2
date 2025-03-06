'use client';

import imgActor from '@/shared/assets/images/Actor.jpg';
import imgContacts from '@/shared/assets/images/Contact.jpg';
import imgPhotos from '@/shared/assets/images/Photos.jpg';
import imgHorizontal from '@/shared/assets/images/Video_Horizontal.jpg';
import imgVertical from '@/shared/assets/images/Video_Vertical.jpg';
import actorBlack from '@/shared/assets/lotties/actor_black.json';
import contactBlack from '@/shared/assets/lotties/contact_black.json';
import horizontalBlack from '@/shared/assets/lotties/Horizontal_black.json';
import photosBlack from '@/shared/assets/lotties/photos_black.json';
import verticalBlack from '@/shared/assets/lotties/Vertical_black.json';
import { PhotoLink } from '@/views/main/ui/navigation-blocks/ui/photo-link';

export function NavigationBlocks() {
  const links = [
    {
      href: '/videoHorizontal',
      imageSrc: imgHorizontal,
      imageAlt: 'Горизонтальные видео',
      animationData: horizontalBlack,
      text: 'Горизонтальные видео',
    },

    {
      href: '/videoVertical',
      imageSrc: imgVertical,
      imageAlt: 'Вертикальные видео',
      animationData: verticalBlack,
      text: 'Вертикальные видео',
    },

    {
      href: '/photos',
      imageSrc: imgPhotos,
      imageAlt: 'Фото',
      animationData: photosBlack,
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
      href: '/contacts',
      imageSrc: imgContacts,
      imageAlt: 'Контакты',
      animationData: contactBlack,
      text: 'Контакты',
    },
  ];

  return (
    <section className="space-y-0 mt-20">
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
