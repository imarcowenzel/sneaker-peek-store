import Link from "next/link";
import React from "react";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Dropdown from "./dropdown";

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
  return (
    <>
      {
        // Conditional to subMenu
        items.subMenu ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger>{items.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Dropdown items={items} />
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem key={items.key}>
            <NavigationMenuLink
              href={items.href}
              className="transition duration-500 ease-in-out hover:text-gray-600"
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
