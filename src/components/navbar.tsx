import Image from "next/image";
import Menu from "./menu";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="hidden h-full items-center justify-between px-9 py-4 md:flex">
      <Link href="/">
        <Image
          src="/main-logo.svg"
          width={120}
          height={20}
          alt="Sneaker Peek Logo"
        />
      </Link>

      <Menu />
    </header>
  );
};

export default Navbar;
