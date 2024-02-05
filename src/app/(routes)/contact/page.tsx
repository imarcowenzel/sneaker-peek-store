import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactAccordion } from "@/config";

const Contact = () => {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center">
      {/* Hero */}
      <div className="flex w-full flex-col px-8 pb-12 pt-20 lg:px-14 lg:pt-28 2xl:px-80 2xl:py-36">
        <h1 className="text-[41px] font-bold text-gray-200 md:text-[82px] lg:text-[150px]">
          get in touch
        </h1>
        <h1 className="-mt-4 text-4xl font-bold md:text-5xl lg:-mt-12 lg:text-6xl">
          Contact Us
        </h1>
      </div>

      {/* Quick Assist */}
      <div className="flex w-full flex-col gap-y-14 bg-[#f2f4f6] px-5 py-12">
        <h1 className="text-center text-4xl font-bold md:text-5xl 2xl:text-6xl">
          Quick Assist
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-y-4 px-4 py-3 md:flex-row md:gap-x-12">
          <Accordion type="single" collapsible>
            {contactAccordion.map((accordion) => (
              <AccordionItem
                value={`value-${accordion.key}`}
                key={accordion.key}
              >
                <AccordionTrigger className="text-sm">
                  {accordion.title}
                </AccordionTrigger>
                <AccordionContent className="bg-white px-4 pt-4 text-justify">
                  {accordion.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible>
            {contactAccordion.map((accordion) => (
              <AccordionItem
                value={`value-${accordion.key}`}
                key={accordion.key}
              >
                <AccordionTrigger className="text-sm">
                  {accordion.title}
                </AccordionTrigger>
                <AccordionContent className="bg-white px-4 pt-4 text-justify">
                  {accordion.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Contact Details */}
      <div className="w-full bg-[#f2f4f6] px-8 pb-28 pt-14 md:px-14 ">
        Contact Details
      </div>
    </section>
  );
};

export default Contact;
