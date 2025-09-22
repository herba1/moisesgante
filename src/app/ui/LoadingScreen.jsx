"use client";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useLenis } from "@/context/LenisContext";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";

export default function LoadingScreen() {
  const pathname = usePathname();
  const target = "/";
  const container = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.fonts.ready.then(() => {
        setIsLoading(false);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (isLoading) return;
      gsap.to(container.current, {
        opacity: 0,
        onComplete: () => {
          gsap.set(container.current, {
            display: "none",
          });
        },
      });
    },
    { scope: container.current, dependencies: [isLoading] }
  );

  return (
    <div
      ref={container}
      className={` ${pathname === target ? undefined : "hidden"} h-lvh  w-full  overflow-hidden fixed top-0 left-0 z-50 bg-black`}
    ></div>
  );
}
