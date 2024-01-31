import Link from "next/link";
import React from "react";

interface MobileDropdownProps {
  subMenu: {
    key: number;
    label: string;
    href: string;
  }[];
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ subMenu }) => {
  return (
    <ul className={"flex flex-col gap-y-4 bg-[#efefef] py-3 pl-10 uppercase"}>
      {subMenu.map((subMenuItem) => (
        <li
          key={subMenuItem.key}
          className="text-sm text-cyan-600 transition duration-500 ease-in-out hover:text-gray-600"
        >
          <Link href={subMenuItem.href}>{subMenuItem.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileDropdown;
