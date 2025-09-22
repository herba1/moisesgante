"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function AboutImage({ data }) {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".image",
        {
          opacity: 0,
          scale: 0.8,
          yPercent: 10,
        },
        {
          stagger: 0.1,
          opacity: 1,
          scale: 1,
          yPercent: 0,
          // xPercent:-25,
          ease: "power4.inOut",
          duration: 1.5,
        }
      );
      gsap.fromTo(
        ".stars",
        {
          opacity: 0,
          scale: 0.8,
          yPercent: 10,
        },
        {
          stagger: 0.1,
          opacity: 1,
          scale: 1.2,
          yPercent: 0,
          // xPercent:-25,
          ease: "power4.inOut",
          duration: 1.5,
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className="w-full h-full">
      <Image
        src={"/star1.webp"}
        width={500}
        height={500}
        className="w-full opacity-0 stars h-full absolute z-10 scale-130"
        alt="stars"
      ></Image>
      <Image
        className="image object-cover opacity-0 max-w-full max-h-full rounded-xl "
        src={urlFor(data.mainImage).url()}
        height={data.mainImage.asset.metadata.dimensions.height}
        width={data.mainImage.asset.metadata.dimensions.width}
        alt={data.mainImage.alt}
        priority
      ></Image>
    </div>
  );
}
