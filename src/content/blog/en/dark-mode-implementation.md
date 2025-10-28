---
title: "Implementing Dark Mode in React Applications"
excerpt: "A comprehensive guide to adding dark mode support to your React applications with smooth transitions and user preference persistence."
date: "2024-10-25"
author: "Boris WebDev"
tags: ["React", "Dark Mode", "UI/UX", "Tailwind CSS"]
image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop"
---

# Implementing Dark Mode in React Applications

Dark mode has become an essential feature in modern web applications. Users expect the ability to switch between light and dark themes, and it's crucial for accessibility and user experience.

## Why Dark Mode Matters

### Benefits of Dark Mode
- **Reduced eye strain** in low-light environments
- **Better battery life** on OLED displays
- **Improved accessibility** for users with light sensitivity
- **Modern aesthetic** that users expect

## Implementation Strategy

### 1. Theme Provider Setup

```typescript
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'light',
  setTheme: () => null,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### 2. Theme Toggle Component

```typescript
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-lg border border-gray-200 dark:border-gray-700"
    >
      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
```

### 3. Tailwind CSS Configuration

```javascript
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
};
```

## Advanced Features

### System Preference Detection

```typescript
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  setTheme(mediaQuery.matches ? 'dark' : 'light');
  
  const handler = (e: MediaQueryListEvent) => {
    setTheme(e.matches ? 'dark' : 'light');
  };
  
  mediaQuery.addEventListener('change', handler);
  return () => mediaQuery.removeEventListener('change', handler);
}, []);
```

### Smooth Transitions

```css
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

## Best Practices

1. **Test in both modes** during development
2. **Use semantic colors** instead of hardcoded values
3. **Provide smooth transitions** between themes
4. **Remember user preference** with localStorage
5. **Consider accessibility** in color choices

## Conclusion

Implementing dark mode enhances user experience and shows attention to modern design standards. With the right approach, you can create a seamless theme switching experience that users will appreciate.