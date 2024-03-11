import Logo from "./logo";
import Menu from "./menu";

const Navbar = () => {
  return (
    <header className="z-50 hidden items-center justify-between bg-white px-9 py-4 lg:flex">
      <Logo width={120} height={20} />
      <Menu />
    </header>
  );
};

export default Navbar;
