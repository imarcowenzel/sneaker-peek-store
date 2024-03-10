import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Footer from "@/components/footer";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import Navbar from "@/components/navbar/navbar";
import MainContainer from "@/components/ui/container";
import ToastProvider from "@/providers/toast-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home - Sneaker Peek",
  description: "A sneaker shop",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <ToastProvider />
          <Navbar />
          <MobileNavbar />
          <MainContainer>{children}</MainContainer>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
