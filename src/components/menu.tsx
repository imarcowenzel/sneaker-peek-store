import { navMenu } from "@/constants";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex gap-x-8 text-cyan-600">
      <ul className="flex gap-x-8 text-sm ">
        {navMenu.map((menu) =>
          menu.items.map((item) => (
            <li>
              <Link href={item.href}>{item.label}</Link>
            </li>
          )),
        )}
      </ul>
      <div className="">
        <Link href="/shopping-bag" className="relative flex items-center gap-x-2 font-bold">
        <p>$0.00</p>
          <ShoppingBag />
          <p className="absolute -right-2 -top-2 flex items-center justify-center rounded-full border-2 w-5 h-5 border-cyan-600 bg-cyan-600 p-1 text-xs text-white">
            0
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
