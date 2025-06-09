import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'المنتجات | متجر إلكتروني',
  description: 'تصفح جميع منتجاتنا المميزة في متجرنا الإلكتروني. جودة عالية وأسعار مناسبة للجميع.',
  openGraph: {
    title: 'المنتجات | متجر إلكتروني',
    description: 'تصفح جميع منتجاتنا المميزة في متجرنا الإلكتروني. جودة عالية وأسعار مناسبة للجميع.',
    type: 'website',
    locale: 'ar',
  },
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">منتجاتنا</h1>
        <p className="text-gray-600">اكتشف مجموعتنا الكاملة من المنتجات المميزة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 