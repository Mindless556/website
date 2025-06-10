import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTranslations('product');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const t = await getTranslations('product');

  // In a real application, you would fetch product data based on the slug from your database
  // For now, we will just show a placeholder.

  // if (!product) {
  //   notFound();
  // }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="/placeholder.jpg" // Placeholder image
            alt="Product Image"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Product Name Placeholder</h1>
          
          <p className="text-2xl font-bold text-primary">
            SAR 0.00
          </p>

          <p className="text-gray-600">Product description placeholder. This will be replaced by actual product description.</p>

          <Button className="w-full gap-2">
            <ShoppingCart className="w-4 h-4" />
            {t('addToCart')}
          </Button>
        </div>
      </div>
    </div>
  );
} 