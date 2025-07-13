import React, { memo } from 'react';
import Image from 'next/image';
import styles from './WhoWeAreSection.module.css';
import { AboutDict } from '@/lib/dictionaries';

interface WhoWeAreSectionProps {
  dict: AboutDict['about'];
}

const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ dict }) => {
  const { whoWeAre } = dict;

  // Images array for mobile and desktop optimization
  const images: { style: string; src: string; alt: string }[] = [
    {
      style: 'absolute -left-4 xl:-left-6 top-0 w-[280px] xl:w-[320px] h-[300px] xl:h-[340px]',
      src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1350&q=80',
      alt: 'High five',
    },
    {
      style: 'absolute top-0 right-0 w-[220px] xl:w-[260px] h-[180px] xl:h-[220px]',
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1350&q=80',
      alt: 'Charts meeting',
    },
    {
      style: 'absolute bottom-10 xl:bottom-13 right-0 w-[220px] xl:w-[260px] h-[180px] xl:h-[220px]',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1350&q=80',
      alt: 'Sticky notes session',
    },
  ];

   return (
    <section className={`${styles.whoWeAreSection} relative py-10 md:py-16 lg:py-20 font-sans`}>
      {/* Arrière-plan décoratif */}
      <div className="pointer-events-none select-none" aria-hidden>
        <div className="absolute -top-8 -left-8 md:-top-15 md:-left-15 w-24 h-24 md:w-44 md:h-44 rounded-full bg-[#ffd900] opacity-30 -z-10" />
        <div className="absolute -bottom-12 -right-12 md:-bottom-20 md:-right-20 w-32 h-32 md:w-56 md:h-56 rounded-full bg-[#e5e1d8] opacity-40 -z-10" />
        <div className="absolute bottom-8 -left-4 md:bottom-10 md:-left-8 w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#ffd900] opacity-20 -z-10" />
        <div className="absolute top-4 right-[15%] md:top-8 md:right-[10%] w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#e5e1d8] opacity-20 -z-10" />
      </div>

      {/* Traits décoratifs */}
      <div className="absolute w-24 h-2 md:w-[180px] md:h-8 top-8 md:top-15 left-0 rounded-[10px] md:rounded-[20px] rotate-[-18deg] blur-[0.25px] bg-gradient-to-r from-[#301f50] to-[#fbd915] opacity-20 z-0" />
      <div className="absolute w-3 h-16 md:w-[19px] md:h-[120px] bottom-8 left-12 md:bottom-12 md:left-18 rounded-lg rotate-[12deg] blur-[0.25px] bg-gradient-to-b from-[#301f50] to-[#fbd915] opacity-20 z-0" />
      <div className="absolute w-20 h-2 md:w-[160px] md:h-10 bottom-6 right-0 md:bottom-10 rounded-[10px] md:rounded-[20px] rotate-[24deg] blur-[0.25px] bg-gradient-to-r from-[#301f50] to-[#fbd915] opacity-20 z-0" />
      <div className="absolute w-3 h-16 md:w-[19px] md:h-[115px] top-4 right-6 md:top-6 md:right-10 rounded-lg rotate-[-8deg] blur-[0.25px] bg-gradient-to-b from-[#301f50] to-[#fbd915] opacity-20 z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <header className="text-center mb-12 md:mb-20 lg:mb-30">
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#330052] leading-tight mb-4">
            {whoWeAre.title}
          </h2>
          <div className="mx-auto w-20 h-1 rounded-full bg-[#ffd900] mb-4" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-16 items-start">
          {/* Texte */}
          <div className="text-[#330052] flex flex-col justify-start">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold mb-4 md:mb-6 leading-tight">
              {whoWeAre.subtitle}
            </h3>
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-normal">
              {whoWeAre.description}
            </p>
          </div>

          {/* Images */}
          <div className="relative">
            {/* Mobile */}
            <div className="block lg:hidden space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, idx) => (
                  <div key={idx} className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      decoding="async"
                      className="object-cover rounded-2xl border border-[#330052] transition-transform duration-300 ease-in-out hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden lg:block relative h-[400px] xl:h-[500px]">
              {images.map((img, idx) => (
                <div key={idx} className={`${img.style} rounded-2xl overflow-hidden`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="lazy"
                    decoding="async"
                    className="object-cover rounded-2xl border border-[#330052] transition-transform duration-300 ease-in-out hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhoWeAreSection);