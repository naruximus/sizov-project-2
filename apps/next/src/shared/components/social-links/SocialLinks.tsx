import { Instagram, LucideIcon, Mail, MessageSquare } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  text: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    href: 'contact@sizovds.ru',
    label: 'Написать на email',
    text: 'contact@sizovds.ru',
  },
  {
    icon: MessageSquare,
    href: 'https://t.me/mstr_f_pppts',
    label: 'Написать в Telegram',
    text: 'Telegram: @mstr_f_pppts',
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/mstr_f_pppts',
    label: 'Перейти в Instagram',
    text: 'Instagram: @mstr_f_pppts',
  },
];

export const SocialLinks = () => {
  return (
    <ul className="space-y-2">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <li key={index} className="flex items-center gap-2">
            <Icon size={20} className="text-neutral-500" />
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label={link.label}
            >
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}; 