'use client';

import { type RefObject, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useIsClient, useOnClickOutside } from 'usehooks-ts';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ children, isOpen, onClose }: Props) => {
  const isClient = useIsClient();
  const contentRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<Element | null>(null);

  useOnClickOutside(contentRef as RefObject<HTMLElement>, (event) => {
    if (event.type === 'click' || event.type === 'mousedown') {
      onClose?.();
    }
  });

  useEffect(() => {
    if (isClient) {
      if (isOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }

      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    }
  }, [isOpen, isClient]);

  useEffect(() => {
    if (isClient) {
      setContainer(document.body);
    }
  }, [isClient]);

  if (!isOpen || !container) {
    return null;
  }

  return createPortal(
    <div
      className={clsx(
        'bg-black overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      <div className="flex relative w-full h-full justify-center items-center p-4">
        <button type="button" className="absolute top-4 right-4 text-white z-10" onClick={onClose}>
          <X size={32} />
          <span className="sr-only">Close modal</span>
        </button>
        <div ref={contentRef} className="w-full">
          {children}
        </div>
      </div>
    </div>,
    container,
  );
};
