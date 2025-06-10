import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';

// This would normally come from your API/database
const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "هاتف ذكي سامسونج",
    price: 1999,
    image: "/images/phone.jpg",
    slug: "samsung-phone",
  },
  {
    id: "2",
    name: "لابتوب ماك بوك برو",
    price: 4999,
    image: "/images/laptop.jpg",
    slug: "macbook-pro",
  },
  {
    id: "3",
    name: "سماعات بلوتوث",
    price: 299,
    image: "/images/headphones.jpg",
    slug: "bluetooth-headphones",
  },
  {
    id: "4",
    name: "ساعة ذكية",
    price: 799,
    image: "/images/smartwatch.jpg",
    slug: "smartwatch",
  },
];

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'iPhone 13 Pro',
    price: 3999,
    image: '/images/products/iphone.jpg',
    slug: 'iphone-13-pro'
  },
  {
    id: '2',
    name: 'MacBook Pro',
    price: 5999,
    image: '/images/products/macbook.jpg',
    slug: 'macbook-pro'
  },
  {
    id: '3',
    name: 'AirPods Pro',
    price: 899,
    image: '/images/products/airpods.jpg',
    slug: 'airpods-pro'
  },
  {
    id: '4',
    name: 'Apple Watch',
    price: 1299,
    image: '/images/products/watch.jpg',
    slug: 'apple-watch'
  }
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("common");
  return {
    title: t("home"),
  };
}

export default function HomePage() {
  const t = useTranslations('common');

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('home')}</h1>
      <p className="text-lg text-gray-600">Your content will go here.</p>
    </div>
  );
} 