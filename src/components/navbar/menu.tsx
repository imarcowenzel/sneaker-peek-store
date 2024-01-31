"use client";

import MenuItems from "@/components/navbar/menu-items";
import ShoppingCartIcon from "@/components/navbar/shopping-cart-icon";
import { menuItems } from "@/config";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Menu = () => {
  return (
    <nav className="flex items-center gap-x-8">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <ul className="flex items-center gap-x-8 text-sm text-cyan-600">
              {menuItems.map((items) => (
                <MenuItems key={items.key} items={items} />
              ))}
            </ul>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ShoppingCartIcon />
    </nav>
  );
};

export default Menu;
