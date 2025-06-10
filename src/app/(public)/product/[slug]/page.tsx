'use client';

import { products } from '@/lib/products';
import { useCartStore } from '@/lib/store';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import QuantitySelector from '@/components/QuantitySelector';
import toast from 'react-hot-toast';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    setIsLoading(true);
    addItem(product, quantity);
    toast.success('تم إضافة المنتج إلى السلة');
    setIsLoading(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container mx-auto px-4 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <motion.div variants={item} className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Product Details */}
        <motion.div variants={item}>
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-primary font-bold mb-4">{product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Quantity Selector */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">الكمية</h3>
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
              />
            </div>

            <div className="flex gap-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                disabled={isLoading}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors flex-1"
              >
                {isLoading ? 'جاري الإضافة...' : 'أضف للسلة'}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Product Meta */}
          <motion.div variants={item} className="border-t border-gray-200 pt-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">الفئة</h3>
                <p className="text-gray-600">{product.category}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">رقم المنتج</h3>
                <p className="text-gray-600">#{product.id}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Related Products */}
      <motion.div variants={item} className="mt-20">
        <h2 className="text-2xl font-bold mb-8">منتجات ذات صلة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 3)
            .map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/product/${relatedProduct.slug}`}
                className="group"
              >
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {relatedProduct.name}
                </h3>
                <p className="text-primary font-bold">{relatedProduct.price}</p>
              </Link>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
} 