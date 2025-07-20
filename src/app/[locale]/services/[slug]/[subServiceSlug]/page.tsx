import { FooterDict, getDict, ServiceDataDict } from '@/lib/dictionaries';  
import { Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import ServiceSubPageUI from './ServiceSubPageUI';
import { ServiceDict } from '@/lib/dictionaries';

interface Props {
  params: {
    locale: Locale;
    slug: string;
    subServiceSlug: string;
  };
}

export default async function SubServiceDetailPage({ params }: Props) {
  const { locale, slug, subServiceSlug } = await params;

  const [services, footerDict, servicesDict] = await Promise.all([
    getDict(locale, 'services') as Promise<ServiceDict[]>,
    getDict(locale, 'footer') as Promise<FooterDict>,
    getDict(locale, 'serviceData') as Promise<ServiceDataDict>, 
  ]);

  const service = services.find((s) => s.slug === slug);

  if (!service || !service.subServices) {
    notFound();
  }

  const subService = service.subServices.find((sub) => sub.slug === subServiceSlug);

  if (!subService) {
    notFound();
  }

  return (
    <ServiceSubPageUI
      dict={subService}
      footerDict={footerDict}
      servicesDict={servicesDict} 
      locale={locale}
      parentService={service}
    />
  );
}
