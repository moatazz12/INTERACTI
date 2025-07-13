import { getDict } from '@/lib/dictionaries';
import AboutPageUI from './AboutPageUI';
import { Locale } from '@/lib/i18n';
import type { AboutDict, FooterDict } from '@/lib/dictionaries';

export default async function AboutPage({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;

  const [aboutDict, footerDict] = await Promise.all([
    getDict(locale, 'about'),
    getDict(locale, 'footer'),
  ]);

  return <
    AboutPageUI dict={aboutDict as AboutDict} footerDict={footerDict as FooterDict} locale={locale} />;
}
