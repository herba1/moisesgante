import { LenisProvider } from "@/context/LenisContext";
import Navbar from "./ui/Navigation/Navbar";
import StickyFooter from "./ui/StickyFooter";
import { inter } from "./fonts";
import FooterContent from "./ui/Footer/FooterContent";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        <LenisProvider>
          <Navbar className=" mix-blend-difference text-base lg:text-xl"></Navbar>
          <main className="relative z-10">
          {children}
          </main>
          <StickyFooter height="500px" >
            <FooterContent></FooterContent>
          </StickyFooter>
        </LenisProvider>
      </body>
    </html>
  );
}