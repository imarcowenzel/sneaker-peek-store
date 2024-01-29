import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import { menuItems } from "@/config";
import MenuItems from "./menu-items";

const Menu = () => {
  return (
    <nav className="flex gap-x-8 text-cyan-600">

      <ul className="flex gap-x-8 text-sm">
        {menuItems.map((items, i) => {
          const depthLevel = 0;
          return <MenuItems key={i} items={items} depthLevel={depthLevel} />;
        })}
      </ul>

      <div className="">
        <Link
          href="/shopping-bag"
          className="relative flex items-center gap-x-2 font-bold"
        >
          <p>$0.00</p>
          <ShoppingBag />
          <p className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-cyan-600 bg-cyan-600 p-1 text-xs text-white">
            0
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
