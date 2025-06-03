import { getContactCardData } from "../lib/api/cmsData";
import ContactForm from "../ui/Contact/ContactForm";
import { Subtitle } from "../ui/Headings";
import LoadingScreen from "../ui/LoadingScreen";
import SectionHeader from "../ui/SectionHeader";
// If loading a variable font, you don't need to specify the font weight

export default async function Home() {
  const contactCardData = await getContactCardData();

  return (
    <main className=" min-h-lvh pt-large pb-large bg-secondary text-primary">
      <section className="p-small lg:p-medium">
        <Subtitle text={"Contact"} className={` !text-8xl`}></Subtitle>
      </section>
      <section className="p-small lg:p-medium mt-small gap-medium flex flex-col lg:flex-row lg:justify-between lg:items-start">
        <div className="order-2 lg:w-2/3 max-w-4xl">
          {/* <Subtitle text={'contact field'} className="!mb-small">Contact Field</Subtitle> */}
          <ContactForm className={"order-2"}></ContactForm>
        </div>
        <div className="contact__card mt-medium lg:mt-0 w-fit order-3 lg:order-1">
          <SectionHeader className="!mb-small">information</SectionHeader>
          <ul>
            <li>{contactCardData.name}</li>
            <li>{contactCardData.email}</li>
            <li>{contactCardData.phone}</li>
            <li>{contactCardData.location}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
