'use client';

import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

interface ProductGridProps {
  products: Product[];
  onDelete?: (id: string) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ProductGrid({ products, onDelete }: ProductGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          slug={product.slug}
          onDelete={onDelete}
        />
      ))}
    </motion.div>
  );
} 