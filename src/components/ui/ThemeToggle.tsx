'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <button className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
        <div className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      ) : (
        <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
}