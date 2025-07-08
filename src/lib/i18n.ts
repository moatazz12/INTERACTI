export const i18n = {
  locales: ['en', 'fr'] as const,
  defaultLocale: 'en',
}
export type Locale = (typeof i18n.locales)[number]
