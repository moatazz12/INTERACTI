"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ServiceDict } from "@/lib/dictionaries";

import HeroSection from "./HeroSection";
import WhatIsSection from "./WhatIsSection";
import OffersSection from "./OffersSection";

// Chargement dynamique (client-side only) des sections lourdes/interactives
const SpecializedServicesSection = dynamic(() => import("./SpecializedServicesSection"), { ssr: false });
const WhyChooseSection = dynamic(() => import("./WhyChooseSection"), { ssr: false });
const ProcessSection = dynamic(() => import("./ProcessSection"), { ssr: false });
const FAQSection = dynamic(() => import("./FAQSection"), { ssr: false });

interface DynamicServiceSectionsProps {
  dict: ServiceDict;
}

const DynamicServiceSections: React.FC<DynamicServiceSectionsProps> = ({ dict }) => (
  <div className="flex-1 space-y-10">
    <HeroSection image={dict.image} title={dict.title} hero={dict.hero} />

    <WhatIsSection whatIs={dict.whatIs} />

    <OffersSection offersTitle={dict.offersTitle} offersIntro={dict.offersIntro} offers={dict.offers} />

    {dict.specializedServices && (
      <SpecializedServicesSection
        title={dict.specializedServicesTitle}
        intro={dict.specializedServicesIntro}
        specializedServices={dict.specializedServices}
      />
    )}

    {dict.whyChoose && (
      <WhyChooseSection whyChooseIntro={dict.whyChooseIntro} whyChoose={dict.whyChoose} />
    )}

    {dict.method && <ProcessSection method={dict.method} />}

    {dict.faqsection && <FAQSection faqsection={dict.faqsection} />}
  </div>
);

export default DynamicServiceSections;
