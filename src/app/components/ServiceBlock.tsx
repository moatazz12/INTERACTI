'use client'; 

import { FC, memo } from 'react';
import { motion,Variants } from 'framer-motion';
import ServiceLink from './ServiceLink';

type Props = {
  icon: React.ReactNode;
  title: string;
  services: string[];
  locale: string;
  hideTitle?: boolean;
};

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

const ServiceBlock: FC<Props> = ({ icon, title, services, locale, hideTitle = false }) => (
  <div>
    {!hideTitle && (
      <h4 className="flex items-center gap-2 font-bold text-[#301f50] text-sm uppercase mb-4">
        {icon} {title}
      </h4>
    )}
    <motion.ul initial="hidden" animate="visible">
      {services.map((service, i) => (
        <motion.li key={service} custom={i} variants={listVariants}>
          <ServiceLink serviceTitle={title} subServiceName={service} locale={locale} />
        </motion.li>
      ))}
    </motion.ul>
  </div>
);

// ✅ memo pour éviter les re-render inutiles
export default memo(ServiceBlock);
