'use client';

import React from 'react';
import { AboutDict } from "@/lib/dictionaries";
import AnimatedNumber from "../../components/AnimatedNumber";

type Stats = AboutDict["about"]["stats"];

const StatsSection = ({ dict }: { dict: Stats }) => (
  <section className="w-full bg-white py-10 mt-10">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-[#330052] mb-2">{dict.title}</h2>
      <h3 className="text-lg font-semibold text-[#330052] mb-2">{dict.subtitle}</h3>
      <p className="text-[#555] text-base font-light max-w-2xl mx-auto">{dict.description}</p>
    </div>

    <div className="flex justify-center gap-6 flex-wrap h-full">
      {dict.metrics.map((metric, index) => (
        <div
          key={index}
          className="group rounded-2xl p-[2.5px] mb-4 bg-[#F8F6F6] transition-all duration-300"
        >
          <div
            className="flex flex-col items-center bg-white rounded-2xl px-4 py-4 min-w-[200px] max-w-[220px] w-full h-[220px] transition-all duration-300 shadow-[5px_5px_5px_1px_#F8F6F6] group-hover:shadow-[5px_5px_5px_1px_#330052] group-hover:-translate-y-1 active:shadow-[5px_5px_5px_1px_#330052] active:-translate-y-1"
          >
            <div
              className="w-20 h-20 mb-4 flex items-center justify-center rounded-full p-[2px]"
              style={{ background: 'linear-gradient(135deg, #330052 0%, #ffd900 100%)' }}
            >
              <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={metric.src}
                  alt={metric.label}
                  className="w-full h-full object-cover rounded-full" 
                  loading="lazy" 
                />
              </div>
            </div>

            <span
              style={{
                background: 'linear-gradient(90deg, #330052, #ffd900)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="text-3xl font-bold mb-1 bg-clip-text text-transparent"
            >
              <AnimatedNumber target={parseInt(metric.number)} />
            </span>

            <span className="text-[#330052] font-medium text-base">{metric.label}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
