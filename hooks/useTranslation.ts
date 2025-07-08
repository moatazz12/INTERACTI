// src/hooks/useTranslation.ts

import { useState, useEffect } from 'react';
import { getDict } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';

export const useTranslation = (locale: Locale, module: string) => {
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    const loadTranslation = async () => {
      const translations = await getDict(locale, module);
      setDict(translations);
    };

    loadTranslation();
  }, [locale, module]);

  return dict;
};
