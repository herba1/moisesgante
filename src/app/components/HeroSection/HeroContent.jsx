import { bebasNeue } from "@/app/fonts";

export default function HeroContent({ subtitle }) {
  return (
    <div className="z-10 flex flex-col justify-center items-center h-full hero__content">
      <h1
        className={`heroText1 text-8xl lg:text-9xl ${bebasNeue.className} leading-20 lg:leading-25 text-primary text-center`}
      >
        Moises
      </h1>
      <h1
        className={`heroText2 text-8xl lg:text-9xl ${bebasNeue.className} leading-20 lg:leading-25 text-primary text-center`}
      >
        Gante
      </h1>
      <p className="heroText3 text-base text-primary text-center max-w-62 leading-4 font-light lg:text-xl">
        {subtitle}
      </p>
    </div>
  );
}