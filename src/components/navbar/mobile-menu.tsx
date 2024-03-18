"use client";

import { useAuth } from "@clerk/nextjs";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

import {
  menuItemContentVariants,
  menuItemVariants,
} from "@/lib/motion/variants";
import { menuItems } from "@/utils/data";
import MobileMenuItems from "./mobile-menu-items";

type MobileMenuProps = {
  isOpen: boolean;
  closeOnCurrent: (href: string) => void;
};

const MobileMenu = ({ isOpen, closeOnCurrent }: MobileMenuProps) => {
  const { isSignedIn } = useAuth();

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionConfig
          transition={{
            type: "just",
            bounce: 0,
          }}
        >
          <motion.nav
            variants={menuItemVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute z-50 h-dvh w-full touch-none overflow-hidden bg-white py-10"
          >
            <motion.ul
              variants={menuItemContentVariants}
              className="flex flex-col gap-y-6 "
            >
              {isSignedIn
                ? menuItems.signedIn.map((item) => (
                    <MobileMenuItems
                      key={item.key}
                      item={item}
                      closeOnCurrent={closeOnCurrent}
                    />
                  ))
                : menuItems.notSignedIn.map((item) => (
                    <MobileMenuItems
                      key={item.key}
                      item={item}
                      closeOnCurrent={closeOnCurrent}
                    />
                  ))}
            </motion.ul>
          </motion.nav>
        </MotionConfig>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
