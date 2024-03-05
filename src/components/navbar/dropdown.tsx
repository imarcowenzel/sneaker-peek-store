import Link from "next/link";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { MenuItem } from "./menu-items";

const Dropdown = ({ items }: { items: MenuItem }) => {
  return (
    <ul className="bg-white text-secondary shadow-lg">
      {items?.subMenu?.map((item, i) => {

        const isLastItem = i === (items.subMenu?.length ?? 0) - 1;
        const borderClass = isLastItem ? "" : "border-b-2";

        return (
          <li key={item.key} className={borderClass}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className="flex h-full w-full flex-col rounded-md py-5 pl-6 pr-32 text-sm transition duration-500 ease-in-out hover:text-primary"
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
