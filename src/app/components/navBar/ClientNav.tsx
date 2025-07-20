'use client';

import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

import LanguageSwitcher from '../../components/LanguageSwitcher';
import useCurrentLocale from '@/../hooks/useCurrentLocale';

const DesktopServicesDropdown = dynamic(() => import('../dropDownComponent/DesktopServicesDropdown'), { ssr: false });
const MobileServicesDropdown = dynamic(() => import('../dropDownComponent/MobileServicesDropdown'), { ssr: false });

type Props = {
  activeUnderline?: string;
};

const ClientNav = ({ activeUnderline }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServiceDropdown, setMobileServiceDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locale = useCurrentLocale();

  const navItems = useMemo(() => [
    { label: 'Home', href: `/${locale}/home` },
    { label: 'Services', href: '#' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: `/${locale}/contact` },
    { label: 'About', href: `/${locale}/about` },
  ], [locale]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setServicesDropdown(false);
    }
  }, []);

  useEffect(() => {
    if (servicesDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [servicesDropdown, handleClickOutside]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex gap-6 text-sm md:text-base font-medium relative">
          {navItems.map(({ label, href }) => (
            <li key={label} className="relative">
              {label === 'Services' ? (
                <>
                  <button
                    onClick={() => setServicesDropdown(!servicesDropdown)}
                    className="flex items-center gap-1 hover:text-[#FFD900] px-5"
                    aria-haspopup="true"
                    aria-expanded={servicesDropdown}
                  >
                    {label}
                    {activeUnderline === label && (
                          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-6.5 lg:-top-9.5 xl:-top-9.5 2xl:-top-9.5 w-14 h-2 rounded-full bg-white z-10" />
                        )}
                  </button>
                  <div ref={dropdownRef}>
                    <DesktopServicesDropdown isOpen={servicesDropdown} locale={locale} />
                  </div>
                </>
              ) : (
                <Link href={href} className="flex items-center gap-1 hover:text-[#FFD900] px-5">
                  {label}
                  {activeUnderline === label && (
                          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-6.5 lg:-top-9.5 xl:-top-9.5 2xl:-top-9.5 w-14 h-2 rounded-full bg-white z-10" />
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* LanguageSwitcher + Mobile Menu Toggle */}
      <div className="flex items-center gap-5">
        <LanguageSwitcher />
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="lg:hidden text-[#FFD900] z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 lg:hidden z-40"
          >
            {navItems.map(({ label, href }) => (
              <div key={label} className="w-full text-center">
                {label === 'Services' ? (
                  <>
                    <button
                      onClick={() => setMobileServiceDropdown(!mobileServiceDropdown)}
                      className="py-2 px-4 w-full text-[#330052] hover:text-[#FFD900] font-semibold"
                      aria-expanded={mobileServiceDropdown}
                      aria-controls="mobile-services-sublist"
                    >
                      {label}
                    </button>
                    <AnimatePresence>
                      {mobileServiceDropdown && (
                        <motion.div
                          id="mobile-services-sublist"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full bg-gray-50 px-4 pb-4"
                        >
                          <MobileServicesDropdown isOpen={mobileServiceDropdown} locale={locale} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="py-2 px-4 text-[#330052] hover:text-[#FFD900] w-full block"
                  >
                    {label}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
  
};

export default ClientNav;
