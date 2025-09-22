"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageCollage({ data }) {
  const [loaded, setLoaded] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const container = useRef();
  const track = useRef();
  const artworks = data.artworks;
  const size = artworks.length;
  const images = artworks.map((image, index) => {
    return (
      <div key={index} className={` relative inline-block img img${index}`}>
        <Image
          src={urlFor(image.mainImage).url()}
          width={500}
          height={500}
          className="h-[80vw] md:h-[25vw] xl:h-[20vw] w-auto "
          alt={image.mainImage.alt}
          onLoad={() => {
            setLoaded(loaded + 1);
          }}
          loading="eager"
        ></Image>
      </div>
    );
  });

  // viewport resizer
  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setRefresh((prev) => !prev);
      }, 300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  useGSAP(
    () => {
      const images = container.current.querySelectorAll(".img");
      images.forEach((elem, index) => {
        if(index >= images.length/2) return;
        const random = gsap.utils.random(-10, 10);
        gsap.set(`.img${index}`, {
          rotate: random,
          yPercent: (index % 2 === 0 ? 2 : -2) * 10,
        });
        gsap.timeline({ repeat: -1, yoyo: true }).to(`.img${index}`, {
          yPercent: random * -2,
          rotate: random * -0.5,
          ease: "power1.inOut",
          duration: 10,
        });
      });

      const half = track.current.clientWidth / 2;
      const wrapX = gsap.utils.wrap(-half, 0);

      const xTo = gsap.quickTo(track.current, "x", {
        duration: 2,
        ease: "power4.out",
        modifiers: {
          x: gsap.utils.unitize(wrapX),
        },
      });

      let incrX = 0;
      const move = () => {
        xTo((incrX += 1));
      };

      gsap.ticker.add(move);
    },
    { scope: container, dependencies: [refresh] }
  );

  return (
    <div ref={container} className="h-full grow relative z-0">
      <div className="track__container pointer-events-none select-none relative animate-marquee grid items-center w-full h-full overflow-x-clip">
        <Image
          src={"star2.webp"}
          alt="stars"
          width={2000}
          height={2000}
          className="absolute w-full h-full hero__star1 overflow-visible object-cover top-0 bottom-0 z-20 mix-blend-normal brightness-150"
          unoptimized
        ></Image>
        <Image
          src={"star2.webp"}
          alt="stars"
          width={2000}
          height={2000}
          className="absolute rotate-180  overflow-visible w-full h-full hero__star2 object-cover  z-0 top-0 bottom-0 scale-70  mix-blend-normal brightness-150 opacity-60"
          unoptimized
        />
        <div
          ref={track}
          className="marquee__track hero__marquee w-max will-change-transform z-10 "
        >
          {images}
          {images}
        </div>
      </div>
    </div>
  );
}
