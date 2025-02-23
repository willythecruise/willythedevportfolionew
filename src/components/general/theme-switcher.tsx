'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Typography from './typography';

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Default to dark theme
  const {setTheme,theme}= useTheme()

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);


  };
  useEffect(() => {
    const newTheme = isDarkTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  }, [isDarkTheme]);

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme" className={`p-2 sm:p-0 ${theme === "dark" ? "bg-black" : "bg-white"} sm:bg-transparent`}>
    <Typography className={`block sm:hidden ${theme === "dark" ? "text-white" : "text-black"}`}>Switch Theme</Typography>
      {isDarkTheme ? <Sun  /> : <Moon />}
    </button>
  );
};

export default ThemeSwitcher;

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
