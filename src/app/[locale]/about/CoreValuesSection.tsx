'use client';

import React, { memo } from "react";
import styles from "./CoreValuesSection.module.css";
import dynamic from "next/dynamic";
import { AboutDict } from "@/lib/dictionaries";  

type Corevalue = AboutDict["about"]["coreValues"];

// Lazy load icons from react-icons for better performance
const LuAward = dynamic(() => import("react-icons/lu").then(mod => mod.LuAward), { ssr: false });
const LuShieldCheck = dynamic(() => import("react-icons/lu").then(mod => mod.LuShieldCheck), { ssr: false });
const LuZap = dynamic(() => import("react-icons/lu").then(mod => mod.LuZap), { ssr: false });
const LuUsers = dynamic(() => import("react-icons/lu").then(mod => mod.LuUsers), { ssr: false });
const LuHeartHandshake = dynamic(() => import("react-icons/lu").then(mod => mod.LuHeartHandshake), { ssr: false });
const LuTrendingUp = dynamic(() => import("react-icons/lu").then(mod => mod.LuTrendingUp), { ssr: false });

const ICONS = [
  LuAward,
  LuShieldCheck,
  LuZap,
  LuUsers,
  LuHeartHandshake,
  LuTrendingUp,
];

const CoreValuesSection = memo(({ dict }: { dict: Corevalue }) => {
  return (
    <section className={`w-full bg-white py-12 md:py-8 px-2 my-4 animate-fade-in-up ${styles.coreValuesSection}`} style={{ position: "relative" }}>
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <h2 className="text-[48px] font-bold text-[#330052] leading-tight mb-4 text-center">{dict.title}</h2>
        <div className="mx-auto w-20 h-1 rounded-full bg-[#ffd900] mb-6" style={{ width: 80, height: 4 }} />
        <p className="text-center text-[#555] text-[1.05rem] max-w-xl mx-auto mb-6">{dict.subtitle}</p>

        <div className="grid modern-values-grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12 mt-8 justify-center items-center">
          {dict.values.map(({ title, description }, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={title}
                style={{ animationDelay: `${0.05 + idx * 0.1}s` }}
                className={`${styles.modernCard} ${styles.hoverAnimateModernCardHoverRight} flex flex-col items-center justify-center rounded-3xl p-4 sm:p-6 md:p-9 w-full max-w-[180px] sm:max-w-[260px] md:max-w-[380px] h-[180px] sm:h-[220px] md:h-[280px] mx-auto space-y-2 sm:space-y-4 overflow-hidden relative border-t border-r border-b border-gray-200 bg-white transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform`}
              >
                <span
                  className="absolute top-0 left-0 h-full w-[3px] rounded-xl"
                  style={{ background: "linear-gradient(to bottom, #330052, #ffd900)" }}
                />
                <div className="mb-2 sm:mb-3 flex justify-center w-full">
                  <span
                    className="flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 rounded-full p-[2px]"
                    style={{ background: "linear-gradient(135deg, #330052 0%, #ffd900 100%)" }}
                  >
                    <span className="flex items-center justify-center w-full h-full rounded-full bg-white shadow-sm">
                      <Icon size={22} className="sm:hidden" color="#330052" />
                      <Icon size={34} className="hidden sm:inline z-10" color="#330052" />
                    </span>
                  </span>
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 text-center z-10 relative">{title}</h3>
                <p className="text-gray-700 text-center text-xs sm:text-base md:text-lg z-10 relative">{description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="decorative-box box-left" style={{ position: "absolute", bottom: 300, left: -40, zIndex: 0 }}>
        <div className="w-[90px] h-[90px] relative">
          <div
            className="w-full h-full rounded-full mix-blend-darken"
            style={{ background: "linear-gradient(135deg,#330052_60%,#ffd900_100%)", opacity: 1 }}
          />
        </div>
      </div>
      <div className="decorative-box box-right" style={{ position: "absolute", bottom: 400, right: 40, zIndex: 0 }}>
        <div className="w-[90px] h-[90px] relative">
          <div
            className="w-full h-full rounded-full mix-blend-darken"
            style={{ background: "linear-gradient(135deg,#330052_60%,#ffd900_100%)", opacity: 1 }}
          />
        </div>
      </div>
    </section>
  );
});

export default CoreValuesSection;
