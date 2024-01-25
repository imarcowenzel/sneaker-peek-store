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
      className="flex flex-col space-y-1 border-[1px] border-cyan-600 p-2 text-white"
      aria-label="Toggle Menu"
    >
      <motion.span
        variants={menuButtonTopVariants}
        className="block h-[3px] w-5 bg-cyan-600"
      ></motion.span>
      <motion.span
        variants={menuButtonMiddleVariants}
        className="block h-[3px] w-5  bg-cyan-600"
      ></motion.span>
      <motion.span
        variants={menuButtonBottomVariants}
        className="block h-[3px] w-5  bg-cyan-600"
      ></motion.span>
    </motion.button>
  );
};

export default MobileMenuButton;
