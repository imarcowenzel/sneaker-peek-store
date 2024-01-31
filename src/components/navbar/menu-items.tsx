import Link from "next/link";
import React from "react";

import {
  NavigationMenuContent,
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
  return (
    <>
      {items.subMenu ? (
        <li key={items.key}>
          <NavigationMenuTrigger className="font-normal p-0 uppercase transition duration-500 ease-in-out hover:text-gray-600">
            {items.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex-col bg-white text-cyan-600 shadow-lg">
              {items.subMenu.map((subMenuItem, i) => (
                <li
                  key={subMenuItem.key}
                  className={`py-5 pl-6 pr-32 ${i !== items.subMenu.length - 1 && "border-b-2"}`}
                >
                  <Link
                    href={subMenuItem.href}
                    className="h-full uppercase text-sm transition duration-500 ease-in-out hover:text-gray-600"
                  >
                    {subMenuItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </li>
      ) : (
        <li
          key={items.key}
          className="uppercase transition duration-500 ease-in-out hover:text-gray-600"
        >
          <Link href={items.href}>{items.label}</Link>
        </li>
      )}
    </>
  );
};

export default MenuItems;
