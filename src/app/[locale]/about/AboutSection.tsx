'use client';

import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import styles from './AboutSection.module.css';
import type { AboutDict } from '@/lib/dictionaries';

type AboutSectionType = AboutDict["about"]["aboutSection"];

interface AboutSectionProps {
  dict: AboutSectionType;
}

const AboutSection: React.FC<AboutSectionProps> = ({ dict }) => {
  return (
    <section className={styles.aboutSection}>
      {/* Titre principal */}
      <header className="text-center mb-8">
        <h2 className="text-[48px] font-bold text-[#330052] leading-tight mb-4">
          {dict.title}
        </h2>
        <div className="mx-auto w-20 h-1 rounded-full bg-[#ffd900] mb-4" />
      </header>

      {/* Boîtes décoratives */}
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={`${styles.decorativeBox} ${styles[`box${i}`]}`}>
          <div className="w-[80px] h-[81px] relative">
            <div className="w-full h-full rounded-[40px/40.5px] mix-blend-darken bg-[linear-gradient(to_bottom,#330052_0%,#ffd900_100%)] opacity-20" />
          </div>
        </div>
      ))}

      {/* Contenu principal */}
      <div className={styles.aboutContainer}>
        {/* Image d'équipe */}
        <div className={styles.teamImageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt={dict.teamImage.alt}
            className={styles.teamImage}
            width={1200} // specify the width and height for responsive images
            height={550}
            priority // prioritize loading for the first visible image
          />
          <div className={styles.teamImageOverlay}>
            <h2>{dict.teamImage.title}</h2>
            <p>{dict.teamImage.description}</p>
          </div>
        </div>

        {/* Cartes */}
        <div className={`${styles.aboutGrid} relative`}>
          {/* Vision */}
          <div className={`${styles.aboutCard} relative`}>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt={dict.cards.vision.imageAlt}
              width={600}
              height={400}
            />
            <h3>{dict.cards.vision.title}</h3>
            <p>{dict.cards.vision.description}</p>
          </div>

          {/* Expertise */}
          <div className={styles.aboutCard}>
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt={dict.cards.expertise.imageAlt}
              width={600}
              height={400}
            />
            <h3>{dict.cards.expertise.title}</h3>
            <p>{dict.cards.expertise.description}</p>
          </div>

          {/* Engagement */}
          <div className={styles.aboutCard}>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt={dict.cards.commitment.imageAlt}
              width={600}
              height={400}
            />
            <h3>{dict.cards.commitment.title}</h3>
            <p>{dict.cards.commitment.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
