"use client";
import Image from "next/image";
import { bebasNeue, Inter } from "../fonts";
import { urlFor } from "@/sanity/lib/image";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


export default function HeroSection({ data }) {
    const container = useRef(null);
    const textTl = useRef();
    const parralaxTl = useRef();
    const split1 = useRef(null);
    const split2 = useRef(null);
    const split3 = useRef(null);

  const imageSizes = {
    image1: { w: 354, h: 464 },
    image2: { w: 467, h: 357 },
    image3: { w: 274, h: 423 },
    image4: { w: 480, h: 365 },
    image5: { w: 279, h: 370 },
  };

  const parralaxValues = {
    1:{y:180, r:12},
    2:{y:150, r:-7},
    3:{y:220, r:1},
    4:{y:200, r:-4},
    5:{y:240, r:4},
    text1:{y:100, r:4},
    text2:{y:150, r:-2},
    text3:{y:200, r:-6},
  }

  const { contextSafe } = useGSAP(()=>{
    split1.current = SplitText.create('.heroText1',{type:'lines,chars',mask:'lines'});
    split2.current = SplitText.create('.heroText2',{type:'lines,chars',mask:'lines'});
    split3.current = SplitText.create('.heroText3',{type:'lines,chars',mask:'lines'});
    textTl.current = gsap.timeline();
    parralaxTl.current = gsap.timeline({
        ease:'power1.outIn',
        scrollTrigger:{
            trigger:container.current,
            markers:true,
            start:'top top',
            end:'bottom top',
            scrub:1,
        }
    }
    );

    textTl.current
    .from(split1.current.chars,{
        opacity:0,
        yPercent:100,
        stagger:0.05,
        ease:'power3.out'
    },'start')
    .from(split2.current.chars,{
        opacity:0,
        yPercent:100,
        stagger:0.05,
        ease:'power3.out'
    },'start+=0.3')
    .from(split3.current.chars,{
        opacity:0,
        yPercent:100,
        stagger:0.01,
        ease:'power4.out'
    },'start+=0.6')

    // start parralax here
    parralaxTl.current
    .to('.image1',{
        translateY:`${parralaxValues[1].y}`,
        rotate:`${parralaxValues[1].r}`,
    },0)
    .to('.image2',{
        translateY:`${parralaxValues[2].y}`,
        rotate:`${parralaxValues[2].r}`,
    },0)
    .to('.image3',{
        translateY:`${parralaxValues[3].y}`,
        rotate:`${parralaxValues[3].r}`,
    },0)
    .to('.image4',{
        translateY:`${parralaxValues[4].y}`,
        rotate:`${parralaxValues[4].r}`,
    },0)
    .to('.image5',{
        translateY:`${parralaxValues[5].y}`,
        rotate:`${parralaxValues[5].r}`,
    },0)
    .to('.heroText1',{
        translateY:`${parralaxValues.text1.y}`,
        rotate:`${parralaxValues.text1.r}`,
        opacity:0,
    },0)
    .to('.heroText2',{
        translateY:`${parralaxValues.text2.y}`,
        rotate:`${parralaxValues.text2.r}`,
        opacity:0,
    },0)
    .to('.heroText3',{
        translateY:`${parralaxValues.text3.y}`,
        rotate:`${parralaxValues.text3.r}`,
        opacity:0,
    },0)


  },{scope:container})


  return (
    <div ref={container} className="h-svh relative -z-10 bg-secondary">
      <Image
        src={urlFor(data.featuredArtwork.mainImage).url()}
        className="-z-20 select-none lg:hidden absolute h-full saturate-150 w-full object-cover"
        alt={data.featuredArtwork.mainImage.alt}
        fill="true"
      ></Image>
      <div className="w-full h-full bg-black/50 lg:hidden absolute -z-10"></div>
      {/* images collage */}
      <div className="w-full h-full hidden lg:block absolute -z-10 collage  overflow-hidden">
        <div
          className="image1 absolute left-[17%] top-[27%] rotate-6  -translate-1/2 "
          style={{
            width: `${imageSizes.image1.w}px`,
            height: `${imageSizes.image1.h}px`,
          }}
        >
          <Image
            src={urlFor(data.secondaryArtwork1.mainImage)
              .width(imageSizes.image1.w)
              .url()}
            className="object-cover"
            alt={data.secondaryArtwork1.mainImage.alt}
            fill
            sizes={`${imageSizes.image1.w}px`}
          />
        </div>
        <div
          className="image2 absolute top-[77%] left-[22%] -translate-1/2 -rotate-4"
          style={{
            width: `${imageSizes.image2.w}px`,
            height: `${imageSizes.image2.h}px`,
          }}
        >
          <Image
            src={urlFor(data.secondaryArtwork2.mainImage)
              .width(imageSizes.image2.w)
              .url()}
            className="object-cover"
            alt={data.secondaryArtwork2.mainImage.alt}
            fill
            sizes={`${imageSizes.image2.w}px`}
          />
        </div>
        <div
          className="image3 absolute -translate-1/2 left-[50%] top-[30%] -rotate-13"
          style={{
            width: `${imageSizes.image3.w}px`,
            height: `${imageSizes.image3.h}px`,
          }}
        >
          <Image
            src={urlFor(data.secondaryArtwork3.mainImage)
              .width(imageSizes.image3.w)
              .url()}
            className="object-cover"
            alt={data.secondaryArtwork3.mainImage.alt}
            fill
            sizes={`${imageSizes.image3.w}px`}
          />
        </div>
        <div
          className="image4 absolute -translate-1/2 left-[80%] top-[70%] rotate-15"
          style={{
            width: `${imageSizes.image4.w}px`,
            height: `${imageSizes.image4.h}px`,
          }}
        >
          <Image
            src={urlFor(data.secondaryArtwork4.mainImage)
              .width(imageSizes.image4.w)
              .url()}
            className="object-cover"
            alt={data.secondaryArtwork4.mainImage.alt}
            fill
            sizes={`${imageSizes.image4.w}px`}
          />
        </div>
        <div
          className="image5 absolute -translate-1/2 left-[80%] top-[20%] -rotate-17"
          style={{
            width: `${imageSizes.image5.w}px`,
            height: `${imageSizes.image5.h}px`,
          }}
        >
          <Image
            src={urlFor(data.secondaryArtwork5.mainImage)
              .width(imageSizes.image5.w)
              .url()}
            className="object-cover"
            alt={data.secondaryArtwork5.mainImage.alt}
            fill
            sizes={`${imageSizes.image5.w}px`}
          />
        </div>
      </div>
      <div className="z-10 flex flex-col justify-center items-center  h-full hero__content">
        <h1
          className={` heroText1 text-8xl lg:text-9xl ${bebasNeue.className} leading-20 lg:leading-25   text-primary  text-center`}
        >
          Moises
        </h1>
        <h1
          className={` heroText2 text-8xl lg:text-9xl ${bebasNeue.className} leading-20 lg:leading-25  text-primary  text-center`}
        >
          Gante
        </h1>
        <p className=" heroText3 text-base text-primary text-center max-w-62 leading-4 font-light lg:text-xl ">
          {data.subtitle}
        </p>
      </div>
    </div>
  );
}
