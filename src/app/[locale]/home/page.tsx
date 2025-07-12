import { getDict } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';
import { HomeDict } from '@/lib/dictionaries';
import HomePageUI from './HomePageUI';

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = params;
  const dict = await getDict(locale, 'home');

  return <HomePageUI dict={dict as HomeDict} />;
}
