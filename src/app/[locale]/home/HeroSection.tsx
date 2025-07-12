'use client';
import Image from 'next/image';
import Head from 'next/head';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState, useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';
import { HomeDict } from '@/lib/dictionaries';

interface HeroSectionProps {
  dict: HomeDict['hero'];
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, sliderInstanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
    created() {
      // Accessibilité
      const slides = document.querySelectorAll('.keen-slider__slide');
      slides.forEach((slide, index) => {
        slide.setAttribute('role', 'group');
        slide.setAttribute('aria-label', `${index + 1} of ${slides.length}`);
        slide.setAttribute('tabindex', '0');
      });
    },
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!sliderInstanceRef.current) return;
    intervalRef.current = setInterval(() => {
      sliderInstanceRef.current?.next();
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [sliderInstanceRef]);

  return (
    <>
      <Head>
        <title>Interacti Marketing Agency - Digital Marketing Solutions</title>
        <meta
          name="description"
          content="Unlock your brand's full potential with our expert digital marketing services including SEO, Web Development, and Content Production."
        />
        <link rel="canonical" href="https://www.interactiagency.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Interacti Marketing Agency - Digital Marketing Solutions" />
        <meta property="og:description" content="Unlock your brand's full potential with our expert digital marketing services." />
        <meta property="og:image" content="https://www.interactiagency.com/og-image.jpg" />
        <meta property="og:url" content="https://www.interactiagency.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interacti Marketing Agency - Digital Marketing Solutions" />
        <meta name="twitter:description" content="Unlock your brand's full potential with our expert digital marketing services." />
        <meta name="twitter:image" content="https://www.interactiagency.com/twitter-image.jpg" />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Interacti Marketing Agency',
              description: 'Digital marketing agency delivering strategic solutions that drive real results.',
              url: 'https://www.interactiagency.com/',
              logo: 'https://www.interactiagency.com/logo.png',
              sameAs: [
                'https://www.facebook.com/interactiagency',
                'https://www.linkedin.com/company/interactiagency',
              ],
            }),
          }}
        />
      </Head>

      <section className={styles.heroSection} aria-label="Hero section">
        {/* Capsule gauche */}
        <Image src="/left.webp" alt="" width={600} height={600} className={styles.capsuleGauche} priority aria-hidden="true" />

        {/* Texte */}
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{dict.title}</h1>

            <div className={styles.arrowIcon}>
              <Image src="/arrow.png" alt="Arrow icon" width={60} height={60} aria-hidden="true" />
            </div>

            <div className={styles.trafficBox}>
              <p className={styles.trafficLabel}>{dict.trafficLabel}</p>
              <div className={styles.trafficData}>
                <span className={styles.trafficNumber}>{dict.trafficValue}</span>
                <span className={styles.trafficChange}>{dict.trafficChange}</span>
              </div>
            </div>
          </div>

          <p className={styles.heroDescription}>
            {dict.descriptionBefore}{' '}
            {dict.services.map((service, i) => (
              <span key={i} className={styles.highlight}>
                {service}
                {i < dict.services.length - 1 ? ', ' : ''}
              </span>
            ))}{' '}
            {dict.descriptionAfter}
          </p>
        </div>

        {/* Carrousel */}
        <div className={styles.carouselWrapper} aria-label="Image carousel">
          <div ref={sliderRef} className={`keen-slider ${styles.carousel}`}>
            <div className="keen-slider__slide number-slide1 relative">
              <Image src="/design.jpg" alt="Creative design work example" fill className="object-cover w-full h-full" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="keen-slider__slide number-slide2 relative">
              <video
                src="/homevideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
                aria-label="Marketing video presentation"
                title="Marketing video presentation"
              >
                <track kind="captions" srcLang="en" label="English captions" />
              </video>
            </div>
            <div className="keen-slider__slide number-slide3 relative">
              <Image src="/consulting.jpg" alt="Business consulting meeting" fill className="object-cover w-full h-full" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>

          {/* Pagination */}
          <div className={styles.carouselDots} role="tablist">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => sliderInstanceRef.current?.moveToIdx(idx)}
                className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
                role="tab"
                aria-label={`Go to slide ${idx + 1}`}
                aria-selected={currentSlide === idx}
                tabIndex={currentSlide === idx ? 0 : -1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
