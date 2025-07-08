'use client';

import { motion, Variants } from 'framer-motion';
import { FC } from 'react'; 
import ServiceLink from './ServiceLink';

const listVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

type ServiceBlockProps = {
  icon: React.ReactNode;
  title: string;
  services: string[];
  hideTitle?: boolean;
};

const ServiceBlock: FC<ServiceBlockProps> = ({ icon, title, services, hideTitle = false }) => (
  <div>
     {!hideTitle && (
      <h4 className="flex items-center gap-2 font-bold text-[#301f50] text-sm uppercase mb-4">
        {icon} {title}
      </h4>
    )}
    
    <motion.ul initial="hidden" animate="visible">
      {services.map((service, i) => (
        <motion.li key={i} custom={i} variants={listVariants}>
          <ServiceLink serviceTitle={title} subServiceName={service} />
        </motion.li>
      ))}
    </motion.ul>
  </div>
);

export default ServiceBlock;
