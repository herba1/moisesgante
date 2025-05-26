'use client'
import Link from "next/link";
import LinkMask from "../LinkMask";


export default function FooterContent (){
    return(
        <div className="bg-primary text-secondary w-full h-full p-small">
            <div className="layout flex flex-col justify-between w-full h-full ">
                <div className="footer__header">Thanks for visiting!😆</div>
                <div className="footer__content">
                    <ul>
                        <h3>Pages</h3>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </div>
                <div className="footer__bottom flex justify-between text-base">
                    <span>© 2024 Moises Gante</span>
                    <span>Page by <a className="font-bold italic z-50 cursor-crosshair  " href="https://herbart.dev" rel="noopener noreferrer" target="_blank">herb</a></span>
                </div>

            </div>

        </div>
    )

}