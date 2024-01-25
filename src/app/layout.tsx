import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css";
import MobileNavbar from "@/components/mobile-navbar";

const work = Work_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Sneaker Peek",
  description: "A sneaker shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={work.className}>
        <Navbar />
        <MobileNavbar />
        <main className="flex min-h-[100dvh] flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
