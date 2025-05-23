"use client";
import Image from "next/image";
import { bebasNeue, Inter } from "../fonts";
import { urlFor } from "@/sanity/lib/image";

export default function HeroSection({ data }) {
  const imageSizes = {
    image1: { w: 354, h: 464 },
    image2: { w: 467, h: 357 },
    image3: { w: 274, h: 423 },
    image4: { w: 480, h: 365 },
    image5: { w: 279, h: 370 },
  };
  return (
    <div className="h-svh relative -z-10 bg-secondary">
      <Image
        src={urlFor(data.featuredArtwork.mainImage).url()}
        className="-z-20 select-none lg:hidden absolute h-full saturate-150 w-full object-cover"
        alt={data.featuredArtwork.mainImage.alt}
        fill="true"
      ></Image>
      <div className="w-full h-full bg-black/50 lg:hidden absolute -z-10"></div>
      {/* images collage */}
      <div className="w-full h-full hidden lg:block absolute -z-10 image__container overflow-hidden">
        <div
          className="image1 absolute left-[17%] top-[27%] rotate-6  -translate-1/2 "
          style={{
            width: `${imageSizes.image1.w}px`,
            height: `${imageSizes.image1.h}px`,
          }}
        >
          <Image
            src={urlFor(data.secondaryArtwork1.mainImage)
              .width(imageSizes.image1.w)
              .url()}
            className="object-cover"
            alt={data.secondaryArtwork1.mainImage.alt}
            fill
            sizes={`${imageSizes.image1.w}px`}
          />
        </div>
        <div
          className="image2 absolute top-[77%] left-[22%] -translate-1/2 -rotate-4"
          style={{
            width: `${imageSizes.image2.w}px`,
            height: `${imageSizes.image2.h}px`,
          }}
        >
          <Image
            src={urlFor(data.secondaryArtwork2.mainImage)
              .width(imageSizes.image2.w)
              .url()}
            className="object-cover"
            alt={data.secondaryArtwork2.mainImage.alt}
            fill
            sizes={`${imageSizes.image2.w}px`}
          />
        </div>
        <div
          className="image4 absolute -translate-1/2 left-[50%] top-[30%] -rotate-13"
          style={{
            width: `${imageSizes.image3.w}px`,
            height: `${imageSizes.image3.h}px`,
          }}
        >
          <Image
            src={urlFor(data.secondaryArtwork3.mainImage)
              .width(imageSizes.image3.w)
              .url()}
            className="object-cover"
            alt={data.secondaryArtwork3.mainImage.alt}
            fill
            sizes={`${imageSizes.image3.w}px`}
          />
        </div>
        <div
          className="image4 absolute -translate-1/2 left-[80%] top-[70%] rotate-15"
          style={{
            width: `${imageSizes.image4.w}px`,
            height: `${imageSizes.image4.h}px`,
          }}
        >
          <Image
            src={urlFor(data.secondaryArtwork4.mainImage)
              .width(imageSizes.image4.w)
              .url()}
            className="object-cover"
            alt={data.secondaryArtwork4.mainImage.alt}
            fill
            sizes={`${imageSizes.image4.w}px`}
          />
        </div>
        <div
          className="image5 absolute -translate-1/2 left-[80%] top-[20%] -rotate-17"
          style={{
            width: `${imageSizes.image5.w}px`,
            height: `${imageSizes.image5.h}px`,
          }}
        >
          <Image
            src={urlFor(data.secondaryArtwork5.mainImage)
              .width(imageSizes.image5.w)
              .url()}
            className="object-cover"
            alt={data.secondaryArtwork5.mainImage.alt}
            fill
            sizes={`${imageSizes.image5.w}px`}
          />
        </div>
      </div>
      <div className="z-10 flex flex-col justify-center items-center  h-full hero__content">
        <h1
          className={` text-8xl lg:text-9xl ${bebasNeue.className} leading-20 lg:leading-25   text-primary  text-center`}
        >
          Moises
        </h1>
        <h1
          className={` text-8xl lg:text-9xl ${bebasNeue.className} leading-20 lg:leading-25  text-primary  text-center`}
        >
          Gante
        </h1>
        <p className=" text-base text-primary text-center max-w-62 leading-4 font-light lg:text-xl ">
          {data.subtitle}
        </p>
      </div>
    </div>
  );
}
