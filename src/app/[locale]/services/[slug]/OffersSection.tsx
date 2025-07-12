"use client";

import React from "react";
import { ServiceDict } from "@/lib/dictionaries";
import RenderIcon from "./RenderIcon";

interface OffersSectionProps {
  offersTitle?: string;
  offersIntro: string;
  offers: ServiceDict["offers"];
}

const OffersSection: React.FC<OffersSectionProps> = ({ offersTitle, offersIntro, offers }) => (
  <section className="bg-white py-4 px-4 md:px-10 max-w-7xl mx-auto">
    <div className="text-center mb-12 max-w-3xl mx-auto">
      {offersTitle && <h2 className="text-3xl md:text-4xl font-bold text-[#330052] mb-4">{offersTitle}</h2>}
      {offersIntro && <p className="text-gray-700 text-base leading-relaxed">{offersIntro}</p>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {offers.map((item) => (
        <div className="bg-[#F9F9FF] rounded-xl p-6 shadow flex gap-4" key={item.title}>
          <div className="flex-shrink-0">
            <RenderIcon icon={item.icon} alt={`${item.title} icon`} size={32} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#330052] mb-1">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OffersSection;
