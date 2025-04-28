'use client';

import { type RefObject, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useOnClickOutside } from 'usehooks-ts';

import { NavLink } from '../nav-link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useOnClickOutside(menuRef as RefObject<HTMLElement>, () => {
    setIsOpen(false);
  });

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity ease-in-out ${
          isOpen ? 'opacity-70' : 'opacity-0 pointer-events-none'
        } z-10 md:hidden`}
      />

      <nav className={`fixed top-0 left-0 w-full z-20 bg-neutral-900 mt-0 ${isOpen ? 'opacity-100' : 'opacity-80'}`}>
        <div className="flex justify-between items-center max-w-6xl p-2 mx-auto">
          <NavLink href="/">sizov</NavLink>

          <button
            onClick={toggleMenu}
            className="md:hidden text-neutral-200"
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <div className="hidden md:flex gap-8">
            <NavLink href="/videoHorizontal">horizontal.mov</NavLink>
            <NavLink href="/videoVertical">vertical.mp4</NavLink>
            <NavLink href="/photos">photos.jpeg</NavLink>
            <NavLink href="/actor">me.actor</NavLink>
            <NavLink href="/contact">contacts.me</NavLink>
          </div>

          <div
            ref={menuRef}
            className={`md:hidden absolute top-8 left-0 w-full bg-neutral-900 transition-all duration-500 ease-in-out z-20 ${
              isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'
            }`}
          >
            <NavLink
              href="/videoHorizontal"
              onClick={toggleMenu}
              className="block py-2 text-center"
            >
              horizontal.mov
            </NavLink>
            <NavLink href="/videoVertical" onClick={toggleMenu} className="block py-2 text-center">
              vertical.mp4
            </NavLink>
            <NavLink href="/photos" onClick={toggleMenu} className="block py-2 text-center">
              photos.jpeg
            </NavLink>
            <NavLink href="/actor" onClick={toggleMenu} className="block py-2 text-center">
              me.actor
            </NavLink>
            <NavLink href="/contact" onClick={toggleMenu} className="block py-2 text-center">
              contacts.me
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
