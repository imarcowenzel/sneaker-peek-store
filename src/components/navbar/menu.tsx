import MenuItems from "@/components/navbar/menu-items";
import { menuItems } from "@/config";
import ShoppingCartIcon from "./shopping-cart-icon";


const Menu = () => {
  return (
    <nav className="flex gap-x-8 text-cyan-600">
      <ul className="flex gap-x-8 text-sm">
        {menuItems.map((items, i) => {
          const depthLevel = 0;
          return <MenuItems key={i} items={items} depthLevel={depthLevel} />;
        })}
      </ul>

      <div>
        <ShoppingCartIcon />
      </div>
    </nav>
  );
};

export default Menu;
