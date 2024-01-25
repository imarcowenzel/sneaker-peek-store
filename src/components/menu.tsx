import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex gap-x-8 text-cyan-600">
      <div className="flex gap-x-8 text-sm ">
        <p>HOME</p>
        <p>SHOP</p>
        <p>MY ACCOUNT</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div>
      <div className="flex gap-x-2 items-center font-bold">
        <p>$0.00</p>
        <Link href="/shopping-bag">
          <ShoppingBag />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
