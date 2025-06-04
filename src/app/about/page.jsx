import Image from "next/image";
import { inter } from "../fonts";
import { getAboutData } from "../lib/api/cmsData";
import { Subtitle } from "../ui/Headings";
import { urlFor } from "@/sanity/lib/image";
import SectionHeader from "../ui/SectionHeader";
import { PortableText } from "next-sanity";
import { ParagraphAnimated } from "../ui/ParagraphAnimated";
import Accordion from "../ui/Accordion";
import ImageAnimated from "../ui/ImageAnimated";
import ListElementAnimated from "../ui/ListElementAnimated";

// If loading a variable font, you don't need to specify the font weight

export const metadata = {
  title: 'About' ,
};

export default async function Home() {
  const data = await getAboutData();
  console.log(data.education);

  let educationItem = data.education.map((item, index) => {
    return (
      <ListElementAnimated key={index} className=" flex flex-col  items-center flex-wrap p-1 not-first:border-t-2 last:border-b-2 border-primary">
        <p className="font-semibold md:text-lg">{item.degree}</p>
        <p className="text-sm opacity-70 lg:text-base ">
          {item.institution}, {item.year}
        </p>
      </ListElementAnimated>
    );
  });

  const components = {
    block: {
      normal: ({ children }) => (
        <ParagraphAnimated type="fade" className="mb-4 lg:text-lg">
          {children}
        </ParagraphAnimated>
      ),
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ children, value }) => (
        <a href={value.href} className="underline  font-semibold">
          {children}
        </a>
      ),
    },
  };

  return (
    <main className=" min-h-lvh pt-large bg-secondary text-primary">
      <section className="p-small lg:p-medium">
        <Subtitle text={"About"} className={` !text-8xl`}></Subtitle>
      </section>
      <section className="p-small lg:p-medium mt-medium">
        <div className="flex flex-col gap-medium lg:flex-row ">
          <div className="image__wrapper flex-1/2 flex justify-center items-center">
            <div className="image__container relative aspect-square max-w-lg lg:max-w-none ">
              <ImageAnimated
                className="image object-cover max-w-full max-h-full "
                src={urlFor(data.mainImage).url()}
                height={data.mainImage.asset.metadata.dimensions.height}
                width={data.mainImage.asset.metadata.dimensions.width}
                alt={data.mainImage.alt}
                priority
              ></ImageAnimated>
            </div>
          </div>
          <article className="flex-1/2">
            <SectionHeader
              classNameText="text-xl lg:!text-2xl  "
              className="lg:!mb-small"
            >
              Biography
            </SectionHeader>
            <PortableText
              value={data.fullDescription}
              components={components}
            ></PortableText>
          </article>
        </div>
      </section>
      <section className="p-small lg:p-medium mt-large">
        <SectionHeader
          classNameText="text-xl lg:!text-2xl  "
          className="lg:!mb-small"
        >
          Noteworthy Certifications
        </SectionHeader>
        <ul className=" flex flex-col gap-small">
          {/* <li className=" flex  items-center flex-wrap gap-1 ">
            <span className="font-semibold md:text-lg">Bachelor of Arts</span>
            <span className="text-sm opacity-70 lg:text-base ">
              // California State University Fresno,
            </span>
            <span className="text-sm opacity-70 lg:text-base"> 2025</span>
          </li> */}
          {educationItem}
        </ul>
      </section>
      {/* Accordion */}
      <section className="p-small lg:p-medium mt-large">
        <Accordion title="What About Me?" data={data.qna}></Accordion>
      </section>
      <section className="p-small lg:p-medium pb-large mt-large">
        <SectionHeader
          classNameText="text-xl lg:!text-2xl  "
          className="lg:!mb-small"
        >
          Artist Statement
        </SectionHeader>
        <div className="more__text__container relative ">
          <PortableText
            value={data.artistStatement}
            components={components}
          ></PortableText>
        </div>
      </section>
    </main>
  );
}
