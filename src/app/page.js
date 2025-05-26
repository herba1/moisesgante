import { inter } from "./fonts";
import HeroSection from "./components/HeroSection";
import { getHeroData,getFeaturedData, getAboutShortData } from "./lib/api/cmsData";
import FeaturedSection from "./components/FeaturedSection";
import AboutShort from "./components/AboutShort";
import CTASection from "./components/CTASection";

// If loading a variable font, you don't need to specify the font weight

export default async function Home() {
  const data = await getHeroData();
  const dataFeatured = await getFeaturedData();
  const dataAbout = await getAboutShortData();
  // console.log(dataAbout);

  return (
    <div id="content" className={`${ inter.className} bg-secondary text-primary `}>
      <HeroSection data={data}></HeroSection>

      {/* first section */}
      <main className="main__container ">
        <section className="mt-large">
          <div className=" featured__wrapper px-small lg:px-medium xl:px-large   ">
            <FeaturedSection data={dataFeatured}></FeaturedSection>
          </div>
        </section>
        <section className="mt-large ">
          <div className=" aboutShort__wrapper px-small lg:px-medium xl:px-large ">
            <AboutShort data={dataAbout}></AboutShort>
          </div>
        </section>
        <section className=" py-64 ">
          <div className="cta__contact__container px-small lg:px-medium xl:px-large ">
            <CTASection></CTASection>
          </div>
        </section>
      </main>
    </div>
  );
}
