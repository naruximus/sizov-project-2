'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  children: ReactNode;
  initialHeight?: number;
  maxHeight?: number;
}

export function Collapsible({ children, initialHeight = 400, maxHeight = 2000 }: Props) {
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
    <div className="space-y-6 text-neutral-200">
      <div
        ref={contentRef}
        style={{
          maxHeight: isExpanded ? `${maxHeight}px` : `${initialHeight}px`,
          transition: 'max-height 0.5s ease-in-out',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
      {needsToggle && (
        <div className="flex justify-center">
          <button
            onClick={() => setIsExpanded((prevValue) => !prevValue)}
            className="flex items-center gap-2 text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-4 text-sm"
          >
            {isExpanded ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
          </button>
        </div>
      )}
    </div>
  );
}
