import { Fragment } from "react";
import LinkMask from "../LinkMask";

export default function NavMenuFooter({socialLinks = []}){
    console.log(socialLinks)
    let i = 0;

    let socialListItems = socialLinks.map((item, index)=>{
        if(index >= 4) return (<li key={index}></li>);
        return(
            <li key={index}>
                <LinkMask href={item.url} text={item.label}></LinkMask>
            </li>
        )

    })

    return(
        <div className="w-full h-full flex justify-between text-base">
            <span className=" self-end">Madera, CA</span>
            <ul className="socials flex flex-col gap-1 ">
                {socialListItems}
            </ul>

        </div>

    )
}