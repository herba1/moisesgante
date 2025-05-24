import { client } from "@/sanity/lib/client";
import { inter } from "./fonts";
import HeroSection from "./components/HeroSection";
import MaskButton from "./ui/MaskButton";
import { getHeroData,getFeaturedData } from "./lib/api/cmsData";
import FeaturedSection from "./components/FeaturedSection";
import SectionHeader from "./ui/SectionHeader";

// If loading a variable font, you don't need to specify the font weight

export default async function Home() {
  const data = await getHeroData();
  const dataFeatured = await getFeaturedData();
  console.log(dataFeatured)

  return (
    <div id="content" className={`${ inter.className} bg-secondary text-primary `}>
      <HeroSection data={data}></HeroSection>

      {/* first section */}
      <div className="main__container ">
        <section className="my-32">
          <div className=" featured__wrapper min-h-svh px-small lg:px-medium xl:px-large   ">
            <FeaturedSection data={dataFeatured}></FeaturedSection>
          </div>
        </section>
        <article className="main-content  bg-secondary  px-large h-svh  ">

        </article>
      </div>
    </div>
  );
}
