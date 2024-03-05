"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { menuItems } from "@/utils/data";
import MenuItems from "./menu-items";
import ShoppingCartIcon from "../cart-sheet/cart-sheet";

const Menu = () => {

  return (

    <NavigationMenu className="hidden items-center justify-between gap-x-8 md:flex bg-white">

      <NavigationMenuList className="flex items-center gap-x-8 text-sm text-secondary">
        {menuItems.map((item) => {
          return <MenuItems key={item.key} items={item} />;
        })}
      </NavigationMenuList>

      <ShoppingCartIcon />
      
    </NavigationMenu>
  );

};

export default Menu;
