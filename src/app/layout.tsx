import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Footer from "@/components/footer";

import MobileNavbar from "@/components/navbar/mobile-navbar";
import Navbar from "@/components/navbar/navbar";
import ToastProvider from "@/providers/toast-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Home - Sneaker Peek",
  description: "A sneaker shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastProvider />
        <Navbar />
        <MobileNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
