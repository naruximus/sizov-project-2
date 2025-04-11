'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, onClick, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        'hover:text-neutral-400 transition-colors',
        isActive ? 'text-white' : 'text-neutral-500',
        className,
      )}
    >
      {children}
    </Link>
  );
}
