import { client } from "@/sanity/lib/client";
import HeroSection from "./components/HeroSection";
import { inter } from "./fonts";

// If loading a variable font, you don't need to specify the font weight

async function getData() {
  return await client.fetch(`
*[_type=='hero'][0]{
  featuredArtwork->{
    title, mainImage{alt, asset->{url},crop,hotspot}
  },
  secondaryArtwork1->{
    title,
    mainImage{alt, asset->{url},crop,hotspot}
  },
secondaryArtwork2->{
    title,
    mainImage{alt, asset->{url},crop,hotspot}
  },
secondaryArtwork3->{
    title,
    mainImage{alt, asset->{url},crop,hotspot}
  },
secondaryArtwork4->{
    title,
    mainImage{alt, asset->{url},crop,hotspot}
  },
secondaryArtwork5->{
    title,
    mainImage{alt, asset->{url},crop,hotspot}
  },
subtitle,title

}
`);
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <div id="content" className={`${ inter.className} text-primary `}>
      <HeroSection data={data}></HeroSection>

      {/* first section */}
      <div className="main__container ">
        <article className="main-content  bg-secondary flex justify-center items-center h-svh  ">
          <h1 className="text-center text-4xl ">this is some content</h1>
        </article>
        <article className="main-content  bg-secondary flex justify-center items-center h-svh  ">
          <h1 className="text-center text-4xl ">this is some content</h1>
        </article>
      </div>
    </div>
  );
}
