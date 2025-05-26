'use client'
import { bebasNeue } from "@/app/fonts";
import MaskButton from "@/app/ui/MaskButton";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";


export default function CTASection() {
    const container = useRef();
    const tl = useRef();

    useGSAP(()=>{
        let split = SplitText.create(".cta__text",{type:"lines,chars",mask:"lines"})        
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger:container.current,
                markers:false,
                start:"top 80%",
                end:"top 80%",
            }
        })
        tl.current.from(split.chars,{
            yPercent:100,
            opacity:0,
            stagger:0.09,
            ease:'power3.out',
        },0)
        .fromTo('.cta__button',{
            x:30,
            opacity:0,
        },{
            x:0,
            opacity:1,
        },0)

    },{scope:container.current})

  return (
    <div ref={container} className="flex flex-col items-center justify-center">
      <h1
        className={`${bebasNeue.className} cta__text text-7xl sm:text-8xl lg:text-9xl text-center`}
      >
        Lets Make art
      </h1>
      <MaskButton className="cta__button" text="Contact"></MaskButton>
    </div>
  );
}
