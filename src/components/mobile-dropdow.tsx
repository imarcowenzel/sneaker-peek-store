import Link from "next/link";
import React from "react";

interface MobileDropdownProps {
  subMenu: {
    label: string;
    href: string;
  }[];
  showSubMenu: boolean
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ subMenu, showSubMenu }) => {

  return (

    <ul
      className={
        showSubMenu ? "flex flex-col gap-y-4 bg-[#f2f4f6] py-3 pl-4" : "hidden"
      }
    >
      {subMenu.map((subMenuItem, i) => (
        <li key={i}>
          <Link href={subMenuItem.href}>{subMenuItem.label}</Link>
        </li>
      ))}

    </ul>

  );
};

export default MobileDropdown;
