'use client';

import imgVideo from '@/shared/assets/images/1.jpg';
import imgContacts from '@/shared/assets/images/2.jpg';
import imgPortfolio from '@/shared/assets/images/3.jpg';
import actorBlack from '@/shared/assets/lotties/actor_black.json';
import contactBlack from '@/shared/assets/lotties/contact_black.json';
import horizontalBlack from '@/shared/assets/lotties/Horizontal_black.json';
import photosBlack from '@/shared/assets/lotties/photos_black.json';
import verticalBlack from '@/shared/assets/lotties/Vertical_black.json';
import { PhotoLink } from '@/views/main/ui/navigation-blocks/ui/photo-link';

export function NavigationBlocks() {
  const links = [
    {
      href: '/portfolio',
      imageSrc: imgPortfolio,
      imageAlt: 'Портфолио',
      animationData: horizontalBlack,
      text: 'Портфолио',
    },
    {
      href: '/video',
      imageSrc: imgVideo,
      imageAlt: 'Видео',
      animationData: verticalBlack,
      text: 'Видео',
    },
    {
      href: '/contacts',
      imageSrc: imgContacts,
      imageAlt: 'Контакты',
      animationData: actorBlack,
      text: 'Контакты',
    },
    {
      href: '/contacts',
      imageSrc: imgContacts,
      imageAlt: 'Контакты',
      animationData: photosBlack,
      text: 'Контакты',
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
