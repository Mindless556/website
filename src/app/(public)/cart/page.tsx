'use client';

import { useCartStore } from '@/lib/store';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import QuantitySelector from '@/components/QuantitySelector';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCartStore();

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

  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-12 text-center"
      >
        <h1 className="text-3xl font-bold mb-4">سلة التسوق فارغة</h1>
        <p className="text-gray-600 mb-8">لم تقم بإضافة أي منتجات إلى سلة التسوق بعد</p>
        <Link
          href="/products"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          تصفح المنتجات
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold mb-8">سلة التسوق</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <motion.div variants={item} className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.product.id}
                variants={item}
                className="flex gap-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <Link
                    href={`/product/${item.product.slug}`}
                    className="text-lg font-semibold hover:text-primary transition-colors"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-primary font-bold mb-2">{item.product.price}</p>
                  <div className="flex items-center justify-between">
                    <QuantitySelector
                      quantity={item.quantity}
                      onQuantityChange={(qty) => updateQuantity(item.product.id, qty)}
                    />
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div variants={item} className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">ملخص الطلب</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>عدد المنتجات</span>
                <span>{totalItems()}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>المجموع</span>
                <span>{totalPrice()} ريال</span>
              </div>
              <Link
                href="/checkout"
                className="block w-full bg-primary text-white text-center px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                متابعة الشراء
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 