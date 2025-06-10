import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";

export function CartSummary() {
  const { items, total } = useCartStore();
  const t = useTranslations("cart");

  if (items.length === 0) {
    return null;
  }

  const formatPrice = (amount: number) => {
    return amount.toLocaleString("ar-SA", {
      style: "currency",
      currency: "SAR",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
      <h2 className="text-xl font-semibold">{t("summary")}</h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>{t("subtotal")}</span>
          <span>{formatPrice(total)}</span>
        </div>

        <div className="flex justify-between">
          <span>{t("shipping")}</span>
          <span>{formatPrice(0)}</span>
        </div>

        <div className="border-t pt-2">
          <div className="flex justify-between font-bold">
            <span>{t("total")}</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      <Button className="w-full">{t("checkout")}</Button>
    </div>
  );
} 