import { client } from "@/sanity/lib/client";
import { inter } from "./fonts";
import HeroSection from "./components/HeroSection";
import MaskButton from "./ui/MaskButton";
import { getHeroData } from "./lib/api/cmsData";

// If loading a variable font, you don't need to specify the font weight

export default async function Home() {
  const data = await getHeroData();

  return (
    <div id="content" className={`${ inter.className} bg-secondary text-primary `}>
      <HeroSection data={data}></HeroSection>

      {/* first section */}
      <div className="main__container ">
        <section className="my-32">
          <div className=" p-2 main-content   flex justify-center items-center min-h-svh  ">
            here today
          </div>
        </section>
        <article className="main-content  bg-secondary flex justify-center items-center h-svh  ">
          <h1 className="text-center text-4xl ">this is some content</h1>
        </article>
      </div>
    </div>
  );
}
