'use client';

import React, { useState } from 'react'; 
import { FAQDict } from '@/lib/dictionaries';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import Breadcrumb from '@/app/components/Breadcrumb';
import FAQItem from '@/app/components/FAQItem';
import Image from 'next/image';

interface FAQPageUIProps {
  dict: FAQDict; 
}

const FAQPageUI: React.FC<FAQPageUIProps> = ({ dict }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  
  return (
    <>
      <section className="min-h-[35vh] bg-[#301F50] text-white font-sans">
        <NavBar activeUnderline={dict.faqTitle} />
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{dict.faqTitle}</h1>
          <Breadcrumb homeLabel={dict.breadcrumbHome1} currentLabel={dict.breadcrumbFAQ} />
        </div>
      </section>

      <main className="flex flex-col lg:flex-row items-center justify-center w-full bg-white py-20 px-6 lg:px-32 min-h-screen">
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 relative">
          <div className="absolute left-0 top-0 h-full w-2 rounded-l-full bg-gradient-to-b from-[#301f50] to-[#f7d416]" />
          <Image src="/FAQ.webp" alt="FAQ Illustration" width={400} height={400} className="z-10" />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#301f50] to-[#f7d416] mb-2">
            FAQ
          </div>
          <h2 className="text-4xl font-extrabold text-[#16012b] mb-8">{dict.faqHeading}</h2>
          <div className="space-y-4">
            {dict.faqItems.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                openIndex={openIndex}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQPageUI;
