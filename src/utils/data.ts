import { Cog, CreditCard, Truck } from "lucide-react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const menuItems = {
  signedIn: [
    { key: 1, label: "HOME", href: "/" },
    { key: 2, label: "SHOP", href: "/shop" },
    {
      key: 3,
      label: "MY ACCOUNT",
      href: "/my-account",
      subMenu: [
        { key: 31, label: "ACCOUNT", href: "/my-account/account-details" },
        { key: 32, label: "ORDERS", href: "/my-account/orders" },
      ],
    },
    { key: 4, label: "ABOUT", href: "/about" },
    { key: 5, label: "CONTACT", href: "/contact" },
  ],
  notSignedIn: [
    { key: 1, label: "HOME", href: "/" },
    { key: 2, label: "SHOP", href: "/shop" },
    { key: 4, label: "ABOUT", href: "/about" },
    { key: 5, label: "CONTACT", href: "/contact" },
    { key: 6, label: "SIGN IN", href: "/sign-in" },
    { key: 7, label: "SIGN UP", href: "/sign-up" },
  ],
};

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
      {
        key: 22,
        label: "Social Responsibility",
        href: "social-responsibility",
      },
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

export const benefitsData = [
  {
    key: 1,
    title: "Research",
    description:
      "Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.",
  },
  {
    key: 2,
    title: "Idea & Concept",
    description:
      "Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.",
  },
  {
    key: 3,
    title: "Design & Production",
    description:
      "Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.",
  },
  {
    key: 4,
    title: "Sales & Support",
    description:
      "Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.",
  },
];

export const contactAccordionData = [
  {
    key: 1,
    title: "Sed non mauris vitae erat consequat?",
    description:
      "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    key: 2,
    title: "Nam nec tellus a odio tincidunt auctor?",
    description:
      "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    key: 3,
    title: "Class aptent taciti sociosqu ad litora?",
    description:
      "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    key: 4,
    title: "Odio tincidunt auctor a ornare odio?",
    description:
      "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

export const contactPhoneData = [
  {
    key: 1,
    icon: CreditCard,
    phone: "1 800 755 60 20",
    description: "Payment Queries",
  },
  {
    key: 2,
    icon: Truck,
    phone: "1 800 755 60 21",
    description: "Shipping/Delivery",
  },
  {
    key: 3,
    icon: Cog,
    phone: "1 800 755 60 22",
    description: "Other Queries",
  },
];

export const contactDetailsData = [
  {
    key: 1,

    title: "Our Hours",
    description: "10:00 AM - 22.00 PM <br /> Monday - Friday",
  },
  {
    key: 2,

    title: "Location",
    description: "212 7th St SE, Washington, DC 20003, USA",
  },
  {
    key: 3,

    title: "Contact Us",
    description: "Phone: 1 800 755 60 20 <br /> Email: contact@company.com",
  },
];

export const aboutData = [
  {
    key: 1,
    title: "SPEED",
    photo: "/speed.jpg",
  },
  {
    key: 2,
    title: "QUALITY",
    photo: "/quality.jpg",
  },
  {
    key: 3,
    title: "COMFORT",
    photo: "/comfort.jpg",
  },
];
