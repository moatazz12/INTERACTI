'use client';

import { AboutDict } from '@/lib/dictionaries';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import Breadcrumb from '@/app/components/Breadcrumb';

import WhoWeAreSection from './WhoWeAreSection';
import AboutSection from './AboutSection';
import WhyChooseSection from './WhyChooseSection';
import StatsSection from './StatsSection';
import CoreValuesSection from './CoreValuesSection';
import ConnectSection from './ConnectSection';

interface AboutPageUIProps {
  dict: AboutDict;
}

export default function AboutPageUI({ dict }: AboutPageUIProps) {
  const about = dict.about;

  return (
    <>
      <section className="min-h-[35vh] bg-[#301F50] text-white font-sans">
        <NavBar activeUnderline={about.hero.activeUnderlineTitle} />
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{about.hero.title}</h1>
          <Breadcrumb homeLabel={about.hero.breadcrumbHome} currentLabel={about.hero.breadcrumbAbout} />
        </div>
      </section>

      <WhoWeAreSection dict={about} />
      <AboutSection dict={about.aboutSection} /> 
      <WhyChooseSection dict={about.whyChoose} />
      <StatsSection dict={about.stats} />  
      <CoreValuesSection dict={about.coreValues} />   
      <ConnectSection dict={about.connect} />    
      

      <section className="w-full" style={{ height: '50px' }} aria-hidden="true"></section>
      <Footer />
    </>
  );
}
