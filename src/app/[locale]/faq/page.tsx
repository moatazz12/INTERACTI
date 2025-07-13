import { getDict } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';
import FAQPageWrapper from './FAQPageWrapper';

interface FAQPageProps {
  params: {
    locale: Locale;
  };
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params;

  const [dict, footerDict] = await Promise.all([
    getDict(locale, 'faq'),
    getDict(locale, 'footer'),
  ]);

  return <FAQPageWrapper dict={dict} footerDict={footerDict} locale={locale} />;
}
