import React, { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLength = 150 }) => {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;
  const displayedText = expanded || !shouldTruncate ? text : text.slice(0, maxLength) + '...';

  return (
    <div className="text-gray-800 dark:text-gray-300">
      <p>{displayedText}</p>
      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm text-brand-orange font-medium hover:underline"
        >
          {expanded ? 'Tampilkan lebih sedikit' : 'Lihat selengkapnya'}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
