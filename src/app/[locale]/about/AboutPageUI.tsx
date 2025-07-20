'use client';
import dynamic from 'next/dynamic';
import LazyHydrateOnScroll from '@/app/components/LazyHydrateOnScroll';
import NavBar from '@/app/components/navBar/NavBar';
import Breadcrumb from '@/app/components/Breadcrumb';
import WhoWeAreSection from './WhoWeAreSection';
import type { AboutDict , FooterDict  } from '@/lib/dictionaries';
import Footer from '@/app/components/Footer';

const AboutSection = dynamic(() => import('./AboutSection'), {
  ssr: false,  
  loading: () => <div>Chargement de la section...</div>,  
});

const WhyChooseSection = dynamic(() => import('./WhyChooseSection'), {
  ssr: false,  
  loading: () => <div>Chargement de la section...</div>,  
});

const StatsSection = dynamic(() => import('./StatsSection'), {
  ssr: false,  
  loading: () => <div>Chargement de la section...</div>,  
});

const CoreValuesSection = dynamic(() => import('./CoreValuesSection'), {
  ssr: false,  
  loading: () => <div>Chargement de la section...</div>,  
});

const ConnectSection = dynamic(() => import('./ConnectSection'), {
  ssr: false,  
  loading: () => <div>Chargement de la section...</div>,  
});
 

export default function AboutPageUI({
  dict,
  locale,
  footerDict,
}: {
  dict: AboutDict;
  locale: string;
  footerDict: FooterDict;
}) {
  const about = dict.about;
  return (
    <>
      <section className="min-h-[35vh] bg-[#330052] text-white font-sans">
        <NavBar activeUnderline={about.hero.activeUnderlineTitle} />
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{about.hero.title}</h1>
          <Breadcrumb homeLabel={about.hero.breadcrumbHome} currentLabel={about.hero.breadcrumbAbout} locale= {locale} />
        </div>
      </section>

      <WhoWeAreSection dict={about} />

      <LazyHydrateOnScroll>
        <AboutSection dict={about.aboutSection} />
      </LazyHydrateOnScroll>

      <LazyHydrateOnScroll>
        <WhyChooseSection dict={about.whyChoose} />
      </LazyHydrateOnScroll>

      <LazyHydrateOnScroll>
        <StatsSection dict={about.stats} />
      </LazyHydrateOnScroll>

      <LazyHydrateOnScroll>
        <CoreValuesSection dict={about.coreValues} />
      </LazyHydrateOnScroll>

      <LazyHydrateOnScroll>
        <ConnectSection dict={about.connect} />
      </LazyHydrateOnScroll>

       <LazyHydrateOnScroll>
        <Footer dict={footerDict} locale={locale} />
      </LazyHydrateOnScroll>

    </>
  );
}
