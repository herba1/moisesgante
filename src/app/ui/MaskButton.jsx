"use client";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

export default function MaskButton({
  text = "Gallery",
  isLink = true,
  href = "#",
  padding = "10px",
  gap = "4px",
  className = "",
}) {
  const buttonContainer = useRef();
  const tl = useRef();

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true });

      gsap.set(".button__mask", {
        clipPath: "inset(100% 0 0 0)",
      });

      tl.current
        .to(
          ".button__text",
          {
            xPercent: 100,
            ease: "power3.inOut",
            duration: 0.35,
          },
          "start"
        )
        .to(
          ".button__mask",
          {
            clipPath: "inset(0% 0 0 0)",
            ease: "power3.inOut",
            duration: 0.35,
          },
          "start"
        );
    },
    { scope: buttonContainer }
  );

  const start = contextSafe(() => {
    tl.current.timeScale(1).play();
  });
  const reverse = contextSafe(() => {
    setTimeout(() => {
      tl.current.timeScale(1.2).reverse();
    }, 50);
  });

  return (
    <button
      ref={buttonContainer}
      className={` button__container transition-all active:scale-90 font-semibold relative w-fit h-fit bg-highlight text-secondary overflow-hidden rounded-lg ${className}`}
      onMouseEnter={start}
      onMouseLeave={reverse}
    >
      {isLink && (
        <Link
          href={href}
          className="absolute top-0 left-0 right-0 w-full h-full bg-transparent text-transparent z-20"
        >
          {text}
        </Link>
      )}
      <div className="relative w-full h-full">
        <div
          className={` button__text  flex items-center w-full h-full justify-center `}
          style={{ padding:`${padding}` , gap:`${gap}`}}
        >
          <span>{text}</span>
          <ArrowRight strokeWidth={2.5}></ArrowRight>
        </div>
        <div
          className={` button__text  absolute top-0 -left-full w-full h-full  flex items-center justify-center `}
          style={{ padding:`${padding}` , gap:`${gap}`}}
        >
          <span>{text}</span>
          <ArrowRight strokeWidth={2.5}></ArrowRight>
        </div>
      </div>
      {/* unmask */}
      <div
        className={` button__mask w-full h-full absolute z-10 left-0 top-0 text-primary bg-red-400`}
      >
        <div
          className={` button__text  flex items-center min-w-fit w-full h-full justify-center  `}
          style={{ padding:`${padding}` , gap:`${gap}`}}
        >
          <span>{text}</span>
          <ArrowRight strokeWidth={2.5}></ArrowRight>
        </div>
        <div
          className={` button__text  absolute top-0 -left-full w-full h-full  flex items-center justify-center `}
          style={{ padding:`${padding}` , gap:`${gap}`}}
        >
          <span>{text}</span>
          <ArrowRight strokeWidth={2.5}></ArrowRight>
        </div>
      </div>
    </button>
  );
}
