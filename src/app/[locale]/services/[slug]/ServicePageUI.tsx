import { servicesData } from "@/app/data/servicesData";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ServiceDict } from "@/lib/dictionaries";

import ServicePageClientWrapper from "./ServicePageClientWrapper";

interface ServicePageUIProps {
  dict: ServiceDict;
  locale: string;
}

export default function ServicePageUI({ dict, locale }: ServicePageUIProps) {
  const sidebarLinks = servicesData.map((item) => (
    <li key={item.slug}>
      <Link
        href={`/${locale}/services/${item.slug}`}
        aria-current={item.slug === dict.slug ? "page" : undefined}
        className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm transition ${
          item.slug === dict.slug
            ? "bg-[#FBD915] text-[#330052] font-semibold"
            : "bg-white text-[#330052] hover:bg-gray-100"
        }`}
      >
        {item.title}
        <span className="ml-2">→</span>
      </Link>
    </li>
  ));

  return (
    <div>
      {/* Header */}
      <section className="min-h-[30vh] bg-[#330052] text-white font-sans relative">
        <NavBar />
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-14 h-3 rounded-full bg-white" />
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{dict.title}</h1>
          <nav
            aria-label="breadcrumb"
            className="relative flex justify-center w-full mt-2 mb-0.5"
          >
            <span
              className="breadcrumb-gradient px-4 py-1.5 text-white text-[15px] font-medium flex items-center gap-2"
              style={{ borderRadius: 20, position: "relative", zIndex: 1 }}
            >
              <Link href={`/${locale}`} className="hover:underline">
                Home
              </Link>
              <span className="mx-1" aria-hidden="true">
                &gt;
              </span>
              <span aria-current="page" className="font-semibold">
                {dict.title}
              </span>
            </span>
          </nav>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex flex-col gap-6">
            <div className="bg-[#330052] rounded-t-xl p-6 text-white shadow-lg flex flex-col gap-6 relative pb-10 rounded-b-[40px]">
              <h3 className="text-lg font-semibold mb-2">Tous les services</h3>
              <div className="flex space-x-1">
                <div className="h-0.5 w-4 bg-white rounded" />
                <div className="h-0.5 w-6 bg-white rounded" />
              </div>
              <ul className="flex flex-col gap-3">{sidebarLinks}</ul>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-t-[24px] border-t-[#330052]"></div>
            </div>

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
              Besoin d&apos;aide ? <br />
              Appelez-nous au <strong>+216 25 936 938</strong>
            </div>
          </aside>

          {/* ✅ Section dynamique client avec wrapper */}
          <ServicePageClientWrapper dict={dict} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
