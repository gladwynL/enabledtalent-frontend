"use client";

import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'yellow-border' | 'accent' | 'dark' | 'navy' | 'footer-yellow' | 'footer-navy';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  withArrow?: boolean;
  withCircleArrow?: boolean; // NEW: for footer style
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  withArrow = false,
  withCircleArrow = false, // NEW
  ...props
}: ButtonProps) {
  const baseStyles = 'font-bold rounded-full transition-all flex items-center justify-center group';
  
  const variants = {
    // Academy hero buttons
    primary: 'bg-[#1a2b44] text-white hover:bg-blue-900 px-8 py-4',
    'yellow-border': 'bg-yellow-100 border-2 border-[#1a2b44] text-[#1a2b44] hover:bg-yellow-200 px-8 py-4 relative',
    
    // Footer buttons - updated  
    'footer-yellow': 'bg-gradient-to-r from-[#FFD071] to-[#EFB745] text-gray-900 hover:opacity-90 px-7 py-3 shadow-lg hover:shadow-xl',
    'footer-navy': 'bg-gradient-to-r from-[#2B476D] to-[#182434] text-white hover:opacity-90 px-7 py-3 shadow-lg hover:shadow-xl',
    
    // Small buttons
    navy: 'bg-[#1a2b44] text-white hover:bg-blue-900 px-4 py-2 text-sm',
    accent: 'bg-gradient-to-r from-[#FFD071] to-[#EFB745] text-gray-900 hover:opacity-90', // generic
    dark: 'bg-gradient-to-r from-[#2B476D] to-[#182434] text-white hover:opacity-90', // generic
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  // Yellow tint overlay for yellow-border variant
  const YellowOverlay = () => (
    variant === 'yellow-border' ? (
      <div className="absolute inset-0 bg-yellow-400 opacity-20 rounded-full"></div>
    ) : null
  );

  // Regular arrow
  const ArrowIcon = () => (
    withArrow ? (
      <span className="ml-2">→</span>
    ) : null
  );

  // Footer circle arrow
  const CircleArrowIcon = () => {
    if (!withCircleArrow) return null;
    
    const circleClass = variant === 'footer-yellow' 
      ? 'bg-gradient-to-br from-[#FFD071] to-[#EFB745] group-hover:from-[#FFD071]/90 group-hover:to-[#EFB745]/90'
      : 'bg-gradient-to-br from-[#2B476D]/50 to-[#182434]/60 group-hover:from-[#2B476D]/60 group-hover:to-[#182434]/70';
    
    const textColor = variant === 'footer-yellow' ? 'text-gray-900' : 'text-white';
    
    return (
      <span className={`flex items-center justify-center w-11 h-11 rounded-full ${circleClass} transition-colors shadow-sm ml-2.5`}>
        <svg className={`w-5.5 h-5.5 ${textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    );
  };

  const Content = () => (
    <>
      <YellowOverlay />
      <span className="flex items-center justify-center gap-2.5">
        {children}
        {withCircleArrow ? <CircleArrowIcon /> : <ArrowIcon />}
      </span>
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={buttonClass}
        onClick={onClick}
        {...props}
      >
        <Content />
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${buttonClass} relative`}
      {...props}
    >
      <Content />
    </button>
  );
}