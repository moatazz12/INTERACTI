import { getDict } from '@/lib/dictionaries';
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
  const { locale, slug } = params;

  // Récupérer le tableau complet des services depuis le JSON
  const services = (await getDict(locale, 'services')) as ServiceDict[];

  // Trouver le service correspondant au slug
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound(); // 404 si pas trouvé
  }

  return <ServicePageUI dict={service} locale={locale} />;
}
