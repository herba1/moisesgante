import { getArtworkBySlug } from "@/app/lib/api/cmsData";
import ArtworkHeading from "@/app/ui/Artwork/ArtworkHeading";
import ArtworkImage from "@/app/ui/Artwork/ArtworkImage";
import Image from "next/image";

export default async function Page({ params }) {
  const { slug } = await params;
  const data = await getArtworkBySlug(slug);
  console.log(data);

  return (
    <main className=" min-h-svh bg-secondary pt-large">
      <article className="p-small lg:p-medium">
        <ArtworkHeading
          title={data.title}
          medium={data.medium}
          year={data.year}
          size={data.size}
        ></ArtworkHeading>
        <ArtworkImage mainImage={data.mainImage}/>

      </article>
    </main>
  );
}
