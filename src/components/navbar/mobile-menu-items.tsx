"use client";

import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import MobileDropdown from "./mobile-dropdow";

interface MobileMenuItemsProps {
  item:
    | {
        label: string;
        href: string;
        subMenu?: undefined;
      }
    | {
        label: string;
        href: string;
        subMenu: {
          label: string;
          href: string;
        }[];
      };
}

const MobileMenuItems: React.FC<MobileMenuItemsProps> = ({ item }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <>
      {item.subMenu ? (
        <li
          className="flex cursor-pointer flex-col justify-center gap-y-3 text-cyan-600 hover:text-gray-600"
          onClick={toggleSubMenu}
        >
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={showSubMenu ? "true" : "false"}
            onClick={toggleSubMenu}
            className="flex items-center justify-between"
          >
            {item.label}
            <span>
              {showSubMenu ? <Minus size={10} /> : <Plus size={10} />}
            </span>
          </button>

          <MobileDropdown subMenu={item.subMenu} showSubMenu={showSubMenu} />

        </li>
      ) : (
        <li
          key={item.label}
          className="flex items-center gap-x-3 text-cyan-600 hover:text-gray-600"
        >
          <Link href={item.href}>{item.label}</Link>
        </li>

      )}
    </>
  );
};

export default MobileMenuItems;
