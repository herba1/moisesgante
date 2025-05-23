import { LenisProvider } from "@/context/LenisContext";
import Navbar from "./ui/Navigation/Navbar";
import StickyFooter from "./ui/StickyFooter";
import { inter } from "./fonts";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        <LenisProvider>
          <Navbar className=" mix-blend-difference text-base lg:text-xl"></Navbar>
          {children}
          <StickyFooter height="300px"></StickyFooter>
        </LenisProvider>
      </body>
    </html>
  );
}