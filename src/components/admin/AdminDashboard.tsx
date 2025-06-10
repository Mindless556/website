import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ProductGrid } from "@/components/products/ProductGrid";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

export function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const t = useTranslations("admin");

  async function handleAddProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const image = formData.get("image") as string;
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    try {
      // Here you would typically make an API call to add the product
      const newProduct: Product = {
        id: Date.now().toString(),
        name,
        price,
        image,
        slug,
      };

      setProducts([...products, newProduct]);
      event.currentTarget.reset();
    } catch (error) {
      setError(t("addProductError"));
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteProduct(id: string) {
    try {
      // Here you would typically make an API call to delete the product
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      setError(t("deleteProductError"));
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        <h2 className="text-xl font-semibold">{t("addProduct")}</h2>
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleAddProduct} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t("productName")}</Label>
            <Input
              id="name"
              name="name"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">{t("price")}</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">{t("imageUrl")}</Label>
            <Input
              id="image"
              name="image"
              type="url"
              required
              disabled={isLoading}
            />
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? t("adding") : t("add")}
          </Button>
        </form>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">{t("products")}</h2>
        <ProductGrid products={products} onDelete={handleDeleteProduct} />
      </div>
    </div>
  );
} 