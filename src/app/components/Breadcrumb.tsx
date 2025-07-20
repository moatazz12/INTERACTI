'use client';

import Link from 'next/link';
import ServiceLink from './ServiceLink';

type Props = {
  locale: string;
  homeLabel: string;
  currentLabel: string;
  serviceLabel?: string;
  serviceHref?: string;
};

export default function Breadcrumb ({
  locale,
  homeLabel,
  currentLabel,
  serviceLabel,
  serviceHref,
}: Props) {
  return (
    <div className="relative flex justify-center w-full mt-2 mb-0.5">
      <span className="breadcrumb-gradient px-4 py-1.5 text-white text-[15px] font-medium flex items-center gap-2 rounded-full relative z-10">

         
        <Link href={`/${locale}/home`} className="hover:underline">
          {homeLabel}
        </Link>

        <span className="mx-1">&gt;</span>

        
        {serviceLabel && serviceHref && serviceHref.toLowerCase() !== 'home' ? (
          <>
            <ServiceLink
              serviceTitle={serviceHref}
              locale={locale}
              className="hover:underline"
            >
              {serviceLabel}
            </ServiceLink>
            <span className="mx-1">&gt;</span>
          </>
        ) : null}

        <span aria-current="page" className="font-semibold">
          {currentLabel}
        </span>
      </span>
    </div>
  );
}
