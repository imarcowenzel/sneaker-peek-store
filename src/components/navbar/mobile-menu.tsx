"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";

import { menuItems } from "@/config";
import {
  menuItemContentVariants,
  menuItemVariants,
} from "@/lib/motion/variants";
import MobileMenuItems from "./mobile-menu-items";

type MobileMenuProps = {
  isOpen: boolean;
  closeOnCurrent: (href: string) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeOnCurrent }) => {

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
            className="h-[calc(100dvh-61.25px)] z-50 touch-none overflow-hidden bg-white px-8 py-10"
          >
            <motion.ul
              variants={menuItemContentVariants}
              className="flex flex-col gap-y-6 text-cyan-600"
            >
              {menuItems.map((item,i) => (
                <MobileMenuItems key={i} item={item} />
              ))}
            </motion.ul>
          </motion.nav>

        </MotionConfig>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
