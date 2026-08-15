import React from 'react';

interface CornerShapeProps {
  color: string;
  className?: string;
}

export default function CornerShape({ color, className = '' }: CornerShapeProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M -20 -20 L 25 70 L 50 20 L 75 70 L 120 -20"
        stroke={color}
        strokeWidth="35"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
