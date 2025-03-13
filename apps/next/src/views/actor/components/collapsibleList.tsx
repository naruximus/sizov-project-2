'use client'; // Для Next.js, если нужно

import { useState } from 'react';

interface Section {
  title: string;
  roles: string[];
  titleClass?: string;
}

export default function CollapsibleList({ sections, visibleItems = 3 }: { sections: Section[]; visibleItems?: number }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  if (!sections || !sections[0]) {
    return <p className="text-red-500">Нет данных о ролях</p>;
  }

  const renderFirstSection = () => (
    <>
      <p className={sections[0].titleClass}>{sections[0].title}</p>
      <ul className="list-disc list-inside ml-4 mt-2">
        {sections[0].roles.slice(0, visibleItems).map((role, index) => (
          <li key={`first-${index}`}>{role}</li>
        ))}
        {isExpanded &&
          sections[0].roles.slice(visibleItems).map((role, index) => (
            <li key={`first-hidden-${index}`}>{role}</li>
          ))}
      </ul>
    </>
  );

  const renderHiddenSections = () =>
    sections.slice(1).map((section, index) => {
      return (
        <div key={`section-${index}`}>
          <p className={section.titleClass}>{section.title}</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            {section.roles.map((role, idx) => (
              <li key={`section-${index}-${idx}`}>{role}</li>
            ))}
          </ul>
        </div>
      );
    });
  return (
    <div className="mt-4 text-gray-200">
      {renderFirstSection()}
      {isExpanded && renderHiddenSections()}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-white focus:outline-none"
          aria-label={isExpanded ? 'Скрыть' : 'Показать больше'}
        >
          <svg
            className={`w-6 h-6 transform transition-transform hover:scale-110 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}