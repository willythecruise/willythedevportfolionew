'use client';

import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '@/components/layout/sidebar';
import { NAV_LINKS } from '@/lib/data';
import { mergeClasses } from '@/lib/utils';
import useScroll from '@/hooks/use-scroll';
import Link from '@/components/navigation/link';
import ThemeSwitcher from '@/components/general/theme-switcher';
import IconButton from '@/components/general/icon-button';
import DownloadCV from '@/components/general/download-cv';
import Typography from '@/components/general/typography';

const Logo = () => (
  <Typography variant="h3" className="font-bold">
    {'<EW/>'}
  </Typography>
);

const Header = () => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <header
      className={mergeClasses(
        'sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100',
        scrolled ? 'bg-gray/50 backdrop-blur-xl md:border-gray-100' : ''
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Link href="/" noCustomization>
          <Logo />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-gray-100"></div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <DownloadCV />
          </div>
        </div>

        <IconButton className='sm:hidden' onClick={() => setIsOpen(true)}>
          <Menu />
        </IconButton>
      </div>

    
     <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} isDarkTheme={isDarkTheme} />
   
    </header>
  );
};

export default Header;
