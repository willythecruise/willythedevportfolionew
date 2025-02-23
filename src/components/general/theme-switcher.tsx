'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Default to dark theme

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkTheme ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitcher;

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
