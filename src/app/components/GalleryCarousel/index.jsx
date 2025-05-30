"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { bebasNeue } from "@/app/fonts";
import { Subtitle } from "@/app/ui/Headings";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

function GalleryCarouselSlide({ artwork }) {
  return (
    <SplideSlide key={artwork.title}>
      <div className=" image__container relative min-w-[240px] w-[80vw] max-w-[380px] lg:w-[29vw] lg:max-w-none h-auto ">
        <Image
          width={500}
          height={500}
          src={urlFor(artwork.mainImage).url()}
          alt="water"
          className="w-full h-auto "
        ></Image>
        <Link
          className={`absolute left-0 top-0 w-full h-full z-10`}
          href={`/gallery/${artwork.slug.current}`}
        ></Link>
      </div>
    </SplideSlide>
  );
}

export default function GalleryCarousel({ images = [], year }) {
  const container = useRef();

  useGSAP(
    () => {
        const elements = container.current.querySelectorAll('.image__container');
      gsap.fromTo(
        elements,
        {
          clipPath: "inset(100% 0 0 0)",
        },
        {
            scrollTrigger:{
                markers:false,
                trigger:container.current,
                start:'top 80%',
                end:'top 80%',
            },
            delay:0.1,
          clipPath: "inset(0% 0 0 0)",
          stagger: 0.1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    { scope: container.current, dependencies: [] }
  );

  let slideItems = images.map((artwork, index) => {
    return (
      <GalleryCarouselSlide
        key={index}
        artwork={artwork}
      ></GalleryCarouselSlide>
    );
  });

  return (
    <Splide
      options={{
        perPage: 3,
        autoWidth: true,
        gap: "2rem",
        drag: "free",
        snap: "true",
        padding: { left: "2rem", right: "2rem" },
        breakpoints: {
          1024: {
            padding: { left: "0.5rem", right: "0.5rem" },
            gap: "0.5rem",
            perPage: 2,
          },
          768: {
            padding: { left: "0.5rem", right: "0.5rem" },
            gap: "0.5rem",
            perPage: 1,
          },
        },
      }}
      hasTrack={false}
    >
      <div className="p-small lg:p-medium flex justify-between">
        <Subtitle className={`${bebasNeue.className}`} text={year}></Subtitle>
        <div className="splide__arrows flex gap-small">
          <button className=" p-1 cursor-pointer rounded-md active:scale-95 active:opacity-85 hover:bg-white/10 hover:scale-110 hover:opacity:95 transition-all touch-manipulation splide__arrow splide__arrow--prev">
            <ArrowLeft size={35}></ArrowLeft>
          </button>
          <button className=" p-1 cursor-pointer rounded-md active:scale-95 active:opacity-85 hover:bg-white/10 hover:scale-110 hover:opacity:95 transition-all touch-manipulation splide__arrow splide__arrow--next">
            <ArrowRight size={35}></ArrowRight>
          </button>
        </div>
      </div>

      <SplideTrack ref={container}>{slideItems}</SplideTrack>
    </Splide>
  );
}
