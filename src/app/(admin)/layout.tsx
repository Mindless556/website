import { Noto_Sans_Arabic, Noto_Sans } from "next/font/google";

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${notoSansArabic.variable} ${notoSans.variable} min-h-screen font-sans`}>
      <div className="flex min-h-screen">
        {/* Sidebar will go here */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
} 