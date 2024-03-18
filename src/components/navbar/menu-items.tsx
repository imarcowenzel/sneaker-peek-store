import { usePathname } from "next/navigation";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Dropdown from "./dropdown";

export interface MenuItem {
  key: number;
  label: string;
  href: string;
  subMenu?: MenuItem[];
}

const MenuItems = ({ items }: { items: MenuItem }) => {
  
  const pathname = usePathname();

  if (!items.subMenu) {
    return (
      <NavigationMenuItem key={items.key}>
        <NavigationMenuLink
          href={items.href}
          className={cn(
            pathname === items.href && "eact.FC<DropdownProps>text-black",
            "transition duration-500 ease-in-out hover:text-primary",
          )}
        >
          {items.label}
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          items?.subMenu?.some((subItem) => pathname === subItem.href) &&
            "text-black",
          "transition duration-500 ease-in-out hover:text-primary",
        )}
      >
        {items.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <Dropdown items={items} />
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default MenuItems;
