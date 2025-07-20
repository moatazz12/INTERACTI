import { getDict } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';
import ServiceRequestPageUI from './ServiceRequestPageUI';

interface Props {
  params: { locale: Locale };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const [serviceDict, requestDict, footerDict] = await Promise.all([
    getDict(locale, 'services'),
    getDict(locale, 'serviceRequest'),
    getDict(locale, 'footer'),
  ]);

  return (
    <ServiceRequestPageUI
      serviceDict={serviceDict}
      requestDict={requestDict}
      footerDict={footerDict}
      locale={locale}
      // ✅ Les services sélectionnés viendront du Context
    />
  );
}