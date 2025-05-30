import GalleryCarousel from "../components/GalleryCarousel";
import { inter } from "../fonts";
import { getAllArtworkByYear } from "../lib/api/cmsData";
import { Subtitle } from "../ui/Headings";

export default async function Gallery() {
  const imageData = await getAllArtworkByYear();

  return (
    <div
      id="content"
      className={`${inter.className} bg-secondary text-primary `}
    >
      <main className=" min-h-lvh pt-large">
        <section className="p-small lg:p-medium">
            <Subtitle text={"Gallery"} className={` !text-8xl`}></Subtitle>
        </section>
        <section className="mt-medium">
          <GalleryCarousel
            images={imageData[2025]}
            year={2025}
          ></GalleryCarousel>
        </section>
        <section className="mt-large">
          <GalleryCarousel
            images={imageData[2024]}
            year={2024}
          ></GalleryCarousel>
        </section>
        <section className="mt-large pb-large">
          <GalleryCarousel
            images={imageData[2022]}
            year={2022}
          ></GalleryCarousel>
        </section>
      </main>
    </div>
  );
}
