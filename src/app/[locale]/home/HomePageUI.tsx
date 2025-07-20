'use client';

import Image from 'next/image';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SeoServiceSection from './SeoServiceSection';
import ProjectSection from './ProjectSection';
import FeedbackSection from './FeedbackSection';
 
import ServicesSection from './ServiceSection';
import NewsBlogSection from './BlogSection';
import ProcessSection from './ProcessSection';
import type { HomeDict , FooterDict  } from '@/lib/dictionaries';
import LazyHydrateOnScroll from '@/app/components/LazyHydrateOnScroll';
import Footer from '@/app/components/Footer';
import MapSection from '@/app/components/mapSection';

interface HomePageUIProps {
  dict: HomeDict;
    locale: string;
  footerDict: FooterDict;
}

export default function HomePageUI({
  dict,
  locale,
  footerDict,
}: HomePageUIProps ) {
  const hero = dict.hero;
  const about = dict.about;
  const services = dict.services;
  const SEO = dict.seoSection;
  const process = dict.processSection;
  const projects = dict.projectsection;
  const Feedback = dict.FeedbackSection;
  const Blogs = dict.newsBlog;
  const Map = dict.mapSection;



  return (
   <> <main className="bg-white relative min-h-screen font-sans overflow-hidden">
      {/* Background capsule droite visible dès le haut */}
      <Image
        src="/right.webp"
        alt="Capsule décorative droite"
        width={600}
        height={600}
        className="absolute top-0 right-0 w-[600px] z-10 opacity-95 pointer-events-none"
      />

      <Header />
      <HeroSection dict={hero} />
      <AboutSection dict={about} />
      <ServicesSection dict={services} />
      <SeoServiceSection dict={SEO} />
      <ProcessSection dict={process}/>
      <ProjectSection dict={projects}/>
      <FeedbackSection dict={Feedback}/>
      <NewsBlogSection dict={Blogs}/>
      </main>

        <LazyHydrateOnScroll>
        <MapSection dict={Map} />
        <Footer dict={footerDict} locale={locale} />
      </LazyHydrateOnScroll>
    </>
  );
}
