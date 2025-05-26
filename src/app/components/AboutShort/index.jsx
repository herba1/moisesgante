import Accordion from "@/app/ui/Accordion";
import { Subtitle } from "@/app/ui/Headings";
import MaskButton from "@/app/ui/MaskButton";
import { ParagraphAnimated } from "@/app/ui/ParagraphAnimated";
import SectionHeader from "@/app/ui/SectionHeader";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function AboutShort({ data }) {
  return (
    <div className="aboutShort__container">
      <SectionHeader>About</SectionHeader>
      <div className="flex flex-col lg:flex-row gap-medium ">
        <div className="aboutShort__wrapper flex-1/2 grid grid-cols-2 lg:grid-rows-1 gap-y-medium gap-x-small">
          <div className=" flex flex-col gap-small lg:col-start-1 lg:col-span-1 lg:max-h-[40vh] ">
            <Subtitle text={data.name}></Subtitle>
            <ParagraphAnimated className={"xl:text-lg"}>
              {data.briefDescription}
            </ParagraphAnimated>
            <MaskButton
              className=" mt-auto self-end"
              text={"Read Full Bio"}
              padding="10px"
            ></MaskButton>
          </div>
          <div className="image__container w-full overflow-clip relative h-[40vh] max-h-96 min-h-64 rounded-md">
            <Image
              src={urlFor(data.mainImage).url()}
              alt={data.mainImage.alt}
              className="object-cover"
              fill
            ></Image>
          </div>
        </div>
        <Accordion data={data.qna} className="flex-1/2" title="What about me?"></Accordion>
      </div>
    </div>
  );
}
