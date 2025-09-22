"use client";
import { bebasNeue } from "../fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useRef } from "react";

export default function SectionHeader({
  children,
  className = "",
  classNameUnderline = "",
  classNameText="",
  underline=true,
}) {
  const container = useRef();

  useGSAP(
    () => {
      // self contained items
      let title = container.current.querySelector(".section__title");
      let border = container.current.querySelector(".fake__border");

      let split = SplitText.create(title, {
        type: "chars,lines",
        mask: "lines",
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          markers: false,
          start: "top 90%",
          end: "top 90%",
        },
      });

      // set values
      gsap.set(border, {
        scaleX: 0,
        transformOrigin: "left",
      });
      gsap.set(title, {
        opacity: 100,
      });

      // tl animation
      tl.to(
        border,
        {
          scaleX: 1,
          duration: 1,
          ease: "power1.out",
        },
        "start"
      ).from(
        split.chars,
        {
          yPercent: 100,
          stagger: 0.01,
          duration:1.5,
          ease: "power4.out",
        },
        "start"
      );
    },
    { scope: container.current }
  );

  return (
    <div
      ref={container}
      className={`relative text-primary mb-small lg:mb-medium ${className}`}
    >
      <h1
        className={`${bebasNeue.className} opacity-0 section__title text-base lg:text-xl ${classNameText} `}
      >
        {children}
      </h1>
      <div
        className={` fake__border max-w-full w-full scale-x-0  h-full absolute top-0 left-0 bg-primary ${className} ${underline?'':'hidden'} `}
        style={{ clipPath: "inset(92% 0 0 0)" }}
      ></div>
    </div>
  );
}
