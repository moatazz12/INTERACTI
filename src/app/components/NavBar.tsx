"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavBarProps = {
  logoSize?: number;
  activeUnderline?: string;
};

const NavBar: FC<NavBarProps> = ({ logoSize = 130, activeUnderline }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto relative z-50">
      
      {/* Logo */}
      <div className="flex items-center" style={{ minWidth: 130 }}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="INTERACTI Logo"
            width={logoSize}
            height={logoSize}
            className="rounded cursor-pointer"
          />
        </Link>
      </div>

      {/* Centered nav (desktop only) */}
      <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex gap-6 text-sm md:text-base font-medium">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              <Link
                href={item.href}
                className="transition-colors duration-200 hover:text-[#FBD915] px-3"
              >
                {item.label}
              </Link>
              {activeUnderline === item.label && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-14 h-2 rounded-full bg-white" />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Burger icon (mobile only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#FBD915] focus:outline-none z-50"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile nav */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-2 px-4 text-[#301f50] hover:text-[#FBD915] w-full text-center"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;
