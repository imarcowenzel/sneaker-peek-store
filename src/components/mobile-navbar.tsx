"use client";

import Image from "next/image";
import MobileMenuButton from "./mobile-menu-button";
import { useCycle } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobile-menu";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, toggleMenu] = useCycle(false, true);
  const pathname = usePathname();

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
    <nav className="md:hidden">
      <header className="flex items-center justify-between px-5 py-3">
        <Link href="/">
          <Image
            src="/main-logo.svg"
            height={50}
            width={100}
            alt="Sneaker Peek Logo"
          />
        </Link>
        <MobileMenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
      </header>
      <MobileMenu isOpen={isOpen} closeOnCurrent={closeOnCurrent} />
    </nav>
  );
};

export default MobileNavbar;
