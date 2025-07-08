import { getDict } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';
import AboutPageUI from './AboutPageUI';
import { AboutDict } from '@/lib/dictionaries';

interface AboutPageProps {
  params: {
    locale: Locale;
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
 const { locale } = await params; 
   const dict = await getDict(locale, 'about');  

   return <AboutPageUI dict={dict as AboutDict} />;
}
