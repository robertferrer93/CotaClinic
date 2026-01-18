import React from 'react';

export default function Subtle({ children, className = '' }) {
  return (
    <div className={`mt-2 text-cota-muted leading-relaxed ${className}`}>
      {children}
    </div>
  );
}
