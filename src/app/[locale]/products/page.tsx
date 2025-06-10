import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { ProductGrid } from '@/components/products/ProductGrid';

// This would normally come from your API/database
const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'هاتف ذكي سامسونج',
    price: 1999,
    image: '/images/phone.jpg',
    slug: 'samsung-phone'
  },
  {
    id: '2',
    name: 'لابتوب ماك بوك برو',
    price: 4999,
    image: '/images/laptop.jpg',
    slug: 'macbook-pro'
  },
  // Add more mock products...
];

export default function ProductsPage() {
  const t = useTranslations('common');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t('products')}</h1>
        
        {/* Add filters here */}
        <div className="flex gap-4">
          {/* Filter components will go here */}
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductGrid products={MOCK_PRODUCTS} />
      </Suspense>
    </div>
  );
} 