import type { Metadata } from "next";
import { Jost, Lato } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider, Footer, Instagram, SubFooter, SubscribeUs } from "@/components/index";

const jost = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-jost'
})
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: "MiniStore",
  description: "Digital Gadgets Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={jost.variable}>
        <CartProvider>
          <Header />
          {children}
          <SubscribeUs />
          <Instagram />
          <Footer />
          <SubFooter />
        </CartProvider>
      </body>
    </html>
  );
}
