import React from 'react';

export default function Pattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="zellige" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          {/* A minimalist Tunisian-inspired geometric pattern */}
          <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="3" fill="currentColor" stroke="none" />
          <rect x="28" y="28" width="4" height="4" transform="rotate(45 30 30)" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#zellige)" />
    </svg>
  );
}