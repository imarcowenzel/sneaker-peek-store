import { Metadata } from "next";

import { Banner } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  contactAccordionData,
  contactDetailsData,
  contactPhoneData,
} from "@/config";
import { Cog, CreditCard, Truck } from "lucide-react";

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

          <div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:max-w-5xl xl:max-w-7xl">
            <Accordion type="single" collapsible className="w-full">
              {contactAccordionData.map((contactData) => (
                <AccordionItem
                  value={`value-${contactData.key}`}
                  key={contactData.key}
                  className="w-full"
                >
                  <AccordionTrigger className="whitespace-nowrap px-4 py-3 text-left text-sm md:text-base">
                    {contactData.title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-4 pt-4 text-sm md:text-base">
                    {contactData.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              {contactAccordionData.map((contactData) => (
                <AccordionItem
                  value={`value-${contactData.key}`}
                  key={contactData.key}
                >
                  <AccordionTrigger className="px-4 py-3 text-sm md:text-base">
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
      <article className="flex w-full justify-center bg-[#f2f4f6] px-8 pb-14 pt-10 md:px-14 md:pb-14 lg:pb-48 lg:pt-32">
        <div className="flex w-full max-w-5xl flex-col items-center justify-evenly gap-y-12 md:flex-row">
          {contactPhoneData.map((data) => (
            <div key={data.key} className="flex flex-col items-center gap-y-2">
              <CreditCard className="h-14 w-14 text-cyan-600" />
              <div className="flex flex-col items-center">
                <p className="text-xl font-black text-gray-800 lg:text-3xl">
                  {data.phone}
                </p>
                <p className="text-sm">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="w-full bg-[#f2f4f6] px-8 py-14 md:p-14 flex justify-center">
        <div className="flex flex-col w-full max-w-3xl md:max-w-5xl lg:max-w-7xl md:flex-row items-center justify-between md:gap-x-32">
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=212%207th%20St%20SE%2C%20Washington%2C%20DC%2020003%2C%20USA&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
            title="212 7th St SE, Washington, DC 20003, USA"
            aria-label="212 7th St SE, Washington, DC 20003, USA"
            className="h-full w-full"
          />
          <div className="flex w-full flex-col gap-y-12 p-8 pt-12 md:p-0">
            <h1 className="text-4xl font-black">Contact Details</h1>

            {contactDetailsData.map((data) => (
              <div key={data.key} className="flex flex-col gap-y-2">
                <h2 className="text-xl font-black">{data.title}</h2>
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
