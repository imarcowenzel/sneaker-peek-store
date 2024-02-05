import { shoesData } from "@/config";
import Image from "next/image";
import Link from "next/link";

const Shop = () => {

  return (
    <div className="max-w-full bg-[#f2f4f6] p-5 mx-auto text-center">
      <ul className="grid grid-cols-2 gap-x-5 sm:grid-cols-3 mt-8 md:grid-cols-4">
        {shoesData.map((shoe) => (
          <li key={shoe.key} className="mb-9 pb-4 w-full flex flex-col gap-y-3">
            <Link href="/">
              <Image
                src={shoe.photo}
                alt={shoe.title}
                height={500}
                width={500}
              />
            </Link>
            <div className="px-4 flex flex-col gap-y-1">
              <p className="text-xs text-gray-400">{shoe.category}</p>
              <Link href="/" className="text-sm font-black">{shoe.title}</Link>
              <p className="text-xs font-bold">${shoe.price}.00</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
