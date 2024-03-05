"use client";

import Link from "next/link";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  return (
    <>
      {item.subMenu ? (
        <li className="flex cursor-pointer flex-col justify-center gap-y-3 text-secondary hover:text-primary">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="flex items-center justify-between px-8 py-0 text-lg font-normal uppercase">
                {item.label}
              </AccordionTrigger>
              <AccordionContent className="py-0 pt-3">
                <MobileDropdown subMenu={item.subMenu} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
      ) : (
        <li
          key={item.key}
          className="flex items-center gap-x-3 px-8 text-lg uppercase text-secondary transition duration-500 ease-in-out hover:text-primary"
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
