import { getArtworkBySlug } from "@/app/lib/api/cmsData";
import ArtworkHeading from "@/app/ui/Artwork/ArtworkHeading";
import ArtworkImage from "@/app/ui/Artwork/ArtworkImage";
import Image from "next/image";
import ScrollToTop from "@/app/lib/utils/ScrollToTop";
import SectionHeader from "@/app/ui/SectionHeader";
import { PortableText } from "next-sanity";
import { ParagraphAnimated } from "@/app/ui/ParagraphAnimated";
import MaskButton from "@/app/ui/MaskButton";
import { description } from "@/app/lib/CONSTANTS";

export async function generateMetadata({ params }) {
  // read route params
  const { slug } = await params;
  const data = await getArtworkBySlug(slug);
  // console.log(data)
  return {
    title: data.title,
    description: `${data.year}, ${data.title}, ${data.medium}`,
    openGraph:{
      images:[data.mainImage.asset.url]
    }
  }
}


export default async function Page({ params }) {
  const { slug } = await params;
  const data = await getArtworkBySlug(slug);

  const components = {
    block: {
      normal: ({ children }) => (
        <ParagraphAnimated className={"text-primary"}>
          {children}
        </ParagraphAnimated>
      ),
    },
  };


  let additionalImages;
  if (data.additionalImages) {
    additionalImages = data.additionalImages.map((artwork, index) => {
      return <ArtworkImage key={index} mainImage={artwork}></ArtworkImage>;
    });
  }

  return (
    <ScrollToTop>
      <main className=" min-h-svh bg-secondary pt-large">
        <article className="p-small relative lg:p-medium flex flex-col">
          <ArtworkHeading
            title={data.title}
            medium={data.medium}
            year={data.year}
            size={data.size}
          ></ArtworkHeading>
          <ArtworkImage mainImage={data.mainImage} />
          {additionalImages}
          <div className="sm:w-md w-full self-end pb-large">
            <SectionHeader className="lg:mb-small">A Word</SectionHeader>
            <PortableText
              value={data.description}
              components={components}
            ></PortableText>
            <MaskButton
              backButton={true}
              className=" self-end z-10 mt-medium"
              text="Return to Gallery"
            ></MaskButton>
          </div>
        </article>
      </main>
    </ScrollToTop>
  );
}
