import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -5 }
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      variants={cardVariants}
      className="bg-white rounded-lg shadow-md overflow-hidden group"
    >
      <Link href={`/product/${product.slug}`}>
        <div className="relative h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{product.category}</span>
            <span className="text-primary font-bold">{product.price}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 line-clamp-2">{product.description}</p>
        </div>
      </Link>
    </motion.div>
  );
} 