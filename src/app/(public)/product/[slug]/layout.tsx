import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تفاصيل المنتج | متجر إلكتروني',
  description: 'تعرف على تفاصيل المنتج، السعر، والوصف الكامل لهذا المنتج المميز في متجرنا الإلكتروني.',
  openGraph: {
    title: 'تفاصيل المنتج | متجر إلكتروني',
    description: 'تعرف على تفاصيل المنتج، السعر، والوصف الكامل لهذا المنتج المميز في متجرنا الإلكتروني.',
    type: 'website',
    locale: 'ar',
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 