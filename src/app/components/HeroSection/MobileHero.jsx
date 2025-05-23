import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function MobileHero({ featuredArtwork }) {
  return (
    <>
      <Image
        src={urlFor(featuredArtwork.mainImage).url()}
        className="-z-20 collage__image--mobile select-none lg:hidden absolute h-full w-full object-cover"
        style={{clipPath:'inset(100% 0 0 0)'}}
        alt={featuredArtwork.mainImage.alt}
        fill="true"
        priority
        sizes="547px"
      />
      <div className=" image__mobile__overlay w-full h-full opacity-0 bg-black/50 lg:hidden absolute -z-10"></div>
    </>
  );
}