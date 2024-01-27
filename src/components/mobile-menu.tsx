import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Search, Settings } from "lucide-react";
import Link from "next/link";

import {
  menuItemContentVariants,
  menuItemVariants,
} from "@/lib/motion/variants";
import { navMenu } from "@/constants";

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
          <motion.div
            variants={menuItemVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="h-[calc(100dvh-61.25px)] touch-none overflow-hidden bg-white px-5 py-10"
          >
            <motion.div
              variants={menuItemContentVariants}
              className="flex flex-col gap-y-8"
            >
              {navMenu.map((menu) =>
                menu.items.map((item) => (
                  <Link
                    href={item.href}
                    className="flex items-center gap-x-3 text-gray-600"
                  >
                    {item.label}
                  </Link>
                )),
              )}
            </motion.div>
          </motion.div>
        </MotionConfig>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
