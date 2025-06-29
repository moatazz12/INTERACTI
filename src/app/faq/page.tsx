'use client';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
const faqs = [
  {
    question: 'What services does a digital marketing agency offer?',
    answer: 'A full-service agency like Interacti provides SEO, content creation, social media management, web design, paid advertising, and digital strategy — all tailored to your goals.',
  },
  {
    question: 'How do I know if my business needs digital marketing?',
    answer: 'If you re not attracting enough online traffic, leads, or engagement, digital marketing is essential to grow your visibility, build trust, and generate consistent results',
  },
  {
    question: 'How much does digital marketing cost in Tunisia?',
    answer:
      'Pricing varies based on project scope, but premium agencies like Interacti offer scalable packages that match your needs and objectives.',
  },
    {
    question: 'How long does it take to see results from digital marketing?',
    answer:
      'SEO and organic content may take 2–4 months, while paid campaigns can generate faster results within days or weeks — depending on your goals.',
  },
    {
    question: 'Why choose Interacti over another agency?',
    answer:
      'Interacti blends creativity with strategy, and we focus on real results, not just vanity metrics. Based in Sfax, Tunisia, we offer elite support with global standards.',
  },
];

export default function FAQPage() {
      const [openIndex, setOpenIndex] = useState<number | null>(null); // 3rd question open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <>
      <section className="min-h-[30vh] bg-[#301F50] text-white font-sans">
      <NavBar logoSize={90} />
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-14 h-3 rounded-full bg-white" />
        {/* Hero Banner très compact */}
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">FAQ</h1>
          {/* Breadcrumb Button sous le titre */}
          <div className="relative flex justify-center w-full mt-2 mb-0.5">
            <span className="breadcrumb-gradient px-4 py-1.5 text-white text-[15px] font-medium flex items-center gap-2" style={{ borderRadius: 20, position: 'relative', zIndex: 1 }}>
              Home <span className="mx-1">&gt;</span> FAQ
            </span>
          </div>
        </div>
      </section>
 {/* Section Principale */}
              <main className="flex flex-col lg:flex-row items-center justify-center w-full bg-white py-20 px-6 lg:px-32 min-h-screen">
      {/* Left side - Illustration */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 relative">
        {/* Gradient stripe */}
        <div className="absolute left-0 top-0 h-full w-2 rounded-l-full bg-gradient-to-b from-[#301f50] to-[#f7d416]" />
        <Image
          src="/FAQ.webp" // Place this image in your public/ folder
          alt="FAQ Illustration"
          width={400}
          height={400}
          className="z-10"
        />
      </div>

      {/* Right side - FAQ Content */}
      <div className="w-full lg:w-1/2">
        <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#301f50] to-[#f7d416] mb-2">
          FAQ
        </div>
        <h2 className="text-4xl font-extrabold text-[#16012b] mb-8">
          Frequently Asked &amp; Question
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border ${
                index === openIndex ? 'bg-[#f7f8f9]' : 'bg-white'
              } border-[#eaf2f7] p-4`}
            >
              <button
                className="flex items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <div
                  className={`w-[45px] h-[45px] rounded-[10px] flex items-center justify-center mr-4 ${
                    index === openIndex ? 'bg-[#FBD915]' : 'bg-[#301f50]'
                  }`}
                >
                  {index === openIndex ? (
                    <Minus size={18} color="white" />
                  ) : (
                    <Plus size={18} color="white" />
                  )}
                </div>
                <span className="text-[#16012b] font-bold text-base">
                  {faq.question}
                </span>
              </button>

              {index === openIndex && faq.answer && (
                <p className="mt-4 ml-[60px] text-base leading-7 text-[#6f6c90]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
      {/* Footer */}
      <Footer />

      {/* Global styles for Who We Are section and breadcrumb-gradient */}
      <style jsx global>{`
        .shadow-lg { box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
        .shadow-xl { box-shadow: 0 16px 32px rgba(0,0,0,0.16); }
        .z-1 { z-index: 1; }
        .z-2 { z-index: 2; }
        
        .breadcrumb-gradient {
          background: transparent;
          position: relative;
          display: inline-block;
          padding: 0.25rem 1rem;
          border: 2px solid transparent;
        }
        .breadcrumb-gradient:before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(90deg, #6F47BB, #FBD915);
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        
        @media (max-width: 1024px) {
          .grid-cols-\[45\%_55\%\] {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          
          .max-w-\[1200px\] { 
            padding-left: 20px !important; 
            padding-right: 20px !important; 
          }
          
          .w-\[380px\] { width: 320px !important; }
          .h-\[280px\] { height: 240px !important; }
          .w-\[260px\] { width: 220px !important; }
          .h-\[180px\] { height: 150px !important; }
          
          .absolute.top-5.right-0 {
            top: 15px !important;
          }
          
          .absolute.bottom-0.right-0 {
            bottom: 15px !important;
          }
        }
        
        @media (max-width: 768px) {
          .grid-cols-\[45\%_55\%\] {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .text-\[48px\] { font-size: 2.5rem !important; }
          .text-\[32px\] { font-size: 1.75rem !important; }
          .mb-16 { margin-bottom: 40px !important; }
          
          .relative.h-\[500px\] {
            height: auto !important;
            min-height: 400px;
          }
          
          .w-\[380px\], .w-\[260px\] { 
            width: 100% !important; 
            max-width: 300px !important;
          }
          .h-\[280px\], .h-\[180px\] { 
            height: 200px !important; 
          }
          
          .absolute.bottom-0.left-0 {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            margin-bottom: 20px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .absolute.top-5.right-0 {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            margin-bottom: 20px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .absolute.bottom-0.right-0 {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            margin-left: auto;
            margin-right: auto;
          }
        }
        
        @media (max-width: 600px) {
          .max-w-\[1200px\] { 
            padding-left: 16px !important; 
            padding-right: 16px !important; 
          }
          
          .text-\[48px\] { font-size: 2.2rem !important; }
          .text-\[32px\] { font-size: 1.5rem !important; }
          .mb-16 { margin-bottom: 32px !important; }
          
          .w-20 { width: 60px !important; }
          .h-1 { height: 3px !important; }
        }
      `}</style>
    </>
  );
} 