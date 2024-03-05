import { Metadata } from "next";

import Banner from "@/components/banner";
import ContactDetails from "./components/contact-details";
import QuickAssist from "./components/quick-assist";

export const metadata: Metadata = {
  title: "Contact - Sneaker Peek",
  description: "A sneaker shop",
};

const ContactPage = () => {
  return (
    <section className="w-full">
      <Banner title="Contact Us" subtitle="get in touch" />
      <QuickAssist />
      <ContactDetails />
    </section>
  );
};

export default ContactPage;
