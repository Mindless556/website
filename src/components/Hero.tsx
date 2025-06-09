import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            اكتشف منتجاتنا المميزة
          </h1>
          <p className="text-xl text-white/90 mb-8">
            نقدم لك أفضل المنتجات بأسعار تنافسية وجودة عالية
          </p>
          <div className="flex gap-4">
            <Link
              href="/products"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              تصفح المنتجات
            </Link>
            <Link
              href="/about"
              className="bg-white/10 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              تعرف علينا
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 