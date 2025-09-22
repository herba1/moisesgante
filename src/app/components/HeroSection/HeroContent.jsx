import { bebasNeue } from "@/app/fonts";
import Image from "next/image";

export default function HeroContent({ subtitle, className }) {
  return (
    <div
      className={`z-40 p-2 sm:px-8 sm:pb-8 relative shrink flex flex-col justify-end h-fit bg-secondary hero__content ${className}`}
    >
      <div
        aria-hidden
        className="h-[50vw] w-[110vw] sm:h-[20vw] bg-gradient-to-t -left-2  from-secondary to-secondary/0  absolute bottom-full "
      ></div>
      <div className="flex gap-4 tracking-tight hero__mg relative flex-col  items-center ">
        <h1
          className={` ${bebasNeue.className} hidden sm:inline-block text-[22.5vw] -my-[4vw] text-nowrap leading-none`}
        >
          MOISES GANTE
        </h1>
        <h1
          className={` ${bebasNeue.className} flex flex-col justify-center items-center sm:hidden  gap-2 text-[42vw] -my-[4vw]  leading-[35vw]`}
        >
          <span>Moises</span>
          <span>GANTE</span>
        </h1>
      </div>
      <div className="flex text hero__subtitle justify-center mt-4 sm:justify-between">
        <span className=" subtitle text1  inline-block uppercase ">
          Artist based in Madera, California
        </span>
        <span className="subtitle text2 hidden sm:inline-block uppercase">
          Scroll Down
        </span>
      </div>
    </div>
  );
}
