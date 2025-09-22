"use client";
import Link from "next/link";
import LinkMask from "../LinkMask";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import PAGE_LINKS from "../../lib/PAGE_LINKS";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

function FooterLinkItem({ children }) {
  return (
    <li className="font-medium italic  hover:underline w-fit">{children}</li>
  );
}

function FooterLinkList({ children, title }) {
  return (
    <ul>
      <h3 className=" text-xs">{title}</h3>
      {children}
    </ul>
  );
}

export default function FooterContent({ socialLinks = [], extraLinks = [] }) {
  const container = useRef();

  let pageLinkItems = PAGE_LINKS.map((item, index) => {
    return (
      <FooterLinkItem key={index}>
        <Link href={item.url}>{item.label}</Link>
      </FooterLinkItem>
    );
  });
  let socialLinkItems = socialLinks.map((item, index) => {
    return (
      <FooterLinkItem key={index}>
        <a href={item.url} rel="noopener noreferrer" target="_blank">
          {item.label}
        </a>
      </FooterLinkItem>
    );
  });
  let extraLinkItems = extraLinks.map((item, index) => {
    return (
      <FooterLinkItem key={index}>
        <a
          href={item.linkType === "url" ? item.url : item.fileUrl}
          rel={item.linkType === "url" ? "noopener noreferrer" : ""}
          target={item.linkType === "url" ? "_blank" : "_self"}
          download={item.linkType === "file" ? item.fileName : undefined}
        >
          {item.label}
        </a>
      </FooterLinkItem>
    );
  });

  return (
    <div
      ref={container}
      className="bg-primary text-secondary w-full h-full p-small lg:p-medium  xl:py-medium"
    >
      <div className="layout flex flex-col justify-between w-full h-full ">
        <div className={`footer__header text-xl ${bebasNeue.className}`}>
          moises gante
        </div>
        <div className="footer__content grid grid-rows-2 grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-small gap-y-medium ">
          <FooterLinkList title={"Pages"}>{pageLinkItems}</FooterLinkList>
          <FooterLinkList title={"Socials"}>{socialLinkItems}</FooterLinkList>
          <FooterLinkList title={"Extra"}>{extraLinkItems}</FooterLinkList>

          <div className="relative w-full h-full rounded-md  overflow-clip  ">
            <Image
              unoptimized
              src="/eye.webp"
              alt="eyeball blinking"
              fill
              className=" object-cover hover:mix-blend-difference mix-blend-color-burn  "
            ></Image>
          </div>
        </div>
        <div className="footer__bottom flex justify-between text-xs">
          <span>© 2024 Moises Gante</span>
          <span>
            Page by{" "}
            <a
              className="font-bold italic z-50 cursor-crosshair  "
              href="https://herbart.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              herb
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
