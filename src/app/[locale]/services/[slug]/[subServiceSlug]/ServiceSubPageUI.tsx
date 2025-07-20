'use client';

import Image from 'next/image';
import ServiceLink from '@/app/components/ServiceLink';
import NavBar from '@/app/components/navBar/NavBar';
import Footer from '@/app/components/Footer';
import Breadcrumb from '@/app/components/Breadcrumb';
import ServicePageClientWrapper from '../ServicePageClientWrapper';
import LazyHydrateOnScroll from '@/app/components/LazyHydrateOnScroll';
import { FooterDict, ServiceDict, ServiceDataDict } from '@/lib/dictionaries';

interface ServiceSubPageUIProps {
  dict: ServiceDict;
  locale: string;
  footerDict: FooterDict;
  servicesDict: ServiceDataDict;
  parentService?: ServiceDict;
}

export default function ServiceSubPageUI({
  dict,
  locale,
  footerDict,
  servicesDict,
  parentService,
}: ServiceSubPageUIProps) {
  const subServices = parentService?.subServices || [];

const sidebarLinks = subServices.map((sub) => (
  <li key={sub.slug}>
    <ServiceLink
      serviceTitle={parentService?.slug || ''}
      subServiceName={sub.slug} // le slug dans l'URL
      locale={locale}
      className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm transition ${
        dict.slug === sub.slug
          ? 'bg-[#FBD915] text-[#330052] font-semibold'
          : 'bg-white text-[#330052] hover:bg-gray-100'
      }`}
    >
      {sub.title} {/* Titre traduit */}
      <span className="ml-2">→</span>
    </ServiceLink>
  </li>
));


  return (
    <div>
      {/* Header */}
      <section className="min-h-[30vh] bg-[#330052] text-white font-sans relative">
        <NavBar activeUnderline="Services" />
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{dict.title}</h1>
          <Breadcrumb
            homeLabel={dict.breadcrumbHome}
            serviceLabel={dict.currentService}
            serviceHref={dict.slugTechnique}
            currentLabel={dict.title}
            locale={locale}
          />
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex flex-col gap-6">
            <div className="bg-[#330052] rounded-t-xl p-6 text-white shadow-lg flex flex-col gap-6 relative pb-10 rounded-b-[40px]">
              <h3 className="text-lg font-semibold mb-2">
                {servicesDict.sidebar.allServices}
              </h3>
              <div className="flex space-x-1">
                <div className="h-0.5 w-4 bg-white rounded" />
                <div className="h-0.5 w-6 bg-white rounded" />
              </div>
              <ul className="flex flex-col gap-3">{sidebarLinks}</ul>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-t-[24px] border-t-[#330052]"></div>
            </div>

            {/* Bloc aide dynamique */}
            <div className="bg-[#FFF9E5] text-[#330052] rounded-xl p-6 text-center font-medium shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/icons/telephone.png"
                  alt="Téléphone"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </div>
              {servicesDict.sidebar.help.title} <br />
              {servicesDict.sidebar.help.phone} <br />
              <strong>{servicesDict.sidebar.help.number}</strong>
            </div>
          </aside>

          {/* Contenu dynamique côté client */}
          <ServicePageClientWrapper dict={dict} showRequestButton={true}  parentServiceTitle={parentService?.slug || ''} />
        </div>
      </main>

      {/* Footer */}
      <LazyHydrateOnScroll>
        <Footer dict={footerDict} locale={locale} />
      </LazyHydrateOnScroll>
    </div>
  );
}
