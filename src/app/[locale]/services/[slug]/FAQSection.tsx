'use client';

import { useState } from 'react';
import FAQItem from '@/app/components/FAQItem';
import type { ServiceData } from '@/types/serviceData';

type FAQSectionProps = {
  faqsection: ServiceData["faqsection"];  
};

const FAQSection: React.FC<FAQSectionProps> = ({ faqsection }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Vérifier que les faqs sont présentes
  if (!faqsection || !faqsection.faqs || faqsection.faqs.length === 0) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f9f9fb] py-8 px-4 md:px-10 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#330052] mb-4">
          {faqsection.title} 
        </h2>
      </div>

      <div className="space-y-4">
        {faqsection.faqs.map((faq, index) => (
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
    </section>
  );
};

export default FAQSection;
