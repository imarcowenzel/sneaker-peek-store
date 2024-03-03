import { Metadata } from "next";

import Banner from "@/components/banner";
import ContactDetails from "./components/contact-details";
import QuickAssist from "./components/quick-assist";

export const metadata: Metadata = {
  title: "Contact - Sneaker Peek",
  description: "A sneaker shop",
};

const Contact = () => {
  return (
    <section className="flex flex-col">
      <Banner title="Contact Us" subtitle="get in touch" />
      <QuickAssist />
      <ContactDetails />
    </section>
  );
};

export default Contact;
