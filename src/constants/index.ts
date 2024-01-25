import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const footerMenu = [
  {
    title: "Categories",
    items: [
      { label: "Running Shoes", href: "running" },
      { label: "Yoga Shoes", href: "yoga" },
      { label: "Sports Shoes", href: "sports" },
      { label: "Casual Shoes", href: "casual" },
    ],
  },
  {
    title: "Business",
    items: [
      { label: "Company Profile", href: "company-profile" },
      { label: "Social Responsibility", href: "social-responsibility" },
      { label: "Brand Kit", href: "brand-kit" },
      { label: "Media", href: "media" },
    ],
  },
  {
    title: "About",
    items: [
      { label: "Board of Directors", href: "board-of-directors" },
      { label: "Careers", href: "careers" },
      { label: "Numbers Speak", href: "numbers-speak" },
    ],
  },
  {
    title: "Useful Links",
    items: [
      { label: "Return Policies", href: "return-policies" },
      { label: "Announcements", href: "announcements" },
      { label: "Have issues?", href: "contact-support" },
      { label: "Media Kit", href: "media-kit" },
    ],
  },
];

export const footerSocialMedias = [
  { label: FaInstagram, href: "instagram.com" },
  { label: FaTwitter, href: "x.com" },
  { label: FaYoutube, href: "youtube.com" },
];
