'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart';
import { ShoppingCart, Trash2 } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  onDelete?: (id: string) => void;
}

export function ProductCard({ id, name, price, image, slug, onDelete }: ProductCardProps) {
  const t = useTranslations('product');
  const addItem = useCartStore((state) => state.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link href={`/products/${slug}`}>
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-primary">
            {price.toLocaleString('ar-SA', {
              style: 'currency',
              currency: 'SAR'
            })}
          </p>
          
          <div className="flex gap-2">
            <Button
              onClick={() => addItem({ id, name, price, image, quantity: 1 })}
              size="sm"
              className="gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              {t('addToCart')}
            </Button>

            {onDelete && (
              <Button
                onClick={() => onDelete(id)}
                size="sm"
                variant="destructive"
                className="gap-2"
              >
                <Trash2 className="w-4 h-4" />
                {t('delete')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 