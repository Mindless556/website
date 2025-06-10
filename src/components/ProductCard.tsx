'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

export default function ProductCard({ id, name, price, image, slug }: ProductCardProps) {
  return (
    <div className="group relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href={`/product/${slug}`}>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={image}
              alt={name}
              width={500}
              height={500}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">{name}</h3>
              <p className="mt-1 text-sm text-gray-500">{price} ريال</p>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
} 