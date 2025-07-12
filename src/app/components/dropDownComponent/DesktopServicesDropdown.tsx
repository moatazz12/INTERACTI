"use client";

import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, TrendingUp, Code, Palette, Users, Camera } from 'lucide-react';
import ServiceBlock from '../ServiceBlock';
import Image from 'next/image';
import Link from 'next/link';
import ServiceLink from '../ServiceLink';

const servicesData = [
  {
    title: 'SEO',
    icon: <Globe size={18} className="text-yellow-400" />,
    list: ['Local SEO', 'Technical SEO', 'eCommerce SEO', 'Franchise SEO', 'Enterprise SEO', 'Generative Engine Optimization', 'SEO Audits', 'Franchise SEO Audit', 'Enterprise SEO Audit'],
  },
  {
    title: 'Digital Marketing',
    icon: <TrendingUp size={18} className="text-pink-500" />,
    list: ['Content Marketing', 'Social Media Marketing', 'Performance Marketing', 'E-commerce Marketing', 'Marketing Automation'],
  },
  {
    title: 'Web Design & Development',
    icon: <Code size={18} className="text-green-500" />,
    list: ['Web Development', 'App Development', 'Software Development', 'Database Development', 'WordPress Website Design', 'Custom Website Design'],
  },
  {
    title: 'Creative Design',
    icon: <Palette size={18} className="text-purple-500" />,
    list: ['Branding', 'UI/UX Design', 'Graphic Design', 'Motion & 3D Design'],
  },
  {
    title: 'LinkedIn Growth',
    icon: <Users size={18} className="text-[#0A66C2]" />,
    list: ['LinkedIn Profile Optimization', 'LinkedIn Page Setup & Strategy', 'Resume Writing', 'Personal Branding'],
  },
  {
    title: 'Consulting',
    icon: <Users size={18} className="text-gray-500" />,
    list: ['Marketing Consulting', 'Digital Transformation Consulting', 'Design Consulting', 'Branding Consulting'],
  },
  {
    title: 'Media Production',
    icon: <Camera size={18} className="text-red-500" />,
    list: ['Photography', 'Video Production'],
  },
];

type DesktopServicesDropdownProps = {
  isOpen: boolean;
};

const DesktopServicesDropdown: FC<DesktopServicesDropdownProps> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.25 }}
          className="fixed top-[60px] left-1/2 transform -translate-x-1/2 z-40 w-[90vw] max-w-[1300px] bg-white shadow-2xl rounded-xl py-8 px-10 flex gap-8 border border-gray-100"
        >
          {/* Triangle au-dessus du dropdown */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-white" />

          {/* Image à gauche */}
          <div className="w-full md:w-[300px] h-[200px] md:h-auto flex-shrink-0">
            <Image
              src="/contact.png"
              alt="Services"
              layout="responsive"
              width={300}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          {/* Liste des services */}
          <div className="grid grid-cols-3 gap-8 flex-grow">
            {servicesData.map((service, index) => (
              <div key={index}>
                <ServiceLink
                  serviceTitle={service.title}
                >
                  <span className="flex items-center gap-2 font-bold text-[#00000] hover:text-[#FFD900] mb-2">
                    {service.icon}
                    {service.title}
                  </span>
                </ServiceLink>

                <ServiceBlock
                  icon={service.icon}
                  title={service.title}
                  services={service.list}
                  hideTitle={true}
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopServicesDropdown;
