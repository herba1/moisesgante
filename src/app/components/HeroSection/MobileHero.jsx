import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function MobileHero({ featuredArtwork }) {
  return (
    <div
      style={{ clipPath: "inset(100% 0% 0% 0%)" }}
      className="overflow-clip collage__image--mobile__clip w-full lg:hidden h-full absolute top-0 left-0 "
    >
      <Image
        src={urlFor(featuredArtwork.mainImage).url()}
        className=" -z-20 select-none  w-full h-full object-cover  "
        alt={featuredArtwork.mainImage.alt}
        width={1000}
        priority={true}
        height={1000}
      />
      <div className=" image__mobile__overlay  w-full h-full opacity-0 top-0 left-0 bg-black/50 lg:hidden absolute z-0"></div>
    </div>
  );
}
