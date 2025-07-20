"use client";

import Image from "next/image";
import React from "react";
import { ServiceDict } from "@/lib/dictionaries";
import RenderIcon from "./RenderIcon";

interface HeroSectionProps {
  image: string;
  title: string;
  hero: ServiceDict["hero"];
}

const HeroSection: React.FC<HeroSectionProps> = ({ image, title, hero }) => {
  return (
    <>
      {/* H1 + Subheading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#330052]">{hero.heading}</h1>
        {hero.subheading && (
          <p className="text-lg md:text-xl text-gray-600 mt-2">{hero.subheading}</p>
        )}
      </div>
      {image && (
        <div className="w-full max-w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={`Bannière pour ${title}`}
            width={1200}
            height={370}
            className="object-cover w-full h-auto"
            priority
          />
        </div>
      )}

      <div className="bg-white border border-[#ECECEC] rounded-xl p-6 md:p-10 shadow-md flex flex-col md:flex-row items-center gap-8 mt-6">
        {hero.icon && (
          <div
            className="w-20 h-20 flex-shrink-0 bg-[#FDD900] rounded-full flex items-center justify-center shadow"
            role="img"
            aria-label={`${title} icon`}
          >
            <RenderIcon icon={hero.icon} alt={`${title} hero icon`} size={48} />
          </div>
        )}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#330052]">{hero.title}</h2>
          {hero.introParagraphs?.map((para, i) => (
            <p className="text-gray-700 text-lg" key={`hero-para-${i}`}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
