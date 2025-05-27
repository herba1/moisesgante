"use client";
import Link from "next/link";
import LinkMask from "../LinkMask";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function FooterContent({triggerRef}) {
    const container = useRef()
    const contentTl = useRef()
    const headerTl= useRef()
    const FooterTl= useRef()
    

    useGSAP(()=>{
        contentTl.current = gsap.timeline({
            scrollTrigger:{
                markers:true,
                trigger:triggerRef.current,
                start:"",
                end:"center center",
            }
        })

    })


  return (
    <div ref={container} className="bg-primary text-secondary w-full h-full p-small lg:p-medium xl:p-large xl:py-medium" >
      <div className="layout flex flex-col justify-between w-full h-full ">
        <div className="footer__header">moises gante</div>
        <div className="footer__content grid grid-rows-2 grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-small gap-y-medium ">
          <ul>
            <h3 className=" text-xs">Pages</h3>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
          </ul>
          <ul>
            <h3 className=" text-xs">Pages</h3>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
          </ul>
          <ul>
            <h3 className=" text-xs">Pages</h3>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
            <li className="font-medium italic overflow-clip" style={{clipPath:"inset(0 0 0% 0)"}}><Link className=" inline-block" href={'#'}>Home</Link></li>
          </ul>


          <div className="relative w-full h-full  ">
            <Image unoptimized src="https://media.giphy.com/media/3oEjHNt87PnN2VfblC/giphy.gif?cid=ecf05e47p6d3ubbh2gok55xqmiaexpy1tzfhjfxlj2l00sqc&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="water.gif" fill className=" object-cover hover:mix-blend-difference mix-blend-color-burn  " ></Image>
          </div>
        </div>
        <div className="footer__bottom flex justify-between text-xs">
          <span>© 2024 Moises Gante</span>
          <span>
            Page by{" "}
            <a
              className="font-bold italic z-50 cursor-crosshair  "
              href="https://herbart.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              herb
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
