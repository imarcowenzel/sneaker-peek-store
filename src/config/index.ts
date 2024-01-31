import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const menuItems = [
  { key: 1, label: "HOME", href: "/" },
  { key: 2, label: "SHOP", href: "/shop" },
  {
    key: 3, 
    label: "MY ACCOUNT",
    href: "/my-account",
    subMenu: [
      { key: 31, label: "ORDERS", href: "/orders" },
      { key: 32, label: "ADDRESSES", href: "/addresses" },
      { key: 33, label: "ACCOUNT", href: "/account-details" },
    ],
  },
  { key: 4, label: "ABOUT", href: "/about" },
  { key: 5, label: "CONTACT", href: "/contact" },
];

export const footerMenu = [
  {
    key: 1,
    title: "Categories",
    items: [
      { key: 11, label: "Running Shoes", href: "running" },
      { key: 12, label: "Yoga Shoes", href: "yoga" },
      { key: 13, label: "Sports Shoes", href: "sports" },
      { key: 14, label: "Casual Shoes", href: "casual" },
    ],
  },
  {
    key: 2,
    title: "Business",
    items: [
      { key: 21, label: "Company Profile", href: "company-profile" },
      { key: 22, label: "Social Responsibility", href: "social-responsibility" },
      { key: 23, label: "Brand Kit", href: "brand-kit" },
      { key: 24, label: "Media", href: "media" },
    ],
  },
  {
    key: 3,
    title: "About",
    items: [
      { key: 31, label: "Board of Directors", href: "board-of-directors" },
      { key: 32, label: "Careers", href: "careers" },
      { key: 33, label: "Numbers Speak", href: "numbers-speak" },
    ],
  },
  {
    key: 4,
    title: "Useful Links",
    items: [
      { key: 41, label: "Return Policies", href: "return-policies" },
      { key: 42, label: "Announcements", href: "announcements" },
      { key: 43, label: "Have issues?", href: "contact-support" },
      { key: 44, label: "Media Kit", href: "media-kit" },
    ],
  },
];

export const footerSocialMedias = [
  { key: 1, label: FaInstagram, href: "https://instagram.com" },
  { key: 2, label: FaTwitter, href: "https://twitter.com" },
  { key: 3, label: FaYoutube, href: "https://youtube.com" },
];
