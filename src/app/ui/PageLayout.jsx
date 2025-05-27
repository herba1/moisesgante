'use client'
import { useRef } from "react"
import Navbar from "./Navigation/Navbar"
import StickyFooter from "./StickyFooter"
import FooterContent from "./Footer/FooterContent"

export default function PageLayout({children}){
    const containerMain = useRef()

    return(
        <div className="page__container ">
            <Navbar className="text-base lg:text-xl"></Navbar>
            <main ref={containerMain} className=" main__container relative z-10">
                {children}
            </main>
            <StickyFooter height="600px">
                <FooterContent triggerRef={containerMain}></FooterContent>
            </StickyFooter>
        </div>
    )

}