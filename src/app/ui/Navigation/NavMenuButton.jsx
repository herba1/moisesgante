
import { Menu} from "lucide-react";

export default function NavMenuButton({ setMenuIsOpen,className="" }) {
  return (
    <button
      onClick={() => {
        setMenuIsOpen(true);
      }}
      type="button"
      className={` touch-manipulation hover:scale-110 hover:scale-y-120 active:scale-95 active:scale-y-90 transition-all cursor-pointer  nav__button--open lg:hidden order-4 ${className}`} 
    >
      <span className="absolute text-transparent">Open</span>
      <Menu className=" " strokeWidth={2}></Menu>
    </button>
  );
}