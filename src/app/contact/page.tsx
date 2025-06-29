'use client';

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function ContactPage() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHasAnimated(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className="min-h-[30vh] bg-[#301F50] text-white font-sans">
        <NavBar logoSize={90} activeUnderline="Contact" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-14 h-3 rounded-full bg-white" />
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact</h1>
          <div className="relative flex justify-center w-full mt-2 mb-0.5">
            <span
              className="breadcrumb-gradient px-4 py-1.5 text-white text-[15px] font-medium flex items-center gap-2"
              style={{ borderRadius: 20, position: 'relative', zIndex: 1 }}
            >
              Home <span className="mx-1">&gt;</span> Contact
            </span>
          </div>
        </div>
      </section>

      {/* Section principale animée */}
      <div
        className={`flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-24 py-12 bg-white gap-12 transform transition-all duration-1000 ease-out
        ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        {/* Illustration gauche */}
        <div className="relative w-full lg:w-1/2 h-[300px] md:h-[550px]">
          <Image
            src="/contact.webp"
            alt="Contact Illustration"
            fill
            className="object-contain"
          />
        </div>

        {/* Formulaire */}
        <div className="w-full lg:w-1/2 max-w-xl">
          <h1 className="text-[30px] sm:text-[36px] md:text-[42px] font-extrabold text-[#16012b] leading-tight mb-4">
            We'll Respond To You In <br className="hidden sm:block" /> An Hour.
          </h1>

          <p className="text-[#666] text-base md:text-[15px] mb-6">
            We’re always here to help — just send us a message and we’ll get back to you shortly.
          </p>

          <div className="p-[2px] rounded-xl bg-gradient-to-b from-[#301f50] to-[#FBD915] shadow-md">
            <div className="w-full bg-white rounded-xl p-5 sm:p-6">
              <h3 className="text-[#301f50] font-bold text-base sm:text-lg mb-4">Get In touch</h3>

              <form className="flex flex-col gap-4">
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

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#301f50]/30"
                />

                <textarea
                  placeholder="Write Message . . ."
                  className="w-full p-3 h-36 border border-gray-300 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#301f50]/30"
                ></textarea>

                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-[#fbd9151a] text-[#301f50] font-bold text-sm hover:opacity-90 transition border border-[#fbd915]"
                  >
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

      {/* Styles globaux */}
      <style jsx global>{`
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
      `}</style>
    </>
  );
}
