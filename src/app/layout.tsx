import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Footer } from "@/components";
import { MobileNavbar, Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
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
    <html lang="en" className="h-full">
      <body className={cn("h-full antialiased", poppins.className)}>
        <div className="flex h-full min-h-[100dvh] flex-col">
          <Navbar />
          <MobileNavbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
