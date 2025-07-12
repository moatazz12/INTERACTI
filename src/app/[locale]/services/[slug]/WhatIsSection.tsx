"use client";

import React from "react";
import { ServiceDict } from "@/lib/dictionaries";
import RenderIcon from "./RenderIcon";

interface WhatIsSectionProps {
  whatIs: ServiceDict["whatIs"];
}

const WhatIsSection: React.FC<WhatIsSectionProps> = ({ whatIs }) => {
  if (!whatIs) return null;

  return (
    <section className="bg-[#F9F9FF] rounded-xl p-8 shadow-md flex flex-col md:flex-row items-start gap-8 mt-8">
      <div
        className="w-16 h-16 bg-[#330052] text-white rounded-full flex items-center justify-center shadow-md"
        role="img"
        aria-label={`${whatIs.title} icon`}
      >
        <RenderIcon icon={whatIs.icon} alt={`${whatIs.title} icon`} size={36} />
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#330052]">{whatIs.title}</h2>
        {whatIs.descriptionParagraphs?.map((text, i) => (
          <p className="text-gray-700 text-base leading-relaxed" key={`whatIs-desc-${i}`}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default WhatIsSection;
