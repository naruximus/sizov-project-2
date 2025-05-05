import clsx from 'clsx';
import { Instagram, LucideIcon, Mail, Send } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  text: string;
}

interface SocialLinksProps {
  className?: string;
  showText?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    href: 'contact@sizovds.ru',
    label: 'Написать на email',
    text: 'contact@sizovds.ru',
  },
  {
    icon: Send,
    href: 'https://t.me/mstr_f_pppts',
    label: 'Написать в Telegram',
    text: 'Telegram: @mstr_f_pppts',
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/mstr_f_pppts',
    label: 'Перейти в Ig',
    text: 'Ig: @mstr_f_pppts',
  },
];

export const SocialLinks = ({ className = '', showText = false }: SocialLinksProps) => {
  return (
    <ul className={clsx('flex', className)}>
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <li key={index} className="flex items-center gap-2">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label={link.label}
            >
               <Icon size={25} className="text-neutral-500" />
            </a>
            {showText && (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                 className="text-neutral-500 hover:text-neutral-300 transition-colors"
                aria-label={link.label}
              >
                {link.text}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};
