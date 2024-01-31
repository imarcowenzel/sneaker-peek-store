import {
  menuButtonBottomVariants,
  menuButtonMiddleVariants,
  menuButtonTopVariants,
} from "@/lib/motion/variants";
import { motion } from "framer-motion";

type MobileMenuButtonProps = {
  toggleMenu: (i?: number | undefined) => void;
  isOpen: boolean;
};

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  toggleMenu,
  isOpen,
}) => {
  return (
    <motion.button
      onClick={() => toggleMenu()}
      animate={isOpen ? "open" : "closed"}
      className="flex flex-col justify-between space-y-1"
      aria-label="Toggle Menu"
    >
      <motion.span
        variants={menuButtonTopVariants}
        className="block h-[3px] w-6 bg-cyan-600"
      />
      <motion.span
        variants={menuButtonMiddleVariants}
        className="block h-[3px] w-6  bg-cyan-600"
      />
      <motion.span
        variants={menuButtonBottomVariants}
        className="block h-[3px] w-6  bg-cyan-600"
      />
    </motion.button>
  );
};

export default MobileMenuButton;
