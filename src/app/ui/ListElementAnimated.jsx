"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ListElementAnimated({ className, children}) {
  // type == "fade" 
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(container.current,{
      yPercent:100,

    },{
      opacity:1,
      yPercent:0,
      scrollTrigger:{
        trigger:container.current,
        markers:true,
        start:'top 85%',
        end:'top 85%',
      }

    })
  }, {scope:container.current});

  return (
    <li ref={container} className={` opacity-0 ${className}`}>
      {children}
    </li>
  );
}
