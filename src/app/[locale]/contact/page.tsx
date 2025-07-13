// src/app/[locale]/contact/page.tsx

import { getDict } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';
import ContactPageUI from './ContactPageUI';
import { FooterDict,ContactDict } from '@/lib/dictionaries';   
import Footer from '@/app/components/Footer';

interface ContactPageProps {
  params: {
    locale: Locale;
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ;

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  
  const { locale } = await params;
  const dict = await getDict(locale, 'contact');

  return {
    title: `${dict.contactTitle} | Interacti Marketing Agency`,
    description: dict.helpText,
    keywords: ['contact', 'agence marketing', 'référencement', 'seo', 'digital'],
    alternates: {
      canonical: `${siteUrl}/${locale}/contact`,
      languages: {
        fr: `${siteUrl}/fr/contact`,
        en: `${siteUrl}/en/contact`,
      },
    },
    openGraph: {
      title: dict.contactTitle,
      description: dict.helpText,
      locale,
      url: `${siteUrl}/${locale}/contact`,
      siteName: 'Interacti Marketing Agency',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.contactTitle,
      description: dict.helpText,
    },
    robots: 'index, follow',
  };
};


export default async function ContactPage({ params }: ContactPageProps) {
 const { locale } = await params; 
  
 const [contactDict, footerDict] = await Promise.all([
    getDict(locale, 'contact'),
    getDict(locale, 'footer'),
  ]);

    return <ContactPageUI dict={contactDict} footerDict={footerDict} locale={locale} />;

}


// export function generateViewport() {
//   return {
//     width: 'device-width',
//     initialScale: 1,
//   };
// }

// export function generateThemeColor() {
//   return '#330058';
// }