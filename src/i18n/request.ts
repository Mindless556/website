import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as any)) {
    locale = 'ar';
  }
  
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
    timeZone: 'Asia/Riyadh'
  };
}); 