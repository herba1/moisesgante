"use client";
import { useRef } from "react";
import { useHeroAnimations } from "./useHeroAnimations";
import ImageCollage from "./ImageCollage";
import HeroContent from "./HeroContent";
import MobileHero from "./MobileHero";
import LoadingScreen from "@/app/ui/LoadingScreen";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Observer from "gsap/Observer";
import gsapWithCSS from "gsap/all";
import { Stars } from "lucide-react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, Observer);

export default function HeroSection({ data }) {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 });
      const mg = SplitText.create(".hero__mg", {
        type: "chars",
        mask: "chars",
        autoSplit: true,
      });
      const text1 = SplitText.create(".text1", {
        type: "chars,lines",
        mask: "lines",
        autoSplit: true,
        reduceWhiteSpace: false,
        deepSlice: false,
      });
      const text2 = SplitText.create(".text2", {
        type: "chars,lines",
        mask: "lines",
        autoSplit: true,
        reduceWhiteSpace: false,
        deepSlice: false,
      });

      tl.from(mg.chars, {
        xPercent: -100,
        duration: 1.5,
        stagger: 0.02,
        ease: "power3.inOut",
      })
        .fromTo(
          ".hero__marquee",
          {
            xPercent: -50,
            opacity: 0,
          },
          {
            xPercent: 0,
            opacity: 1,
            ease: "power4.out",
            duration: 3,
          },
          "<"
        )
        .from(
          [".hero__star1", ".hero__star2"],
          {
            opacity: 0,
            scale: 1.2,
            stagger: 0.1,
            x: "100%",
            ease: "power4.out",
            duration: 3,
          },
          "<"
        )
        .from(
          [text1.lines, text2.lines],
          {
            yPercent: 100,
            stagger: 0.1,
            ease: "power4",
            duration: 0.8,
          },
          "-=1.2"
        );

      const star1X = gsap.quickTo(".hero__star1", "xPercent", {
        duration: 1,
        ease: "power4.out",
      });
      const star1Y = gsap.quickTo(".hero__star1", "yPercent", {
        duration: 1,
        ease: "power4.out",
      });
      const star2X = gsap.quickTo(".hero__star2", "xPercent", {
        duration: 1,
        ease: "power3.out",
      });
      const star2Y = gsap.quickTo(".hero__star2", "yPercent", {
        duration: 1,
        ease: "power3.out",
      });
      const trackY = gsap.quickTo(".hero__marquee", "yPercent", {
        duration: 1,
        ease: "power4.out",
      });

      Observer.create({
        target: container.current,
        onMove: (e) => {
          star1X((e.x / window.innerWidth - 0.5) * 10);
          star1Y((e.y / window.innerHeight - 0.5) * 10);
          star2X((e.x / window.innerWidth - 0.5) * 3);
          star2Y((e.y / window.innerHeight - 0.5) * 3);
          trackY((e.y / window.innerHeight - 0.5) * 5);
        },
      });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          // markers:true,
          scrub: 1,
        },
      });
      scrollTl.to(container.current, {
        // yPercent: 100,
        opacity: 0.2,
        ease: "none",
      }).to('.hero__mg',{
        opacity:0,
        ease:'none'
      },'<').to('.image__collage',{
        yPercent:100,
        ease:'none'

      },'<')
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="h-svh flex flex-col justify-end relative overflow-hidden z-0 bg-secondary"
    >
      {/* <MobileHero featuredArtwork={data.featuredArtwork} /> */}
      <ImageCollage data={data} />
      <HeroContent subtitle={data.subtitle} />
    </div>
  );
}
