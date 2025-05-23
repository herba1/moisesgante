"use client";
import { useRef } from "react";
import { useHeroAnimations } from "./useHeroAnimations";
import ImageCollage from "./ImageCollage";
import HeroContent from "./HeroContent";
import MobileHero from "./MobileHero";

export default function HeroSection({ data }) {
  const container = useRef(null);
  
  // Custom hook handles all animations
  useHeroAnimations(container);

  return (
    <div ref={container} className="h-svh relative overflow-hidden -z-0 bg-secondary">
      <MobileHero featuredArtwork={data.featuredArtwork} />
      <ImageCollage data={data} />
      <HeroContent subtitle={data.subtitle} />
    </div>
  );
}