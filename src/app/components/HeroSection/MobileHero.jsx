import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function MobileHero({ featuredArtwork }) {
  return (
    <>
      <Image
        src={urlFor(featuredArtwork.mainImage).url()}
        className="-z-20 collage__image--mobile select-none lg:hidden absolute h-full w-full object-cover"
        alt={featuredArtwork.mainImage.alt}
        fill="true"
      />
      <div className="w-full h-full bg-black/50 lg:hidden absolute -z-10"></div>
    </>
  );
}