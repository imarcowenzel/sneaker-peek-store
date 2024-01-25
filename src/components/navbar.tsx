import Image from "next/image";
import Menu from "./menu";

const Navbar: React.FC = () => {
  return (
    <header className=" hidden h-14 w-full items-center justify-between px-8 py-10 lg:flex">
      <div className="h-11 ">
        <Image
          src="/main-logo.svg"
          width={130}
          height={200}
          className="h-full"
          alt="Logo"
        />
      </div>
      <Menu />
    </header>
  );
};

export default Navbar;
