import Link from "next/link";

import { footerMenu, footerSocialMedias } from "@/config";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col gap-y-20 border-t-2 border-t-white bg-[#f2f4f6] px-5 py-12 lg:px-20 lg:py-24">

      <div className="flex flex-col gap-y-8 md:flex-row md:justify-between">
        {footerMenu.map((menuItem) => (
          <div className="flex flex-col gap-y-2" key={menuItem.title}>
            <h1 className="text-base font-bold lg:text-lg">{menuItem.title}</h1>
            <ul className="flex flex-col gap-y-1 text-sm lg:text-base">
              {menuItem.items.map((item) => (
                <li
                  key={item.key}
                  className="transition-colors duration-500 ease-in-out hover:text-cyan-600"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-y-3">
          <h1 className="text-base font-bold lg:text-lg">Follow Us</h1>
          <ul className="flex gap-x-4 text-sm">
            {footerSocialMedias.map((social) => (
              <li
                key={social.key}
                className="cursor-pointer bg-gray-300 p-2 hover:bg-cyan-600 hover:text-white"
                aria-label={`Visit Sneaker Peek's profile on ${social.href}`}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.label />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="text-center text-sm lg:text-base">
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
