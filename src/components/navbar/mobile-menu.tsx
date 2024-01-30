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
            className="absolute z-50 h-[calc(100dvh)] w-full touch-none overflow-hidden bg-white py-10"
          >
            <motion.ul
              variants={menuItemContentVariants}
              className="flex flex-col gap-y-6 "
            >
              {menuItems.map((item, i) => (
                <MobileMenuItems
                  key={i}
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
