import { getDict } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';
import HomePageUI from './HomePageUI';
import type { HomeDict, FooterDict } from '@/lib/dictionaries';

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  const [homeDict, footerDict] = await Promise.all([
    getDict(locale, 'home'),
    getDict(locale, 'footer'),
  ]);

  return <HomePageUI dict={homeDict as HomeDict} footerDict={footerDict as FooterDict} locale={locale} />;
}
