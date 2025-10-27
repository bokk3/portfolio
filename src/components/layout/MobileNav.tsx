// src/components/layout/MobileNav.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useEffect } from 'react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{ name: string; href: string }>;
}

export function MobileNav({ isOpen, onClose, navigation }: MobileNavProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed top-16 left-0 right-0 bottom-0 bg-white z-40 md:hidden overflow-y-auto">
        <div className="px-4 py-6 space-y-6">
          {/* Navigation Links */}
          <nav className="space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-500 mb-3">Language</p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                English
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Nederlands
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Français
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button href="/contact" className="w-full" onClick={onClose}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}