import { LenisProvider } from "@/context/LenisContext";
import Navbar from "./ui/Navigation/Navbar";
import StickyFooter from "./ui/StickyFooter";
import { inter } from "./fonts";
import FooterContent from "./ui/Footer/FooterContent";
import PageLayout from "./ui/PageLayout";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        <LenisProvider>
          <PageLayout>
            {children}
          </PageLayout>
          {/* <Navbar className=" mix-blend-difference text-base lg:text-xl"></Navbar>
          <main className="relative z-10">
          {children}
          </main>
          <StickyFooter height="600px" >
            <FooterContent></FooterContent>
          </StickyFooter> */}
        </LenisProvider>
      </body>
    </html>
  );
}