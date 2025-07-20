import { FooterDict, getDict, ServiceDataDict } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import ServicePageUI from './ServicePageUI';
import { ServiceDict } from '@/lib/dictionaries';

interface Props {
  params: {
    locale: Locale;
    slug: string;
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } =await  params;

const [services, footerDict , serviceDict] = await Promise.all([
    getDict(locale, 'services') as Promise<ServiceDict[]>,
    getDict(locale, 'footer') as Promise<FooterDict>,
    getDict(locale, 'serviceData') as Promise<ServiceDataDict>,
  ]);
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();  
  }

  return <ServicePageUI 
            dict={service}
            footerDict={footerDict as FooterDict}  
            serviceDict={serviceDict} 
            locale={locale}  />;
}
