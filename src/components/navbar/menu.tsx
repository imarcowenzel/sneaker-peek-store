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
          <p className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-600 p-1 text-[10px] text-white">
            0
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
