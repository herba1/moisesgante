"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function ParagraphAnimated({ className, children }) {
  const container = useRef();

  useGSAP(() => {

    gsap.fromTo(container.current,{opacity:0, y:50},{
        opacity:1,
        y:0,
        scrollTrigger:{
            trigger:container.current,
            start:"top 90%",
            end:"top 90%"
        }
    })

  },{});

  return (
    <p
      ref={container}
      className={`opacity-0 leading-tight font-light  ${className}`}
    >
        {children}
    </p>
  );
}
