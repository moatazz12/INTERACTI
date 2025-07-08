'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { i18n } from '@/lib/i18n';

type Props = {
  isMobile?: boolean;
};

export default function LanguageSwitcher({ isMobile = false }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = usePathname().split('/');
  const currentLang = path[1];

  const langLabel = currentLang === 'fr' ? 'Français' : 'English';
  const flagUrl =
    currentLang === 'fr'
      ? 'https://flagcdn.com/fr.svg'
      : 'https://flagcdn.com/gb-eng.svg';

  const changeLanguage = (lang: string) => {
    path[1] = lang;
    router.push(path.join('/'));
    setOpen(false);
  };

  return (
    <div className={`relative ${isMobile ? 'w-full px-4 py-2 mt-4' : ' top-0'} z-50`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-2 border border-transparent bg-transparent ${
          isMobile ? 'text-[#301F50]' : 'text-white'
        } px-2 py-1 rounded-md hover:text-[#FBD915] transition duration-150 text-sm`}
      >
        <div className="flex items-center gap-2">
          <img src={flagUrl} alt="flag" width={20} height={15} className="rounded-sm" />
          <span>{langLabel}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${
              isMobile ? 'left-0 w-full' : 'right-0 w-44'
            } mt-2 bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm`}
          >
            {i18n.locales.map((loc) => (
              <li
                key={loc}
                onClick={() => changeLanguage(loc)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#fbd91518] cursor-pointer text-sm text-[#301F50]"
              >
                <img
                  src={loc === 'fr' ? 'https://flagcdn.com/fr.svg' : 'https://flagcdn.com/gb-eng.svg'}
                  alt={loc}
                  width={20}
                  height={15}
                  className="rounded-sm"
                />
                {loc === 'fr' ? 'Français' : 'English'}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
