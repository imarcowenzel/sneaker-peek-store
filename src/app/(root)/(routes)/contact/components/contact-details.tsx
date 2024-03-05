import { contactDetailsData, contactPhoneData } from "@/utils/data";

const ContactDetails = () => {
  return (
    <>
      <article className="flex w-full justify-center px-8 pb-14 pt-10 md:px-14 md:pb-14 lg:pb-32 lg:pt-20">
        <div className="flex w-full max-w-5xl flex-col items-center justify-evenly gap-y-12 md:flex-row">
          {contactPhoneData.map((data) => (
            <div key={data.key} className="flex flex-col items-center gap-y-2">
              <data.icon className="h-14 w-14 text-secondary" />
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold lg:text-3xl">
                  {data.phone}
                </p>
                <p className="text-sm">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="flex w-full justify-center  px-8 py-14 md:p-14">
        <div className="flex w-full max-w-3xl flex-col items-center justify-between gap-y-12 md:max-w-5xl md:flex-row md:gap-x-12 md:gap-y-0 lg:max-w-7xl xl:gap-x-36">
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=212%207th%20St%20SE%2C%20Washington%2C%20DC%2020003%2C%20USA&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
            title="212 7th St SE, Washington, DC 20003, USA"
            aria-label="212 7th St SE, Washington, DC 20003, USA"
            className="h-full w-full"
          />
          <div className="flex w-full flex-col gap-y-12 ">
            <h1 className="text-4xl font-bold">Contact Details</h1>

            {contactDetailsData.map((data) => (
              <div key={data.key} className="flex flex-col gap-y-2">
                <h2 className="text-xl font-bold">{data.title}</h2>
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default ContactDetails;
