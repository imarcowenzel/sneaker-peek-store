import { footerMenu, footerSocialMedias } from "@/config";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-20 border-t-2 border-t-white bg-[#f2f4f6] px-5 py-12 lg:py-24">
      <div className="flex flex-col gap-y-3 md:flex-row md:justify-evenly text-gray-600">
        {footerMenu.map((menuItem) => (
          <div className="flex flex-col gap-y-3" key={menuItem.title}>
            <h1 className="text-base font-bold">{menuItem.title}</h1>
            <ul className="flex flex-col gap-y-1 text-sm">
              {menuItem.items.map((item) => (
                <li key={item.label} className="hover:text-cyan-600 transition-colors ease-in-out duration-500">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-y-3">
          <h1 className="text-base font-bold">Follow Us</h1>
          <ul className="flex gap-x-4 text-sm">
            {footerSocialMedias.map((social) => (
              <li
                key={social.href}
                className="cursor-pointer bg-gray-300 p-2 hover:bg-cyan-600 hover:text-white"
              >
                <Link href={social.href}>
                  <social.label />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="text-center text-sm text-gray-600">
          2024 &copy; Developed by{" "}
          <Link
            href={"https://github.com/imarcowenzel"}
            target="_blank"
            aria-label="Visit imarcowenzel's GitHub profile"
            className="text-sm text-blue-600 underline"
          >
            imarcowenzel
          </Link>{" "}
          with non-commercial porpuose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
