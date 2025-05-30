'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

export default function ArtworkImage({mainImage}){
    const container = useRef();

    useGSAP(()=>{

    },{scope:container.current})


    return(
        <div ref={container} className={`image__container relative h-full w-full  overflow-clip flex justify-center items-center `}>
            <Image src={urlFor(mainImage).url()} alt={mainImage.alt} width={500} height={500} className="w-full h-full object-contain " ></Image>
        </div>
    )

}