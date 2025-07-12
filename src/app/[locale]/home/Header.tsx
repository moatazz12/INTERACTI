'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import LanguageSwitcher from '../../components/LanguageSwitcher';
import DesktopServicesDropdown from '../../components/dropDownComponent/DesktopServicesDropdown';
import MobileServicesDropdown from '../../components/dropDownComponent/MobileServicesDropdown';
import useCurrentLocale from '../../../../hooks/useCurrentLocale';

const SocialIcons = dynamic(() => import('../../components/socialicons'), { ssr: false });

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };
    if (desktopDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [desktopDropdownOpen]);

  return (
    <header className="w-full px-6 py-4 bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 relative">

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center h-full">
          <Link href="/">
            <Image
              src="/logo-purple.webp"
              alt="Logo"
              width={180}
              height={90}
              className="object-contain max-h-24 md:max-h-28 lg:max-h-36 w-auto"
              priority
            />
          </Link>
        </div>
        {/* Desktop Navbar */}
        <nav className="hidden lg:flex flex-grow justify-center space-x-16 text-sm font-semibold text-gray-800 h-full items-center">
          {navItems.map((item) => (
            <div key={item.label} className="relative flex flex-col items-center">
              {item.label === 'Home' && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-13 h-3 rounded-full bg-[#330052] shadow-md" />
              )}

              {item.label === 'Services' ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                    className="hover:text-[#FFD900] transition"
                  >
                    {item.label}
                  </button>
                  {desktopDropdownOpen && (
                    <div className="absolute top-full left-0 z-50">
                      <DesktopServicesDropdown isOpen={true} />
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`hover:text-[#FFD900] transition ${item.label === 'Home' ? 'text-[#330052] font-bold' : ''}`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Langue + Social + Burger */}
        <div className="flex items-center space-x-4">
          {/* LanguageSwitcher stylisé comme un bouton rond */}
          <LanguageSwitcher borderColor="border-[#330052]" labelColor="text-[#330052]" />

          <div className="hidden lg:flex space-x-2">
            <SocialIcons />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#330052]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden w-full bg-white shadow-lg flex flex-col items-center py-4 z-40"
          >
            {navItems.map((item) => (
              <div key={item.label} className="w-full text-center">
                {item.label === 'Services' ? (
                  <>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="py-2 text-[#330052] hover:text-[#FFD900] font-semibold w-full"
                    >
                      {item.label}
                    </button>
                    {mobileDropdownOpen && (
                      <div className="w-full bg-gray-50 px-4 pb-4">
                        <MobileServicesDropdown isOpen={mobileDropdownOpen} />
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-[#330052] hover:text-[#FFD900] w-full block"
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
}
