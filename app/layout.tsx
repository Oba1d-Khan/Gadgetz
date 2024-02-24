import type { Metadata } from "next";
import { Jost, Lato } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Navbar";
import { CartProvider, Footer, Instagram, SubFooter, SubscribeUs } from "@/components/index";
import { ClerkProvider } from '@clerk/nextjs'


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
  title: "Gadgetz | Smartphones, Watches, Tech Essentials",
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
        <ClerkProvider>
          <CartProvider>
            <Header />
            {children}
            <SubscribeUs />
            <Instagram />
            <Footer />
            <SubFooter />
          </CartProvider>
        </ClerkProvider >
      </body>
    </html>
  );
}
