import Logo from "@/components/navbar/logo";
import Menu from "@/components/navbar/menu";

const Navbar = () => {
  return (
    <header className="hidden items-center justify-between px-9 py-4 md:flex">
      <Logo width={120} height={20} />
      <Menu />
    </header>
  );
};

export default Navbar;
