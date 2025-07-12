'use client';

import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import styles from './SeoServiceSection.module.css';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { HomeDict } from '@/lib/dictionaries';

interface SeoSectionProps {
  dict: HomeDict['seoSection'];
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 },
  },
};

export default function SEOSection({ dict }: SeoSectionProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [sliderRef, sliderInstance] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 4, spacing: 15 },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 2 },
      },
    },
  });

  useEffect(() => {
    if (!sliderInstance.current) return;

    intervalRef.current = setInterval(() => {
      sliderInstance.current?.next();
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [sliderInstance]);

  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {/* Background shapes */}
      <div className={styles.circleTopLeft} />
      <div className={styles.circleTopRight} />
      <div className={styles.bottomDecoration} />

      {/* Main content */}
      <div className={styles.mainContent}>
        <motion.div className={styles.textColumn} variants={fadeLeft}>
          <h3 className={styles.subheading}>{dict.subheading}</h3>
          <h2 className={styles.heading}>{dict.heading}</h2>
          <p className={styles.description}>{dict.description}</p>
          <Link href="/about" className={styles.button}>
            {dict.button}
            <span className={styles.buttonIcon}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 17l5-5-5-5v10z" />
              </svg>
            </span>
          </Link>
        </motion.div>

        <motion.div className={styles.imageColumn} variants={fadeRight}>
          <Image
            src="/aboutsection.webp"
            alt="SEO Illustration"
            width={600}
            height={600}
            className={styles.image}
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
