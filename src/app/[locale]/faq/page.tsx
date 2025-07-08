import { getDict } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';
import FAQPageUI from './FAQPageUI';  
import { FAQDict } from '@/lib/dictionaries';  

interface FAQPageProps {
  params: {
    locale: Locale;
  };
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params;   
  const dict = await getDict(locale, 'faq');   

   return <FAQPageUI dict={dict as FAQDict} />;
}
