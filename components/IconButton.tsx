"use client";

import { ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'light' | 'dark';
  className?: string;
  ariaLabel?: string;
}

export default function IconButton({
  children,
  onClick,
  variant = 'light',
  className = '',
  ariaLabel = '',
}: IconButtonProps) {
  const variants = {
    light: 'bg-white text-gray-700 hover:shadow-lg',
    dark: 'bg-blue-900 text-white hover:shadow-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-full shadow-md hover:shadow-lg transition-shadow ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  );
}