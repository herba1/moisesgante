import Link from "next/link";
import { bebasNeue } from "./fonts";

export default function Custom404() {
  return (
    <div className="z-10 min-h-lvh bg-secondary text-primary flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center">
        <h1 className={`${bebasNeue.className}`}><span className=" text-9xl">4</span><span className="text-8xl">0</span><span className="text-7xl">4</span></h1>
        <p className="">Page Not Found</p>
        <Link className=" underline" href={"/"}>Return Home</Link>
      </div>
    </div>
  );
}
