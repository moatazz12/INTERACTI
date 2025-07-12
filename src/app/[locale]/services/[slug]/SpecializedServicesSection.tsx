"use client";

import React from "react";
import RenderIcon from "./RenderIcon";
import { ServiceDict } from "@/lib/dictionaries";

interface SpecializedServicesSectionProps {
  title: string;
  intro: string;
  specializedServices: ServiceDict["specializedServices"];
}

const SpecializedServicesSection: React.FC<SpecializedServicesSectionProps> = ({
  title,
  intro,
  specializedServices,
}) => (
  <section className="bg-gray-50 py-16 px-4 md:px-10 max-w-7xl mx-auto">
    <div className="text-center mb-12 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#330052] mb-4">{title}</h2>
      {intro && <p className="text-gray-700 text-base leading-relaxed">{intro}</p>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {specializedServices.map((item) => (
        <div
          className={`bg-white rounded-xl shadow p-6 flex flex-col gap-4 ${item.spanFull ? "md:col-span-2" : ""}`}
          key={item.title}
        >
          <div className="flex items-center gap-3">
            <RenderIcon icon={item.icon} alt={`${item.title} icon`} size={32} />
            <h3 className="text-xl font-semibold text-[#330052]">{item.title}</h3>
          </div>
          <p className="text-gray-700 text-sm">{item.description}</p>
          {item.points.length > 0 && (
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 pl-2">
              {item.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default SpecializedServicesSection;
