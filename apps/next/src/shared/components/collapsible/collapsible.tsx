'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  children: ReactNode;
  initialHeight?: number;
  maxHeight?: number;
  className?: string;
}

export function Collapsible({ children, initialHeight = 440, maxHeight = 4000, className }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setNeedsToggle(contentHeight > initialHeight);
    }
  }, [children, initialHeight]);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={contentRef}
        style={{
          maxHeight: isExpanded ? `${maxHeight}px` : `${initialHeight}px`,
          transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out',
          opacity: isExpanded ? 1 : 0.9,
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
      {needsToggle && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          {!isExpanded && (
            <div className="w-full h-20 bg-gradient-to-t from-neutral-900 to-transparent" />
          )}
          <button
            onClick={() => setIsExpanded((prevValue) => !prevValue)}
            className="absolute top-0 flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 self-center"
            aria-label={isExpanded ? 'Свернуть' : 'Развернуть'}
          >
            {isExpanded ? <ChevronUp size={35} /> : <ChevronDown size={35} />}
          </button>
        </div>
      )}
    </div>
  );
}
