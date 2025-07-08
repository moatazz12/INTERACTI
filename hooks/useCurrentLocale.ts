'use client';

import { usePathname } from 'next/navigation';

export default function useCurrentLocale() {
  const path = usePathname();
  const locale = path.split('/')[1];
  return locale === 'fr' || locale === 'en' ? locale : 'en'; // fallback si autre
}
