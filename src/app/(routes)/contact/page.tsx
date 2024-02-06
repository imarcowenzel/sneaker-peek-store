import { Banner } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactData } from "@/config";

const Contact = () => {
  
  return (
    <section className="flex min-h-[100dvh] flex-col">

    <Banner title="Contact Us" subtitle="get in touch" />

      {/* Quick Assist */}
      <div className="flex w-full flex-col gap-y-14 bg-[#f2f4f6] px-5 py-12">
        <h1 className="text-center text-4xl font-bold md:text-5xl 2xl:text-6xl">
          Quick Assist
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-y-4 px-4 py-3 md:flex-row md:gap-x-12">
          <Accordion type="single" collapsible>
            {contactData.map((contactData) => (
              <AccordionItem
                value={`value-${contactData.key}`}
                key={contactData.key}
              >
                <AccordionTrigger className="text-sm">
                  {contactData.title}
                </AccordionTrigger>
                <AccordionContent className="bg-white px-4 pt-4 text-justify">
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
                <AccordionTrigger className="text-sm">
                  {contactData.title}
                </AccordionTrigger>
                <AccordionContent className="bg-white px-4 pt-4 text-justify">
                  {contactData.description}
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
