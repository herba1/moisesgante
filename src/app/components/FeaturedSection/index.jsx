'use client'
import { bebasNeue } from "@/app/fonts";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import MaskButton from "@/app/ui/MaskButton";
import Image from "next/image";
import FeatureBlock from "./FeatureBlock";
import SectionHeader from "@/app/ui/SectionHeader";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function FeaturedSection({ data }) {



  const components = {
    block: {
      normal: ({ children }) => (
        <p className=" text-primary font-light ">{children}</p>
      ),
    },
  };
  return (
    <div>
      <div className=" leading-tight">
        <SectionHeader>{data.sectionTitle}</SectionHeader>
        <SectionHeader>{data.sectionTitle}</SectionHeader>
        <SectionHeader>{data.sectionTitle}</SectionHeader>
        <SectionHeader>{data.sectionTitle}</SectionHeader>
        <SectionHeader>{data.sectionTitle}</SectionHeader>

        <FeatureBlock
          media={
            <Image
              src={urlFor(data.artwork1.mainImage).url()}
              alt={data.artwork1.mainImage.alt}
              fill
              className=" hover:scale-105 active:scale-105 duration-1000 transition-all ease-out 10s object-cover w-full h-full "
            ></Image>
          }
        >
          <h1 className={`${bebasNeue.className} text-3xl xl:text-5xl `}>
            {data.artwork1.title}
          </h1>
          <div className="md:max-w-md xl:max-w-xl md:self-end xl:text-lg">
            <PortableText
              value={data.artwork1.description}
              components={components}
            ></PortableText>
          </div>
          <MaskButton padding="10px" className=" self-end"></MaskButton>
        </FeatureBlock>

        <FeatureBlock
        className={`mt-large`}
          reverse={true}
          media={
            <Image
              src={urlFor(data.artwork2.mainImage).url()}
              alt={data.artwork2.mainImage.alt}
              fill
              className=" hover:scale-105 active:scale-105 duration-1000 transition-all ease-out 10s object-cover w-full h-full "
            ></Image>
          }
        >
          <h1 className={`${bebasNeue.className} text-3xl xl:text-5xl `}>
            {data.artwork2.title}
          </h1>
          <div className="md:max-w-md xl:max-w-xl md:self-end xl:text-lg">
            <PortableText
              value={data.artwork2.description}
              components={components}
            ></PortableText>
          </div>
          <MaskButton padding="10px" className=" self-end"></MaskButton>
        </FeatureBlock>
      </div>
    </div>
  );
}
