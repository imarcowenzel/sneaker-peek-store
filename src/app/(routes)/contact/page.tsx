import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactAccordion } from "@/config";

const Contact = () => {
  
  return (
    <section className="flex min-h-[100dvh] flex-col">

      {/* Hero */}
      <div className="px-5 pb-12 pt-20 transition duration-300 md:p-12 md:pt-24 lg:px-0 lg:py-36">
        <div className="mx-auto max-w-3xl flex-wrap md:max-w-5xl lg:max-w-7xl">
          <div className="w-full">
            <div className="flex w-full flex-wrap content-center items-center">
              <div className="w-full transition duration-300">
                <h1 className="text-4xl font-black text-gray-200 md:text-7xl xl:text-[150px]">
                  get in touch
                </h1>
              </div>

              <div className="w-full text-left">
                <div className="transition duration-300 md:-mt-3 lg:-mt-6">
                  <h1 className="text-4xl font-black text-gray-800 md:text-5xl lg:text-6xl">
                    Contact Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
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
