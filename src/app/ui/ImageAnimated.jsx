'use client'
import Image from "next/image"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"

export default function ImageAnimated(props){
    const image = useRef(null);
    useGSAP(()=>{
        gsap.fromTo(image.current,{
            clipPath:'inset(100% 0 0 0)'
        },{
            clipPath:'inset(0% 0 0 0)',
            duration:1,
            delay:0.1,
            ease:'power3.out',
            scrollTrigger:{
                trigger:image.current,
                markers:false,
                start:'top 80%',
                end:'top 80%',
            }
        })
    })
    return(
        <Image ref={image} style={{clipPath:'inset(100% 0 0 0)'}} className={`${props.className}`} {...props} ></Image>
    )

}