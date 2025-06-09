import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'الرئيسية | متجر إلكتروني',
  description: 'أفضل متجر إلكتروني لشراء المنتجات المميزة عبر الإنترنت. اكتشف تشكيلتنا الواسعة من المنتجات بأسعار تنافسية.',
  openGraph: {
    title: 'الرئيسية | متجر إلكتروني',
    description: 'أفضل متجر إلكتروني لشراء المنتجات المميزة عبر الإنترنت. اكتشف تشكيلتنا الواسعة من المنتجات بأسعار تنافسية.',
    type: 'website',
    locale: 'ar',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
} 