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

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${notoSansArabic.variable} ${notoSans.variable} min-h-screen font-sans`}>
      {children}
    </div>
  );
} 