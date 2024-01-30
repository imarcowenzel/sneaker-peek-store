"use client";

import Link from "next/link";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Dropdown from "./dropdown";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MenuItemsProps {
  items:
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
  depthLevel: number;
}

const MenuItems: React.FC<MenuItemsProps> = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let liRef: MutableRefObject<HTMLLIElement | null> = useRef(null);

  // Effect to handle closing the dropdown when clicking outside
  useEffect(() => {
    const handler = (event: any) => {
      // Check if the dropdown is open and if the click was outside the menu item
      if (dropdown && liRef.current && !liRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      // Cleanup: remove the event listeners when the component is unmounted
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  // Event handlers to show and hide the dropdown
  const onMouseEnter = () => {
    window.innerWidth > 768 && setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 768 && setDropdown(false);
  };

  return (
    <>
      {items.subMenu ? (
        <li
          ref={liRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="relative uppercase transition duration-500 ease-in-out hover:text-gray-600"
        >
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className="flex items-center gap-x-4 uppercase"
          >
            {items.label}
            {dropdown ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          <Dropdown
            depthLevel={depthLevel}
            subMenus={items.subMenu}
            dropdown={dropdown}
          />
        </li>
      ) : (
        <li className="uppercase transition duration-500 ease-in-out hover:text-gray-600">
          <Link href={items.href}>{items.label}</Link>
        </li>
      )}
    </>
  );
};

export default MenuItems;
