import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import MobileNavbar from "@/components/navbar/mobile-navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

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
      <body className={poppins.className}>
        <Navbar />
        <MobileNavbar />
        <main className="h-full min-w-[375px] bg-[#f2f4f6]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
