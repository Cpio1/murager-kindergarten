import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: '«Мұрагер» бөбекжай балабақшасы',
  description: "«Мұрагер» бөбекжай балабақшасы — балалардың тәрбиесі мен дамуына арналған жайлы орта.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="kk" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}
