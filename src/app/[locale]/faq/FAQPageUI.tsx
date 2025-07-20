'use client';

import { useState } from 'react';
import { FAQDict } from '@/lib/dictionaries';
import NavBar from '@/app/components/navBar/NavBar';
import FAQItem from '@/app/components/FAQItem';
import Image from 'next/image';
import dynamic from 'next/dynamic';

 const Breadcrumb = dynamic(() => import('@/app/components/Breadcrumb'), {
  ssr: false,
  loading: () => <div className="text-sm text-gray-400">Chargement...</div>,
});

interface FAQPageUIProps {
  dict: FAQDict;
  locale: string;
}

export default function FAQPageUI({ dict, locale }: FAQPageUIProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
      <section className="min-h-[35vh] bg-[#330052] text-white font-sans">
        <NavBar activeUnderline={dict.faqTitle} />
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{dict.faqTitle}</h1>
          <Breadcrumb homeLabel={dict.breadcrumbHome1} currentLabel={dict.breadcrumbFAQ} locale= {locale} />
        </div>
      </section>

      <main className="flex flex-col lg:flex-row items-center justify-center w-full bg-white py-20 px-6 lg:px-32">
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 relative">
          <div className="absolute left-0 top-0 h-full w-2 rounded-l-full bg-gradient-to-b from-[#330052] to-[#f7d416]" />
          <Image
            src="/FAQ.webp"
            alt="FAQ"
            width={400}
            height={400}
            className="z-10"
            loading="lazy"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#330052] to-[#f7d416] mb-2">
            FAQ
          </p>
          <h2 className="text-4xl font-extrabold text-[#16012b] mb-8">{dict.faqHeading}</h2>
          <div className="space-y-4">
            {dict.faqItems.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
                openIndex={openIndex}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
