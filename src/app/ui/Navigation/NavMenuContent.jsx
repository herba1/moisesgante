import { bebasNeue } from "@/app/fonts";
import PAGE_LINKS from "@/app/lib/PAGE_LINKS";
import LinkMask from "../LinkMask";

export default function NavMenuContent({ socialLinks,setMenuIsOpen }) {
  let linkItems = PAGE_LINKS.map((item, index) => {
    return (
      <li key={index} onClick={()=>{setMenuIsOpen(false)}} className={`${bebasNeue.className} text-8xl `}>
        <LinkMask  href={item.url} text={item.label}></LinkMask>
      </li>
    );
  });

  return (
    <nav className="h-full w-full flex flex-col justify-center ">
      <ul className=" flex flex-col gap-small row-start-2 col-start-2">
        {linkItems}
      </ul>
    </nav>
  );
}
