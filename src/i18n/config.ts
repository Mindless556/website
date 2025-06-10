export const locales = ['ar'] as const;
export const defaultLocale = 'ar' as const;

export type Locale = (typeof locales)[number]; 