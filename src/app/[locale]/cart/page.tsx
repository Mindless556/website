import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CartItems } from "@/components/cart/CartItems";
import { CartSummary } from "@/components/cart/CartSummary";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("cart");
  return {
    title: t("title"),
  };
}

export default function CartPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">سلة التسوق</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <CartItems />
        <CartSummary />
      </div>
    </div>
  );
} 