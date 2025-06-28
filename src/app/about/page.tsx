'use client';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="min-h-[35vh] bg-[#301F50] text-white font-sans">
        <NavBar logoSize={90} />
        {/* Hero Banner très compact */}
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About</h1>
          {/* Breadcrumb Button sous le titre */}
          <div className="relative flex justify-center w-full mt-2 mb-0.5">
            <span className="breadcrumb-gradient px-4 py-1.5 text-white text-[15px] font-medium flex items-center gap-2" style={{ borderRadius: 20, position: 'relative', zIndex: 1 }}>
              Home <span className="mx-1">&gt;</span> About
            </span>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative w-full py-10 bg-[#FFFFFF] overflow-hidden font-sans">
        {/* Décorations de fond */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-0 left-0 w-44 h-44 rounded-full bg-[#FBD915] opacity-30 -z-10" style={{top: -60, left: -60}} />
          <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-[#e5e1d8] opacity-40 -z-10" style={{bottom: -80, right: -80}} />
          <div className="absolute bottom-10 left-0 w-24 h-24 rounded-full bg-[#FBD915] opacity-20 -z-10" style={{bottom: 40, left: -30}} />
          <div className="absolute top-8 right-[10vw] w-32 h-32 rounded-full bg-[#e5e1d8] opacity-20 -z-10" />
        </div>
        
        <div className="relative max-w-[1200px] mx-auto px-10">
          {/* Header */}
          <header className="text-center mb-16">
            <h2 className="text-[48px] font-bold text-[#301F50] leading-tight mb-4 ">Who We Are</h2>
            <div className="mx-auto w-20 h-1 rounded-full bg-[#FBD915]" style={{width: 80, height: 4}} />
          </header>
          
          {/* Two-Column Layout */}
          <div className="grid grid-cols-[45%_55%] gap-18 items-start">
            {/* Left Column - Text Content */}
            <div className="text-[#301F50] flex flex-col justify-start">
              <h3 className="text-[34px] font-bold mb-6">Innovative Digital Solutions</h3>
              <p className="text-[#666666] text-base leading-relaxed font-normal">
                We are a team of passionate digital innovators dedicated to transforming businesses through cutting-edge technology and creative marketing strategies. Our expertise spans across web development, digital marketing, and IT solutions.
              </p>
            </div>
            
            {/* Right Column - Image Arrangement */}
            <div className="relative h-[500px] flex items-start">
              {/* Main Large Image (Bottom-Left) */}
              <div className="relative w-[320px] h-[340px] rounded-[20px] overflow-hidden shadow-lg z-1 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl" style={{top: 0, background: 'linear-gradient(to bottom, #301F50, #FBD915)', padding: '2px', borderRadius: '20px'}}>
                <div className="w-full h-full rounded-[18px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Two professionals giving high-five in office" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Top-Right Image */}
              <div className="absolute top-8 right-0 w-[260px] h-[220px] rounded-[20px] overflow-hidden shadow-lg z-2 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl" style={{top: -40, background: 'linear-gradient(to bottom, #301F50, #FBD915)', padding: '2px', borderRadius: '20px'}}>
                <div className="w-full h-full rounded-[18px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Team meeting with presentation/charts" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Bottom-Right Image */}
              <div className="absolute bottom-0 right-0 w-[260px] h-[220px] rounded-[20px] overflow-hidden shadow-lg z-2 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl" style={{bottom: 80, background: 'linear-gradient(to bottom, #301F50, #FBD915)', padding: '2px', borderRadius: '20px'}}>
                <div className="w-full h-full rounded-[18px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Collaborative session with sticky notes" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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