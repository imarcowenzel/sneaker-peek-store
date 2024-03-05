"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width: number;
  height: number;
  closeOnCurrent?: (href: string) => void;
}

const Logo: React.FC<LogoProps> = ({ width, height, closeOnCurrent }) => {
  const handleClick = () => {
    if (closeOnCurrent) {
      closeOnCurrent("/");
    }
  };

  return (
    <Link href="/" onClick={handleClick}>
      <Image
        src="/main-logo.svg"
        width={width}
        height={height}
        alt="Sneaker Peek Logo"
        className="h-auto w-32"
      />
    </Link>
  );
};

export default Logo;
