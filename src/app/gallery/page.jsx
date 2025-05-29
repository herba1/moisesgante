'use client'
import Image from "next/image"
import { inter } from "../fonts"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css/core'

export default function Gallery(){

    return(
    <div id="content" className={`${ inter.className} bg-secondary text-primary `}>
        <main className=" min-h-lvh pt-large ">
            <Splide options={{perPage:1, autoWidth:true, gap:"1rem", drag:'free', snap:'true', padding:{left:"1rem"}, type:'loop' }}>
                <SplideSlide>
                    <div className=" image__container relative w-[80vw] max-w-[360px] ">
                        <img src={"/water.gif"} alt="water" className="w-full h-auto "  ></img>
                    </div>
                </SplideSlide>
            </Splide>

        </main>

    </div>
    )

}