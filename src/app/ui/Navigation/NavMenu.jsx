"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "@/context/LenisContext";
import NavLogo from "./NavLogo";
import { bebasNeue } from "@/app/fonts";

export default function NavMenu({
  menuIsOpen,
  setMenuIsOpen,
  children,
  className = "",
  footerChildren = <></>,
}) {
  const container = useRef();
  const menu = useRef();
  const tl = useRef();
  const { lenis } = useLenis();

  // handle outside click and stop scroll
  useEffect(() => {
    if (menuIsOpen && lenis) {
      openMenu();
      lenis.stop();
    } else if (!menuIsOpen && lenis) {
      closeMenu();
      lenis.start();
    }

    function handleClickOutside(event) {
      if (menuIsOpen && menu.current && !menu.current.contains(event.target)) {
        setMenuIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuIsOpen]);

  // gsap animation to open menu
  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true });
      gsap.set(".nav__menu", {
        clipPath: "polygon(100% 0%,100% 0% , 100% 0%, 100% 0%)",
      });
      gsap.set(container.current, {
        opacity: 0,
        pointerEvents: "none",
      });

      tl.current
        .to(
          container.current,
          {
            opacity: 1,
            pointerEvents: "all",
          },
          "start"
        )
        .to(
          ".nav__menu",
          {
            ease: "power4.out",
            clipPath: "polygon(0% 0%,100% 0% , 100% 100%, 0% 100%)",
            opacity: 1,
          },
          "start"
        );
    },
    { scope: container }
  );

  const openMenu = contextSafe(() => {
    tl.current.play();
  });
  const closeMenu = contextSafe(() => {
    tl.current.timeScale(2).reverse();
  });

  return (
    <menu
      ref={container}
      className={` z-10 opacity-0 cursor-not-allowed nav__menu__container fixed left-0 top-0 w-full  h-dvh bg-black/40 grid  lg:grid-cols-2  sm:justify-end sm:items-end ${className}`}
    >
      <div
        ref={menu}
        className=" rounded-sm nav__menu opacity-0 cursor-default bg-primary text-secondary h-full w-full lg:col-start-2 lg:w-auto sm:w-[450px] flex flex-col "
      >
        <div
          className={`nav__menu__header pl-small h-16 flex items-center justify-between`}
        >
          <NavLogo className={`${bebasNeue.className} lg:text-xl`}></NavLogo>
          <button
            type="button"
            className=" touch-manipulation cursor-pointer self-stretch active:rotate-0 active:scale-95 hover:rotate-8 hover:scale-105 transition-all "
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            <span className="absolute text-transparent">Close</span>
            <X size={48} strokeWidth={1} className=" "></X>
          </button>
        </div>
        <div className={`nav__menu__content grow p-small`}>{children}</div>
        <div className={`nav__menu__footer p-small`}>{footerChildren}</div>
      </div>
    </menu>
  );
}
