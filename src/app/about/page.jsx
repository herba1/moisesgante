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

// If loading a variable font, you don't need to specify the font weight


export default async function Home() {
  const data = await getAboutData();
  console.log(data);

  const components = {
    block: {
      normal: ({ children }) => <ParagraphAnimated type="fade" className="mb-4 lg:text-lg">{children}</ParagraphAnimated>,
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
            <SectionHeader classNameText="text-xl lg:!text-2xl  " className="lg:!mb-small">Biography</SectionHeader>
            <PortableText
              value={data.fullDescription}
              components={components}
            ></PortableText>
          </article>
        </div>
      </section>
      {/* Accordion */}
      <section className="p-small lg:p-medium mt-medium">
        <Accordion title="What About Me?" data={data.qna}></Accordion>
      </section>
      <section className="p-small lg:p-medium pb-large mt-medium">
        <SectionHeader classNameText="text-xl lg:!text-2xl  " className="lg:!mb-small">Artist Statement</SectionHeader>
        <div className="more__text__container relative ">
          <PortableText value={data.artistStatement} components={components}></PortableText>
        </div>
      </section>

    </main>
  );
}
