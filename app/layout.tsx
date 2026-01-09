import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ProductsProvider } from "./context/ProductsContext";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600', '700', '800']});

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "Practice project for Next.js and Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <ProductsProvider>
          <Header />
          <main className="flex-1 flex flex-col min-h-0">
          {children}
          </main>
          <Footer />
        </ProductsProvider>
      </body>
    </html>
  );
}
