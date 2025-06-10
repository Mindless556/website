import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'لوحة التحكم | متجر إلكتروني',
  description: 'لوحة تحكم الإدارة لإدارة المنتجات والطلبات والمستخدمين في المتجر الإلكتروني.',
  openGraph: {
    title: 'لوحة التحكم | متجر إلكتروني',
    description: 'لوحة تحكم الإدارة لإدارة المنتجات والطلبات والمستخدمين في المتجر الإلكتروني.',
    type: 'website',
    locale: 'ar',
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 