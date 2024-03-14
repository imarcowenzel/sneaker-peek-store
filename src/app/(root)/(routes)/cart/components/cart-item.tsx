import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import QuantityControl from "@/components/ui/quantity-control";
import useCart, { Item } from "@/hooks/use-cart";
import { formatter } from "@/lib/utils";

const CartItem = ({ item }: { item: Item }) => {

  const cart = useCart();

  const price = formatter.format(item.product.totalPrice)
  const subTotal = formatter.format(item.product.totalPrice * item.quantity)

  return (
    <>
      <div className="flex justify-end border-b p-4">
        <button
          onClick={() => cart.removeItem(item.product.id, item.selectedSize)}
        >
          <X width={14} height={14} />
        </button>
      </div>
      <div className="flex items-center justify-center border-b py-2">
        <Image src={item.product.photo[0].url} alt="" height={70} width={70} priority />
      </div>
      <div className="flex items-center justify-between border-b  p-4 text-sm">
        <p className="font-bold">Product:</p>
        <Link href={`/product/${item.product.id}`}>
          <p className="text-secondary">{item.product.name}</p>
        </Link>
      </div>
      <div className="flex items-center justify-between border-b  p-4 text-sm">
        <p className="font-bold">Size:</p>
        <p className="text-secondary">{item.selectedSize}</p>
      </div>
      <div className="flex items-center justify-between border-b  p-4 text-sm">
        <p className="font-bold">Price:</p>
        <p>{price}</p>
      </div>
      <div className="flex items-center justify-between border-b  p-4 text-sm">
        <p className="font-bold">Quantity:</p>

        <QuantityControl value={item.quantity} item={item} />
      </div>
      <div className="flex items-center justify-between p-4 text-sm">
        <p className="font-bold">Subtotal:</p>
        {/* TODO: dynamic */}
        <p>{subTotal}</p>
      </div>
    </>
  );
};

export default CartItem;
