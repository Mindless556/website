import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LoginForm } from "@/components/auth/LoginForm";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("auth");
  return {
    title: t("login"),
  };
}

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            تسجيل الدخول
          </h1>
          <p className="text-sm text-muted-foreground">
            أدخل بريدك الإلكتروني وكلمة المرور للدخول
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
} 