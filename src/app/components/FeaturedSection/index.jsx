'use client'
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import MaskButton from "@/app/ui/MaskButton";
import Image from "next/image";
import FeatureBlock from "./FeatureBlock";
import SectionHeader from "@/app/ui/SectionHeader";
import { Subtitle } from "@/app/ui/Headings";
import { ParagraphAnimated } from "@/app/ui/ParagraphAnimated";

export default function FeaturedSection({ data }) {


  const components = {
    block: {
      normal: ({ children }) => (
        <ParagraphAnimated className=" text-primary font-light ">{children}</ParagraphAnimated>
      ),
    },
  };
  return (
    <div>
      <div className=" leading-tight">
        <SectionHeader>{data.sectionTitle}</SectionHeader>
        <FeatureBlock
          media={
            <Image
              src={urlFor(data.artwork1.mainImage).quality(50).url()}
              alt={data.artwork1.mainImage.alt}
              height={data.artwork1.mainImage.asset.metadata.dimensions.height}
              width={data.artwork1.mainImage.asset.metadata.dimensions.width}
              placeholder="blur"
              blurDataURL={data.artwork1.mainImage.asset.metadata.lqip}
              className=" hover:scale-105 active:scale-105 duration-1000 transition-all ease-out 10s object-cover w-full h-full "
            ></Image>
          }
        >
          <Subtitle text={data.artwork1.title}></Subtitle>
          <div className="md:max-w-md xl:max-w-xl md:self-end xl:text-lg">
            <PortableText
              value={data.artwork1.description}
              components={components}
            ></PortableText>
          </div>
          <MaskButton padding="10px" isLink={true} href="/gallery" className=" self-end"></MaskButton>
        </FeatureBlock>

        <FeatureBlock
        className={`mt-large`}
          reverse={true}
          media={
            <Image
              src={urlFor(data.artwork2.mainImage).quality(50).url()}
              alt={data.artwork2.mainImage.alt}
              height={data.artwork2.mainImage.asset.metadata.dimensions.height}
              width={data.artwork2.mainImage.asset.metadata.dimensions.width}
              placeholder="blur"
              blurDataURL={data.artwork2.mainImage.asset.metadata.lqip}
              className=" hover:scale-105 active:scale-105 duration-1000 transition-all ease-out 10s object-cover w-full h-full "
            ></Image>
          }
        >
          <Subtitle text={data.artwork2.title}></Subtitle>
          <div className="md:max-w-md xl:max-w-xl md:self-end xl:text-lg">
            <PortableText
              value={data.artwork2.description}
              components={components}
            ></PortableText>
          </div>
          <MaskButton padding="10px" isLink={true} href="/gallery" className=" self-end"></MaskButton>
        </FeatureBlock>
      </div>
    </div>
  );
}
