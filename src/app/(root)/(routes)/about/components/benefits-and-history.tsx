import Benefits from "@/components/benefits";
import ButtonLink from "@/components/button-link";

const BenefitsAndHistory = () => {
  return (
    <article className="flex w-full flex-col items-center justify-center bg-cover bg-fixed bg-center px-8 py-14 lg:px-20 xl:py-0 2xl:p-14">
      <Benefits />

      <div className="lg:max-7xl mx-auto flex w-full max-w-4xl flex-col justify-center gap-y-9 pb-36 md:max-w-5xl md:items-center md:text-center xl:mx-0">
        <h3 className="text-2xl font-bold">History</h3>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="text-justify text-sm leading-7 md:px-12 md:text-center lg:text-base 2xl:px-64">
          There are many variations of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text.
        </p>
        <ButtonLink href="/about">KNOW MORE</ButtonLink>
      </div>
    </article>
  );
};

export default BenefitsAndHistory;
