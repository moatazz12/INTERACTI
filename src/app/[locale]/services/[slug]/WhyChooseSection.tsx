"use client";

import React from "react";
import Image from "next/image";
import { ServiceDict } from "@/lib/dictionaries";

interface WhyChooseSectionProps {
  whyChooseIntro: string;
  whyChoose: ServiceDict["whyChoose"];
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ whyChooseIntro, whyChoose }) => (
  <section className="bg-white py-8 px-4 md:px-10 max-w-7xl mx-auto">
    <div className="text-center mb-4 max-w-3xl mx-auto">
      <p className="text-gray-700 text-base leading-relaxed italic">{whyChooseIntro}</p>
    </div>
    <div className="text-center mb-12 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#330052] mb-4">{whyChoose.title}</h2>
      <p className="text-gray-700 text-base leading-relaxed">{whyChoose.intro}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {whyChoose.points.map((point) => (
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4" key={point.title}>
          <Image src="/icons/confiance.png" alt="Check icon" width={32} height={32} loading="lazy" />
          <div>
            <h3 className="font-semibold text-[#330052] text-lg">{point.title}</h3>
            <p className="text-sm text-gray-700">{point.description}</p>
          </div>
        </div>
      ))}
    </div>
    {whyChoose.footer && (
      <div className="text-center mt-12 max-w-2xl mx-auto">
        <p className="text-xl font-medium text-[#330052]">{whyChoose.footer}</p>
      </div>
    )}
  </section>
);

export default WhyChooseSection;
