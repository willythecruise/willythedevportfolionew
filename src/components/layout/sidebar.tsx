'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import Link from '@/components/navigation/link';
import { NAV_LINKS } from '@/lib/data';
import Typography from '@/components/general/typography';
import ThemeSwitcher from '@/components/general/theme-switcher';

const Sidebar = ({ isOpen, onClose, isDarkTheme }: { isOpen: boolean; onClose: () => void; isDarkTheme: boolean }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className={`fixed top-0 right-0 w-64 h-full shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <Typography variant="h3" className="font-bold">
            {'<EW/>'}
          </Typography>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <ul className="flex flex-col p-4">
          {NAV_LINKS.map((link, index) => (
            <li key={index} className="my-2">
              <Link href={link.href} onClick={onClose}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col p-4">
          <div className="flex items-center justify-between">
            <Typography>Switch Theme</Typography>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 