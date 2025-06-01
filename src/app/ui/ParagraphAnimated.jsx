"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

export function ParagraphAnimated({ className, children }) {
  const container = useRef();

  useGSAP(() => {
    let splits = SplitText.create(container.current, {
      type: "lines,chars",
      mask: "lines",
    });
    gsap.fromTo(
      splits.chars,
      { yPercent: 100,opacity:1 },
      {
        yPercent: 0,
        opacity:1,
        ease: "power4.out",
        duration: 1,
        stagger: 0.003,
        scrollTrigger:{
          trigger:container.current,
          markers:false,
          start:'top 80%',
          start:'end 80%',
        }
      }

    );

    // gsap.fromTo(container.current,{opacity:0, y:50},{
    //     opacity:1,
    //     y:0,
    //     scrollTrigger:{
    //         trigger:container.current,
    //         start:"top 90%",
    //         end:"top 90%"
    //     }
    // })

    return (()=>{
      if(splits){
        splits.revert();
      }
    })

  }, {});

  return (
    <p
      ref={container}
      className={` leading-tight font-light  ${className}`}
    >
      {children}
    </p>
  );
}
