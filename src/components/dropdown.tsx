import React from "react";
import MenuItems from "./menu-items";
import Link from "next/link";

interface DropdownProps {
  depthLevel: number;
  subMenus: {
    label: string;
    href: string;
  }[];
  dropdown: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  depthLevel,
  subMenus,
  dropdown,
}) => {
  depthLevel = depthLevel + 1;

  return (
    <ul
      className={`absolute -left-2 top-6 z-50 py-6 pl-6 pr-32 flex-col gap-y-8 bg-white text-cyan-600 shadow-lg ${dropdown ? "flex" : "hidden"}`}
    >

      {subMenus.map((submenu, i) => (
        <li key={i} className="w-full">
          <Link
            href={submenu.href}
            className="h-full hover:text-gray-600"
          >
            {submenu.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
