import React from "react";
import { NavigationMenuLink } from "../ui/navigation-menu";
import Link from "next/link";

interface DropdownProps {
  items: {
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

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <ul className="bg-white text-cyan-600 shadow-lg">
      {items.subMenu.map((subMenuItem, i) => (
        <li className={`${i !== items.subMenu.length - 1 && "border-b-2"}`}>
          <NavigationMenuLink asChild>
            <Link
              className="flex h-full w-full flex-col rounded-md py-5 pl-6 pr-32 text-sm transition duration-500 ease-in-out hover:text-gray-600"
              href={subMenuItem.href}
            >
              {subMenuItem.label}
            </Link>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
