'use client';

import { ReactNode } from 'react';

interface DyslexiaFriendlyTextProps {
  children: ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
}

export function DyslexiaFriendlyText({ 
  children, 
  size = 'base', 
  weight = 'normal',
  className = '' 
}: DyslexiaFriendlyTextProps) {
  const sizeClasses = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-relaxed',
    xl: 'text-xl leading-relaxed',
    '2xl': 'text-2xl leading-relaxed',
    '3xl': 'text-3xl leading-relaxed'
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  return (
    <span className={`
      ${sizeClasses[size]} 
      ${weightClasses[weight]}
      tracking-wide
      ${className}
    `}>
      {children}
    </span>
  );
}