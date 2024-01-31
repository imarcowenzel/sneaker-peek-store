"use client";

import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import MobileDropdown from "./mobile-dropdow";

interface MobileMenuItemsProps {
  item:
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
  closeOnCurrent: (href: string) => void;
}

const MobileMenuItems: React.FC<MobileMenuItemsProps> = ({
  item,
  closeOnCurrent,
}) => {
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
            onClick={() => closeOnCurrent(item.href)}
            aria-expanded={showSubMenu ? "true" : "false"}
            className="flex items-center justify-between px-8 text-lg uppercase"
          >
            {item.label}
            <span>
              {showSubMenu ? <Minus size={14} /> : <Plus size={14} />}
            </span>
          </button>

          <MobileDropdown subMenu={item.subMenu} showSubMenu={showSubMenu} />
        </li>
      ) : (
        <li
          key={item.key}
          className="flex items-center gap-x-3 px-8 text-lg uppercase text-cyan-600 transition duration-500 ease-in-out hover:text-gray-600"
        >
          <Link href={item.href} onClick={() => closeOnCurrent(item.href)}>
            {item.label}
          </Link>
        </li>
      )}
    </>
  );
};

export default MobileMenuItems;
