'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import styles from './ServiceSection.module.css';
import type { HomeDict } from '@/lib/dictionaries';

interface ServicesSectionProps {
  dict: HomeDict['services'];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const backgrounds = [
  'linear-gradient(to right, #ffd900, #330052)',
  'linear-gradient(to right, #330052, #ffd900)',
];

export default function ServicesSection({ dict }: ServicesSectionProps) {
  return (
    <section className={styles['services-section']}>
      <div className={styles['services-header']}>
        <p className={styles['services-subtitle']}>{dict.subtitle}</p>
        <h2 className={styles['services-title']}>{dict.title}</h2>
      </div>

      <div className={styles['services-grid']}>
        {dict.cards.map((card, i) => (
          <motion.div
            key={card.number}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className={styles['card-wrapper']}
            style={{
              width: card.wide ? '720px' : '370px',
              background: backgrounds[i % 2],
            }}
          >
            <div className={styles['card-inner']}>
              <div
                className={`${styles['card-content']} ${
                  card.image ? styles['flex-row'] : styles['flex-col']
                }`}
              >
                <div className={styles['card-column']}>
                  <h3 className={styles['card-title']}>{card.title}</h3>
                  <p className={styles['card-text']}>{card.text}</p>
                  <div className={styles['card-icon']}>
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {card.image && (
                  <div className={styles['card-image']}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={card.number === '01'}
                      loading={card.number === '01' ? 'eager' : 'lazy'}
                    />
                  </div>
                )}
              </div>
              <div className={styles['card-number']}>{card.number}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles['services-button-container']}>
        <Link href="/services" className={styles['services-button']}>
          {dict.button}
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
