import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export function useHeroAnimations(container) {
  const textTl = useRef();
  const parralaxTl = useRef();
  const split1 = useRef(null);
  const split2 = useRef(null);
  const split3 = useRef(null);

  const parralaxValues = {
    1: { y: 180, r: 12 },
    2: { y: 150, r: -7 },
    3: { y: 220, r: 1 },
    4: { y: 200, r: -4 },
    5: { y: 240, r: 4 },
    text1: { y: 100, r: 4 },
    text2: { y: 150, r: -2 },
    text3: { y: 200, r: -6 },
  };

  const { contextSafe } = useGSAP(() => {
    // Split text setup
    split1.current = SplitText.create('.heroText1', { type: 'lines,chars', mask: 'lines' });
    split2.current = SplitText.create('.heroText2', { type: 'lines,chars', mask: 'lines' });
    split3.current = SplitText.create('.heroText3', { type: 'lines,chars', mask: 'lines' });
    
    // Timeline setup
    textTl.current = gsap.timeline();
    parralaxTl.current = gsap.timeline({
      ease: 'power1.outIn',
      scrollTrigger: {
        trigger: container.current,
        markers: false,
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      }
    });

    // Initial image setup
    gsap.set('.collage__image', {
      clipPath: 'inset(100% 0% 0% 0%)',
      translateY: -20,
      scale: 1.1,
    });
    gsap.set('.collage__image--mobile__clip', {
      clipPath: 'inset(100% 0% 0% 0%)',
    });

    gsap.set('.heroText1', {
      opacity:100,
    });
    gsap.set('.heroText2', {
      opacity:100,
    });
    gsap.set('.heroText3', {
      opacity:100,
    });
    // Text animations
    textTl.current
      .from(split1.current.chars, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.05,
        ease: 'power3.out'
      }, 'start')
      .from(split2.current.chars, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.05,
        ease: 'power3.out'
      }, 'start+=0.3')
      .from(split3.current.chars, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.01,
        ease: 'power4.out'
      }, 'start+=0.6')
      .to('.collage__image', {
        clipPath: 'inset(0% 0% 0% 0%)',
        translateY: 0,
        scale: 1,
        ease: 'power3.out',
        stagger: 0.2,
      }, 'end-=0.4')
      .to('.collage__image--mobile__clip', {
        clipPath: 'inset(0% 0% 0% 0%)',
        ease: 'power3.out',
      }, 'end')
      .to('.image__mobile__overlay', {
        opacity:100,
        ease: 'power3.out',
      }, 'end')

    // Parallax animations
    parralaxTl.current
      .to('.image1', {
        translateY: `${parralaxValues[1].y}`,
        rotate: `${parralaxValues[1].r}`,
      }, 0)
      .to('.image2', {
        translateY: `${parralaxValues[2].y}`,
        rotate: `${parralaxValues[2].r}`,
      }, 0)
      .to('.image3', {
        translateY: `${parralaxValues[3].y}`,
        rotate: `${parralaxValues[3].r}`,
      }, 0)
      .to('.image4', {
        translateY: `${parralaxValues[4].y}`,
        rotate: `${parralaxValues[4].r}`,
      }, 0)
      .to('.image5', {
        translateY: `${parralaxValues[5].y}`,
        rotate: `${parralaxValues[5].r}`,
      }, 0)
      .to('.heroText1', {
        translateY: `${parralaxValues.text1.y}`,
        rotate: `${parralaxValues.text1.r}`,
        opacity: 0,
      }, 0)
      .to('.heroText2', {
        translateY: `${parralaxValues.text2.y}`,
        rotate: `${parralaxValues.text2.r}`,
        opacity: 0,
      }, 0)
      .to('.heroText3', {
        translateY: `${parralaxValues.text3.y}`,
        rotate: `${parralaxValues.text3.r}`,
        opacity: 0,
      }, 0);

  }, { scope: container });

  return {
    textTl,
    parralaxTl,
    split1,
    split2,
    split3
  };
}