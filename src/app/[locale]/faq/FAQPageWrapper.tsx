'use client';

import { FAQDict, FooterDict } from '@/lib/dictionaries';
import FAQPageUI from './FAQPageUI';
import Footer from '@/app/components/Footer';
import LazyHydrateOnScroll from '@/app/components/LazyHydrateOnScroll';

interface Props {
  dict: FAQDict;
  footerDict: FooterDict;
  locale: string;
}

export default function FAQPageWrapper({ dict, footerDict, locale }: Props) {
  return (
    <>
      <FAQPageUI dict={dict} />
      <LazyHydrateOnScroll>
        <Footer dict={footerDict} locale={locale} />
      </LazyHydrateOnScroll>
    </>
  );
}
