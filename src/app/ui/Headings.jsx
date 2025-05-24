"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { bebasNeue } from "../fonts";

export function Subtitle({ text, className }) {
  const container = useRef();

  useGSAP(() => {
    let split = SplitText.create(container.current,{type:'lines,chars', mask:'lines'});

    gsap.fromTo(split.chars,{opacity:0, yPercent:100},{
        opacity:1,
        yPercent:0,
        stagger:0.02,
        ease:'power3.out',
        scrollTrigger:{
            trigger:container.current,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.to(container.current,{opacity:1})

  },{});

  return (
    <h1
      ref={container}
      className={`${bebasNeue.className} opacity-0 text-3xl xl:text-5xl `}
    >
      {text}
    </h1>
  );
}
