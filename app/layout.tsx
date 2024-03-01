import type { Metadata } from "next";
import { Jost, Lato } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Navbar";
import { Footer, Instagram, SubFooter, SubscribeUs } from "@/components/index";
import StoreProvider from "@/components/StoreProvider";
import { Toaster } from "@/components/ui/toaster";

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
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={`${jost.variable}`} >
        <StoreProvider>
          <Header />
          {children}
          <Toaster />
          <SubscribeUs />
          <Instagram />
          <Footer />
          <SubFooter />
        </StoreProvider >
      </body>
    </html>
  );
}
