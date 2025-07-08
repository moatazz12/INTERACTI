// src/app/[locale]/contact/page.tsx

import { getDict } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';
import ContactPageUI from './ContactPageUI';
import { ContactDict } from '@/lib/dictionaries';   

interface ContactPageProps {
  params: {
    locale: Locale;
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
 const { locale } = await params; 
   const dict = await getDict(locale, 'contact');  

  // Le dictionnaire retourné est du type ContactDict
  return <ContactPageUI dict={dict as ContactDict} />;  
}
