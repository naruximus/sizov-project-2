import type { Metadata } from 'next';

import { Footer, Navigation } from '@/shared/components';
import './global.css';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon/favicon.ico',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/favicon/apple-touch-icon.png',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-192x192',
        url: '/favicon/android-chrome-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon/android-chrome-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
      {
        rel: 'favicon-16x16',
        url: '/favicon/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        rel: 'favicon-32x32',
        url: '/favicon/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
  },
  title: 'sizov',
  description: `Привет, меня зовут Дима! С 2007 года держу в руках камеру с 2018 года занимаюсь фото и видео съемкой профессионально. За это время успел создать бессчетное количество контента для театров, выставочных пространств, баров, артистов, музыкантов, режиссеров, (среди которых - Александринский театр, ЦВЗ Манеж, группа Zoloto, телеканал 2Х2 И так далее) ну и для друзей, конечно же. С некоторыми из моих работ, вы можете ознакомиться здесь! Приятного просмотра!`,
  other: {
    'og:url': 'https://mfp.best',
    'og:type': 'website',
    'og:title': 'sizov',
    'twitter:title': 'sizov',
    'og:description': `Привет, меня зовут Дима! С 2007 года держу в руках камеру с 2018 года занимаюсь фото и видео съемкой профессионально. За это время успел создать бессчетное количество контента для театров, выставочных пространств, баров, артистов, музыкантов, режиссеров, (среди которых - Александринский театр, ЦВЗ Манеж, группа Zoloto, телеканал 2Х2 И так далее) ну и для друзей, конечно же. С некоторыми из моих работ, вы можете ознакомиться здесь! Приятного просмотра!`,
    'twitter:description': `Привет, меня зовут Дима! С 2007 года держу в руках камеру с 2018 года занимаюсь фото и видео съемкой профессионально. За это время успел создать бессчетное количество контента для театров, выставочных пространств, баров, артистов, музыкантов, режиссеров, (среди которых - Александринский театр, ЦВЗ Манеж, группа Zoloto, телеканал 2Х2 И так далее) ну и для друзей, конечно же. С некоторыми из моих работ, вы можете ознакомиться здесь! Приятного просмотра!`,
    'og:image': '/logo-preview.png',
    'twitter:image': '/logo-preview.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen bg-neutral-900 text-white font-mono">
          <Navigation />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
