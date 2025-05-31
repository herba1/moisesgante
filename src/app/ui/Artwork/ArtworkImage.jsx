'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

export default function ArtworkImage({mainImage}){
    const container = useRef();

    const {contextSafe} = useGSAP(()=>{
    },{scope:container.current})

    const handleLoad = contextSafe(()=>{
        gsap.fromTo('.image__container',{
            clipPath:'inset(100% 0 0 0)',
        },{
            clipPath:'inset(0% 0 0 0)',
            ease:'power4.out',
            duration:1,
        })

    })


    let landscape =false; 
    let height = mainImage.asset.metadata.dimensions.height;
    let width = mainImage.asset.metadata.dimensions.width;
    if(width > height){
        // console.log('im landscape');
        landscape = true;
    }



    return(
        <div ref={container} style={{clipPath:'inset(100% 0 0 0)'}} className={`image__container w-full h-svh max-h-svh overflow-clip py-medium relative ${landscape===true?' !h-fit md:!h-svh ':''} `}>
            <Image src={urlFor(mainImage).url()} alt={mainImage.alt} width={width} height={height} onLoad={handleLoad} priority className=" w-full h-full max-w-full max-h-full object-scale-down " ></Image>
        </div>
    )

}