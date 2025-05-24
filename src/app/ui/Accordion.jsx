'use client'
import { ChevronDown } from "lucide-react";
import { Subtitle } from "./Headings";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function Accordion({title="Accordion",data}){
    // console.log(data);
    const container = useRef()

    data.map(item=>{
        console.log(item);
    })
    const {contextSafe} = useGSAP(()=>{
        gsap.to('.accordion__dropdown',{
            height:'auto',
            

        })
    },)

    return(
        <div ref={container} className="accordion__container">
            <Subtitle text={title}></Subtitle>
            <ul>
                <li>
                    <div className="flex">
                        <span>This is a Question!</span>
                        <ChevronDown></ChevronDown>
                    </div>
                    <div className=" accordion__dropdown bg-red-300/50 h-0 overflow-clip ">
                        <p className=" p-small">This will be an answer!</p>
                    </div>

                </li>


            </ul>

        </div>

    )
}