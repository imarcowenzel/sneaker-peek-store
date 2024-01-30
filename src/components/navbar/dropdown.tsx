import Link from "next/link";
import React from "react";

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
      className={`absolute -left-2  top-6 z-50 flex-col bg-white text-cyan-600 shadow-lg ${dropdown ? "flex" : "hidden"}`}
    >

      {subMenus.map((submenu, i) => (
        <li key={i} className={`w-full py-5 pl-6 pr-32 ${i !== subMenus.length - 1 && "border-b-2"}`}>
          <Link
            href={submenu.href}
            className="h-full hover:text-gray-600 transition duration-500 ease-in-out"
          >
            {submenu.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
