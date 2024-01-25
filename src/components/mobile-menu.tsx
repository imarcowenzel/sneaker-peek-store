import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Search, Settings } from "lucide-react";
import Link from "next/link";

import {
  menuItemContentVariants,
  menuItemVariants,
} from "@/lib/motion/variants";

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
            className="h-full touch-none overflow-hidden bg-white px-5 py-10"
          >
            <motion.div
              variants={menuItemContentVariants}
              className="flex flex-col gap-y-10"
            >
              <Link
                href="/"
                className="flex items-center gap-x-3 text-3xl text-black"
              >
                Example
              </Link>
            </motion.div>
          </motion.div>
        </MotionConfig>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
