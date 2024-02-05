"use client";

import { MenuItems, ShoppingCartIcon } from "@/components/navbar";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { menuItems } from "@/config";

const Menu = () => {
  return (
    <NavigationMenu className="hidden items-center justify-between gap-x-8 md:flex">
      <NavigationMenuList className="flex items-center gap-x-8 text-sm text-cyan-600">
        {menuItems.map((item) => {
          return <MenuItems key={item.key} items={item} />;
        })}
      </NavigationMenuList>
      <ShoppingCartIcon />
    </NavigationMenu>
  );
};

export default Menu;
