"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function FeatureBlock({
  data,
  reverse = false,
  media,
  body,
  children,
  className,
}) {
  // sanity block
  const container = useRef();

  useGSAP(() => {
    let mediaContainer = container.current.querySelector('.media__container');
    let contentContainer = container.current.querySelector('.content__container');


    let tl = gsap.timeline({scrollTrigger:{
      trigger:container.current,
      markers:false,
      start:'top 90%',
      end:'top 90%',
    }})

    tl.fromTo(mediaContainer,{opacity:0,y:50},{
      opacity:1,
      y:0,
    })

  }, { scope: container.current });

  return (
    <>
      <div
        ref={container}
        className={`featured__item__container relative flex flex-col gap-small md:gap-medium md:grid grid-rows-1 grid-cols-2 ${className}`}
      >
        <div
          className={` media__container opacity-0 ${reverse ? " col-start-2 col-span-1 " : ""} relative aspect-[3/2] rounded-sm overflow-clip`}
        >
          {/* media item */}
          {media}
        </div>
        <div
          className={` content__container ${reverse ? " col-start-1 col-span-1 row-start-1 " : ""}  gap-small  col-span-1 flex flex-col justify-between`}
        >
          {/* text/other item */}
          {children}
        </div>
      </div>
    </>
  );
}
