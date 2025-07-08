'use client';

import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import styles from './ConnectSection.module.css';
import { AboutDict } from '@/lib/dictionaries';

type ConnectType = AboutDict["about"]["connect"];

interface ConnectSectionProps {
  dict: ConnectType;
}

// Lazy load icons from react-icons for better performance
const FaLinkedin = dynamic(() => import('react-icons/fa6').then(mod => mod.FaLinkedin), { ssr: false });
const FaXTwitter = dynamic(() => import('react-icons/fa6').then(mod => mod.FaXTwitter), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa6').then(mod => mod.FaInstagram), { ssr: false });
const FaFacebook = dynamic(() => import('react-icons/fa6').then(mod => mod.FaFacebook), { ssr: false });

const ConnectSection: React.FC<ConnectSectionProps> = ({ dict }) => {
  const socialLinks = [
    {
      href: dict.socialMedia.linkedin.url,
      label: dict.socialMedia.linkedin.title,
      Icon: FaLinkedin,
      bg: "linear-gradient(135deg, #0077B5 0%, #00c6fb 100%)",
      title: dict.socialMedia.linkedin.title,
      subtitle: dict.socialMedia.linkedin.subtitle,
      type: 'LinkedIn',
    },
    {
      href: dict.socialMedia.twitter.url,
      label: dict.socialMedia.twitter.title,
      Icon: FaXTwitter,
      bg: "linear-gradient(135deg, #232526 0%, #000000 100%)",
      title: dict.socialMedia.twitter.title,
      subtitle: dict.socialMedia.twitter.subtitle,
      type: 'X',
    },
    {
      href: dict.socialMedia.instagram.url,
      label: dict.socialMedia.instagram.title,
      Icon: FaInstagram,
      bg: "linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)",
      title: dict.socialMedia.instagram.title,
      subtitle: dict.socialMedia.instagram.subtitle,
      type: 'Instagram',
    },
    {
      href: dict.socialMedia.facebook.url,
      label: dict.socialMedia.facebook.title,
      Icon: FaFacebook,
      bg: "linear-gradient(135deg, #1877F2 0%, #00c6fb 100%)",
      title: dict.socialMedia.facebook.title,
      subtitle: dict.socialMedia.facebook.subtitle,
      type: 'Facebook',
    },
  ];

  return (
    <section className={`${styles.connectSection} overflow-hidden`} aria-labelledby="connect-heading">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-between md:px-0">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col text-center md:text-left mb-8 md:mb-0 relative items-center md:items-start">
          <div className="absolute -left-4 md:-left-6 -top-4 md:-top-3 w-12 h-12 rounded-[25%] z-0"
            style={{
              background: 'linear-gradient(135deg, #330052 0%, #ffd900 100%)',
              opacity: 0.18,
              pointerEvents: 'none'
            }}
          />
          <h2 id="connect-heading" className="relative z-10 text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, #330052 0%, #ffd900 100%)' }}>
            {dict.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0 relative z-10">
            {dict.description}
          </p>
        </div>

        {/* Right: Social Media Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 w-full max-w-md mx-auto">
          {socialLinks.map(({ href, label, Icon, bg, title, subtitle, type }) => {
            let brandColor = '#000';
            let cardHoverClass = '';
            switch (type) {
              case 'LinkedIn':
                brandColor = '#0077B5';
                cardHoverClass = styles.cardLinkedin;
                break;
              case 'Facebook':
                brandColor = '#1877F2';
                cardHoverClass = styles.cardFacebook;
                break;
              case 'Instagram':
                brandColor = '#E1306C';
                cardHoverClass = styles.cardInstagram;
                break;
              case 'X':
                brandColor = '#000000';
                cardHoverClass = styles.cardX;
                break;
            }

            return (
              <div
                key={label}
                className="rounded-2xl p-0 md:p-px mb-2 md:mb-4 transition-all duration-300 w-full bg-white md:bg-[linear-gradient(135deg,_#330052_0%,_#ffd900_100%)]"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`group w-full aspect-square max-w-[180px] md:max-w-[220px] flex items-center justify-center rounded-2xl shadow-md transition-transform duration-300 hover:scale-107 hover:shadow-2xl hover:-translate-y-1 focus:outline-none border border-transparent group-hover:border-[#ffd900] mx-auto ${styles.cardSocial} ${cardHoverClass}`}
                >
                  <div className="flex flex-col items-center justify-center p-4 md:p-8 rounded-2xl w-full h-full min-h-[120px] md:min-h-[180px] transition-all duration-300">
                    <span
                      className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 aspect-square rounded-[12px] mb-2 md:mb-4 transition-all duration-300 shadow group-hover:bg-white"
                      style={{ background: bg }}
                    >
                      <Icon
                        className={`w-6 h-6 md:w-8 md:h-8 object-contain block text-white transition-all duration-300 group-hover:text-[${brandColor}]`}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-[#374151] text-base md:text-lg font-bold mb-0.5 md:mb-1 w-full text-center transition-all duration-300 group-hover:text-white">
                      {title}
                    </span>
                    <span className="text-[#6B7280] text-xs md:text-sm text-center w-full transition-all duration-300 group-hover:text-[rgba(255,255,255,0.8)]">
                      {subtitle}
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(ConnectSection);
