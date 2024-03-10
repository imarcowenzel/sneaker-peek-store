"use client";

import { UserButton, useAuth } from "@clerk/nextjs";

import ShoppingCartIcon from "@/components/cart-sheet/cart-sheet";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { menuItems } from "@/utils/data";
import MenuItems from "./menu-items";

const Menu = () => {
  const { isSignedIn } = useAuth();

  return (
    <NavigationMenu className="hidden items-center justify-between gap-x-8 bg-white md:flex">
      <NavigationMenuList className="flex items-center gap-x-8 text-sm text-secondary">
        {menuItems.map((item) => {
          return <MenuItems key={item.key} items={item} />;
        })}
      </NavigationMenuList>

      <ShoppingCartIcon />

      {isSignedIn && <UserButton />}
    </NavigationMenu>
  );
};

export default Menu;
