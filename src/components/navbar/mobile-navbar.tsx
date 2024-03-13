"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { useCycle } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import ShoppingCartIcon from "@/components/cart-sheet/cart-sheet";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import MobileMenuButton from "./mobile-menu-button";

const MobileNavbar = () => {
  const [isOpen, toggleMenu] = useCycle(false, true);
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  const closeMenu = () => {
    toggleMenu(0);
  };

  // Whenever we click an item in the menu and navigate away, we want to close the menu.
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // When we click the path we are currently on, we still want the mobile menu to close,
  // however we cant rely on the pathname for it because that won't change (we're already there)
  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      closeMenu();
    }
  };

  // Remove second scrollbar when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="z-50 bg-white lg:hidden">
      <div className="flex items-center justify-between px-5 py-3">
        <Logo width={100} height={50} closeOnCurrent={closeOnCurrent} />
        <div className="flex items-center gap-x-4">
          <ShoppingCartIcon />
          <MobileMenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
          {isSignedIn && <UserButton afterSignOutUrl="/auth/sign-in" />}
        </div>
      </div>
      <MobileMenu isOpen={isOpen} closeOnCurrent={closeOnCurrent} />
    </header>
  );
};

export default MobileNavbar;
