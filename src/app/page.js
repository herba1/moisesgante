import { inter } from "./fonts";
import HeroSection from "./components/HeroSection";
import { getHeroData,getFeaturedData, getAboutShortData } from "./lib/api/cmsData";
import FeaturedSection from "./components/FeaturedSection";
import AboutShort from "./components/AboutShort";

// If loading a variable font, you don't need to specify the font weight

export default async function Home() {
  const data = await getHeroData();
  const dataFeatured = await getFeaturedData();
  const dataAbout = await getAboutShortData();
  console.log(dataAbout);

  return (
    <div id="content" className={`${ inter.className} bg-secondary text-primary `}>
      <HeroSection data={data}></HeroSection>

      {/* first section */}
      <main className="main__container ">
        <section className="my-32">
          <div className=" featured__wrapper px-small lg:px-medium xl:px-large   ">
            <FeaturedSection data={dataFeatured}></FeaturedSection>
          </div>
        </section>
        <section className="my-32">
          <div className=" aboutShort__wrapper px-small lg:px-medium xl:px-large ">
            <AboutShort data={dataAbout}></AboutShort>
          </div>
        </section>
        <article className="main-content  bg-secondary  px-large h-svh  ">

        </article>
      </main>
    </div>
  );
}
