import { usePathname } from "next/navigation";
import React from "react";

import { Dropdown } from "@/components/navbar";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface MenuItemsProps {
  items:
    | {
        key: number;
        label: string;
        href: string;
        subMenu?: undefined;
      }
    | {
        key: number;
        label: string;
        href: string;
        subMenu: {
          key: number;
          label: string;
          href: string;
        }[];
      };
}

const MenuItems: React.FC<MenuItemsProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <>
      {
        // Conditional to subMenu
        items.subMenu ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`transition duration-500 ease-in-out hover:text-gray-600 ${items?.subMenu?.some((subMenu) => pathname === subMenu.href) ? "text-black" : ""}`}
            >
              {items.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Dropdown items={items} />
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem key={items.key}>
            <NavigationMenuLink
              href={items.href}
              className={`transition duration-500 ease-in-out hover:text-gray-600 ${pathname === items.href ? "text-black" : ""}`}
            >
              {items.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        )
      }
    </>
  );
};

export default MenuItems;
