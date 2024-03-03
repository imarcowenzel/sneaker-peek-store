import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactAccordionData } from "@/utils/data";

const QuickAssist = () => {
  return (
    <article className="flex w-full justify-center px-5 py-12 md:p-12 lg:px-0 lg:py-32">
      <div className="flex w-full max-w-5xl flex-col items-center gap-y-5 md:gap-y-10">
        <h1 className="text-center text-4xl font-bold md:text-5xl 2xl:text-6xl">
          Quick Assist
        </h1>

        <div className="grid w-full grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-0 lg:max-w-5xl xl:max-w-7xl">
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
  );
};

export default QuickAssist;
