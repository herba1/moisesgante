import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const imageSizes = {
  image1: { w: 354, h: 464 },
  image2: { w: 467, h: 357 },
  image3: { w: 274, h: 423 },
  image4: { w: 480, h: 365 },
  image5: { w: 279, h: 370 },
};

export default function ImageCollage({ data }) {
  return (
    <div className="w-full h-full hidden lg:block absolute -z-10 collage overflow-hidden">
      <div
        className="image1 absolute left-[17%] top-[27%] rotate-6 -translate-1/2"
        style={{
          width: `${imageSizes.image1.w}px`,
          height: `${imageSizes.image1.h}px`,
        }}
      >
        <Image
          src={urlFor(data.secondaryArtwork1.mainImage)
            .width(imageSizes.image1.w)
            .url()}
          className="object-cover collage__image"
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
          className="object-cover collage__image"
          alt={data.secondaryArtwork2.mainImage.alt}
          fill
          sizes={`${imageSizes.image2.w}px`}
        />
      </div>
      
      <div
        className="image3 absolute -translate-1/2 left-[50%] top-[30%] -rotate-13"
        style={{
          width: `${imageSizes.image3.w}px`,
          height: `${imageSizes.image3.h}px`,
        }}
      >
        <Image
          src={urlFor(data.secondaryArtwork3.mainImage)
            .width(imageSizes.image3.w)
            .url()}
          className="object-cover collage__image"
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
          className="object-cover collage__image"
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
          className="object-cover collage__image"
          alt={data.secondaryArtwork5.mainImage.alt}
          fill
          sizes={`${imageSizes.image5.w}px`}
        />
      </div>
    </div>
  );
}