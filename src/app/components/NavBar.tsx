"use client";

import { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '../components/LanguageSwitcher';
import useCurrentLocale from '../../../hooks/useCurrentLocale';
import DesktopServicesDropdown from './dropDownComponent/DesktopServicesDropdown';
import MobileServicesDropdown from './dropDownComponent/MobileServicesDropdown';
 
type NavBarProps = {
  activeUnderline?: string;
};

const NavBar: FC<NavBarProps> = ({ activeUnderline }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServiceDropdown, setMobileServiceDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locale = useCurrentLocale();
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: `/${locale}/contact` },
    { label: 'About', href: `/${locale}/about` },
  ];

  // Close the dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdown(false);
      }
    }

    if (servicesDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdown]);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between max-w-8xl mx-auto relative z-50 h-[100px]">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center h-full">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={90}
            className="object-contain max-h-16 md:max-h-20 lg:max-h-24 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex gap-6 text-sm md:text-base font-medium relative">
          {navItems.map((item) => (
            <li key={item.label} className="relative overflow-visible">
              {item.label === 'Services' ? (
                <>
                  <button
                    onClick={() => setServicesDropdown(!servicesDropdown)}
                    className="flex items-center gap-1 hover:text-[#FBD915] px-5"
                    aria-haspopup="true"
                    aria-expanded={servicesDropdown}
                  >
                    {item.label}
                  </button>

                  {servicesDropdown && (
                    <div ref={dropdownRef}>
                      <DesktopServicesDropdown isOpen={true} />
                    </div>
                  )} 

                </>
              ) : (
                <Link href={item.href} className="transition-colors duration-200 hover:text-[#FBD915] px-3">
                  {item.label}
                  {activeUnderline === item.label && (
                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-6.5 lg:-top-9.5 xl:-top-9.5 2xl:-top-9.5 w-14 h-2 rounded-full bg-white z-10" />
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* LanguageSwitcher + Mobile Menu */}
      <div className="flex items-center gap-5 text-sm md:text-base">
        <LanguageSwitcher />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#FBD915] focus:outline-none z-50"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-[100%] left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 lg:hidden z-40"
          >
            {navItems.map((item) => (
              <div key={item.label} className="w-full text-center">
                {item.label === 'Services' ? (
                  <>
                    <button
                      onClick={() => setMobileServiceDropdown(!mobileServiceDropdown)}
                      className="py-2 px-4 w-full text-[#301f50] hover:text-[#FBD915] font-semibold"
                      aria-expanded={mobileServiceDropdown}
                      aria-controls="mobile-services-sublist"
                    >
                      {item.label}
                    </button>
                    <AnimatePresence>
                      {mobileServiceDropdown && (
                        <motion.div
                          id="mobile-services-sublist"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="w-full bg-gray-50 px-4 pb-4 lg:hidden"
                        >
                          {/* Mobile Service Block */}
                          <MobileServicesDropdown isOpen={mobileServiceDropdown} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-2 px-4 text-[#301f50] hover:text-[#FBD915] w-full block"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header> 
  );
};

export default NavBar;
