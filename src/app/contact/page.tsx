'use client';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <section className="min-h-[30vh] bg-[#301F50] text-white font-sans">
      <NavBar logoSize={90} activeUnderline="Contact" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-14 h-3 rounded-full bg-white" />
        {/* Hero Banner très compact */}
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact</h1>
          {/* Breadcrumb Button sous le titre */}
          <div className="relative flex justify-center w-full mt-2 mb-0.5">
            <span className="breadcrumb-gradient px-4 py-1.5 text-white text-[15px] font-medium flex items-center gap-2" style={{ borderRadius: 20, position: 'relative', zIndex: 1 }}>
              Home <span className="mx-1">&gt;</span> Contact
            </span>
          </div>
        </div>
      </section>
 {/* Section Principale */}
<div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-24 py-12 bg-white gap-12">
      
      {/* 🎨 Illustration gauche (ou au-dessus sur mobile) */}
      <div className="relative w-full lg:w-1/2 h-[300px] md:h-[550px]">
        <Image
          src="/contact.webp" // Remplace ce chemin
          alt="Contact Illustration"
          fill
          className="object-contain"
        />
      </div>

      {/* 📄 Formulaire & texte à droite */}
      <div className="w-full lg:w-1/2 max-w-xl">
        {/* Titre */}
        <h1 className="text-[30px] sm:text-[36px] md:text-[42px] font-extrabold text-[#16012b] leading-tight mb-4">
          We'll Respond To You In <br className="hidden sm:block" /> An Hour.
        </h1>

        {/* Description */}
        <p className="text-[#666] text-base md:text-[15px] mb-6">
          We’re always here to help — just send us a message and we’ll get back to you shortly.
        </p>

        {/* 🌈 Form border gradient */}
        <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#301f50] to-[#FBD915] shadow-md">
          <div className="w-full bg-white rounded-xl p-5 sm:p-6">
            <h3 className="text-[#301f50] font-bold text-base sm:text-lg mb-4">Get In touch</h3>

            <form className="flex flex-col gap-4">
              {/* Name + Email */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#301f50]/30"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#301f50]/30"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#301f50]/30"
              />

              {/* Message */}
              <textarea
                placeholder="Write Message . . ."
                className="w-full p-3 h-36 border border-gray-300 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#301f50]/30"
              ></textarea>

              {/* Bouton */}
              <div className="flex justify-center mt-2">
                <button type="submit" className="px-8 py-3 rounded-full bg-[#fbd9151a] text-[#301f50] font-bold text-sm hover:opacity-90 transition border border-[#fbd915]">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
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