"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavLogo from "./NavLogo";
import NavMenuButton from "./NavMenuButton";
import NavPhone from "./NavPhone";
import NavLinks from "./NavLinks";
import NavMenu from "./NavMenu";
import { bebasNeue } from "@/app/fonts";
import NavMenuContent from "./NavMenuContent";
import NavMenuFooter from "./NavMenuFooter"; 

export default function Navbar({
  phoneVisible,
  ctaVisible,
  phone = "559-XXX-XXXX",
  navTriggerElement,
  className = "",
  socialLinks = [],
}) {
  const navContainer = useRef();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const tl = useRef();

  // useEffect(() => {
  //   const navTrigger = contextSafe(() => {
  //     ScrollTrigger.create({
  //       trigger:navTriggerElement.current,
  //       markers:false,
  //       start:"top top",
  //       end:"bottom-=500 top",
  //       onToggle:(self)=>{
  //         if(self.isActive){
  //           navBgShow();
  //         }
  //         else{
  //           navBgHide();
  //         }
  //       },

  //     })
  //   });
  //   navTrigger();
  // });

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap.timeline({
        paused: true,
      });
      tl.current
        .set(".nav__background", {
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          skew: -1,
        })
        .to(
          ".nav__background",
          {
            ease: "power2.inOut",
            duration: 1,
            rotate: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
          "first"
        )
        .to(navContainer.current, {}, "first");
    },
    { scope: navContainer }
  );

  const navBgShow = contextSafe(() => {
    tl.current.play();
  });
  const navBgHide = contextSafe(() => {
    tl.current.reverse();
  });

  return (
    <nav
      ref={navContainer}
      className={` fixed z-20  w-full  nav__container text-white h-14 flex justify-between items-center p-small lg:px-medium lg:py-10  ${className}`}
    >
      {/* nav background */}
      <div className="nav__background  opacity-0 rounded-b-xs  bg-black   left-0 right-0 h-full -z-10 absolute"></div>
      <div className="nav__left">
        <NavLogo className={` ${bebasNeue.className}`} />
      </div>
      <div className="nav__right gap-5 lg:gap-10 flex">
        <NavMenuButton
          setMenuIsOpen={setMenuIsOpen}
          className=" lg:inline-block"
        />
        {phoneVisible && <NavPhone />}
        {ctaVisible && <NavCta />}
        <NavLinks className=" lg:hidden" />
        <NavMenu
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
          className=" sm:p-small lg:px-medium lg:py-medium"
          socialLinks={socialLinks}
          footerChildren={<NavMenuFooter socialLinks={socialLinks}></NavMenuFooter>}
        >
          <NavMenuContent setMenuIsOpen={setMenuIsOpen}></NavMenuContent>
        </NavMenu>
      </div>
    </nav>
  );
}
