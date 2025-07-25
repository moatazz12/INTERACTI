'use client';

import { ContactDict, FooterDict, HomeDict } from '@/lib/dictionaries';
import NavBar from '@/app/components/navBar/NavBar';
import dynamic from 'next/dynamic';
import LazyHydrateOnScroll from '@/app/components/LazyHydrateOnScroll';
import Image from 'next/image';

// 📦 import normal du footer ici
import Footer from '@/app/components/Footer';
import MapSection from '@/app/components/mapSection';

const ContactForm = dynamic(() => import('@/app/components/forms/ContactForm'), { ssr: false });
const Breadcrumb = dynamic(() => import('@/app/components/Breadcrumb'), { ssr: false });

interface Props {
  dict: ContactDict;
  dictMap :HomeDict["mapSection"]
  footerDict: FooterDict;
  locale: string;
}

export default function ContactPageUI({ dict,dictMap, footerDict, locale }: Props) {
  return (
    <>
      <section className="min-h-[35vh] bg-[#330052] text-white font-sans">
        <NavBar activeUnderline={dict.contactTitle} />
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{dict.contactTitle}</h1>
          <Breadcrumb homeLabel={dict.breadcrumbHome} currentLabel={dict.breadcrumbContact} locale= {locale} />
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-center gap-12 min-h-screen px-6 py-12">
        <div className="relative w-full lg:w-1/2 h-[300px] md:h-[550px]">
          <Image
            src="/contact.webp"
            alt="Contact"
            fill
            decoding="async"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-xl">
          <h2 className="text-[36px] font-extrabold text-[#16012b] mb-4">{dict.respondTime}</h2>
          <p className="text-[#666] mb-6">{dict.helpText}</p>
          <ContactForm dict={dict} />
        </div>
      </div>

      {/* ✅ Lazy hydration du footer ici */}
      <LazyHydrateOnScroll>
        <MapSection dict={dictMap} />
        <Footer dict={footerDict} locale={locale} />
      </LazyHydrateOnScroll>
    </>
  );
}
