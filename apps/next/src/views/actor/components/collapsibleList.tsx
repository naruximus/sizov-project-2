'use client';

import { ReactNode, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleListProps {
  children: ReactNode;
  initialHeight?: number;
  maxHeight?: number;
}

export function CollapsibleList({
  children,
  initialHeight = 400,
  maxHeight = 2000,
}: CollapsibleListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-6 text-neutral-200">
      <div
        style={{
          maxHeight: isExpanded ? `${maxHeight}px` : `${initialHeight}px`,
          transition: 'max-height 0.5s ease-in-out',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-4 text-sm"
        >
          <span>{isExpanded}</span>
          {isExpanded ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
        </button>
      </div>
    </div>
  );
}
