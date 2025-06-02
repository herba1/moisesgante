"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

export function ParagraphAnimated({ className, children, type = "mask" }) {
  // type == "fade | mask default mask"
  // mask is by line, fade is whole paragraph
  const container = useRef();

  useGSAP(() => {
    if (type === "mask") {
      let splits = SplitText.create(container.current, {
        type: "lines,chars",
        mask: "lines",
      });
    gsap.set("p", { opacity: 1 });

      gsap.fromTo(
        splits.chars,
        { yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power4.out",
          duration: 1,
          stagger: 0.003,
          scrollTrigger: {
            trigger: container.current,
            markers: false,
            start: "top 80%",
            start: "end 80%",
          },
        }
      );
    }

    if (type === "fade") {
      gsap.fromTo(container.current, {
        y: 40,
        opacity: 0,
      },{
        y:0,
        opacity:1,
        scrollTrigger: {
          trigger: container.current,
          markers: false,
          start: "top 90%",
          end: "top 90%",
        },
      });
    }

    return () => {
      if (type === "splits") {
        if (splits) {
          splits.revert();
        }
      }
    };
  }, {});

  return (
    <p ref={container} className={` opacity-0 ${className}`}>
      {children}
    </p>
  );
}
