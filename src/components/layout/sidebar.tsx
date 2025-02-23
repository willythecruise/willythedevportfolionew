'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import Link from '@/components/navigation/link';
import { NAV_LINKS } from '@/lib/data';
import Typography from '@/components/general/typography';
import ThemeSwitcher from '@/components/general/theme-switcher';
import DownloadCV from '../general/download-cv';
import Button from '../general/button';
import { useTheme } from 'next-themes';

const Sidebar = ({ isOpen, onClose, isDarkTheme }: { isOpen: boolean; onClose: () => void; isDarkTheme: boolean }) => {
 const {theme}= useTheme()
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // const handleScroll = () => {
    //   if (isOpen) {
    //     onClose();
    //   }
    // };

    window.addEventListener('keydown', handleEscape);
    // window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      // window.removeEventListener('scroll', handleScroll);
    };
  }, [onClose, isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 bg-gray-800 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className={`fixed top-0 right-0 w-64 h-full shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <Typography variant="h3" className="font-bold">
            {'<EW/>'}
          </Typography>
          <Button onClick={onClose}>
            <X />
          </Button>
        </div>
        <ul className="flex flex-col p-4">
          {NAV_LINKS.map((link, index) => (
            <Typography key={index} className="my-2">
              <Link href={link.href} onClick={onClose}>
                {link.label}
              </Link>
            </Typography>
          ))}
        </ul>
        <div className="flex flex-col p-4">
          <div className="flex items-center justify-between">

            <ThemeSwitcher />
          </div>
        </div>
        <DownloadCV />
      </div>
    </div>
  );
};

export default Sidebar; 