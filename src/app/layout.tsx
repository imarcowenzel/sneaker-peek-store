import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import { cn } from "@/lib/utils";

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
    <html lang="en" className="h-full" style={{WebkitTapHighlightColor: "transparent"}}>
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          poppins.className,
        )}
      >
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <MobileNavbar />
          <div className="h-full min-w-[375px] bg-[#f2f4f6]">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
