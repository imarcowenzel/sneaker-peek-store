"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Link from "next/link";

import { menuItems } from "@/constants";
import {
  menuItemContentVariants,
  menuItemVariants,
} from "@/lib/motion/variants";
import { useState } from "react";

type MobileMenuProps = {
  isOpen: boolean;
  closeOnCurrent: (href: string) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeOnCurrent }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionConfig
          transition={{
            type: "just",
            bounce: 0,
          }}
        >
          <motion.div
            variants={menuItemVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="h-[calc(100dvh-61.25px)] touch-none overflow-hidden bg-white px-5 py-10"
          >
            <motion.div
              variants={menuItemContentVariants}
              className="flex flex-col gap-y-6"
            >
              {menuItems.map((item) => {
                if (!item.subMenu) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-x-3 text-gray-600"
                    >
                      {item.label}
                    </Link>
                  );
                } else {
                  return (
                    <div
                      className="flex cursor-pointer flex-col justify-center gap-y-3 text-gray-600"
                      onClick={toggleSubMenu}
                    >
                      <div className="flex justify-between">
                        {item.label}
                        <p>{showSubMenu ? "-" : "+"}</p>
                      </div>
                      <ul
                        key={item.label}
                        className={
                          showSubMenu
                            ? "flex w-full flex-col gap-y-2 bg-[#f2f4f6] py-2 pl-4"
                            : "hidden"
                        }
                      >
                        {item.subMenu.map((subMenuItem) => (
                          <li key={subMenuItem.label}>
                            <Link href={subMenuItem.href}>
                              {subMenuItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
              })}
            </motion.div>
          </motion.div>
        </MotionConfig>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
