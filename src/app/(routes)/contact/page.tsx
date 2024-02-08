import { Metadata } from "next";

import { Banner } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactData } from "@/config";

export const metadata: Metadata = {
  title: "Contact - Sneaker Peek",
  description: "A sneaker shop",
};

const Contact = () => {
  return (
    <section className="flex min-h-[100dvh] flex-col">
      <Banner title="Contact Us" subtitle="get in touch" />

      {/* Quick Assist */}
      <article className="flex w-full justify-center bg-[#f2f4f6] px-5 py-12 md:p-12 lg:px-0 lg:py-32">
        <div className="flex w-full max-w-5xl flex-col items-center gap-y-5 md:gap-y-10">
          <h1 className="text-center text-4xl font-bold md:text-5xl 2xl:text-6xl">
            Quick Assist
          </h1>

          <div className="grid w-full max-w-3xl grid-cols-1 flex-col items-center justify-center gap-y-4 px-4 py-3 md:grid-cols-2 md:gap-x-12 lg:max-w-5xl xl:max-w-7xl">
            <Accordion type="single" collapsible>
              {contactData.map((contactData) => (
                <AccordionItem
                  value={`value-${contactData.key}`}
                  key={contactData.key}
                  className="w-full"
                >
                  <AccordionTrigger className="border-[1px] border-white px-4 py-3 text-sm md:text-base">
                    {contactData.title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-4 pt-4 text-sm md:text-base">
                    {contactData.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible>
              {contactData.map((contactData) => (
                <AccordionItem
                  value={`value-${contactData.key}`}
                  key={contactData.key}
                >
                  <AccordionTrigger className="border-[1px] border-white px-4 py-3 text-sm md:text-base">
                    {contactData.title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-4 pt-4 text-sm md:text-base">
                    {contactData.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </article>

      {/* Contact Details */}
      <div className="w-full bg-[#f2f4f6] px-8 pb-28 pt-14 md:px-14 ">
        Contact Details
      </div>
    </section>
  );
};

export default Contact;
