'use client';

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

import {
  Menu,
  X,
  ChevronDown,
  Globe,
  TrendingUp,
  Code,
  Palette,
  Users,
  Camera,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type NavBarProps = {
  logoSize?: number;
  activeUnderline?: string;
};

const listVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};


const NavBar: FC<NavBarProps> = ({ logoSize = 130, activeUnderline }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdown(false);
      }
    }

    if (servicesDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesDropdown]);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto relative z-50">
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

      {/* Center Nav */}
      <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex gap-6 text-sm md:text-base font-medium relative">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.label === "Services" ? (
                <>
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="flex items-center gap-1 hover:text-[#FBD915] px-5"
              >
                {item.label}
                {/* Invisible spacer to preserve layout */}
              </button>

                  <AnimatePresence>
                    {servicesDropdown && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute top-full left-[430%] -translate-x-[66.6%] mt-4 z-40"
                      >
                        <div className="relative">
                          {/* Triangle Arrow */}
                            <div className="absolute -top-2 left-[53%] -translate-x-[200px] w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-white drop-shadow-md z-50" />

                          {/* Dropdown Content */}
                          <div className="w-[100vw] max-w-[1500px] bg-white shadow-2xl rounded-xl py-8 px-10 flex gap-8 border border-gray-100">
                            <div className="w-[300px] flex-shrink-0 h-contain">
                              <Image
                                src="/contact.png"
                                alt="Services"
                                width={250}
                                height={400}
                                className="rounded-xl object-cover w-full h-full"
                              />
                            </div>

                            <div className="grid grid-cols-3 gap-8 flex-grow">
                              {/* SEO */}
                              <ServiceBlock
                                icon={<Globe size={18} className="text-yellow-400" />}
                                title="SEO"
                                services={[
                                  "Local SEO",
                                  "Technical SEO",
                                  "eCommerce SEO",
                                  "Franchise SEO",
                                  "Enterprise SEO",
                                  "Generative Engine Optimization",
                                  "SEO Audits",
                                  "Franchise SEO Audit",
                                  "Enterprise SEO Audit",
                                ]}
                              />

                              {/* Digital Marketing */}
                              <ServiceBlock
                                icon={<TrendingUp size={18} className="text-pink-500" />}
                                title="Digital Marketing"
                                services={[
                                  "Content Marketing",
                                  "Social Media Marketing",
                                  "Performance Marketing",
                                  "E-commerce Marketing",
                                  "Marketing Automation",
                                ]}
                              />

                              {/* Development */}
                              <ServiceBlock
                                icon={<Code size={18} className="text-green-500" />}
                                title="Web Design & Development"
                                services={[
                                  "Web Development",
                                  "App Development",
                                  "Software Development",
                                  "Database Development",
                                  "WordPress Website Design",
                                  "Custom Website Design",
                                ]}
                              />

                              {/* Creative Design */}
                              <ServiceBlock
                                icon={<Palette size={18} className="text-purple-500" />}
                                title="Creative Design"
                                services={[
                                  "Branding",
                                  "UI/UX Design",
                                  "Graphic Design",
                                  "Motion & 3D Design",
                                ]}
                              />
                              {/* LinkedIn Growth */}
                              <ServiceBlock
                                icon={<FaLinkedin className="text-[#0A66C2] w-[18px] h-[18px]" />}
                                title="LinkedIn Growth"
                                services={[
                                  "LinkedIn Profile Optimization",
                                  "LinkedIn Page Setup & Strategy",
                                  "Resume Writing",
                                  "Personal Branding",
                                ]}
                              />
                              {/* Consulting */}
                              <ServiceBlock
                                icon={<Users size={18} className="text-gray-500" />}
                                title="Consulting"
                                services={[
                                  "Marketing Consulting",
                                  "Digital Transformation Consulting",
                                  "Design Consulting",
                                  "Branding Consulting",
                                ]}
                              />

                              {/* Media Production */}
                              <ServiceBlock
                                icon={<Camera size={18} className="text-red-500" />}
                                title="Media Production"
                                services={["Photography", "Video Production"]}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-[#FBD915] px-3"
                >
                  {item.label}
                  {activeUnderline === item.label && (
                    <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-14 h-2 rounded-full bg-white" />
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu button */}
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

const ServiceBlock = ({
  icon,
  title,
  services,
}: {
  icon: React.ReactNode;
  title: string;
  services: string[];
}) => (
  <div>
    <h4 className="flex items-center gap-2 font-bold text-[#301f50] text-sm uppercase mb-4">
      {icon} {title}
    </h4>
    <motion.ul initial="hidden" animate="visible">
      {services.map((service, i) => (
        <motion.li
          key={i}
          custom={i}
          variants={listVariants}
          className="text-sm text-gray-700 hover:text-[#FBD915] transition-colors duration-200"
        >
          {service}
        </motion.li>
      ))}
    </motion.ul>
  </div>
);
