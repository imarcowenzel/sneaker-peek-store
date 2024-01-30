import MenuItems from "@/components/navbar/menu-items";
import ShoppingCartIcon from "@/components/navbar/shopping-cart-icon";
import { menuItems } from "@/config";

const Menu = () => {
  return (
    <nav className="flex items-center gap-x-8 text-cyan-600">
      
      <ul className="flex gap-x-8 text-sm">
        {menuItems.map((items, i) => {
          const depthLevel = 0;
          return <MenuItems key={i} items={items} depthLevel={depthLevel} />;
        })}
      </ul>

      <ShoppingCartIcon />
    </nav>
  );
};

export default Menu;
