
import Link from "next/link";

export default function NavLogo({ className=""}) {
  return (
    <Link href={"/"} className={`nav__logo ${className}`}>
      {/* logo would go in here */}
      <h1 className="">Moises Gante</h1>
    </Link>
  );
}