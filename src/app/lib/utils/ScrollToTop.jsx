'use client'
import { useEffect } from "react"
import { useLenis } from "@/context/LenisContext";
import { useLayoutEffect } from "react";

export default function ScrollToTop({children}){
    const{ lenis } = useLenis();

    useLayoutEffect(()=>{
        if(lenis){
            lenis.scrollTo(0,{immediate:true})
        }
    },[lenis])

    return children;
}