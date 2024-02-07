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
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          poppins.className,
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <MobileNavbar />
          <main className="h-full min-w-[375px] bg-white">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
