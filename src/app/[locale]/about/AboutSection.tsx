import React from 'react';
import Image from 'next/image';
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
            <div
              className="w-full h-full rounded-[40px/40.5px] mix-blend-darken"
              style={{
                background: 'linear-gradient(to bottom, #330052 0%, #ffd900 100%)',
                opacity: 0.2,
              }}
            />
          </div>
        </div>
      ))}

      {/* Contenu principal */}
      <div className={styles.aboutContainer}>
        {/* Image d'équipe */}
        <div className={styles.teamImageContainer}>
          <Image
            src="/about/aboutTeam1.png"
            alt={dict.teamImage.alt}
            className={styles.teamImage}
            width={1200}
            height={550}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 1024px) 100vw, 80vw"
            priority={false}
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
              src="/about/aboutTeam2.png"
              alt={dict.cards.vision.imageAlt}
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <h3>{dict.cards.vision.title}</h3>
            <p>{dict.cards.vision.description}</p>
          </div>

          {/* Expertise */}
          <div className={styles.aboutCard}>
            <Image
              src="/about/aboutTeam3.png"
              alt={dict.cards.vision.imageAlt}
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <h3>{dict.cards.expertise.title}</h3>
            <p>{dict.cards.expertise.description}</p>
          </div>

          {/* Engagement */}
          <div className={styles.aboutCard}>
            <Image
              src="/about/aboutTeam4.png"
              alt={dict.cards.commitment.imageAlt}
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 50vw"
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
