'use client';
import { FooterDict, ServiceDict, ServiceRequestDict } from '@/lib/dictionaries';
import dynamic from 'next/dynamic';
import LazyHydrateOnScroll from '@/app/components/LazyHydrateOnScroll';
import Image from 'next/image';
import NavBar from '@/app/components/navBar/NavBar';
import Footer from '@/app/components/Footer';
import Breadcrumb from '@/app/components/Breadcrumb';

const ServiceRequestForm = dynamic(
  () => import('@/app/components/forms/ServiceRequestForm'),
  { ssr: false }
);

interface Props {
  serviceDict: ServiceDict;
  requestDict: ServiceRequestDict;
  footerDict: FooterDict;
  locale: string;
  selectedSubServices?: ServiceDict[];
  parentServiceSlug?: string;
}

export default function ServiceRequestPageUI({
  serviceDict,
  requestDict,
  footerDict,
  locale,
  selectedSubServices = [],
  parentServiceSlug,
}: Props) {
  return (
    <>
      <section className="min-h-[35vh] bg-[#330052] text-white font-sans">
        <NavBar activeUnderline={requestDict.ServiceRequestTitle} />
        <div className="flex flex-col items-center justify-center text-center py-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {requestDict.ServiceRequestTitle}
          </h1>
          {/* ✅ Breadcrumb dynamique avec service parent */}
          <Breadcrumb
            homeLabel={requestDict.breadcrumbHome}
            currentLabel={
              parentServiceSlug 
                ? `${requestDict.breadcrumbServiceRequest} - ${serviceDict.title}`
                : requestDict.breadcrumbServiceRequest
            }
            locale={locale}
          />
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-center gap-12 min-h-screen px-6 py-12">
        <div className="relative w-full lg:w-1/2 h-[300px] md:h-[550px]">
          <Image
            src="/contact.webp"
            alt="Service Illustration"
            fill
            decoding="async"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-xl">
          <h2 className="text-[36px] font-extrabold text-[#16012b] mb-4">
            {requestDict.respondTime}
          </h2>
          <p className="text-[#666] mb-6">{requestDict.helpText}</p>
          
          {/* ✅ Affichage du service sélectionné */}
          {parentServiceSlug && (
            <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-700 font-medium">
                Service sélectionné: <span className="font-bold">{serviceDict.title}</span>
              </p>
              {selectedSubServices.length > 0 && (
                <p className="text-xs text-purple-600 mt-1">
                  Sous-services: {selectedSubServices.map(sub => sub.title).join(', ')}
                </p>
              )}
            </div>
          )}

          <ServiceRequestForm
            serviceDict={serviceDict}
            requestDict={requestDict}
            selectedSubServices={selectedSubServices}
            parentServiceSlug={parentServiceSlug}
          />
        </div>
      </div>

      <LazyHydrateOnScroll>
        <Footer dict={footerDict} locale={locale} />
      </LazyHydrateOnScroll>
    </>
  );
}
