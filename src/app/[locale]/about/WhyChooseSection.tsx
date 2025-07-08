//L9DIM
'use client';

import React from 'react';
import styles from './WhyChooseSection.module.css';
import type { AboutDict } from '@/lib/dictionaries';  
 
type WhyChooseDict = AboutDict['about']['whyChoose'];

const icons = [
  (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <path d="M3 3v18h18" stroke="#330052" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 15l4-4 4 4" stroke="#ffd900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke="#330052" strokeWidth="2" />
      <path d="M2 20c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#ffd900" strokeWidth="2" />
    </svg>
  ),
  (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <path d="M3 17l6-6 4 4 8-8" stroke="#330052" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19" cy="5" r="2" fill="#ffd900" />
    </svg>
  )
];

const WhyChooseSection: React.FC<{ dict: WhyChooseDict }> = ({ dict }) => {
  return (
    <section className={`w-full bg-white py-4 px-4 flex flex-col items-center justify-center relative ${styles.whyChooseSection}`}>
      {/* Décorations */}
      <div className="hidden md:block absolute top-16 left-8 w-28 h-20 bg-gradient-to-br from-[#330052] to-[#ffd900] rounded-tr-[48px] rounded-bl-[48px] opacity-20 z-0"></div>
      <div className="hidden md:block absolute bottom-22 right-8 w-28 h-20 bg-gradient-to-br from-[#ffd900] to-[#330052] rounded-tr-[48px] rounded-bl-[48px] opacity-25 z-0"></div>

      {/* Header */}
      <div className="max-w-3xl w-full mx-auto text-center mb-8">
        <h2 className={`text-[48px] font-bold text-[#330052] leading-tight mb-4 text-center ${styles.mobileH2}`}>
          {dict.title}
        </h2>
        <span className="block mx-auto mb-4 h-1 w-20 rounded-full bg-[#ffd900] opacity-80"></span>
        <h3 className={`text-lg md:text-xl font-semibold text-[#330052] mt-2 mb-2 tracking-tight ${styles.mobileH3}`}>
          {dict.subtitle}
        </h3>
        <p className={`text-[#555] text-base md:text-lg max-w-2xl mx-auto mb-6 opacity-90 font-light ${styles.mobileP}`}>
          {dict.description}
        </p>
      </div>

      {/* Cartes */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto z-10 items-stretch ${styles.mobileGrid}`}>
        {dict.reasons.map((reason, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-white rounded-tr-[48px] rounded-bl-[48px] border p-8 shadow-md transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform hover:scale-105 hover:-translate-y-2 hover:rotate-2 hover:shadow-lg h-full
              ${styles.mobileCard}
              ${index % 2 === 0 ? 'border-[#330052] hover:border-[#330052]' : 'border-[#ffe066] hover:border-[#ffd900]'}
              ${index % 2 === 0 ? 'md:-translate-y-6' : ''}
            `}
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-white border shadow-sm border-[#330052]">
              {icons[index]}
            </span>
            <h4 className="text-lg font-bold text-[#330052] mb-2 tracking-tight">{reason.title}</h4>
            <p className="text-[#555] text-sm text-center font-light">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
