"use client";

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, TrendingUp, Code, Palette, Users, Camera } from 'lucide-react';
import Link from 'next/link';
import ServiceBlock from '../ServiceBlock';
import ServiceLink from '../ServiceLink';

const servicesData = [
  {
    title: 'SEO',
    icon: <Globe size={18} className="text-yellow-400" />,
    list: [
      'Local SEO',
      'Technical SEO',
      'eCommerce SEO',
      'Franchise SEO',
      'Enterprise SEO',
      'Generative Engine Optimization',
      'SEO Audits',
      'Franchise SEO Audit',
      'Enterprise SEO Audit',
    ],
  },
  {
    title: 'Digital Marketing',
    icon: <TrendingUp size={18} className="text-pink-500" />,
    list: [
      'Content Marketing',
      'Social Media Marketing',
      'Performance Marketing',
      'E-commerce Marketing',
      'Marketing Automation',
    ],
  },
  {
    title: 'Web Design & Development',
    icon: <Code size={18} className="text-green-500" />,
    list: [
      'Web Development',
      'App Development',
      'Software Development',
      'Database Development',
      'WordPress Website Design',
      'Custom Website Design',
    ],
  },
  {
    title: 'Creative Design',
    icon: <Palette size={18} className="text-purple-500" />,
    list: ['Branding', 'UI/UX Design', 'Graphic Design', 'Motion & 3D Design'],
  },
  {
    title: 'LinkedIn Growth',
    icon: <Users size={18} className="text-[#0A66C2]" />,
    list: [
      'LinkedIn Profile Optimization',
      'LinkedIn Page Setup & Strategy',
      'Resume Writing',
      'Personal Branding',
    ],
  },
  {
    title: 'Consulting',
    icon: <Users size={18} className="text-gray-500" />,
    list: [
      'Marketing Consulting',
      'Digital Transformation Consulting',
      'Design Consulting',
      'Branding Consulting',
    ],
  },
  {
    title: 'Media Production',
    icon: <Camera size={18} className="text-red-500" />,
    list: ['Photography', 'Video Production'],
  },
];

type MobileServicesDropdownProps = {
  isOpen: boolean;
};

const MobileServicesDropdown: FC<MobileServicesDropdownProps> = ({ isOpen }) => {
  const [activeSubServiceIndex, setActiveSubServiceIndex] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full bg-gray-50 px-4 pb-4 lg:hidden"
        >
          {servicesData.map((service, i) => (
            <div key={i} className="mb-3 text-left">
              {/* Ligne du service principal */}
              <div className="flex items-center justify-between">
                {/* Nom du service cliquable */}
                <span className="flex items-center gap-2 font-semibold text-[#330052]">
                  <ServiceLink serviceTitle={service.title}>
                    <span className="flex items-center gap-2">
                      {service.icon} {service.title}
                    </span>
                  </ServiceLink>
                </span>

                 <button
                  className="ml-2"
                  onClick={() =>
                    setActiveSubServiceIndex(activeSubServiceIndex === i ? null : i)
                  }
                  aria-label="Afficher les sous-services"
                >
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      activeSubServiceIndex === i ? 'rotate-90' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="#330052"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

               <AnimatePresence>
                {activeSubServiceIndex === i && (
                  <motion.div
                    key="serviceblock"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="pl-4 pt-2"
                  >
                    <ServiceBlock
                      icon={service.icon}
                      title={service.title}
                      services={service.list}
                      hideTitle={true} 
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileServicesDropdown;
