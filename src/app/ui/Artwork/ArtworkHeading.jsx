'use client'
import { useGSAP } from "@gsap/react"
import SplitText from "gsap/SplitText"
import gsap from "gsap"
import { useRef } from "react"
import { bebasNeue } from "@/app/fonts"
import { useLenis } from "@/context/LenisContext"

export default function ArtworkHeading({year="XXXX", title="Artwork", medium="medium", size='00x00"'}){
    const container = useRef();

    useGSAP(()=>{
        let splits = SplitText.create('.header__text',{type:"lines,chars", mask:'lines'});

        gsap.fromTo(splits.chars,{yPercent:100},{
            yPercent:0,
            ease:'power4.out',
            duration:1,
            stagger:0.015
        })

    },{scope:container.current})


    return(
        <div ref={container} className={`header__container text-primary ${bebasNeue.className} text-xl`}>
            <h3 className={`header__text`}>{year}</h3>
            <h2 className=" header__text text-7xl ">{title}</h2>
            <h3 className="header__text">{medium?medium:'Unknown Medium'}  </h3>
            <h3 className="header__text">{size?size:'00x00"'} </h3>
        </div>
    )

}