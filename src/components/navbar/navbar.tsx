import { Logo, Menu } from "@/components/navbar";

const Navbar = () => {
  return (
    <header className="z-20 hidden items-center justify-between px-9 py-4 lg:flex bg-white">
      <Logo width={120} height={20} />
      <Menu />
    </header>
  );
};

export default Navbar;
