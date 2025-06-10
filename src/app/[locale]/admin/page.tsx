import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("admin");
  return {
    title: t("dashboard"),
  };
}

export default function AdminPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">لوحة التحكم</h1>
      <AdminDashboard />
    </div>
  );
} 