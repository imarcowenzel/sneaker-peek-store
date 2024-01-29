import Link from "next/link";
import React from "react";

interface MobileDropdownProps {
  subMenu: {
    label: string;
    href: string;
  }[];
  showSubMenu: boolean;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({
  subMenu,
  showSubMenu,
}) => {
  return (
    <ul className={showSubMenu ? "flex flex-col gap-y-4 py-3 pl-10 bg-[#EFEFEF] uppercase" : "hidden"}>
      {subMenu.map((subMenuItem, i) => (
        <li key={i} className="text-sm text-cyan-600 hover:text-gray-600 transition duration-500 ease-in-out">
          <Link href={subMenuItem.href}>{subMenuItem.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileDropdown;
